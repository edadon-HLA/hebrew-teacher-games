/* Olam Street Lessons index — lessons grouped by book in two drop lists ("📘 Olam Street 1", "📗 Olam Street 2").
 * Automatic: a card goes to the book of its lesson number (Olam-street-1.x → book 1, Olam-street-2.x → book 2, anything
 * else → the newest book). New lesson cards (2.23+) need no manual placement. Manual lessons (olamCustom) always go to
 * Olam Street 2, in page order. The "➕ add lesson" slots are shown only in Olam Street 2.
 * Works with shared/printables-list.js (.lcol) and niflaot-lessons/schedule.js (.lw, .slot): schedule.js moves every card
 * back into <main> when it redraws and then fires "sched-rendered"; we regroup on that event.
 * Open / closed per book is remembered in localStorage ("olam-book-open-<n>"); default: book 2 open, book 1 closed. */
(function () {
  'use strict';
  var d = document, BOOKS = [{ n: 1, icon: '📘', title: 'Olam Street 1' }, { n: 2, icon: '📗', title: 'Olam Street 2' }], NEWEST = 2;
  var st = d.createElement('style');
  st.textContent =
    '.book{margin:0 0 22px;border:3px solid #18213a;border-radius:22px;background:#eef2f8;overflow:hidden}' +
    '.book > summary{list-style:none;cursor:pointer;display:flex;flex-wrap:wrap;align-items:center;gap:6px 12px;padding:16px 22px;background:#18213a;color:#fff;font:800 26px Arial,sans-serif;direction:rtl}' +
    '.book > summary::-webkit-details-marker{display:none}.book > summary .bt{white-space:nowrap;direction:ltr;unicode-bidi:isolate}.book > summary .cnt{font-size:17px;font-weight:700;color:#c9d3e6;white-space:nowrap}' +
    '.book > summary::after{content:"▾";margin-inline-start:auto;font-size:24px;transition:.15s}.book[open] > summary::after{transform:rotate(180deg)}' +
    '.book > summary:hover{background:#25304d}.book-body{padding:20px}.book-body > .slot.hide{display:none}' +
    '.book-body > :first-child{margin-top:0!important}.book-body > .lw + .lw,.book-body > .lcol + .lw,.book-body > .lw + .lcol{margin-top:24px}' +
    '@media(max-width:650px){.book > summary{font-size:19px;padding:12px 14px}.book > summary .cnt{font-size:14px}.book > summary::after{font-size:18px}.book-body{padding:12px}}';
  (d.head || d.documentElement).appendChild(st);

  var main, back, groups = {};
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function bookOf(el) {
    if (el.classList.contains('cu')) return NEWEST;                         /* manual lesson → newest book */
    var id = el.dataset && el.dataset.id;
    if (!id) { var a = el.matches('a.lesson') ? el : el.querySelector('a.lesson'); id = a ? (a.getAttribute('href') || '') : ''; }
    var m = /Olam-street-(\d+)\./i.exec(id);
    var n = m ? +m[1] : NEWEST;
    return groups[n] ? n : NEWEST;
  }
  function isCard(el) { return el.matches('a.lesson, .lcol, .lw'); }
  function build() {
    main = d.querySelector('main'); back = main && main.querySelector(':scope > a.back'); if (!main) return;
    BOOKS.forEach(function (b) {
      var g = d.createElement('details'); g.className = 'book'; g.dataset.book = b.n;
      var saved = store('olam-book-open-' + b.n); g.open = saved == null ? b.n === NEWEST : saved === '1';
      g.innerHTML = '<summary><span class="bt">' + b.icon + ' ' + b.title + '</span><span class="cnt"></span></summary><div class="book-body"></div>';
      g.addEventListener('toggle', function () { store('olam-book-open-' + b.n, g.open ? '1' : '0'); });
      main.insertBefore(g, back); groups[b.n] = g;
    });
    regroup();
  }
  function regroup() {
    if (!main) return;
    /* everything that is still a direct child of <main> (first load, or after schedule.js redrew) — in page order */
    var items = [].slice.call(main.children).filter(function (el) { return isCard(el) || el.classList.contains('slot'); });
    var lastBook = null;
    items.forEach(function (el, i) {
      var body;
      if (el.classList.contains('slot')) {
        /* a slot follows the card before it; the slot between the last book-1 card and the first book-2 card opens book 2 */
        var next = items.slice(i + 1).filter(isCard)[0], b = lastBook || (next ? bookOf(next) : NEWEST);
        if (b !== NEWEST && next && bookOf(next) === NEWEST) b = NEWEST;
        el.classList.toggle('hide', b !== NEWEST);
        body = groups[b].querySelector('.book-body');
      } else { lastBook = bookOf(el); body = groups[lastBook].querySelector('.book-body'); }
      body.appendChild(el);
    });
    BOOKS.forEach(function (b) {
      var n = [].slice.call(groups[b.n].querySelector('.book-body').children).filter(isCard).length;
      groups[b.n].querySelector('.cnt').textContent = n + ' שִׁעוּרִים';
    });
  }
  d.addEventListener('sched-rendered', regroup);
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', build); else build();
})();
