/* לוֹמְדִים לִקְרֹא — shared "חַבְּרוּ אֶת הַצְּלִילִים לְמִלָּה" engine (workbook p.25 and later pages).
 * Each row: sound circles -> arrow -> an empty line. Click the line: the sounds join into the word (spoken if the voice is on).
 * Pictures stand on the left in the BOOK's order (not in the row of their word): click a word, then a picture -> a line joins
 * them (green = right, red shake = wrong). "✓ בּוֹדְקִים" / "👁 הַצִּיגוּ תְּשׁוּבוֹת" / "↺".
 *
 *   JoinSounds.mount(el, {
 *     rows: [{ parts: ['קַ', 'ר'], word: 'קַר', pic: 2 }, ...],   // pic = index in pics of the right picture
 *     pics: [{ img: 'resh/singing.png', he: 'שָׁר' }, ...],
 *     say: t => {}, beep: (f, d) => {}                           // optional
 *   });
 */
window.JoinSounds = (() => {
  'use strict';
  let cssDone = false;
  const CSS = `
.js-wrap{position:relative}
.js-grid{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:18px 40px;align-items:center}
.js-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:flex-start}
.js-snd{display:inline-grid;place-items:center;min-width:64px;height:64px;padding:0 8px;border:3px solid #23233a;border-radius:50%;font:800 34px/1 var(--f-he);background:#fff;transition:transform .35s,background .3s}
.js-wrap .js-row.done .js-snd{background:var(--gold-soft)}
.js-plus{font:800 26px var(--f-display);color:var(--muted)}
.js-arr{font:800 30px var(--f-display);color:#7a7f8c}
.js-line{min-width:150px;min-height:62px;border:0;border-bottom:3px solid #23233a;background:#fffbea;border-radius:10px 10px 0 0;font:800 40px/1.3 var(--f-he);color:#16527d;cursor:pointer;padding:0 12px}
.js-line:hover{background:var(--gold-soft)}
.js-line.sel{outline:4px solid #2a6fd0;outline-offset:3px}
.js-line.ok{background:var(--green-soft);border-color:var(--green)}
.js-line.no{background:var(--coral-soft);border-color:var(--coral)}
.js-pic{background:#fff;border:3px solid var(--line);border-radius:14px;padding:6px;cursor:pointer;display:flex;align-items:center;justify-content:center;height:clamp(96px,14vw,140px);overflow:hidden}
.js-pic img{height:100%;width:auto;max-width:100%;object-fit:contain;display:block}
.js-pic:hover{border-color:#9ec5f0}
.js-pic.ok{border-color:var(--green);background:var(--green-soft)}
.js-pic.bad{animation:jsshake .4s;border-color:var(--coral)}
@keyframes jsshake{25%{transform:translateX(6px)}75%{transform:translateX(-6px)}}
.js-svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible}
.js-svg line{stroke:var(--green);stroke-width:6;stroke-linecap:round}
.js-svg line.bad{stroke:var(--coral)}
.js-tip{text-align:center;font:700 17px var(--f-he);color:var(--muted);margin:0 0 10px}
@media(max-width:700px){.js-grid{gap:12px 16px}.js-snd{min-width:48px;height:48px;font-size:26px}.js-line{min-width:96px;font-size:30px}}`;

  function mount(root, opt) {
    if (!cssDone) { const s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s); cssDone = true; }
    const say = opt.say || (() => {}), beep = opt.beep || (() => {});
    const rows = opt.rows, pics = opt.pics;
    root.innerHTML = `<p class="js-tip">לוֹחֲצִים עַל הַקַּו — הַצְּלִילִים מִתְחַבְּרִים לְמִלָּה. אַחַר כָּךְ: לוֹחֲצִים עַל הַמִּלָּה וְעַל הַתְּמוּנָה.</p>
      <div class="js-wrap"><svg class="js-svg"></svg><div class="js-grid">${rows.map((r, i) => `
        <div class="js-row" data-i="${i}">${r.parts.map((p, j) => (j ? '<span class="js-plus">+</span>' : '') + `<span class="js-snd">${p}</span>`).join('')}
          <span class="js-arr">⬅</span><button type="button" class="js-line" data-i="${i}">&nbsp;</button></div>
        <button type="button" class="js-pic" data-p="${i}"><img src="${pics[i].img}" alt=""></button>`).join('')}</div></div>`;
    const wrap = root.querySelector('.js-wrap'), svg = root.querySelector('.js-svg');
    const lineEl = i => root.querySelector(`.js-line[data-i="${i}"]`), picEl = p => root.querySelector(`.js-pic[data-p="${p}"]`);
    const joined = new Set(), match = new Map();   /* row -> picture */
    let sel = null;
    function draw() {
      const W = wrap.getBoundingClientRect();
      svg.innerHTML = [...match].map(([i, p]) => {
        const a = lineEl(i).getBoundingClientRect(), b = picEl(p).getBoundingClientRect();
        /* RTL: the word line is on the right, the pictures on the left: from the line's left edge to the picture's right edge */
        return `<line x1="${a.left - W.left}" y1="${a.top + a.height / 2 - W.top}" x2="${b.right - W.left}" y2="${b.top + b.height / 2 - W.top}"/>`;
      }).join('');
    }
    function join(i) {
      if (joined.has(i)) return; joined.add(i);
      const row = root.querySelector(`.js-row[data-i="${i}"]`), l = lineEl(i);
      row.querySelectorAll('.js-snd').forEach(s => { s.style.transform = 'scale(.85)'; setTimeout(() => s.style.transform = '', 350); });
      row.classList.add('done'); l.textContent = rows[i].word; beep(760, .12); say(rows[i].word);
    }
    root.querySelectorAll('.js-line').forEach(l => l.onclick = () => {
      const i = +l.dataset.i;
      if (!joined.has(i)) { join(i); return; }
      root.querySelectorAll('.js-line').forEach(x => x.classList.toggle('sel', x === l && sel !== i));
      sel = sel === i ? null : i;
    });
    root.querySelectorAll('.js-pic').forEach(b => b.onclick = () => {
      if (sel === null) { const he = pics[+b.dataset.p].he; if (he) say(he); return; }
      const p = +b.dataset.p, i = sel;
      if (rows[i].pic === p) {
        for (const [k, v] of match) if (v === p) match.delete(k);
        match.set(i, p); b.classList.add('ok'); lineEl(i).classList.add('ok'); beep(880, .15); draw();
      } else {
        b.classList.remove('bad'); void b.offsetWidth; b.classList.add('bad'); beep(260, .2);
        const W = wrap.getBoundingClientRect(), a = lineEl(i).getBoundingClientRect(), r = b.getBoundingClientRect();
        svg.insertAdjacentHTML('beforeend', `<line class="bad" x1="${a.left - W.left}" y1="${a.top + a.height / 2 - W.top}" x2="${r.right - W.left}" y2="${r.top + r.height / 2 - W.top}"/>`);
        setTimeout(draw, 600);
      }
      sel = null; root.querySelectorAll('.js-line').forEach(x => x.classList.remove('sel'));
    });
    addEventListener('resize', draw);
    return {
      check() {
        let right = 0;
        rows.forEach((r, i) => { const ok = joined.has(i) && match.get(i) === r.pic; if (ok) right++; lineEl(i).classList.toggle('no', !ok); });
        return { right, total: rows.length };
      },
      show() { rows.forEach((r, i) => { join(i); match.set(i, r.pic); lineEl(i).classList.add('ok'); lineEl(i).classList.remove('no'); picEl(r.pic).classList.add('ok'); }); draw(); },
      reset() { joined.clear(); match.clear(); sel = null; svg.innerHTML = '';
        root.querySelectorAll('.js-row').forEach(r => r.classList.remove('done'));
        root.querySelectorAll('.js-line').forEach(l => { l.innerHTML = '&nbsp;'; l.classList.remove('ok', 'no', 'sel'); });
        root.querySelectorAll('.js-pic').forEach(p => p.classList.remove('ok', 'bad')); },
      redraw: draw
    };
  }
  return { mount };
})();
