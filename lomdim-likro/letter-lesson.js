/* לוֹמְדִים לִקְרֹא — shared engine for the letter lessons (from the ת lesson on). The page HTML is the same for every letter
 * (copy Lomdim-likro-tav.html, change the <title> and the data file); everything else comes from <letter>/data.js (window.LL).
 * It is the approved ב page (Lomdim-likro-bet.html) turned into data: same 5 parts, same tools, same buttons.
 * Needs: lesson-kit.css, letter-lesson.css, sound-drill.js (+css), join-sounds.js (only if a page has type 'join').
 *
 * window.LL = {
 *   key, letter, n, pages, title, sub,                       // header + card texts
 *   search: { letter, ask, rows: ['*בָּ', 'מַ', ...] x 7, count },     // '*' = a target
 *   warm: { step, title, items: [{ sy, snd } | { he, sy, snd, pic } | { he, pic, known: 1 } (a known word: reveal = the Hebrew word only)], note, btn? },
 *   card: { page, pic, cap, forms: [[syllable, label, plain?], ...], read, en, note },
 *   board: { page, rows: [[[s, snd, size], ...], ...], note },  // size l / m / s / w (word)
 *   drill: ['שׁ', 'בּ', ...],
 *   game: { key, name },
 *   line: { page, ins, ctr, pics: [[img, he, ok, x1, x2, y1, y2], ...], note },   // boxes in px of the 1750x2265 render
 *   strokes: { page, ins, paths, nums, steps, vows: ['ka','pa','sv','hp'], vowLabel, note },
 *   wb: [{ type: 'circle'|'drop'|'join', page, ins, ... }], wbNote,
 *   exit: { rows: [{ head?, s, ok, items: [[img, he], ...] }], q, reflect, note }
 * }
 * Workbook 2 additions: book: 2 (crumb + source line) · finals: ['ן', 'ם'] (drill cards with no vowel) · game: null (no game
 * part, no ✔/✘ printable) · line.c = [cx, cy, r] centre circle of that page · wb page: type 'text' (only w.sentences, no check bar),
 * cd: 1 (3-2-1 button above the tool), sent: 1 + bankLabel (drop of whole sentences), tip (join tip text) · join rows without
 * parts = ready sentences (sentence -> picture) · sentences: lines may be { t, pics }, head = story title, qs = [[q, a], ...] ·
 * exit item [null, word] = a word instead of a picture.
 */
(() => {
'use strict';
const L = window.LL, $ = id => document.getElementById(id);
const esc = s => String(s);
document.title = 'לוֹמְדִים לִקְרֹא — ' + L.title;

/* ---------- sound helpers ---------- */
let ac;
const beep = (f, d = .15, v = .14) => { try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); const o = ac.createOscillator(), g = ac.createGain(); o.frequency.value = f; g.gain.value = v; o.connect(g); g.connect(ac.destination); o.start(); o.stop(ac.currentTime + d); } catch (e) {} };
const chime = () => { [660, 880, 1100].forEach((f, i) => setTimeout(() => beep(f, .18), i * 140)); };
let voiceOn = false;
const say = t => { if (!voiceOn || !window.speechSynthesis) return; const v = speechSynthesis.getVoices().find(v => /^(he|iw)/i.test(v.lang)); if (!v) return; speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.voice = v; u.lang = v.lang; u.rate = .75; speechSynthesis.speak(u); };
const note = html => html ? `<details class="note"><summary>📝 מהלך קצר</summary>${[].concat(html).map(p => `<p>${p}</p>`).join('')}</details>` : '';
const markWord = (w, m) => m ? w.replace(new RegExp(m + '[\\u0591-\\u05C7]*', 'g'), x => `<b class="mk">${x}</b>`) : w;
const cw = (h, p, extra = '') => `<div class="r-cw" role="note"${extra}><h3>📘 עֲבוֹדַת כִּתָּה בַּחוֹבֶרֶת — ${h}</h3><p>${p}</p></div>`;
const kbar = id => `<div class="k-msg" id="${id}Msg"></div><div class="k-bar"><button class="btn good" type="button" id="${id}Chk">✓ בּוֹדְקִים</button><button class="btn ghost" type="button" id="${id}Ans">👁 הַצִּיגוּ תְּשׁוּבוֹת</button><button class="btn ghost" type="button" id="${id}Rst">↺</button></div>`;
const result = (id, right, total) => { $(id + 'Msg').textContent = right + ' / ' + total; if (right === total) chime(); else beep(right ? 600 : 300, .2); };

/* ---------- header, step bar ---------- */
const BK = L.book ? " " + L.book : "";   /* workbook 2 on: book: 2 */
$('crumb').textContent = `LOMDIM LIKRO · שִׁעוּר קְרִיאָה ${L.n} · חוֹבֶרֶת קְרִיאָה וּכְתִיבָה${BK}, עַמּוּדִים ${L.pages}`;
if (L.book) document.querySelectorAll('.src').forEach(p => { p.innerHTML = p.innerHTML.replace('וּכְתִיבָה 1', 'וּכְתִיבָה ' + L.book); });
$('h1').textContent = L.title; $('heTitle').textContent = L.sub;
$('stepWarm').textContent = L.warm.step;
$('srcPages').textContent = L.pages;

/* ---------- 3-2-1 countdown ---------- */
let cdBusy = false;
function countdown(done, word) {
  if (cdBusy) return; cdBusy = true;
  const ov = $('rCd'), t = $('rCdT'); let n = 3; ov.classList.add('on'); t.textContent = n; beep(520);
  const tick = setInterval(() => {
    n--; if (n > 0) { t.textContent = n; beep(520); return; }
    clearInterval(tick); t.innerHTML = (word || 'אוֹמְרִים!') + '<small>בְּקוֹל, כֻּלָּם יַחַד</small>'; beep(880, .3);
    setTimeout(() => { ov.classList.remove('on'); cdBusy = false; if (done) done(); }, 1300);
  }, 1000);
}

/* ---------- 1. letter search (last lesson's letter) ---------- */
const SR = L.search;
$('sLead').textContent = `תִּפְזֹרֶת אוֹתִיּוֹת — מוֹצְאִים אֶת הַ־${SR.letter}`;
$('sSub').textContent = `מַקִּיפִים בְּעִפָּרוֹן כָּל ${SR.letter}: ${SR.ask}. עַל הַמָּסָךְ — הַמּוֹרֶה לוֹחֵץ עַל מִשְׁבֶּצֶת כְּדֵי לְהַקִּיף אוֹתָהּ, וּבַסּוֹף מַצִּיג אֶת כֻּלָּן.`;
$('rShowAll').textContent = `👁 הַצִּיגוּ אֶת כָּל הַ־${SR.letter}`;
$('sPdf').href = `Lomdim-likro-${L.key}-letter-search.pdf`;
$('sNote').innerHTML = note(SR.note || 'חֲזָרָה עַל הָאוֹת מֵהַשִּׁעוּר הַקּוֹדֵם. מְחַלְּקִים כַּרְטִיס לְכָל תַּלְמִיד. הַתַּלְמִידִים מַקִּיפִים בְּשֶׁקֶט. בַּסּוֹף הַמּוֹרֶה לוֹחֵץ "הַצִּיגוּ" וְסוֹפְרִים יַחַד.');
const grid = $('rSearch'); let targets = 0;
SR.rows.forEach(row => row.forEach(c => {
  const t = c[0] === '*', s = t ? c.slice(1) : c; if (t) targets++;
  const b = document.createElement('button'); b.type = 'button'; b.className = 'r-cellb'; b.textContent = s; b.dataset.t = t ? '1' : '';
  b.onclick = () => {
    if (!t) { b.classList.add('wrong'); setTimeout(() => b.classList.remove('wrong'), 400); beep(260, .15); return; }
    b.classList.remove('show'); b.classList.toggle('circ'); beep(b.classList.contains('circ') ? 700 : 400, .1); count();
  };
  grid.appendChild(b);
}));
function count() { $('rFound').textContent = grid.querySelectorAll('.circ, .show').length + ' / ' + targets; }
$('rShowAll').onclick = () => { grid.querySelectorAll('[data-t="1"]').forEach(b => { b.classList.remove('circ'); b.classList.add('show'); }); count(); beep(880, .25); };
$('rClr').onclick = () => { grid.querySelectorAll('.circ, .show').forEach(b => b.classList.remove('circ', 'show')); count(); };
count();

/* ---------- 2. warm-up: letters already learned ---------- */
const WU = L.warm.items;
$('wLead').textContent = L.warm.title;
$('wNote').innerHTML = note(L.warm.note);
if (L.warm.btn) $('wuRv').textContent = L.warm.btn;
if (L.warm.sub && $('wSub')) $('wSub').textContent = L.warm.sub;
let wi = 0, wRev = false;
const first = (w, sy) => { const m = sy && w.startsWith(sy) ? [null, sy, w.slice(sy.length)] : w.match(/^([א-ת][֑-ׇ]*)([\s\S]*)$/); return m ? `<b>${m[1]}</b>${m[2]}` : w; };
function wuShow() {
  const it = WU[wi]; wRev = false;
  $('wuPic').innerHTML = it.pic ? `<img src="${it.pic}" alt="" style="max-height:100%;max-width:100%">` : `<div class="sy${[...it.sy].length > 5 ? ' long' : ''}">${it.sy}</div>`;
  $('wuWord').textContent = it.pic ? '?' : ''; $('wuWord').className = 'w hid';
  $('wuSnd').textContent = '?'; $('wuSnd').className = 'v hid';
  $('wuCnt').textContent = (wi + 1) + ' / ' + WU.length;
}
function wuReveal() {
  const it = WU[wi]; wRev = true;
  if (it.known) { $('wuWord').className = 'w'; $('wuWord').textContent = it.he; $('wuSnd').textContent = ''; beep(880, .2); say(it.he); return; }
  if (it.pic) { $('wuWord').className = 'w'; $('wuWord').innerHTML = it.end ? markWord(it.he, it.sy) : first(it.he, it.sy); }
  $('wuSnd').className = 'v'; $('wuSnd').innerHTML = it.pic ? `<bdi dir="rtl">${it.sy}</bdi> = ${it.snd}` : it.snd;
  beep(880, .2); say(it.he || it.sy);
}
const wuGo = d => { wi = (wi + d + WU.length) % WU.length; wuShow(); };
$('wuRv').onclick = () => wRev ? wuGo(1) : wuReveal();
$('wuPic').onclick = () => wRev ? null : wuReveal();
$('wuNext').onclick = () => wuGo(1); $('wuPrev').onclick = () => wuGo(-1);
document.querySelectorAll('.rVoiceAny').forEach(c => c.onchange = () => { voiceOn = c.checked; document.querySelectorAll('.rVoiceAny').forEach(x => x.checked = voiceOn); });
wuShow();

/* ---------- 3a. letter card ---------- */
const C = L.card;
$('cLead').textContent = `כַּרְטִיס הָאוֹת: ${L.letter}`;
$('cSub').innerHTML = `לוֹחֲצִים עַל כָּל צוּרָה — שׁוֹמְעִים אֶת הַצְּלִיל וְקוֹרְאִים בְּקוֹל יַחַד (חוֹבֶרֶת, עַמּוּד ${C.page}). <span class="r-en" dir="ltr" style="display:block">${C.en}</span>`;
$('cBig').innerHTML = `<div class="l">${L.letter}</div><img src="${C.pic}" alt=""><div class="cap">${C.cap}</div>`;
$('cRead').innerHTML = C.read;
$('cNote').innerHTML = note(C.note);
if (C.cols) $('rForms').style.gridTemplateColumns = `repeat(${C.cols},1fr)`;
if (C.extra) {   /* small extra card: a final letter, or two letters with the same sound */
  /* extra may be one card or a list; an item [null, text, mark, sound] = a big letter/word without a picture (sound shown under it) */
  $('cExtra').innerHTML = [].concat(C.extra).map(E => `<div class="r-extra"><h3>${E.title}</h3><div class="r-exrow">${E.items.map(([img, w, m, snd]) => `<div class="r-exi" role="button" tabindex="0" data-say="${w}">${img ? `<img src="${img}" alt="">` : ''}<b${img ? '' : / /.test(w) ? ' class="mid"' : ' class="big"'}>${markWord(w, m || E.mark)}</b>${snd ? `<small dir="ltr">${snd}</small>` : ''}</div>`).join('')}</div>${E.line ? `<p>${E.line}</p>` : ''}</div>`).join('');
  $('cExtra').querySelectorAll('.r-exi').forEach(d => d.onclick = () => { d.classList.add('on'); beep(660, .12); say(d.dataset.say); });
}
const forms = $('rForms'), fEl = [];
C.forms.forEach(([s, lab, plain]) => {
  const d = document.createElement('div'); d.className = 'r-form' + (plain ? ' plain' : ''); d.tabIndex = 0; d.setAttribute('role', 'button');
  d.innerHTML = `<span class="s">${s}</span><span class="snd">${lab}</span>`;
  d.onclick = () => { d.classList.add('on'); say(s); beep(660, .12); };
  d.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); d.click(); } };
  forms.appendChild(d); fEl.push(d);
});
let fi = -1;
const ORD = C.order || fEl.map((_, i) => i);   /* click order when it differs from the book's layout */
$('rFormsNext').onclick = () => { fi = (fi + 1) % (fEl.length + 1); fEl.forEach(e => e.classList.remove('on')); if (fi < fEl.length) fEl[ORD[fi]].click(); };
$('rFormsAll').onclick = () => { fEl.forEach(e => e.classList.add('on')); fi = fEl.length - 1; };

/* ---------- 3b. the "קִרְאוּ" board ---------- */
const B = L.board, BI = [];
$('bSub').textContent = `הַמּוֹרֶה מְצַבִּיעַ עַל הֲבָרָה, הַכִּתָּה סוֹפֶרֶת 3-2-1 וְאוֹמֶרֶת אֶת הַצְּלִיל בְּקוֹל. אַחַר כָּךְ הַמּוֹרֶה מַצִּיג אֶת הַצְּלִיל. הַסֵּדֶר מִימִין לִשְׂמֹאל, כְּמוֹ בַּחוֹבֶרֶת (עַמּוּד ${B.page}).`;
$('bNote').innerHTML = note(['אֵין כַּרְטִיסִים — הַכִּתָּה אוֹמֶרֶת אֶת הַצְּלִיל בְּקוֹל, וְאָז הַמּוֹרֶה לוֹחֵץ "הַצִּיגוּ אֶת הַצְּלִיל".'].concat(B.note || []));
const board = $('rBoard'), syl = [];
B.rows.forEach(r => {
  const row = document.createElement('div'); row.className = 'r-brow'; row.style.gridTemplateColumns = `repeat(${r.length},1fr)`;
  r.forEach(([s, snd, sz, pic]) => {
    const idx = BI.length; BI.push({ s, snd });
    const b = document.createElement('button'); b.type = 'button'; b.className = 'r-syl ' + (sz || 'm'); b.innerHTML = (pic ? `<img src="${pic}" alt="">` : '') + s; b.dataset.snd = snd;
    b.onclick = () => { bi = idx; bShow(); };
    row.appendChild(b); syl.push(b);
  });
  board.appendChild(row);
});
const pcard = document.createElement('div'); $('rPick').appendChild(pcard);
let bi = 0, bRev = false;
function bShow() {
  bRev = false; syl.forEach((s, i) => s.classList.toggle('cur', i === bi));
  pcard.className = 'r-card q'; pcard.innerHTML = '?<small>&nbsp;</small>';
  $('bCnt').textContent = (bi + 1) + ' / ' + BI.length;
}
function bReveal() { bRev = true; const b = BI[bi]; pcard.className = 'r-card hit'; pcard.innerHTML = `${b.s}<small>${b.snd}</small>`; beep(880, .25); say(b.s); }
const bGo = d => { bi = (bi + d + BI.length) % BI.length; bShow(); };
$('bRv').onclick = () => bRev ? bGo(1) : bReveal();
$('bNext').onclick = () => bGo(1); $('bPrev').onclick = () => bGo(-1);
$('bAll').onclick = () => board.classList.toggle('all');
$('bCd').onclick = () => countdown();
bShow();

/* ---------- 3c. see a letter, say the sound (shared drill; vowels = all) ---------- */
$('dSub').textContent = `אוֹת עִם תְּנוּעָה עַל הַמָּסָךְ — כָּל הַכִּתָּה אוֹמֶרֶת אֶת הַצְּלִיל בְּקוֹל — לְחִיצָה (אוֹ "👁 הַצְּלִיל") מַצִּיגָה אוֹתוֹ. הָאוֹתִיּוֹת שֶׁכְּבָר לָמַדְנוּ (${L.drill.join(', ')}) עִם כָּל הַתְּנוּעוֹת${L.finals ? ` + הָאוֹתִיּוֹת הַסּוֹפִיּוֹת ${L.finals.join(', ')} (בְּלִי תְּנוּעָה)` : ''}.`;
SoundDrill.mount($('sDrill'), { letters: L.drill, finals: L.finals });   /* finals: ['ן', 'ם'] = one card each, no vowel */

/* ---------- 4a. game first ---------- */
const G = L.game || { key: '', name: '' };
if (!L.game) {   /* no תּוֹפְסִים צְלִיל set for this letter (e.g. ב = v: no word starts with it): no game part, no ✔/✘ printable */
  $('gShort').closest('.sf-part').remove();
  document.querySelectorAll('#s6 a[href*="cards-yes-no"]').forEach(a => a.remove());
}
if (L.game) $('gShort').innerHTML = `<a class="sc" href="../games/tofsim-tzlil.html?letter=${G.key}" target="_blank" rel="noopener"><span class="ic">🔊</span><div><h3>תּוֹפְסִים צְלִיל · ${G.name}${G.mode === 'contains' ? ' — בְּתוֹךְ הַמִּלָּה' : G.mode === 'end' ? ' — בַּסּוֹף' : ''}</h3><p>תְּמוּנָה, ✔ / ✘, סְפִירָה וְחִשּׂוּף</p></div><span class="go">◀</span></a>
  <a class="sc" href="../games/tofsim-tzlil.html?letter=${G.key}&word=1" target="_blank" rel="noopener"><span class="ic">📖</span><div><h3>עִם הַמִּלָּה כְּתוּבָה</h3><p>רוֹאִים תְּמוּנָה וְגַם אֶת הַמִּלָּה</p></div><span class="go">◀</span></a>
  <a class="sc" href="../games/tzlil/cards-yes-no.pdf" target="_blank" rel="noopener"><span class="ic">✔✘</span><div><h3>כַּרְטִיסֵי ✔ / ✘</h3><p>לַמִּשְׂחָק (PDF)</p></div><span class="go">◀</span></a>`;
/* G.mode: 'contains' (יֵשׁ בַּמִּלָּה) / 'end' (נִגְמָר בְּ) — the same mode as the set in tzlil-sets.js */
const GQ = G.mode === 'contains' ? `יֵשׁ בַּמִּלָּה ${G.name}?` : G.mode === 'end' ? `נִגְמָר בְּ־${G.name}?` : `מַתְחִיל בְּ־${G.name}?`;
if (L.game) $('gSub').textContent = `תְּמוּנָה — וְהַכִּתָּה מַחְלִיטָה: ${GQ} כַּרְטִיסֵי ✔ / ✘ וְסְפִירָה 3-2-1. הַתְּמוּנוֹת שֶׁל הַחוֹבֶרֶת בָּאוֹת רִאשׁוֹנוֹת.`;

/* ---------- 4b. the workbook parts, in the book's order (L.do) ----------
 * types: 'line' (the ב p.8 engine; mark = a final letter -> the word label shows it coloured), 'strokes' (cmp = a letter shown
 * next to it for comparison), 'wb' (tabs of circle / drop / join / phrase pages; a page may add sentences), 'words' (p.68).
 * Older data (line / strokes / wb / wbNote) still works. */
const DO = L.do || [Object.assign({ type: 'line' }, L.line), Object.assign({ type: 'strokes' }, L.strokes), { type: 'wb', pages: L.wb, note: L.wbNote }];
if (L.doNote) $('gNoteTop').innerHTML = `<p class="r-top">📌 ${L.doNote}</p>`;
const JOINS = [];
const VOWSVG = {
  ka: '<rect x="112" y="220" width="56" height="12" rx="2"/><rect x="134" y="220" width="12" height="34" rx="2"/>',
  pa: '<rect x="112" y="220" width="56" height="12" rx="2"/>',
  sv: '<circle cx="140" cy="222" r="9"/><circle cx="140" cy="250" r="9"/>',
  hp: '<rect x="96" y="220" width="56" height="12" rx="2"/><circle cx="176" cy="222" r="9"/><circle cx="176" cy="250" r="9"/>'
};
const P8 = { W: 1750, Y0: 300, H: 1900, c: [874, 1227, 262] };
const pct = (v, t) => (v / t * 100) + '%';

function partLine(P, id, root) {
  root.innerHTML = cw('עַמּוּד ' + P.page, 'כָּל תַּלְמִיד מוֹתֵחַ קַו בַּחוֹבֶרֶת. אַחַר כָּךְ בּוֹדְקִים יַחַד עַל הַמָּסָךְ: לוֹחֲצִים עַל תְּמוּנָה.', ' style="margin-top:22px"') +
    `<div class="k-page"><p class="k-ins">${P.ins}</p><div class="p8" id="${id}"></div>${kbar(id)}<span class="pn">${P.page}</span></div>` + note(P.note);
  const box = $(id), [cx, cy, cr] = P.c || P8.c;   /* P.c = the centre circle of this page, in render px */
  box.innerHTML = `<svg class="lines" viewBox="0 0 ${P8.W} ${P8.H}" preserveAspectRatio="none"></svg>
    <div class="ctr" style="left:${pct(cx - cr, P8.W)};top:${pct(cy - cr - P8.Y0, P8.H)};width:${pct(2 * cr, P8.W)};height:${pct(2 * cr, P8.H)}">${P.ctr}</div>` +
    P.pics.map(([img, he, , x1, x2, y1, y2], i) => `<button type="button" class="pc" data-k="${i}" aria-label="${he}" style="left:${pct(x1, P8.W)};top:${pct(y1 - P8.Y0, P8.H)};width:${pct(x2 - x1, P8.W)};height:${pct(y2 - y1, P8.H)}"><img src="${img}" alt=""><span class="x">✘</span>${P.mark ? `<span class="lb">${markWord(he, P.mark)}</span>` : ''}</button>`).join('');
  const svg = box.querySelector('svg'), drawn = new Set(), btn = k => box.querySelector(`.pc[data-k="${k}"]`);
  const seg = k => {
    const [, , , x1, x2, y1, y2] = P.pics[k];
    const px = (x1 + x2) / 2, py = (y1 + y2) / 2 - P8.Y0, ccy = cy - P8.Y0, dx = px - cx, dy = py - ccy, len = Math.hypot(dx, dy);
    const t = Math.min((x2 - x1) / 2 / Math.abs(dx || 1e-6), (y2 - y1) / 2 / Math.abs(dy || 1e-6));
    return `<line x1="${cx + dx / len * cr}" y1="${ccy + dy / len * cr}" x2="${px - dx * t}" y2="${py - dy * t}"/>`;
  };
  const draw = () => { svg.innerHTML = [...drawn].map(seg).join(''); };
  box.querySelectorAll('.pc').forEach(b => b.onclick = () => {
    const k = +b.dataset.k, p = P.pics[k]; $(id + 'Msg').textContent = '';
    if (p[2]) { if (drawn.has(k)) { drawn.delete(k); b.classList.remove('on', 'ok', 'miss'); } else { drawn.add(k); b.classList.add('on'); b.classList.remove('miss'); beep(760, .12); say(p[1]); } draw(); }
    else { b.classList.remove('no'); void b.offsetWidth; b.classList.add('no', 'xx'); beep(260, .2); say(p[1]); }
  });
  const check = show => {
    if (show) P.pics.forEach((p, k) => { if (p[2]) { drawn.add(k); btn(k).classList.add('on'); } else btn(k).classList.add('xx'); });
    draw(); let miss = 0;
    P.pics.forEach((p, k) => { if (!p[2]) return; const b = btn(k), has = drawn.has(k); b.classList.toggle('ok', has); b.classList.toggle('miss', !has); if (!has) miss++; });
    svg.querySelectorAll('line').forEach(l => l.classList.add('ok'));
    $(id + 'Msg').textContent = miss ? `חָסֵר עוֹד ${miss} ✏️` : '✔ כָּל הַכָּבוֹד!'; if (miss) beep(400, .2); else chime();
  };
  $(id + 'Chk').onclick = () => check(false); $(id + 'Ans').onclick = () => check(true);
  $(id + 'Rst').onclick = () => { drawn.clear(); draw(); $(id + 'Msg').textContent = ''; box.querySelectorAll('.pc').forEach(b => b.classList.remove('on', 'ok', 'miss', 'no', 'xx')); };
}

function partStrokes(ST, id, root) {
  root.innerHTML = `<div class="r-cw" role="note" style="margin-top:22px"><h3>📘 עֲבוֹדַת כִּתָּה בַּחוֹבֶרֶת — עַמּוּד ${ST.page}</h3><p>${ST.ins}</p>
    <div class="r-strokes"><div class="r-sbox" id="${id}Box"></div><div>${ST.cmp ? `<p class="r-cmp">${ST.cmp}</p>` : ''}<ul class="r-slist" id="${id}Steps"></ul>
    <div class="r-bar"><button class="btn" id="${id}Play" type="button">▶ הַנְפָּשָׁה</button><button class="btn ghost" id="${id}Next" type="button">קַו הַבָּא</button>
    ${ST.vows && ST.vows.length ? `<button class="btn ghost" id="${id}Vow" type="button">${ST.vowLabel}</button>` : ''}<button class="btn ghost" id="${id}Clr" type="button">↺</button></div></div></div></div>` + note(ST.note);
  const isDot = p => /h\.1$/.test(p);
  $(id + 'Box').innerHTML = `<svg viewBox="0 0 300 ${ST.h || 270}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="סדר הקווים">
    ${ST.paths.map(p => isDot(p) ? '' : `<path class="g" d="${p}"/>`).join('')}
    ${ST.paths.map((p, i) => `<path class="st" data-i="${i}" d="${p}" pathLength="1"${isDot(p) ? ' style="stroke-width:30"' : ''}/>`).join('')}
    ${ST.nums.map((n, i) => `<g class="num" data-i="${i}"><circle cx="${n[0]}" cy="${n[1]}" r="16"/><text x="${n[0]}" y="${n[1] + 8}">${i + 1}</text></g>`).join('')}
    ${(ST.vows || []).map((v, i) => `<g class="vow" data-v="${i}">${VOWSVG[v]}</g>`).join('')}</svg>`;
  $(id + 'Steps').innerHTML = ST.steps.map((t, i) => `<li data-i="${i}"><b>${i + 1}</b>${t}</li>`).join('');
  const box = $(id + 'Box'), NS = ST.paths.length;
  let si = 0, vm = -1, timers = [];
  const on = i => { box.querySelectorAll(`[data-i="${i}"]`).forEach(e => e.classList.add('on')); const li = $(id + 'Steps').querySelector(`[data-i="${i}"]`); if (li) li.classList.add('on'); };
  const clear = () => { timers.forEach(clearTimeout); timers = []; si = 0; vm = -1; box.querySelectorAll('.on').forEach(e => e.classList.remove('on')); $(id + 'Steps').querySelectorAll('li').forEach(e => e.classList.remove('on')); };
  $(id + 'Play').onclick = () => { clear(); for (let i = 0; i < NS; i++) timers.push(setTimeout(() => { on(i); beep(500 + i * 90, .1); }, i * 1100)); si = NS; };
  $(id + 'Next').onclick = () => { if (si >= NS) clear(); on(si); beep(500 + si * 90, .1); si++; };
  if ($(id + 'Vow')) $(id + 'Vow').onclick = () => { vm = vm + 1 >= ST.vows.length ? -1 : vm + 1; box.querySelectorAll('.vow').forEach(g => g.classList.toggle('on', +g.dataset.v === vm)); };
  $(id + 'Clr').onclick = clear;
}

function sentences(S, root, id) {
  /* a line is a string, or { t, pics: [img, ...] } (small pictures after the line, as in a story text); S.head = a story title;
   * S.qs = [[question, answer], ...] (click = reveal the answer) */
  const line = (l, i) => { const t = typeof l === 'string' ? l : l.t, ps = typeof l === 'string' ? [] : (l.pics || []);
    return `<div class="r-lrow"><button type="button" class="r-line" data-i="${i}">${t.split(' ').map(w => `<span>${w}</span>`).join(' ')}</button>${ps.map(p => `<img class="r-lpic" src="${p}" alt="">`).join('')}</div>`; };
  root.insertAdjacentHTML('beforeend', `<div class="r-sent${S.head ? ' story' : ''}"><p class="k-ins">${S.title || 'קִרְאוּ:'}</p><div class="r-sbody">${S.pic ? `<img src="${S.pic}" alt="">` : ''}<div class="r-lines">${S.head ? `<div class="r-lhead">${S.head}</div>` : ''}${S.lines.map(line).join('')}</div></div>
    <div class="k-bar"><button class="r-cd" type="button" id="${id}SCd">🕒 3… 2… 1… קוֹרְאִים!</button></div>
    ${S.qs ? `<div class="r-qs"><p class="k-ins">שְׁאֵלוֹת — לוֹחֲצִים עַל שְׁאֵלָה כְּדֵי לִרְאוֹת אֶת הַתְּשׁוּבָה:</p>${S.qs.map(([q, a]) => `<button type="button" class="r-q"><b>${q}</b><span class="a">${a}</span></button>`).join('')}</div>` : ''}</div>`);
  root.querySelectorAll('.r-q').forEach(b => b.onclick = () => { b.classList.toggle('on'); if (b.classList.contains('on')) { beep(880, .2); say(b.querySelector('.a').textContent); } });
  root.querySelectorAll('.r-line').forEach(b => b.onclick = () => {
    const ws = [...b.querySelectorAll('span')]; root.querySelectorAll('.r-line span').forEach(s => s.classList.remove('on'));
    ws.forEach((s, i) => setTimeout(() => { ws.forEach(x => x.classList.remove('on')); s.classList.add('on'); beep(600 + i * 60, .08); say(s.textContent.replace(/[.,!?]/g, '')); }, i * 900));
    setTimeout(() => ws.forEach(x => x.classList.add('on')), ws.length * 900);
  });
  $(id + 'SCd').onclick = () => countdown(null, 'קוֹרְאִים!');
}

function wbPage(w, id, box) {
  if (w.type === 'circle') {
    if (w.words) box.classList.add('words');   /* two whole words per box: smaller text */
    box.innerHTML = w.boxes.map(([img, he, two], j) => `<div class="bx" data-i="${j}"><img src="${img}" alt="${he}"><div class="two">${two.map(s => `<button type="button" data-s="${s}">${s}<span class="k-ring"></span></button>`).join('')}</div></div>`).join('');
    box.querySelectorAll('.bx').forEach(bx => bx.querySelectorAll('button').forEach(b => b.onclick = () => { bx.querySelectorAll('button').forEach(x => x.classList.remove('on', 'ok', 'no')); b.classList.add('on'); beep(640, .1); $(id + 'Msg').textContent = ''; }));
    const check = show => { let right = 0;
      box.querySelectorAll('.bx').forEach(bx => { const ans = w.boxes[+bx.dataset.i][3];
        bx.querySelectorAll('button').forEach(x => { if (show) x.classList.toggle('on', x.dataset.s === ans); const on = x.classList.contains('on'); x.classList.toggle('ok', on && x.dataset.s === ans); x.classList.toggle('no', on && x.dataset.s !== ans); if (on && x.dataset.s === ans) right++; }); });
      result(id, right, w.boxes.length); };
    $(id + 'Chk').onclick = () => check(false); $(id + 'Ans').onclick = () => check(true);
    $(id + 'Rst').onclick = () => { box.querySelectorAll('button').forEach(x => x.classList.remove('on', 'ok', 'no')); $(id + 'Msg').textContent = ''; };
  } else if (w.type === 'drop') {
    const bank = $(id + 'Bank');
    if (w.gaps) w.pics = w.gaps.map(g => [null, g.t, g.ans]);   /* complete the sentences: { t: 'דָן ___ לַגַן.', ans: [...] }, w.pic = a picture beside */
    bank.insertAdjacentHTML('beforeend', w.bank.map(s => `<button type="button">${s}</button>`).join(''));
    if (w.pics.length === 4) box.style.gridTemplateColumns = 'repeat(2,minmax(0,1fr))';   /* 2 x 2, as in the book */
    if (w.cols) box.style.gridTemplateColumns = `repeat(${w.cols},minmax(0,1fr))`;
    if (w.words) box.classList.add('words');
    if (w.sent) box.classList.add('sent');   /* whole sentences: picture and a long line side by side, one per row */
    if (w.gaps) { box.className = 'gaps';
      box.innerHTML = (w.pic ? `<img class="gp-pic" src="${w.pic}" alt="">` : '') + `<div class="gp-rows">${w.gaps.map((g, j) => { const [a, b] = g.t.split('___'); return `<div class="gp-row" data-i="${j}"><span class="gp-n">${j + 1}</span><span class="gp-t">${a}</span><button type="button" class="k-drop" data-i="${j}">&nbsp;</button><span class="gp-t">${b || ''}</span></div>`; }).join('')}</div>`;
      box.querySelectorAll('.gp-t').forEach(t => t.onclick = () => { const r = t.closest('.gp-row'), d = r.querySelector('.k-drop'); say(w.gaps[+r.dataset.i].t.replace('___', d.dataset.v || '')); });
    } else
    box.innerHTML = w.pics.map(([img, he], j) => `<div class="bx"><img src="${img}" alt="${he}"><button type="button" class="k-drop" data-i="${j}">&nbsp;</button></div>`).join('');
    const put = (drop, v) => { drop.textContent = v; drop.dataset.v = v; drop.classList.remove('ok', 'no'); beep(700, .08); $(id + 'Msg').textContent = ''; };
    let selW = null;
    box.querySelectorAll('.k-drop').forEach(d => d.onclick = () => { if (selW) { put(d, selW.textContent); selW.classList.remove('sel'); selW = null; } else if (d.dataset.v) { d.innerHTML = '&nbsp;'; delete d.dataset.v; d.classList.remove('ok', 'no'); } });
    bank.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => { if (b.dataset.dragged) return; if (w.words) say(b.textContent); if (selW) selW.classList.remove('sel'); selW = selW === b ? null : b; if (selW) b.classList.add('sel'); });
      b.addEventListener('pointerdown', e => {
        if ((e.button || 0) > 0) return; const sx = e.clientX, sy = e.clientY; let gh = null, hot = null;
        const at = ev => document.elementsFromPoint(ev.clientX, ev.clientY).find(x => x.classList && x.classList.contains('k-drop')) || null;
        const mv = ev => { if (!gh) { if (Math.hypot(ev.clientX - sx, ev.clientY - sy) < 8) return; gh = b.cloneNode(true); gh.classList.add('k-ghost'); (document.querySelector('.sf-cur') || document.body).appendChild(gh); }
          ev.preventDefault(); gh.style.left = ev.clientX + 'px'; gh.style.top = ev.clientY + 'px'; const h = at(ev); if (h !== hot) { if (hot) hot.classList.remove('hot'); hot = h; if (hot) hot.classList.add('hot'); } };
        const up = ev => { document.removeEventListener('pointermove', mv); document.removeEventListener('pointerup', up); document.removeEventListener('pointercancel', up);
          if (!gh) return; gh.remove(); if (hot) { hot.classList.remove('hot'); if (ev.type === 'pointerup') put(hot, b.textContent); } b.dataset.dragged = '1'; setTimeout(() => delete b.dataset.dragged, 60); };
        document.addEventListener('pointermove', mv, { passive: false }); document.addEventListener('pointerup', up); document.addEventListener('pointercancel', up);
      });
    });
    const check = show => { let right = 0;
      box.querySelectorAll('.k-drop').forEach(d => { const ans = w.pics[+d.dataset.i][2]; if (show) put(d, ans[0]); const ok = ans.includes(d.dataset.v); if (ok) right++; d.classList.toggle('ok', !!d.dataset.v && ok); d.classList.toggle('no', !!d.dataset.v && !ok); });
      result(id, right, w.pics.length); };
    $(id + 'Chk').onclick = () => check(false); $(id + 'Ans').onclick = () => check(true);
    $(id + 'Rst').onclick = () => { box.querySelectorAll('.k-drop').forEach(d => { d.innerHTML = '&nbsp;'; delete d.dataset.v; d.classList.remove('ok', 'no'); }); $(id + 'Msg').textContent = ''; };
  } else if (w.type === 'pick') {   /* circle the syllables that make the word: rows [{ pic, he, cells: [...], ans: [cell indexes], word }] */
    box.className = 'pk';
    box.innerHTML = w.rows.map((r, i) => `<div class="pk-row" data-i="${i}"><img src="${r.pic}" alt="${r.he || ''}"><div class="pk-cells">${r.cells.map((c, j) => `<button type="button" data-j="${j}">${c}<span class="k-ring"></span></button>`).join('')}</div><div class="pk-word"></div></div>`).join('');
    box.querySelectorAll('.pk-cells button').forEach(b => b.onclick = () => { b.classList.toggle('on'); b.classList.remove('ok', 'no'); beep(b.classList.contains('on') ? 700 : 400, .1); $(id + 'Msg').textContent = ''; });
    const check = show => { let right = 0;
      box.querySelectorAll('.pk-row').forEach(row => { const r = w.rows[+row.dataset.i]; let good = true;
        row.querySelectorAll('button').forEach(b => { const a = r.ans.includes(+b.dataset.j); if (show) b.classList.toggle('on', a); const on = b.classList.contains('on');
          b.classList.toggle('ok', on && a); b.classList.toggle('no', on && !a); if (on !== a) good = false; });
        row.querySelector('.pk-word').textContent = good ? r.word : ''; row.classList.toggle('done', good); if (good) right++; });
      result(id, right, w.rows.length); };
    $(id + 'Chk').onclick = () => check(false); $(id + 'Ans').onclick = () => check(true);
    $(id + 'Rst').onclick = () => { box.querySelectorAll('.pk-cells button').forEach(b => b.classList.remove('on', 'ok', 'no')); box.querySelectorAll('.pk-word').forEach(x => x.textContent = ''); box.querySelectorAll('.pk-row').forEach(x => x.classList.remove('done')); $(id + 'Msg').textContent = ''; };
  } else if (w.type === 'join' || w.type === 'phrase') {
    const j = w.type === 'join' ? JoinSounds.mount(box, { rows: w.rows, pics: w.pics, tip: w.tip, say, beep }) : JoinSounds.phrase(box, { rows: w.rows, say, beep, chime });
    JOINS.push(j);
    $(id + 'Chk').onclick = () => { const r = j.check(); result(id, r.right, r.total); };
    $(id + 'Ans').onclick = () => { j.show(); $(id + 'Msg').textContent = ''; chime(); };
    $(id + 'Rst').onclick = () => { j.reset(); $(id + 'Msg').textContent = ''; };
  }
  if (w.cd) { box.insertAdjacentHTML('beforebegin', `<div class="k-bar" style="justify-content:center;margin-bottom:10px"><button class="r-cd" type="button" id="${id}Cd">🕒 3… 2… 1… קוֹרְאִים!</button></div>`); $(id + 'Cd').onclick = () => countdown(null, 'קוֹרְאִים!'); }   /* w.cd = a 3-2-1 button above the tool */
  if (w.sentences) sentences(w.sentences, box.closest('.k-page'), id);
  if (w.type === 'text') box.remove();   /* a page that is only a text (w.sentences): no tool, no check bar */
}

function partWb(D, id, root) {
  const WB = D.pages;
  const pagesTxt = WB.length > 1 ? `עַמּוּדִים ${WB.slice(0, -1).map(w => w.page).join(', ')} וְ־${WB[WB.length - 1].page}` : `עַמּוּד ${WB[0].page}`;
  root.innerHTML = cw(pagesTxt, 'כָּל תַּלְמִיד עוֹשֶׂה אֶת הָעַמּוּד בַּחוֹבֶרֶת. אַחַר כָּךְ בּוֹדְקִים יַחַד עַל הַמָּסָךְ.', ' style="margin-top:22px"') +
    (WB.length > 1 ? `<div class="k-tabs">${WB.map((w, i) => `<button type="button" data-p="${i}" class="${i ? '' : 'on'}">עַמּוּד ${w.page}</button>`).join('')}</div>` : '') +
    `<div class="k-tabbed">${WB.map((w, i) => `<div class="k-page${i ? '' : ' on'}" data-page="${i}"><p class="k-ins">${w.ins}</p>${w.type === 'drop' ? `<div class="k-bank" id="${id}p${i}Bank"><b>${w.bankLabel || (w.words ? 'מַחְסַן מִלִּים: לוֹחֲצִים עַל מִלָּה וְאָז עַל הַקַּו (אוֹ גּוֹרְרִים)' : 'לוֹחֲצִים עַל צְלִיל וְאָז עַל הַקַּו (אוֹ גּוֹרְרִים)')}</b></div>` : ''}<div class="${w.type === 'circle' ? 'p10' : w.type === 'drop' ? 'p11' : 'pj'}" id="${id}p${i}"></div>${w.type === 'text' ? '' : kbar(id + 'p' + i)}<span class="pn">${w.page}</span></div>`).join('')}</div>` + note(D.note);
  root.querySelectorAll('.k-tabs button').forEach(b => b.onclick = () => { root.querySelectorAll('.k-tabs button').forEach(x => x.classList.toggle('on', x === b)); root.querySelectorAll('.k-page').forEach(p => p.classList.toggle('on', p.dataset.page === b.dataset.p)); setTimeout(() => JOINS.forEach(j => j.redraw()), 30); });
  WB.forEach((w, i) => wbPage(w, id + 'p' + i, $(id + 'p' + i)));
}

function partWords(D, id, root) {
  root.innerHTML = cw('עַמּוּד ' + D.page, D.sub || 'קוֹרְאִים יַחַד אֶת הַמִּלִּים.', ' style="margin-top:22px"') +
    `<div class="k-page"><p class="k-ins">${D.ins}</p><div class="r-scroll" id="${id}"></div>
    <div class="r-one" id="${id}One" hidden><div class="w"></div><div class="v" dir="ltr"></div></div>
    <div class="k-msg" id="${id}Msg"></div>
    <div class="k-bar"><button class="btn" type="button" id="${id}Mix">🔀 עִרְבּוּב</button><button class="r-cd" type="button" id="${id}Cd">🕒 3… 2… 1… קוֹרְאִים!</button><button class="btn good" type="button" id="${id}Rv">👁 הַצְּלִיל</button><button class="btn ghost" type="button" id="${id}Nx">הַבָּא ◀</button><button class="btn ghost" type="button" id="${id}Rst">↺</button></div>
    <span class="pn">${D.page}</span></div>` + note(D.note);
  const box = $(id), one = $(id + 'One'), flat = D.rows.flat();
  box.innerHTML = D.rows.map(r => `<div class="r-srow">${r.map(([w]) => `<button type="button">${w}</button>`).join('')}</div>`).join('');
  const btns = [...box.querySelectorAll('button')];
  const done = () => { if (btns.every(b => b.classList.contains('ok'))) { $(id + 'Msg').textContent = '🎉 כָּל הַכָּבוֹד! סִיַּמְנוּ אֶת הַחוֹבֶרֶת'; chime(); } };
  btns.forEach((b, i) => b.onclick = () => { b.classList.add('ok'); beep(700, .1); say(flat[i][0]); done(); });
  let order = [], oi = 0, rev = false;
  const showOne = () => { const [w] = flat[order[oi]]; one.hidden = false; one.querySelector('.w').textContent = w; one.querySelector('.v').textContent = '?'; rev = false; };
  $(id + 'Mix').onclick = () => { order = flat.map((_, i) => i).sort(() => Math.random() - .5); oi = 0; showOne(); };
  $(id + 'Nx').onclick = () => { if (!order.length) return $(id + 'Mix').click(); oi = (oi + 1) % order.length; showOne(); };
  $(id + 'Rv').onclick = () => { if (!order.length) return; const k = order[oi]; one.querySelector('.v').textContent = flat[k][1]; btns[k].classList.add('ok'); beep(880, .2); say(flat[k][0]); rev = true; done(); };
  $(id + 'Cd').onclick = () => countdown(null, 'קוֹרְאִים!');
  $(id + 'Rst').onclick = () => { btns.forEach(b => b.classList.remove('ok')); one.hidden = true; order = []; $(id + 'Msg').textContent = ''; };
}

const doBox = $('doParts');
DO.forEach((D, n) => {
  const part = document.createElement('div'); part.className = 'sf-part'; doBox.appendChild(part);
  const id = 'd' + n;
  if (D.type === 'line') partLine(D, id, part);
  else if (D.type === 'strokes') partStrokes(D, id, part);
  else if (D.type === 'wb') partWb(D, id, part);
  else if (D.type === 'words') partWords(D, id, part);
});
/* redraw join lines when a full-screen part opens or the page zooms */
addEventListener('resize', () => JOINS.forEach(j => j.redraw()));

/* ---------- 5. exit ticket on screen ---------- */
const X = L.exit;
$('xQ').textContent = X.q;
$('xPdf').href = `Lomdim-likro-${L.key}-exit-ticket.pdf`;
$('xRef').innerHTML = `<b>Reflection:</b> circle how you feel — “${X.reflect}”: 😀 🙂 😕`;
$('xNote').innerHTML = note(X.note);
const xl = r => (r.s.match(/[א-ת]/g) || []).length, wide = X.rows.some(r => xl(r) > 1), wider = X.rows.some(r => xl(r) > 5 || / /.test(r.s.trim()));   /* words in the exit ticket: a wider first column on every row */
$('rEx').innerHTML = X.rows.map((r, i) => (r.head ? `<p class="x-head r-en" dir="ltr">${r.head}</p>` : '') +
  `<div class="x-row${wide ? ' wd' : ''}${wider ? ' wdr' : ''}" data-i="${i}"><div class="sy">${r.s}</div>${r.items.map(([img, he], j) => `<button type="button" data-j="${j}" aria-label="${he}">${img ? `<img src="${img}" alt=""><span class="wd">${he}</span>` : `<b class="xw">${he}</b>`}<span class="k-ring"></span></button>`).join('')}</div>`).join('');
$('rEx').querySelectorAll('.x-row').forEach(row => row.querySelectorAll('button').forEach(b => b.onclick = () => { row.querySelectorAll('button').forEach(x => x.classList.remove('on', 'ok', 'no')); b.classList.add('on'); beep(640, .1); }));
$('exShow').onclick = () => { $('rEx').classList.add('rv'); $('rEx').querySelectorAll('.x-row').forEach(row => { const ok = X.rows[+row.dataset.i].ok; row.querySelectorAll('button').forEach(x => { const r = +x.dataset.j === ok; x.classList.toggle('on', r); x.classList.toggle('ok', r); x.classList.remove('no'); }); }); beep(880, .2); };
$('exClr').onclick = () => { $('rEx').classList.remove('rv'); $('rEx').querySelectorAll('button').forEach(x => x.classList.remove('on', 'ok', 'no')); };

/* ---------- printables ---------- */
$('pSearch').href = `Lomdim-likro-${L.key}-letter-search.pdf`; $('pSearchT').textContent = `תִּפְזֹרֶת אוֹתִיּוֹת (${SR.letter})`;
$('pExit').href = `Lomdim-likro-${L.key}-exit-ticket.pdf`;
if (L.wordsPdf) $('pExit').insertAdjacentHTML('afterend', `<a class="sc" href="Lomdim-likro-${L.key}-words.pdf" target="_blank" rel="noopener"><span class="ic">📖</span><div><h3>מִלִּים שֶׁאֲנַחְנוּ יְכוֹלִים לִקְרֹא</h3><p>"I can read" · 1 בְּדַף</p></div><span class="go">◀</span></a>`);   /* the closing word list (print-words.html) */
})();
