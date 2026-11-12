/* Niflaot unit "הַבַּיִת שֶׁלָּנוּ" (lessons 1-4) — data shared by the lesson pages and bayit-shelanu/print.html.
 * WS[n]   = entry-ticket words (known words only); the grid is built by BSD.grid(n) with a fixed seed, so screen and PDF match.
 * Grid rows are in reading order (first letter = right-most cell); words go right-to-left or top-down. */
window.BSD = (() => {
const WS = {
  1: { seed: 11, title: 'מָה יֵשׁ בַּחֲדָרִים?', words: ['מִטְבָּח', 'סָלוֹן', 'מִקְלַחַת', 'שֻׁלְחָן', 'כִּסֵּא', 'סַפָּה', 'מְקָרֵר', 'חַלּוֹן'] },
  2: { seed: 22, title: 'בַּיִת אוֹ דִּירָה?', words: ['כִּיּוֹר', 'מַרְאָה', 'אַמְבַּטְיָה', 'תַּנּוּר', 'מְקָרֵר', 'סַפָּה', 'דֶּלֶת', 'שָׁעוֹן'] },
  3: { seed: 33, title: 'מָה עוֹשִׂים בַּבַּיִת?', words: ['סָלוֹן', 'מִטְבָּח', 'מִקְלַחַת', 'מִרְפֶּסֶת', 'בִּנְיָן', 'דִּירָה', 'קוֹמָה', 'מַעֲלִית'] },
  4: { seed: 44, title: 'שׁוֹאֲלִים וְעוֹנִים', words: ['מִטְבָּח', 'כִּיּוֹר', 'מַגֶּבֶת', 'כֻּרְסָה', 'יָשֵׁן', 'אוֹכֵל', 'קוֹרֵא', 'מְבַשֵּׁל'] },
};
const bare = w => w.normalize('NFD').replace(/[֑-ׇ]/g, '').replace(/\s+/g, '');
const FILL = 'אבגדהוזחטיכלמנסעפצקרשת';
function rnd(seed){ let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
function grid(n, rows = 9, cols = 10){
  const L = WS[n], R = rnd(L.seed * 7919 + 17);
  for (let attempt = 0; attempt < 400; attempt++){
    const g = Array.from({ length: rows }, () => Array(cols).fill('')), out = [];
    const list = L.words.map(he => ({ he, b: Array.from(bare(he)) })).sort((a, b) => b.b.length - a.b.length);
    let ok = true;
    for (const w of list){
      let placed = false;
      for (let t = 0; t < 300 && !placed; t++){
        const d = R() < .62 ? 'h' : 'v', n = w.b.length;
        const r = Math.floor(R() * (d === 'h' ? rows : rows - n + 1)), c = Math.floor(R() * (d === 'h' ? cols - n + 1 : cols));
        if (r < 0 || c < 0) continue;
        let fits = true;
        for (let i = 0; i < n; i++){ const ch = d === 'h' ? g[r][c + i] : g[r + i][c]; if (ch && ch !== w.b[i]){ fits = false; break; } }
        if (!fits) continue;
        for (let i = 0; i < n; i++){ if (d === 'h') g[r][c + i] = w.b[i]; else g[r + i][c] = w.b[i]; }
        out.push({ he: w.he, r, c, d, n }); placed = true;
      }
      if (!placed){ ok = false; break; }
    }
    if (!ok) continue;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (!g[r][c]) g[r][c] = FILL[Math.floor(R() * FILL.length)];
    const WORDS = L.words.map(he => out.find(o => o.he === he));
    return { GRID: g, WORDS, cellsOf: w => Array.from({ length: w.n }, (_, i) => w.d === 'h' ? [w.r, w.c + i] : [w.r + i, w.c]) };
  }
  return null;
}

/* room cards (lesson 1, reused in lessons 2-4): photo keys from games/bayit-photos.js */
const ROOMS = [
  { k: 'kitchen', he: 'מִטְבָּח', ph: 'kitchen' }, { k: 'bath', he: 'חֶדֶר רַחֲצָה', ph: 'bathroom' }, { k: 'living', he: 'סָלוֹן', ph: 'livingroom' },
  { k: 'bedroom', he: 'חֶדֶר שֵׁנָה', ph: 'bedroom' }, { k: 'balcony', he: 'מִרְפֶּסֶת', ph: 'balcony' }, { k: 'garden', he: 'גִּנָּה', ph: 'garden' },
];

/* exit tickets: screen (lesson page) and print use the same items */
const EXIT = {
  1: { rows: [
      { room: 'מִטְבָּח', opts: [['קֻמְקוּם', 'kettle'], ['סַכִּין', 'knife'], ['מַסְרֵק', 'comb'], ['מִיקְרוֹגַל', 'microwave']], ok: 2 },
      { room: 'חֶדֶר רַחֲצָה', opts: [['מִבְרֶשֶׁת שִׁנַּיִם', 'toothbrush'], ['שַׁמְפּוֹ', 'shampoo'], ['כֻּרְסָה', 'armchair'], ['מַגֶּבֶת', 'towel']], ok: 2 },
      { room: 'סָלוֹן', opts: [['שַׁלָּט', 'remote'], ['מַזְגָן', 'ac'], ['כָּרִית', 'cushion'], ['מֵדִיחַ כֵּלִים', 'dishwasher']], ok: 3 } ] },
  2: { bank: ['גַּג', 'חָצֵר', 'חֲנָיָה', 'שַׁעַר', 'פַּעֲמוֹן', 'תֵּבַת דֹּאַר', 'מַעֲלִית'],
       nums: [[1, 'roof', 'גַּג'], [2, 'yard', 'חָצֵר'], [3, 'parking', 'חֲנָיָה'], [4, 'gate', 'שַׁעַר'], [5, 'mailbox', 'תֵּבַת דֹּאַר'], [6, 'bell', 'פַּעֲמוֹן']],
       /* number circles on the HouseOut picture: [n, x, y, pointX, pointY] */
       marks: [[1, 150, 215, 200, 262], [2, 40, 520, 90, 515], [3, 470, 470, 470, 500], [4, 330, 520, 330, 560], [5, 745, 455, 744, 500], [6, 330, 405, 288, 428]],
       vb: [0, 180, 960, 430] },
  3: { bank: ['שׁוֹטֵף', 'עוֹשָׂה', 'נָח', 'מְצַחְצַחַת', 'עוֹשֶׂה', 'נָחָה'],
       items: [['אַבָּא', 'כֵּלִים בַּמִּטְבָּח.', 'שׁוֹטֵף'], ['שִׁיר', 'שִׁעוּרֵי בַּיִת בַּחֶדֶר שֶׁלָּהּ.', 'עוֹשָׂה'], ['סַבָּא', 'עַל הַסַּפָּה בַּסָּלוֹן.', 'נָח'], ['דָּנָה', 'שִׁנַּיִם בַּמִּקְלַחַת.', 'מְצַחְצַחַת']] },
  4: { text: 'אֲנִי גִּיל. אֲנִי מִשִּׁיקָגוֹ. אֲנִי גָּר בְּבַיִת פְּרָטִי. בַּחֶדֶר שֶׁלִּי יֵשׁ שֻׁלְחַן כְּתִיבָה וְהַרְבֵּה צַעֲצוּעִים. בַּמִּרְפֶּסֶת יֵשׁ מְכוֹנַת כְּבִיסָה. אַבָּא תּוֹלֶה כְּבִיסָה, וַאֲנִי מְקַפֵּל בְּגָדִים.',
       qs: [ { q: 'אֵיפֹה גִּיל גָּר?', opts: [{ ho: 'house', en: 'house' }, { ho: 'building', en: 'apartment building' }], ok: 0 },
             { q: 'מָה יֵשׁ בַּחֶדֶר שֶׁל גִּיל?', opts: [{ ph: 'desk', emo: '🧸', en: 'desk + toys' }, { ph: 'bathtub', en: 'bathtub' }, { ph: 'wu_fridge', en: 'fridge' }], ok: 0 },
             { q: 'מָה יֵשׁ בַּמִּרְפֶּסֶת?', opts: [{ ph: 'washer', en: 'washing machine' }, { ph: 'wu_sofa', en: 'sofa' }, { ph: 'oven', en: 'oven' }], ok: 0 },
             { q: 'מָה גִּיל עוֹשֶׂה?', opts: [{ va: 'fold', en: 'folding clothes' }, { va: 'hang', en: 'hanging laundry' }, { va: 'dishes', en: 'washing dishes' }], ok: 0 } ] },
};
return { WS, grid, bare, ROOMS, EXIT };
})();
