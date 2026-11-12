/* Niflaot unit "הַבַּיִת שֶׁלָּנוּ" — shared lesson engine (lessons 1-4). Patterns copied from Niflaot-sicha-babayit.html (cardQuiz,
 * countdown, word search, timer) and Niflaot-ma-yesh-barechov.html (click-to-hear pictures). Needs data.js, ../games/bayit-photos.js.
 *   BS.wordSearch(n)                         fills #mGrid / #mWords / #mFound / #wsAll / #wsClr from BSD.grid(n)
 *   BS.cardQuiz(root, items, onShow)         one item at a time, clickable answer cards (✔ / ✘), 3-2-1, reveal
 *   BS.pic(key) / BS.img(key)                photo URL / <img> from BAYIT_PH
 *   BS.house(cb)                             loads the hide-and-seek house drawing once: cb({ room(k, vb, extra), defs })
 *   BS.scene(root, tabs)                     tabs of pictures with clickable words (word card + sentence + speech)
 *   BS.frames(root, frames)                  click-to-hear picture frames: { pic, t (html, verb in <b>), say }
 *   BS.talk(root, rounds, bank, min)         pair-talk rounds + timer + word bank
 *   BS.textSay(root, sentences)              a text whose sentences are spoken on click */
window.BS = (() => {
'use strict';
const $ = id => document.getElementById(id);
const PH = window.BAYIT_PH || {};
let ac;
const beep = (f, d = .15, v = .14) => { try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); const o = ac.createOscillator(), g = ac.createGain(); o.frequency.value = f; g.gain.value = v; o.connect(g); g.connect(ac.destination); o.start(); o.stop(ac.currentTime + d); } catch (e) {} };
const chime = () => { [660, 880, 1100].forEach((f, i) => setTimeout(() => beep(f, .35, .16), i * 220)); };
const say = t => { if (!window.speechSynthesis) return; const v = speechSynthesis.getVoices().find(v => /^(he|iw)/i.test(v.lang)); if (!v) return; speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(String(t).replace(/<[^>]+>/g, '')); u.voice = v; u.lang = v.lang; u.rate = .75; speechSynthesis.speak(u); };
if (window.speechSynthesis) speechSynthesis.getVoices();

/* 3-2-1 countdown overlay */
document.body.insertAdjacentHTML('beforeend', '<div id="mCd" aria-live="assertive"><div id="mCdT">3</div></div>');
let cdBusy = false;
function countdown(){
  if (cdBusy) return; cdBusy = true;
  const ov = $('mCd'), t = $('mCdT'); let n = 3; ov.classList.add('on'); t.textContent = n; beep(520);
  const tick = setInterval(() => {
    n--; if (n > 0){ t.textContent = n; beep(520); return; }
    clearInterval(tick); t.innerHTML = 'הָרִימוּ!<small>🃏</small>'; beep(880, .3);
    setTimeout(() => { ov.classList.remove('on'); cdBusy = false; }, 1300);
  }, 1000);
}
const pic = k => PH[k] || '';
const img = (k, cls) => PH[k] ? `<img${cls ? ` class="${cls}"` : ''} src="${PH[k]}" alt="">` : '';

/* ---------- word search ---------- */
function wordSearch(n){
  const D = BSD.grid(n), cells = [];
  D.GRID.forEach((row, r) => row.forEach((ch, c) => { const d = document.createElement('div'); d.className = 'm-cell'; d.textContent = ch; $('mGrid').appendChild(d); (cells[r] = cells[r] || [])[c] = d; }));
  const btns = D.WORDS.map(w => { const b = document.createElement('button'); b.type = 'button'; b.className = 'm-word'; b.textContent = w.he;
    b.onclick = () => { b.classList.toggle('on'); paint(); beep(b.classList.contains('on') ? 760 : 420, .12); }; $('mWords').appendChild(b); return b; });
  function paint(){ cells.flat().forEach(d => d.classList.remove('on')); let k = 0;
    D.WORDS.forEach((w, i) => { if (!btns[i].classList.contains('on')) return; k++; D.cellsOf(w).forEach(([r, c]) => cells[r][c].classList.add('on')); });
    $('mFound').textContent = k + ' / ' + D.WORDS.length; }
  $('wsAll').onclick = () => { btns.forEach(b => b.classList.add('on')); paint(); beep(880, .25); };
  $('wsClr').onclick = () => { btns.forEach(b => b.classList.remove('on')); paint(); };
  paint();
}

/* ---------- card quiz (Niflaot-sicha-babayit.html) ----------
 * item = { num?, pic? (url) | picHtml?, pre, post, full, q?, ch:[{id, html}], ok } */
function cardQuiz(root, items, onShow){
  root.innerHTML = `<div class="m-stage" style="margin-top:8px"><div class="q-num"></div><div class="q-pic"></div><div class="q-sent"></div></div>
    <div class="m-cards q-choice"></div>
    <div class="m-bar c"><button class="btn ghost" data-a="prev" type="button">▶ הקודם</button><span class="m-count"></span><button class="btn ghost" data-a="next" type="button">הבא ◀</button>
    <button class="m-cd" data-a="cd" type="button">🕒 3… 2… 1… הָרִימוּ!</button><button class="btn good" data-a="rv" type="button">👁 הַצִּיגוּ תְּשׁוּבָה</button></div>`;
  const st = root.querySelector('.m-stage'), q = s => root.querySelector(s);
  let i = 0, done = false;
  function right(){ const it = items[i]; done = true; st.classList.add('yes'); q('.q-sent').innerHTML = it.full;
    q('.q-choice').querySelectorAll('.n-pick').forEach(b => { b.disabled = true; const ok = b.dataset.k === it.ok; b.classList.toggle('hit', ok); b.classList.toggle('hide', !ok); if (ok) b.querySelector('.mk').textContent = '✔'; });
    beep(880, .25); say(it.full); if (onShow) onShow(i, true); }
  function show(){
    const it = items[i]; done = false; st.classList.remove('yes');
    q('.q-num').textContent = it.num || ''; q('.q-pic').innerHTML = it.picHtml || (it.pic ? `<img src="${it.pic}" alt="">` : '');
    q('.q-sent').innerHTML = it.pre != null ? `${it.pre}<span class="gap">_</span>${it.post || ''}` : (it.q || '');
    q('.q-choice').innerHTML = it.ch.map(c => `<button type="button" class="m-card n-pick" data-k="${c.id}">${c.html}<span class="mk"></span></button>`).join('');
    q('.q-choice').querySelectorAll('.n-pick').forEach(b => b.onclick = () => { if (done) return; if (b.dataset.k === it.ok) right(); else { b.classList.add('no'); b.querySelector('.mk').textContent = '✘'; b.disabled = true; beep(260, .2); } });
    q('.m-count').textContent = (i + 1) + ' / ' + items.length; if (onShow) onShow(i, false);
  }
  q('[data-a="prev"]').onclick = () => { i = (i + items.length - 1) % items.length; show(); };
  q('[data-a="next"]').onclick = () => { i = (i + 1) % items.length; show(); };
  q('[data-a="cd"]').onclick = countdown;
  q('[data-a="rv"]').onclick = () => { if (!done) right(); else q('[data-a="next"]').click(); };
  show();
  return { go: n => { i = n; show(); } };
}
const TF = [{ id: 'y', html: '✔<small>נָכוֹן</small>' }, { id: 'n', html: '✘<small>לֹא נָכוֹן</small>' }];
const ROOMCH = (keys) => keys.map(k => { const r = BSD.ROOMS.find(x => x.k === k); return { id: k, html: `<img src="${pic(r.ph)}" alt="" style="width:120px;height:80px;object-fit:cover;border-radius:10px;display:block;margin:0 auto 4px">${r.he}` }; });

/* ---------- the hide-and-seek house drawing (games/hebrew-hide-and-seek.html + games/hide-seek-ext.js) ---------- */
let houseP = null;
function house(cb){
  if (!houseP) houseP = fetch('../games/hebrew-hide-and-seek.html').then(r => r.text()).then(t => {
    const doc = new DOMParser().parseFromString(t, 'text/html'), defs = doc.querySelector('#house defs').outerHTML, G = {};
    ['living', 'kitchen', 'bedroom', 'bath', 'garden'].forEach(k => { const g = doc.getElementById('a-' + k); if (!g) return;
      if (window.HIDE_EXT && HIDE_EXT.art[k]) g.insertAdjacentHTML('beforeend', HIDE_EXT.art[k]); G[k] = g.outerHTML; });
    const BOX = { living: [20, 266, 320, 214], kitchen: [340, 266, 260, 214], bedroom: [20, 44, 320, 210], bath: [340, 44, 260, 210], garden: [620, 190, 380, 350] };
    return { defs, G, BOX, room: (k, vb, extra) => `<svg viewBox="${(vb || BOX[k]).join(' ')}" xmlns="http://www.w3.org/2000/svg">${defs}${G[k] || ''}${extra || ''}</svg>` };
  });
  houseP.then(cb);
}

/* ---------- picture scene with clickable words ----------
 * tab = { he, room?: hide-seek room key | svg?: markup (own viewBox), words: [{ he, s, ph?, z?: shape, star?, crop?: [x,y,w,h] }], check?: [q, a] } */
function scene(root, tabs){
  root.innerHTML = `<div class="s-tabs"></div><div class="s-scene"><div class="s-pic"></div><div class="s-card"><div class="hint">לוֹחֲצִים עַל דָּבָר בַּתְּמוּנָה אוֹ עַל מִלָּה ⬇</div></div></div>
    <div class="s-chips"></div><div class="m-bar c"><button class="btn ghost" data-a="all" type="button">👁 כָּל הַמִּלִּים בַּתְּמוּנָה</button><button class="btn ghost" data-a="clr" type="button">↺</button><button class="btn" data-a="chk" type="button">😄 בְּדִיקָה מַצְחִיקָה</button></div><div class="s-check s-hide"></div>`;
  const P = root.querySelector('.s-pic'), C = root.querySelector('.s-card'), CH = root.querySelector('.s-chips'), CK = root.querySelector('.s-check');
  let cur = 0, H = null, svgEl = null;
  const NS = 'http://www.w3.org/2000/svg';
  tabs.forEach((t, i) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = t.he; b.onclick = () => open(i); root.querySelector('.s-tabs').appendChild(b); });
  function bbox(z){ return z[0] === 'r' ? [z[1], z[2], z[3], z[4]] : [z[1] - z[3], z[2] - z[3], z[3] * 2, z[3] * 2]; }
  function show(w){
    CH.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.he === w.he));
    let ph = w.ph ? img(w.ph) : '';
    if (!ph && w.z && svgEl){ const b = bbox(w.z), pad = 14, s = Math.max(b[2], b[3] * 4 / 3) + pad * 2; const vb = [b[0] + b[2] / 2 - s / 2, b[1] + b[3] / 2 - s * 3 / 8, s, s * 3 / 4];
      ph = svgEl.outerHTML.replace(/viewBox="[^"]*"/, `viewBox="${vb.join(' ')}"`).replace(/<g class="s-zs">[\s\S]*$/, '</svg>'); }
    C.innerHTML = `<div class="ph">${ph}</div><div class="w">${w.he}${w.star ? '<i>⭐</i>' : ''}</div><div class="s">${w.s || ''}</div>`;
    if (svgEl){ svgEl.querySelectorAll('.s-z').forEach(e => e.classList.toggle('on', e.dataset.he === w.he)); label(w); }
    say(w.he + '. ' + (w.s || '')); beep(760, .1);
  }
  function label(w){ const L = svgEl.querySelector('.s-lb'); L.innerHTML = ''; if (!w || !w.z) return; const b = bbox(w.z), vb = svgEl.viewBox.baseVal;
    const t = document.createElementNS(NS, 'text'); t.setAttribute('class', 's-lbl'); const fs = vb.width / 18; t.style.fontSize = fs + 'px'; t.style.strokeWidth = fs / 3.5 + 'px';
    t.setAttribute('x', Math.min(Math.max(b[0] + b[2] / 2, vb.x + fs * 3), vb.x + vb.width - fs * 3)); t.setAttribute('y', b[1] - fs * .4 > vb.y + fs ? b[1] - fs * .4 : b[1] + b[3] + fs); t.textContent = w.he; L.appendChild(t); }
  function open(i){
    cur = i; const t = tabs[i]; CK.classList.add('s-hide'); CK.innerHTML = '';
    root.querySelectorAll('.s-tabs button').forEach((b, j) => b.classList.toggle('on', j === i));
    C.innerHTML = '<div class="hint">לוֹחֲצִים עַל דָּבָר בַּתְּמוּנָה אוֹ עַל מִלָּה ⬇</div>';
    const words = t.words.slice().sort((a, b) => (b.star ? 1 : 0) - (a.star ? 1 : 0));
    CH.innerHTML = words.map(w => `<button type="button" class="${w.star ? 'star' : ''}" data-he="${w.he}">${w.star ? '⭐ ' : ''}${w.he}</button>`).join('');
    CH.querySelectorAll('button').forEach(b => b.onclick = () => show(t.words.find(w => w.he === b.dataset.he)));
    const draw = markup => { P.innerHTML = markup; svgEl = P.querySelector('svg');
      const g = document.createElementNS(NS, 'g'); g.setAttribute('class', 's-zs'); svgEl.appendChild(g);
      const L = document.createElementNS(NS, 'g'); L.setAttribute('class', 's-lb'); g.appendChild(L);
      t.words.filter(w => w.z).forEach(w => { const z = w.z, e = document.createElementNS(NS, z[0] === 'r' ? 'rect' : 'circle');
        if (z[0] === 'r'){ e.setAttribute('x', z[1]); e.setAttribute('y', z[2]); e.setAttribute('width', z[3]); e.setAttribute('height', z[4]); e.setAttribute('rx', 4); }
        else { e.setAttribute('cx', z[1]); e.setAttribute('cy', z[2]); e.setAttribute('r', z[3]); }
        e.setAttribute('class', 's-z'); e.dataset.he = w.he; e.addEventListener('click', () => show(w)); g.insertBefore(e, L); }); };
    if (t.svg) draw(t.svg); else { P.innerHTML = '<div style="padding:40px;text-align:center;line-height:1.4">…</div>'; house(Hs => { H = Hs; if (cur === i) draw(H.room(t.room, t.vb)); }); }
  }
  root.querySelector('[data-a="all"]').onclick = () => { if (!svgEl) return; svgEl.querySelectorAll('.s-z').forEach(e => e.classList.add('on'));
    const L = svgEl.querySelector('.s-lb'); L.innerHTML = ''; tabs[cur].words.filter(w => w.z).forEach(w => { const b = bbox(w.z), vb = svgEl.viewBox.baseVal, fs = vb.width / 26;
      const t = document.createElementNS(NS, 'text'); t.setAttribute('class', 's-lbl'); t.style.fontSize = fs + 'px'; t.style.strokeWidth = fs / 3.5 + 'px'; t.setAttribute('x', b[0] + b[2] / 2); t.setAttribute('y', b[1] + b[3] / 2 + fs / 3); t.textContent = w.he; L.appendChild(t); }); beep(880, .2); };
  root.querySelector('[data-a="clr"]').onclick = () => { if (svgEl){ svgEl.querySelectorAll('.s-z').forEach(e => e.classList.remove('on')); label(null); } CH.querySelectorAll('button').forEach(b => b.classList.remove('on')); C.innerHTML = '<div class="hint">לוֹחֲצִים עַל דָּבָר בַּתְּמוּנָה אוֹ עַל מִלָּה ⬇</div>'; };
  root.querySelector('[data-a="chk"]').onclick = () => { const c = tabs[cur].check; if (!c) return;
    if (CK.classList.contains('s-hide')){ CK.classList.remove('s-hide'); CK.innerHTML = `${c[0]}<div class="a"></div>`; say(c[0]); }
    else { CK.querySelector('.a').textContent = c[1]; say(c[1]); beep(880, .2); } };
  open(0);
}

/* ---------- click-to-hear frames ---------- */
function frames(root, list){
  root.innerHTML = `<div class="s-frames">${list.map((f, i) => `<button type="button" class="s-frame" data-i="${i}"><span class="fp">${f.pic}</span><span class="fn">${i + 1}</span><span class="ft">${f.t}</span></button>`).join('')}</div>
    <div class="m-bar c"><button class="btn good" data-a="all" type="button">👁 כָּל הַמִּשְׁפָּטִים</button><button class="btn ghost" data-a="clr" type="button">↺</button></div>`;
  const fr = [...root.querySelectorAll('.s-frame')];
  fr.forEach(b => b.onclick = () => { b.classList.add('on'); say(list[+b.dataset.i].say || list[+b.dataset.i].t); beep(700, .1); });
  root.querySelector('[data-a="all"]').onclick = () => fr.forEach(b => b.classList.add('on'));
  root.querySelector('[data-a="clr"]').onclick = () => fr.forEach(b => b.classList.remove('on'));
}

/* ---------- pair talk: rounds of prompts + timer + word bank ---------- */
function talk(root, rounds, bank, min){
  root.innerHTML = `<div class="m-talk"><div class="m-prompts"></div><div class="m-timer"><div class="m-rounds"></div><div class="rd"></div><div class="t">2:00</div>
    <div class="m-bar c"><button class="btn good" data-a="go" type="button">▶ הַתְחָלָה</button><button class="btn ghost" data-a="stop" type="button">⏸</button>
    <button class="btn ghost small" data-min="1" type="button">1′</button><button class="btn ghost small" data-min="2" type="button">2′</button><button class="btn ghost small" data-min="3" type="button">3′</button></div></div></div>
    ${bank && bank.length ? `<details class="q-opt" open><summary>🖼️ מַחְסַן מִלִּים</summary><div class="s-bank">${bank.map(b => `<span>${b.pic || ''}${b.he}</span>`).join('')}</div></details>` : ''}`;
  const T = root.querySelector('.t'), q = s => root.querySelector(s);
  let secs = (min || 2) * 60, left = secs, timer = null;
  const draw = () => { T.textContent = Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0'); T.classList.toggle('end', left === 0); };
  const stop = () => { clearInterval(timer); timer = null; };
  rounds.forEach((r, i) => { const b = document.createElement('button'); b.type = 'button'; b.className = 'btn ghost small'; b.textContent = r.name || ('סִבּוּב ' + (i + 1)); b.onclick = () => set(i); q('.m-rounds').appendChild(b); });
  function set(i){ stop(); left = secs; draw(); q('.m-rounds').querySelectorAll('button').forEach((b, j) => b.classList.toggle('on', j === i));
    q('.m-prompts').innerHTML = rounds[i].items.map(t => `<div class="m-pr">${t}</div>`).join(''); q('.rd').textContent = rounds[i].sub || ('סִבּוּב ' + (i + 1)); }
  q('[data-a="go"]').onclick = () => { if (timer) return; if (left === 0) left = secs; beep(700, .12); timer = setInterval(() => { left--; draw(); if (left <= 0){ stop(); chime(); } }, 1000); };
  q('[data-a="stop"]').onclick = stop;
  root.querySelectorAll('[data-min]').forEach(b => b.onclick = () => { secs = +b.dataset.min * 60; stop(); left = secs; draw(); });
  set(0);
}
/* word-bank chip helpers */
const bankPh = (he, k) => ({ he, pic: img(k) });
const bankEm = (he, e) => ({ he, pic: `<b class="em">${e}</b>` });
const bankVa = (he, k, g) => ({ he, pic: window.VerbArt ? VerbArt.svg(k, g) : '' });

/* ---------- a text spoken sentence by sentence ---------- */
function textSay(root, sentences){
  root.classList.add('s-txt'); root.innerHTML = sentences.map(s => `<span>${s}</span>`).join(' ');
  root.querySelectorAll('span').forEach(s => s.onclick = () => { root.querySelectorAll('span').forEach(x => x.classList.remove('on')); s.classList.add('on'); say(s.textContent); });
}

/* ---------- simple show / hide list (charades) ---------- */
function toggleList(btn, el){ btn.onclick = () => { el.classList.toggle('s-hide'); btn.textContent = el.classList.contains('s-hide') ? '👁 הַצֵּג אֶת הָרְשִׁימָה' : '🙈 הַסְתֵּר'; }; }

/* ---------- timer helper for a single timer block ---------- */
return { $, beep, chime, say, countdown, pic, img, wordSearch, cardQuiz, TF, ROOMCH, house, scene, frames, talk, bankPh, bankEm, bankVa, textSay, toggleList };
})();
