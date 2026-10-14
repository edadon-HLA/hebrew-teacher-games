/* Shared exam engine + password gate */
(function () {
  var HASH = window.EXAM_PASS_HASH;
  var KEY = 'examAuth';

  function sha(t) {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(t)).then(function (b) {
      return Array.prototype.map.call(new Uint8Array(b), function (x) { return ('0' + x.toString(16)).slice(-2); }).join('');
    });
  }
  var Auth = {
    sha: sha,
    ok: function () { try { return sessionStorage.getItem(KEY) === HASH; } catch (e) { return false; } },
    login: function (p) {
      return sha(p).then(function (h) {
        if (h === HASH) { try { sessionStorage.setItem(KEY, h); } catch (e) {} return true; }
        return false;
      });
    }
  };
  window.ExamAuth = Auth;

  var norm = function (s) {
    return (s || '').replace(/[֑-ׇ]/g, '').replace(/[׳'’"״.,!?;:\-–()]/g, '').replace(/\s+/g, ' ').trim();
  };
  function h(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function shuffle(a) {
    var b = a.slice(), i, j, t;
    for (var k = 0; k < 5; k++) {
      for (i = b.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); t = b[i]; b[i] = b[j]; b[j] = t; }
      if (b.join('|') !== a.join('|')) break;
    }
    return b;
  }

  /* ---------- speech ---------- */
  function heVoice() {
    var v = (window.speechSynthesis && speechSynthesis.getVoices()) || [];
    for (var i = 0; i < v.length; i++) if (/^(he|iw)/i.test(v[i].lang)) return v[i];
    return null;
  }
  function speak(text) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    var parts = text.replace(/[֑-ׇ]/g, '').split(/(?<=[.!?])\s+/);
    parts.forEach(function (p) {
      if (!p.trim()) return;
      var u = new SpeechSynthesisUtterance(p);
      u.lang = 'he-IL'; u.rate = 0.85;
      var v = heVoice(); if (v) u.voice = v;
      speechSynthesis.speak(u);
    });
  }
  function playButton(text, max) {
    var wrap = h('div', 'noprint');
    var b = h('button', 'play', '🔊 האזנה <span class="en" style="display:inline;color:#dfe4ff">Listen</span>');
    b.type = 'button';
    var info = h('span', 'plays');
    var n = 0;
    function upd() { info.textContent = '(' + (max - n) + ' / ' + max + ')'; }
    upd();
    b.onclick = function () {
      if (n >= max) return;
      n++; upd(); speak(text);
      if (n >= max) b.disabled = true;
    };
    wrap.appendChild(b); wrap.appendChild(info);
    return { el: wrap, lock: function () { b.disabled = true; } };
  }

  /* ---------- item builders ---------- */
  function qHead(it, idx) {
    return '<span class="num">' + idx + '</span>' + (it.q || '');
  }

  function buildType(it, idx) {
    var w = h('div', 'item');
    w.appendChild(h('div', 'q', qHead(it, idx)));
    var inp = h('input', 'txt');
    inp.type = 'text'; inp.autocomplete = 'off'; inp.spellcheck = false; inp.placeholder = 'כתבו כאן / write here';
    w.appendChild(inp);
    return {
      el: w, pts: it.pts,
      done: function () { return !!inp.value.trim(); },
      ok: function () { return it.ans.some(function (a) { return norm(a) === norm(inp.value); }); },
      key: function () { return 'התשובה / Answer: ' + it.ans[0]; },
      lock: function () { inp.disabled = true; }
    };
  }

  function buildChoice(it, idx) {
    var w = h('div', 'item');
    var audio = null;
    if (it.speak) { audio = playButton(it.speak, it.plays || 2); w.appendChild(audio.el); }
    if (it.q) w.appendChild(h('div', 'q', qHead(it, idx)));
    else w.appendChild(h('div', 'q', '<span class="num">' + idx + '</span>'));
    var box = h('div', 'opts' + (it.big ? ' big' : ''));
    var sel = -1, locked = false, btns = [];
    it.options.forEach(function (o, i) {
      var b = h('button', 'opt', o);
      b.type = 'button';
      b.onclick = function () {
        if (locked) return;
        sel = i;
        btns.forEach(function (x, j) { x.classList.toggle('sel', j === i); });
      };
      btns.push(b); box.appendChild(b);
    });
    w.appendChild(box);
    if (it.script) w.appendChild(h('div', 'script', '📄 ' + it.script));
    return {
      el: w, pts: it.pts,
      done: function () { return sel >= 0; },
      ok: function () { return sel === it.ans; },
      key: function () { return null; },
      lock: function () {
        locked = true; if (audio) audio.lock();
        btns[it.ans].classList.add('right');
        if (sel >= 0 && sel !== it.ans) btns[sel].classList.add('wrong');
      }
    };
  }

  function buildOrder(it, idx) {
    var w = h('div', 'item');
    w.appendChild(h('div', 'q', qHead({ q: it.q || 'סַדְּרוּ אֶת הַמִּלִּים לְמִשְׁפָּט / Put the words in order' }, idx)));
    var line = h('div', 'tiles line'), pool = h('div', 'tiles pool');
    var locked = false;
    shuffle(it.words).forEach(function (wd) {
      var t = h('button', 'tile', wd); t.type = 'button';
      t.onclick = function () {
        if (locked) return;
        if (t.parentNode === pool) line.appendChild(t); else pool.appendChild(t);
      };
      pool.appendChild(t);
    });
    w.appendChild(line); w.appendChild(pool);
    return {
      el: w, pts: it.pts,
      done: function () { return line.children.length > 0; },
      ok: function () {
        var s = Array.prototype.map.call(line.children, function (c) { return c.textContent; }).join(' ');
        return norm(s) === norm(it.words.join(' '));
      },
      key: function () { return 'המשפט / Sentence: ' + it.words.join(' ') + '.'; },
      lock: function () { locked = true; }
    };
  }

  function buildRecord(it, idx) {
    var w = h('div', 'item');
    w.appendChild(h('div', 'q', qHead(it, idx)));
    if (it.big) w.appendChild(h('div', 'big-emoji', it.big));
    var rec = h('div', 'rec noprint');
    var start = h('button', 'start', '⏺ הקלטה <span class="en" style="display:inline;color:#ffd9db">Record</span>');
    var stop = h('button', 'stop', '⏹ עצירה <span class="en" style="display:inline;color:#c9d2ea">Stop</span>');
    var status = h('span', 'status');
    var player = h('audio'); player.controls = true; player.className = 'hidden';
    var dl = h('a', 'hidden', '⬇ שמירת הקלטה / Save recording'); dl.style.display = 'inline-block'; dl.style.marginTop = '6px';
    start.type = stop.type = 'button';
    stop.disabled = true;
    var mr = null, chunks = [], stream = null, recorded = false;
    start.onclick = function () {
      if (!navigator.mediaDevices || !window.MediaRecorder) { status.textContent = '⚠ הדפדפן לא תומך בהקלטה / Recording not supported'; return; }
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
        stream = s; chunks = [];
        mr = new MediaRecorder(s);
        mr.ondataavailable = function (e) { if (e.data.size) chunks.push(e.data); };
        mr.onstop = function () {
          var blob = new Blob(chunks, { type: mr.mimeType || 'audio/webm' });
          var url = URL.createObjectURL(blob);
          player.src = url; player.className = '';
          dl.href = url; dl.download = (window.__studentName || 'student') + '-' + it.id + '.webm'; dl.className = '';
          stream.getTracks().forEach(function (t) { t.stop(); });
          recorded = true; status.textContent = '✔ נשמר / Saved';
        };
        mr.start(); start.disabled = true; stop.disabled = false; status.textContent = '● מקליט... / Recording...';
      }).catch(function () { status.textContent = '⚠ אין גישה למיקרופון / No microphone access'; });
    };
    stop.onclick = function () { if (mr && mr.state === 'recording') mr.stop(); start.disabled = false; stop.disabled = true; start.innerHTML = '⏺ הקלטה חוזרת <span class="en" style="display:inline;color:#ffd9db">Record again</span>'; };
    rec.appendChild(start); rec.appendChild(stop); rec.appendChild(status); rec.appendChild(player); rec.appendChild(dl);
    w.appendChild(rec);
    var sc = h('div', 'teacher-score hidden');
    sc.innerHTML = '<b>ציון המורה / Teacher score:</b> ';
    var sel = h('select');
    for (var i = 0; i <= it.pts; i++) sel.appendChild(h('option', null, String(i)));
    sc.appendChild(sel); sc.appendChild(h('span', null, ' / ' + it.pts));
    w.appendChild(sc);
    return {
      el: w, pts: it.pts, manual: true, sel: sel,
      done: function () { return recorded; },
      ok: function () { return false; },
      key: function () { return null; },
      lock: function () { start.disabled = true; stop.disabled = true; sc.classList.remove('hidden'); }
    };
  }

  /* ---------- app ---------- */
  window.ExamApp = {
    run: function (cfg) {
      if (!Auth.ok()) { location.replace('index.html'); return; }
      var root = document.getElementById('exam');
      var all = [];            // {item, sec}
      var secs = [];
      var idx = 0;

      // student name + timer bar
      var nameCard = h('div', 'card namebox');
      nameCard.innerHTML = '<label for="sname">שֵׁם הַתַּלְמִיד/ָה <span class="en" style="display:inline">Student name</span></label>' +
        '<input id="sname" type="text" autocomplete="off">' +
        '<div class="instr" style="margin-top:14px">זְמַן הַמִּבְחָן: ' + cfg.minutes + ' דַּקּוֹת. קוֹרְאִים בְּשֶׁקֶט וְעוֹנִים עַל כָּל הַשְּׁאֵלוֹת.' +
        '<span class="en">Exam time: ' + cfg.minutes + ' minutes. Read carefully and answer every question.</span></div>';
      root.appendChild(nameCard);

      var bar = h('div', 'bar');
      var timer = h('span', 'timer', cfg.minutes + ':00');
      bar.appendChild(h('span', null, '⏱ זְמַן / Time'));
      bar.appendChild(timer);
      var progress = h('span', null, '');
      bar.appendChild(progress);
      root.appendChild(bar);

      var left = cfg.minutes * 60, tick = null, submitted = false;
      function fmt(s) { var m = Math.floor(s / 60), r = s % 60; return m + ':' + (r < 10 ? '0' : '') + r; }
      function startTimer() {
        if (tick) return;
        tick = setInterval(function () {
          if (submitted) return;
          left--;
          timer.textContent = fmt(Math.max(left, 0));
          if (left <= 120) timer.classList.add('low');
          if (left === 0) alert('⏰ הַזְּמַן נִגְמַר! שִׁלְחוּ אֶת הַמִּבְחָן.\nTime is up! Please submit your exam.');
        }, 1000);
      }
      root.addEventListener('input', startTimer);
      root.addEventListener('click', startTimer);

      cfg.sections.forEach(function (sec) {
        var head = h('div', 'sec-head');
        head.innerHTML = '<div><h2>' + sec.he + '</h2><span class="en">' + sec.en + '</span></div><span class="pts">' + sec.pts + ' נְקֻדּוֹת / points</span>';
        root.appendChild(head);
        var secObj = { cfg: sec, items: [] };
        secs.push(secObj);
        sec.parts.forEach(function (part) {
          var card = h('div', 'card part');
          card.appendChild(h('h3', null, part.he + ' <span class="pts">' + part.pts + '</span>'));
          card.appendChild(h('div', 'instr', part.instrHe + '<span class="en">' + part.instrEn + '</span>'));
          if (part.passage) card.appendChild(h('div', 'passage', part.passage));
          if (part.listenWarn) {
            var warn = h('div', 'warn hidden', 'לֹא נִמְצָא קוֹל עִבְרִי בַּמַּחְשֵׁב. בַּקְשׁוּ מֵהַמּוֹרָה לִפְתֹּחַ בְּ-Chrome אוֹ Edge.<span class="en">No Hebrew voice found on this device. Ask the teacher to use Chrome or Edge.</span>');
            card.appendChild(warn);
            setTimeout(function () { if (!heVoice()) warn.classList.remove('hidden'); }, 1500);
          }
          part.items.forEach(function (it) {
            idx++;
            var item = it.kind === 'type' ? buildType(it, idx)
              : it.kind === 'order' ? buildOrder(it, idx)
              : it.kind === 'record' ? buildRecord(it, idx)
              : buildChoice(it, idx);
            card.appendChild(item.el);
            secObj.items.push(item); all.push(item);
          });
          root.appendChild(card);
        });
      });

      var submitCard = h('div', 'card noprint');
      var btn = h('button', 'btn green', '✔ שְׁלִיחַת הַמִּבְחָן <span class="en" style="display:inline;color:#d6f5de">Submit exam</span>');
      btn.type = 'button';
      submitCard.appendChild(btn);
      root.appendChild(submitCard);

      var resBox = h('div');
      root.appendChild(resBox);

      function refreshProgress() {
        var d = all.filter(function (i) { return i.done(); }).length;
        progress.textContent = 'נִגְמַר / Answered: ' + d + '/' + all.length;
      }
      root.addEventListener('click', refreshProgress);
      root.addEventListener('input', refreshProgress);
      refreshProgress();

      btn.onclick = function () {
        var name = document.getElementById('sname').value.trim();
        if (!name) { alert('נָא לִכְתֹּב שֵׁם / Please write your name'); document.getElementById('sname').focus(); return; }
        var missing = all.filter(function (i) { return !i.manual && !i.done(); }).length;
        if (missing && !confirm('יֵשׁ ' + missing + ' שְׁאֵלוֹת בְּלִי תְּשׁוּבָה. לִשְׁלֹחַ בְּכָל זֹאת?\n' + missing + ' questions unanswered. Submit anyway?')) return;
        submitted = true; window.__studentName = name;
        document.getElementById('sname').disabled = true;
        if (window.speechSynthesis) speechSynthesis.cancel();
        root.classList.add('done');
        all.forEach(function (it) {
          if (it.manual) { it.lock(); return; }
          var good = it.ok();
          it.earned = good ? it.pts : 0;
          it.el.classList.add(good ? 'ok' : 'bad');
          it.el.appendChild(h('span', 'mark', good ? '✔' : '✘'));
          if (!good && it.key()) it.el.appendChild(h('div', 'key', it.key()));
          it.lock();
        });
        btn.disabled = true;
        showResult(name);
        document.getElementById('result-card').scrollIntoView({ behavior: 'smooth' });
      };

      function showResult(name) {
        var card = h('div', 'card result'); card.id = 'result-card';
        card.innerHTML = '<h2>הַתּוֹצָאוֹת שֶׁלִּי <span class="en" style="display:inline">My results</span></h2><p><b>' + name.replace(/</g, '&lt;') + '</b> · ' + cfg.title + '</p>';
        var tbl = h('table');
        var rows = '';
        secs.forEach(function (s, i) {
          rows += '<tr><td>' + s.cfg.he + ' · ' + s.cfg.en + '</td><td><b id="sc' + i + '"></b> / ' + s.cfg.pts + (s.items.some(function (x) { return x.manual; }) ? ' <small>(מורה / teacher)</small>' : '') + '</td></tr>';
        });
        tbl.innerHTML = rows;
        card.appendChild(tbl);
        card.appendChild(h('div', 'total', '<span id="total"></span> / 100'));
        card.appendChild(h('p', 'noprint', 'בִּשְׁאֵלוֹת שֶׁל דִּבּוּר, הַמּוֹרָה נוֹתֵן/ת אֶת הַצִּיּוּן.<span class="en">For speaking tasks, the teacher gives the score.</span>'.replace('דִּבּוּר', 'דִּבּוּר')));
        var pr = h('button', 'btn light noprint', '🖨 הדפסה / שמירה כ-PDF <span class="en" style="display:inline">Print / Save as PDF</span>');
        pr.type = 'button'; pr.onclick = function () { window.print(); };
        card.appendChild(pr);
        resBox.appendChild(card);

        function recalc() {
          var total = 0;
          secs.forEach(function (s, i) {
            var sum = 0;
            s.items.forEach(function (it) { sum += it.manual ? parseInt(it.sel.value, 10) || 0 : it.earned || 0; });
            document.getElementById('sc' + i).textContent = sum;
            total += sum;
          });
          document.getElementById('total').textContent = total;
        }
        all.forEach(function (it) { if (it.manual) it.sel.onchange = recalc; });
        recalc();
      }
    }
  };
})();
