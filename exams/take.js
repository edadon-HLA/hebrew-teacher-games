/* Student exam runner */
(function () {
  var q = new URLSearchParams(location.search);
  var code = (q.get('code') || '').toUpperCase();
  var previewId = q.get('preview');
  var root = document.getElementById('exam');
  function msg(t) { root.innerHTML = '<div class="card">' + t + '</div>'; }
  function blobToData(b) { return new Promise(function (ok) { var r = new FileReader(); r.onload = function () { ok(r.result); }; r.readAsDataURL(b); }); }
  var $ = function (t, c, html) { var e = document.createElement(t); if (c) e.className = c; if (html != null) e.innerHTML = html; return e; };
  var EN = function (t) { return '<span class="en" style="display:inline">' + t + '</span>'; };

  function start(codeDoc, examId) {
    return Promise.all([DB.get('examConfigs', examId), DB.list('audio', ['examId', examId])]).then(function (r) {
      var cfg = r[0] || (window.DEFAULT_EXAMS[examId] ? getDefaultExam(examId) : null); if (cfg) cfg = fillEnglish(ExamCore.defaults(cfg));
      if (!cfg) return msg('מִבְחָן לֹא נִמְצָא<span class="en">Exam not found</span>');
      var audio = {}; r[1].forEach(function (a) { audio[a._id] = a.data; });
      run(codeDoc, cfg, audio);
    });
  }

  function run(codeDoc, cfg, audio) {
    root.innerHTML = '';
    document.getElementById('ttl').textContent = cfg.title;
    document.getElementById('sub').textContent = cfg.titleEn || '';
    var name = codeDoc ? (codeDoc.first + ' ' + codeDoc.last).trim() : 'Preview';
    var nameCard = $('div', 'card namebox');
    nameCard.innerHTML = '<label>שֵׁם הַתַּלְמִיד/ָה ' + EN('Student name') + '</label><div style="font-size:24px;font-weight:800">' + name.replace(/</g, '&lt;') + (codeDoc && codeDoc.class ? ' · ' + codeDoc.class : '') + '</div>' +
      '<div class="instr" style="margin-top:14px">' + (cfg.timeLimit.on ? 'זְמַן הַמִּבְחָן: ' + cfg.timeLimit.minutes + ' דַּקּוֹת. ' : 'אֵין הַגְבָּלַת זְמַן. ') + 'קוֹרְאִים בְּשֶׁקֶט וְעוֹנִים עַל כָּל הַשְּׁאֵלוֹת.' +
      '<span class="en">' + (cfg.timeLimit.on ? 'Exam time: ' + cfg.timeLimit.minutes + ' minutes. ' : 'No time limit. ') + 'Read carefully and answer every question.</span></div>' +
      (previewId ? '<div class="warn">מצב תצוגה מקדימה – התוצאות לא יישמרו / Preview mode – nothing is saved</div>' : '');
    root.appendChild(nameCard);

    var bar = $('div', 'bar'), timer = $('span', 'timer', cfg.timeLimit.on ? cfg.timeLimit.minutes + ':00' : '∞'), progress = $('span');
    bar.appendChild($('span', null, '⏱ זְמַן / Time')); bar.appendChild(timer); bar.appendChild(progress); root.appendChild(bar);

    var holder = $('div'); root.appendChild(holder);
    var r = ExamCore.render(holder, cfg, { mode: 'take', audio: audio });
    if (codeDoc && codeDoc.status === 'returned') {
      var saved = {}; try { saved = JSON.parse(codeDoc.savedAnswers || '{}'); } catch (e) {}
      r.items.forEach(function (c) { if (saved[c.def.id] != null) c.setAnswer(saved[c.def.id]); });
      nameCard.insertAdjacentHTML('beforeend', '<div class="warn" style="background:#e8f4ff;border-color:#b5d6f5;color:#14416b">הַמּוֹרָה הֶחְזִירָה אֶת הַמִּבְחָן. אֶפְשָׁר לְהַמְשִׁיךְ מֵהַמָּקוֹם שֶׁעָצַרְתֶּם וְלִשְׁלֹחַ שׁוּב.' + EN('Your teacher returned the exam. Continue where you stopped, then submit again. Speaking answers you already recorded are kept unless you record again.') + '</div>');
    }
    var sc0 = ExamCore.score(cfg, {}, {});
    sc0.secs.forEach(function (s) { var e = holder.querySelector('[data-sec="' + s.id + '"]'); if (e) e.textContent = s.max + ' נְקֻדּוֹת / points'; });

    var sub = $('div', 'card noprint'), btn = $('button', 'btn green', '✔ שְׁלִיחַת הַמִּבְחָן ' + EN('Submit exam')); btn.type = 'button';
    sub.appendChild(btn); root.appendChild(sub);
    var resBox = $('div'); root.appendChild(resBox);

    function refresh() { progress.textContent = 'נִגְמַר / Answered: ' + r.doneCount() + '/' + r.items.length; }
    root.addEventListener('click', refresh); root.addEventListener('input', refresh); refresh();

    var left = cfg.timeLimit.minutes * 60, tick = null, submitted = false;
    function fmt(s) { var m = Math.floor(s / 60), x = s % 60; return m + ':' + (x < 10 ? '0' : '') + x; }
    function startTimer() {
      if (tick || !cfg.timeLimit.on) return;
      tick = setInterval(function () {
        if (submitted) return;
        left--; timer.textContent = fmt(Math.max(left, 0));
        if (left <= 120) timer.classList.add('low');
        if (left <= 0) { clearInterval(tick); alert('⏰ הַזְּמַן נִגְמַר! הַמִּבְחָן נִשְׁלָח.\nTime is up! Your exam is being submitted.'); submit(true); }
      }, 1000);
    }
    root.addEventListener('input', startTimer); root.addEventListener('click', startTimer);

    function submit(force) {
      if (submitted) return;
      var missing = r.items.filter(function (c) { return c.def.kind !== 'record' && !c.done(); }).length;
      if (!force && missing && !confirm('יֵשׁ ' + missing + ' שְׁאֵלוֹת בְּלִי תְּשׁוּבָה. לִשְׁלֹחַ בְּכָל זֹאת?\n' + missing + ' questions unanswered. Submit anyway?')) return;
      submitted = true; btn.disabled = true; ExamCore.stopSound();
      var answers = r.answers(); r.lockAll();
      var res = ExamCore.score(cfg, answers, {});
      ExamCore.mark(r, cfg.showScore ? res : ExamCore.score(cfg, {}, {}), false);
      if (!cfg.showScore) { document.querySelectorAll('.ok,.bad,.partial').forEach(function (e) { e.classList.remove('ok', 'bad', 'partial'); }); document.querySelectorAll('.mark,.key').forEach(function (e) { e.remove(); }); }
      var hwCount = 0;
      r.items.forEach(function (c) {
        if (!ExamCore.isDrawn(answers[c.def.id])) return;
        hwCount++; c.el.classList.remove('ok', 'bad', 'partial');
        [].forEach.call(c.el.querySelectorAll('.mark,.key'), function (e) { e.remove(); });
        if (cfg.showScore) c.el.appendChild($('span', 'mark', '✍'));
      });
      var card = $('div', 'card result'); card.id = 'result-card';
      card.innerHTML = '<h2>הַמִּבְחָן נִשְׁלַח! ✔ ' + EN('Exam submitted') + '</h2>' + (cfg.showScore ? '<p>' + name.replace(/</g, '&lt;') + '</p><div class="total" style="direction:ltr">' + res.total + ' / 100</div><p>' + res.secs.map(function (s) { return s.he + ': ' + s.earned + '/' + s.max; }).join(' · ') + '</p><p class="en">Speaking and any manual items are scored by the teacher.</p>' : '<p>הַמּוֹרָה תַּחֲזִיר אֶת הַצִּיּוּן.' + EN('Your teacher will give you your score.') + '</p>');
      if (hwCount) card.insertAdjacentHTML('beforeend', '<p class="warn" style="background:#fff3cd;border-color:#f0d27a;color:#6b5400">✍ ' + hwCount + ' תְּשׁוּבוֹת כְּתוּבוֹת בְּיָד יִבָּדְקוּ עַל־יְדֵי הַמּוֹרָה.' + EN('handwritten answers will be checked by your teacher, so the score above may go up.') + '</p>');
      resBox.appendChild(card);
      card.scrollIntoView({ behavior: 'smooth' });
      if (previewId || !codeDoc) return;
      var recs = r.items.filter(function (c) { return c.def.kind === 'record' && c.getBlob && c.getBlob(); });
      Promise.all(recs.map(function (c) { return blobToData(c.getBlob()).then(function (d) { return DB.set('recordings', code + '_' + c.def.id, { code: code, itemId: c.def.id, data: d }); }); }))
        .then(function () {
          return DB.set('submissions', code, {
            code: code, examId: cfg.id, first: codeDoc.first, last: codeDoc.last, class: codeDoc.class || '',
            answers: answers, manual: {}, total: res.total, secs: res.secs, earned: res.earned, max: res.max,
            spell: cfg.spell, cfg: JSON.stringify(cfg), submittedAt: new Date().toISOString()
          });
        })
        .then(function () { return DB.update('codes', code, { status: 'submitted', submittedAt: new Date().toISOString() }); })
        .catch(function (e) { card.appendChild($('div', 'warn', 'שְׁגִיאָה בִּשְׁמִירָה – פִּנוּ לַמּוֹרָה / Saving failed – tell your teacher<br><small>' + (e && e.message || e) + '</small>')); });
    }
    btn.onclick = function () { submit(false); };
  }

  if (previewId) { start(null, previewId); return; }
  if (!code) { try { code = sessionStorage.getItem('examCode') || ''; } catch (e) {} }
  if (!code) { msg('אֵין קוֹד. <a href="index.html">חזרה</a>'); return; }
  DB.get('codes', code).then(function (c) {
    if (!c) return msg('קוֹד לֹא נִמְצָא <a href="index.html">חזרה</a>');
    if (c.status === 'submitted') return msg('הַמִּבְחָן כְּבָר נִשְׁלַח.<span class="en">This exam was already submitted.</span>');
    return DB.get("settings", "published").then(function (p) { if ((p || {})[c.examId] === false) return msg("הַמִּבְחָן עֲדַיִן לֹא פָּתוּחַ.<span class=\"en\">This exam is not open yet.</span>"); DB.update("codes", code, { startedAt: c.startedAt || new Date().toISOString() }).catch(function () {}); return start(c, c.examId); });
  }).catch(function (e) { msg('שְׁגִיאָה: ' + (e && e.message || e)); });
})();
