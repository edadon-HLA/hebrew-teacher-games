/* shared/warmup-talk.js — pair-talk warm-up block for lesson pages that do not load olam-2.14-listen.js.
   Same look and options as U.talk (olam-2.14-listen.js):
     WT.talk(root, frames, { photos: [[label, img]], n: 3, sec: 120, pairs: [[[l1, img1], [l2, img2]], …], lead: '' })
   frames = [[who, text], …]  who = 'א' | 'ב' | 'א + ב'
   photos = real-photo bank with labels (an image that fails to load shows a neutral box with its label)
   pairs  = two photos side by side + "הַבָּא ◀" button (instead of the bank)
   n rounds × sec seconds, "מַחֲלִיפִים!" chime between rounds. Self-contained CSS (wt- classes). */
(function(){
  const css = `
.wt-frame{display:grid;gap:8px;max-width:900px;margin:0 auto}
.wt-frame>div{display:flex;gap:12px;align-items:center;background:var(--surface,#fff);border:3px solid var(--line,#eadfce);border-radius:18px;padding:8px 14px;font:800 clamp(20px,2.8vw,30px)/1.5 var(--f-he,'Noto Sans Hebrew',Arial,sans-serif)}
.wt-frame .w{flex:none;display:inline-grid;place-items:center;min-width:42px;height:42px;padding:0 10px;border-radius:21px;color:#fff;font:800 20px var(--f-display,Arial)}
.wt-frame .a .w{background:var(--sky,#2a8bd0)}.wt-frame .b .w{background:var(--coral,#e2506a)}
.wt-bank{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:10px 0}
.wt-bank>div{background:#fff;color:#23233a;border:2px solid var(--line,#eadfce);border-radius:14px;padding:4px 8px;text-align:center;font:800 18px var(--f-he,Arial)}
.wt-ph{width:120px;height:90px;border-radius:10px;overflow:hidden;margin:0 auto 2px;background:#f3f1ec;display:grid;place-items:center;color:#6b6880;font:800 16px var(--f-he,Arial)}
.wt-ph img{width:100%;height:100%;object-fit:cover;display:block}
.wt-pairs{display:grid;grid-template-columns:1fr auto 1fr;gap:14px;align-items:center;max-width:760px;margin:12px auto}
.wt-pairs .wt-ph{width:100%;height:auto;aspect-ratio:4/3;border-radius:16px}
.wt-pairs figure{margin:0;text-align:center;font:800 clamp(22px,3vw,32px)/1.4 var(--f-he,Arial);background:#fff;color:#23233a;border:3px solid var(--line,#eadfce);border-radius:20px;padding:8px}
.wt-pairs .or{font:800 clamp(22px,3vw,30px) var(--f-he,Arial);color:var(--coral,#e2506a)}
.wt-pbar{display:flex;gap:10px;justify-content:center;align-items:center;margin:6px 0}
.wt-btn{font:800 18px var(--f-he,Arial);border:2px solid var(--line,#eadfce);border-radius:12px;padding:8px 16px;background:#fff;color:#23233a;cursor:pointer}
.wt-rounds{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:6px 0}.wt-rounds i{width:34px;height:34px;border-radius:50%;border:3px solid var(--line,#eadfce);display:grid;place-items:center;font:800 17px var(--f-display,Arial);font-style:normal}.wt-rounds i.on{background:var(--sky,#2a8bd0);color:#fff;border-color:var(--sky,#2a8bd0)}.wt-rounds i.done{background:var(--green,#2f9d55);color:#fff;border-color:var(--green,#2f9d55)}
.wt-timer{font:800 clamp(64px,12vw,120px)/1 var(--f-display,Arial);direction:ltr;text-align:center;margin:8px 0;color:var(--ink,#23233a)}.wt-timer.end{color:var(--coral,#e2506a)}
.wt-go{font:800 20px var(--f-he,Arial);border:0;border-radius:14px;padding:10px 20px;background:var(--green,#2f9d55);color:#fff;cursor:pointer}
.wt-msg{max-width:560px;margin:14px auto 0;border:3px dashed #7a4cc2;background:#f6f0ff;color:#23233a;border-radius:22px;padding:14px 18px;font:800 clamp(22px,3vw,30px) var(--f-he,Arial);text-align:center}
@media(max-width:600px){.wt-pairs{grid-template-columns:1fr}}`;
  if (!document.getElementById('wt-css')){ const s = document.createElement('style'); s.id = 'wt-css'; s.textContent = css; document.head.appendChild(s); }
  let ac = null;
  function tone(ok){ try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); const t = ac.currentTime;
    (ok ? [523, 659, 784] : [260, 200]).forEach((f, i) => { const o = ac.createOscillator(), g = ac.createGain(); o.frequency.value = f; o.type = 'triangle';
      g.gain.setValueAtTime(.0001, t + i * .1); g.gain.exponentialRampToValueAtTime(.16, t + i * .1 + .02); g.gain.exponentialRampToValueAtTime(.0001, t + i * .1 + .3);
      o.connect(g).connect(ac.destination); o.start(t + i * .1); o.stop(t + i * .1 + .32); }); } catch (e) {} }
  const esc = s => String(s).replace(/"/g, '&quot;');
  const ph = (he, img) => `<div class="wt-ph"><img src="${esc(img)}" alt="${esc(he)}" onerror="this.parentNode.textContent=this.alt"></div>`;
  const mmss = s => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  function talk(root, frames, opts){
    opts = opts || {}; const N = opts.n || 3, T = opts.sec || 120, mins = T % 60 ? mmss(T) : (T / 60) + (T === 60 ? ' דַּקָּה' : ' דַּקּוֹת');
    const goTxt = '⏱ מַתְחִילִים — ' + mins;
    const bank = opts.photos ? `<div class="wt-bank">${opts.photos.map(([he, img]) => `<div>${ph(he, img)}${he}</div>`).join('')}</div>` : '';
    const pairs = opts.pairs ? `<div class="wt-pairs" data-a="pp"></div><div class="wt-pbar"><span data-a="pn"></span><button class="wt-btn" data-a="next" type="button">הַבָּא ◀</button></div>` : '';
    root.innerHTML = `${frames && frames.length ? `<div class="wt-frame">${frames.map(([w, t]) => `<div class="${w === 'ב' ? 'b' : 'a'}"><span class="w">${w}</span><span>${t}</span></div>`).join('')}</div>` : ''}
      ${pairs}${bank}
      <div class="wt-rounds" data-a="r"></div><div class="wt-timer" data-a="t">${mmss(T)}</div>
      <div class="wt-pbar"><button class="wt-go" data-a="go" type="button">${goTxt}</button></div>
      <div class="wt-msg" data-a="m">סִבּוּב 1 מִתּוֹךְ ${N}</div>`;
    const q = s => root.querySelector(`[data-a="${s}"]`); let tt = null, rd = 0, pi = 0;
    if (opts.pairs){
      const showPair = () => { const [[l1, i1], [l2, i2]] = opts.pairs[pi];
        q('pp').innerHTML = `<figure>${ph(l1, i1)}${l1}</figure><span class="or">אוֹ</span><figure>${ph(l2, i2)}${l2}</figure>`; q('pn').textContent = (pi + 1) + ' / ' + opts.pairs.length; };
      q('next').onclick = () => { pi = (pi + 1) % opts.pairs.length; showPair(); tone(true); }; showPair();
    }
    const dots = () => { q('r').innerHTML = Array.from({ length: N }, (_, k) => `<i class="${k < rd ? 'done' : k === rd ? 'on' : ''}">${k + 1}</i>`).join(''); };
    const sh = s => { q('t').textContent = mmss(s); };
    dots();
    q('go').onclick = () => {
      if (tt){ clearInterval(tt); tt = null; sh(T); q('t').classList.remove('end'); q('go').textContent = goTxt; return; }
      if (rd >= N){ rd = 0; dots(); q('m').textContent = 'סִבּוּב 1 מִתּוֹךְ ' + N; }
      let s = T; q('go').textContent = '⏹ עוֹצְרִים'; q('t').classList.remove('end'); sh(s);
      tt = setInterval(() => { s--; sh(s); if (s > 0) return; clearInterval(tt); tt = null; rd++; dots(); q('t').classList.add('end'); const last = rd >= N;
        q('t').textContent = last ? 'סוֹף!' : '🔔'; tone(false); setTimeout(() => tone(true), 300);
        q('m').textContent = last ? 'כָּל הַכָּבוֹד! 🎉' : 'מַחֲלִיפִים! בֶּן זוּג חָדָשׁ · סִבּוּב ' + (rd + 1) + ' מִתּוֹךְ ' + N;
        q('go').textContent = last ? '↺ מֵהַהַתְחָלָה' : goTxt; }, 1000); };
  }
  /* WT.cursive(text, h) -> inline <svg> of the words in the workbook cursive shapes (the same paths as the 2.8 / 2.11 writing pads).
     Letters: מ ה ש ל ו ך (2.8) · ב ס ד ר ט (2.11); space and "?" supported. h = height in px (default 70). */
  const CUR = {
    'מ': ['M28 18 L28 82', 'M28 18 L72 82', 'M72 82 L72 18'],
    'ה': ['M26 24 Q60 10 78 30 Q80 56 72 82', 'M30 46 Q50 40 56 58 Q58 72 54 82'],
    'ש': ['M62 20 C40 18 30 42 38 62 C46 80 74 78 76 60 C78 44 54 44 36 56'],
    'ל': ['M82 8 Q58 6 55 26 L53 72 Q52 92 37 90 Q24 88 29 74 Q34 63 53 70'],
    'ו': ['M50 18 L50 82'],
    'ך': ['M26 24 Q60 12 72 28 L72 96'],
    'ב': ['M30 26 Q62 14 74 34 Q80 56 70 82 L28 82'],
    'ס': ['M50 22 A28 28 0 1 0 50.1 22'],
    'ד': ['M28 24 L72 24 Q74 52 62 82'],
    'ר': ['M26 30 Q60 14 74 40 Q78 62 70 82'],
    'ט': ['M66 22 C44 20 30 44 38 64 C46 84 76 76 72 56 C70 44 54 44 46 56'],
  };
  const WID = { 'ו': 34, ' ': 34, '?': 40 };
  function cursive(text, h){
    const chars = [...text]; let x = 0; const parts = [];
    const total = chars.reduce((s, c) => s + (WID[c] || 66), 0);
    chars.forEach(c => { const w = WID[c] || 66; const left = total - x - w;   /* RTL: first letter on the right */
      if (c === '?') parts.push(`<text x="${left + 30}" y="82" font-size="70" font-family="Arial" text-anchor="middle" fill="currentColor" stroke="none">?</text>`);
      else if (CUR[c]) parts.push(`<g transform="translate(${left - (100 - w) / 2} 0)">${CUR[c].map(d => `<path d="${d}"/>`).join('')}</g>`);
      x += w; });
    return `<svg class="wt-cur" viewBox="0 0 ${total} 100" style="height:${h || 70}px;width:auto;overflow:visible" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" aria-label="${esc(text)}">${parts.join('')}</svg>`;
  }
  /* WT.chat(root) -> warm-up B "כּוֹתְבִים שִׂיחָה" (Olam 2.19-2.20 and 2.23-2.24): big model rows (nikud text + cursive under it) + 2 x 2:00 timer */
  function chat(root){
    const rows = [['א', 'מָה שְׁלוֹמְךָ?', 'מה שלומך?'], ['ב', 'טוֹב / בְּסֵדֶר', ['טוב', 'בסדר']], ['ב', 'מָה שְׁלוֹמְךָ?', 'מה שלומך?']];
    root.innerHTML = `<div class="wt-frame">${rows.map(([w, t, c]) => `<div class="${w === 'ב' ? 'b' : 'a'}" style="align-items:flex-start"><span class="w">${w}</span>
      <span style="display:flex;flex-direction:column;gap:4px"><span>${t}</span><span style="color:#1f4fbf;display:flex;gap:18px;align-items:center">${(Array.isArray(c) ? c : [c]).map(x => cursive(x, 64)).join('<span style="font-size:30px">/</span>')}</span></span></div>`).join('')}</div>
      <div data-a="tm"></div>`;
    talk(root.querySelector('[data-a="tm"]'), [], { n: 2 });
  }
  window.WT = { talk, tone, cursive, chat };
})();
