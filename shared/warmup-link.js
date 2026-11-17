/* Extra warm-up button "☀️ חִימּוּם נוֹסָף: מֶזֶג הָאֲוִויר" (teacher, 11/17: "Add it as an option for all the lessons in the warmup section.")
   Add to any lesson page with ONE line before </body>:
     <script src="../shared/warmup-link.js"></script>
   It finds the warm-up section (the first .tag whose text has חִמּוּם / חִימּוּם / מְחַמְּמִים, or an element with data-warmup),
   and adds the button before that section's teacher note (or at its end). The page's own warm-up is not changed.
   If the section already links to mezeg-haavir.html, nothing is added. Opens the game in a new tab. */
(function () {
  'use strict';
  var me = document.currentScript;
  var GAME = new URL('../games/mezeg-haavir.html', (me && me.src) || location.href).href;
  var KEYS = ['חמום', 'חימום', 'מחממים'];
  function plain(s) { return (s || '').replace(/[֑-ׇ]/g, ''); }
  function findWarmup() {
    var marked = document.querySelector('[data-warmup]');
    if (marked) return marked;
    var tags = document.querySelectorAll('.tag');
    for (var i = 0; i < tags.length; i++) {
      var t = plain(tags[i].textContent);
      for (var k = 0; k < KEYS.length; k++) if (t.indexOf(KEYS[k]) >= 0) {
        return tags[i].closest('.sf-part') || tags[i].closest('section') || null;
      }
    }
    return null;
  }
  function add() {
    var box = findWarmup();
    if (!box) return;
    var sec = box.closest('section') || box;
    if (sec.querySelector('a[href*="mezeg-haavir"]')) return;
    if (!document.getElementById('wu-wx-style')) {
      var st = document.createElement('style');
      st.id = 'wu-wx-style';
      st.textContent = '.wu-wx-row{display:flex;justify-content:center;margin:10px 0}' +
        '.wu-wx{display:inline-flex;gap:8px;align-items:center;text-decoration:none;font:800 18px "Noto Sans Hebrew","Rubik",Arial,sans-serif;' +
        'background:#fff7d6;color:#7a4a00;border:2px solid #e0a800;border-radius:14px;padding:9px 16px;direction:rtl}' +
        '.wu-wx:hover{background:#ffefb0}@media print{.wu-wx-row{display:none}}';
      document.head.appendChild(st);
    }
    var row = document.createElement('div');
    row.className = 'wu-wx-row';
    row.innerHTML = '<a class="wu-wx" target="_blank" rel="noopener" title="Weather warm-up (opens the game)">☀️ חִימּוּם נוֹסָף: מֶזֶג הָאֲוִויר</a>';
    row.firstChild.href = GAME;
    var note = null;
    for (var c = box.firstElementChild; c; c = c.nextElementSibling) {
      if (c.tagName === 'DETAILS') { note = c; break; }
    }
    if (note) box.insertBefore(row, note); else box.appendChild(row);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add); else add();
})();
