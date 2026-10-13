/* Niflaot lessons — interactive building blocks shared by the lessons (pages 14–19).
 * NK.fillBlanks (drag or click words into the blanks), NK.builder (sentence from 3 columns), NK.oddOne,
 * NK.syllables, NK.tableFill, NK.qaCards, NK.say, NK.shuffle */
window.NK = (() => {
'use strict';
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const plain = s => s.replace(/[֑-ׇ]/g, '');          /* compare words without vowel marks */

/* read aloud (optional) */
let voiceOn = false;
const heVoice = () => (window.speechSynthesis ? speechSynthesis.getVoices() : []).find(v => /^(he|iw)/i.test(v.lang));
function say(t){ if (!voiceOn || !window.speechSynthesis) return; const v = heVoice(); if (!v) return; speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.voice = v; u.lang = v.lang; u.rate = .85; speechSynthesis.speak(u); }
const setVoice = on => { voiceOn = on; };

/* ---------- dragging a word (mouse, pen or finger) ----------
 * onDrop(blankEl) is called when the word is released over a .blank; a short tap still works as a click. */
let justDragged = false;
function dragChip(chip, onDrop){
  chip.addEventListener('pointerdown', e => {
    if ((e.button || 0) > 0 || chip.classList.contains('used')) return;
    const sx = e.clientX, sy = e.clientY; let ghost = null, hot = null;
    const over = ev => { const t = document.elementsFromPoint(ev.clientX, ev.clientY).find(x => x.classList && x.classList.contains('blank')); if (t !== hot){ if (hot) hot.classList.remove('hot-drop'); hot = t || null; if (hot) hot.classList.add('hot-drop'); } return t; };
    const move = ev => {
      if (!ghost){ if (Math.hypot(ev.clientX - sx, ev.clientY - sy) < 8) return; ghost = chip.cloneNode(true); ghost.classList.add('ghost'); document.body.appendChild(ghost); chip.classList.add('dragging'); }
      ev.preventDefault(); ghost.style.left = ev.clientX + 'px'; ghost.style.top = ev.clientY + 'px'; over(ev);
    };
    const up = ev => {
      document.removeEventListener('pointermove', move); document.removeEventListener('pointerup', up); document.removeEventListener('pointercancel', up);
      if (!ghost) return;
      const t = over(ev); if (hot) hot.classList.remove('hot-drop'); hot = null;
      ghost.remove(); chip.classList.remove('dragging'); justDragged = true; setTimeout(() => { justDragged = false; }, 60);
      if (t && ev.type === 'pointerup') onDrop(t);
    };
    document.addEventListener('pointermove', move, { passive: false }); document.addEventListener('pointerup', up); document.addEventListener('pointercancel', up);
  });
}

function toolbar(root, { check, show, reset }){
  const bar = h('div', 'toolbar');
  if (check){ const b = h('button', 'btn good', '✓ בּוֹדְקִים'); b.type = 'button'; b.onclick = check; bar.appendChild(b); }
  bar.appendChild(h('span', 'spacer'));
  if (show){ const b = h('button', 'btn ghost small', 'הצגת התשובות'); b.type = 'button'; b.onclick = show; bar.appendChild(b); }
  if (reset){ const b = h('button', 'btn ghost small', '↺ מההתחלה'); b.type = 'button'; b.onclick = reset; bar.appendChild(b); }
  return bar;
}
const say2 = (el, ok, txt) => { el.className = 'msg ' + (ok ? 'ok' : 'no'); el.textContent = txt; };

/* ---------- fill the blanks: drag (or tap) a word to the empty place ----------
 * items: [{ parts:[ 'text', {a:'answer'}, 'text' ... ], bank:['w1','w2'] (a bank under this sentence), write:'placeholder' (adds a line to write on) }]
 * bank:  one shared bank for all sentences (optional)                                                                             */
function fillBlanks(root, { items, bank, hint }){
  root.innerHTML = '';
  const blanks = []; let active = null;
  const msg = h('div', 'msg');
  const chipsOf = [];
  const mkBank = (words, scope) => { const box = h('div', 'bank'); shuffle(words).forEach(w => { const c = h('button', 'chip', w); c.type = 'button'; const rec = { el: c, word: w, scope, used: false };
    c.onclick = () => { if (!justDragged) place(rec); }; dragChip(c, t => { const b = blanks.find(x => x.el === t); if (b) place(rec, b); }); box.appendChild(c); chipsOf.push(rec); }); return box; };
  if (hint) root.appendChild(h('p', 'sub', hint));
  items.forEach((it, idx) => {
    const wrap = h('div', 'fitem'), s = h('div', 'sent'); wrap.appendChild(s);
    (it.parts || []).forEach(p => {
      if (typeof p === 'string'){ s.appendChild(document.createTextNode(p)); return; }
      const b = h('button', 'blank', '&nbsp;'); b.type = 'button'; const rec = { el: b, answer: p.a, value: null, scope: idx, chip: null };
      b.onclick = () => { if (rec.value){ release(rec); } setActive(rec); };
      blanks.push(rec); s.appendChild(b);
    });
    if (it.write){ const t = h('input', 'textline'); t.placeholder = it.write; t.setAttribute('aria-label', 'כתיבה'); wrap.appendChild(h('div')).appendChild(t); }
    if (it.bank) wrap.appendChild(mkBank(it.bank, idx));
    root.appendChild(wrap);
  });
  if (bank){ const bx = h('div', 'fitem bankbox'); bx.appendChild(h('div', 'sub', 'גּוֹרְרִים אֶת הַמִּלָּה לַמָּקוֹם הַמַּתְאִים (אוֹ לוֹחֲצִים עָלֶיהָ):')); bx.appendChild(mkBank(bank, 'all')); root.appendChild(bx); }
  const fits = (chip, b) => chip.scope === 'all' || chip.scope === b.scope;
  function setActive(rec){ if (active) active.el.classList.remove('active'); active = rec; if (rec) rec.el.classList.add('active'); }
  function release(rec){ if (rec.chip){ rec.chip.used = false; rec.chip.el.classList.remove('used'); rec.chip = null; } rec.value = null; rec.el.innerHTML = '&nbsp;'; rec.el.className = 'blank'; }
  function place(chip, into){
    if (chip.used) return;
    const target = into || ((active && !active.value && fits(chip, active)) ? active : blanks.find(b => !b.value && fits(chip, b)));
    if (!target) return;
    if (!fits(chip, target)){ target.el.classList.add('shake'); setTimeout(() => target.el.classList.remove('shake'), 400); return; }
    if (target.value) release(target);
    target.value = chip.word; target.chip = chip; chip.used = true; chip.el.classList.add('used'); target.el.textContent = chip.word; target.el.className = 'blank filled';
    setActive(null); say(chip.word);
  }
  function check(){
    let ok = 0, empty = 0;
    blanks.forEach(b => { if (!b.value){ empty++; b.el.className = 'blank'; return; } const good = plain(b.value) === plain(b.answer); b.el.className = 'blank ' + (good ? 'ok' : 'bad'); if (good) ok++; });
    if (empty) say2(msg, false, 'עוֹד לֹא מִלֵּאתֶם הַכֹּל 🙂');
    else if (ok === blanks.length) say2(msg, true, 'כָּל הַכָּבוֹד! הַכֹּל נָכוֹן! 🎉');
    else say2(msg, false, `${ok} מִתּוֹךְ ${blanks.length} נְכוֹנִים — לוֹחֲצִים עַל מִשְׁבֶּצֶת אֲדֻמָּה וּמְתַקְּנִים`);
  }
  function showAll(){ blanks.forEach(b => { release(b); b.value = b.answer; b.el.textContent = b.answer; b.el.className = 'blank ok'; }); chipsOf.forEach(c => { c.used = true; c.el.classList.add('used'); }); say2(msg, true, 'הַתְּשׁוּבוֹת הַנְּכוֹנוֹת'); }
  function reset(){ blanks.forEach(release); chipsOf.forEach(c => { c.used = false; c.el.classList.remove('used'); }); msg.textContent = ''; msg.className = 'msg'; root.querySelectorAll('.textline').forEach(t => t.value = ''); }
  root.appendChild(msg); root.appendChild(toolbar(root, { check, show: showAll, reset }));
}

/* ---------- build sentences from 3 columns (subject | verb | ending) ----------
 * example: ['..','..','..']  rows: n  banks: [[subjects],[verbs],[endings]]  valid(s,v,e) -> true/false  */
function builder(root, { example, rows, banks, valid, labels }){
  root.innerHTML = ''; const msg = h('div', 'msg');
  const L = labels || ['מִי?', 'מָה עוֹשִׂים?', 'אֵיפֹה / מָתַי?'];
  if (example){ const ex = h('div', 'fitem'); const s = h('div', 'sent'); s.innerHTML = '<span class="exlabel">דֻּגְמָה:</span> ' + example.join(' ') + '.'; ex.appendChild(s); root.appendChild(ex); }
  const lines = []; const chips = [];
  for (let r = 0; r < rows; r++){
    const wrap = h('div', 'fitem brow'); const s = h('div', 'sent'); s.appendChild(h('span', 'exlabel', 'בגדה'[r] + '.'));
    const row = { cells: [] };
    for (let c = 0; c < 3; c++){ const b = h('button', 'blank', '&nbsp;'); b.type = 'button'; b.dataset.col = c; b.title = L[c]; const cell = { el: b, col: c, value: null, chip: null }; b.onclick = () => release(cell); row.cells.push(cell); s.appendChild(b); }
    wrap.appendChild(s); root.appendChild(wrap); lines.push(row);
  }
  const all = lines.flatMap(l => l.cells);
  banks.forEach((words, c) => { const bx = h('div', 'fitem bankbox'); bx.appendChild(h('div', 'sub', L[c])); const box = h('div', 'bank');
    shuffle(words).forEach(w => { const b = h('button', 'chip', w); b.type = 'button'; const rec = { el: b, word: w, col: c, used: false };
      b.onclick = () => { if (!justDragged) put(rec); }; dragChip(b, t => { const cell = all.find(x => x.el === t); if (cell) put(rec, cell); }); box.appendChild(b); chips.push(rec); });
    bx.appendChild(box); root.appendChild(bx); });
  function release(cell){ if (cell.chip){ cell.chip.used = false; cell.chip.el.classList.remove('used'); cell.chip = null; } cell.value = null; cell.el.innerHTML = '&nbsp;'; cell.el.className = 'blank'; }
  function put(chip, into){
    if (chip.used) return;
    const cell = into || all.find(x => x.col === chip.col && !x.value); if (!cell) return;
    if (cell.col !== chip.col){ cell.el.classList.add('shake'); setTimeout(() => cell.el.classList.remove('shake'), 400); return; }
    if (cell.value) release(cell);
    cell.value = chip.word; cell.chip = chip; chip.used = true; chip.el.classList.add('used'); cell.el.textContent = chip.word; cell.el.className = 'blank filled'; say(chip.word);
  }
  function check(){
    let good = 0, full = 0;
    lines.forEach(l => { const [a, b, c] = l.cells; if (!(a.value && b.value && c.value)){ l.cells.forEach(x => x.el.className = x.value ? 'blank filled' : 'blank'); return; } full++;
      const ok = valid(a.value, b.value, c.value); l.cells.forEach(x => x.el.className = 'blank ' + (ok ? 'ok' : 'bad')); if (ok) good++; });
    if (full < rows) say2(msg, false, `בְּנִיתֶם ${full} מִתּוֹךְ ${rows} מִשְׁפָּטִים 🙂`);
    else if (good === rows) say2(msg, true, 'כָּל הַכָּבוֹד! כָּל הַמִּשְׁפָּטִים נְכוֹנִים! 🎉');
    else say2(msg, false, `${good} מִשְׁפָּטִים נְכוֹנִים — הַמִּשְׁפָּט הָאָדֹם לֹא מַתְאִים (זָכָר/נְקֵבָה, יָחִיד/רַבִּים, אוֹ מָה שֶׁעוֹשִׂים)`);
  }
  root.appendChild(msg);
  root.appendChild(toolbar(root, { check, reset: () => builder(root, { example, rows, banks, valid, labels }) }));
}

/* ---------- odd one out ---------- rows: [{ words:[..], ok:[indexes], why:'..' }] */
function oddOne(root, { rows }){
  root.innerHTML = ''; const msg = h('div', 'msg'); let solved = 0;
  rows.forEach(r => {
    const wrap = h('div', 'fitem'), box = h('div', 'rowopts'); const why = h('div', 'sub'); wrap.append(box, why);
    r.words.forEach((w, wi) => { const b = h('button', 'opt', w); b.type = 'button'; b.onclick = () => {
      if (wrap.dataset.done) return;
      if (r.ok.includes(wi)){ b.classList.add('ok'); wrap.dataset.done = 1; solved++; why.textContent = '✓ ' + r.why; say(w);
        box.querySelectorAll('button').forEach(x => x.disabled = true); if (solved === rows.length) say2(msg, true, 'כָּל הַכָּבוֹד! מָצָאתֶם אֶת כֻּלָּם! 🎉'); }
      else { b.classList.add('bad'); b.disabled = true; say2(msg, false, 'לֹא בְּדִיּוּק — נַסּוּ שׁוּב (אוּלַי יֵשׁ עוֹד אֶפְשָׁרוּת?)'); } }; box.appendChild(b); });
    root.appendChild(wrap);
  });
  root.appendChild(msg);
  root.appendChild(toolbar(root, { reset: () => oddOne(root, { rows }) }));
}

/* ---------- build the word from syllables ---------- words: [{ pic:'<svg>', tiles:['סַ','בּוֹ','ן'] }] (tiles in the right order) */
function syllables(root, { words }){
  root.innerHTML = ''; const msg = h('div', 'msg'); let done = 0;
  words.forEach(w => {
    const card = h('div', 'wcard'), pic = h('div', 'wpic', w.pic), right = h('div'), slots = h('div', 'slot-row'), tiles = h('div', 'bank');
    right.append(slots, tiles); card.append(pic, right); root.appendChild(card);
    let placed = [], locked = false; const order = w.tiles.map((t, i) => ({ t, i }));
    const mix = () => { let m, n = 0; do { m = shuffle(order); n++; } while (m.every((x, k) => x.i === k) && n < 10); return m; };
    const all = mix().map(o => { const b = h('button', 'tile', o.t); b.type = 'button'; b.dataset.i = o.i; tiles.appendChild(b); return b; });
    const paint = () => { slots.innerHTML = ''; placed.forEach(b => { const c = h('button', 'tile', b.textContent); c.type = 'button'; c.onclick = () => { if (locked) return; placed = placed.filter(x => x !== b); b.hidden = false; paint(); }; slots.appendChild(c); }); };
    all.forEach(b => b.onclick = () => {
      if (locked) return; b.hidden = true; placed.push(b); paint();
      if (placed.length === w.tiles.length){
        const good = placed.every((x, k) => +x.dataset.i === k);
        if (good){ locked = true; slots.className = 'slot-row ok'; done++; say(w.tiles.join('')); if (done === words.length) say2(msg, true, 'כָּל הַכָּבוֹד! בְּנִיתֶם אֶת כָּל הַמִּלִּים! 🎉'); }
        else { slots.className = 'slot-row bad'; say2(msg, false, 'לֹא בְּדִיּוּק — נַסּוּ שׁוּב'); setTimeout(() => { placed.forEach(x => x.hidden = false); placed = []; paint(); slots.className = 'slot-row'; }, 800); }
      }
    });
  });
  root.appendChild(msg); root.appendChild(toolbar(root, { reset: () => syllables(root, { words }) }));
}

/* ---------- fill a table with drop-downs ---------- headers:[..], rows:[[ {given:'..'} | {a:'..', opts:[..]} , ...]] */
function tableFill(root, { headers, rows }){
  root.innerHTML = ''; const msg = h('div', 'msg'); const sels = [];
  const t = h('table', 'tbl'), thead = h('tr'); headers.forEach(x => thead.appendChild(h('th', '', x))); t.appendChild(thead);
  rows.forEach(r => { const tr = h('tr'); r.forEach(c => { const td = h('td'); if (c.given) td.className = 'given', td.textContent = c.given;
    else { const s = h('select'); s.setAttribute('aria-label', 'בחירה'); s.appendChild(h('option', '', '— בְּחַר —')); shuffle(c.opts).forEach(o => s.appendChild(h('option', '', o))); s.onchange = () => { s.className = ''; }; sels.push({ s, a: c.a }); td.appendChild(s); }
    tr.appendChild(td); }); t.appendChild(tr); });
  root.appendChild(t); root.appendChild(msg);
  root.appendChild(toolbar(root, {
    check: () => { let ok = 0, empty = 0; sels.forEach(x => { if (x.s.selectedIndex < 1){ empty++; x.s.className = ''; return; } const g = x.s.value === x.a; x.s.className = g ? 'ok' : 'bad'; if (g) ok++; });
      if (empty) say2(msg, false, 'עוֹד לֹא מִלֵּאתֶם הַכֹּל 🙂'); else if (ok === sels.length) say2(msg, true, 'כָּל הַכָּבוֹד! הַטַּבְלָה נְכוֹנָה! 🎉'); else say2(msg, false, `${ok} מִתּוֹךְ ${sels.length} נְכוֹנִים — מְתַקְּנִים אֶת הָאֲדֻמִּים`); },
    show: () => { sels.forEach(x => { x.s.value = x.a; x.s.className = 'ok'; }); say2(msg, true, 'הַתְּשׁוּבוֹת הַנְּכוֹנוֹת'); },
    reset: () => tableFill(root, { headers, rows })
  }));
}

/* ---------- question + picture + choices ---------- items: [{ pic:'<svg>', q:'..', opts:[..], a:'..' }] */
function qaCards(root, { items }){
  root.innerHTML = ''; const msg = h('div', 'msg'); let done = 0; const grid = h('div', 'qgrid');
  items.forEach(it => {
    const c = h('div', 'qcard'); if (it.pic) c.appendChild(h('div', 'qp', it.pic)); c.appendChild(h('h4', '', it.q)); const box = h('div', 'rowopts');
    shuffle(it.opts).forEach(o => { const b = h('button', 'opt', o); b.type = 'button'; b.onclick = () => {
      if (c.dataset.done) return;
      if (o === it.a){ b.classList.add('ok'); c.dataset.done = 1; done++; box.querySelectorAll('button').forEach(x => x.disabled = true); say(it.q + ' ' + o); if (done === items.length) say2(msg, true, 'כָּל הַכָּבוֹד! עָנִיתֶם עַל הַכֹּל! 🎉'); }
      else { b.classList.add('bad'); b.disabled = true; say2(msg, false, 'לֹא בְּדִיּוּק — נַסּוּ שׁוּב'); } }; box.appendChild(b); });
    c.appendChild(box); grid.appendChild(c);
  });
  root.append(grid, msg); root.appendChild(toolbar(root, { reset: () => qaCards(root, { items }) }));
}

return { shuffle, h, plain, say, setVoice, fillBlanks, builder, oddOne, syllables, tableFill, qaCards };
})();
