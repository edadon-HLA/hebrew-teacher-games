/* Niflaot "קָרוֹב / רָחוֹק" (Wed 11/25) — shared by the lesson page, its printables and games/karov-rachok-gavoha.html.
 * GRID rows in reading order (first letter = right-most cell); all words go right-to-left. Words the class already knows.
 * Pictures s1-street / s2-buildings / s2-kids: CET class item "בָּרְחוֹב | סִרְטוֹן", screens 1-2 (captured by the teacher's
 * order). Hotspots in % of the picture: x / y = centre, w / h = size; say = the sentence shown in the bubble and spoken.
 * PH: Wikimedia Commons photos (credits in the page notes). */
window.KAROV = (() => {
const GRID = [
  'אוטובוסזכע',
  'צרחובטפזקמ',
  'כמכוניתזעפ',
  'טזרמזורצפק',
  'פקצבנייןטכ',
  'זחנותכפצעט',
  'כעטפזאישצק',
  'עכבישזטפקצ',
  'קצזעטפכזעפ',
].map(r => Array.from(r));
const WORDS = [
  { he: 'רְחוֹב', r: 1, c: 1, d: 'h', n: 4 },
  { he: 'כְּבִישׁ', r: 7, c: 1, d: 'h', n: 4 },
  { he: 'אוֹטוֹבּוּס', r: 0, c: 0, d: 'h', n: 7 },
  { he: 'רַמְזוֹר', r: 3, c: 2, d: 'h', n: 5 },
  { he: 'מְכוֹנִית', r: 2, c: 1, d: 'h', n: 6 },
  { he: 'בִּנְיָן', r: 4, c: 3, d: 'h', n: 5 },
  { he: 'חֲנוּת', r: 5, c: 1, d: 'h', n: 4 },
  { he: 'אִישׁ', r: 6, c: 5, d: 'h', n: 3 },
];
const cellsOf = w => Array.from({ length: w.n }, (_, i) => w.d === 'h' ? [w.r, w.c + i] : [w.r + i, w.c]);

const box = (x1, x2, y1, y2) => ({ x: (x1 + x2) / 2, y: (y1 + y2) / 2, w: x2 - x1, h: y2 - y1 });
/* screen 1: רָחוֹק אוֹ קָרוֹב? */
const S1 = [
  Object.assign({ k: 'girl', say: 'הַיַּלְדָּה קְרוֹבָה.' }, box(82, 98, 62, 93)),
  Object.assign({ k: 'white', say: 'הַמְּכוֹנִית הַלְּבָנָה קְרוֹבָה.' }, box(6, 27, 79, 100)),
  Object.assign({ k: 'woman', say: 'הָאִישָׁה קְרוֹבָה.' }, box(12, 21, 37, 64)),
  Object.assign({ k: 'bus', say: 'הָאוֹטוֹבּוּס רָחוֹק.' }, box(59, 89, 18, 56)),
  Object.assign({ k: 'sign', say: 'הַשֶּׁלֶט רָחוֹק.' }, box(45, 51, 12, 20)),
  Object.assign({ k: 'boy', say: 'הַיֶּלֶד רָחוֹק.' }, box(47, 52, 22, 40)),
  Object.assign({ k: 'man', say: 'הָאִישׁ רָחוֹק.' }, box(56, 61, 3, 20)),
  Object.assign({ k: 'blue', say: 'הַמְּכוֹנִית הַכְּחֻלָּה רְחוֹקָה.' }, box(88, 95, 13, 24)),
  Object.assign({ k: 'tree', say: 'הָעֵץ רָחוֹק.' }, box(83, 88, 2, 16)),
  Object.assign({ k: 'bld', say: 'הַבִּנְיָנִים רְחוֹקִים.' }, box(63, 82, 0, 6)),
];
/* screen 2: גָּבוֹהַּ / נָמוּךְ */
const S2A = [
  Object.assign({ k: 'tall', say: 'הַבִּנְיָן גָּבוֹהַּ.' }, box(20, 48, 12, 94)),
  Object.assign({ k: 'short', say: 'הַבִּנְיָן נָמוּךְ.' }, box(63, 91, 45, 94)),
  Object.assign({ k: 'tree', say: 'הָעֵץ גָּבוֹהַּ.' }, box(2, 12, 8, 95)),
];
const S2B = [
  Object.assign({ k: 'boy', say: 'הַיֶּלֶד נָמוּךְ.' }, box(34, 47, 28, 82)),
  Object.assign({ k: 'girl', say: 'הַיַּלְדָּה גְּבוֹהָה.' }, box(53, 71, 18, 80)),
  Object.assign({ k: 'baby', say: 'הַתִּינוֹק נָמוּךְ.' }, box(77, 88, 55, 80)),
  Object.assign({ k: 'sign', say: 'הַשֶּׁלֶט גָּבוֹהַּ.' }, box(1, 21, 5, 86)),
];

const T = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/';
const wm = p => T + p + '/500px-' + p.split('/').pop();
const PH = {
  cars: wm('7/7e/Three_Riley_cars_parked_outside_The_Bell_-_geograph.org.uk_-_2927418.jpg'),
  buses: wm('9/9d/Two_buses_-_geograph.org.uk_-_7584127.jpg'),
  palms: wm('9/9f/Four_Palm_Trees.jpg'),
  balloons: wm('3/3d/Three_Balloons_GRV.jpg'),
  bikes: wm('1/19/500px_photo_two_parked_bicycles.jpg'),
  cones: wm('1/18/Traffic_cones_%28698425995%29.jpg'),
  ball: wm('9/96/Football_on_ground.jpg'),
  planeFar: wm('4/44/Aircraft_Contrails_Closeup.jpg'),
  planeNear: wm('6/69/Saab_340_-_33_Landing_-_090715.jpg'),
  dog: wm('9/9e/A_Close_Up_of_a_Beagle%E2%80%99s_face.jpg'),
  moon: wm('1/1b/Full_moon_in_night_sky_-_India.jpg'),
  mountains: wm('4/47/Asphalt_road_under_the_hills_%28Unsplash%29.jpg'),
  cat: wm('e/ec/Cat_close-up_2004_b.jpg'),
  bush: wm('8/85/The_small_bush_in_question_%2815448446787%29.jpg'),
  tower: wm('8/8c/Israel_Tel_Aviv_-_Azrieli_towers.jpg'),
  giraffe: wm('f/f8/Lascar_Giraffe_-_Nairobi_National_Park_%284525004734%29.jpg'),
  zebra: wm('f/f6/Champmans_Zebra_-_Adelaide_Zoo_-_Side_View.JPG'),
  cow: wm('3/38/HF_in_der_Rh%C3%B6n_auf_der_Weide.jpg'),
};

/* the game pool: pic = picture file in karov-rachok/ (with the item box) or a photo key; t = the statement; ok = true / false;
   fix = the correct sentence when false */
const GAME = [
  { pic: 's1-street.png', b: box(82, 98, 62, 93), t: 'הַיַּלְדָּה קְרוֹבָה.', ok: true },
  { pic: 's1-street.png', b: box(59, 89, 18, 56), t: 'הָאוֹטוֹבּוּס רָחוֹק.', ok: true },
  { pic: 's1-street.png', b: box(6, 27, 79, 100), t: 'הַמְּכוֹנִית רְחוֹקָה.', ok: false, fix: 'הַמְּכוֹנִית קְרוֹבָה.' },
  { pic: 's1-street.png', b: box(56, 61, 3, 20), t: 'הָאִישׁ קָרוֹב.', ok: false, fix: 'הָאִישׁ רָחוֹק.' },
  { pic: 's1-street.png', b: box(45, 51, 12, 20), t: 'הַשֶּׁלֶט רָחוֹק.', ok: true },
  { pic: 's2-buildings.png', b: box(20, 48, 12, 94), t: 'הַבִּנְיָן גָּבוֹהַּ.', ok: true },
  { pic: 's2-buildings.png', b: box(63, 91, 45, 94), t: 'הַבִּנְיָן גָּבוֹהַּ.', ok: false, fix: 'הַבִּנְיָן נָמוּךְ.' },
  { pic: 's2-kids.png', b: box(34, 47, 28, 82), t: 'הַיֶּלֶד גָּבוֹהַּ.', ok: false, fix: 'הַיֶּלֶד נָמוּךְ.' },
  { pic: 's2-kids.png', b: box(53, 71, 18, 80), t: 'הַיַּלְדָּה גְּבוֹהָה.', ok: true },
  { pic: 's2-kids.png', b: box(77, 88, 55, 80), t: 'הַתִּינוֹק גָּבוֹהַּ.', ok: false, fix: 'הַתִּינוֹק נָמוּךְ.' },
  { ph: 'tower', t: 'הַמִּגְדָּל נָמוּךְ.', ok: false, fix: 'הַמִּגְדָּל גָּבוֹהַּ.' },
  { ph: 'cat', t: 'הֶחָתוּל קָרוֹב.', ok: true },
  { ph: 'planeFar', t: 'הַמָּטוֹס קָרוֹב.', ok: false, fix: 'הַמָּטוֹס רָחוֹק.' },
  { ph: 'bush', t: 'הַשִּׂיחַ נָמוּךְ.', ok: true },
];

/* exit ticket: a simple map — a house in the middle; park + shop near, school + bus stop far */
function exitMap(){
  const lab = (x, y, t) => `<text x="${x}" y="${y}" font-size="15" font-weight="800" text-anchor="middle" fill="#23233a" font-family="Noto Sans Hebrew, Arial">${t}</text>`;
  const em = (x, y, e, s) => `<text x="${x}" y="${y}" font-size="${s}" text-anchor="middle" dominant-baseline="central">${e}</text>`;
  const path = (x, y) => `<line x1="200" y1="130" x2="${x}" y2="${y}" stroke="#9aa3b2" stroke-width="3" stroke-dasharray="6 6"/>`;
  return `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="map">
    <rect width="400" height="260" rx="14" fill="#f3f8ec"/>
    ${path(150, 130)}${path(256, 140)}${path(40, 34)}${path(360, 226)}
    ${em(200, 128, '🏠', 52)}
    ${em(146, 122, '🌳', 34)}${lab(140, 160, 'פַּארְק')}
    ${em(262, 134, '🏪', 32)}${lab(268, 172, 'חֲנוּת')}
    ${em(42, 30, '🏫', 34)}${lab(48, 70, 'בֵּית סֵפֶר')}
    ${em(356, 214, '🚏', 34)}${lab(330, 252, 'תַּחֲנָה')}
  </svg>`;
}
return { GRID, WORDS, cellsOf, S1, S2A, S2B, PH, GAME, exitMap };
})();
