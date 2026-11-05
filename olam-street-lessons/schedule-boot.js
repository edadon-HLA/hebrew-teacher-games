/* Olam Street Lessons index — sign-in for the date boxes and manual lessons.
 * The Olam index stays public (no gate). This file loads the same Firebase setup as the Niflaot gate (exams/firebase-config.js +
 * exams/db.js). Signed out: a small "🔑 Teacher sign-in" pill (bottom-left). Signed in: it fires the same "nk-unlocked" event the
 * Niflaot gate fires, and ../niflaot-lessons/schedule.js (configured by window.SCHEDULE_CFG on the page) adds the date boxes and
 * the "➕ הוספת שיעור" buttons, stored in Firestore "olamSchedule" / "olamCustom". Who may read/write is decided by the Firestore
 * rules (see handoffs/website-builder.md). */
(function () {
  'use strict';
  var d = document, here = d.currentScript && d.currentScript.src;
  var EXAMS = new URL('../exams/', here || location.href).href;
  var css = d.createElement('style');
  css.textContent = '#os-me{position:fixed;bottom:10px;left:10px;z-index:9000;background:#fff;border:2px solid #dfe4ec;border-radius:999px;padding:5px 14px;font:700 14px Arial,sans-serif;direction:rtl;box-shadow:0 4px 12px #0001}' +
    '#os-me button{border:0;background:none;color:#2a8bd0;font:700 14px Arial,sans-serif;cursor:pointer;padding:0}@media print{#os-me{display:none}}';
  (d.head || d.documentElement).appendChild(css);
  function load(src) { return new Promise(function (ok, bad) { var s = d.createElement('script'); s.src = src; s.onload = ok; s.onerror = bad; d.head.appendChild(s); }); }
  function pill(html) {
    var put = function () { var p = d.getElementById('os-me'); if (!p) { p = d.createElement('div'); p.id = 'os-me'; d.body.appendChild(p); } p.innerHTML = html; return p; };
    return d.body ? put() : null;
  }
  function onUser(u) {
    var go = function () {
      if (!u) {
        var p = pill('<button type="button">🔑 כְּנִיסַת מוֹרִים · מוֹעֲדֵי שִׁעוּרִים</button>');
        p.querySelector('button').onclick = function () { DB.signIn().catch(function (e) { p.textContent = 'הַכְּנִיסָה לֹא הִצְלִיחָה (' + (e && e.code || e) + ')'; }); };
        return;
      }
      /* teacher's choice: "Only me" — only the owner gets the date boxes and ➕ (Firestore rules: olamSchedule/olamCustom owner only) */
      var owner = String(u.email || '').toLowerCase() === String(window.OWNER_EMAIL || '').toLowerCase();
      var q = pill('<span>' + String(u.email).replace(/[<>&"]/g, '') + '</span>' + (owner ? '' : ' · <span style="color:#7b8498">מוֹעֲדֵי הַשִּׁעוּרִים — רַק לְבַעַל הָאֲתָר</span>') + ' · <button type="button">יְצִיאָה</button>');
      q.querySelector('button').onclick = function () { DB.signOut().then(function () { location.reload(); }); };
      if (owner && !window.NK_USER) { window.NK_USER = u; d.dispatchEvent(new CustomEvent('nk-unlocked', { detail: u })); }
    };
    if (d.body) go(); else d.addEventListener('DOMContentLoaded', go);
  }
  load(EXAMS + 'firebase-config.js').then(function () { return load(EXAMS + 'db.js'); })
    .then(function () { if (DB.demo) return; DB.onAuth(onUser); })
    .catch(function () {});
})();
