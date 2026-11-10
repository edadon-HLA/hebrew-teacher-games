/* Olam Street 2.14 listening lessons — the shared engine of the four pages (parts 1-4).
 * Needs olam-2.14-data.js (L214: times, comic, art, words) and ../games/comic-art.js (faces).
 *   U.clip(i) / U.row(r)        play one bubble / one row of the book recording (times from L214), stops at the end time
 *   U.player(root, bubbles)     the listening player: panels light up, text hidden until "👁 הַצִּיגוּ טֶקְסְט"
 *   U.spotlight(root, keys)     the 5 core words, one at a time (big picture, word, voice, prev / again / next)
 *   U.quiz(root, items, o)      one engine for every "3-2-1 הָרִימוּ!" activity: prompt + picture/clip + clickable answer cards
 *   U.wordSearch(part, ids)     the entry ticket on screen
 *   U.talk(root, rounds, bank)  pair talk: frame, picture bank, 3 rounds x 2 minutes, "מַחֲלִיפִים!" chime          */
window.U214 = (() => {
'use strict';
const L = window.L214, $ = id => document.getElementById(id);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

/* ---------- computer voice (backup only), sounds, 3-2-1 ---------- */
let voices = [];
const pick = () => { voices = ('speechSynthesis' in window ? speechSynthesis.getVoices() : []).filter(v => /^(he|iw)/i.test(v.lang)); };
if ('speechSynthesis' in window){ pick(); speechSynthesis.onvoiceschanged = pick; }
const PITCH = { keren: 1.25, dan: .8, roni: 1.05 };
function say(t, who, rate){ if (!voices.length || !t) return; speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.voice = voices[0]; u.lang = voices[0].lang; u.rate = rate || .8; u.pitch = PITCH[who] || 1; speechSynthesis.speak(u); }
let ac = null;
function tone(ok, f0){ try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); const t = ac.currentTime;
  (f0 ? [f0] : ok ? [523, 659, 784] : [260, 200]).forEach((f, i) => { const o = ac.createOscillator(), g = ac.createGain(); o.frequency.value = f; o.type = 'triangle';
    g.gain.setValueAtTime(.0001, t + i * .1); g.gain.exponentialRampToValueAtTime(.16, t + i * .1 + .02); g.gain.exponentialRampToValueAtTime(.0001, t + i * .1 + .3);
    o.connect(g).connect(ac.destination); o.start(t + i * .1); o.stop(t + i * .1 + .32); }); } catch (e) {} }
function countdown(){ const o = document.createElement('div'); o.className = 'cdov'; (document.querySelector('.sf-cur') || document.body).appendChild(o); let n = 3;
  const step = () => { if (n > 0){ o.innerHTML = `<div><b>${n}</b></div>`; tone(true, 440 + (3 - n) * 80); n--; setTimeout(step, 900); } else { o.innerHTML = '<div><span>הָרִימוּ! ✋</span></div>'; tone(true, 880); setTimeout(() => o.remove(), 1200); } }; step(); }
const art = k => L.ART[k] || '';
const face = who => (window.ComicArt ? ComicArt.face(who) : '');
const panel = n => `olam-2.14-panels/panel-${n}.jpg`;

/* ---------- the book recording: play [start, end], stop exactly at the end ---------- */
const audio = new Audio(L.AUDIO); audio.preload = 'auto';
let stopAt = null, onTick = null, onEnd = null, timer = null, rate = 1, lastRange = null;
function play(s, e, tick, end){
  stopClip(true); lastRange = [s, e, tick, end]; stopAt = e; onTick = tick; onEnd = end; audio.playbackRate = rate;
  const go = () => { try { audio.currentTime = s; } catch (x) {} audio.play().catch(() => {}); timer = setInterval(() => { const t = audio.currentTime; if (onTick) onTick(t); if (t >= stopAt - 0.02 || audio.ended) stopClip(); }, 40); };
  if (audio.readyState >= 1) go(); else audio.addEventListener('loadedmetadata', go, { once: true });
}
function stopClip(silent){ clearInterval(timer); timer = null; if (!audio.paused) audio.pause(); const e = onEnd; onEnd = null; if (!silent && e) e(); }
const clip = (i, tick, end) => play(L.BUB[i][0], L.BUB[i][1], tick, end);
const row = (r, tick, end) => play(L.ROWS[r - 1][0], L.ROWS[r - 1][1], tick, end);
const again = () => { if (lastRange) play(...lastRange); };
const fmt = t => Math.floor(t / 60) + ':' + (t % 60).toFixed(1).padStart(4, '0');

/* ---------- the listening player ---------- */
function player(root, bubs, title){
  const panels = [...new Set(bubs.map(i => L.B[i].p))];
  const s0 = L.BUB[bubs[0]][0], e0 = L.BUB[bubs[bubs.length - 1]][1];
  const range = bubs.length === 15 ? [L.ROWS[0][0], L.ROWS[2][1]] : (() => { const r = L.B[bubs[0]].row; return L.ROWS[r - 1]; })();
  root.innerHTML = `<div class="L-player blur"><div class="L-panels">${panels.map(n => `<figure data-p="${n}"><img src="${panel(n)}" alt=""><figcaption>${n}</figcaption></figure>`).join('')}</div>
    <div class="L-pctl"><button class="btn primary big" data-a="all" type="button">▶ שׁוֹמְעִים${title ? ' · ' + title : ''}</button><button class="btn" data-a="stop" type="button">⏸</button><button class="btn" data-a="again" type="button">↺ שׁוּב</button>
      <button class="btn" data-a="next" type="button">הַבּוּעָה הַבָּאָה ◀</button><label class="btn ghost" style="cursor:pointer"><input type="checkbox" data-a="slow"> 🐢 0.85</label>
      <button class="btn ghost" data-a="txt" type="button">👁 הַצִּיגוּ טֶקְסְט</button><span class="tm" data-a="tm">0:00.0</span></div>
    <div class="L-bubs">${bubs.map(i => { const b = L.B[i], c = L.CHARS[b.who]; return `<div class="L-bub" data-i="${i}" style="border-inline-start-color:${c.color}"><span class="no">${i + 1}</span><span class="nm hid" style="background:${c.color}">${c.he}</span><span class="tx hid">${b.t}</span>
      <button class="btn L-small" data-play="${i}" type="button">▶</button><button class="btn ghost L-small" data-tts="${i}" type="button" title="קוֹל מַחְשֵׁב">🔊 קוֹל מַחְשֵׁב</button></div>`; }).join('')}</div></div>`;
  const q = s => root.querySelector(s), figs = [...root.querySelectorAll('figure')], rows = [...root.querySelectorAll('.L-bub')];
  let shown = false, cur = -1;
  const mark = t => { q('[data-a="tm"]').textContent = fmt(t); const i = bubs.find(k => t >= L.BUB[k][0] - 0.15 && t <= L.BUB[k][1] + 0.3); if (i != null) light(i); };
  function light(i){ cur = i; rows.forEach(r => r.classList.toggle('now', +r.dataset.i === i)); figs.forEach(f => f.classList.toggle('now', +f.dataset.p === L.B[i].p)); }
  const done = () => { rows.forEach(r => r.classList.remove('now')); figs.forEach(f => f.classList.remove('now')); };
  q('[data-a="all"]').onclick = () => play(range[0], range[1], mark, done);
  q('[data-a="stop"]').onclick = () => stopClip(true);
  q('[data-a="again"]').onclick = again;
  q('[data-a="next"]').onclick = () => { const k = bubs.indexOf(cur), n = bubs[Math.min(bubs.length - 1, k + 1)]; light(n); clip(n, t => { q('[data-a="tm"]').textContent = fmt(t); }); };
  q('[data-a="slow"]').onchange = e => { rate = e.target.checked ? .85 : 1; audio.playbackRate = rate; };
  q('[data-a="txt"]').onclick = e => { shown = !shown; root.querySelectorAll('.tx, .nm').forEach(x => x.classList.toggle('hid', !shown)); q('.L-player').classList.toggle('blur', !shown); e.currentTarget.textContent = shown ? '🙈 מַסְתִּירִים טֶקְסְט' : '👁 הַצִּיגוּ טֶקְסְט'; };
  root.querySelectorAll('[data-play]').forEach(b => b.onclick = () => { const i = +b.dataset.play; light(i); clip(i, t => { q('[data-a="tm"]').textContent = fmt(t); }); });
  root.querySelectorAll('[data-tts]').forEach(b => b.onclick = () => { const i = +b.dataset.tts; light(i); say(L.B[i].t, L.B[i].who); });
  return { light };
}

/* ---------- spotlight of the 5 words ---------- */
function spotlight(root, keys){
  root.innerHTML = `<div class="L-spot"><div class="pic"></div><div class="w"></div>
    <div class="bar2" style="justify-content:center"><button class="btn" data-a="prev" type="button">▶ הַקּוֹדֵם</button><button class="btn primary" data-a="say" type="button">🔊 שׁוּב</button><button class="btn primary" data-a="next" type="button">הַבָּא ◀</button></div>
    <div class="L-dots">${keys.map((k, i) => `<button type="button" data-i="${i}" aria-label="${L.HE[k]}">${art(k)}</button>`).join('')}</div></div>`;
  let i = 0; const q = s => root.querySelector(s);
  function show(){ const k = keys[i]; q('.pic').innerHTML = art(k); q('.w').textContent = L.HE[k]; root.querySelectorAll('.L-dots button').forEach((b, j) => b.classList.toggle('on', j === i)); say(L.HE[k], 'keren', .7); }
  q('[data-a="prev"]').onclick = () => { i = (i + keys.length - 1) % keys.length; show(); };
  q('[data-a="next"]').onclick = () => { i = (i + 1) % keys.length; show(); };
  q('[data-a="say"]').onclick = () => say(L.HE[keys[i]], 'keren', .7);
  root.querySelectorAll('.L-dots button').forEach(b => b.onclick = () => { i = +b.dataset.i; show(); });
  show();
}

/* ---------- the quiz engine ----------
 * item: { q: prompt html, pic: picture html, img: photo url, clip: bubble index (played, text hidden), say: text read by the
 *         computer voice, ch: [{ id, html, cls }], ok: right id, full: html shown on reveal, sayFull: text read on reveal }
 * o: { mix: shuffle the order (and on "↺"), n: how many rounds per set, chMix: shuffle the answer cards } */
function quiz(root, items0, o){
  o = o || {};
  root.innerHTML = `<div class="rounds"></div><div class="L-stage"><div class="q"></div><div class="pic"></div><div class="full"></div></div>
    <div class="L-cards"></div>
    <div class="bar2" style="justify-content:center"><button class="btn" data-a="prev" type="button">▶ הַקּוֹדֵם</button><button class="btn primary" data-a="next" type="button">הַבָּא ◀</button>
      <button class="btn" data-a="ear" type="button">↺ שׁוּב</button><button class="cdbtn" data-a="cd" type="button">🕒 3… 2… 1… הָרִימוּ!</button><button class="btn primary big" data-a="rv" type="button">👁 הַצִּיגוּ</button>${o.mix ? '<button class="btn ghost" data-a="mix" type="button">🔀 עִרְבּוּב</button>' : ''}</div>`;
  const q = s => root.querySelector(s), st = q('.L-stage');
  let items = [], i = 0, done = false;
  const make = () => { items = o.mix ? shuffle(items0).slice(0, o.n || items0.length) : items0.slice(0, o.n || items0.length); i = 0; show(); };
  function hear(it){ if (it.clip != null) clip(it.clip); else if (it.say) say(it.say, it.who); }
  function show(){ const it = items[i]; done = false; st.classList.remove('yes');
    root.querySelector('.rounds').innerHTML = items.map((_, k) => `<i class="${k < i ? 'done' : k === i ? 'on' : ''}">${k + 1}</i>`).join('');
    q('.q').innerHTML = it.q || ''; q('.pic').innerHTML = it.img ? `<img src="${it.img}" alt="">` : (it.pic || ''); q('.full').innerHTML = '';
    const ch = o.chMix ? shuffle(it.ch) : it.ch;
    q('.L-cards').innerHTML = ch.map((c, k) => `<button type="button" class="L-card ${c.cls || ''}" data-k="${c.id}">${o.num ? `<span class="n">${k + 1}</span>` : ''}${c.html}<span class="mk"></span></button>`).join('');
    q('.L-cards').querySelectorAll('.L-card').forEach(b => b.onclick = () => { if (it.ok == null){ b.classList.toggle('hit'); tone(true, 660); return; } if (done) return; if (b.dataset.k === String(it.ok)) right(); else { b.classList.add('no'); b.querySelector('.mk').textContent = '✘'; tone(false); } });
    q('[data-a="prev"]').disabled = i === 0; if (o.autoPlay !== false) hear(it); }
  function right(){ const it = items[i]; done = true; st.classList.add('yes');
    if (it.ok != null) q('.L-cards').querySelectorAll('.L-card').forEach(b => { const ok = b.dataset.k === String(it.ok); b.classList.toggle('hit', ok); b.classList.toggle('hide', !ok); if (ok) b.querySelector('.mk').textContent = '✔'; });
    q('.full').innerHTML = it.full || ''; tone(true); if (it.sayFull) say(it.sayFull, it.who); if (it.after) it.after(); }
  q('[data-a="prev"]').onclick = () => { if (i > 0){ i--; show(); } };
  q('[data-a="next"]').onclick = () => { if (i < items.length - 1){ i++; show(); } else make(); };
  q('[data-a="ear"]').onclick = () => hear(items[i]);
  q('[data-a="cd"]').onclick = countdown;
  q('[data-a="rv"]').onclick = () => { if (!done) right(); };
  if (o.mix) q('[data-a="mix"]').onclick = make;
  make();
}
/* answer-card helpers */
const wordCard = k => ({ id: k, html: L.HE[k] });
const picCard = k => ({ id: k, html: art(k) });
const charCard = who => ({ id: who, cls: 'face', html: `<span class="fc">${face(who)}</span>${L.CHARS[who].he}` });
const CHAR3 = ['keren', 'dan', 'roni'].map(charCard);
const TF = [{ id: 'y', html: '✔<small>נָכוֹן</small>' }, { id: 'n', html: '✘<small>לֹא נָכוֹן</small>' }];
const reveal = i => { const b = L.B[i], c = L.CHARS[b.who]; return `<span class="fc">${face(b.who)}</span><span style="color:${c.color}">${c.he}</span>: ${b.t}<img class="pn" src="${panel(b.p)}" alt="">`; };
/* ready-made activities */
function whoSaid(root, bubs, o){ quiz(root, bubs.map(i => ({ q: '🎧 מִי אָמַר?', clip: i, ch: CHAR3, ok: L.B[i].who, full: reveal(i) })), o); }
function listenRaise(root, keys, o){ quiz(root, keys.map(k => ({ q: '🎧 שׁוֹמְעִים וּמְרִימִים תְּמוּנָה', say: L.HE[k], ch: keys.map(picCard), ok: k, full: `${art(k)}<div>${L.HE[k]}</div>` })), Object.assign({ mix: true }, o)); }
function match(root, keys, lv){ quiz(root, keys.map(k => lv === 2
  ? { q: 'הָרִימוּ מִלָּה', pic: art(k), ch: keys.map(wordCard), ok: k, full: L.HE[k], sayFull: L.HE[k], autoPlay: false }
  : { q: `<span style="font-size:1.4em">${L.HE[k]}</span><div style="font-size:.5em;color:var(--muted)">הָרִימוּ תְּמוּנָה</div>`, ch: keys.map(picCard), ok: k, full: art(k), sayFull: L.HE[k] }), { mix: true, chMix: true, autoPlay: false }); }
function tfListen(root, list, o){ quiz(root, list.map(s => ({ q: `🎧 <span class="tf-t" style="display:none">${s.t}</span>`, say: s.t, ch: TF, ok: s.ok ? 'y' : 'n', full: `<div>${s.ok ? '✔ נָכוֹן' : '✘ לֹא נָכוֹן'}: ${s.t}</div>${s.why ? `<div style="color:var(--ink)">${s.why}</div>` : ''}<img class="pn" src="${panel(L.B[s.b - 1].p)}" alt="">` })), o); }

/* ---------- word search on screen ---------- */
function wordSearch(part, gridId, wordsId, nextId, allId, clrId){
  const D = L.GRIDS[part];
  $(gridId).innerHTML = D.g.flat().map(c => `<div>${c}</div>`).join('');
  $(wordsId).innerHTML = D.w.map((w, i) => `<span data-i="${i}">${w.he}</span>`).join('');
  const cells = [...$(gridId).children], at = (r, c) => cells[r * 8 + c]; let wi = 0;
  const showW = i => { cells.forEach(d => { if (d.classList.contains('on')){ d.classList.remove('on'); d.classList.add('was'); } }); L.cellsOf(D.w[i]).forEach(([r, c]) => at(r, c).classList.add('on')); $(wordsId).children[i].classList.add('found'); tone(true, 600 + i * 30); say(D.w[i].he); };
  $(nextId).onclick = () => { if (wi >= D.w.length) return; showW(wi); wi++; };
  $(allId).onclick = () => { D.w.forEach((w, i) => { L.cellsOf(w).forEach(([r, c]) => { at(r, c).classList.remove('on'); at(r, c).classList.add('was'); }); $(wordsId).children[i].classList.add('found'); }); wi = D.w.length; tone(true); };
  $(clrId).onclick = () => { cells.forEach(d => d.className = ''); [...$(wordsId).children].forEach(s => s.classList.remove('found')); wi = 0; };
}

/* ---------- pair talk ---------- */
function talk(root, frames, bank){
  root.innerHTML = `<div class="L-frame">${frames.map(([w, t]) => `<div class="${w === 'א' ? 'a' : 'b'}"><span class="w">${w}</span><span>${t}</span></div>`).join('')}</div>
    <div class="L-bank">${bank.map(k => `<div>${art(k)}${L.HE[k] || ''}</div>`).join('')}</div>
    <div class="rounds" data-a="r"></div><div class="bigtimer" data-a="t">2:00</div>
    <div class="bar2" style="justify-content:center"><button class="cdbtn" data-a="go" type="button">⏱ מַתְחִילִים — 2 דַּקּוֹת</button></div>
    <div class="sumF" data-a="m" style="max-width:560px;margin-inline:auto">סִבּוּב 1 מִתּוֹךְ 3</div>`;
  const q = s => root.querySelector(`[data-a="${s}"]`), N = 3, T = 120; let tt = null, rd = 0;
  const dots = () => { q('r').innerHTML = Array.from({ length: N }, (_, k) => `<i class="${k < rd ? 'done' : k === rd ? 'on' : ''}">${k + 1}</i>`).join(''); };
  const sh = s => { q('t').textContent = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
  dots();
  q('go').onclick = () => {
    if (tt){ clearInterval(tt); tt = null; sh(T); q('t').classList.remove('end'); q('go').textContent = '⏱ מַתְחִילִים — 2 דַּקּוֹת'; return; }
    if (rd >= N){ rd = 0; dots(); q('m').textContent = 'סִבּוּב 1 מִתּוֹךְ 3'; }
    let s = T; q('go').textContent = '⏹ עוֹצְרִים'; q('t').classList.remove('end'); sh(s);
    tt = setInterval(() => { s--; sh(s); if (s > 0) return; clearInterval(tt); tt = null; rd++; dots(); q('t').classList.add('end'); const last = rd >= N;
      q('t').textContent = last ? 'סוֹף!' : '🔔'; tone(false); setTimeout(() => tone(true), 300);
      q('m').textContent = last ? 'כָּל הַכָּבוֹד! 🎉' : 'מַחֲלִיפִים! בֶּן זוּג חָדָשׁ · סִבּוּב ' + (rd + 1) + ' מִתּוֹךְ 3'; say(last ? 'סוֹף! כָּל הַכָּבוֹד' : 'מַחֲלִיפִים!');
      q('go').textContent = last ? '↺ מֵהַהַתְחָלָה' : '⏱ מַתְחִילִים — 2 דַּקּוֹת'; }, 1000); };
}

document.querySelectorAll('[data-cd]').forEach(b => b.onclick = countdown);
return { L, $, shuffle, say, tone, countdown, art, face, panel, clip, row, play, stopClip, again, player, spotlight, quiz, wordCard, picCard, charCard, CHAR3, TF, reveal, whoSaid, listenRaise, match, tfListen, wordSearch, talk, audio };
})();
