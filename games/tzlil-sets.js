/* Picture sets for "תּוֹפְסִים צְלִיל" (games/tofsim-tzlil.html) and the Niflaot reading lessons.
 * One entry per letter (key = the ?letter= value), in alef-bet order — the game shows one picker button per entry.
 *   letter: the letter as shown      first: the sound at the start of the yes-words      sound: English label
 *   items:  { he: word with nikud, yes: starts with the sound, pic: image under games/tzlil/ | emo: emoji }
 * shin uses pictures from the reading workbook (Kamatz-Patach-Shvah, pp. 4 and 6, marked wb); the other letters use emoji.
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
    [['בַּיִת', '🏠'], ['בָּלוֹן', '🎈'], ['בָּנָנָה', '🍌'], ['בֵּיצָה', '🥚'], ['בַּקְבּוּק', '🍼'], ['בָּרָק', '⚡'], ['בְּרוֹקוֹלִי', '🥦'], ['בַּרְוָז', '🦆'], ['בָּצָל', '🧅'], ['בּוּבָּה', '🪆'], ['בְּגָדִים', '👕']],
    [DAG, SUS, KELEV, SHEMESH, MAYIM, NAHASH, TAPUAH]),
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
})();
