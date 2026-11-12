/* Niflaot "הַבַּיִת שֶׁלָּנוּ 5 · רֵאָיוֹן וּמַצֶּגֶת" (Thu 12/3) — page script: presentation frame, checklist, timer, word banks. */
(() => {
'use strict';
const { $, cardQuiz, TF, beep, chime, img } = BS;
BS.wordSearch(5);
$('cdWU').onclick = BS.countdown;

/* 3c the teacher's model (m / f) */
const T = { m: ['שָׁלוֹם! זֶה הַבַּיִת שֶׁלִּי.', 'אֲנִי מִנְּיוּ יוֹרְק.', 'אֲנִי גָּר בְּדִירָה, בְּקוֹמָה אַרְבַּע.', 'בַּבִּנְיָן יֵשׁ מַעֲלִית.', 'בַּדִּירָה יֵשׁ אַרְבָּעָה חֲדָרִים.',
  'בַּחֶדֶר שֶׁלִּי יֵשׁ מִטָּה, שֻׁלְחַן כְּתִיבָה וּמַדָּף עִם סְפָרִים.', 'בַּמִּטְבָּח אֲנִי מְבַשֵּׁל וְשׁוֹטֵף כֵּלִים.', 'בַּסָּלוֹן אֲנִי נָח וְרוֹאֶה טֶלֶוִיזְיָה.', 'זֶה הַבַּיִת שֶׁלִּי. תּוֹדָה!'] };
T.f = T.m.map(s => s.replace('גָּר ', 'גָּרָה ').replace('מְבַשֵּׁל וְשׁוֹטֵף', 'מְבַשֶּׁלֶת וְשׁוֹטֶפֶת').replace('נָח וְרוֹאֶה', 'נָחָה וְרוֹאָה'));
let tg = 'm';
const drawT = () => { BS.textSay($('tTxt'), T[tg]); $('tGen').textContent = tg === 'm' ? '👩‍🏫 מוֹרָה (נְקֵבָה)' : '👨‍🏫 מוֹרֶה (זָכָר)'; };
$('tGen').onclick = () => { tg = tg === 'm' ? 'f' : 'm'; drawT(); };
drawT();
$('homePic').innerHTML = HouseOut.svg({ vb: [560, 20, 440, 560] });
cardQuiz($('qT'), [
  ['הַמּוֹרֶה גָּר בְּבַיִת פְּרָטִי.', 'n', 'הוּא גָּר בְּדִירָה.'], ['בַּבִּנְיָן יֵשׁ מַעֲלִית.', 'y'], ['בַּחֶדֶר שֶׁל הַמּוֹרֶה יֵשׁ שֻׁלְחַן כְּתִיבָה.', 'y'],
  ['בַּסָּלוֹן הַמּוֹרֶה מְבַשֵּׁל.', 'n', 'בַּמִּטְבָּח הוּא מְבַשֵּׁל. בַּסָּלוֹן הוּא נָח.'],
].map(([t, ok, fix], i) => ({ num: (i + 1) + '', q: t, full: `${t}<br><span class="fill">${ok === 'y' ? '✔ נָכוֹן' : '✘ ' + fix}</span>`, ch: TF, ok })));

/* 4 presentation frame: about me / about my partner (הוּא / הִיא) */
const ME = ['שָׁלוֹם! שְׁמִי ___.', 'אֲנִי מִ___.', 'אֲנִי גָּר / גָּרָה בְּבַיִת פְּרָטִי / בְּדִירָה.', 'אֲנִי גָּר / גָּרָה בְּקוֹמָה ___. יֵשׁ / אֵין מַעֲלִית.', 'בַּבַּיִת שֶׁלִּי יֵשׁ ___ חֲדָרִים.',
  'בַּחֶדֶר שֶׁלִּי יֵשׁ ___ וְ___.', 'בַּמִּטְבָּח אֲנִי ___. בַּסָּלוֹן אֲנִי ___.', 'בַּבַּיִת שֶׁלִּי ___ מְבַשֵּׁל / מְבַשֶּׁלֶת.', 'זֶה הַבַּיִת שֶׁלִּי. תּוֹדָה!'];
const PART = { m: ['זֶה ___.', 'הוּא מִ___.', 'הוּא גָּר בְּ___.', 'בַּחֶדֶר שֶׁלּוֹ יֵשׁ ___.', 'בַּמִּטְבָּח הוּא ___.'],
               f: ['זוֹ ___.', 'הִיא מִ___.', 'הִיא גָּרָה בְּ___.', 'בַּחֶדֶר שֶׁלָּהּ יֵשׁ ___.', 'בַּמִּטְבָּח הִיא ___.'] };
let mode = 'me', pg = 'm';
function drawP(){
  const L = mode === 'me' ? ME : PART[pg];
  $('pLines').innerHTML = L.map((s, i) => `<div class="q-line"><b>${i + 1}</b>${s}</div>`).join('');
  $('pTog').textContent = mode === 'me' ? '👥 עַל הֶחָבֵר / הַחֲבֵרָה' : '🙋 עָלַי';
  $('pHe').style.display = $('pShe').style.display = mode === 'me' ? 'none' : '';
  $('pHe').classList.toggle('on', pg === 'm'); $('pShe').classList.toggle('on', pg === 'f');
}
$('pTog').onclick = () => { mode = mode === 'me' ? 'partner' : 'me'; drawP(); };
$('pHe').onclick = () => { pg = 'm'; drawP(); }; $('pShe').onclick = () => { pg = 'f'; drawP(); };
drawP();
const CK = [['מֵאֵיפֹה', 'where from'], ['בַּיִת אוֹ דִּירָה', 'house or apartment'], ['קוֹמָה', 'floor'], ['2 דְּבָרִים בַּחֶדֶר שֶׁלִּי', '2 things in my room'], ['מָה אֲנִי עוֹשֶׂה בִּשְׁנֵי חֲדָרִים', 'what I do in 2 rooms']];
$('pCheck').innerHTML = '<b>✔ רְשִׁימָה</b>' + CK.map(([h, e]) => `<button type="button"><span class="bx">☐</span> ${h} <small dir="ltr">(${e})</small></button>`).join('') + '<button type="button" class="clr">↺</button>';
$('pCheck').querySelectorAll('button:not(.clr)').forEach(b => b.onclick = () => { b.classList.toggle('on'); b.querySelector('.bx').textContent = b.classList.contains('on') ? '☑' : '☐'; beep(760, .08); });
$('pCheck').querySelector('.clr').onclick = () => $('pCheck').querySelectorAll('button:not(.clr)').forEach(b => { b.classList.remove('on'); b.querySelector('.bx').textContent = '☐'; });

/* timer: 30 / 60 sec (6 min for the interview), 3-2-1 start, bell at the end */
let secs = 30, left = 30, tm = null;
const draw = () => { $('pT').textContent = Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0'); $('pT').classList.toggle('end', left === 0); };
const stop = () => { clearInterval(tm); tm = null; };
$('pGo').onclick = () => { if (tm) return; if (left === 0) left = secs; let n = 3; $('pT').textContent = n; beep(520);
  const c = setInterval(() => { n--; if (n > 0){ $('pT').textContent = n; beep(520); return; } clearInterval(c); beep(880, .3); draw();
    tm = setInterval(() => { left--; draw(); if (left <= 0){ stop(); chime(); } }, 1000); }, 1000); };
$('pStop').onclick = stop;
document.querySelectorAll('[data-s]').forEach(b => b.onclick = () => { secs = +b.dataset.s; stop(); left = secs; draw(); });
draw();

/* word banks from lessons 1-4, in tabs */
const P = (he, k) => ({ he, pic: img(k) }), V = (he, k, g) => ({ he, pic: VerbArt.svg(k, g) }), E = (he, e) => ({ he, pic: `<b class="em">${e}</b>` });
const HOv = (he, vb) => ({ he, pic: HouseOut.svg({ vb }) });
const BANKS = [
  ['🏠 חֲדָרִים', [P('מִטְבָּח', 'kitchen'), P('סָלוֹן', 'livingroom'), P('חֶדֶר רַחֲצָה', 'bathroom'), P('חֶדֶר שֵׁנָה', 'bedroom'), P('מִרְפֶּסֶת', 'balcony'), P('גִּנָּה', 'garden')]],
  ['🛋️ דְּבָרִים', [P('מִיקְרוֹגַל', 'microwave'), P('קֻמְקוּם', 'kettle'), P('מֵדִיחַ כֵּלִים', 'dishwasher'), P('מְקָרֵר', 'wu_fridge'), P('כִּיּוֹר', 'sink'), P('מִבְרֶשֶׁת שִׁנַּיִם', 'toothbrush'),
    P('שַׁמְפּוֹ', 'shampoo'), P('אַמְבַּטְיָה', 'bathtub'), P('כֻּרְסָה', 'armchair'), P('שַׁלָּט', 'remote'), P('מַזְגָן', 'ac'), P('סַפָּה', 'wu_sofa'), P('שֻׁלְחַן כְּתִיבָה', 'desk'), P('מַדָּף', 'shelf'),
    E('צַעֲצוּעִים', '🧸'), P('שָׁעוֹן מְעוֹרֵר', 'alarm'), P('מְכוֹנַת כְּבִיסָה', 'washer'), P('חֶבֶל כְּבִיסָה', 'line')]],
  ['🏢 הַבִּנְיָן', [HOv('בַּיִת פְּרָטִי', [90, 180, 300, 225]), HOv('בִּנְיָן / דִּירָה', [560, 20, 440, 330]), HOv('מַעֲלִית', [770, 470, 120, 90]), HOv('מַדְרֵגוֹת', [860, 470, 120, 90]),
    HOv('גַּג', [90, 180, 300, 225]), HOv('חָצֵר', [0, 400, 240, 180]), HOv('חֲנָיָה', [372, 440, 200, 150]), HOv('שַׁעַר', [250, 500, 160, 120]), HOv('קוֹמָה', [606, 40, 344, 258])]],
  ['🧽 פְּעָלִים', [E('מְבַשֵּׁל', '🍳'), V('שׁוֹטֵף כֵּלִים', 'dishes'), V('מְנַקֶּה', 'clean'), V('נָח', 'rest'), V('עוֹשֶׂה שִׁעוּרֵי בַּיִת', 'homework'), V('מְצַחְצֵחַ שִׁנַּיִם', 'teeth'),
    E('רוֹאֶה טֶלֶוִיזְיָה', '📺'), E('יָשֵׁן', '💤'), E('קוֹרֵא', '📖'), V('מְקַפֵּל בְּגָדִים', 'fold'), V('תּוֹלֶה כְּבִיסָה', 'hang'), V('פּוֹתֵחַ חַלּוֹן', 'open'), V('מַדְלִיק אוֹר', 'lighton')]],
];
$('bTabs').innerHTML = BANKS.map(([t], i) => `<button type="button" data-i="${i}">${t}</button>`).join('');
const openB = i => { $('bTabs').querySelectorAll('button').forEach((b, j) => b.classList.toggle('on', j === i)); $('bank').innerHTML = BANKS[i][1].map(b => `<span>${b.pic}${b.he}</span>`).join(''); };
$('bTabs').querySelectorAll('button').forEach(b => b.onclick = () => openB(+b.dataset.i));
openB(0);

/* 4a interview questions */
$('iQ').innerHTML = ['מֵאֵיפֹה אַתָּה?', 'אַתָּה גָּר בְּבַיִת פְּרָטִי אוֹ בְּדִירָה?', 'בְּאֵיזוֹ קוֹמָה? יֵשׁ מַעֲלִית?', 'כַּמָּה חֲדָרִים יֵשׁ בַּבַּיִת שֶׁלְּךָ?', 'מָה יֵשׁ בַּחֶדֶר שֶׁלְּךָ?', 'מָה אַתָּה עוֹשֶׂה בַּ___?', 'מִי מְבַשֵּׁל / מִי מְקַפֵּל בְּגָדִים בַּבַּיִת שֶׁלְּךָ?']
  .map((q, i) => `<div class="q-line"><b>${i + 1}</b>${q}</div>`).join('');

/* 5 exit ticket */
const EX = BSD.EXIT[5];
$('exTxt').textContent = EX.text;
const NK = [{ id: 'y', html: 'נָכוֹן' }, { id: 'n', html: 'לֹא נָכוֹן' }];
cardQuiz($('qEX'), EX.tf.map(([t, ok, fix], i) => ({ num: (i + 1) + '', q: t, full: `${t}<br><span class="fill">${ok === 'y' ? '✔ נָכוֹן' : '✘ לֹא נָכוֹן — ' + fix}</span>`, ch: NK, ok })));
$('exB').innerHTML = EX.qs.map(([q, a], i) => `<div class="q-line"><b>${i + 1}</b>${q} — ${a}________</div>`).join('');
})();
