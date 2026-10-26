/* Niflaot lessons — teachers only.
 * Every Niflaot page loads this file first. The page stays hidden until the visitor signs in with Google and is
 * the owner (OWNER_EMAIL in exams/firebase-config.js) or is on the "niflaotAccess" list in Firestore.
 * The owner manages that list from the Niflaot Lessons page (the box with id="nk-admin").
 * Note: this is a login screen, not encryption — the files themselves are still public on GitHub. */
(function () {
  'use strict';
  var d = document, html = d.documentElement, here = d.currentScript && d.currentScript.src;
  var EXAMS = new URL('../exams/', here || location.href).href;
  var COL = 'niflaotAccess';
  html.classList.add('nk-lock');

  var css = d.createElement('style');
  css.textContent =
    'html.nk-lock body{visibility:hidden}' +
    '#nk-gate{visibility:visible;position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;padding:16px;background:#fdf7ef;direction:rtl;font-family:Rubik,"Noto Sans Hebrew",Arial,sans-serif;color:#23233a}' +
    '#nk-gate .bx{max-width:460px;width:100%;background:#fff;border:2px solid #eadfce;border-radius:24px;box-shadow:0 10px 30px #23233a1f;padding:28px 24px;text-align:center}' +
    '#nk-gate .ic{font-size:54px;line-height:1}#nk-gate h1{font-size:28px;margin:10px 0 6px}#nk-gate p{font-size:18px;color:#6b6880;margin:0 0 18px}' +
    '#nk-gate button,#nk-gate a.b{display:inline-block;font:700 19px Rubik,Arial,sans-serif;border:0;border-radius:14px;padding:12px 22px;cursor:pointer;margin:4px;text-decoration:none}' +
    '#nk-gate .go{background:#2a8bd0;color:#fff}#nk-gate .ghost{background:#fff;color:#2a8bd0;border:2px solid #2a8bd0}' +
    '#nk-gate .err{color:#c0392b;font-size:15px;margin-top:10px;min-height:1em}' +
    '#nk-me{position:fixed;bottom:10px;left:10px;z-index:9000;background:#fff;border:2px solid #eadfce;border-radius:999px;padding:4px 12px;font:600 14px Rubik,Arial,sans-serif;direction:rtl;box-shadow:0 4px 12px #0001}' +
    '#nk-me button{border:0;background:none;color:#2a8bd0;font:700 14px Rubik,Arial,sans-serif;cursor:pointer;padding:0 0 0 2px}' +
    '@media print{#nk-me{display:none}}';
  (d.head || html).appendChild(css);

  var box = null;
  function gate(htmlStr) {
    var put = function () {
      if (!box) { box = d.createElement('div'); box.id = 'nk-gate'; d.body.appendChild(box); }
      box.innerHTML = '<div class="bx">' + htmlStr + '</div>';
    };
    if (d.body) put(); else d.addEventListener('DOMContentLoaded', put);
  }
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var on = function (id, f) { var e = d.getElementById(id); if (e) e.onclick = f; };

  function load(src) {
    return new Promise(function (ok, bad) { var s = d.createElement('script'); s.src = src; s.onload = ok; s.onerror = bad; (d.head || html).appendChild(s); });
  }

  gate('<div class="ic">⏳</div><h1>רֶגַע…</h1><p>בּוֹדְקִים הַרְשָׁאָה</p>');

  function askSignIn(msg) {
    gate('<div class="ic">🔒</div><h1>שִׁעוּרֵי נִפְלָאוֹת</h1><p>הַשִּׁעוּרִים פְּתוּחִים רַק לְמוֹרִים שֶׁקִּבְּלוּ הַרְשָׁאָה.<br>נִכְנָסִים עִם חֶשְׁבּוֹן Google שֶׁל בֵּית הַסֵּפֶר.</p>' +
      '<button class="go" id="nk-in" type="button">כְּנִיסָה עִם Google</button><br><a class="b ghost" href="../index.html">← לְדַף הַבַּיִת</a><div class="err" id="nk-err">' + (msg || '') + '</div>');
    on('nk-in', function () { DB.signIn().catch(function (e) { var x = d.getElementById('nk-err'); if (x) x.textContent = 'הַכְּנִיסָה לֹא הִצְלִיחָה (' + (e && e.code || e) + ')'; }); });
  }
  function denied(email) {
    gate('<div class="ic">🚫</div><h1>אֵין הַרְשָׁאָה</h1><p>לַחֶשְׁבּוֹן <b dir="ltr">' + esc(email) + '</b> אֵין גִּישָׁה לְשִׁעוּרֵי נִפְלָאוֹת.<br>בַּקְּשׁוּ מִמְּנַהֵל הָאֲתָר (' + esc(window.OWNER_NAME || '') + ') לְהוֹסִיף אֶתְכֶם.</p>' +
      '<button class="go" id="nk-other" type="button">כְּנִיסָה עִם חֶשְׁבּוֹן אַחֵר</button><br><a class="b ghost" href="../index.html">← לְדַף הַבַּיִת</a>');
    on('nk-other', function () { DB.signOut().then(function () { return DB.signIn(); }).catch(function () {}); });
  }
  function unlock(user, owner) {
    var show = function () {
      if (box) { box.remove(); box = null; }
      html.classList.remove('nk-lock');
      if (!d.getElementById('nk-me')) {
        var me = d.createElement('div'); me.id = 'nk-me';
        me.innerHTML = '👤 <span dir="ltr">' + esc(user.email) + '</span> · <button type="button" id="nk-out">יְצִיאָה</button>';
        d.body.appendChild(me); on('nk-out', function () { DB.signOut().then(function () { location.reload(); }); });
      }
      window.NK_USER = user; d.dispatchEvent(new CustomEvent('nk-unlocked', { detail: user }));
      if (owner) admin(user);
    };
    if (d.body) show(); else d.addEventListener('DOMContentLoaded', show);
  }

  var checking = 0;
  function check(user) {
    var my = ++checking;
    if (!user) return askSignIn();
    if (user.email === String(window.OWNER_EMAIL || '').toLowerCase()) return unlock(user, true);
    gate('<div class="ic">⏳</div><h1>רֶגַע…</h1><p>בּוֹדְקִים הַרְשָׁאָה</p>');
    DB.get(COL, user.email).then(function (doc) { if (my !== checking) return; if (doc) unlock(user, false); else denied(user.email); })
      .catch(function () { if (my === checking) denied(user.email); });
  }

  load(EXAMS + 'firebase-config.js').then(function () { return load(EXAMS + 'db.js'); })
    .then(function () {
      if (DB.demo) { askSignIn('⚠ Firebase לֹא מֻגְדָּר'); return; }
      DB.onAuth(check);
    })
    .catch(function () { askSignIn('לֹא הִצְלַחְנוּ לְהִתְחַבֵּר — בִּדְקוּ אֶת הָאִינְטֶרְנֶט וְנַסּוּ שׁוּב'); });

  /* ---------- owner only: manage who can open the Niflaot lessons ---------- */
  function admin(user) {
    var root = d.getElementById('nk-admin'); if (!root) return;
    root.hidden = false;
    root.innerHTML =
      '<details class="nk-adm"><summary>👥 נִהוּל גִּישָׁה לְשִׁעוּרֵי נִפְלָאוֹת</summary>' +
      '<p>רַק אַתָּה (<span dir="ltr">' + esc(user.email) + '</span>) וְהַמּוֹרִים בָּרְשִׁימָה יְכוֹלִים לְהִכָּנֵס. מוֹסִיפִים מוֹרֶה לְפִי כְּתֹבֶת ה־Google שֶׁלּוֹ.</p>' +
      '<form id="nk-add" class="nk-row"><input id="nk-email" type="email" required placeholder="teacher@hlacharterschool.org" dir="ltr" aria-label="Email">' +
      '<input id="nk-name" type="text" placeholder="שֵׁם (לֹא חוֹבָה)" aria-label="שם"><button type="submit">➕ לָתֵת גִּישָׁה</button></form>' +
      '<div id="nk-msg" class="nk-msg"></div><ul id="nk-list" class="nk-list"><li>טוֹעֲנִים…</li></ul></details>';
    var st = d.createElement('style');
    st.textContent = '.nk-adm{background:#fff;border:2px solid #eadfce;border-radius:18px;padding:12px 16px;margin:0 auto 18px;max-width:900px;font-family:Rubik,Arial,sans-serif;direction:rtl}' +
      '.nk-adm summary{cursor:pointer;font-weight:800;font-size:19px}.nk-adm p{color:#6b6880;margin:8px 0}' +
      '.nk-row{display:flex;flex-wrap:wrap;gap:8px}.nk-row input{flex:1;min-width:200px;font:600 17px Rubik,Arial,sans-serif;padding:8px 12px;border:2px solid #eadfce;border-radius:12px}' +
      '.nk-row button,.nk-list button{font:700 16px Rubik,Arial,sans-serif;border:0;border-radius:12px;padding:8px 16px;background:#2f9d55;color:#fff;cursor:pointer}' +
      '.nk-list{list-style:none;padding:0;margin:10px 0 0}.nk-list li{display:flex;gap:10px;align-items:center;justify-content:space-between;border-bottom:1px dashed #eadfce;padding:7px 2px}' +
      '.nk-list button{background:#fff;color:#c0392b;border:2px solid #e8b4b0;padding:4px 12px}.nk-msg{min-height:1.3em;font-weight:700;margin-top:6px}';
    d.head.appendChild(st);
    var msg = function (t, ok) { var m = d.getElementById('nk-msg'); m.textContent = t; m.style.color = ok ? '#2f9d55' : '#c0392b'; };
    function refresh() {
      DB.list(COL).then(function (rows) {
        var ul = d.getElementById('nk-list');
        rows.sort(function (a, b) { return a._id < b._id ? -1 : 1; });
        ul.innerHTML = rows.length ? '' : '<li>עוֹד אֵין מוֹרִים בָּרְשִׁימָה.</li>';
        rows.forEach(function (r) {
          var li = d.createElement('li');
          li.innerHTML = '<span><b dir="ltr">' + esc(r._id) + '</b>' + (r.name ? ' · ' + esc(r.name) : '') + '</span><button type="button">הֲסָרָה</button>';
          li.querySelector('button').onclick = function () {
            if (!confirm('לְהָסִיר אֶת הַגִּישָׁה שֶׁל ' + r._id + '?')) return;
            DB.del(COL, r._id).then(function () { msg('הַגִּישָׁה הוּסְרָה', true); refresh(); }).catch(function (e) { msg('שְׁגִיאָה: ' + (e && e.code || e)); });
          };
          ul.appendChild(li);
        });
      }).catch(function (e) {
        d.getElementById('nk-list').innerHTML = '<li>לֹא הִצְלַחְנוּ לִטְעֹן אֶת הָרְשִׁימָה (' + esc(e && e.code || e) + '). הַאִם הַכְּלָלִים הַחֲדָשִׁים פּוּרְסְמוּ בְּ־Firebase?</li>';
      });
    }
    d.getElementById('nk-add').onsubmit = function (e) {
      e.preventDefault();
      var em = d.getElementById('nk-email').value.trim().toLowerCase(), nm = d.getElementById('nk-name').value.trim();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) { msg('כְּתֹבֶת לֹא תְּקִינָה'); return; }
      DB.set(COL, em, { name: nm, addedBy: user.email, addedAt: new Date().toISOString() })
        .then(function () { msg('✓ ' + em + ' קִבֵּל גִּישָׁה', true); d.getElementById('nk-email').value = ''; d.getElementById('nk-name').value = ''; refresh(); })
        .catch(function (e) { msg('שְׁגִיאָה: ' + (e && e.code || e)); });
    };
    refresh();
  }
})();
