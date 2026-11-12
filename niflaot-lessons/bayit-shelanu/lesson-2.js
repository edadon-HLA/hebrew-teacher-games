/* Niflaot "הַבַּיִת שֶׁלָּנוּ 2 · בַּיִת אוֹ דִּירָה?" (Wed 11/25) — page script. Engine: lesson.js; picture: games/house-outside-art.js. */
(() => {
'use strict';
const { $, cardQuiz, pic, TF, ROOMCH, beep, say } = BS;
BS.wordSearch(2);
$('cdWU').onclick = BS.countdown;

/* 3a optional review of lesson 1 */
cardQuiz($('qRev'), [['מִיקְרוֹגַל', 'microwave', 'kitchen', 'בַּמִּטְבָּח'], ['מִבְרֶשֶׁת שִׁנַּיִם', 'toothbrush', 'bath', 'בְּחֶדֶר הָרַחֲצָה'], ['שַׁלָּט', 'remote', 'living', 'בַּסָּלוֹן'], ['קֻמְקוּם', 'kettle', 'kitchen', 'בַּמִּטְבָּח']]
  .map(([he, k, r, b]) => ({ pic: pic(k), q: 'אֵיפֹה יֵשׁ <b>' + he + '</b>?', full: `<span class="fill">${b}</span> יֵשׁ ${he}.`, ch: ROOMCH(['kitchen', 'bath', 'living']), ok: r })));

/* 3c the house and the building from outside: clickable parts */
const ORDER = ['building', 'house', 'roof', 'yard', 'parking', 'fence', 'gate', 'corridor', 'entrance', 'mailbox', 'elevator', 'stairs', 'bell', 'key'];
const words = ORDER.map(k => HouseOut.PARTS.find(p => p.k === k)).map(p => ({ he: p.he, s: p.s, star: p.star, z: p.z[0] }));
BS.scene($('sceneOut'), [{ he: '🏡 בַּיִת וּבִנְיָן', svg: HouseOut.svg(), words, check: ['אֵיפֹה הַגַּג?', 'זֶה הַגַּג. (גַּם לַבִּנְיָן יֵשׁ גַּג!)'] }]);
document.querySelector('#sceneOut .s-tabs').style.display = 'none';

/* 3d story frames */
const fit = (x, y, w) => [x, y, w, w * 3 / 4];
const FR = [
  [fit(400, 20, 740), [], 'זֶה הַבִּנְיָן שֶׁל דָּנָה. בַּבִּנְיָן יֵשׁ חָמֵשׁ קוֹמוֹת.'],
  [fit(170, 395, 300), [{ x: 330, y: 588, s: 1, g: 'f' }], 'דָּנָה <b>נִכְנֶסֶת</b> בַּשַּׁעַר. יֵשׁ חָצֵר וַחֲנָיָה.'],
  [fit(600, 420, 240), [{ x: 668, y: 560, s: .85, g: 'f' }], 'בַּכְּנִיסָה יֵשׁ תֵּבַת דֹּאַר שֶׁל דָּנָה: דִּירָה מִסְפָּר תֵּשַׁע.'],
  [fit(606, 50, 344), [{ x: 700, y: 147, s: .66, g: 'f' }], 'דָּנָה עוֹלָה בַּמַּעֲלִית לְקוֹמָה חָמֵשׁ. הִיא הוֹלֶכֶת בַּמִּסְדְּרוֹן.'],
  [fit(712, 60, 176), [{ x: 842, y: 147, s: .72, g: 'f' }], 'אֵין לָהּ מַפְתֵּחַ! דָּנָה <b>מְצַלְצֶלֶת</b> בַּפַּעֲמוֹן. אִמָּא בַּבַּיִת. דָּנָה נִכְנֶסֶת הַבַּיְתָה.'],
  [fit(60, 180, 420), [{ x: 320, y: 500, s: 1.35, g: 'm' }], 'יוֹסִי גָּר בְּבַיִת פְּרָטִי. בַּבֹּקֶר הוּא <b>יוֹצֵא</b> מֵהַבַּיִת וְהוֹלֵךְ לְבֵית הַסֵּפֶר.'],
];
BS.frames($('frames'), FR.map(([vb, kids, t]) => ({ pic: HouseOut.svg({ vb, kids }), t })));

/* 4b מִי אֲנִי? */
const KIDS = [
  ['דָּנָה', 'f', '#e2506a', 'אֲנִי דָּנָה. אֲנִי מֵחֵיפָה. אֲנִי גָּרָה בְּדִירָה, בְּקוֹמָה חָמֵשׁ. אֲנִי עוֹלָה בַּמַּעֲלִית.'],
  ['יוֹסִי', 'm', '#2a6fd0', 'אֲנִי יוֹסִי. אֲנִי מִנְּיוּ יוֹרְק. אֲנִי גָּר בְּבַיִת פְּרָטִי. יֵשׁ לָנוּ חָצֵר וַחֲנָיָה.'],
  ['מִיָּה', 'f', '#2f9d55', 'אֲנִי מִיָּה. אֲנִי מִתֵּל אָבִיב. אֲנִי גָּרָה בְּדִירָה בְּקוֹמָה אֶפֶס. אֵין לָנוּ מַעֲלִית.'],
];
$('kids').innerHTML = KIDS.map(([he, g, c, t], i) => `<button type="button" class="s-kid" data-i="${i}"><svg viewBox="-45 -104 90 110">${HouseOut.kid(0, 0, 1, g, c)}</svg><h3>${he}</h3><p>${t}</p></button>`).join('');
$('kids').querySelectorAll('.s-kid').forEach(b => b.onclick = () => { b.classList.add('on'); say(KIDS[+b.dataset.i][3]); beep(700, .1); });
const NUM = [0, 3, 5, 7].map(n => ({ id: '' + n, html: '<span style="font-size:1.4em">' + n + '</span>' }));
const BM = [{ id: 'b', html: 'בְּ<small>אֵיפֹה?</small>' }, { id: 'm', html: 'מִ<small>מֵאֵיפֹה?</small>' }];
cardQuiz($('qKids'), [
  { num: '✔ / ✘', q: 'יוֹסִי גָּר בְּדִירָה.', full: 'יוֹסִי גָּר בְּדִירָה.<br><span class="fill">✘ לֹא! יוֹסִי גָּר בְּבַיִת פְּרָטִי.</span>', ch: TF, ok: 'n' },
  { num: '✔ / ✘', q: 'לְיוֹסִי יֵשׁ חָצֵר.', full: 'לְיוֹסִי יֵשׁ חָצֵר.<br><span class="fill">✔ נָכוֹן</span>', ch: TF, ok: 'y' },
  { num: '✔ / ✘', q: 'מִיָּה עוֹלָה בַּמַּעֲלִית.', full: 'מִיָּה עוֹלָה בַּמַּעֲלִית.<br><span class="fill">✘ אֵין לָהּ מַעֲלִית. הִיא גָּרָה בְּקוֹמָה אֶפֶס.</span>', ch: TF, ok: 'n' },
  { num: '✔ / ✘', q: 'דָּנָה מֵחֵיפָה.', full: 'דָּנָה מֵחֵיפָה.<br><span class="fill">✔ נָכוֹן</span>', ch: TF, ok: 'y' },
  { num: 'מִסְפָּר', q: 'בְּאֵיזוֹ קוֹמָה דָּנָה גָּרָה?', full: 'דָּנָה גָּרָה בְּקוֹמָה <span class="fill">חָמֵשׁ (5)</span>.', ch: NUM, ok: '5' },
  { num: 'מִסְפָּר', q: 'בְּאֵיזוֹ קוֹמָה מִיָּה גָּרָה?', full: 'מִיָּה גָּרָה בְּקוֹמָה <span class="fill">אֶפֶס (0)</span>.', ch: NUM, ok: '0' },
  { num: 'בְּ / מִ', pre: 'יוֹסִי ', post: 'נְּיוּ יוֹרְק.', full: 'יוֹסִי <span class="fill">מִנְּיוּ יוֹרְק</span>.', ch: BM, ok: 'm' },
  { num: 'בְּ / מִ', pre: 'דָּנָה גָּרָה ', post: 'דִירָה.', full: 'דָּנָה גָּרָה <span class="fill">בְּדִירָה</span>.', ch: BM, ok: 'b' },
  { num: 'בְּ / מִ', pre: 'מִיָּה ', post: 'תֵּל אָבִיב.', full: 'מִיָּה <span class="fill">מִתֵּל אָבִיב</span>.', ch: BM, ok: 'm' },
  { num: 'בְּ / מִ', pre: 'אֲנִי גָּר ', post: 'בַיִת פְּרָטִי.', full: 'אֲנִי גָּר <span class="fill">בְּבַיִת פְּרָטִי</span>.', ch: BM, ok: 'b' },
]);

/* talking practice */
const HO = k => HouseOut.svg({ vb: (b => { const s = Math.max(b[2], b[3] * 4 / 3); return [b[0] + b[2] / 2 - s / 2, b[1] + b[3] / 2 - s * 3 / 8, s, s * 3 / 4]; })(HouseOut.box(k, 20)) });
BS.talk($('talk'), [
  { name: 'סִבּוּב 1 · בְּזוּגוֹת', sub: '2 דַּקּוֹת · א שׁוֹאֵל, ב עוֹנֶה ⬅ מִתְחַלְּפִים', items: [
    'מֵאֵיפֹה אַתָּה?<span class="ar">⬅</span>אֲנִי מִ___.', 'אַתָּה גָּר בְּבַיִת פְּרָטִי אוֹ בְּדִירָה?<span class="ar">⬅</span>אֲנִי גָּר / גָּרָה בְּ___.',
    'בְּאֵיזוֹ קוֹמָה אַתָּה גָּר?<span class="ar">⬅</span>אֲנִי גָּר / גָּרָה בְּקוֹמָה ___.', 'יֵשׁ מַעֲלִית?<span class="ar">⬅</span>כֵּן, אֲנִי עוֹלֶה בַּמַּעֲלִית. / לֹא, אֲנִי עוֹלֶה בַּמַּדְרֵגוֹת.',
    'יֵשׁ לָכֶם חָצֵר? חֲנָיָה?<span class="ar">⬅</span>כֵּן, יֵשׁ לָנוּ ___. / לֹא, אֵין לָנוּ ___.'] },
  { name: 'סִבּוּב 2 · סֶקֶר', sub: '2 דַּקּוֹת · מְחַפְּשִׂים מִישֶׁהוּ שֶׁ...', items: [
    '<table class="s-grid6"><tr><th>מְחַפְּשִׂים מִישֶׁהוּ שֶׁ...</th><th>שׁוֹאֲלִים</th></tr>' +
    [['גָּר בְּבַיִת פְּרָטִי', 'אַתָּה גָּר בְּבַיִת פְּרָטִי?'], ['גָּר בְּדִירָה', 'אַתָּה גָּר בְּדִירָה?'], ['גָּר מֵעַל קוֹמָה שָׁלוֹשׁ', 'בְּאֵיזוֹ קוֹמָה אַתָּה גָּר?'],
     ['יֵשׁ לוֹ מַעֲלִית', 'יֵשׁ מַעֲלִית בַּבִּנְיָן שֶׁלְּךָ?'], ['יֵשׁ לוֹ חָצֵר', 'יֵשׁ לָכֶם חָצֵר?'], ['הוּא מֵעִיר אַחֶרֶת', 'מֵאֵיפֹה אַתָּה?']].map(([a, b]) => `<tr><td>${a}</td><td>"${b}"</td></tr>`).join('') + '</table>'] },
], [{ he: 'בַּיִת פְּרָטִי', pic: HO('house') }, { he: 'דִּירָה / בִּנְיָן', pic: HO('building') }, { he: 'מַעֲלִית', pic: HO('elevator') }, { he: 'מַדְרֵגוֹת', pic: HO('stairs') },
  { he: 'חָצֵר', pic: HO('yard') }, { he: 'חֲנָיָה', pic: HO('parking') }, { he: 'שַׁעַר', pic: HO('gate') }, { he: 'פַּעֲמוֹן', pic: HO('bell') }, { he: 'קוֹמָה', pic: HO('corridor') }], 2);

/* 5 exit ticket */
const EX = BSD.EXIT[2];
$('exPic').innerHTML = HouseOut.svg({ vb: EX.vb, nums: EX.marks });
$('exBank').innerHTML = EX.bank.map(w => `<span>${w}</span>`).join('');
const lines = () => { $('exLines').innerHTML = EX.nums.map(([n]) => `<div style="cursor:pointer" data-n="${n}">${n}. <i>&nbsp;</i></div>`).join('');
  $('exLines').querySelectorAll('div').forEach(d => d.onclick = () => { const r = EX.nums.find(x => x[0] === +d.dataset.n); d.querySelector('i').textContent = r[2]; say(r[2]); beep(880, .15); }); };
lines();
$('exShow').onclick = () => { $('exLines').querySelectorAll('i').forEach((el, k) => el.textContent = EX.nums[k][2]); $('exBank').querySelectorAll('span').forEach(s => s.className = EX.nums.some(r => r[2] === s.textContent) ? 'ok' : 'no'); beep(880, .25); };
$('exHide').onclick = () => { lines(); $('exBank').querySelectorAll('span').forEach(s => s.className = ''); };
})();
