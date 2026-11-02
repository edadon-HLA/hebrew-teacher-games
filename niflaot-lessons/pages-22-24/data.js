/* Niflaot pages 22-24 "מֵאֵיפֹה הֵם?" — shared data and drawings for the lesson page and its printables.
 * kid(opts) draws a simple child/adult (SVG <g>, origin = top centre, about 80 x 115 units).
 * worldMap(x, y, w) draws the simple map with the 5 cities of exercise 18. */
window.P2224 = (() => {
'use strict';

/* ---------- people ---------- */
const SKIN = '#f6d2b0';
function kid(o){
  o = Object.assign({ x: 0, y: 0, s: 1, hair: '#6b4423', shirt: '#2a8bd0', girl: false }, o);
  const hair = o.girl
    ? `<ellipse cx="-23" cy="44" rx="8" ry="19" fill="${o.hair}"/><ellipse cx="23" cy="44" rx="8" ry="19" fill="${o.hair}"/>`
    : '';
  const body = o.girl
    ? `<path d="M-34 114 L-17 64 Q0 58 17 64 L34 114 Z" fill="${o.shirt}"/>`
    : `<path d="M-28 114 Q-29 66 0 62 Q29 66 28 114 Z" fill="${o.shirt}"/>`;
  const top = o.bald
    ? `<path d="M-24 34 Q-25 22 -19 18 L-17 30 Z M24 34 Q25 22 19 18 L17 30 Z" fill="${o.hair}"/>`
    : `<path d="M-25 36 Q-26 7 0 8 Q26 7 25 36 Q14 19 0 20 Q-14 19 -25 36 Z" fill="${o.hair}"/>`;
  return `<g transform="translate(${o.x} ${o.y}) scale(${o.s})">
    ${hair}${body}
    <circle cx="0" cy="36" r="24" fill="${SKIN}"/>
    ${top}
    ${o.bun ? `<circle cx="0" cy="6" r="9" fill="${o.hair}"/>` : ''}
    <circle cx="-8" cy="37" r="2.8" fill="#23233a"/><circle cx="8" cy="37" r="2.8" fill="#23233a"/>
    <path d="M-8 47 Q0 53 8 47" fill="none" stroke="#23233a" stroke-width="2.4" stroke-linecap="round"/>
    ${o.glasses ? '<g fill="none" stroke="#23233a" stroke-width="2"><circle cx="-8" cy="37" r="7"/><circle cx="8" cy="37" r="7"/><path d="M-1 37h2"/></g>' : ''}
    ${o.beard ? `<path d="M-18 44 Q0 70 18 44 Q8 54 0 54 Q-8 54 -18 44 Z" fill="${o.hair}"/>` : ''}
    ${o.kippah ? '<path d="M-13 13 Q0 2 13 13 Z" fill="#1f3a8a"/>' : ''}
    ${o.heart ? '<path d="M0 96 C-12 86 -10 76 -3 77 Q0 78 0 82 Q0 78 3 77 C10 76 12 86 0 96 Z" fill="#e2506a"/>' : ''}
  </g>`;
}
const PEOPLE = {
  david:  { hair: '#e8c35a', shirt: '#d93a3a' },               /* blond boy, red shirt */
  sara:   { hair: '#6b4423', shirt: '#2a6fd0', girl: true },   /* girl, blue dress */
  lavi:   { hair: '#2b2b2b', shirt: '#f2c230' },               /* boy, yellow shirt */
  ariel:  { hair: '#5a3a1e', shirt: '#2f9e5b', kippah: true }, /* boy with kippah, green shirt */
  miriam: { hair: '#1f1f1f', shirt: '#f08a24', girl: true },   /* girl, orange shirt */
  tamir:  { hair: '#c8502a', shirt: '#7a5bd1' },               /* red-haired boy */
  matan:  { hair: '#3b2a1a', shirt: '#2a8bd0' },
  uri:    { hair: '#7a4b22', shirt: '#2f9e5b', glasses: true },
  dana:   { hair: '#8a5a2b', shirt: '#e2506a', girl: true },
  saba:   { hair: '#b9b9b9', shirt: '#5b6b80', bald: true, beard: true },
  savta:  { hair: '#c9c9c9', shirt: '#b04a8a', girl: true, bun: true },
  girl24: { hair: '#6b4423', shirt: '#f2c230', girl: true, heart: true }, /* p.24 girl, yellow shirt with a heart */
};
const person = (k, x, y, s) => kid(Object.assign({ x, y, s }, PEOPLE[k]));

/* ---------- exercise 18: children and cities (answers from the book, p.23) ---------- */
const CITIES = {
  london: { he: 'לוֹנְדוֹן', lon: -0.1, lat: 51.5, lx: -12, ly: -6, anchor: 'end' },
  paris:  { he: 'פָּרִיז', lon: 2.35, lat: 48.9, lx: -12, ly: 22, anchor: 'end' },
  telaviv:{ he: 'תֵּל אָבִיב', lon: 34.8, lat: 32.1, lx: 12, ly: 8, anchor: 'start' },
  mexico: { he: 'מֶקְסִיקוֹ סִיטִי', lon: -99.1, lat: 19.4, lx: 0, ly: 30, anchor: 'middle' },
  sydney: { he: 'סִידְנִי', lon: 151.2, lat: -33.9, lx: 0, ly: 30, anchor: 'middle' },
};
const KIDS18 = [
  { k: 'david',  name: 'דָּוִיד',  city: 'paris',   ans: 'הוּא מִפָּרִיז.',          me: 'אֲנִי מִפָּרִיז.' },
  { k: 'sara',   name: 'שָׂרָה',   city: 'london',  ans: 'הִיא מִלּוֹנְדוֹן.',        me: 'אֲנִי מִלּוֹנְדוֹן.' },
  { k: 'lavi',   name: 'לָבִיא',   city: 'telaviv', ans: 'הוּא מִתֵּל אָבִיב.',       me: 'אֲנִי מִתֵּל אָבִיב.' },
  { k: 'ariel',  name: 'אֲרִיאֵל', city: 'mexico',  ans: 'הוּא מִמֶּקְסִיקוֹ סִיטִי.', me: 'אֲנִי מִמֶּקְסִיקוֹ סִיטִי.' },
  { k: 'miriam', name: 'מִרְיָם',  city: 'sydney',  ans: 'הִיא מִסִּידְנִי.',         me: 'אֲנִי מִסִּידְנִי.' },
];

/* ---------- simple world map (equirectangular, lon/lat outlines) ---------- */
const LAND = [
  [[-168,66],[-140,70],[-95,72],[-80,63],[-60,55],[-66,45],[-76,38],[-81,31],[-81,25],[-97,26],[-97,19],[-87,21],[-83,10],[-79,8],[-92,15],[-105,20],[-115,30],[-124,40],[-124,48],[-135,58],[-150,60],[-165,60]],
  [[-80,8],[-60,10],[-50,0],[-35,-7],[-40,-22],[-48,-28],[-58,-38],[-65,-55],[-72,-50],[-71,-30],[-70,-18],[-81,-5]],
  [[-10,36],[-9,43],[-2,44],[-5,48],[2,51],[8,54],[10,58],[5,62],[15,69],[28,71],[40,67],[45,55],[40,45],[28,41],[23,37],[15,40],[12,44],[8,44],[3,42],[-5,36]],
  [[-5,50],[1,51],[2,53],[-2,56],[-3,58.5],[-6,57],[-5,54],[-3,54],[-5,51.5]],
  [[-17,21],[-10,30],[-5,36],[10,37],[20,32],[32,31],[35,28],[43,12],[51,12],[40,-5],[40,-15],[35,-25],[20,-35],[17,-29],[12,-17],[13,-5],[9,4],[-8,5],[-17,14]],
  [[28,41],[40,45],[45,55],[40,67],[60,70],[80,73],[110,77],[140,72],[180,68],[170,60],[160,58],[142,52],[135,43],[121,31],[120,22],[108,20],[105,10],[100,13],[98,8],[92,22],[80,15],[77,8],[72,20],[62,25],[56,26],[52,18],[43,12],[35,28],[34.5,31],[36,36]],
  [[114,-22],[122,-17],[131,-12],[137,-12],[142,-11],[146,-19],[153,-25],[151,-34],[145,-38],[138,-35],[130,-32],[115,-34]],
];
/* map area: lon -170..180, lat 80..-50 drawn into a box (x, y, w) */
function proj(lon, lat, x, y, w){ const k = w / 350; return [x + (lon + 170) * k, y + (80 - lat) * k]; }
function worldMap(x, y, w, opts = {}){
  const k = w / 350, h = 130 * k;
  const land = LAND.map(p => `<path d="M${p.map(([a, b]) => proj(a, b, x, y, w).map(n => n.toFixed(1)).join(' ')).join('L')}Z"/>`).join('');
  const fs = opts.fs || 22;
  const cities = Object.entries(CITIES).map(([id, c]) => {
    const [cx, cy] = proj(c.lon, c.lat, x, y, w);
    return `<g class="city" id="${opts.idp || 'c'}-${id}"><circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${opts.r || 7}" fill="#e2506a" stroke="#fff" stroke-width="2"/>
      <text direction="ltr" x="${(cx + c.lx).toFixed(1)}" y="${(cy + c.ly).toFixed(1)}" text-anchor="${c.anchor}" font-size="${fs}" font-weight="800" fill="#23233a" stroke="#fff" stroke-width="5" paint-order="stroke">${c.he}</text></g>`;
  }).join('');
  return `<rect x="${x}" y="${y}" width="${w}" height="${h.toFixed(1)}" rx="18" fill="#d8ecfa"/>
    <g fill="#bfe0b0" stroke="#7fae6e" stroke-width="1.5" stroke-linejoin="round">${land}</g>${cities}`;
}
const cityXY = (id, x, y, w) => proj(CITIES[id].lon, CITIES[id].lat, x, y, w);

/* ---------- entry ticket: word search (grid letters without nikud, word list with nikud) ----------
 * Rows are written in reading order (first letter = right-most cell). Words go right-to-left or top-down. */
const GRID = [
  'מאיפהטכשבע',
  'סתקוצעדבלג',
  'שעכלונדוןר',
  'בטצסקתמעשנ',
  'ישראלצגרהק',
  'דכעמבשתסוט',
  'צפריזעחיפה',
  'תבסשכקמדענ',
  'עטאיפהבשצס',
].map(r => Array.from(r));
const WORDS = [
  { he: 'מֵאֵיפֹה', r: 0, c: 0, d: 'h', n: 5 },
  { he: 'אֵיפֹה',   r: 8, c: 2, d: 'h', n: 4 },
  { he: 'גָּר',     r: 1, c: 9, d: 'v', n: 2 },
  { he: 'גָּרָה',   r: 4, c: 6, d: 'h', n: 3 },
  { he: 'לוֹנְדוֹן', r: 2, c: 3, d: 'h', n: 6 },
  { he: 'פָּרִיז',  r: 6, c: 1, d: 'h', n: 4 },
  { he: 'יִשְׂרָאֵל', r: 4, c: 0, d: 'h', n: 5 },
  { he: 'חֵיפָה',   r: 6, c: 6, d: 'h', n: 4 },
];
const cellsOf = w => Array.from({ length: w.n }, (_, i) => w.d === 'h' ? [w.r, w.c + i] : [w.r + i, w.c]);

/* ---------- p.22 maze: portraits and road signs only — no paths are drawn (the class follows the lines in the book) ---------- */
const MAZE_PEOPLE = [
  { id: 'tamir', he: 'תָּמִיר', who: ['tamir'] },
  { id: 'matanuri', he: 'מַתָּן וְאוּרִי', who: ['matan', 'uri'] },
  { id: 'dana', he: 'דָּנָה', who: ['dana'] },
  { id: 'sabasavta', he: 'סַבָּא וְסַבְתָּא', who: ['saba', 'savta'] },
];
const MAZE_SIGNS = [ { id: 'akko', he: 'עַכּוֹ' }, { id: 'haifa', he: 'חֵיפָה' }, { id: 'telaviv', he: 'תֵּל אָבִיב' }, { id: 'eilat', he: 'אֵילַת' } ];
return { kid, person, PEOPLE, CITIES, KIDS18, worldMap, cityXY, GRID, WORDS, cellsOf, MAZE_PEOPLE, MAZE_SIGNS };
})();
