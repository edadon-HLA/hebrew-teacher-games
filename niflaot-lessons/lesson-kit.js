/* Niflaot lessons — interactive building blocks shared by the three lessons (pages 14–19).
 * NK.fillBlanks, NK.oddOne, NK.syllables, NK.tableFill, NK.qaCards, NK.say, NK.shuffle */
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

function toolbar(root, { check, show, reset }, msgEl){
  const bar = h('div', 'toolbar');
  if (check){ const b = h('button', 'btn good', '✓ בּוֹדְקִים'); b.type = 'button'; b.onclick = check; bar.appendChild(b); }
  bar.appendChild(h('span', 'spacer'));
  if (show){ const b = h('button', 'btn ghost small', 'הצגת התשובות'); b.type = 'button'; b.onclick = show; bar.appendChild(b); }
  if (reset){ const b = h('button', 'btn ghost small', '↺ מההתחלה'); b.type = 'button'; b.onclick = reset; bar.appendChild(b); }
  return bar;
}
const say2 = (el, ok, txt) => { el.className = 'msg ' + (ok ? 'ok' : 'no'); el.textContent = txt; };

/* ---------- fill the blanks from word chips ----------
 * items: [{ parts:[ 'text', {a:'answer'}, 'text' ... ], bank:['w1','w2'] (optional, one bank under this sentence) , free:true (a line to write) }]
 * bank:  one shared bank for all sentences (optional)                                                                   */
function fillBlanks(root, { items, bank }){
  root.innerHTML = '';
  const blanks = []; let active = null;
  const msg = h('div', 'msg');
  const chipsOf = [];                                   /* { el, word, scope } */
  const mkBank = (words, scope) => { const box = h('div', 'bank'); shuffle(words).forEach(w => { const c = h('button', 'chip', w); c.type = 'button'; const rec = { el: c, word: w, scope, used: false }; c.onclick = () => place(rec); box.appendChild(c); chipsOf.push(rec); }); return box; };
  items.forEach((it, idx) => {
    const wrap = h('div', 'fitem'), s = h('div', 'sent'); wrap.appendChild(s);
    if (it.free){ s.append(document.createTextNode((it.parts || [''])[0] + ' ')); const t = h('input', 'textline'); t.placeholder = it.placeholder || 'כִּתְבוּ כָּאן'; t.setAttribute('aria-label', 'כתיבה'); wrap.appendChild(h('div')).appendChild(t); }
    else it.parts.forEach(p => {
      if (typeof p === 'string'){ s.appendChild(document.createTextNode(p)); return; }
      const b = h('button', 'blank', '&nbsp;'); b.type = 'button'; const rec = { el: b, answer: p.a, value: null, scope: idx, chip: null };
      b.onclick = () => { if (rec.value){ release(rec); } setActive(rec); };
      blanks.push(rec); s.appendChild(b);
    });
    if (it.bank) wrap.appendChild(mkBank(it.bank, idx));
    root.appendChild(wrap);
  });
  if (bank){ const bx = h('div', 'fitem'); bx.appendChild(h('div', 'sub', 'מִלִּים לְבַחִירָה:')); bx.appendChild(mkBank(bank, 'all')); root.appendChild(bx); }
  function setActive(rec){ if (active) active.el.classList.remove('active'); active = rec; if (rec) rec.el.classList.add('active'); }
  function release(rec){ if (rec.chip){ rec.chip.used = false; rec.chip.el.classList.remove('used'); rec.chip = null; } rec.value = null; rec.el.innerHTML = '&nbsp;'; rec.el.className = 'blank'; }
  function place(chip){
    if (chip.used) return;
    let target = (active && !active.value && (chip.scope === 'all' || chip.scope === active.scope)) ? active : blanks.find(b => !b.value && (chip.scope === 'all' || b.scope === chip.scope));
    if (!target) return;
    target.value = chip.word; target.chip = chip; chip.used = true; chip.el.classList.add('used'); target.el.textContent = chip.word; target.el.className = 'blank filled';
    setActive(null); say(chip.word);
    const next = blanks.find(b => !b.value && (chip.scope === 'all' || b.scope === chip.scope)); if (next && chip.scope !== 'all') setActive(next);
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

/* ---------- odd one out ---------- rows: [{ words:[..], ok:[indexes], why:'..' }] */
function oddOne(root, { rows }){
  root.innerHTML = ''; const msg = h('div', 'msg'); let solved = 0;
  rows.forEach((r, ri) => {
    const wrap = h('div', 'fitem'), box = h('div', 'rowopts'); const why = h('div', 'sub'); wrap.append(box, why);
    r.words.forEach((w, wi) => { const b = h('button', 'opt', w); b.type = 'button'; b.onclick = () => {
      if (wrap.dataset.done) return;
      if (r.ok.includes(wi)){ b.classList.add('ok'); wrap.dataset.done = 1; solved++; why.textContent = '✓ ' + r.why; say(w);
        box.querySelectorAll('button').forEach(x => x.disabled = true); if (solved === rows.length) say2(msg, true, 'כָּל הַכָּבוֹד! מָצָאתֶם אֶת כֻּלָּם! 🎉'); }
      else { b.classList.add('bad'); b.disabled = true; say2(msg, false, 'לֹא בְּדִיּוּק — נַסּוּ שׁוּב'); } }; box.appendChild(b); });
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

return { shuffle, h, plain, say, setVoice, fillBlanks, oddOne, syllables, tableFill, qaCards };
})();
