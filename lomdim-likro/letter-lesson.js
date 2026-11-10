/* לוֹמְדִים לִקְרֹא — shared engine for the letter lessons (from the ת lesson on). The page HTML is the same for every letter
 * (copy Lomdim-likro-tav.html, change the <title> and the data file); everything else comes from <letter>/data.js (window.LL).
 * It is the approved ב page (Lomdim-likro-bet.html) turned into data: same 5 parts, same tools, same buttons.
 * Needs: lesson-kit.css, letter-lesson.css, sound-drill.js (+css), join-sounds.js (only if a page has type 'join').
 *
 * window.LL = {
 *   key, letter, n, pages, title, sub,                       // header + card texts
 *   search: { letter, ask, rows: ['*בָּ', 'מַ', ...] x 7, count },     // '*' = a target
 *   warm: { step, title, items: [{ sy, snd } | { he, sy, snd, pic }], note },
 *   card: { page, pic, cap, forms: [[syllable, label, plain?], ...], read, en, note },
 *   board: { page, rows: [[[s, snd, size], ...], ...], note },  // size l / m / s / w (word)
 *   drill: ['שׁ', 'בּ', ...],
 *   game: { key, name },
 *   line: { page, ins, ctr, pics: [[img, he, ok, x1, x2, y1, y2], ...], note },   // boxes in px of the 1750x2265 render
 *   strokes: { page, ins, paths, nums, steps, vows: ['ka','pa','sv','hp'], vowLabel, note },
 *   wb: [{ type: 'circle'|'drop'|'join', page, ins, ... }], wbNote,
 *   exit: { rows: [{ head?, s, ok, items: [[img, he], ...] }], q, reflect, note }
 * }
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
const cw = (h, p, extra = '') => `<div class="r-cw" role="note"${extra}><h3>📘 עֲבוֹדַת כִּתָּה בַּחוֹבֶרֶת — ${h}</h3><p>${p}</p></div>`;
const kbar = id => `<div class="k-msg" id="${id}Msg"></div><div class="k-bar"><button class="btn good" type="button" id="${id}Chk">✓ בּוֹדְקִים</button><button class="btn ghost" type="button" id="${id}Ans">👁 הַצִּיגוּ תְּשׁוּבוֹת</button><button class="btn ghost" type="button" id="${id}Rst">↺</button></div>`;
const result = (id, right, total) => { $(id + 'Msg').textContent = right + ' / ' + total; if (right === total) chime(); else beep(right ? 600 : 300, .2); };

/* ---------- header, step bar ---------- */
$('crumb').textContent = `LOMDIM LIKRO · שִׁעוּר קְרִיאָה ${L.n} · חוֹבֶרֶת קְרִיאָה וּכְתִיבָה, עַמּוּדִים ${L.pages}`;
$('h1').textContent = L.title; $('heTitle').textContent = L.sub;
$('stepWarm').textContent = L.warm.step;
$('srcPages').textContent = L.pages;

/* ---------- 3-2-1 countdown ---------- */
let cdBusy = false;
function countdown(done) {
  if (cdBusy) return; cdBusy = true;
  const ov = $('rCd'), t = $('rCdT'); let n = 3; ov.classList.add('on'); t.textContent = n; beep(520);
  const tick = setInterval(() => {
    n--; if (n > 0) { t.textContent = n; beep(520); return; }
    clearInterval(tick); t.innerHTML = 'אוֹמְרִים!<small>בְּקוֹל, כֻּלָּם יַחַד</small>'; beep(880, .3);
    setTimeout(() => { ov.classList.remove('on'); cdBusy = false; if (done) done(); }, 1300);
  }, 1000);
}

/* ---------- 1. letter search (last lesson's letter) ---------- */
const SR = L.search;
$('sLead').textContent = `תִּפְזֹרֶת אוֹתִיּוֹת — מוֹצְאִים אֶת הַ־${SR.letter}`;
$('sSub').textContent = `מַקִּיפִים בְּעִפָּרוֹן כָּל ${SR.letter}: ${SR.ask}. עַל הַמָּסָךְ — הַמּוֹרֶה לוֹחֵץ עַל מִשְׁבֶּצֶת כְּדֵי לְהַקִּיף אוֹתָהּ, וּבַסּוֹף מַצִּיג אֶת כֻּלָּן.`;
$('rShowAll').textContent = `👁 הַצִּיגוּ אֶת כָּל הַ־${SR.letter}`;
$('sPdf').href = `Lomdim-likro-${L.key}-letter-search.pdf`;
$('sNote').innerHTML = note('חֲזָרָה עַל הָאוֹת מֵהַשִּׁעוּר הַקּוֹדֵם. מְחַלְּקִים כַּרְטִיס לְכָל תַּלְמִיד. הַתַּלְמִידִים מַקִּיפִים בְּשֶׁקֶט. בַּסּוֹף הַמּוֹרֶה לוֹחֵץ "הַצִּיגוּ" וְסוֹפְרִים יַחַד.');
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
let wi = 0, wRev = false;
const first = (w, sy) => { const m = sy && w.startsWith(sy) ? [null, sy, w.slice(sy.length)] : w.match(/^([א-ת][֑-ׇ]*)([\s\S]*)$/); return m ? `<b>${m[1]}</b>${m[2]}` : w; };
function wuShow() {
  const it = WU[wi]; wRev = false;
  $('wuPic').innerHTML = it.pic ? `<img src="${it.pic}" alt="" style="max-height:100%;max-width:100%">` : `<div class="sy">${it.sy}</div>`;
  $('wuWord').textContent = it.pic ? '?' : ''; $('wuWord').className = 'w hid';
  $('wuSnd').textContent = '?'; $('wuSnd').className = 'v hid';
  $('wuCnt').textContent = (wi + 1) + ' / ' + WU.length;
}
function wuReveal() {
  const it = WU[wi]; wRev = true;
  if (it.pic) { $('wuWord').className = 'w'; $('wuWord').innerHTML = first(it.he, it.sy); }
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
const forms = $('rForms'), fEl = [];
C.forms.forEach(([s, lab, plain]) => {
  const d = document.createElement('div'); d.className = 'r-form' + (plain ? ' plain' : ''); d.tabIndex = 0; d.setAttribute('role', 'button');
  d.innerHTML = `<span class="s">${s}</span><span class="snd">${lab}</span>`;
  d.onclick = () => { d.classList.add('on'); say(s); beep(660, .12); };
  d.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); d.click(); } };
  forms.appendChild(d); fEl.push(d);
});
let fi = -1;
$('rFormsNext').onclick = () => { fi = (fi + 1) % (fEl.length + 1); fEl.forEach(e => e.classList.remove('on')); if (fi < fEl.length) fEl[fi].click(); };
$('rFormsAll').onclick = () => { fEl.forEach(e => e.classList.add('on')); fi = fEl.length - 1; };

/* ---------- 3b. the "קִרְאוּ" board ---------- */
const B = L.board, BI = [];
$('bSub').textContent = `הַמּוֹרֶה מְצַבִּיעַ עַל הֲבָרָה, הַכִּתָּה סוֹפֶרֶת 3-2-1 וְאוֹמֶרֶת אֶת הַצְּלִיל בְּקוֹל. אַחַר כָּךְ הַמּוֹרֶה מַצִּיג אֶת הַצְּלִיל. הַסֵּדֶר מִימִין לִשְׂמֹאל, כְּמוֹ בַּחוֹבֶרֶת (עַמּוּד ${B.page}).`;
$('bNote').innerHTML = note(['אֵין כַּרְטִיסִים — הַכִּתָּה אוֹמֶרֶת אֶת הַצְּלִיל בְּקוֹל, וְאָז הַמּוֹרֶה לוֹחֵץ "הַצִּיגוּ אֶת הַצְּלִיל".'].concat(B.note || []));
const board = $('rBoard'), syl = [];
B.rows.forEach(r => {
  const row = document.createElement('div'); row.className = 'r-brow'; row.style.gridTemplateColumns = `repeat(${r.length},1fr)`;
  r.forEach(([s, snd, sz]) => {
    const idx = BI.length; BI.push({ s, snd });
    const b = document.createElement('button'); b.type = 'button'; b.className = 'r-syl ' + (sz || 'm'); b.textContent = s; b.dataset.snd = snd;
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
$('dSub').textContent = `אוֹת עִם תְּנוּעָה עַל הַמָּסָךְ — כָּל הַכִּתָּה אוֹמֶרֶת אֶת הַצְּלִיל בְּקוֹל — לְחִיצָה (אוֹ "👁 הַצְּלִיל") מַצִּיגָה אוֹתוֹ. הָאוֹתִיּוֹת שֶׁכְּבָר לָמַדְנוּ (${L.drill.join(', ')}) עִם כָּל הַתְּנוּעוֹת.`;
SoundDrill.mount($('sDrill'), { letters: L.drill });

/* ---------- 4a. game first ---------- */
const G = L.game;
$('gShort').innerHTML = `<a class="sc" href="../games/tofsim-tzlil.html?letter=${G.key}" target="_blank" rel="noopener"><span class="ic">🔊</span><div><h3>תּוֹפְסִים צְלִיל · ${G.name}</h3><p>תְּמוּנָה, ✔ / ✘, סְפִירָה וְחִשּׂוּף</p></div><span class="go">◀</span></a>
  <a class="sc" href="../games/tofsim-tzlil.html?letter=${G.key}&word=1" target="_blank" rel="noopener"><span class="ic">📖</span><div><h3>עִם הַמִּלָּה כְּתוּבָה</h3><p>רוֹאִים תְּמוּנָה וְגַם אֶת הַמִּלָּה</p></div><span class="go">◀</span></a>
  <a class="sc" href="../games/tzlil/cards-yes-no.pdf" target="_blank" rel="noopener"><span class="ic">✔✘</span><div><h3>כַּרְטִיסֵי ✔ / ✘</h3><p>לַמִּשְׂחָק (PDF)</p></div><span class="go">◀</span></a>`;
$('gSub').textContent = `תְּמוּנָה — וְהַכִּתָּה מַחְלִיטָה: מַתְחִיל בְּ־${G.name}? כַּרְטִיסֵי ✔ / ✘ וְסְפִירָה 3-2-1. הַתְּמוּנוֹת שֶׁל הַחוֹבֶרֶת בָּאוֹת רִאשׁוֹנוֹת.`;

/* ---------- 4b. draw a line from the circle (the ב p.8 engine) ---------- */
const P = L.line, P8 = { W: 1750, Y0: 300, H: 1900, c: [874, 1227, 262] };
$('lCw').innerHTML = cw('עַמּוּד ' + P.page, 'כָּל תַּלְמִיד מוֹתֵחַ קַו בַּחוֹבֶרֶת. אַחַר כָּךְ בּוֹדְקִים יַחַד עַל הַמָּסָךְ: לוֹחֲצִים עַל תְּמוּנָה.', ' style="margin-top:22px"');
$('lIns').textContent = P.ins; $('lPn').textContent = P.page; $('lNote').innerHTML = note(P.note);
const pct = (v, t) => (v / t * 100) + '%';
const [cx, cy, cr] = P8.c;
$('p8').innerHTML = `<svg class="lines" viewBox="0 0 ${P8.W} ${P8.H}" preserveAspectRatio="none" id="p8L"></svg>
  <div class="ctr" style="left:${pct(cx - cr, P8.W)};top:${pct(cy - cr - P8.Y0, P8.H)};width:${pct(2 * cr, P8.W)};height:${pct(2 * cr, P8.H)}">${P.ctr}</div>` +
  P.pics.map(([img, he, , x1, x2, y1, y2], i) => `<button type="button" class="pc" data-k="${i}" aria-label="${he}" style="left:${pct(x1, P8.W)};top:${pct(y1 - P8.Y0, P8.H)};width:${pct(x2 - x1, P8.W)};height:${pct(y2 - y1, P8.H)}"><img src="${img}" alt=""><span class="x">✘</span></button>`).join('');
const p8Drawn = new Set();
function p8Line(k) {
  const [, , , x1, x2, y1, y2] = P.pics[k];
  const px = (x1 + x2) / 2, py = (y1 + y2) / 2 - P8.Y0, ccy = cy - P8.Y0, dx = px - cx, dy = py - ccy, len = Math.hypot(dx, dy);
  const sx = cx + dx / len * cr, sy = ccy + dy / len * cr;
  const hw = (x2 - x1) / 2, hh = (y2 - y1) / 2, t = Math.min(hw / Math.abs(dx || 1e-6), hh / Math.abs(dy || 1e-6));
  return `<line x1="${sx}" y1="${sy}" x2="${px - dx * t}" y2="${py - dy * t}"/>`;
}
const p8Draw = () => { $('p8L').innerHTML = [...p8Drawn].map(p8Line).join(''); };
const p8Btn = k => $('p8').querySelector(`.pc[data-k="${k}"]`);
$('p8').querySelectorAll('.pc').forEach(b => b.onclick = () => {
  const k = +b.dataset.k, p = P.pics[k]; $('p8Msg').textContent = '';
  if (p[2]) { if (p8Drawn.has(k)) { p8Drawn.delete(k); b.classList.remove('on', 'ok', 'miss'); } else { p8Drawn.add(k); b.classList.add('on'); b.classList.remove('miss'); beep(760, .12); say(p[1]); } p8Draw(); }
  else { b.classList.remove('no'); void b.offsetWidth; b.classList.add('no', 'xx'); beep(260, .2); say(p[1]); }
});
function p8Check(show) {
  if (show) P.pics.forEach((p, k) => { if (p[2]) { p8Drawn.add(k); p8Btn(k).classList.add('on'); } else p8Btn(k).classList.add('xx'); });
  p8Draw(); let miss = 0;
  P.pics.forEach((p, k) => { if (!p[2]) return; const b = p8Btn(k), has = p8Drawn.has(k); b.classList.toggle('ok', has); b.classList.toggle('miss', !has); if (!has) miss++; });
  $('p8L').querySelectorAll('line').forEach(l => l.classList.add('ok'));
  $('p8Msg').textContent = miss ? `חָסֵר עוֹד ${miss} ✏️` : '✔ כָּל הַכָּבוֹד!'; if (miss) beep(400, .2); else chime();
}
$('p8Chk').onclick = () => p8Check(false); $('p8Ans').onclick = () => p8Check(true);
$('p8Rst').onclick = () => { p8Drawn.clear(); p8Draw(); $('p8Msg').textContent = ''; $('p8').querySelectorAll('.pc').forEach(b => b.classList.remove('on', 'ok', 'miss', 'no', 'xx')); };

/* ---------- 4c. stroke order ---------- */
const ST = L.strokes;
$('tH').textContent = '📘 עֲבוֹדַת כִּתָּה בַּחוֹבֶרֶת — עַמּוּד ' + ST.page; $('tIns').textContent = ST.ins;
$('stVow').textContent = ST.vowLabel; $('tNote').innerHTML = note(ST.note);
/* vowel marks under the letter (centre x = 140) */
const VOWSVG = {
  ka: '<rect x="112" y="220" width="56" height="12" rx="2"/><rect x="134" y="220" width="12" height="34" rx="2"/>',
  pa: '<rect x="112" y="220" width="56" height="12" rx="2"/>',
  sv: '<circle cx="140" cy="222" r="9"/><circle cx="140" cy="250" r="9"/>',
  hp: '<rect x="96" y="220" width="56" height="12" rx="2"/><circle cx="176" cy="222" r="9"/><circle cx="176" cy="250" r="9"/>'
};
$('rStroke').innerHTML = `<svg viewBox="0 0 300 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="סדר הקווים של ${L.letter}">
  ${ST.paths.map(p => `<path class="g" d="${p}"/>`).join('')}
  ${ST.paths.map((p, i) => `<path class="st" id="st${i}" d="${p}" pathLength="1"/>`).join('')}
  ${ST.nums.map((n, i) => `<g class="num" id="nm${i}"><circle cx="${n[0]}" cy="${n[1]}" r="16"/><text x="${n[0]}" y="${n[1] + 8}">${i + 1}</text></g>`).join('')}
  ${ST.vows.map((v, i) => `<g class="vow" id="vw${i}">${VOWSVG[v]}</g>`).join('')}
</svg>`;
$('rSteps').innerHTML = ST.steps.map((t, i) => `<li id="sl${i}"><b>${i + 1}</b>${t}</li>`).join('');
const NS = ST.paths.length;
let si = 0, vowMode = -1, timers = [];
const stDraw = i => { $('st' + i).classList.add('on'); $('nm' + i).classList.add('on'); $('sl' + i).classList.add('on'); };
function stClear() { timers.forEach(clearTimeout); timers = []; si = 0; vowMode = -1; document.querySelectorAll('#rStroke .st, #rStroke .num, #rStroke .vow, #rSteps li').forEach(e => e.classList.remove('on')); }
$('stPlay').onclick = () => { stClear(); for (let i = 0; i < NS; i++) timers.push(setTimeout(() => { stDraw(i); beep(500 + i * 90, .1); }, i * 1100)); si = NS; };
$('stNext').onclick = () => { if (si >= NS) stClear(); stDraw(si); beep(500 + si * 90, .1); si++; };
$('stVow').onclick = () => { vowMode = vowMode + 1 >= ST.vows.length ? -1 : vowMode + 1; ST.vows.forEach((v, i) => $('vw' + i).classList.toggle('on', i === vowMode)); };
$('stClr').onclick = stClear;

/* ---------- 4d. more workbook pages: tabs (circle / drop / join) ---------- */
const WB = L.wb;
const pagesTxt = WB.length > 1 ? `עַמּוּדִים ${WB.slice(0, -1).map(w => w.page).join(', ')} וְ־${WB[WB.length - 1].page}` : `עַמּוּד ${WB[0].page}`;
$('wCw').innerHTML = cw(pagesTxt, 'כָּל תַּלְמִיד עוֹשֶׂה אֶת הָעַמּוּד בַּחוֹבֶרֶת. אַחַר כָּךְ בּוֹדְקִים יַחַד עַל הַמָּסָךְ.', ' style="margin-top:22px"');
$('wNote2').innerHTML = note(L.wbNote);
$('kTabs').innerHTML = WB.length > 1 ? WB.map((w, i) => `<button type="button" data-p="${i}" class="${i ? '' : 'on'}">עַמּוּד ${w.page}</button>`).join('') : '';
$('kTabbed').innerHTML = WB.map((w, i) => `<div class="k-page${i ? '' : ' on'}" data-page="${i}"><p class="k-ins">${w.ins}</p>${w.type === 'drop' ? `<div class="k-bank" id="w${i}Bank"><b>לוֹחֲצִים עַל צְלִיל וְאָז עַל הַקַּו (אוֹ גּוֹרְרִים)</b></div>` : ''}<div class="${w.type === 'circle' ? 'p10' : w.type === 'drop' ? 'p11' : 'pj'}" id="w${i}"></div>${kbar('w' + i)}<span class="pn">${w.page}</span></div>`).join('');
$('kTabs').querySelectorAll('button').forEach(b => b.onclick = () => { $('kTabs').querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); $('kTabbed').querySelectorAll('.k-page').forEach(p => p.classList.toggle('on', p.dataset.page === b.dataset.p)); const j = JOINS[b.dataset.p]; if (j) setTimeout(j.redraw, 30); });
const JOINS = {};
WB.forEach((w, i) => {
  const id = 'w' + i, box = $(id);
  if (w.type === 'circle') {
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
    bank.insertAdjacentHTML('beforeend', w.bank.map(s => `<button type="button">${s}</button>`).join(''));
    if (w.pics.length === 4) box.style.gridTemplateColumns = 'repeat(2,minmax(0,1fr))';   /* 2 x 2, as in the book */
    box.innerHTML = w.pics.map(([img, he], j) => `<div class="bx"><img src="${img}" alt="${he}"><button type="button" class="k-drop" data-i="${j}">&nbsp;</button></div>`).join('');
    const put = (drop, v) => { drop.textContent = v; drop.dataset.v = v; drop.classList.remove('ok', 'no'); beep(700, .08); $(id + 'Msg').textContent = ''; };
    let selW = null;
    box.querySelectorAll('.k-drop').forEach(d => d.onclick = () => { if (selW) { put(d, selW.textContent); selW.classList.remove('sel'); selW = null; } else if (d.dataset.v) { d.innerHTML = '&nbsp;'; delete d.dataset.v; d.classList.remove('ok', 'no'); } });
    bank.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => { if (b.dataset.dragged) return; if (selW) selW.classList.remove('sel'); selW = selW === b ? null : b; if (selW) b.classList.add('sel'); });
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
  } else if (w.type === 'join') {
    const j = JOINS[i] = JoinSounds.mount(box, { rows: w.rows, pics: w.pics, say, beep });
    $(id + 'Chk').onclick = () => { const r = j.check(); result(id, r.right, r.total); };
    $(id + 'Ans').onclick = () => { j.show(); $(id + 'Msg').textContent = ''; chime(); };
    $(id + 'Rst').onclick = () => { j.reset(); $(id + 'Msg').textContent = ''; };
  }
});
/* redraw join lines when a full-screen part opens or the page zooms */
addEventListener('resize', () => Object.values(JOINS).forEach(j => j.redraw()));

/* ---------- 5. exit ticket on screen ---------- */
const X = L.exit;
$('xQ').textContent = X.q;
$('xPdf').href = `Lomdim-likro-${L.key}-exit-ticket.pdf`;
$('xRef').innerHTML = `<b>Reflection:</b> circle how you feel — “${X.reflect}”: 😀 🙂 😕`;
$('xNote').innerHTML = note(X.note);
const wide = X.rows.some(r => (r.s.match(/[א-ת]/g) || []).length > 1);   /* words in the exit ticket: a wider first column on every row */
$('rEx').innerHTML = X.rows.map((r, i) => (r.head ? `<p class="x-head r-en" dir="ltr">${r.head}</p>` : '') +
  `<div class="x-row${wide ? ' wd' : ''}" data-i="${i}"><div class="sy">${r.s}</div>${r.items.map(([img, he], j) => `<button type="button" data-j="${j}" aria-label="${he}"><img src="${img}" alt=""><span class="wd">${he}</span><span class="k-ring"></span></button>`).join('')}</div>`).join('');
$('rEx').querySelectorAll('.x-row').forEach(row => row.querySelectorAll('button').forEach(b => b.onclick = () => { row.querySelectorAll('button').forEach(x => x.classList.remove('on', 'ok', 'no')); b.classList.add('on'); beep(640, .1); }));
$('exShow').onclick = () => { $('rEx').classList.add('rv'); $('rEx').querySelectorAll('.x-row').forEach(row => { const ok = X.rows[+row.dataset.i].ok; row.querySelectorAll('button').forEach(x => { const r = +x.dataset.j === ok; x.classList.toggle('on', r); x.classList.toggle('ok', r); x.classList.remove('no'); }); }); beep(880, .2); };
$('exClr').onclick = () => { $('rEx').classList.remove('rv'); $('rEx').querySelectorAll('button').forEach(x => x.classList.remove('on', 'ok', 'no')); };

/* ---------- printables ---------- */
$('pSearch').href = `Lomdim-likro-${L.key}-letter-search.pdf`; $('pSearchT').textContent = `תִּפְזֹרֶת אוֹתִיּוֹת (${SR.letter})`;
$('pExit').href = `Lomdim-likro-${L.key}-exit-ticket.pdf`;
})();
