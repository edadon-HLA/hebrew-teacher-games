/* Olam Street 2.14 — four LISTENING lessons (parts 1-4). Shared by the 4 pages and all their printables.
 *
 * ===== THE RECORDING TIMES (seconds) — the ONLY place for them, used by all four pages =====
 * They are ESTIMATES (from the pauses and word counts). The teacher checks them by ear — mainly 0:15-0:21 (row 1/2) and
 * 0:45-0:49 (row 2/3) — and corrects the numbers HERE; every page picks the change up.                                   */
window.L214 = (() => {
const AUDIO = 'audio/2.14-comic.mp3';            /* the book's recording (workbook p.11), saved with the teacher's OK */
const ROWS = [[0.0, 17.9], [17.9, 47.2], [47.2, 84.8]];   /* row 1 = bubbles 1-4, row 2 = 5-8, row 3 = 9-15 */
const BUB = [                                     /* bubble 1 ... bubble 15: [start, end] */
  [0.2, 2.4], [2.9, 7.7], [8.2, 14.7], [15.4, 17.6],
  [18.2, 22.6], [23.5, 27.0], [27.6, 37.4], [38.4, 46.8],
  [47.6, 50.8], [51.4, 58.5], [58.8, 66.8], [67.1, 71.6], [72.4, 76.3], [76.9, 82.5], [83.1, 84.8],
];
/* ===== end of the times ===== */

/* the comic, exact nikud as printed (book quirks kept: לְפֶסְטִיבַל, בְּסָלַט, מְקַוֶּה) */
const B = [
  { who: 'keren', t: 'הַי, רוֹנִי! מָה שְׁלוֹמֵךְ?' },
  { who: 'roni',  t: 'הֵיי, קֶרֶן! הֵיי, דָּן! מָה שְׁלוֹמְכֶם? אֲנִי בַּדֶּרֶךְ לַפֶּסְטִיבָל בְּנִצָּנִים!' },
  { who: 'dan',   t: 'מְעֻלֶּה, גַּם אֲנַחְנוּ הוֹלְכִים לְפֶסְטִיבַל! אֲבָל אֲנַחְנוּ רְעֵבִים מַמָּשׁ, חָשַׁבְנוּ לַעֲצֹר בַּדֶּרֶךְ לֶאֱכֹל מַשֶּׁהוּ.' },
  { who: 'keren', t: 'גַּם אֲנִי רְעֵבָה. אֶשְׂמַח לְהִצְטָרֵף מָה אַתֶּם אוֹהֲבִים לֶאֱכֹל?' },
  { who: 'roni',  t: 'אֲנִי אוֹהֶבֶת פִּיצָה, בִּמְיֻחָד עִם טוּנָה.' },
  { who: 'dan',   t: 'פִּיצָה זֶה מְצֻיָּן! אֲנִי מַעֲדִיף פִּיצָה עִם הַרְבֵּה גְּבִינָה.' },
  { who: 'keren', t: 'גַּם אֲנִי אוֹהֶבֶת פִּיצָה, אֲבָל הָאֱמֶת שֶׁמִּתְחַשֵּׁק לִי מַמָּשׁ פַּסְטָה! אֶפְשָׁר לְהָכִין אוֹתָהּ בְּכָל מִינֵי רְטָבִים וּצְבָעִים.' },
  { who: 'roni',  t: 'לְגַמְרֵי, פַּסְטָה זֶה גַּם טָעִים מְאוֹד! וְאִם כְּבָר מְדַבְּרִים עַל מָה לֶאֱכֹל, בּוֹאוּ נִבְחַר מָה נֹאכַל לְקִנּוּחַ – אֲנִי תָּמִיד בְּעַד שׁוֹקוֹלָד.' },
  { who: 'dan',   t: 'שׁוֹקוֹלָד זֶה קִנּוּחַ מֻשְׁלָם! אֲנִי אוֹהֵב שׁוֹקוֹלָד מָרִיר.' },
  { who: 'keren', t: 'אֲנִי אוֹהֶבֶת שׁוֹקוֹלָד לָבָן עִם מַנְגּוֹ! זֶה פְּרִי כָּל כָּךְ מָתוֹק וְזֶה שִׁלּוּב מְצֻיָּן.' },
  { who: 'roni',  t: 'אֵין סָפֵק, מַנְגּוֹ זֶה פְּרִי טָעִים. מִשְׁתַּלֵּב גַּם כְּקִנּוּחַ וְגַם בְּסָלַט עִם אָבוֹקָדוֹ. מֻשְׁלָם.' },
  { who: 'dan',   t: 'וָאוּ, אֵיזֶה רַעְיוֹן מַגְנִיב! אֲנִי אַף פַּעַם לֹא אָכַלְתִּי מַנְגּוֹ בַּסָּלָט.' },
  { who: 'keren', t: 'זֶה נִשְׁמָע טָעִים! אוּלַי אֲנַחְנוּ יְכוֹלִים לִמְצֹא מַשֶּׁהוּ כָּזֶה בַּדֶּרֶךְ לַפֶּסְטִיבָל?' },
  { who: 'roni',  t: 'אֲנִי מְקַוֶּה... אֲנִי כְּבָר רְעֵבָה מַמָּשׁ. בּוֹאוּ נֵלֵךְ לְחַפֵּשׂ אֹכֶל לִפְנֵי שֶׁהַפֶּסְטִיבָל יַתְחִיל!' },
  { who: 'dan',   t: 'כֵּן, קָדִימָה! אֲנִי רָעֵב!' },
];
const PMAP = [1, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 10, 11, 12];   /* bubble -> panel picture (olam-2.14-panels/panel-N.jpg) */
/* where the speech-bubble TEXT is in each panel picture: [x1, x2, y1, y2] in % — covered by a plain bubble-coloured patch while the text is hidden */
const PATCH = { 1: [[0, 27, 2, 46], [60, 84, 25, 43]], 2: [[5, 94, 3, 52]], 3: [[5, 68, 10, 52]], 4: [[3, 54, 31, 60]], 5: [[1, 97, 25, 55]], 6: [[8, 80, 15, 51]],
  7: [[27, 96, 7, 43]], 8: [[0, 45, 8, 48], [51, 98, 17, 48]], 9: [[35, 100, 8, 49]], 10: [[2, 48, 7, 49], [51, 97, 1, 42]], 11: [[48, 100, 12, 90]], 12: [[10, 59, 50, 80]] };
B.forEach((b, i) => { b.p = PMAP[i]; b.row = i < 4 ? 1 : i < 8 ? 2 : 3; });
const CHARS = { keren: { he: 'קֶרֶן', color: '#e2506a' }, dan: { he: 'דָּן', color: '#23233a' }, roni: { he: 'רוֹנִי', color: '#d946a0' } };

/* ===== pictures: drawn art in the site style (viewBox 0 0 100 80, like FoodArt) ===== */
const S = (b, vb) => `<svg viewBox="${vb || '0 0 100 80'}" xmlns="http://www.w3.org/2000/svg">${b}</svg>`;
const K = '#3b2a1a', st = ` stroke="${K}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"`;
const kid = (x, y, shirt, hair, s, step) => {   /* a small walking kid, side view; step = leg swing */
  const a = step ? 9 : 5;
  return `<g transform="translate(${x} ${y}) scale(${s || 1})"><path d="M-2 30 L${-a} 46 M2 30 L${a} 46" fill="none" stroke="#34405e" stroke-width="5"/><path d="M-9 30 Q-10 12 0 11 Q10 12 9 30 Z" fill="${shirt}"${st}/><path d="M-6 16 L-13 26 M6 16 L13 24" stroke="#f6c9a0" stroke-width="4.5" stroke-linecap="round"/><circle cx="0" cy="3" r="8" fill="#f6c9a0"${st}/><path d="M-8 2 Q-8 -7 0 -6 Q8 -7 8 1 Q4 -3 0 -2 Q-4 -3 -8 2Z" fill="${hair}"/><circle cx="3.5" cy="3" r="1.3" fill="${K}"/></g>`;
};
const ART = {
  /* row 1 */
  festival: S(`<path d="M2 14 Q50 34 98 14" fill="none" stroke="${K}" stroke-width="2"/><path d="M14 20 l8 0 l-4 12z M34 25 l8 0 l-4 12z M58 25 l8 0 l-4 12z M78 20 l8 0 l-4 12z" fill="#e2506a" stroke="${K}" stroke-width="1.5"/><path d="M26 24 l8 0 l-4 12z M66 24 l8 0 l-4 12z" fill="#f4b400" stroke="${K}" stroke-width="1.5"/><rect x="8" y="46" width="84" height="32" fill="#7a4cc2"${st}/><path d="M8 46 h84 v7 h-84z" fill="#e2506a"/><path d="M20 78 v-18 q10 -8 20 0 v18 M60 78 v-18 q10 -8 20 0 v18" fill="#f6d77a"${st}/><path d="M50 56 l3 6 6.5 .6 -5 4.3 1.6 6.4 -6.1 -3.6 -6.1 3.6 1.6 -6.4 -5 -4.3 6.5 -.6z" fill="#ffd23f" stroke="${K}" stroke-width="1.4"/>`),
  baderech: S(`<path d="M30 80 L46 26 H54 L70 80 Z" fill="#8b8f9c"${st}/><path d="M50 32 V40 M50 48 V58 M50 66 V78" stroke="#fff" stroke-width="3"/><path d="M0 80 L30 80 L46 26 L0 30Z" fill="#9bd36a"/><path d="M100 80 L70 80 L54 26 L100 30Z" fill="#9bd36a"/><path d="M0 30 L46 26 H54 L100 30" fill="none" stroke="#6aa84f" stroke-width="2"/><rect x="74" y="20" width="4" height="44" fill="#8a5a2c"${st}/><path d="M60 10 H88 L96 18 L88 26 H60 Z" fill="#2f9d55"${st}/><path d="M66 18 H86 M80 13 L86 18 L80 23" fill="none" stroke="#fff" stroke-width="3"/>`),
  holchim: S(`<ellipse cx="50" cy="76" rx="44" ry="4" fill="#00000018"/><path d="M4 76 H96" stroke="#c9b99d" stroke-width="3" stroke-dasharray="8 6"/>${kid(36, 22, '#2a8bd0', '#3b2a1a', 1, true)}${kid(64, 22, '#e2506a', '#6b4423', 1, false)}<path d="M84 40 L94 46 L84 52" fill="none" stroke="#7a4cc2" stroke-width="3"/>`),
  hungry: '',   /* filled below from HungryArt (the 2.23-2.24 drawing) */
  laatzor: S(`<rect x="8" y="6" width="34" height="68" rx="8" fill="#23233a"${st}/><circle cx="25" cy="22" r="10" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/><circle cx="25" cy="22" r="13" fill="none" stroke="#fecaca" stroke-width="2" opacity=".8"/><circle cx="25" cy="44" r="9" fill="#5b4a1a"/><circle cx="25" cy="64" r="8" fill="#1f4a2e"/><path d="M54 74 V44 q0 -5 5 -5 t5 5 V30 q0 -5 5 -5 t5 5 v-4 q0 -5 5 -5 t5 5 v8 q0 -5 5 -5 t5 5 V74 Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="2.4" stroke-linejoin="round"/><text x="77" y="62" font-size="11" font-weight="800" fill="#fff" text-anchor="middle" font-family="Arial">STOP</text>`),
  /* row 2 */
  cheese: '',   /* FoodArt (2.21-2.22) */
  prefer: S(`<ellipse cx="26" cy="22" rx="20" ry="7" fill="#fff"${st}/><text x="26" y="25" font-size="18" text-anchor="middle">🍕</text><ellipse cx="74" cy="22" rx="20" ry="7" fill="#fff"${st}/><text x="74" y="25" font-size="18" text-anchor="middle">🍝</text><circle cx="74" cy="14" r="16" fill="none" stroke="#2f9d55" stroke-width="3.5"/><path d="M44 78 v-18 q0 -5 4 -5 t4 5 v-16 q0 -4 4 -4 t4 4 v8 q0 -4 4 -4 t4 4 v28 z" fill="#f6c9a0"${st} transform="rotate(-25 54 60)"/><path d="M56 40 L66 32" stroke="#2f9d55" stroke-width="3" stroke-dasharray="3 3"/>`),
  mitchashek: S(`<circle cx="30" cy="54" r="15" fill="#f6c9a0"${st}/><path d="M15 52 Q15 36 30 37 Q45 36 45 51 Q38 44 30 45 Q22 44 15 52Z" fill="#6b4423"/><circle cx="25" cy="54" r="2" fill="${K}"/><circle cx="35" cy="54" r="2" fill="${K}"/><path d="M25 61 q5 4 10 0" fill="none" stroke="${K}" stroke-width="2.2" stroke-linecap="round"/><path d="M14 80 Q15 70 30 69 Q45 70 46 80Z" fill="#2a8bd0"${st}/><circle cx="46" cy="36" r="3" fill="#fff"${st}/><circle cx="53" cy="28" r="4.5" fill="#fff"${st}/><path d="M60 22 q-6 -14 8 -16 q6 -8 18 -2 q12 -2 10 12 q8 10 -4 14 q-4 8 -16 4 q-10 6 -16 -4 q-6 -2 0 -8z" fill="#fff"${st}/><ellipse cx="77" cy="20" rx="13" ry="4.5" fill="#fff" stroke="${K}" stroke-width="1.8"/><path d="M67 18 q4 -6 8 0 q4 -6 8 0 q3 -5 6 0" fill="none" stroke="#e8b04a" stroke-width="2.6" stroke-linecap="round"/><circle cx="74" cy="15" r="2" fill="#e2506a"/><circle cx="81" cy="16" r="1.8" fill="#e2506a"/>`),
  yum: '',      /* HungryArt.kid('yum') — the 2.15-2.16 טָעִים card */
  dessert: S(`<path d="M18 46 h64 q-2 28 -32 28 q-30 0 -32 -28z" fill="#8ecae6"${st}/><rect x="36" y="72" width="28" height="5" rx="2.5" fill="#8ecae6"${st}/><circle cx="34" cy="40" r="13" fill="#f9a8c0"${st}/><circle cx="62" cy="40" r="13" fill="#8b5a3c"${st}/><circle cx="48" cy="28" r="13" fill="#fff4d6"${st}/><circle cx="48" cy="12" r="5" fill="#e11d48" stroke="${K}" stroke-width="2"/><path d="M48 7 q4 -5 9 -5" fill="none" stroke="${K}" stroke-width="2"/>`),
  /* row 3 */
  marir: S(`<rect x="4" y="22" width="40" height="52" rx="4" fill="#3b2316"${st}/><path d="M4 39 H44 M4 56 H44 M17 22 V74 M31 22 V74" stroke="#22130b" stroke-width="2"/><rect x="2" y="44" width="44" height="30" rx="3" fill="#1f2937"${st}/><text x="24" y="64" font-size="12" font-weight="800" fill="#fff" text-anchor="middle" font-family="Arial">90%</text><circle cx="72" cy="42" r="24" fill="#ffd23f"${st}/><path d="M60 34 l8 4 M84 34 l-8 4" stroke="${K}" stroke-width="2.6" stroke-linecap="round"/><path d="M62 42 q4 -3 8 0 M74 42 q4 -3 8 0" fill="none" stroke="${K}" stroke-width="2.4" stroke-linecap="round"/><path d="M68 47 q2 -2 4 0 M72 47 q2 -2 4 0" fill="none" stroke="${K}" stroke-width="1.6"/><path d="M62 56 q5 -5 10 0 t10 0" fill="none" stroke="${K}" stroke-width="2.6" stroke-linecap="round"/><path d="M90 52 q4 6 0 9 q-4 -3 0 -9z" fill="#8fc3ef"/>`),
  matok: S(`<path d="M4 40 l8 -6 v12z M44 40 l-8 -6 v12z" fill="#ec4899"${st}/><ellipse cx="24" cy="40" rx="13" ry="10" fill="#f472b6"${st}/><path d="M16 36 q8 -4 16 0 M16 44 q8 4 16 0" fill="none" stroke="#fff" stroke-width="2"/><path d="M10 62 q4 -10 14 -8 q10 -2 14 8 q-4 12 -14 12 q-10 0 -14 -12z" fill="#f4b400"${st}/><path d="M18 56 q6 -3 12 0" stroke="#fff6c2" stroke-width="2.4" fill="none"/><circle cx="72" cy="42" r="24" fill="#ffd23f"${st}/><path d="M62 38 q4 -5 8 0 M74 38 q4 -5 8 0" fill="none" stroke="${K}" stroke-width="2.6" stroke-linecap="round"/><path d="M60 48 Q72 66 84 48 Z" fill="#7a1f1f"${st}/><circle cx="58" cy="48" r="4" fill="#fb7185" opacity=".6"/><circle cx="86" cy="48" r="4" fill="#fb7185" opacity=".6"/>`),
  lavan: S(`<rect x="6" y="8" width="88" height="66" rx="10" fill="#f3f4f6" stroke="#cbd5e1" stroke-width="2"/><rect x="20" y="18" width="60" height="46" rx="4" fill="#fffdf5"${st}/><path d="M20 33 H80 M20 48 H80 M40 18 V64 M60 18 V64" stroke="#e7dfc9" stroke-width="2.4"/><path d="M14 64 l14 -10 l6 20 z" fill="#d1d5db"/><path d="M72 22 l6 -6 M76 28 l7 -4" stroke="#fff" stroke-width="2"/>`),
  pri: S(`<path d="M10 44 h80 q-4 30 -40 30 q-36 0 -40 -30z" fill="#c08a52"${st}/><path d="M14 52 h72" stroke="#8a5a2c" stroke-width="2"/><path d="M34 40 c0 -16 26 -18 26 2 c0 10 -26 12 -26 -2z" fill="#f4a73a"${st}/><path d="M50 22 q4 -6 10 -6" fill="none" stroke="#3f8f3a" stroke-width="2.4"/><circle cx="26" cy="38" r="11" fill="#e2394a"${st}/><path d="M26 27 q1 -5 4 -6" stroke="${K}" stroke-width="2"/><path d="M28 25 q6 -4 9 0 q-5 3 -9 0z" fill="#58b368"/><path d="M58 40 q12 -24 30 -16 q-4 4 -10 4 q-10 2 -14 14z" fill="#ffd23f"${st}/>`),
  kadima: S(`<ellipse cx="46" cy="76" rx="40" ry="4" fill="#00000018"/>${kid(30, 22, '#2f9d55', '#3b2a1a', 1, true)}${kid(54, 22, '#f08a24', '#6b4423', 1, true)}<path d="M8 30 h10 M4 40 h12 M8 50 h10" stroke="#9aa3b2" stroke-width="2.4" stroke-linecap="round"/><path d="M70 42 H94 M84 32 L96 42 L84 52" fill="none" stroke="#e2506a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`),
};
/* the 15 core words (5 per row, teacher: "A: 5 per row") */
const WORDS = {
  1: [['festival', 'פֶּסְטִיבָל'], ['baderech', 'בַּדֶּרֶךְ'], ['holchim', 'הוֹלְכִים'], ['hungry', 'רָעֵב'], ['laatzor', 'לַעֲצֹר']],
  2: [['cheese', 'גְּבִינָה'], ['prefer', 'מַעֲדִיף'], ['mitchashek', 'מִתְחַשֵּׁק לִי'], ['yum', 'טָעִים'], ['dessert', 'קִנּוּחַ']],
  3: [['marir', 'מָרִיר'], ['matok', 'מָתוֹק'], ['lavan', 'לָבָן'], ['pri', 'פְּרִי'], ['kadima', 'קָדִימָה']],
};
const FOODHE = { pizza: 'פִּיצָה', salad: 'סָלָט', tuna: 'טוּנָה', pasta: 'פַּסְטָה', chocolate: 'שׁוֹקוֹלָד', mango: 'מַנְגּוֹ', avocado: 'אָבוֹקָדוֹ' };
function fill(){   /* pictures from the other art files (load them before this one when they are needed) */
  if (window.HungryArt){ ART.hungry = HungryArt.hungry(); ART.yum = HungryArt.kid('yum', true); }
  if (window.FoodArt){ const F = {}; [].concat(FoodArt.foods4, FoodArt.foods2, FoodArt.foods3).forEach(f => { F[f.id] = f; });
    ART.cheese = FoodArt.html(F.cheese.pic); Object.keys(FOODHE).forEach(k => { if (F[k]) ART[k] = FoodArt.html(F[k].pic); }); }
}
fill();
const HE = {}; Object.values(WORDS).forEach(r => r.forEach(([k, he]) => { HE[k] = he; })); Object.assign(HE, FOODHE);

/* word searches (8 x 8, rows in reading order, first letter = right-most cell; words go right-to-left) */
const W = (he, r, c, n) => ({ he, r, c, n, d: 'h' });
const GRIDS = {
  1: { g: ['שוקולדרכ', 'זפיצהגנע', 'כטונהבדח', 'פסטהקזרי', 'גדמנגוכב', 'חמעלהזפק', 'רבכמציןד', 'ענסלטחגז'],
       w: [W('פִּיצָה', 1, 1, 4), W('סָלָט', 7, 2, 3), W('שׁוֹקוֹלָד', 0, 0, 6), W('טוּנָה', 2, 1, 4), W('פַּסְטָה', 3, 0, 4), W('מַנְגּוֹ', 4, 2, 4), W('מְעֻלֶּה', 5, 1, 4), W('מְצֻיָּן', 6, 3, 4)] },
  2: { g: ['פסטיבלגז', 'כהולכיםד', 'שוקולדבח', 'זנרעבכגי', 'גפיצהדזכ', 'דחטונהבג', 'בפסטהזחנ', 'נגמציןדב'],
       w: [W('פֶּסְטִיבָל', 0, 0, 6), W('רָעֵב', 3, 2, 3), W('הוֹלְכִים', 1, 1, 6), W('פִּיצָה', 4, 1, 4), W('טוּנָה', 5, 2, 4), W('פַּסְטָה', 6, 1, 4), W('שׁוֹקוֹלָד', 2, 0, 6), W('מְצֻיָּן', 7, 2, 4)] },
  3: { g: ['פסטיבלזג', 'אבוקדונד', 'זגבינהכח', 'כדקנוחבג', 'חמעדיףזנ', 'גזטעיםבד', 'נכמנגוחז', 'דברעבגזכ'],
       w: [W('גְּבִינָה', 2, 1, 5), W('קִנּוּחַ', 3, 2, 4), W('טָעִים', 5, 2, 4), W('מַעֲדִיף', 4, 1, 5), W('פֶּסְטִיבָל', 0, 0, 6), W('רָעֵב', 7, 2, 3), W('מַנְגּוֹ', 6, 2, 4), W('אָבוֹקָדוֹ', 1, 0, 6)] },
  4: { g: ['פסטיבלכז', 'זגבינהדח', 'כדקנוחזג', 'בגטעיםנד', 'חזמרירכב', 'דנמתוקגז', 'גכפריבחנ', 'נברעבזדכ'],
       w: [W('פֶּסְטִיבָל', 0, 0, 6), W('רָעֵב', 7, 2, 3), W('גְּבִינָה', 1, 1, 5), W('קִנּוּחַ', 2, 2, 4), W('טָעִים', 3, 2, 4), W('מָרִיר', 4, 2, 4), W('מָתוֹק', 5, 2, 4), W('פְּרִי', 6, 2, 3)] },
};
Object.values(GRIDS).forEach(x => { x.g = x.g.map(r => Array.from(r)); });
const cellsOf = w => Array.from({ length: w.n }, (_, i) => w.d === 'h' ? [w.r, w.c + i] : [w.r + i, w.c]);

/* worksheet part 2 ("listen and circle"): [target, other, other] in the order the teacher says them (spec) */
const CIRCLE = {
  1: [['hungry', 'pizza', 'laatzor'], ['festival', 'baderech', 'salad'], ['laatzor', 'holchim', 'hungry'], ['holchim', 'festival', 'tuna'], ['baderech', 'laatzor', 'pizza']],
  2: [['dessert', 'cheese', 'pizza'], ['cheese', 'yum', 'pasta'], ['yum', 'dessert', 'hungry'], ['mitchashek', 'prefer', 'chocolate'], ['prefer', 'mitchashek', 'cheese']],
  3: [['matok', 'marir', 'pri'], ['pri', 'lavan', 'kadima'], ['marir', 'matok', 'lavan'], ['kadima', 'pri', 'matok'], ['lavan', 'marir', 'kadima']],
  4: [['festival', 'dessert', 'matok'], ['cheese', 'lavan', 'hungry'], ['marir', 'yum', 'laatzor'], ['holchim', 'kadima', 'prefer'], ['pri', 'cheese', 'baderech']],
};
/* the target's position in each row (1-3, right to left), fixed so the sheet and the key match */
const POS = { 1: [2, 1, 3, 2, 1], 2: [3, 1, 2, 2, 3], 3: [1, 3, 2, 3, 1], 4: [2, 3, 1, 2, 3] };
const circleRow = (part, i) => { const [t, a, b] = CIRCLE[part][i], p = POS[part][i] - 1, r = [a, b]; r.splice(p, 0, t); return r; };

return { AUDIO, ROWS, BUB, B, CHARS, PATCH, ART, WORDS, HE, GRIDS, cellsOf, CIRCLE, POS, circleRow, fill };
})();
