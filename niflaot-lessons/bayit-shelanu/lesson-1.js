/* Niflaot "הַבַּיִת שֶׁלָּנוּ 1 · מָה יֵשׁ בַּחֲדָרִים?" (Tue 11/24) — page script. Engine: lesson.js. */
(() => {
'use strict';
const { $, cardQuiz, img, pic, TF, ROOMCH, beep } = BS;

/* 1. entry ticket */
BS.wordSearch(1);
document.querySelectorAll('.credits').forEach(p => p.textContent = 'Photos (Wikimedia Commons): ' + (window.BAYIT_PH_CREDITS || ''));

/* 2. warm-up: colors */
const COLORS = [['red', 'אָדֹם', '#e0352b'], ['blue', 'כָּחֹל', '#2a6fd0'], ['yellow', 'צָהֹב', '#f4cf1e'], ['green', 'יָרֹק', '#2f9d55'], ['orange', 'כָּתֹם', '#f28c28'], ['white', 'לָבָן', '#ffffff']];
const colorCards = COLORS.map(([id, he, c]) => ({ id, html: `<span class="q-col" style="background:${c}"></span>${he}` }));
const WU = [
  ['wu_sofa', 'אֵיזֶה צֶבַע הַסַּפָּה?', 'red', 'הַסַּפָּה <span class="fill">אֲדֻמָּה</span>.'],
  ['wu_rug', 'אֵיזֶה צֶבַע הַשָּׁטִיחַ?', 'blue', 'הַשָּׁטִיחַ <span class="fill">כָּחֹל</span>.'],
  ['wu_lamp', 'אֵיזֶה צֶבַע הַמְּנוֹרָה?', 'yellow', 'הַמְּנוֹרָה <span class="fill">צְהֻבָּה</span>.'],
  ['wu_chair', 'אֵיזֶה צֶבַע הַכִּסֵּא?', 'green', 'הַכִּסֵּא <span class="fill">יָרֹק</span>.'],
  ['wu_cushion', 'אֵיזֶה צֶבַע הַכָּרִית?', 'orange', 'הַכָּרִית <span class="fill">כְּתֻמָּה</span>.'],
  ['wu_fridge', 'אֵיזֶה צֶבַע הַמְּקָרֵר?', 'white', 'הַמְּקָרֵר <span class="fill">לָבָן</span>.'],
];
$('wuThumbs').innerHTML = WU.map((w, i) => `<button type="button" data-i="${i}" aria-label="${i + 1}" style="background-image:url('${pic(w[0])}')"></button>`).join('');
const thumbs = [...$('wuThumbs').children];
const wuQ = cardQuiz($('qWU'), WU.map(([k, q, ok, full]) => ({ pic: pic(k), q, full, ch: colorCards, ok })),
  (i, done) => thumbs.forEach((t, j) => { t.classList.toggle('on', j === i); if (done && j === i) t.classList.add('done'); }));
thumbs.forEach(t => t.onclick = () => { wuQ.go(+t.dataset.i); beep(620, .1); });

/* 3a. optional review: הוּא / הִיא */
const HH = [{ id: 'm', html: 'הוּא' }, { id: 'f', html: 'הִיא' }];
const art = k => window.HomeArt ? `<div style="max-width:260px;margin:0 auto">${HomeArt.svg(k)}</div>` : '';
cardQuiz($('qHH'), [
  { picHtml: art('dad'), pre: '', post: ' מְבַשֵּׁל בַּמִּטְבָּח.', full: '<span class="fill">הוּא</span> מְבַשֵּׁל בַּמִּטְבָּח. (אַבָּא מְבַשֵּׁל בַּמִּטְבָּח.)', ch: HH, ok: 'm' },
  { picHtml: art('sister'), pre: '', post: ' מְסַדֶּרֶת צַלָּחוֹת עַל הַשֻּׁלְחָן.', full: '<span class="fill">הִיא</span> מְסַדֶּרֶת צַלָּחוֹת עַל הַשֻּׁלְחָן. (שִׁיר מְסַדֶּרֶת צַלָּחוֹת.)', ch: HH, ok: 'f' },
]);

/* 3c. the rooms (hide-and-seek house + hide-seek-ext.js); z = shapes in the game's coordinates */
BS.scene($('scene'), [
  { he: '🍳 מִטְבָּח', room: 'kitchen', check: ['בַּמִּטְבָּח יֵשׁ מַסְרֵק?', 'לֹא! בַּמִּטְבָּח אֵין מַסְרֵק.'], words: [
    { he: 'מְקָרֵר', s: 'בַּמִּטְבָּח יֵשׁ מְקָרֵר.', z: ['r', 346, 310, 60, 150] },
    { he: 'שֻׁלְחָן', s: 'בַּמִּטְבָּח יֵשׁ שֻׁלְחָן.', z: ['r', 500, 412, 92, 62] },
    { he: 'תַּנּוּר', s: 'בַּמִּטְבָּח יֵשׁ תַּנּוּר.', z: ['r', 406, 398, 50, 60] },
    { he: 'כִּסֵּא', s: 'בַּמִּטְבָּח יֵשׁ כִּסֵּא.', z: ['r', 550, 388, 48, 26] },
    { he: 'מַחֲבַת', s: 'בַּמִּטְבָּח יֵשׁ מַחֲבַת.', ph: 'pan', z: ['r', 416, 378, 48, 20] },
    { he: 'כִּיּוֹר', s: 'בַּמִּטְבָּח יֵשׁ כִּיּוֹר.', ph: 'sink' },
    { he: 'סִיר', s: 'בַּמִּטְבָּח יֵשׁ סִיר.', ph: 'pot' },
    { he: 'מַזְלֵג', s: 'בַּמִּטְבָּח יֵשׁ מַזְלֵג.', ph: 'fork' },
    { he: 'מִיקְרוֹגַל', star: 1, s: 'בַּמִּטְבָּח יֵשׁ מִיקְרוֹגַל.', ph: 'microwave', z: ['r', 350, 278, 52, 32] },
    { he: 'קֻמְקוּם', star: 1, s: 'בַּמִּטְבָּח יֵשׁ קֻמְקוּם.', ph: 'kettle', z: ['r', 556, 398, 34, 32] },
    { he: 'מֵדִיחַ כֵּלִים', star: 1, s: 'בַּמִּטְבָּח יֵשׁ מֵדִיחַ כֵּלִים.', ph: 'dishwasher', z: ['r', 456, 400, 44, 56] },
    { he: 'סַכִּין', star: 1, s: 'עַל הַשֻּׁלְחָן יֵשׁ סַכִּין.', ph: 'knife', z: ['r', 464, 352, 20, 38] },
    { he: 'כַּף', star: 1, s: 'עַל הַשֻּׁלְחָן יֵשׁ כַּף.', ph: 'spoon', z: ['r', 484, 352, 20, 38] } ] },
  { he: '🛁 חֶדֶר רַחֲצָה', room: 'bath', check: ['בְּחֶדֶר הָרַחֲצָה יֵשׁ מְקָרֵר?', 'לֹא! בְּחֶדֶר הָרַחֲצָה אֵין מְקָרֵר.'], words: [
    { he: 'אַמְבַּטְיָה', s: 'בְּחֶדֶר הָרַחֲצָה יֵשׁ אַמְבַּטְיָה.', z: ['r', 346, 172, 144, 58] },
    { he: 'מִקְלַחַת', s: 'בְּחֶדֶר הָרַחֲצָה יֵשׁ מִקְלַחַת.', z: ['r', 426, 46, 54, 108] },
    { he: 'אַסְלָה', s: 'בְּחֶדֶר הָרַחֲצָה יֵשׁ אַסְלָה.', z: ['r', 540, 124, 58, 108] },
    { he: 'כִּיּוֹר', s: 'בְּחֶדֶר הָרַחֲצָה יֵשׁ כִּיּוֹר.', z: ['r', 492, 150, 48, 80] },
    { he: 'מַרְאָה', s: 'בְּחֶדֶר הָרַחֲצָה יֵשׁ מַרְאָה.', z: ['r', 488, 76, 52, 72] },
    { he: 'מַגֶּבֶת', s: 'בְּחֶדֶר הָרַחֲצָה יֵשׁ מַגֶּבֶת.', z: ['r', 358, 96, 52, 42] },
    { he: 'סַבּוֹן', s: 'בְּחֶדֶר הָרַחֲצָה יֵשׁ סַבּוֹן.', ph: 'soap' },
    { he: 'מִבְרֶשֶׁת שִׁנַּיִם', star: 1, s: 'בְּחֶדֶר הָרַחֲצָה יֵשׁ מִבְרֶשֶׁת שִׁנַּיִם.', ph: 'toothbrush', z: ['r', 546, 82, 13, 36] },
    { he: 'מִשְׁחַת שִׁנַּיִם', star: 1, s: 'בְּחֶדֶר הָרַחֲצָה יֵשׁ מִשְׁחַת שִׁנַּיִם.', ph: 'toothpaste', z: ['r', 559, 82, 13, 36] },
    { he: 'שַׁמְפּוֹ', star: 1, s: 'בַּמִּקְלַחַת יֵשׁ שַׁמְפּוֹ וְסַבּוֹן.', ph: 'shampoo', z: ['r', 347, 140, 24, 32] },
    { he: 'מַסְרֵק', star: 1, s: 'לְיַד הַמַּרְאָה יֵשׁ מַסְרֵק.', ph: 'comb', z: ['r', 573, 96, 26, 24] } ] },
  { he: '🛋️ סָלוֹן', room: 'living', check: ['בַּסָּלוֹן יֵשׁ מִיקְרוֹגַל?', 'לֹא! בַּסָּלוֹן אֵין מִיקְרוֹגַל.'], words: [
    { he: 'סַפָּה', s: 'בַּסָּלוֹן יֵשׁ סַפָּה.', z: ['r', 26, 390, 168, 68] },
    { he: 'שָׁטִיחַ', s: 'בַּסָּלוֹן יֵשׁ שָׁטִיחַ.', z: ['r', 100, 458, 120, 22] },
    { he: 'כּוֹנָנִית', s: 'בַּסָּלוֹן יֵשׁ כּוֹנָנִית.', z: ['r', 286, 322, 50, 96] },
    { he: 'טֶלֶוִיזְיָה', s: 'בַּסָּלוֹן יֵשׁ טֶלֶוִיזְיָה.', z: ['r', 196, 362, 78, 54] },
    { he: 'וִילוֹן', s: 'בַּסָּלוֹן יֵשׁ וִילוֹן.', z: ['r', 36, 278, 26, 108] },
    { he: 'חַלּוֹן', s: 'בַּסָּלוֹן יֵשׁ חַלּוֹן.', z: ['r', 64, 288, 58, 88] },
    { he: 'מְנוֹרָה', s: 'בַּסָּלוֹן יֵשׁ מְנוֹרָה.', z: ['r', 166, 268, 46, 46] },
    { he: 'שָׁעוֹן', s: 'בַּסָּלוֹן יֵשׁ שָׁעוֹן.', z: ['c', 245, 322, 18] },
    { he: 'תְּמוּנָה', s: 'בַּסָּלוֹן יֵשׁ תְּמוּנָה.', z: ['r', 149, 323, 40, 34] },
    { he: 'עָצִיץ', s: 'בַּסָּלוֹן יֵשׁ עָצִיץ.', z: ['r', 296, 286, 30, 36] },
    { he: 'כָּרִית', s: 'עַל הַסַּפָּה יֵשׁ כָּרִית.', z: ['r', 50, 394, 36, 32] },
    { he: 'כֻּרְסָה', star: 1, s: 'בַּסָּלוֹן יֵשׁ סַפָּה וְכֻרְסָה.', ph: 'armchair', z: ['r', 224, 420, 62, 58] },
    { he: 'שַׁלָּט', star: 1, s: 'עַל הַסַּפָּה יֵשׁ שַׁלָּט.', ph: 'remote', z: ['r', 112, 415, 34, 22] },
    { he: 'מַזְגָן', star: 1, s: 'בַּסָּלוֹן יֵשׁ מַזְגָן.', ph: 'ac', z: ['r', 212, 270, 72, 28] } ] },
]);

/* 4b. אֵיפֹה יֵשׁ ___? — room cards */
const RC = ROOMCH(['kitchen', 'bath', 'living']);
const RM = { kitchen: 'בַּמִּטְבָּח', bath: 'בְּחֶדֶר הָרַחֲצָה', living: 'בַּסָּלוֹן' };
const WH = [['מִיקְרוֹגַל', 'microwave', 'kitchen'], ['מִבְרֶשֶׁת שִׁנַּיִם', 'toothbrush', 'bath'], ['שַׁלָּט', 'remote', 'living'], ['קֻמְקוּם', 'kettle', 'kitchen'],
  ['מַגֶּבֶת', 'towel', 'bath'], ['כֻּרְסָה', 'armchair', 'living'], ['שַׁמְפּוֹ', 'shampoo', 'bath'], ['מֵדִיחַ כֵּלִים', 'dishwasher', 'kitchen'],
  ['מַזְגָן', 'ac', 'living'], ['מַסְרֵק', 'comb', 'bath'], ['סַכִּין', 'knife', 'kitchen'], ['עָצִיץ', 'plant', 'living']];
cardQuiz($('qWhere'), WH.map(([he, k, r]) => ({ pic: pic(k), q: 'אֵיפֹה יֵשׁ <b>' + he + '</b>?',
  full: `<span class="fill">${RM[r]}</span> יֵשׁ ${he}.` + (k === 'ac' ? ' (גַּם בְּחֶדֶר שֵׁנָה)' : ''), ch: RC, ok: r })));
$('wOnly').onchange = () => $('whereP').classList.toggle('words-only', $('wOnly').checked);

/* 4c. יֵשׁ אוֹ אֵין? */
const YN = [['kitchen', 'בַּמִּטְבָּח יֵשׁ מִיקְרוֹגַל.', 'y'], ['livingroom', 'בַּסָּלוֹן יֵשׁ אַמְבַּטְיָה.', 'n', 'לֹא! בַּסָּלוֹן אֵין אַמְבַּטְיָה. בְּחֶדֶר הָרַחֲצָה יֵשׁ אַמְבַּטְיָה.'],
  ['bathroom', 'בְּחֶדֶר הָרַחֲצָה יֵשׁ מַרְאָה.', 'y'], ['kitchen', 'בַּמִּטְבָּח יֵשׁ מַסְרֵק.', 'n', 'בַּמִּטְבָּח אֵין מַסְרֵק.'],
  ['livingroom', 'בַּסָּלוֹן יֵשׁ כֻּרְסָה וְשַׁלָּט.', 'y'], ['bathroom', 'בְּחֶדֶר הָרַחֲצָה יֵשׁ מֵדִיחַ כֵּלִים.', 'n', 'בְּחֶדֶר הָרַחֲצָה אֵין מֵדִיחַ כֵּלִים.']];
cardQuiz($('qYN'), YN.map(([k, t, ok, fix], n) => ({ num: (n + 1) + '', pic: pic(k), q: t, full: `${t}<br><span class="fill">${ok === 'y' ? '✔ נָכוֹן' : '✘ ' + fix}</span>`, ch: TF, ok })));

/* talking practice */
const B = BS.bankPh;
BS.talk($('talk'), [
  { name: 'סִבּוּב 1 · הַמִּטְבָּח שֶׁלִּי', sub: '2 דַּקּוֹת · א שׁוֹאֵל, ב עוֹנֶה ⬅ מִתְחַלְּפִים', items: [
    '<span class="s-q">שְׁאֵלָה:</span> מָה יֵשׁ <b>בַּמִּטְבָּח שֶׁלְּךָ</b>?', '<span class="s-q">תְּשׁוּבָה:</span> בַּמִּטְבָּח שֶׁלִּי יֵשׁ ___ וְ___. / בַּמִּטְבָּח שֶׁלִּי אֵין ___.',
    '<span class="s-q">שְׁאֵלָה:</span> יֵשׁ לְךָ <b>מִיקְרוֹגַל</b>? יֵשׁ לְךָ <b>מֵדִיחַ כֵּלִים</b>?', '<span class="s-q">תְּשׁוּבָה:</span> כֵּן, יֵשׁ לִי ___. / לֹא, אֵין לִי ___.'] },
  { name: 'סִבּוּב 2 · הַחֶדֶר שֶׁלִּי', sub: '2 דַּקּוֹת · א שׁוֹאֵל, ב עוֹנֶה ⬅ מִתְחַלְּפִים', items: [
    '<span class="s-q">שְׁאֵלָה:</span> מָה יֵשׁ <b>בַּחֶדֶר שֶׁלְּךָ</b>?', '<span class="s-q">תְּשׁוּבָה:</span> בַּחֶדֶר שֶׁלִּי יֵשׁ ___ וְ___. אֵין לִי ___.',
    '<span class="s-q">שְׁאֵלָה:</span> יֵשׁ לְךָ <b>מַזְגָן</b> בַּחֶדֶר? יֵשׁ לְךָ <b>טֶלֶוִיזְיָה</b> בַּחֶדֶר?', '<span class="s-q">תְּשׁוּבָה:</span> כֵּן, יֵשׁ לִי ___ בַּחֶדֶר. / לֹא, אֵין לִי ___ בַּחֶדֶר.'] },
], [B('מִיקְרוֹגַל', 'microwave'), B('קֻמְקוּם', 'kettle'), B('מֵדִיחַ כֵּלִים', 'dishwasher'), B('סַכִּין', 'knife'), B('כַּף', 'spoon'), B('כִּיּוֹר', 'sink'), B('מְקָרֵר', 'wu_fridge'),
  B('מִבְרֶשֶׁת שִׁנַּיִם', 'toothbrush'), B('שַׁמְפּוֹ', 'shampoo'), B('מַסְרֵק', 'comb'), B('אַמְבַּטְיָה', 'bathtub'), B('מַגֶּבֶת', 'towel'),
  B('כֻּרְסָה', 'armchair'), B('שַׁלָּט', 'remote'), B('מַזְגָן', 'ac'), B('כָּרִית', 'cushion'), B('עָצִיץ', 'plant'),
  { he: 'מִטָּה', pic: window.HomeArt ? HomeArt.svg('bed') : '' }, { he: 'אָרוֹן', pic: window.HomeArt ? HomeArt.svg('wardrobe') : '' }, { he: 'שֻׁלְחָן', pic: window.HomeArt ? HomeArt.svg('table') : '' },
  { he: 'כִּסֵּא', pic: window.HomeArt ? HomeArt.svg('chair') : '' }, { he: 'מְנוֹרָה', pic: window.HomeArt ? HomeArt.svg('lamp') : '' }, { he: 'חַלּוֹן', pic: window.HomeArt ? HomeArt.svg('window') : '' },
  { he: 'וִילוֹן', pic: window.HomeArt ? HomeArt.svg('curtain') : '' }, { he: 'שָׁטִיחַ', pic: window.HomeArt ? HomeArt.svg('rug') : '' }], 2);

/* 5. exit ticket on screen */
const EX = BSD.EXIT[1];
$('ex1').innerHTML = EX.rows.map((r, i) => `<div class="row"><div class="rm">${i + 1}. ${r.room}</div>${r.opts.map(([he, k], j) => `<button type="button" data-r="${i}" data-j="${j}">${img(k)}${he}</button>`).join('')}</div>`).join('');
$('ex1').querySelectorAll('button').forEach(b => b.onclick = () => { const r = EX.rows[+b.dataset.r]; b.classList.add(+b.dataset.j === r.ok ? 'ok' : 'no'); beep(+b.dataset.j === r.ok ? 880 : 260, .2); });
$('exShow').onclick = () => $('ex1').querySelectorAll('button').forEach(b => { if (+b.dataset.j === EX.rows[+b.dataset.r].ok) b.classList.add('ok'); });
$('exClr').onclick = () => $('ex1').querySelectorAll('button').forEach(b => b.classList.remove('ok', 'no'));
})();
