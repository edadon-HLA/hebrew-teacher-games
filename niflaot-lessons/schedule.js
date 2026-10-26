/* Niflaot lessons — when is each lesson taught?
 * Loaded by niflaot-lessons/index.html after gate.js. Once the visitor is let in (owner or someone on the niflaotAccess list)
 * every lesson card gets a date box next to it. The date is stored in Firestore (collection "niflaotSchedule", one document per
 * lesson, id = the page file name without ".html") and the weekday shown under the lesson title is worked out from the date.
 * Lessons are taught Monday to Thursday only. */
(function () {
  'use strict';
  var d = document, COL = 'niflaotSchedule', started = false, user = null, data = {};
  var DAYS = { 1: 'יוֹם שֵׁנִי', 2: 'יוֹם שְׁלִישִׁי', 3: 'יוֹם רְבִיעִי', 4: 'יוֹם חֲמִישִׁי' };
  var fmt = function (iso) { var p = iso.split('-'); return p[2] + '.' + p[1] + '.' + p[0]; };
  var weekday = function (iso) { var p = iso.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]).getDay(); }; /* 0 = Sunday */
  var todayIso = function () { var t = new Date(), z = function (n) { return (n < 10 ? '0' : '') + n; }; return t.getFullYear() + '-' + z(t.getMonth() + 1) + '-' + z(t.getDate()); };

  var st = d.createElement('style');
  st.textContent =
    '.lw{display:flex;gap:14px;align-items:stretch}.lw + .lw{margin-top:24px}.lw > .lesson{flex:1;min-width:0;margin-top:0!important}' +
    '.when{margin:-4px 0 10px;font-size:19px;font-weight:800;color:#2a8bd0}.when.none{color:#9aa3b2;font-weight:600}.when.past{color:#7b8498}.when.today{color:#fff;background:#2f9d55;display:inline-block;border-radius:999px;padding:2px 14px}' +
    '.sched{flex:0 0 210px;background:#fff;border:3px dashed #b7c3d9;border-radius:20px;padding:14px;display:flex;flex-direction:column;gap:8px;justify-content:center;font-family:Arial,sans-serif;direction:rtl}' +
    '.sched label{font-weight:800;color:#18213a}.sched input{font:600 17px Arial,sans-serif;padding:8px;border:2px solid #cfd8e8;border-radius:10px;width:100%}' +
    '.sched .dn{min-height:1.4em;font-weight:800;color:#2f9d55}.sched .dn.bad{color:#c0392b}' +
    '.sched .bt{display:flex;gap:6px}.sched button{flex:1;font:700 15px Arial,sans-serif;border:0;border-radius:10px;padding:8px;cursor:pointer;background:#2a8bd0;color:#fff}.sched button.cl{background:#fff;color:#c0392b;border:2px solid #e8b4b0;flex:0 0 auto}' +
    '.sched .ms{min-height:1.2em;font-size:14px;font-weight:700}' +
    '@media(max-width:700px){.lw{flex-direction:column}.sched{flex:none}}@media print{.sched{display:none}}';
  (d.head || d.documentElement).appendChild(st);

  function lessonId(a) { return (a.getAttribute('href') || '').replace(/^.*\//, '').replace(/\.html.*$/, ''); }

  function preview(w) {
    var v = w.querySelector('.sched input').value, dn = w.querySelector('.dn');
    if (!v) { dn.textContent = ''; dn.className = 'dn'; return true; }
    if (DAYS[weekday(v)]) { dn.textContent = DAYS[weekday(v)]; dn.className = 'dn'; return true; }
    dn.textContent = 'בַּחֲרוּ יוֹם שֵׁנִי עַד חֲמִישִׁי'; dn.className = 'dn bad'; return false;
  }
  function paint() {
    d.querySelectorAll('.lw').forEach(function (w) {
      var id = w.dataset.id, r = data[id], el = w.querySelector('.when'), inp = w.querySelector('.sched input');
      if (r && r.date && DAYS[weekday(r.date)]) {
        var t = todayIso(), cls = r.date === t ? ' today' : r.date < t ? ' past' : '';
        el.className = 'when' + cls;
        el.innerHTML = '📅 ' + DAYS[weekday(r.date)] + ' · <span dir="ltr">' + fmt(r.date) + '</span>' + (r.date === t ? ' · הַיּוֹם!' : '');
        if (d.activeElement !== inp) inp.value = r.date;
      } else {
        el.className = 'when none'; el.textContent = 'מוֹעֵד: עוֹד לֹא נִקְבַּע';
        if (d.activeElement !== inp) inp.value = '';
      }
      preview(w);
    });
  }
  function say(w, t, ok) {
    var m = w.querySelector('.ms'); m.textContent = t; m.style.color = ok ? '#2f9d55' : '#c0392b';
    if (ok) setTimeout(function () { if (m.textContent === t) m.textContent = ''; }, 2500);
  }
  var errText = function (e) { var c = e && e.code || e; return 'שְׁגִיאָה (' + c + ')' + (c === 'permission-denied' ? ' — צָרִיךְ לְפַרְסֵם אֶת כַּלְלֵי Firestore' : ''); };

  function build() {
    d.querySelectorAll('a.lesson').forEach(function (a) {
      var id = lessonId(a); if (!id || a.parentNode.classList.contains('lw')) return;
      var w = d.createElement('div'); w.className = 'lw'; w.dataset.id = id; a.parentNode.insertBefore(w, a); w.appendChild(a);
      var h = a.querySelector('h2'), when = d.createElement('div'); when.className = 'when none'; h.parentNode.insertBefore(when, h.nextSibling);
      var s = d.createElement('div'); s.className = 'sched';
      s.innerHTML = '<label>📅 מוֹעֵד הַשִּׁעוּר</label><input type="date" aria-label="תאריך השיעור"><div class="dn"></div>' +
        '<div class="bt"><button class="sv" type="button">שְׁמִירָה</button><button class="cl" type="button" aria-label="ניקוי">✕</button></div><div class="ms"></div>';
      w.appendChild(s);
      var inp = s.querySelector('input');
      inp.oninput = function () { preview(w); };
      s.querySelector('.sv').onclick = function () {
        var v = inp.value; if (!v) { say(w, 'בַּחֲרוּ תַּאֲרִיךְ', false); return; }
        if (!preview(w)) { say(w, 'מְלַמְּדִים רַק בֵּין יוֹם שֵׁנִי לַחֲמִישִׁי', false); return; }
        var rec = { date: v, day: weekday(v), updatedBy: user && user.email || '', updatedAt: new Date().toISOString() };
        DB.set(COL, id, rec).then(function () { data[id] = rec; paint(); say(w, '✓ נִשְׁמַר', true); }).catch(function (e) { say(w, errText(e), false); });
      };
      s.querySelector('.cl').onclick = function () {
        if (!data[id]) { inp.value = ''; preview(w); return; }
        DB.del(COL, id).then(function () { delete data[id]; inp.value = ''; paint(); say(w, 'הַמּוֹעֵד נִמְחַק', true); }).catch(function (e) { say(w, errText(e), false); });
      };
    });
  }
  function start(u) {
    if (started) return; started = true; user = u; build(); paint();
    DB.list(COL).then(function (rows) { rows.forEach(function (r) { data[r._id] = r; }); paint(); })
      .catch(function (e) { var w = d.querySelector('.lw'); if (w) say(w, 'לֹא הִצְלַחְנוּ לִטְעֹן מוֹעֲדִים — ' + errText(e), false); });
  }
  d.addEventListener('nk-unlocked', function (e) { start(e.detail); });
  if (window.NK_USER) start(window.NK_USER);
})();
