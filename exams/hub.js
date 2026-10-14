/* Teachers hub */
(function () {
  var app = document.getElementById('app'), dlg = document.getElementById('dlg');
  var S = { user: null, role: null, tab: 'exams', exams: {}, students: [], editId: null, E: null, assignExam: 'exam1', resExam: 'exam1', cls: '' };
  var CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var SPELL = ['Strict – spelling must be exact (nikud is always ignored)', 'Half credit for a 1-letter mistake', 'Full credit for a 1-letter mistake', 'Full credit for up to 2-letter mistakes (longer words)'];

  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function $(sel, r) { return (r || document).querySelector(sel); }
  function toast(t) { var e = $('#toast'); e.textContent = t; e.classList.add('on'); setTimeout(function () { e.classList.remove('on'); }, 2200); }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function fail(e) { console.error(e); alert('Error: ' + (e && e.message || e)); }
  function move(arr, i, d) { var j = i + d; if (j < 0 || j >= arr.length) return; var t = arr[i]; arr[i] = arr[j]; arr[j] = t; }
  function fmtDate(s) { if (!s) return ''; var d = new Date(s); return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); }
  function blobToData(b) { return new Promise(function (ok) { var r = new FileReader(); r.onload = function () { ok(r.result); }; r.readAsDataURL(b); }); }
  function printHTML(html) {
    var pa = $('#printArea'); pa.innerHTML = html; document.body.classList.add('printing');
    setTimeout(function () { window.print(); document.body.classList.remove('printing'); pa.innerHTML = ''; }, 50);
  }
  function sheetDownload(name, aoa) {
    var ws = XLSX.utils.aoa_to_sheet(aoa), wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, 'Sheet1'); XLSX.writeFile(wb, name);
  }

  /* ---------- boot / auth ---------- */
  DB.onAuth(function (user) {
    S.user = user;
    if (!user) return loginView();
    $('#who').textContent = user.name + ' · ' + user.email;
    DB.teacherRole().then(function (role) {
      S.role = role;
      if (!role) return noAccess();
      return loadAll().then(function () { shell(); });
    }).catch(fail);
  });
  function demoBar() { return DB.demo ? '<div class="demo">⚠️ <b>DEMO mode</b> – Firebase is not configured yet, so everything is stored only in this browser. See SETUP.md.</div>' : ''; }
  function loginView() {
    $('#who').textContent = '';
    app.innerHTML = demoBar() + '<div class="card gate"><div style="font-size:54px">🔐</div><h2>Teacher login</h2><p class="en" style="text-align:center">Sign in with your school Google account (email).</p><button class="btn" id="login">Sign in with Google</button></div>';
    $('#login').onclick = function () { DB.signIn().catch(fail); };
  }
  function noAccess() {
    app.innerHTML = demoBar() + '<div class="card gate"><h2>No access</h2><p class="en" style="text-align:center"><b>' + esc(S.user.email) + '</b> is not on the teachers list. Ask the owner (' + esc(window.OWNER_NAME) + ') to add your email.</p><button class="btn gray" id="out">Sign out</button></div>';
    $('#out').onclick = function () { DB.signOut(); };
  }
  function loadAll() {
    var ids = window.DEFAULT_EXAM_IDS;
    return Promise.all(ids.map(function (id) { return DB.get('examConfigs', id); })).then(function (cs) {
      ids.forEach(function (id, i) { S.exams[id] = { cfg: ExamCore.defaults(cs[i] || getDefaultExam(id)), custom: !!cs[i] }; });
      return Promise.all([DB.list("students"), DB.get("settings", "published")]);
    }).then(function (r) { S.students = r[0].sort(byName); S.published = r[1] || {}; });
  }
  function byName(a, b) { return (a.class || '').localeCompare(b.class || '') || (a.last || '').localeCompare(b.last || '') || (a.first || '').localeCompare(b.first || ''); }

  function shell() {
    var tabs = [['exams', '📝 Exams'], ['students', '👥 Students'], ['assign', '🎫 Assign & codes'], ['results', '📊 Results & grading']];
    if (S.role === 'owner') tabs.push(['teachers', '👩‍🏫 Teachers']);
    app.innerHTML = demoBar() + '<div class="tabs">' + tabs.map(function (t) { return '<button class="tab' + (S.tab === t[0] ? ' on' : '') + '" data-tab="' + t[0] + '">' + t[1] + '</button>'; }).join('') +
      '<button class="tab" id="out" style="margin-right:auto">Sign out</button></div><div id="view"></div>';
    $('#out').onclick = function () { DB.signOut(); };
    app.querySelectorAll('[data-tab]').forEach(function (b) { b.onclick = function () { S.tab = b.getAttribute('data-tab'); S.editId = null; shell(); }; });
    var v = { exams: examsView, students: studentsView, assign: assignView, results: resultsView, teachers: teachersView }[S.tab];
    v();
  }

  /* ---------- exams list + editor ---------- */
  function examsView() {
    if (S.editId) return editorView();
    var v = $('#view');
    v.innerHTML = '<div class="cards">' + window.DEFAULT_EXAM_IDS.map(function (id) {
      var cfg = S.exams[id].cfg, sc = ExamCore.score(cfg, {}, {});
      return '<div class="examcard" style="cursor:default"><div class="icon">' + (cfg.icon || '📝') + '</div><h2>' + esc(cfg.title) + '</h2><span class="en">' + esc(cfg.titleEn || '') + '</span>' +
        '<p>' + cfg.sections.map(function (s) { return esc(s.en); }).join(' · ') + '<br>' + (cfg.timeLimit.on ? cfg.timeLimit.minutes + ' min' : 'no time limit') + ' · ' + sc.max + ' pts → scaled to 100' + (S.exams[id].custom ? " · <span class=\"tag g\">customized</span>" : "") + " · " + (S.published[id] === false ? "<span class=\"tag r\">not published</span>" : "<span class=\"tag g\">published to students</span>") + '</p>' +
        '<div class="row"><button class="btn sm2" data-edit="' + id + '">✏️ Edit</button><a class="btn sm2 light" style="text-decoration:none" target="_blank" href="take.html?preview=' + id + '">👁 Preview</a>' +
        '<button class="btn sm2 ' + (S.published[id] === false ? "green" : "red") + '" data-pub="' + id + '">' + (S.published[id] === false ? "📢 Publish" : "🚫 Unpublish") + '</button><button class="btn sm2 light" data-go="assign" data-id="' + id + '">🎫 Assign</button><button class="btn sm2 light" data-go="results" data-id="' + id + '">📊 Results</button></div></div>';
    }).join('') + '</div>';
    v.querySelectorAll('[data-edit]').forEach(function (b) { b.onclick = function () { S.editId = b.getAttribute('data-edit'); S.E = clone(S.exams[S.editId].cfg); examsView(); }; });
    v.querySelectorAll("[data-pub]").forEach(function (b) { b.onclick = function () { var id = b.getAttribute("data-pub"); S.published[id] = S.published[id] === false; DB.set("settings", "published", S.published).then(function () { toast(S.published[id] ? "Published ✔" : "Unpublished"); examsView(); }).catch(fail); }; });
    v.querySelectorAll('[data-go]').forEach(function (b) { b.onclick = function () { S.tab = b.getAttribute('data-go'); if (S.tab === 'assign') S.assignExam = b.getAttribute('data-id'); else S.resExam = b.getAttribute('data-id'); shell(); }; });
  }

  function itemSummary(it) {
    var t = ExamCore.strip(it.q) || (it.options ? '[picture]' : '') || (it.words || []).join(' ');
    if (!t && it.speak) t = '🔊 ' + ExamCore.strip(it.speak);
    if (it.kind === 'order') t = '🔀 ' + (it.words || []).join(' ');
    if (it.speak || it.audioId) t = (it.audioId ? '🎙 ' : '🔊 ') + t;
    return esc(t.slice(0, 90));
  }
  function editorView() {
    var E = S.E, v = $('#view');
    var sc = ExamCore.score(E, {}, {});
    var h = '<div class="row"><button class="btn sm2 gray" id="back">← Back</button><h2 style="margin:0">' + esc(E.title) + '</h2></div>';
    h += '<div class="card"><h3>⚙️ Exam settings</h3>' +
      '<div class="row"><label><input type="checkbox" data-set="tl.on"' + (E.timeLimit.on ? ' checked' : '') + '> Apply a time limit</label><label>minutes <input class="sm" type="number" min="1" max="180" data-set="tl.min" value="' + E.timeLimit.minutes + '"></label><span class="en">When time is up the exam is submitted automatically.</span></div>' +
      '<div class="row"><label><input type="checkbox" data-set="ll.on"' + (E.listenLimit.on ? ' checked' : '') + '> Limit how many times students can listen</label><label>max plays <input class="sm" type="number" min="1" max="10" data-set="ll.max" value="' + E.listenLimit.max + '"></label></div>' +
      '<div class="row"><label>Spelling tolerance (typed answers): <select class="sm" data-set="spell">' + SPELL.map(function (s, i) { return '<option value="' + i + '"' + (E.spell === i ? ' selected' : '') + '>' + esc(s) + '</option>'; }).join('') + '</select></label></div>' +
      '<div class="row"><label><input type="checkbox" data-set="show"' + (E.showScore ? ' checked' : '') + '> Show the score to the student right after submitting</label></div>' +
      '<div class="row"><span class="stat">Total points: ' + sc.max + '</span><span class="en">The final grade is always scaled to 100 (earned ÷ total × 100).</span></div></div>';
    h += '<div class="tree">';
    E.sections.forEach(function (s, si) {
      h += '<div class="sec"><div class="h"><b>' + esc(s.en) + ' · ' + esc(s.he) + '</b><span class="tag">' + sc.secs[si].max + ' pts</span>' +
        '<button class="ic" data-a="secUp" data-s="' + si + '">▲</button><button class="ic" data-a="secDown" data-s="' + si + '">▼</button><button class="ic" data-a="secEdit" data-s="' + si + '">✏️</button><button class="ic" data-a="partAdd" data-s="' + si + '">＋ part</button></div>';
      s.parts.forEach(function (p, pi) {
        var tot = p.items.reduce(function (a, it) { return a + (Number(it.pts) || 0); }, 0);
        h += '<div class="part"><div class="h"><b>' + esc(ExamCore.strip(p.he)) + '</b><label>part points <input class="sm" type="number" step="0.5" min="0" style="width:80px" data-a="partPts" data-s="' + si + '" data-p="' + pi + '" value="' + Math.round(tot * 100) / 100 + '"></label>' +
          '<button class="ic" data-a="partUp" data-s="' + si + '" data-p="' + pi + '">▲</button><button class="ic" data-a="partDown" data-s="' + si + '" data-p="' + pi + '">▼</button><button class="ic" data-a="partEdit" data-s="' + si + '" data-p="' + pi + '">✏️</button><button class="ic del" data-a="partDel" data-s="' + si + '" data-p="' + pi + '">🗑</button><button class="ic" data-a="itemAdd" data-s="' + si + '" data-p="' + pi + '">＋ question</button></div>';
        p.items.forEach(function (it, ii) {
          var at = 'data-s="' + si + '" data-p="' + pi + '" data-i="' + ii + '"';
          h += '<div class="it"><span class="kind ' + it.kind + '">' + it.kind + '</span><span class="txt2">' + (ii + 1) + '. ' + itemSummary(it) + '</span>' +
            '<input class="sm" type="number" step="0.5" min="0" style="width:70px" data-a="itemPts" ' + at + ' value="' + (Number(it.pts) || 0) + '" title="points">' +
            '<button class="ic" data-a="itemUp" ' + at + '>▲</button><button class="ic" data-a="itemDown" ' + at + '>▼</button><button class="ic" data-a="itemEdit" ' + at + '>✏️</button><button class="ic del" data-a="itemDel" ' + at + '>🗑</button></div>';
        });
        if (!p.items.length) h += '<div class="it"><i>No questions</i></div>';
        h += '</div>';
      });
      h += '</div>';
    });
    h += '</div><div class="row" style="position:sticky;bottom:10px"><button class="btn green" id="save">💾 Save exam</button><button class="btn gray sm2" id="reset">↺ Reset to original</button><span class="en">Changes apply to students who start the exam after you save.</span></div>';
    v.innerHTML = h;

    $('#back').onclick = function () { if (JSON.stringify(S.E) === JSON.stringify(S.exams[S.editId].cfg) || confirm('Leave without saving?')) { S.editId = null; examsView(); } };
    $('#save').onclick = function () {
      ExamCore.defaults(S.E);
      DB.set('examConfigs', S.editId, S.E).then(function () { S.exams[S.editId] = { cfg: clone(S.E), custom: true }; toast('Saved ✔'); }).catch(fail);
    };
    $('#reset').onclick = function () {
      if (!confirm('Delete all customizations of this exam and return to the original?')) return;
      DB.del('examConfigs', S.editId).then(function () { S.exams[S.editId] = { cfg: getDefaultExam(S.editId), custom: false }; S.E = clone(S.exams[S.editId].cfg); toast('Reset'); editorView(); }).catch(fail);
    };
    v.querySelectorAll('[data-set]').forEach(function (e) {
      e.onchange = function () {
        var k = e.getAttribute('data-set'), val = e.type === 'checkbox' ? e.checked : e.value;
        if (k === 'tl.on') E.timeLimit.on = val; else if (k === 'tl.min') E.timeLimit.minutes = Math.max(1, parseInt(val, 10) || 30);
        else if (k === 'll.on') E.listenLimit.on = val; else if (k === 'll.max') E.listenLimit.max = Math.max(1, parseInt(val, 10) || 2);
        else if (k === 'spell') E.spell = parseInt(val, 10); else if (k === 'show') E.showScore = val;
      };
    });
    v.querySelectorAll('[data-a]').forEach(function (e) {
      var isInput = e.tagName === 'INPUT';
      e[isInput ? 'onchange' : 'onclick'] = function () { act(e); };
    });
  }
  function act(e) {
    var E = S.E, a = e.getAttribute('data-a'), s = +e.getAttribute('data-s'), p = +e.getAttribute('data-p'), i = +e.getAttribute('data-i');
    var sec = E.sections[s], part = sec && sec.parts[p];
    switch (a) {
      case 'secUp': move(E.sections, s, -1); break; case 'secDown': move(E.sections, s, 1); break;
      case 'partUp': move(sec.parts, p, -1); break; case 'partDown': move(sec.parts, p, 1); break;
      case 'itemUp': move(part.items, i, -1); break; case 'itemDown': move(part.items, i, 1); break;
      case 'partDel': if (!confirm('Delete this whole part with its ' + part.items.length + ' questions?')) return; sec.parts.splice(p, 1); break;
      case 'itemDel': if (!confirm('Delete this question?')) return; part.items.splice(i, 1); break;
      case 'itemPts': part.items[i].pts = Math.max(0, parseFloat(e.value) || 0); break;
      case 'partPts':
        var tot = Math.max(0, parseFloat(e.value) || 0), n = part.items.length; if (!n) break;
        var each = Math.floor(tot / n * 100) / 100, used = 0;
        part.items.forEach(function (it, k) { it.pts = k === n - 1 ? Math.round((tot - used) * 100) / 100 : each; used += each; }); break;
      case 'partAdd': sec.parts.push({ id: ExamCore.uid(), he: 'חֵלֶק חָדָשׁ', instrHe: '', instrEn: '', items: [] }); break;
      case 'secEdit': return secDialog(sec);
      case 'partEdit': return partDialog(part);
      case 'itemEdit': return itemDialog(part, part.items[i]);
      case 'itemAdd': return itemDialog(part, null);
    }
    editorView();
  }

  function openDlg(html) { dlg.innerHTML = html; if (!dlg.open) dlg.showModal(); }
  function secDialog(sec) {
    openDlg('<h3>Edit section</h3><div class="field"><label>Hebrew title</label><input class="sm" style="width:100%" id="f1" value="' + esc(sec.he) + '"></div><div class="field"><label>English title</label><input class="sm" style="width:100%" id="f2" value="' + esc(sec.en) + '"></div>' +
      '<div class="row"><button class="btn sm2" id="ok">OK</button><button class="btn sm2 gray" id="no">Cancel</button></div>');
    $('#no').onclick = function () { dlg.close(); };
    $('#ok').onclick = function () { sec.he = $('#f1').value; sec.en = $('#f2').value; dlg.close(); editorView(); };
  }
  function partDialog(part) {
    openDlg('<h3>Edit part</h3><div class="field"><label>Title (Hebrew)</label><input class="sm" style="width:100%" id="f1" value="' + esc(part.he) + '"></div>' +
      '<div class="field"><label>Instructions – Hebrew</label><textarea class="sm" id="f2" rows="2">' + esc(part.instrHe) + '</textarea></div>' +
      '<div class="field"><label>Instructions – English</label><textarea class="sm" id="f3" rows="2" style="direction:ltr">' + esc(part.instrEn) + '</textarea></div>' +
      '<div class="field"><label>Reading text shown above the questions (HTML allowed, optional)</label><textarea class="sm" id="f4" rows="6">' + esc(part.passage || '') + '</textarea></div>' +
      '<div class="row"><button class="btn sm2" id="ok">OK</button><button class="btn sm2 gray" id="no">Cancel</button></div>');
    $('#no').onclick = function () { dlg.close(); };
    $('#ok').onclick = function () { part.he = $('#f1').value; part.instrHe = $('#f2').value; part.instrEn = $('#f3').value; part.passage = $('#f4').value; dlg.close(); editorView(); };
  }

  /* ----- question editor with audio ----- */
  function itemDialog(part, it) {
    var isNew = !it;
    var d = isNew ? { id: ExamCore.uid(), kind: 'choice', q: '', pts: 1, options: ['', '', '', ''], ans: 0 } : clone(it);
    var recorder = null;
    function body() {
      var k = d.kind, h = '<h3>' + (isNew ? 'New question' : 'Edit question') + '</h3>';
      h += '<div class="row"><div class="field"><label>Type</label><select class="sm" id="kind"><option value="choice">Multiple choice / true-false</option><option value="type">Typed answer</option><option value="order">Build a sentence (word order)</option><option value="record">Speaking (student records)</option></select></div>' +
        '<div class="field"><label>Points</label><input class="sm" type="number" step="0.5" min="0" id="pts" value="' + (Number(d.pts) || 0) + '"></div></div>';
      if (k !== 'order') h += '<div class="field"><label>Question text (Hebrew, HTML allowed' + (k === 'choice' ? '; may be empty for picture/listening questions' : '') + ')</label><textarea class="sm" id="q" rows="2">' + esc(d.q) + '</textarea></div>';
      if (k === 'choice') {
        h += '<div class="field"><label>Answer options (one per line; HTML/emoji allowed)</label><textarea class="sm" id="opts" rows="5">' + esc((d.options || []).join('\n')) + '</textarea></div><div class="field"><label>Correct option(s) – tick all that are accepted</label><div id="correct"></div></div>' +
          '<div class="field"><label><input type="checkbox" id="big"' + (d.big ? ' checked' : '') + '> Show options large (for pictures/emoji)</label></div>' +
          '<div class="field"><label>🔊 Listening: text to read aloud (computer voice, used when no recording is chosen)</label><textarea class="sm" id="speak" rows="2">' + esc(d.speak || '') + '</textarea></div>' +
          '<div class="field"><label>Script shown to the student after submitting (optional)</label><textarea class="sm" id="script" rows="2">' + esc(d.script || '') + '</textarea></div>' +
          '<div class="field"><label>🎙 Audio recordings for this question (shared by all teachers)</label><div id="aud">…</div>' +
          '<div class="row"><button class="btn sm2 red" id="rec">⏺ Record my voice</button><button class="btn sm2 gray hidden" id="recstop">⏹ Stop &amp; save</button><span id="recst"></span></div></div>';
      } else if (k === 'type') {
        h += '<div class="field"><label>Accepted answers (one per line, without nikud is fine)</label><textarea class="sm" id="tans" rows="3">' + esc((d.ans || []).join('\n')) + '</textarea></div>';
      } else if (k === 'order') {
        h += '<div class="field"><label>Instruction (optional)</label><input class="sm" style="width:100%" id="q" value="' + esc(d.q || '') + '"></div><div class="field"><label>The correct sentence (words separated by spaces, in the correct order)</label><input class="sm" style="width:100%" id="words" value="' + esc((d.words || []).join(' ')) + '"></div>';
      } else if (k === 'record') {
        h += '<div class="field"><label>Big picture / emoji above the question (optional)</label><input class="sm" id="bigem" value="' + esc(d.big || '') + '"></div><p class="en">You score speaking answers in Results &amp; grading.</p>';
      }
      h += '<div class="row"><button class="btn sm2" id="ok">OK</button><button class="btn sm2 gray" id="no">Cancel</button></div>';
      return h;
    }
    function sync() {
      var g = function (id) { var e = $('#' + id, dlg); return e ? e.value : null; };
      if (g('pts') != null) d.pts = parseFloat(g('pts')) || 0;
      if (g('q') != null) d.q = g('q');
      if (d.kind === 'choice') {
        d.options = g('opts').split('\n').map(function (x) { return x.trim(); }).filter(Boolean);
        d.big = $('#big', dlg).checked; d.speak = g('speak'); d.script = g('script');
        var ticks = [].slice.call(dlg.querySelectorAll('#correct input:checked')).map(function (x) { return +x.value; });
        d.ans = ticks.length > 1 ? ticks : ticks.length ? ticks[0] : -1;
      } else if (d.kind === 'type') d.ans = g('tans').split('\n').map(function (x) { return x.trim(); }).filter(Boolean);
      else if (d.kind === 'order') d.words = g('words').trim().split(/\s+/).filter(Boolean);
      else if (d.kind === 'record') d.big = g('bigem');
    }
    function drawCorrect() {
      var box = $('#correct', dlg); if (!box) return;
      var ops = $('#opts', dlg).value.split('\n').map(function (x) { return x.trim(); }).filter(Boolean), cur = [].concat(d.ans);
      box.innerHTML = ops.map(function (o, i) { return '<label style="margin-left:14px"><input type="checkbox" value="' + i + '"' + (cur.indexOf(i) >= 0 ? ' checked' : '') + '> ' + (i + 1) + '. ' + esc(ExamCore.strip(o) || '[picture]') + '</label>'; }).join('') || '<i>Add options first</i>';
    }
    function drawAudio() {
      var box = $('#aud', dlg); if (!box) return;
      DB.list('audio', ['examId', S.editId]).then(function (all) {
        var mine = all.filter(function (a) { return a.itemId === d.id; });
        box.innerHTML = '<div class="audlist"><div class="r"><input type="radio" name="aud" value=""' + (!d.audioId ? ' checked' : '') + '> <span>💻 Computer voice (from the text above)</span></div>' +
          mine.map(function (a) {
            return '<div class="r"><input type="radio" name="aud" value="' + a._id + '"' + (d.audioId === a._id ? ' checked' : '') + '> <span>🎙 ' + esc(a.teacher) + ' · ' + fmtDate(a.createdAt) + '</span><button class="ic" data-play="' + a._id + '">▶</button>' +
              (S.role === 'owner' || a.email === S.user.email ? '<button class="ic del" data-delaud="' + a._id + '">🗑</button>' : '') + '</div>';
          }).join('') + '</div>';
        box.querySelectorAll('input[name=aud]').forEach(function (r) { r.onchange = function () { d.audioId = r.value || null; }; });
        box.querySelectorAll('[data-play]').forEach(function (b) { b.onclick = function () { var a = mine.filter(function (x) { return x._id === b.getAttribute('data-play'); })[0]; ExamCore.stopSound(); new Audio(a.data).play(); }; });
        box.querySelectorAll('[data-delaud]').forEach(function (b) { b.onclick = function () { var id = b.getAttribute('data-delaud'); if (!confirm('Delete this recording?')) return; if (d.audioId === id) d.audioId = null; DB.del('audio', id).then(drawAudio).catch(fail); }; });
      });
    }
    function bind() {
      $('#kind', dlg).value = d.kind;
      $('#kind', dlg).onchange = function () {
        sync(); d.kind = this.value;
        if (d.kind === 'choice' && !d.options) { d.options = ['', '']; d.ans = 0; }
        if (d.kind === 'type' && !Array.isArray(d.ans)) d.ans = [];
        if (d.kind === 'order' && !d.words) d.words = [];
        dlg.innerHTML = body(); bind();
      };
      if (d.kind === 'choice') {
        drawCorrect(); drawAudio();
        $('#opts', dlg).oninput = function () { sync(); drawCorrect(); };
        $('#rec', dlg).onclick = function () {
          if (!navigator.mediaDevices || !window.MediaRecorder) return alert('Recording is not supported in this browser.');
          navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
            var chunks = []; recorder = new MediaRecorder(stream, { audioBitsPerSecond: 32000 });
            recorder.ondataavailable = function (e) { if (e.data.size) chunks.push(e.data); };
            recorder.onstop = function () {
              stream.getTracks().forEach(function (t) { t.stop(); });
              var blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });
              $('#recst', dlg).textContent = 'Saving…';
              blobToData(blob).then(function (data) {
                if (data.length > 900000) { $('#recst', dlg).textContent = ''; return alert('Recording too long (max about 2 minutes). Please record a shorter one.'); }
                var id = 'a' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
                return DB.set('audio', id, { examId: S.editId, itemId: d.id, teacher: S.user.name, email: S.user.email, createdAt: new Date().toISOString(), data: data })
                  .then(function () { d.audioId = id; $('#recst', dlg).textContent = '✔ Saved and selected'; drawAudio(); });
              }).catch(fail);
            };
            recorder.start(); $('#rec', dlg).classList.add('hidden'); $('#recstop', dlg).classList.remove('hidden'); $('#recst', dlg).textContent = '● Recording…';
          }).catch(function () { alert('No microphone access.'); });
        };
        $('#recstop', dlg).onclick = function () { recorder.stop(); $('#recstop', dlg).classList.add('hidden'); $('#rec', dlg).classList.remove('hidden'); };
      }
      $('#no', dlg).onclick = function () { ExamCore.stopSound(); dlg.close(); if (isNew || true) editorView(); };
      $('#ok', dlg).onclick = function () {
        sync(); ExamCore.stopSound();
        if (d.kind === 'choice') {
          if (d.options.length < 2) return alert('Add at least 2 options.');
          if (d.ans === -1) return alert('Tick the correct option.');
          if (!d.speak) delete d.speak; if (!d.script) delete d.script;
        }
        if (d.kind === 'type' && !d.ans.length) return alert('Add at least one accepted answer.');
        if (d.kind === 'order' && d.words.length < 2) return alert('Write the sentence (at least 2 words).');
        if (d.kind !== 'choice') delete d.audioId;
        if (isNew) part.items.push(d); else part.items[part.items.indexOf(it)] = d;
        dlg.close(); editorView();
      };
    }
    openDlg(body()); bind();
  }

  /* ---------- students ---------- */
  function classes() { var s = {}; S.students.forEach(function (x) { if (x.class) s[x.class] = 1; }); return Object.keys(s).sort(); }
  function clsSelect(id, val) { return '<select class="sm" id="' + id + '"><option value="">All classes</option>' + classes().map(function (c) { return '<option' + (c === val ? ' selected' : '') + '>' + esc(c) + '</option>'; }).join('') + '</select>'; }
  function studentsView() {
    var v = $('#view'), list = S.students.filter(function (x) { return !S.cls || x.class === S.cls; });
    v.innerHTML = '<div class="card"><h3>📥 Upload an Excel file</h3><p class="en">Columns: <b>First name, Last name, Class</b> (first row = headers; Hebrew headers שם פרטי / שם משפחה / כיתה also work). .xlsx, .xls or .csv</p>' +
      '<div class="row"><input type="file" id="xl" accept=".xlsx,.xls,.csv"><button class="btn sm2 light" id="tpl">⬇ Download template</button></div><div id="xlmsg"></div></div>' +
      '<div class="card"><h3>➕ Add one student</h3><div class="row"><input class="sm" id="nf" placeholder="First name"><input class="sm" id="nl" placeholder="Last name"><input class="sm" id="nc" placeholder="Class"><button class="btn sm2" id="add">Add</button></div></div>' +
      '<div class="card"><div class="row"><h3 style="margin:0">Students (' + list.length + ')</h3>' + clsSelect('fcls', S.cls) + '</div><table class="t"><tr><th>First name</th><th>Last name</th><th>Class</th><th></th></tr>' +
      list.map(function (x) { return '<tr><td>' + esc(x.first) + '</td><td>' + esc(x.last) + '</td><td>' + esc(x.class) + '</td><td><button class="ic del" data-del="' + x._id + '">🗑</button></td></tr>'; }).join('') + '</table></div>';
    $('#fcls').onchange = function () { S.cls = this.value; studentsView(); };
    $('#tpl').onclick = function () { sheetDownload('students-template.xlsx', [['First name', 'Last name', 'Class'], ['Dana', 'Cohen', '5A'], ['Noam', 'Levi', '5A']]); };
    $('#add').onclick = function () { saveStudents([{ first: $('#nf').value.trim(), last: $('#nl').value.trim(), class: $('#nc').value.trim() }]); };
    v.querySelectorAll('[data-del]').forEach(function (b) { b.onclick = function () { if (confirm('Remove this student from the list? (existing codes and results stay)')) DB.del('students', b.getAttribute('data-del')).then(function () { S.students = S.students.filter(function (x) { return x._id !== b.getAttribute('data-del'); }); studentsView(); }).catch(fail); }; });
    $('#xl').onchange = function () {
      var f = this.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try {
          var wb = XLSX.read(rd.result, { type: 'array' }), rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, defval: '' });
          var hdr = rows[0].map(function (c) { return String(c).toLowerCase().trim(); });
          function col(re, dflt) { var i = hdr.findIndex(function (c) { return re.test(c); }); return i >= 0 ? i : dflt; }
          var hasHdr = hdr.some(function (c) { return /first|last|class|פרטי|משפחה|כיתה|שם/.test(c); });
          var ci = hasHdr ? { f: col(/first|פרטי/, 0), l: col(/last|family|משפחה/, 1), c: col(/class|כיתה/, 2) } : { f: 0, l: 1, c: 2 };
          var out = rows.slice(hasHdr ? 1 : 0).map(function (r) { return { first: String(r[ci.f] || '').trim(), last: String(r[ci.l] || '').trim(), class: String(r[ci.c] || '').trim() }; }).filter(function (x) { return x.first || x.last; });
          if (!out.length) return alert('No students found in the file.');
          if (confirm('Add ' + out.length + ' students (' + out.slice(0, 3).map(function (x) { return x.first + ' ' + x.last; }).join(', ') + '…)?')) saveStudents(out);
        } catch (e) { fail(e); }
      };
      rd.readAsArrayBuffer(f);
    };
  }
  function saveStudents(arr) {
    arr = arr.filter(function (x) { return x.first || x.last; });
    if (!arr.length) return alert('Enter a name.');
    var ex = {}; S.students.forEach(function (s) { ex[s._id] = 1; });
    Promise.all(arr.map(function (x) {
      var id = (x.first + '_' + x.last + '_' + x.class).toLowerCase().replace(/[^a-z0-9֐-׿_]+/g, '-');
      return DB.set('students', id, x).then(function () { if (!ex[id]) S.students.push(Object.assign({ _id: id }, x)); });
    })).then(function () { S.students.sort(byName); toast('Saved ' + arr.length + ' students'); studentsView(); }).catch(fail);
  }

  /* ---------- assign & codes ---------- */
  function assignView() {
    var v = $('#view'); v.innerHTML = '<div class="card">Loading…</div>';
    Promise.all([DB.list('codes', ['examId', S.assignExam]), DB.list('codes')]).then(function (r) {
      var codes = {}, used = {}; r[0].forEach(function (c) { codes[c.studentId] = c; }); r[1].forEach(function (c) { used[c._id] = 1; });
      var list = S.students.filter(function (x) { return !S.cls || x.class === S.cls; });
      v.innerHTML = '<div class="card"><div class="row"><label>Exam: <select class="sm" id="ex">' + window.DEFAULT_EXAM_IDS.map(function (id) { return '<option value="' + id + '"' + (id === S.assignExam ? ' selected' : '') + '>' + esc(S.exams[id].cfg.title) + '</option>'; }).join('') + '</select></label>' + clsSelect('fcls', S.cls) +
        '<button class="btn sm2" id="gen">🎫 Assign selected &amp; generate codes</button><button class="btn sm2 light" id="xls">⬇ Excel</button><button class="btn sm2 light" id="prt">🖨 Print code slips</button></div>' +
        '<p class="en">Students open <b>' + esc(location.origin + location.pathname.replace('teachers.html', 'index.html')) + '</b> and type their personal code. Each code works once.</p>' +
        '<table class="t"><tr><th><input type="checkbox" id="all"></th><th>First name</th><th>Last name</th><th>Class</th><th>Code</th><th>Status</th><th></th></tr>' +
        list.map(function (x) {
          var c = codes[x._id];
          return '<tr><td><input type="checkbox" class="sel" value="' + x._id + '"></td><td>' + esc(x.first) + '</td><td>' + esc(x.last) + '</td><td>' + esc(x.class) + '</td><td class="code">' + (c ? c.code : '—') + '</td><td>' +
            (c ? (c.status === 'submitted' ? '<span class="tag g">submitted</span>' : c.startedAt ? '<span class="tag y">started</span>' : '<span class="tag">assigned</span>') : '') + '</td><td>' +
            (c ? '<button class="ic" data-regen="' + x._id + '" title="New code">↻</button><button class="ic del" data-unassign="' + x._id + '" title="Remove code">🗑</button>' : '') + '</td></tr>';
        }).join('') + '</table></div>';
      $('#ex').onchange = function () { S.assignExam = this.value; assignView(); };
      $('#fcls').onchange = function () { S.cls = this.value; assignView(); };
      $('#all').onchange = function () { var c = this.checked; v.querySelectorAll('.sel').forEach(function (e) { e.checked = c; }); };
      function newCode() { var c; do { c = ''; for (var i = 0; i < 6; i++) c += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]; } while (used[c]); used[c] = 1; return c; }
      function make(st) {
        var code = newCode();
        return DB.set('codes', code, { code: code, examId: S.assignExam, studentId: st._id, first: st.first, last: st.last, class: st.class || '', status: 'assigned', createdAt: new Date().toISOString() });
      }
      $('#gen').onclick = function () {
        var ids = [].slice.call(v.querySelectorAll('.sel:checked')).map(function (e) { return e.value; }).filter(function (id) { return !codes[id]; });
        if (!ids.length) return alert('Tick students without a code first.');
        Promise.all(ids.map(function (id) { return make(S.students.filter(function (s) { return s._id === id; })[0]); })).then(function () { toast(ids.length + ' codes created'); assignView(); }).catch(fail);
      };
      v.querySelectorAll('[data-regen]').forEach(function (b) { b.onclick = function () { var id = b.getAttribute('data-regen'); if (!confirm('Replace this student\'s code with a new one?')) return; DB.del('codes', codes[id].code).then(function () { return make(S.students.filter(function (s) { return s._id === id; })[0]); }).then(assignView).catch(fail); }; });
      v.querySelectorAll('[data-unassign]').forEach(function (b) { b.onclick = function () { var id = b.getAttribute('data-unassign'); if (confirm('Remove the code? (a submitted result stays in Results)')) DB.del('codes', codes[id].code).then(assignView).catch(fail); }; });
      var rows = list.filter(function (x) { return codes[x._id]; });
      $('#xls').onclick = function () { if (!rows.length) return alert('No codes yet.'); sheetDownload('codes-' + S.assignExam + '.xlsx', [['First name', 'Last name', 'Class', 'Code']].concat(rows.map(function (x) { return [x.first, x.last, x.class, codes[x._id].code]; }))); };
      $('#prt').onclick = function () { if (!rows.length) return alert('No codes yet.'); printHTML('<h2>' + esc(S.exams[S.assignExam].cfg.title) + '</h2>' + rows.map(function (x) { return '<div class="slip"><b>' + esc(x.first + ' ' + x.last) + '</b> · ' + esc(x.class) + '<div class="c">' + codes[x._id].code + '</div><small>' + esc(location.origin + location.pathname.replace('teachers.html', 'index.html')) + '</small></div>'; }).join('')); };
    }).catch(fail);
  }

  /* ---------- results & grading ---------- */
  function resultsView() {
    var v = $('#view'); v.innerHTML = '<div class="card">Loading…</div>';
    Promise.all([DB.list('codes', ['examId', S.resExam]), DB.list('submissions', ['examId', S.resExam])]).then(function (r) {
      var subs = {}; r[1].forEach(function (s) { subs[s._id] = s; });
      var rows = r[0].filter(function (c) { return !S.cls || c.class === S.cls; }).sort(byName);
      var done = rows.filter(function (c) { return subs[c.code]; }), avg = done.length ? Math.round(done.reduce(function (a, c) { return a + subs[c.code].total; }, 0) / done.length * 10) / 10 : 0;
      v.innerHTML = '<div class="card"><div class="row"><label>Exam: <select class="sm" id="ex">' + window.DEFAULT_EXAM_IDS.map(function (id) { return '<option value="' + id + '"' + (id === S.resExam ? ' selected' : '') + '>' + esc(S.exams[id].cfg.title) + '</option>'; }).join('') + '</select></label>' + clsSelect('fcls', S.cls) +
        '<button class="btn sm2 light" id="xls">⬇ Excel</button><button class="btn sm2 light" id="prt">🖨 Print</button></div>' +
        '<div><span class="stat">Submitted: ' + done.length + ' / ' + rows.length + '</span><span class="stat">Average: ' + avg + '</span></div>' +
        '<table class="t"><tr><th>First name</th><th>Last name</th><th>Class</th><th>Code</th><th>Score</th><th>Submitted</th><th></th></tr>' +
        rows.map(function (c) {
          var s = subs[c.code];
          return '<tr><td>' + esc(c.first) + '</td><td>' + esc(c.last) + '</td><td>' + esc(c.class) + '</td><td class="code">' + c.code + '</td><td>' + (s ? '<b>' + s.total + '</b>' + (Object.keys(s.manual || {}).length ? ' <span class="tag y">✎</span>' : '') : '<span class="tag r">—</span>') + '</td><td>' + (s ? fmtDate(s.submittedAt) : '') + '</td><td>' + (s ? '<button class="btn sm2 light" data-view="' + c.code + '">View / grade</button>' : '') + '</td></tr>';
        }).join('') + '</table></div>';
      $('#ex').onchange = function () { S.resExam = this.value; resultsView(); };
      $('#fcls').onchange = function () { S.cls = this.value; resultsView(); };
      v.querySelectorAll('[data-view]').forEach(function (b) { b.onclick = function () { detailView(b.getAttribute('data-view')); }; });
      function aoa() {
        return [['First name', 'Last name', 'Class', 'Code', 'Total (/100)'].concat(S.exams[S.resExam].cfg.sections.map(function (s) { return s.en + ' (pts)'; })).concat(['Submitted'])].concat(rows.map(function (c) {
          var s = subs[c.code]; return [c.first, c.last, c.class, c.code, s ? s.total : ''].concat(S.exams[S.resExam].cfg.sections.map(function (sec, i) { return s && s.secs[i] ? s.secs[i].earned + '/' + s.secs[i].max : ''; })).concat([s ? fmtDate(s.submittedAt) : '']);
        }));
      }
      $('#xls').onclick = function () { if (!rows.length) return alert('Nothing to export.'); sheetDownload('results-' + S.resExam + (S.cls ? '-' + S.cls : '') + '.xlsx', aoa()); };
      $('#prt').onclick = function () {
        var a = aoa(); printHTML('<h2>' + esc(S.exams[S.resExam].cfg.title) + (S.cls ? ' · ' + esc(S.cls) : '') + '</h2><p>' + new Date().toLocaleDateString() + ' · Average ' + avg + '</p><table class="t">' + a.map(function (r, i) { return '<tr>' + r.map(function (c) { return '<' + (i ? 'td' : 'th') + '>' + esc(c) + '</' + (i ? 'td' : 'th') + '>'; }).join('') + '</tr>'; }).join('') + '</table>');
      };
    }).catch(fail);
  }

  function detailView(code) {
    var v = $('#view'); v.innerHTML = '<div class="card">Loading…</div>';
    Promise.all([DB.get('submissions', code), DB.list('recordings', ['code', code])]).then(function (r) {
      var sub = r[0], recs = {}; r[1].forEach(function (x) { recs[x.itemId] = x.data; });
      var cfg = ExamCore.defaults(JSON.parse(sub.cfg)), manual = Object.assign({}, sub.manual || {}), spell = sub.spell || 0;
      v.innerHTML = '<div class="row noprint"><button class="btn sm2 gray" id="back">← Back</button><button class="btn sm2 light" id="prt">🖨 Print</button></div>' +
        '<div class="card"><h2 style="margin:0">' + esc(sub.first + ' ' + sub.last) + ' · ' + esc(sub.class) + '</h2><p>' + esc(cfg.title) + ' · code ' + code + ' · ' + fmtDate(sub.submittedAt) + '</p>' +
        '<div class="row"><span class="stat" id="tot"></span><span id="secs"></span></div>' +
        '<div class="row noprint"><label>Spelling tolerance: <select class="sm" id="sp">' + SPELL.map(function (s, i) { return '<option value="' + i + '"' + (spell === i ? ' selected' : '') + '>' + esc(s) + '</option>'; }).join('') + '</select></label><button class="btn sm2 light" id="clr">Clear manual scores</button><button class="btn green sm2" id="sv">💾 Save grade</button></div>' +
        '<p class="en noprint">You can type a new score in the box under any question. Speaking recordings can be played and scored there.</p></div><div id="rv"></div>';
      var host = $('#rv'), rr;
      function draw() {
        host.innerHTML = ''; rr = ExamCore.render(host, cfg, { mode: 'review', audio: {} });
        rr.items.forEach(function (c) { c.setAnswer(sub.answers[c.def.id]); if (c.def.kind === 'record') c.setAudio(recs[c.def.id]); });
        rr.lockAll(); remark();
      }
      function remark() {
        var res = ExamCore.score(cfg, sub.answers, manual, spell);
        ExamCore.mark(rr, res, true, function (id, val) { if (val == null || isNaN(val)) delete manual[id]; else manual[id] = val; remark(); });
        $('#tot').textContent = 'Total: ' + res.total + ' / 100  (' + res.earned + ' of ' + res.max + ' pts)';
        $('#secs').innerHTML = res.secs.map(function (s) { return '<span class="tag">' + esc(s.en) + ': ' + s.earned + '/' + s.max + '</span> '; }).join('');
        remark.res = res;
      }
      draw();
      $('#sp').onchange = function () { spell = parseInt(this.value, 10); remark(); };
      $('#clr').onclick = function () { manual = {}; remark(); };
      $('#back').onclick = resultsView;
      $('#prt').onclick = function () { window.print(); };
      $('#sv').onclick = function () {
        var res = remark.res;
        DB.update('submissions', code, { manual: manual, spell: spell, total: res.total, secs: res.secs, earned: res.earned, max: res.max, gradedBy: S.user.email, gradedAt: new Date().toISOString() }).then(function () { toast('Grade saved ✔'); }).catch(fail);
      };
    }).catch(fail);
  }

  /* ---------- teachers (owner) ---------- */
  function teachersView() {
    var v = $('#view');
    DB.list('teachers').then(function (ts) {
      v.innerHTML = '<div class="card"><h3>👩‍🏫 Teachers with access</h3><table class="t"><tr><th>Name</th><th>Email</th><th>Role</th><th></th></tr>' +
        '<tr><td>' + esc(window.OWNER_NAME) + '</td><td>' + esc(window.OWNER_EMAIL) + '</td><td><span class="tag g">owner</span></td><td></td></tr>' +
        ts.map(function (t) { return '<tr><td>' + esc(t.name || '') + '</td><td>' + esc(t._id) + '</td><td><span class="tag">teacher</span></td><td><button class="ic del" data-rm="' + esc(t._id) + '">🗑</button></td></tr>'; }).join('') + '</table></div>' +
        '<div class="card"><h3>➕ Add a teacher</h3><div class="row"><input class="sm" id="tn" placeholder="Name"><input class="sm" id="te" type="email" placeholder="email@hlacharterschool.org" style="min-width:260px"><button class="btn sm2" id="ta">Add teacher</button></div><p class="en">The teacher signs in with the Google account that uses this email.</p></div>';
      $('#ta').onclick = function () {
        var e = $('#te').value.trim().toLowerCase(); if (!/^\S+@\S+\.\S+$/.test(e)) return alert('Enter a valid email.');
        DB.set('teachers', e, { email: e, name: $('#tn').value.trim(), addedAt: new Date().toISOString(), addedBy: S.user.email }).then(function () { toast('Teacher added'); teachersView(); }).catch(fail);
      };
      v.querySelectorAll('[data-rm]').forEach(function (b) { b.onclick = function () { if (confirm('Remove ' + b.getAttribute('data-rm') + '?')) DB.del('teachers', b.getAttribute('data-rm')).then(teachersView).catch(fail); }; });
    }).catch(fail);
  }
})();
