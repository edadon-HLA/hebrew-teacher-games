/* Niflaot lessons page — dates and manual lessons.
 * Loaded by niflaot-lessons/index.html after gate.js. Once the visitor is let in (owner or someone on the niflaotAccess list):
 *  1. every lesson card gets a date box next to it (Monday–Thursday). Stored in Firestore, collection "niflaotSchedule",
 *     one document per lesson (id = page file name without ".html", or "c-<id>" for a manual lesson); the weekday under the
 *     title is worked out from the date.
 *  2. "➕ הוספת שיעור" buttons between the cards add a manual lesson (title, notes for the teacher, links). Stored in
 *     collection "niflaotCustom": { title, notes, links:[{label,url}], after, n }. "after" is the id of the interactive lesson
 *     it sits behind ("top" = before the first one) and "n" orders the manual lessons that share the same "after". */
(function () {
  'use strict';
  var d = document, SCOL = 'niflaotSchedule', CCOL = 'niflaotCustom', started = false, user = null, sched = {}, custom = {};
  var DAYS = { 1: 'יוֹם שֵׁנִי', 2: 'יוֹם שְׁלִישִׁי', 3: 'יוֹם רְבִיעִי', 4: 'יוֹם חֲמִישִׁי' };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var fmt = function (iso) { var p = iso.split('-'); return p[2] + '.' + p[1] + '.' + p[0]; };
  var weekday = function (iso) { var p = iso.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]).getDay(); }; /* 0 = Sunday */
  var todayIso = function () { var t = new Date(), z = function (n) { return (n < 10 ? '0' : '') + n; }; return t.getFullYear() + '-' + z(t.getMonth() + 1) + '-' + z(t.getDate()); };
  var errText = function (e) { var c = e && e.code || e; return 'שְׁגִיאָה (' + c + ')' + (c === 'permission-denied' ? ' — צָרִיךְ לְפַרְסֵם אֶת כַּלְלֵי Firestore' : ''); };
  function safeUrl(u) {
    u = String(u || '').trim(); if (!u) return '';
    if (!/^https?:\/\//i.test(u)) u = 'https://' + u;
    try { var x = new URL(u); return /^https?:$/.test(x.protocol) ? x.href : ''; } catch (e) { return ''; }
  }
  function linkify(t) {
    return esc(t).replace(/(https?:\/\/[^\s<]+)/g, function (m) {
      var h = safeUrl(m.replace(/&amp;/g, '&')); return h ? '<a href="' + esc(h) + '" target="_blank" rel="noopener">' + m + '</a>' : m;
    });
  }

  var st = d.createElement('style');
  st.textContent =
    '.lw{display:flex;gap:14px;align-items:stretch}.lw > .lesson{flex:1;min-width:0;margin-top:0!important}' +
    '.when{margin:-4px 0 10px;font-size:19px;font-weight:800;color:#2a8bd0}.when.none{color:#9aa3b2;font-weight:600}.when.past{color:#7b8498}.when.today{color:#fff;background:#2f9d55;display:inline-block;border-radius:999px;padding:2px 14px}' +
    '.sched{flex:0 0 210px;background:#fff;border:3px dashed #b7c3d9;border-radius:20px;padding:14px;display:flex;flex-direction:column;gap:8px;justify-content:center;font-family:Arial,sans-serif;direction:rtl}' +
    '.sched label{font-weight:800;color:#18213a}.sched input{font:600 17px Arial,sans-serif;padding:8px;border:2px solid #cfd8e8;border-radius:10px;width:100%}' +
    '.sched .dn{min-height:1.4em;font-weight:800;color:#2f9d55}.sched .dn.bad{color:#c0392b}' +
    '.sched .bt{display:flex;gap:6px}.sched button{flex:1;font:700 15px Arial,sans-serif;border:0;border-radius:10px;padding:8px;cursor:pointer;background:#2a8bd0;color:#fff}.sched button.cl{background:#fff;color:#c0392b;border:2px solid #e8b4b0;flex:0 0 auto}' +
    '.sched .ms{min-height:1.2em;font-size:14px;font-weight:700}' +
    /* manual lessons */
    '.slot{display:flex;justify-content:center;margin:4px 0}.slot button{font:700 14px Arial,sans-serif;color:#59647d;background:none;border:2px dashed #c3cde0;border-radius:999px;padding:3px 16px;cursor:pointer;opacity:.6}.slot button:hover{opacity:1;background:#fff;color:#18213a;border-color:#18213a}' +
    '.lesson.cu{display:block;cursor:default;text-align:right;background:#fffdf5;border-style:dashed}.lesson.cu:hover{transform:none;box-shadow:0 8px 24px rgba(0,0,0,.08)}' +
    '.cu .cu-tag{display:inline-block;background:#fff3d6;border:2px solid #e8b94a;border-radius:999px;padding:2px 12px;font-size:14px;font-weight:800;margin-bottom:8px}' +
    '.cu .cu-notes{white-space:pre-wrap;font-size:18px;line-height:1.7;color:#2b3550;margin:0 0 12px;overflow-wrap:anywhere}.cu .cu-notes a{color:#1e6fb5;font-weight:700}' +
    '.cu .cu-links{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px}.cu .cu-links a{display:inline-block;background:#18213a;color:#fff;text-decoration:none;font-weight:700;border-radius:10px;padding:9px 16px;max-width:100%;overflow-wrap:anywhere}' +
    '.cu .cu-act{display:flex;flex-wrap:wrap;gap:8px}.cu .cu-act button{font:700 15px Arial,sans-serif;background:#fff;border:2px solid #cfd8e8;border-radius:10px;padding:6px 14px;cursor:pointer;color:#18213a}.cu .cu-act button:hover{border-color:#18213a}' +
    '#cu-ed{position:fixed;inset:0;z-index:99990;background:#18213acc;display:flex;align-items:center;justify-content:center;padding:14px;direction:rtl;font-family:Arial,sans-serif}' +
    '#cu-ed .bx{background:#fff;border-radius:22px;max-width:640px;width:100%;max-height:92vh;overflow:auto;padding:20px 22px}' +
    '#cu-ed h3{margin:0 0 12px;font-size:24px}#cu-ed label{display:block;font-weight:800;margin:10px 0 4px}' +
    '#cu-ed input,#cu-ed textarea{width:100%;font:600 17px Arial,sans-serif;padding:9px 12px;border:2px solid #cfd8e8;border-radius:12px}#cu-ed textarea{min-height:150px;resize:vertical}' +
    '#cu-ed .lk{display:flex;gap:6px;margin-bottom:6px}#cu-ed .lk input:first-child{flex:0 0 38%}#cu-ed .lk button{border:0;background:#fbeaea;color:#c0392b;border-radius:10px;font-size:16px;cursor:pointer;padding:0 12px}' +
    '#cu-ed .row{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}#cu-ed .row button{font:700 17px Arial,sans-serif;border:0;border-radius:12px;padding:10px 22px;cursor:pointer;background:#2f9d55;color:#fff}' +
    '#cu-ed .row .gh{background:#fff;color:#18213a;border:2px solid #cfd8e8}#cu-ed .row .dl{background:#fff;color:#c0392b;border:2px solid #e8b4b0;margin-inline-start:auto}#cu-ed .er{color:#c0392b;font-weight:700;min-height:1.2em;margin-top:8px}' +
    '@media(max-width:700px){.lw{flex-direction:column}.sched{flex:none}}@media print{.sched,.slot{display:none}}';
  (d.head || d.documentElement).appendChild(st);

  /* ---------- the date box ---------- */
  function lessonId(a) { return (a.getAttribute('href') || '').replace(/^.*\//, '').replace(/\.html.*$/, ''); }
  function preview(w) {
    var v = w.querySelector('.sched input').value, dn = w.querySelector('.dn');
    if (!v) { dn.textContent = ''; dn.className = 'dn'; return true; }
    if (DAYS[weekday(v)]) { dn.textContent = DAYS[weekday(v)]; dn.className = 'dn'; return true; }
    dn.textContent = 'בַּחֲרוּ יוֹם שֵׁנִי עַד חֲמִישִׁי'; dn.className = 'dn bad'; return false;
  }
  function paint() {
    d.querySelectorAll('.lw').forEach(function (w) {
      var id = w.dataset.id, r = sched[id], el = w.querySelector('.when'), inp = w.querySelector('.sched input');
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
  function attachSched(w, id) {
    var h = w.querySelector('h2'), when = d.createElement('div'); when.className = 'when none'; h.parentNode.insertBefore(when, h.nextSibling);
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
      DB.set(SCOL, id, rec).then(function () { sched[id] = rec; paint(); say(w, '✓ נִשְׁמַר', true); }).catch(function (e) { say(w, errText(e), false); });
    };
    s.querySelector('.cl').onclick = function () {
      if (!sched[id]) { inp.value = ''; preview(w); return; }
      DB.del(SCOL, id).then(function () { delete sched[id]; inp.value = ''; paint(); say(w, 'הַמּוֹעֵד נִמְחַק', true); }).catch(function (e) { say(w, errText(e), false); });
    };
  }

  /* ---------- manual lessons ---------- */
  var main = null;
  function statics() { return [].slice.call(d.querySelectorAll('.lw:not(.cu)')); }
  function groupOf(after) {
    return Object.keys(custom).map(function (k) { return custom[k]; }).filter(function (c) { return c.after === after; }).sort(function (a, b) { return a.n - b.n; });
  }
  /* the page order as a flat list: [{s: staticId} | {c: doc}] */
  function flat() {
    var out = [], ids = statics().map(function (w) { return w.dataset.id; });
    groupOf('top').forEach(function (c) { out.push({ c: c }); });
    ids.forEach(function (id) { out.push({ s: id }); groupOf(id).forEach(function (c) { out.push({ c: c }); }); });
    /* manual lessons whose anchor no longer exists go to the end */
    Object.keys(custom).map(function (k) { return custom[k]; }).filter(function (c) { return c.after !== 'top' && ids.indexOf(c.after) < 0; }).forEach(function (c) { out.push({ c: c }); });
    return out;
  }
  function cardHtml(c) {
    var links = (c.links || []).map(function (l) { var u = safeUrl(l.url); if (!u) return ''; var lab = l.label || u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/.*$/, ''); return '<a href="' + esc(u) + '" target="_blank" rel="noopener">🔗 ' + esc(lab) + '</a>'; }).join('');
    return '<div class="lesson cu"><div class="lesson-content"><span class="cu-tag">📝 שִׁעוּר יָדָנִי</span><h2>' + esc(c.title) + '</h2>' +
      (c.notes ? '<div class="cu-notes">' + linkify(c.notes) + '</div>' : '') + (links ? '<div class="cu-links">' + links + '</div>' : '') +
      '<div class="cu-act"><button type="button" data-a="edit">✏️ עֲרִיכָה</button><button type="button" data-a="up" aria-label="הזזה למעלה">▲ לְמַעְלָה</button><button type="button" data-a="down" aria-label="הזזה למטה">▼ לְמַטָּה</button></div></div></div>';
  }
  function saveDoc(c) { return DB.set(CCOL, c._id, { title: c.title, notes: c.notes, links: c.links, after: c.after, n: c.n, createdBy: c.createdBy || '', updatedBy: user && user.email || '', updatedAt: new Date().toISOString() }); }
  function move(c, dir) {
    var L = flat(), i = L.findIndex(function (x) { return x.c && x.c._id === c._id; }), j = i + dir; if (j < 0 || j >= L.length) return;
    var o = L[j], ids = statics().map(function (w) { return w.dataset.id; }), jobs;
    if (o.c && o.c.after === c.after) { var t = c.n; c.n = o.c.n; o.c.n = t; jobs = [saveDoc(c), saveDoc(o.c)]; }
    else if (o.c) { return; }
    else {
      var k = ids.indexOf(o.s);
      if (dir < 0) { c.after = k > 0 ? ids[k - 1] : 'top'; var g = groupOf(c.after).filter(function (x) { return x._id !== c._id; }); c.n = g.length ? g[g.length - 1].n + 1 : 0; }
      else { c.after = o.s; var g2 = groupOf(o.s).filter(function (x) { return x._id !== c._id; }); c.n = g2.length ? g2[0].n - 1 : 0; }
      jobs = [saveDoc(c)];
    }
    Promise.all(jobs).then(renderCustom).catch(function (e) { alert(errText(e)); });
  }
  function renderCustom() {
    d.querySelectorAll('.lw.cu,.slot').forEach(function (e) { e.remove(); });
    var back = main.querySelector('a.back'), L = flat(), prevItem = null;
    var addSlot = function (item) {
      var s = d.createElement('div'); s.className = 'slot'; s.innerHTML = '<button type="button">➕ הוספת שיעור כאן</button>';
      s.querySelector('button').onclick = function () { openEditor(null, item); }; main.insertBefore(s, back);
    };
    addSlot(null);
    L.forEach(function (item) {
      if (item.s) { var w = main.querySelector('.lw[data-id="' + item.s + '"]'); main.insertBefore(w, back); }
      else {
        var c = item.c, w2 = d.createElement('div'); w2.className = 'lw cu'; w2.dataset.id = 'c-' + c._id; w2.innerHTML = cardHtml(c); main.insertBefore(w2, back);
        attachSched(w2, 'c-' + c._id);
        w2.querySelector('[data-a="edit"]').onclick = function () { openEditor(c); };
        w2.querySelector('[data-a="up"]').onclick = function () { move(c, -1); };
        w2.querySelector('[data-a="down"]').onclick = function () { move(c, 1); };
      }
      addSlot(item);
    });
    paint();
  }
  function openEditor(c, afterItem) {
    var isNew = !c, ed = d.createElement('div'); ed.id = 'cu-ed';
    var links = (c && c.links && c.links.length ? c.links : [{ label: '', url: '' }]);
    ed.innerHTML = '<div class="bx" role="dialog" aria-label="שיעור ידני"><h3>' + (isNew ? '➕ שִׁעוּר חָדָשׁ' : '✏️ עֲרִיכַת שִׁעוּר') + '</h3>' +
      '<label for="cu-t">כּוֹתֶרֶת</label><input id="cu-t" type="text" maxlength="120" placeholder="לְמָשָׁל: שִׁעוּר חִזּוּק / חֲזָרָה / טִיּוּל">' +
      '<label for="cu-n">הֶעָרוֹת לַמּוֹרֶה</label><textarea id="cu-n" placeholder="רַעְיוֹנוֹת, צְעָדִים, חֻמְרֵי עֵזֶר… (קִשּׁוּרִים שֶׁנִּכְתָּבִים כָּאן יִהְיוּ לְחִיצִים)"></textarea>' +
      '<label>קִשּׁוּרִים</label><div id="cu-l"></div><button type="button" id="cu-al" class="gh" style="font:700 15px Arial,sans-serif;border:2px solid #cfd8e8;background:#fff;border-radius:10px;padding:6px 14px;cursor:pointer">➕ עוֹד קִשּׁוּר</button>' +
      '<div class="er" id="cu-er"></div><div class="row"><button type="button" id="cu-sv">✓ שְׁמִירָה</button><button type="button" class="gh" id="cu-cn">בִּטּוּל</button>' + (isNew ? '' : '<button type="button" class="dl" id="cu-dl">🗑 מְחִיקָה</button>') + '</div></div>';
    d.body.appendChild(ed);
    var q = function (id) { return d.getElementById(id); }, lbox = q('cu-l');
    var addRow = function (l) { var r = d.createElement('div'); r.className = 'lk'; r.innerHTML = '<input type="text" placeholder="שֵׁם (לֹא חוֹבָה)" aria-label="שם הקישור"><input type="text" dir="ltr" placeholder="https://…" aria-label="כתובת"><button type="button" aria-label="הסרה">✕</button>';
      r.children[0].value = l.label || ''; r.children[1].value = l.url || ''; r.children[2].onclick = function () { r.remove(); }; lbox.appendChild(r); };
    links.forEach(addRow); q('cu-al').onclick = function () { addRow({}); };
    if (c) { q('cu-t').value = c.title; q('cu-n').value = c.notes || ''; }
    var close = function () { ed.remove(); }; q('cu-cn').onclick = close; ed.addEventListener('click', function (e) { if (e.target === ed) close(); });
    q('cu-t').focus();
    q('cu-sv').onclick = function () {
      var title = q('cu-t').value.trim(); if (!title) { q('cu-er').textContent = 'חֲסֵרָה כּוֹתֶרֶת'; return; }
      var ls = [].slice.call(lbox.children).map(function (r) { return { label: r.children[0].value.trim(), url: safeUrl(r.children[1].value) }; }).filter(function (l) { return l.url; });
      var doc = c || { _id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), createdBy: user && user.email || '' };
      doc.title = title; doc.notes = q('cu-n').value.trim(); doc.links = ls;
      if (isNew) {
        var prev = afterItem, after, n, g;
        if (!prev) { after = 'top'; g = groupOf('top'); n = g.length ? g[0].n - 1 : 0; }
        else if (prev.s) { after = prev.s; g = groupOf(prev.s); n = g.length ? g[0].n - 1 : 0; }
        else { after = prev.c.after; g = groupOf(after); var ix = g.findIndex(function (x) { return x._id === prev.c._id; }); n = g[ix + 1] ? (g[ix].n + g[ix + 1].n) / 2 : g[ix].n + 1; }
        doc.after = after; doc.n = n;
      }
      q('cu-sv').disabled = true;
      saveDoc(doc).then(function () { custom[doc._id] = doc; close(); renderCustom(); })
        .catch(function (e) { q('cu-sv').disabled = false; q('cu-er').textContent = errText(e); });
    };
    if (!isNew) q('cu-dl').onclick = function () {
      if (!confirm('לִמְחֹק אֶת הַשִּׁעוּר "' + c.title + '"?')) return;
      Promise.all([DB.del(CCOL, c._id), sched['c-' + c._id] ? DB.del(SCOL, 'c-' + c._id) : 0]).then(function () { delete custom[c._id]; delete sched['c-' + c._id]; close(); renderCustom(); })
        .catch(function (e) { q('cu-er').textContent = errText(e); });
    };
  }

  /* ---------- start ---------- */
  function build() {
    main = d.querySelector('main'); if (!main) return;
    d.querySelectorAll('a.lesson').forEach(function (a) {
      var id = lessonId(a); if (!id || a.parentNode.classList.contains('lw')) return;
      var w = d.createElement('div'); w.className = 'lw'; w.dataset.id = id; a.parentNode.insertBefore(w, a); w.appendChild(a);
      attachSched(w, id);
    });
    renderCustom();
  }
  function start(u) {
    if (started) return; started = true; user = u; build();
    DB.list(SCOL).then(function (rows) { rows.forEach(function (r) { sched[r._id] = r; }); paint(); })
      .catch(function (e) { var w = d.querySelector('.lw'); if (w) say(w, 'לֹא הִצְלַחְנוּ לִטְעֹן מוֹעֲדִים — ' + errText(e), false); });
    DB.list(CCOL).then(function (rows) { rows.forEach(function (r) { custom[r._id] = r; }); renderCustom(); })
      .catch(function (e) { var w = d.querySelector('.lw'); if (w) say(w, 'לֹא הִצְלַחְנוּ לִטְעֹן שִׁעוּרִים יְדָנִיִּים — ' + errText(e), false); });
  }
  d.addEventListener('nk-unlocked', function (e) { start(e.detail); });
  if (window.NK_USER) start(window.NK_USER);
})();
