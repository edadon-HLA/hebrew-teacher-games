/* Exam core: grading + rendering (used by the student page and the teachers hub). */
window.ExamCore = (function () {
  var C = {};

  /* ---------- helpers ---------- */
  C.norm = function (s) {
    return (s || '').replace(/[֑-ׇ]/g, '').replace(/[׳'’"״.,!?;:\-–()]/g, '').replace(/\s+/g, ' ').trim();
  };
  C.lev = function (a, b) {
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) { d[i] = [i]; }
    for (j = 1; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  };
  C.uid = function () { return 'q' + Math.random().toString(36).slice(2, 9); };
  C.strip = function (html) { var t = document.createElement('div'); t.innerHTML = html || ''; return (t.textContent || '').trim(); };
  function h(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function shuffle(a) {
    var b = a.slice(), i, j, t;
    for (var k = 0; k < 5; k++) {
      for (i = b.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); t = b[i]; b[i] = b[j]; b[j] = t; }
      if (b.join('|') !== a.join('|')) break;
    }
    return b;
  }
  C.defaults = function (cfg) {
    cfg.timeLimit = cfg.timeLimit || { on: true, minutes: 30 };
    cfg.listenLimit = cfg.listenLimit || { on: true, max: 2 };
    if (cfg.spell == null) cfg.spell = 0;
    if (cfg.showScore == null) cfg.showScore = true;
    cfg.sections.forEach(function (s, si) {
      s.id = s.id || 's' + si;
      s.parts.forEach(function (p, pi) {
        p.id = p.id || s.id + 'p' + pi;
        p.items.forEach(function (it, ii) { it.id = it.id || p.id + 'i' + ii; });
      });
    });
    return cfg;
  };
  C.each = function (cfg, fn) {
    cfg.sections.forEach(function (s) { s.parts.forEach(function (p) { p.items.forEach(function (it) { fn(it, p, s); }); }); });
  };

  /* ---------- grading ---------- */
  // returns a fraction 0..1
  C.gradeItem = function (it, ans, spell) {
    if (it.kind === 'record') return 0;
    if (ans == null || ans === '') return 0;
    if (it.kind === 'type') {
      var v = C.norm(ans), best = 99, len = 0;
      (it.ans || []).forEach(function (a) { var n = C.norm(a), d = C.lev(n, v); if (d < best) { best = d; len = n.length; } });
      if (best === 0) return 1;
      if (spell === 1 && best <= 1 && len >= 3) return 0.5;
      if (spell === 2 && best <= 1 && len >= 3) return 1;
      if (spell === 3 && ((best <= 1 && len >= 3) || (best <= 2 && len >= 5))) return 1;
      return 0;
    }
    if (it.kind === 'order') return C.norm((ans || []).join(' ')) === C.norm((it.words || []).join(' ')) ? 1 : 0;
    var right = [].concat(it.ans);
    return right.indexOf(ans) >= 0 ? 1 : 0;
  };
  C.score = function (cfg, answers, manual, spell) {
    manual = manual || {}; answers = answers || {};
    if (spell == null) spell = cfg.spell || 0;
    var items = {}, secs = [], earned = 0, max = 0;
    cfg.sections.forEach(function (s) {
      var se = 0, sm = 0;
      s.parts.forEach(function (p) {
        p.items.forEach(function (it) {
          var pts = Number(it.pts) || 0;
          var auto = Math.round(C.gradeItem(it, answers[it.id], spell) * pts * 100) / 100;
          var e = manual[it.id] != null && manual[it.id] !== '' ? Number(manual[it.id]) : auto;
          items[it.id] = { earned: e, max: pts, auto: auto, manual: manual[it.id] != null && manual[it.id] !== '' };
          se += e; sm += pts;
        });
      });
      secs.push({ id: s.id, he: s.he, en: s.en, earned: Math.round(se * 100) / 100, max: sm });
      earned += se; max += sm;
    });
    var total = max ? Math.round(earned / max * 1000) / 10 : 0;
    return { items: items, secs: secs, earned: Math.round(earned * 100) / 100, max: max, total: total };
  };

  /* ---------- speech / audio ---------- */
  function heVoice() {
    var v = (window.speechSynthesis && speechSynthesis.getVoices()) || [];
    for (var i = 0; i < v.length; i++) if (/^(he|iw)/i.test(v[i].lang)) return v[i];
    return null;
  }
  C.hasHeVoice = heVoice;
  C.tts = function (text) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    text.replace(/[֑-ׇ]/g, '').split(/(?<=[.!?])\s+/).forEach(function (p) {
      if (!p.trim()) return;
      var u = new SpeechSynthesisUtterance(p); u.lang = 'he-IL'; u.rate = 0.85;
      var v = heVoice(); if (v) u.voice = v;
      speechSynthesis.speak(u);
    });
  };
  var curAudio = null;
  C.stopSound = function () { if (curAudio) { curAudio.pause(); curAudio = null; } if (window.speechSynthesis) speechSynthesis.cancel(); };
  C.playSound = function (it, audioMap) {
    C.stopSound();
    var data = it.audioId && audioMap && audioMap[it.audioId];
    if (data) { curAudio = new Audio(data); curAudio.play(); } else if (it.speak) C.tts(it.speak);
  };

  /* ---------- builders ---------- */
  function qHead(it, idx) { return '<span class="num">' + idx + '</span>' + (it.q || ''); }
  var EN = function (t) { return '<span class="en" style="display:inline">' + t + '</span>'; };

  function playBtn(it, o, audioMap, review) {
    var wrap = h('div', 'noprint');
    var b = h('button', 'play', '🔊 האזנה ' + EN('Listen')); b.type = 'button';
    var info = h('span', 'plays'); var n = 0;
    var lim = o.cfg.listenLimit && o.cfg.listenLimit.on ? (o.cfg.listenLimit.max || 1) : 0;
    function upd() { info.textContent = lim ? '(' + (lim - n) + ' / ' + lim + ')' : ''; }
    upd();
    b.onclick = function () {
      if (lim && n >= lim) return;
      n++; upd(); C.playSound(it, audioMap);
      if (lim && n >= lim) b.disabled = true;
    };
    wrap.appendChild(b); wrap.appendChild(info);
    return { el: wrap, lock: function (keep) { if (!keep) b.disabled = true; } };
  }

  function buildType(it, idx) {
    var w = h('div', 'item'); w.appendChild(h('div', 'q', qHead(it, idx)));
    var inp = h('input', 'txt'); inp.type = 'text'; inp.autocomplete = 'off'; inp.spellcheck = false; inp.placeholder = 'כתבו כאן / write here';
    w.appendChild(inp);
    return {
      el: w, def: it,
      getAnswer: function () { return inp.value.trim(); }, setAnswer: function (v) { inp.value = v || ''; },
      done: function () { return !!inp.value.trim(); },
      key: function () { return 'התשובה / Answer: ' + (it.ans || [])[0]; },
      lock: function () { inp.disabled = true; }
    };
  }

  function buildChoice(it, idx, o) {
    var w = h('div', 'item'), audio = null;
    if (it.speak || it.audioId) { audio = playBtn(it, o, o.audio); w.appendChild(audio.el); }
    w.appendChild(h('div', 'q', it.q ? qHead(it, idx) : '<span class="num">' + idx + '</span>'));
    var box = h('div', 'opts' + (it.big ? ' big' : '')); var sel = -1, locked = false, btns = [];
    (it.options || []).forEach(function (op, i) {
      var b = h('button', 'opt', op); b.type = 'button';
      b.onclick = function () { if (locked) return; sel = i; btns.forEach(function (x, j) { x.classList.toggle('sel', j === i); }); };
      btns.push(b); box.appendChild(b);
    });
    w.appendChild(box);
    if (it.script) w.appendChild(h('div', 'script', '📄 ' + it.script));
    return {
      el: w, def: it,
      getAnswer: function () { return sel >= 0 ? sel : null; },
      setAnswer: function (v) { sel = v == null ? -1 : v; btns.forEach(function (x, j) { x.classList.toggle('sel', j === sel); }); },
      done: function () { return sel >= 0; },
      key: function () { return null; },
      lock: function () {
        locked = true; if (audio) audio.lock(o.mode === 'review');
        [].concat(it.ans).forEach(function (a) { if (btns[a]) btns[a].classList.add('right'); });
        if (sel >= 0 && [].concat(it.ans).indexOf(sel) < 0) btns[sel].classList.add('wrong');
      }
    };
  }

  function buildOrder(it, idx) {
    var w = h('div', 'item');
    w.appendChild(h('div', 'q', qHead({ q: it.q || 'סַדְּרוּ אֶת הַמִּלִּים לְמִשְׁפָּט ' + EN('Put the words in order') }, idx)));
    var line = h('div', 'tiles line'), pool = h('div', 'tiles pool'); var locked = false;
    function mk(wd) {
      var t = h('button', 'tile'); t.type = 'button'; t.textContent = wd;
      t.onclick = function () { if (locked) return; if (t.parentNode === pool) line.appendChild(t); else pool.appendChild(t); };
      return t;
    }
    shuffle(it.words || []).forEach(function (wd) { pool.appendChild(mk(wd)); });
    w.appendChild(line); w.appendChild(pool);
    return {
      el: w, def: it,
      getAnswer: function () { return [].map.call(line.children, function (c) { return c.textContent; }); },
      setAnswer: function (v) { line.innerHTML = ''; pool.innerHTML = ''; (v || []).forEach(function (wd) { line.appendChild(mk(wd)); }); },
      done: function () { return line.children.length > 0; },
      key: function () { return 'המשפט / Sentence: ' + (it.words || []).join(' ') + '.'; },
      lock: function () { locked = true; }
    };
  }

  function buildRecord(it, idx, o) {
    var w = h('div', 'item'); w.appendChild(h('div', 'q', qHead(it, idx)));
    if (it.big) w.appendChild(h('div', 'big-emoji', it.big));
    var rec = h('div', 'rec noprint');
    var start = h('button', 'start', '⏺ הקלטה ' + EN('Record')), stop = h('button', 'stop', '⏹ עצירה ' + EN('Stop'));
    var status = h('span', 'status'); var player = h('audio'); player.controls = true; player.className = 'hidden';
    start.type = stop.type = 'button'; stop.disabled = true;
    var mr = null, chunks = [], stream = null, blob = null, timeout = null;
    function finish() { clearTimeout(timeout); if (mr && mr.state === 'recording') mr.stop(); start.disabled = false; stop.disabled = true; start.innerHTML = '⏺ הקלטה חוזרת ' + EN('Record again'); }
    start.onclick = function () {
      if (!navigator.mediaDevices || !window.MediaRecorder) { status.textContent = '⚠ הדפדפן לא תומך בהקלטה / Recording not supported'; return; }
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
        stream = s; chunks = [];
        mr = new MediaRecorder(s, { audioBitsPerSecond: 24000 });
        mr.ondataavailable = function (e) { if (e.data.size) chunks.push(e.data); };
        mr.onstop = function () {
          blob = new Blob(chunks, { type: mr.mimeType || 'audio/webm' });
          player.src = URL.createObjectURL(blob); player.className = '';
          stream.getTracks().forEach(function (t) { t.stop(); }); status.textContent = '✔ נשמר / Saved';
        };
        mr.start(); start.disabled = true; stop.disabled = false; status.textContent = '● מקליט... / Recording... (max 60s)';
        timeout = setTimeout(finish, 60000);
      }).catch(function () { status.textContent = '⚠ אין גישה למיקרופון / No microphone access'; });
    };
    stop.onclick = finish;
    rec.appendChild(start); rec.appendChild(stop); rec.appendChild(status); rec.appendChild(player); w.appendChild(rec);
    return {
      el: w, def: it,
      getAnswer: function () { return null; }, setAnswer: function () {},
      getBlob: function () { return blob; },
      setAudio: function (data) { if (data) { player.src = data; player.className = ''; } else { player.className = 'hidden'; w.appendChild(h('div', 'key', 'אין הקלטה / No recording')); } },
      done: function () { return !!blob; }, key: function () { return null; },
      lock: function () { start.disabled = true; stop.disabled = true; if (o.mode === 'review') rec.classList.remove('noprint'); if (o.mode === 'review') { start.className = 'hidden'; stop.className = 'hidden'; } }
    };
  }

  /* ---------- render ---------- */
  // opts: {cfg, mode:'take'|'review', audio:{id:dataURL}}
  C.render = function (root, cfg, opts) {
    opts = opts || {}; opts.cfg = cfg; opts.mode = opts.mode || 'take';
    var all = [], idx = 0, secEls = [];
    cfg.sections.forEach(function (sec) {
      var head = h('div', 'sec-head');
      head.innerHTML = '<div><h2>' + sec.he + '</h2><span class="en">' + sec.en + '</span></div><span class="pts" data-sec="' + sec.id + '"></span>';
      root.appendChild(head); secEls.push(head);
      sec.parts.forEach(function (part) {
        var card = h('div', 'card part');
        card.appendChild(h('h3', null, part.he));
        card.appendChild(h('div', 'instr', part.instrHe + '<span class="en">' + (part.instrEn || '') + '</span>'));
        if (part.passage) card.appendChild(h('div', 'passage', part.passage));
        if (opts.mode === 'take' && part.items.some(function (i) { return i.speak || i.audioId; })) {
          var warn = h('div', 'warn hidden', 'לֹא נִמְצָא קוֹל עִבְרִי בַּמַּחְשֵׁב. בַּקְשׁוּ מֵהַמּוֹרָה לִפְתֹּחַ בְּ-Chrome אוֹ Edge.<span class="en">No Hebrew voice found on this device. Ask the teacher to use Chrome or Edge.</span>');
          card.appendChild(warn);
          if (part.items.some(function (i) { return i.speak && !i.audioId; })) setTimeout(function () { if (!heVoice()) warn.classList.remove('hidden'); }, 1500);
        }
        part.items.forEach(function (it) {
          idx++;
          var ctl = it.kind === 'type' ? buildType(it, idx) : it.kind === 'order' ? buildOrder(it, idx) : it.kind === 'record' ? buildRecord(it, idx, opts) : buildChoice(it, idx, opts);
          card.appendChild(ctl.el); all.push(ctl);
        });
        root.appendChild(card);
      });
    });
    return {
      items: all,
      answers: function () { var a = {}; all.forEach(function (c) { var v = c.getAnswer(); if (v != null) a[c.def.id] = v; }); return a; },
      doneCount: function () { return all.filter(function (c) { return c.done(); }).length; },
      lockAll: function () { all.forEach(function (c) { c.lock(); }); }
    };
  };

  // Mark each rendered item with its score (review/after submit). onScore(id, value) makes the score editable.
  C.mark = function (r, res, editable, onScore) {
    r.items.forEach(function (c) {
      var s = res.items[c.def.id]; if (!s) return;
      var good = s.earned >= s.max && s.max > 0, part = s.earned > 0 && !good;
      c.el.classList.remove('ok', 'bad', 'part');
      c.el.classList.add(good ? 'ok' : part ? 'partial' : 'bad');
      var old = c.el.querySelector('.mark,.key,.scorebox'); while (old) { old.remove(); old = c.el.querySelector('.mark,.key,.scorebox'); }
      c.el.appendChild(h('span', 'mark', good ? '✔' : part ? '◐' : '✘'));
      if (!good && c.key() && c.def.kind !== 'record') c.el.appendChild(h('div', 'key', c.key()));
      if (editable) {
        var b = h('div', 'scorebox noprint');
        b.innerHTML = 'ניקוד / Score: <input type="number" min="0" step="0.5" max="' + s.max + '" value="' + s.earned + '"> / ' + s.max + (s.manual ? ' <small>✎ ידני / manual</small>' : '');
        b.querySelector('input').onchange = function () { onScore(c.def.id, this.value === '' ? null : Math.max(0, Math.min(s.max, parseFloat(this.value)))); };
        c.el.appendChild(b);
      }
    });
    document.querySelectorAll('[data-sec]').forEach(function (e) {
      var sc = res.secs.filter(function (s) { return s.id === e.getAttribute('data-sec'); })[0];
      if (sc) e.textContent = sc.earned + ' / ' + sc.max;
    });
  };

  return C;
})();
