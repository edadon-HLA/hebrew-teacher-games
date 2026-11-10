/* Picture sets for "תּוֹפְסִים צְלִיל" (games/tofsim-tzlil.html) and the Niflaot reading lessons.
 * One entry per letter (key = the ?letter= value), in alef-bet order — the game shows one picker button per entry.
 *   letter: the letter as shown      first: the sound at the start of the yes-words      sound: English label
 *   items:  { he: word with nikud, yes: starts with the sound, pic: image under games/tzlil/ | emo: emoji }
 * shin (pp. 4, 6) and bet (pp. 8, 10, 11, added at the end of this file) use pictures from the reading workbook
 * (Kamatz-Patach-Shvah, marked wb) first; the other letters use emoji.
 * mk(yes, no) builds the items list from two lists of [word, emoji] and mixes them (no-words spread between the yes-words).
 * No-words never start with a near sound of the letter (כּ/ק, ט/ת/ד, ס/שׂ/צ/ז, ח/כ, א/ע/ה, בּ/פּ/ו). */
(function () {
const mk = (yes, no) => { const out = [], n = yes.length + no.length; let y = 0, x = 0;
  for (let k = 0; k < n; k++){ const wantNo = x < no.length && (y >= yes.length || (k + 1) * no.length / n >= x + 1); const [he, emo] = wantNo ? no[x++] : yes[y++]; out.push({ he, yes: !wantNo, emo }); }
  return out; };
const set = (letter, first, sound, yes, no) => ({ letter, first, sound, title: first, items: mk(yes, no) });
/* common no-words */
const KELEV = ['כֶּלֶב', '🐶'], DAG = ['דָּג', '🐟'], SUS = ['סוּס', '🐴'], BAYIT = ['בַּיִת', '🏠'], SHEMESH = ['שֶׁמֶשׁ', '☀️'],
  MAYIM = ['מַיִם', '💧'], LEV = ['לֵב', '❤️'], NAHASH = ['נָחָשׁ', '🐍'], TAPUAH = ['תַּפּוּחַ', '🍎'];

window.TZLIL_SETS = {
  alef: set('א', 'א', 'a (alef)',
    [['אַרְיֵה', '🦁'], ['אַבָּא', '👨'], ['אִמָּא', '👩'], ['אֲוִירוֹן', '✈️'], ['אוֹטוֹבּוּס', '🚌'], ['אֲנָנָס', '🍍'], ['אֹרֶז', '🍚'], ['אַרְנָב', '🐰'], ['אֹזֶן', '👂'], ['אֲבַטִּיחַ', '🍉'], ['אֲגַס', '🍐']],
    [KELEV, DAG, SUS, BAYIT, MAYIM, SHEMESH, LEV]),
  bet: set('ב', 'בּ', 'b',
    [['בֵּיצָה', '🥚'], ['בָּרָק', '⚡'], ['בָּצָל', '🧅'], ['בּוּבָּה', '🪆']],
    [DAG, SUS, KELEV, SHEMESH, MAYIM, NAHASH]),
  gimel: set('ג', 'ג', 'g',
    [['גְּלִידָה', '🍦'], ['גָּמָל', '🐫'], ['גֶּשֶׁם', '🌧️'], ['גִּיטָרָה', '🎸'], ['גֶּזֶר', '🥕'], ['גְּבִינָה', '🧀'], ['גּוֹרִילָה', '🦍'], ['גֶּשֶׁר', '🌉'], ['גַּרְבַּיִם', '🧦']],
    [DAG, SUS, BAYIT, SHEMESH, MAYIM, LEV]),
  dalet: set('ד', 'ד', 'd',
    [['דָּג', '🐟'], ['דֻּבִּי', '🧸'], ['דְּבוֹרָה', '🐝'], ['דֶּלֶת', '🚪'], ['דִּינוֹזָאוּר', '🦖'], ['דּוֹלְפִין', '🐬'], ['דְּלַעַת', '🎃'], ['דֹּב', '🐻'], ['דֶּשֶׁא', '🌱'], ['דֶּגֶל', '🚩']],
    [SUS, KELEV, BAYIT, SHEMESH, MAYIM, NAHASH, LEV]),
  he: set('ה', 'ה', 'h',
    [['הַר', '⛰️'], ['הִיפּוֹפּוֹטָם', '🦛'], ['הַמְבּוּרְגֶּר', '🍔'], ['הֶלִיקוֹפְּטֶר', '🚁'], ['הַמְסְטֶר', '🐹'], ['הוֹקִי', '🏒']],
    [KELEV, DAG, SUS, MAYIM]),
  vav: set('ו', 'ו', 'v (vav)',
    [['וֶרֶד', '🌹'], ['וָפֶל', '🧇'], ['וִידֵאוֹ', '📹'], ['וִיטָמִינִים', '💊'], ['וָאזָה', '🏺']],
    [KELEV, DAG, SUS, MAYIM, SHEMESH]),
  zayin: set('ז', 'ז', 'z',
    [['זֶבְּרָה', '🦓'], ['זְאֵב', '🐺'], ['זַיִת', '🫒'], ['זְבוּב', '🪰'], ['זִקִּית', '🦎'], ['זֵר פְּרָחִים', '💐'], ['זָהָב', '🥇']],
    [KELEV, DAG, BAYIT, MAYIM, LEV]),
  het: set('ח', 'ח', 'ch (het)',
    [['חָתוּל', '🐱'], ['חָלָב', '🥛'], ['חַלּוֹן', '🪟'], ['חֲנֻכִּיָּה', '🕎'], ['חַרְגּוֹל', '🦗'], ['חוּלְצָה', '👕'], ['חַלָּזוֹן', '🐌'], ['חֲצִיל', '🍆'], ['חַסָּה', '🥬']],
    [DAG, SUS, BAYIT, SHEMESH, MAYIM, NAHASH, LEV]),
  tet: set('ט', 'ט', 't (tet)',
    [['טֶלֶפוֹן', '📞'], ['טַוָּס', '🦚'], ['טִיל', '🚀'], ['טֶלֶוִיזְיָה', '📺'], ['טְרַקְטוֹר', '🚜'], ['טִיפָּה', '💧'], ['טַבַּעַת', '💍'], ['טִירָה', '🏰'], ['טוֹסְט', '🥪']],
    [KELEV, SUS, BAYIT, SHEMESH, NAHASH, LEV]),
  yod: set('י', 'י', 'y',
    [['יֶלֶד', '👦'], ['יַלְדָּה', '👧'], ['יָם', '🌊'], ['יָרֵחַ', '🌙'], ['יַנְשׁוּף', '🦉'], ['יַהֲלוֹם', '💎'], ['יוֹם הֻלֶּדֶת', '🎂'], ['יְרָקוֹת', '🥦']],
    [KELEV, DAG, SUS, BAYIT, SHEMESH]),
  kaf: set('כ', 'כּ', 'k (kaf)',
    [['כֶּלֶב', '🐶'], ['כַּדּוּר', '⚽'], ['כּוֹבַע', '🧢'], ['כִּסֵּא', '🪑'], ['כּוֹכָב', '⭐'], ['כַּפִּית', '🥄'], ['כִּנּוֹר', '🎻'], ['כַּרְטִיס', '🎟️'], ['כַּדּוּרְסַל', '🏀'], ['כָּרִיךְ', '🥪'], ['כִּבְשָׂה', '🐑']],
    [DAG, SUS, BAYIT, SHEMESH, MAYIM, NAHASH, LEV]),
  lamed: set('ל', 'ל', 'l',
    [['לֵב', '❤️'], ['לִימוֹן', '🍋'], ['לֶחֶם', '🍞'], ['לִוְיָתָן', '🐋'], ['לְטָאָה', '🦎'], ['לֵיצָן', '🤡'], ['לָאמָה', '🦙'], ['לַפְּטוֹפּ', '💻']],
    [KELEV, DAG, SUS, BAYIT, SHEMESH, MAYIM]),
  mem: set('מ', 'מ', 'm',
    [['מַיִם', '💧'], ['מְכוֹנִית', '🚗'], ['מַחְשֵׁב', '💻'], ['מִטָּה', '🛏️'], ['מִטְרִיָּה', '☂️'], ['מַנְגּוֹ', '🥭'], ['מַפְתֵּחַ', '🔑'], ['מְלָפְפוֹן', '🥒'], ['מִשְׁקָפַיִם', '👓'], ['מִסְפָּרַיִם', '✂️'], ['מִכְתָּב', '✉️']],
    [KELEV, DAG, SUS, BAYIT, SHEMESH, LEV, TAPUAH]),
  nun: set('נ', 'נ', 'n',
    [['נָחָשׁ', '🐍'], ['נֵר', '🕯️'], ['נַעַל', '👟'], ['נָמֵר', '🐯'], ['נְמָלָה', '🐜'], ['נְסִיכָה', '👸'], ['נוֹצָה', '🪶'], ['נֶשֶׁר', '🦅']],
    [KELEV, DAG, SUS, BAYIT, SHEMESH, LEV]),
  samekh: set('ס', 'ס', 's (samekh)',
    [['סוּס', '🐴'], ['סַפָּה', '🛋️'], ['סֵפֶר', '📖'], ['סַבָּא', '👴'], ['סַבְתָּא', '👵'], ['סָלָט', '🥗'], ['סֻכָּרִיָּה', '🍬'], ['סְנָאִי', '🐿️'], ['סִירָה', '⛵'], ['סֻלָּם', '🪜'], ['סוּשִׁי', '🍣']],
    [KELEV, DAG, BAYIT, MAYIM, LEV, NAHASH, TAPUAH]),
  ayin: set('ע', 'ע', 'a (ayin)',
    [['עֵץ', '🌳'], ['עוּגָה', '🎂'], ['עַכְבָּר', '🐭'], ['עַכָּבִישׁ', '🕷️'], ['עֵינַיִם', '👀'], ['עֲנָבִים', '🍇'], ['עַגְבָנִיָּה', '🍅'], ['עִפָּרוֹן', '✏️'], ['עָנָן', '☁️'], ['עֵט', '🖊️'], ['עוּגִיָּה', '🍪']],
    [KELEV, DAG, SUS, BAYIT, SHEMESH, MAYIM, LEV]),
  pe: set('פ', 'פּ', 'p',
    [['פִּיל', '🐘'], ['פִּיצָה', '🍕'], ['פֶּרַח', '🌸'], ['פַּרְפַּר', '🦋'], ['פָּרָה', '🐄'], ['פִּינְגְּוִין', '🐧'], ['פַּסְטָה', '🍝'], ['פַּנָּס', '🔦'], ['פְּסַנְתֵּר', '🎹'], ['פּוֹפְּקוֹרְן', '🍿']],
    [KELEV, DAG, SUS, SHEMESH, MAYIM, LEV]),
  tsadi: set('צ', 'צ', 'ts',
    [['צָב', '🐢'], ['צִפּוֹר', '🐦'], ['צְפַרְדֵּעַ', '🐸'], ['צַלַּחַת', '🍽️'], ['צִיּוּר', '🎨'], ['צָהֹב', '🟡'], ['צְבִי', '🦌'], ['צַנְחָן', '🪂']],
    [KELEV, DAG, BAYIT, MAYIM, LEV, NAHASH]),
  qof: set('ק', 'ק', 'k (qof)',
    [['קוֹף', '🐒'], ['קִיפּוֹד', '🦔'], ['קֶשֶׁת', '🌈'], ['קְלָפִים', '🃏'], ['קַקְטוּס', '🌵'], ['קָפֶה', '☕'], ['קַרְנַף', '🦏'], ['קֻבִּיָּה', '🎲'], ['קְעָרָה', '🥣'], ['קֶרַח', '🧊']],
    [DAG, SUS, BAYIT, SHEMESH, MAYIM, LEV, NAHASH]),
  resh: set('ר', 'ר', 'r',
    [['רַכֶּבֶת', '🚆'], ['רוֹבּוֹט', '🤖'], ['רַדְיוֹ', '📻'], ['רַמְזוֹר', '🚦'], ['רֶגֶל', '🦵'], ['רִבּוּעַ', '🟥'], ['רוֹפֵא', '🧑‍⚕️'], ['רַקְדָנִית', '💃']],
    [KELEV, DAG, SUS, BAYIT, SHEMESH, MAYIM]),
  shin: {
    letter: 'שׁ', first: 'שׁ', sound: 'sh', title: 'שׁ',
    items: [
      { he: 'שָׁלוֹשׁ',   yes: true,  pic: 'tzlil/pic-three.png' },   /* wb */
      { he: 'שָׁטִיחַ',   yes: true,  pic: 'tzlil/pic-carpet.png' },  /* wb */
      { he: 'בַּיִת',     yes: false, pic: 'tzlil/pic-house.png' },   /* wb */
      { he: 'שָׁחוֹר',    yes: true,  pic: 'tzlil/pic-blot.png' },    /* wb */
      { he: 'תַּפּוּחַ',  yes: false, pic: 'tzlil/pic-apple.png' },   /* wb */
      { he: 'שָׁעוֹן',    yes: true,  pic: 'tzlil/pic-clock.png' },   /* wb */
      { he: 'בָּלוֹן',    yes: false, pic: 'tzlil/pic-balloon.png' }, /* wb */
      { he: 'שָׁמַיִם',   yes: true,  pic: 'tzlil/pic-sky.png' },     /* wb */
      { he: 'שְׁתַּיִם',  yes: true,  pic: 'tzlil/pic-two.png' },     /* wb */
      { he: 'שֶׁמֶשׁ',    yes: true,  emo: '☀️' },
      { he: 'סוּס',       yes: false, emo: '🐴' },
      { he: 'שׁוֹקוֹלָד', yes: true,  emo: '🍫' },
      { he: 'כֶּלֶב',     yes: false, emo: '🐶' },
      { he: 'שׁוּעָל',    yes: true,  emo: '🦊' },
      { he: 'דָּג',       yes: false, emo: '🐟' },
      { he: 'שִׁנַּיִם',  yes: true,  emo: '🦷' },
      { he: 'סַפָּה',     yes: false, emo: '🛋️' },
      { he: 'שִׁיר',      yes: true,  emo: '🎤' },
      { he: 'פִּיל',      yes: false, emo: '🐘' },
      { he: 'שׁוֹר',      yes: true,  emo: '🐂' }
    ]
  },
  tav: set('ת', 'ת', 't (tav)',
    [['תַּפּוּחַ', '🍎'], ['תּוּת', '🍓'], ['תַּרְנְגוֹל', '🐓'], ['תּוֹף', '🥁'], ['תַּפּוּז', '🍊'], ['תִּינוֹק', '👶'], ['תִּיק', '🎒'], ['תַּנִּין', '🐊'], ['תְּמוּנָה', '🖼️'], ['תֵּה', '🍵'], ['תִּירָס', '🌽']],
    [KELEV, SUS, BAYIT, SHEMESH, MAYIM, LEV, NAHASH])
};
/* bet: the reading-workbook pictures (pp. 8, 10, 11; lesson "לוֹמְדִים לִקְרֹא · בּ") come first, then the emoji items above */
window.TZLIL_SETS.bet.items = [
  { he: 'בָּנָנָה',     yes: true,  pic: 'tzlil/pic-banana.png' },   /* wb */
  { he: 'בַּרְוָז',     yes: true,  pic: 'tzlil/pic-duck.png' },     /* wb */
  { he: 'תַּפּוּחַ',    yes: false, pic: 'tzlil/pic-apple.png' },    /* wb */
  { he: 'בַּקְבּוּק',   yes: true,  pic: 'tzlil/pic-bottle.png' },   /* wb */
  { he: 'בַּיִת',       yes: true,  pic: 'tzlil/pic-house.png' },    /* wb */
  { he: 'תַּפּוּז',     yes: false, pic: 'tzlil/pic-orange.png' },   /* wb */
  { he: 'בָּלוֹן',      yes: true,  pic: 'tzlil/pic-balloon.png' },  /* wb */
  { he: 'בְּרוֹקוֹלִי', yes: true,  pic: 'tzlil/pic-broccoli.png' }, /* wb */
  { he: 'בְּגָדִים',    yes: true,  pic: 'tzlil/pic-clothes.png' }   /* wb */
].concat(window.TZLIL_SETS.bet.items);
})();
/* tav, qof, resh, alef: the reading-workbook pictures (lessons "לוֹמְדִים לִקְרֹא") come first, then the emoji items above
 * (emoji words that are now pictures are dropped) */
(() => {
const S = window.TZLIL_SETS, P = n => 'tzlil/pic-' + n + '.png';
const pre = (key, wb, drop) => { S[key].items = wb.map(([he, yes, n]) => ({ he, yes, pic: P(n) })).concat(S[key].items.filter(it => !drop.includes(it.he))); };
pre('tav', [['תַּפּוּחַ', true, 'apple'], ['קַר', false, 'cold'], ['תַּרְנְגוֹלֶת', true, 'hen'], ['תַּפּוּז', true, 'orange'], ['שְׁמוֹנֶה', false, 'eight'],
  ['תְּמוּנָה', true, 'frame'], ['רַגְלַיִם', false, 'legs']], ['תַּפּוּחַ', 'תַּפּוּז', 'תְּמוּנָה']);
pre('qof', [['קַר', true, 'cold'], ['רַכֶּבֶת', false, 'train'], ['אַגָּס', false, 'pear'], ['תַּרְנְגוֹלֶת', false, 'hen'], ['רַגְלַיִם', false, 'legs']], []);
pre('resh', [['רַכֶּבֶת', true, 'train'], ['אָרוֹן', false, 'wardrobe'], ['אַבָּא', false, 'father'], ['רַגְלַיִם', true, 'legs'], ['סַבָּא', false, 'oldman'],
  ['אַף', false, 'nose']], ['רַכֶּבֶת', 'רֶגֶל']);
pre('alef', [['אַף', true, 'nose'], ['חַלּוֹן', false, 'window'], ['אַגָּס', true, 'pear'], ['אַבָּא', true, 'father'], ['סַבָּא', false, 'oldman'],
  ['אָרוֹן', true, 'wardrobe']], ['אַבָּא', 'אֲגַס']);
})();
/* samekh, het, nun, gimel, he, pe, mem, tet: the reading-workbook pictures first (lessons "לוֹמְדִים לִקְרֹא", batches 2-3) */
(() => {
const S = window.TZLIL_SETS, P = n => 'tzlil/pic-' + n + '.png';
const pre = (key, wb, drop) => { S[key].items = wb.map(([he, yes, n]) => ({ he, yes, pic: P(n) })).concat(S[key].items.filter(it => !drop.includes(it.he))); };
pre('samekh', [['סָלָט', true, 'salad'], ['חַלּוֹן', false, 'window'], ['סַבְתָּא', true, 'grandma'], ['סַבָּא', true, 'oldman'], ['אָרוֹן', false, 'wardrobe'],
  ['סַנְדָּל', true, 'sandal'], ['סְפָרִים', true, 'books']], ['סַבָּא', 'סַבְתָּא', 'סָלָט']);
pre('het', [['חַם', true, 'hot'], ['חַלּוֹן', true, 'window'], ['נַעֲלַיִם', false, 'sneakers'], ['חָתוּל', true, 'kitten'], ['חָלָב', true, 'milk'],
  ['חָמֵשׁ', true, 'five']], ['חָתוּל', 'חָלָב', 'חַלּוֹן']);
pre('nun', [['נָחָשׁ', true, 'snake'], ['אַגָּס', false, 'pear'], ['נַעֲלַיִם', true, 'sneakers'], ['גַּרְבַּיִם', false, 'socks'], ['נַדְנֵדָה', true, 'swing'],
  ['גַּב', false, 'back']], ['נָחָשׁ', 'נַעַל']);
pre('gimel', [['גַּן', true, 'gan'], ['פַּרְפַּר', false, 'butterfly'], ['גַּב', true, 'back'], ['גַּרְבַּיִם', true, 'socks'], ['הָרִים', false, 'mountains'],
  ['גְּלִידָה', true, 'icecream']], ['גְּלִידָה', 'גַּרְבַּיִם']);
pre('he', [['הַר', true, 'mountains'], ['פַּרְפַּר', false, 'butterfly'], ['גַּן', false, 'gan'], ['סַפָּה', false, 'sofa'], ['חַסָּה', false, 'lettuce']], ['הַר']);
pre('pe', [['פַּרְפַּר', true, 'butterfly'], ['מָרָק', false, 'soup'], ['פַּרְצוּף', true, 'face'], ['מָטוֹס', false, 'plane'], ['פַּארְק', true, 'park'],
  ['מַגָּפַיִם', false, 'boots'], ['פְּרָחִים', true, 'flowers']], ['פַּרְפַּר', 'פֶּרַח']);
pre('mem', [['מָרָק', true, 'soup'], ['טַבַּעַת', false, 'ring'], ['מַתָּנָה', true, 'gift'], ['מַגָּפַיִם', true, 'boots'], ['דָּג', false, 'fish'],
  ['מָטוֹס', true, 'plane'], ['רָץ', false, 'runner'], ['מַיִם', true, 'water'], ['מֶלֶךְ', true, 'king']], ['מַיִם', 'דָּג']);
pre('tet', [['טַבַּעַת', true, 'ring'], ['מַיִם', false, 'water'], ['יָד', false, 'hand'], ['נָחָשׁ', false, 'snake'], ['מַתָּנָה', false, 'gift']], ['טַבַּעַת', 'נָחָשׁ']);
})();
/* lamed, dalet, yod: the reading-workbook 2 pictures first (lessons "לוֹמְדִים לִקְרֹא", workbook 2). ב (v) has no set: no word starts with it. */
(() => {
const S = window.TZLIL_SETS, P = n => 'tzlil/pic-' + n + '.png';
const pre = (key, wb, drop) => { S[key].items = wb.map(([he, yes, n]) => ({ he, yes, pic: P(n) })).concat(S[key].items.filter(it => !drop.includes(it.he))); };
pre('lamed', [['לַיְלָה', true, 'night'], ['אַגָּס', false, 'pear'], ['לָבָן', true, 'crayon'], ['דָּג', false, 'fish'], ['לָשׁוֹן', true, 'tongue'],
  ['עָנָן', false, 'cloud'], ['יַלְדָּה', false, 'girl']], ['דָּג']);
pre('dalet', [['דַּפִּים', true, 'papers'], ['יַלְדָּה', false, 'girl'], ['יָד', false, 'hand'], ['דָּג', true, 'fish'], ['אַרְבַּע', false, 'four'],
  ['יָרֵחַ', false, 'moon'], ['סַבְתָּא', false, 'grandma']], ['דָּג']);
pre('yod', [['יָרֵחַ', true, 'moon'], ['כַּדּוּר', false, 'ball'], ['יָד', true, 'hand'], ['גַּב', false, 'back'], ['חָלָב', false, 'milk'],
  ['יַלְדָּה', true, 'girl']], ['יַלְדָּה', 'יָרֵחַ']);
})();
/* ayin, vav, kaf: the reading-workbook 2 pictures first (batch B). ayin: no א-words as ✘ (same sound); kaf: no ק-words as ✘. */
(() => {
const S = window.TZLIL_SETS, P = n => 'tzlil/pic-' + n + '.png';
const pre = (key, wb, drop) => { S[key].items = wb.map(([he, yes, n]) => ({ he, yes, pic: P(n) })).concat(S[key].items.filter(it => !drop.includes(it.he))); };
pre('ayin', [['עַיִן', true, 'eye'], ['יָרֵחַ', false, 'moon'], ['כְּפָפוֹת', false, 'mittens'], ['עָנָן', true, 'cloud'], ['עַכְבָּר', true, 'mouse'],
  ['שָׁרָה', false, 'singer'], ['עֲנָנִים', true, 'clouds'], ['כַּדּוּר', false, 'ball']], ['עַכְבָּר']);
pre('vav', [['וָרֹד', true, 'pink'], ['זַחַל', false, 'caterpillar'], ['מַגָּפַיִם', false, 'boots'], ['וָו', true, 'hook'], ['סַבְתָּא', false, 'grandma'],
  ['זָהָב', false, 'gold']], []);
pre('kaf', [['כַּדּוּר', true, 'ball'], ['גַּרְבַּיִם', false, 'socks'], ['כַּף', true, 'spoon'], ['גַּן שַׁעֲשׁוּעִים', false, 'playground'], ['כָּרִית', true, 'pillow'],
  ['זַחַל', false, 'caterpillar']], ['כַּדּוּר']);
})();
/* zayin: the reading-workbook 2 pictures first (batch C). sin (שׂ): a new set (lesson "לוֹמְדִים לִקְרֹא · שׂ"), placed before shin in
 * the picker; no ס- or שׁ-words as ✘ items. פ (f), ף, ב (v) have no set: no word starts with them (the teacher will decide). */
(() => {
const S = window.TZLIL_SETS, P = n => 'tzlil/pic-' + n + '.png';
const pre = (key, wb, drop) => { S[key].items = wb.map(([he, yes, n]) => ({ he, yes, pic: P(n) })).concat(S[key].items.filter(it => !drop.includes(it.he))); };
pre('zayin', [['חִיּוּךְ', false, 'smiley'], ['זַחַל', true, 'caterpillar'], ['רָץ', false, 'runner2'], ['שַׂקִּית', false, 'bag'], ['כְּפָפָה', false, 'glove'],
  ['זָהָב', true, 'gold'], ['מַדָּף', false, 'shelf']], ['זָהָב']);
const sin = { letter: 'שׂ', first: 'שׂ', sound: 's (sin)', title: 'שׂ', items: [
  ['שַׂקִּית', true, 'bag'], ['מַגָּפַיִם', false, 'boots'], ['חָלָב', false, 'milk'], ['צָב', false, 'turtle'], ['דָּג', false, 'clownfish'], ['שָׂמֵחַ', true, 'smiley']
].map(([he, yes, n]) => ({ he, yes, pic: P(n) })).concat([
  { he: 'שֶׂה', yes: true, emo: '🐑' }, { he: 'כֶּלֶב', yes: false, emo: '🐶' }, { he: 'שִׂמְלָה', yes: true, emo: '👗' }, { he: 'בַּיִת', yes: false, emo: '🏠' },
  { he: 'שָׂפָם', yes: true, emo: '👨' }, { he: 'מַיִם', yes: false, emo: '💧' }, { he: 'שָׂדֶה', yes: true, emo: '🌾' }, { he: 'לֵב', yes: false, emo: '❤️' },
  { he: 'שַׂחְקָן', yes: true, emo: '🎭' }
]) };
const o = {}; Object.keys(S).forEach(k => { if (k === 'shin') o.sin = sin; o[k] = S[k]; }); if (!o.sin) o.sin = sin;
window.TZLIL_SETS = o;
})();
/* tsadi: the reading-workbook 2 pictures first (batch D). כ (ch), ך, ף and ץ have no "starts with" set (the teacher will decide). */
(() => {
const S = window.TZLIL_SETS, P = n => 'tzlil/pic-' + n + '.png';
const pre = (key, wb, drop) => { S[key].items = wb.map(([he, yes, n]) => ({ he, yes, pic: P(n) })).concat(S[key].items.filter(it => !drop.includes(it.he))); };
pre('tsadi', [['טַבַּעַת', false, 'ring'], ['עַכְבָּר', false, 'mouse'], ['צָב', true, 'turtle'], ['לַיְלָה', false, 'night'], ['צָהֹב', true, 'yellow'],
  ['צָעִיף', true, 'scarf']], ['צָב', 'צָהֹב']);
})();
/* "contains" / "end" sets (teacher: "Yes, add them"): mode 'contains' | 'end' (default 'start'), hl = the letters marked on the
 * reveal, noDot = only without a dagesh. Workbook pictures first, then emoji. The ✘ words never have the same sound.
 * Each new set is placed right after its base letter in the picker; `pick` = the picker label. */
(() => {
const S = window.TZLIL_SETS, P = n => 'tzlil/pic-' + n + '.png';
const it = ([he, yes, x]) => /\.|^[a-z0-9]+$/.test(x) && !/[\u{1F000}-\u{1FFFF}☀-➿]/u.test(x) ? { he, yes, pic: P(x) } : { he, yes, emo: x };
const mk = (letter, first, sound, mode, hl, pick, items) => ({ letter, first, sound, title: first, mode, hl, noDot: true, pick, items: items.map(it) });
const NEW = {
  vet: mk('ב', 'ב', 'v (ב without a dot)', 'contains', ['ב'], 'ב — בְּתוֹךְ הַמִּלָּה', [
    ['כּוֹבַע', true, 'hat'], ['בָּנָנָה', false, 'banana'], ['חָלָב', true, 'milk'], ['לָבָן', true, 'crayon'], ['סַבָּא', false, 'oldman'],
    ['גַּב', true, 'back'], ['יָד', false, 'hand'], ['סַבְתָּא', true, 'grandma'], ['מַחַק', false, 'eraser'], ['כּוֹכָב', true, '⭐'],
    ['בָּלוֹן', false, 'balloon'], ['כֶּלֶב', true, '🐶'], ['דָּג', false, '🐟'], ['זְאֵב', true, '🐺'], ['לֵב', true, '❤️'], ['שֶׁמֶשׁ', false, '☀️'],
    ['עֲנָבִים', true, '🍇']]),
  fe: mk('פ', 'פ', 'f (פ without a dot)', 'contains', ['פ', 'ף'], 'פ — בְּתוֹךְ הַמִּלָּה', [
    ['כְּפָפָה', true, 'glove'], ['פַּח', false, 'trash'], ['מַגָּפַיִם', true, 'boots'], ['אַף', true, 'nose'], ['פַּרְפַּר', false, 'butterfly'],
    ['כְּפָפוֹת', true, 'mittens'], ['פַּסְטָה', false, 'pasta'], ['מַגָּף', true, 'boot'], ['זַחַל', false, 'caterpillar'], ['מַדָּף', true, 'shelf'],
    ['חַם', false, 'hot'], ['כַּף', true, 'spoon']]),
  'fe-sofit': mk('ף', 'ף', 'f (end)', 'end', ['ף'], 'ף — בַּסּוֹף', [
    ['מַגָּף', true, 'boot'], ['קוֹפֵץ', false, 'jumper'], ['אַף', true, 'nose'], ['מֶלֶךְ', false, 'king2'], ['מַדָּף', true, 'shelf'],
    ['רָץ', false, 'runner2'], ['כַּף', true, 'spoon'], ['שַׂקִּית', false, 'bag'], ['תּוֹף', true, '🥁'], ['זַחַל', false, 'caterpillar'],
    ['כֶּסֶף', true, '💰'], ['עוֹף', true, '🐔']]),
  khaf: mk('כ', 'כ', 'ch (כ without a dot)', 'contains', ['כ', 'ך'], 'כ — בְּתוֹךְ הַמִּלָּה', [
    ['שְׂמִיכָה', true, 'bed'], ['כַּף', false, 'spoon'], ['עַכְבָּר', true, 'mouse'], ['כַּדּוּר', false, 'ball'], ['מֶלֶךְ', true, 'king2'],
    ['כָּרִית', false, 'pillow'], ['הוֹלֵךְ', true, 'walker'], ['גָּמָל', false, 'camel'], ['דֶּרֶךְ', true, '🛣️'], ['גַּן שַׁעֲשׁוּעִים', false, 'playground'],
    ['כָּרִיךְ', true, '🥪'], ['מַלְאָךְ', true, '👼']]),
  'khaf-sofit': mk('ך', 'ך', 'ch (end)', 'end', ['ך'], 'ך — בַּסּוֹף', [
    ['מֶלֶךְ', true, 'king2'], ['קָם', false, 'boybed'], ['הוֹלֵךְ', true, 'walker'], ['בֶּרֶז', false, 'tap'], ['דֶּרֶךְ', true, '🛣️'],
    ['רָץ', false, 'runner2'], ['בֶּרֶךְ', true, '🦵'], ['אַף', false, 'nose'], ['כָּרִיךְ', true, '🥪'], ['מַגָּף', false, 'boot'],
    ['מַלְאָךְ', true, '👼']]),
  'tsadi-sofit': mk('ץ', 'ץ', 'ts (end)', 'end', ['ץ'], 'ץ — בַּסּוֹף', [
    ['קוֹפֵץ', true, 'jumper'], ['הוֹלֵךְ', false, 'walker'], ['רָץ', true, 'runner2'], ['טַבַּעַת', false, 'ring'], ['עֵץ', true, 'tree'],
    ['מַדָּף', false, 'shelf'], ['מִיץ', true, '🧃'], ['עָצִיץ', true, '🪴']]),
  'nun-sofit': mk('ן', 'ן', 'n (end)', 'end', ['ן'], 'ן — בַּסּוֹף', [
    ['חַלּוֹן', true, 'window'], ['מַיִם', false, 'water'], ['בָּלוֹן', true, 'balloon'], ['עָנָן', true, 'cloud'], ['נָחָשׁ', false, 'snake'],
    ['עִפָּרוֹן', true, 'pencil'], ['נַדְנֵדָה', false, 'swing'], ['שָׁעוֹן', true, 'clock'], ['מַתָּנָה', false, 'gift'], ['אָרוֹן', true, 'wardrobe'],
    ['חַם', false, 'hot'], ['לִימוֹן', true, '🍋']]),
  'mem-sofit': mk('ם', 'ם', 'm (end)', 'end', ['ם'], 'ם — בַּסּוֹף', [
    ['מַיִם', true, 'water'], ['קוֹפֶצֶת', false, 'trampoline'], ['חַם', true, 'hot'], ['רָץ', false, 'runner'], ['קָם', true, 'getup'],
    ['מֶלֶךְ', false, 'king'], ['גַּרְבַּיִם', true, 'socks'], ['מַתָּנָה', false, 'gift'], ['גֶּשֶׁם', true, '🌧️'], ['מָרָק', false, 'soup'],
    ['יָם', true, '🌊'], ['סֻלָּם', true, '🪜']])
};
const AFTER = { nun: ['nun-sofit'], mem: ['mem-sofit'], bet: ['vet'], pe: ['fe', 'fe-sofit'], kaf: ['khaf', 'khaf-sofit'], tsadi: ['tsadi-sofit'] };
const o = {}; Object.keys(S).forEach(k => { o[k] = S[k]; (AFTER[k] || []).forEach(n => { o[n] = NEW[n]; }); });
Object.keys(NEW).forEach(n => { if (!o[n]) o[n] = NEW[n]; });
window.TZLIL_SETS = o;
})();
