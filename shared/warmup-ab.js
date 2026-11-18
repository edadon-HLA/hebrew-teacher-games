/* shared/warmup-ab.js — the A/B warm-up block (approved 11/19 model), filled from data.
 * Page: <div class="sf-part"><div data-wab="B1"></div></div> ... then, before section-focus.js:
 *   <script src="../shared/warmup-ab-data.js?v=1"></script><script src="../shared/warmup-ab.js?v=1"></script>
 * (link ../shared/warmup-ab.css in the head). Every [data-wab] is mounted when this script runs; WarmupAB.mount(el, data) also works.
 * data = { type: 'talk' (default) | 'carousel' | 'board', label, title, sub, note, credits,
 *   photos: [{ src, word, pos? }]   src: 'bayit:<key>' (games/bayit-photos.js) | '@/<path from the site root>' | URL
 *   talk:     rounds: [[html...], [html...]] (or one list = same in every round), secs (60), bank (text), write: { prompt, hint, example, first }
 *   carousel: boxes: ['שָׁ', ...], items: [{ src, ans, word }]
 *   board:    rows: [['שָׁ','שַׁ','שְׁ'], ...], photos (row of pictures + words), roundLabels, write }
 * A photo that is missing (not downloaded yet) shows its word in a neutral box. */
(() => {
'use strict';
const ME = document.currentScript && document.currentScript.src;
const ROOT = ME ? new URL('../', ME).href : '../';
const src = s => !s ? '' : s.startsWith('bayit:') ? ((window.BAYIT_PH || {})[s.slice(6)] || '') : s.startsWith('@/') ? ROOT + s.slice(2) : s;
const esc = s => String(s).replace(/"/g, '&quot;');
let ac;
const beep = (f, d = .15, v = .14) => { try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); const o = ac.createOscillator(), g = ac.createGain(); o.frequency.value = f; g.gain.value = v; o.connect(g); g.connect(ac.destination); o.start(); o.stop(ac.currentTime + d); } catch (e) {} };
const chime = () => [660, 880, 1100].forEach((f, i) => setTimeout(() => beep(f, .35, .16), i * 220));
const say = t => { try { const u = new SpeechSynthesisUtterance(t); u.lang = 'he-IL'; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) {} };
/* own 3-2-1 overlay */
let cdEl = null;
function countdown(){
  if (!cdEl){ cdEl = document.createElement('div'); cdEl.className = 'wab-cd'; cdEl.innerHTML = '<div></div>'; cdEl.onclick = () => cdEl.classList.remove('on'); document.body.appendChild(cdEl); }
  const t = cdEl.firstChild; let n = 3; cdEl.classList.add('on'); t.textContent = n; beep(520);
  const tick = setInterval(() => { n--; if (n > 0){ t.textContent = n; beep(520); return; }
    clearInterval(tick); t.innerHTML = 'הָרִימוּ!'; beep(880, .3); setTimeout(() => cdEl.classList.remove('on'), 1400); }, 900);
}
const fig = p => { const s = src(p.src); return `<figure><div class="ph">${s ? `<img src="${esc(s)}" alt="${esc(p.word)}"${p.pos ? ` style="object-position:${p.pos}"` : ''} onerror="this.parentNode.classList.add('none');this.parentNode.textContent=this.alt">` : `<span>${p.word}</span>`}</div>${p.word}</figure>`; };
const strip = ps => `<div class="wab-strip" style="--c:${ps.length <= 5 ? ps.length : Math.ceil(ps.length / 2)}">${ps.map(fig).join('')}</div>`;
const writeBox = w => !w ? '' : `<div class="wab-write">${w.prompt}${w.hint ? `<small>${w.hint}</small>` : ''}<small>3… 2… 1… הָרִימוּ!</small>
  <div class="wab-bar"><button class="btn" type="button" data-cd>🕒 3… 2… 1… הָרִימוּ!</button></div>
  ${w.example ? `<details class="wab-ex"><summary>👁 דֻּגְמָה</summary><div>${w.example}</div></details>` : ''}</div>`;
const note = d => !d.note ? '' : `<details class="note wab-note"><summary>📝 מהלך קצר</summary><p>${d.note}</p>${d.credits ? `<p class="wab-cr" dir="ltr">${d.credits}</p>` : ''}</details>`;
const timerBox = () => `<div class="wab-timer"><div class="wab-rounds"></div><div class="rd"></div><div class="t">1:00</div>
  <div class="wab-bar"><button class="btn good" type="button" data-go>▶ הַתְחָלָה</button><button class="btn ghost" type="button" data-stop>⏸</button><button class="btn ghost small" type="button" data-min="1">1′</button><button class="btn ghost small" type="button" data-min="2">2′</button></div></div>`;

function timer(el, d, onRound){
  const q = s => el.querySelector(s), labels = d.roundLabels || ['סִבּוּב רִאשׁוֹן', 'בֶּן זוּג חָדָשׁ! 🔄'];
  const n = d.nRounds || (Array.isArray(d.rounds) && Array.isArray(d.rounds[0]) ? d.rounds.length : 2);
  let secs = d.secs || 60, left = secs, tm = null;
  const draw = () => { q('.wab-timer .t').textContent = Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0'); q('.wab-timer .t').classList.toggle('end', left === 0); };
  const stop = () => { clearInterval(tm); tm = null; };
  const set = i => { stop(); left = secs; draw(); q('.wab-rounds').querySelectorAll('button').forEach((b, j) => b.classList.toggle('on', j === i)); q('.wab-timer .rd').textContent = labels[Math.min(i, labels.length - 1)]; if (onRound) onRound(i); };
  for (let i = 0; i < n; i++){ const b = document.createElement('button'); b.type = 'button'; b.className = 'btn ghost small'; b.textContent = 'סִבּוּב ' + (i + 1); b.onclick = () => set(i); q('.wab-rounds').appendChild(b); }
  q('[data-go]').onclick = () => { if (tm) return; if (left === 0) left = secs; beep(700, .12); tm = setInterval(() => { left--; draw(); if (left <= 0){ stop(); chime(); } }, 1000); };
  q('[data-stop]').onclick = stop;
  el.querySelectorAll('.wab-timer [data-min]').forEach(b => b.onclick = () => { secs = +b.dataset.min * 60; stop(); left = secs; draw(); });
  set(0);
}

function talk(el, d){
  const R = Array.isArray(d.rounds[0]) ? d.rounds : [d.rounds, d.rounds], w = d.write || null;
  el.innerHTML = head(d) + strip(d.photos || []) + (w && w.first ? writeBox(w) : '') +
    `<div class="wab-talk"><div class="wab-prompts"></div>${timerBox()}</div>` + (d.bank ? `<div class="wab-bank">${d.bank}</div>` : '') + (w && !w.first ? writeBox(w) : '') + note(d);
  timer(el, Object.assign({ nRounds: R.length }, d), i => { el.querySelector('.wab-prompts').innerHTML = R[i].map(t => `<div class="wab-pr">${t}</div>`).join(''); });
}

function carousel(el, d){
  const IT = d.items; let i = 0, shown = false;
  el.innerHTML = head(d) + `<div class="wab-boxes">${d.boxes.map(b => `<div data-b="${esc(b)}">${b}</div>`).join('')}</div>
    <div class="wab-stage"><div class="ph"></div><div class="wab-ans"></div></div>
    <div class="wab-bar"><button class="btn ghost" type="button" data-prev>◀ הַקּוֹדֵם</button><span class="wab-cnt"></span><button class="btn ghost" type="button" data-next>הַבָּא ▶</button></div>
    <div class="wab-bar"><button class="btn" type="button" data-cd>🕒 3… 2… 1… הָרִימוּ!</button><button class="btn good" type="button" data-rv>👁 הַצִּיגוּ</button><button class="btn ghost" type="button" data-say>🔊</button></div>` + note(d);
  const q = s => el.querySelector(s);
  const show = () => { const it = IT[i], s = src(it.src); shown = false;
    q('.wab-stage .ph').innerHTML = s ? `<img src="${esc(s)}" alt="?" onerror="this.parentNode.classList.add('none');this.parentNode.textContent='?'">` : '?';
    q('.wab-stage .ph').classList.toggle('none', !s);
    q('.wab-ans').innerHTML = '&nbsp;'; q('.wab-cnt').textContent = (i + 1) + ' / ' + IT.length; el.querySelectorAll('.wab-boxes div').forEach(b => b.classList.remove('ok')); };
  q('[data-prev]').onclick = () => { i = (i - 1 + IT.length) % IT.length; show(); beep(560, .08); };
  q('[data-next]').onclick = () => { i = (i + 1) % IT.length; show(); beep(620, .08); };
  q('[data-rv]').onclick = () => { const it = IT[i]; shown = true; q('.wab-ans').innerHTML = `<b>${it.ans}</b> · ${it.word}`; el.querySelectorAll('.wab-boxes div').forEach(b => b.classList.toggle('ok', b.dataset.b === it.ans)); beep(880, .25); };
  q('[data-say]').onclick = () => say(IT[i].word);
  show();
}

function board(el, d){
  el.innerHTML = head(d) + `<div class="wab-board">${d.rows.map(r => `<div class="wab-row">${r.map(s => `<span>${s}</span>`).join('')}</div>`).join('')}${d.photos ? strip(d.photos) : ''}</div>
    <div class="wab-talk one">${timerBox()}</div>` + writeBox(d.write) + note(d);
  timer(el, Object.assign({ nRounds: 2, roundLabels: d.roundLabels }, d));
}

const head = d => `<span class="wab-lab">${d.label || ''}</span><p class="lead wab-title">${d.title}</p>${d.sub ? `<p class="sub wab-sub">${d.sub}</p>` : ''}`;

function mount(el, d){
  if (!el || !d) return;
  el.classList.add('wab');
  ({ talk, carousel, board })[d.type || 'talk'](el, d);
  el.querySelectorAll('[data-cd]').forEach(b => b.onclick = countdown);
}
window.WarmupAB = { mount, countdown, src };
document.querySelectorAll('[data-wab]').forEach(el => mount(el, (window.WAB_SETS || {})[el.dataset.wab]));
})();
