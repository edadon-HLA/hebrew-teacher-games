/* shared/print-ind.js — helpers for the independent-work printables (with shared/print-ind.css).
 * Picture sources: 'bayit:<key>' (games/bayit-photos.js) · 'hach:<key>' (hacheder-sheli/data.js) · 'tzlil:<name>' (games/tzlil/pic-<name>.png)
 * · '@/<path from the site root>' · '<svg ...>' markup · URL. */
window.PI = (() => {
const ME = document.currentScript && document.currentScript.src;
const ROOT = ME ? new URL('../', ME).href : '../';
const src = s => !s ? '' : s.startsWith('bayit:') ? ((window.BAYIT_PH || {})[s.slice(6)] || '')
  : s.startsWith('hach:') ? ((window.HACHEDER || {}).PHOTOS || {})[s.slice(5)] || ''
  : s.startsWith('tzlil:') ? ROOT + 'games/tzlil/pic-' + s.slice(6) + '.png'
  : s.startsWith('@/') ? ROOT + s.slice(2) : s;
const pic = (s, style = '') => `<div class="pi-ph" style="${style}">${s && s.trim().startsWith('<') ? s : `<img src="${src(s)}" alt="">`}</div>`;
const top = (title, o = {}) => `<div class="pi-top"><div class="nm">${o.name === false ? '' : `שֵׁם: <span>${o.nameVal || ''}</span>`}</div><h1>${title}</h1>${o.tag ? `<span class="tg">${o.tag}</span>` : '<span></span>'}</div>`;
const ins = (n, t) => `<p class="pi-ins">${n ? `<b class="n">${n}</b>` : ''}<span>${t}</span></p>`;
const bank = (ws, h = 'בַּנְק מִלִּים') => `<div class="pi-bank"><span class="h">${h}</span>${ws.map(w => `<span>${w}</span>`).join('<span>·</span>')}</div>`;
const page = (html, cls = '') => `<div class="pg ${cls}">${html}</div>`;
const halves = (a, b) => page(`<div class="half">${a}</div><div class="half">${b === undefined ? a : b}</div>`, 'abs');
/* mixed order with a fixed seed */
const shuffle = (arr, seed = 7) => { const a = arr.slice(); let s = seed; const r = () => (s = (s * 9301 + 49297) % 233280) / 233280; for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

/* memory cards 60 x 60 mm, 9 per page; fronts, then mirrored backs (long-edge flip), then the key page (html) */
function cards({ items, label, title, key }){
  const pos = (i, back) => `grid-row:${Math.floor(i / 3) + 1};grid-column:${back ? 3 - (i % 3) : (i % 3) + 1}`;
  const chunks = []; for (let i = 0; i < items.length; i += 9) chunks.push(items.slice(i, i + 9));
  let h = chunks.map((c, p) => page(`<div class="cgrid">${c.map((it, i) => `<div class="cd" style="${pos(i)}">${it.html}<span class="set">${label}</span></div>`).join('')}</div><span class="plab">${p + 1} · ${title}</span>`, 'abs')).join('');
  const nf = chunks.length;
  const pages = chunks.map((_, p) => p + 1).join(' and ');
  h += chunks.map((c, p) => page(`<div class="cgrid">${c.map((it, i) => `<div class="cd bk" style="${pos(i, true)}"><span class="n">${it.num}</span><span class="set">${label}</span></div>`).join('')}</div>
    <div class="pnote">${p === 0 ? `<b>Printing:</b> Print pages ${chunks.map((_, k) => k + 1).join('-')}. Then print ${chunks.map((_, k) => `page ${nf + k + 1} on the back of page ${k + 1}`).join(' and ')} (flip on the long edge). Cut on the solid lines. Same number on the back = a pair. No double-sided printer? Use the answer key on page ${2 * nf + 1}.<br>` : ''}<b>Page ${nf + p + 1} = back of page ${p + 1}.</b></div>`, 'abs')).join('');
  return h + page(key);
}

/* dominoes 90 x 42 mm, 8 per page (2 x 4), RIGHT half = picture, LEFT half = word */
function dominoes({ tiles, label, title }){
  const out = []; for (let i = 0; i < tiles.length; i += 8) out.push(tiles.slice(i, i + 8));
  return out.map((c, p) => page(`<div class="dgrid">${c.map(t => `<div class="dm"><div class="w">${t.word}</div><div class="r">${t.pic ? pic(t.pic) : `<span class="star">${t.right || ''}</span>`}</div><span class="set">${label}</span></div>`).join('')}</div>
    <span class="plab" style="top:${4 * 42 + 4}mm">${p + 1} · ${title}</span>`, 'abs')).join('');
}

/* lines between element centres inside a page (answer keys) */
function connect(pgEl, pairs, o = {}){
  const P = pgEl.getBoundingClientRect(), c = (e, side) => { const r = e.getBoundingClientRect(); return [(side === 'l' ? r.left : side === 'r' ? r.right : r.left + r.width / 2) - P.left, r.top + r.height / 2 - P.top]; };
  let s = `<svg class="pi-ov" width="${P.width}" height="${P.height}" viewBox="0 0 ${P.width} ${P.height}" stroke="${o.color || '#2456a6'}" fill="none" stroke-width="${o.w || 2.4}" stroke-linecap="round">`;
  pairs.forEach(([a, b]) => { const [x1, y1] = c(a), [x2, y2] = c(b); s += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`; });
  pgEl.insertAdjacentHTML('beforeend', s + '</svg>');
}
/* run fn after images + fonts (the PDF is printed after this) */
function ready(fn){ let done = false; const go = () => { document.querySelectorAll('.pi-ov').forEach(e => e.remove()); fn(); };
  window.addEventListener('load', () => { go(); done = true; }); if (document.fonts) document.fonts.ready.then(() => { if (done) go(); }); }
/* the hide-and-seek house drawing (as bayit-shelanu/lesson.js): cb(crop(room, [x, y, w, h], pad)) -> svg markup */
function house(cb){
  fetch(ROOT + 'games/hebrew-hide-and-seek.html').then(r => r.text()).then(t => {
    const doc = new DOMParser().parseFromString(t, 'text/html'), defs = doc.querySelector('#house defs').outerHTML, G = {};
    ['living', 'kitchen', 'bedroom', 'bath', 'garden'].forEach(k => { const g = doc.getElementById('a-' + k); if (!g) return;
      if (window.HIDE_EXT && HIDE_EXT.art[k]) g.insertAdjacentHTML('beforeend', HIDE_EXT.art[k]); G[k] = g.outerHTML; });
    cb((k, [x, y, w, h], p = 6) => `<svg viewBox="${x - p} ${y - p} ${w + 2 * p} ${h + 2 * p}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">${defs}${G[k] || ''}</svg>`);
  });
}
return { house, src, pic, top, ins, bank, page, halves, shuffle, cards, dominoes, connect, ready };
})();
