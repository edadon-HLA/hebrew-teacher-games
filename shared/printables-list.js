/* "🖨️ Printables" drop list under each lesson card on a lessons index page.
 * The page defines window.PRINTABLES = { "<lesson file name without .html>": [["Friendly name", "file.pdf"], ...] } before this
 * script. Every <a class="lesson"> that has entries gets wrapped in <div class="lcol"> together with a closed <details> list
 * (outside the card link, so clicking a PDF never opens the lesson). Lessons with no PDFs get no list.
 * schedule.js (date boxes) moves the whole .lcol, so the list stays under its card.
 * NEW LESSON = add its PDFs here, in the PRINTABLES block of the index page. */
(function () {
  'use strict';
  var d = document, P = window.PRINTABLES || {};
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var st = d.createElement('style');
  st.textContent =
    '.lcol{min-width:0}.lcol + .lcol,.lcol + .lesson,.lesson + .lcol{margin-top:24px}.lcol > .lesson{margin-top:0!important}' +
    '.pr-list{margin:8px 6px 0;background:#fff;border:2px solid #cfd8e8;border-radius:14px;font-family:Arial,sans-serif;direction:rtl}' +
    '.pr-list summary{cursor:pointer;list-style:none;padding:9px 16px;font:800 17px Arial,sans-serif;color:#18213a;display:flex;align-items:center;gap:8px}' +
    '.pr-list summary::-webkit-details-marker{display:none}.pr-list summary::after{content:"▾";margin-inline-start:auto;color:#59647d;transition:.15s}' +
    '.pr-list[open] summary::after{transform:rotate(180deg)}.pr-list summary small{font-weight:700;color:#59647d}' +
    '.pr-list ul{margin:0;padding:4px 14px 12px;list-style:none;display:grid;gap:6px}' +
    '.pr-list li a{display:flex;align-items:center;gap:8px;text-decoration:none;color:#1e6fb5;font:700 16px Arial,sans-serif;background:#f4f7fb;border-radius:10px;padding:8px 12px;direction:ltr;justify-content:flex-end}' +
    '.pr-list li a:hover{background:#e6eefa}.pr-list li a .f{color:#8a93a8;font-weight:400;font-size:13px}' +
    '@media print{.pr-list{display:none}}';
  (d.head || d.documentElement).appendChild(st);
  function idOf(a) { return (a.getAttribute('href') || '').replace(/^.*\//, '').replace(/\.html.*$/, ''); }
  function build() {
    d.querySelectorAll('a.lesson').forEach(function (a) {
      var list = P[idOf(a)]; if (!list || !list.length || a.parentNode.classList.contains('lcol')) return;
      var col = d.createElement('div'); col.className = 'lcol'; a.parentNode.insertBefore(col, a); col.appendChild(a);
      var det = d.createElement('details'); det.className = 'pr-list';
      det.innerHTML = '<summary>🖨️ Printables <small>(' + list.length + ' PDF)</small></summary><ul>' + list.map(function (x) {
        return '<li><a href="' + esc(x[1]) + '" target="_blank" rel="noopener"><span class="f">' + esc(x[1].replace(/^.*\//, '')) + '</span><span>' + esc(x[0]) + ' 📄</span></a></li>';
      }).join('') + '</ul>';
      col.appendChild(det);
    });
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', build); else build();
})();
