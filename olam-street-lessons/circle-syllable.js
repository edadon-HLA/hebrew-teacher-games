/* olam-street-lessons/circle-syllable.js — classwork "מַקִּיפִים אֶת הַהֲבָרָה" (teacher, 11/19): teacher panel for the printed sheet.
 * Page: <div data-cs="2.23"></div> inside its own .sf-part, then <script src="circle-syllable.js?v=1"></script> before section-focus.js.
 * Rows = the printable Olam-street-<lesson>-circle-syllable.html (same data, keep both in sync): [syllables box 1 -> 6 (right to left), teacher's box 1-6].
 * Only syllables printed on that workbook page. Future lessons: add a key to SETS. */
(() => {
'use strict';
const SETS = {
  '2.23': [ /* workbook p.17 — ב without dagesh, as printed */
    [['בַ', 'גוּ', 'נַ', 'גֹ', 'גִי', 'גַ'], 2], [['רוּ', 'בֹ', 'גוּ', 'נִי', 'נוּ', 'בוּ'], 5], [['גָ', 'בָ', 'בִי', 'בוּ', 'נָ', 'בֹ'], 3], [['בוּ', 'גֹ', 'נֹ', 'רוּ', 'בֹ', 'רֹ'], 6],
    [['נַ', 'טַ', 'נֹ', 'בַ', 'נִ', 'נוּ'], 1], [['בִי', 'גָ', 'טִי', 'נָ', 'טָ', 'בָ'], 5], [['גֹ', 'נִי', 'טִי', 'בִ', 'רוּ', 'גִי'], 3], [['נוּ', 'רֹ', 'טִי', 'רוּ', 'בֹ', 'טַ'], 4] ],
  '2.20': [ /* workbook p.15 */
    [['לַ', 'סֹ', 'סִ', 'חַ', 'סַ', 'סוּ'], 3], [['סוּ', 'חֹ', 'הֹ', 'סֹ', 'לֹ', 'טֹ'], 5], [['הָ', 'חוּ', 'חָ', 'הוּ', 'חִ', 'חֹ'], 2], [['לֹ', 'הוּ', 'סוּ', 'חוּ', 'לוּ', 'טוּ'], 6],
    [['לַ', 'סַ', 'לִ', 'טַ', 'לוּ', 'לֹ'], 1], [['טוּ', 'חִ', 'לִ', 'הִ', 'סִ', 'טִ'], 4], [['חֹ', 'הַ', 'הוּ', 'חַ', 'הֹ', 'הִ'], 5], [['טַ', 'לָ', 'סָ', 'טִ', 'הָ', 'חָ'], 3] ],
};
const css = `.cs-panel{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:10px 0}
.cs-line{display:flex;align-items:center;gap:10px;background:#fff;border:3px solid #e6e1d6;border-radius:14px;padding:6px 12px;font-weight:700;font-size:18px}
.cs-line.on{border-color:#2a8bd0;box-shadow:0 0 0 3px #2a8bd033}
.cs-line b{font-size:40px;line-height:1.2;min-width:1.6em;text-align:center}
.cs-line button{margin-inline-start:auto}
.cs-rows{display:none;gap:6px;margin:10px 0}.cs-rows.on{display:grid}
.cs-row{display:grid;grid-template-columns:40px repeat(6,minmax(0,1fr));gap:8px;align-items:center}
.cs-row .n{width:32px;height:32px;border-radius:50%;background:#2a8bd0;color:#fff;display:grid;place-items:center;font-weight:800}
.cs-row span{position:relative;display:grid;place-items:center;background:#fff;border:2px solid #cfd6e0;border-radius:12px;font-size:clamp(28px,4vw,44px);font-weight:700;line-height:1.5}
.cs-row span.ok::after{content:'';position:absolute;inset:4px 14%;border:4px solid #2f9d55;border-radius:50%}
@media(max-width:700px){.cs-panel{grid-template-columns:1fr}}`;
let voices = [];
const pick = () => { voices = ('speechSynthesis' in window ? speechSynthesis.getVoices() : []).filter(v => /^(he|iw)/i.test(v.lang)); };
if ('speechSynthesis' in window){ pick(); speechSynthesis.addEventListener('voiceschanged', pick); }
const say = t => { if (!('speechSynthesis' in window)) return; speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.lang = 'he-IL'; if (voices[0]) u.voice = voices[0]; u.rate = .7; speechSynthesis.speak(u); };
document.querySelectorAll('[data-cs]').forEach(el => {
  const R = SETS[el.dataset.cs]; if (!R) return;
  if (!document.getElementById('cs-css')){ const s = document.createElement('style'); s.id = 'cs-css'; s.textContent = css; document.head.appendChild(s); }
  el.innerHTML = `<div class="bar2"><button class="btn primary" type="button" data-next>▶ הַשּׁוּרָה הַבָּאָה</button><button class="btn" type="button" data-show>👁 הַצִּיגוּ</button></div>
    <div class="cs-panel">${R.map(([s, k], i) => `<div class="cs-line" data-i="${i}">שׁוּרָה ${i + 1}: הַמּוֹרֶה אוֹמֵר <b>${s[k - 1]}</b><button class="btn" type="button" data-say="${i}" aria-label="🔊">🔊</button></div>`).join('')}</div>
    <div class="cs-rows">${R.map(([s, k], i) => `<div class="cs-row"><span class="n">${i + 1}</span>${s.map((x, j) => `<span class="${j + 1 === k ? 'ok' : ''}">${x}</span>`).join('')}</div>`).join('')}</div>`;
  const lines = [...el.querySelectorAll('.cs-line')]; let cur = -1;
  const go = i => { cur = i; lines.forEach((l, j) => l.classList.toggle('on', j === i)); };
  el.querySelector('[data-next]').onclick = () => go((cur + 1) % R.length);
  el.querySelectorAll('[data-say]').forEach(b => b.onclick = () => { const i = +b.dataset.say; go(i); say(R[i][0][R[i][1] - 1]); });
  el.querySelector('[data-show]').onclick = () => el.querySelector('.cs-rows').classList.toggle('on');
});
})();
