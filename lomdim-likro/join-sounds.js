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
.js-prow{margin:0 0 18px;padding-bottom:12px;border-bottom:2px dashed #e6e1d6}
.js-pgrid{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);gap:14px;align-items:center}
.js-mid{cursor:default;width:clamp(110px,16vw,170px)}
.js-phrase{text-align:center;font:800 clamp(40px,6vw,64px)/1.3 var(--f-he);color:#16527d;min-height:1.3em}
.js-row.js-text .js-line{font-size:clamp(28px,3.6vw,40px);text-align:right;width:100%}
.js-tip{text-align:center;font:700 17px var(--f-he);color:var(--muted);margin:0 0 10px}
@media(max-width:700px){.js-grid{gap:12px 16px}.js-snd{min-width:48px;height:48px;font-size:26px}.js-line{min-width:96px;font-size:30px}}`;

  function mount(root, opt) {
    if (!cssDone) { const s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s); cssDone = true; }
    const say = opt.say || (() => {}), beep = opt.beep || (() => {});
    const rows = opt.rows, pics = opt.pics;
    root.innerHTML = `<p class="js-tip">${opt.tip || 'לוֹחֲצִים עַל הַקַּו — הַצְּלִילִים מִתְחַבְּרִים לְמִלָּה. אַחַר כָּךְ: לוֹחֲצִים עַל הַמִּלָּה וְעַל הַתְּמוּנָה.'}</p>
      <div class="js-wrap"><svg class="js-svg"></svg><div class="js-grid">${rows.map((r, i) => `
        <div class="js-row${r.parts ? '' : ' js-text'}" data-i="${i}">${r.parts ? r.parts.map((p, j) => (j ? '<span class="js-plus">+</span>' : '') + `<span class="js-snd">${p}</span>`).join('') + `
          <span class="js-arr">⬅</span>` : ''}<button type="button" class="js-line" data-i="${i}">${r.parts ? '&nbsp;' : r.word}</button></div>
        <button type="button" class="js-pic" data-p="${i}"><img src="${pics[i].img}" alt=""></button>`).join('')}</div></div>`;
    const wrap = root.querySelector('.js-wrap'), svg = root.querySelector('.js-svg');
    const lineEl = i => root.querySelector(`.js-line[data-i="${i}"]`), picEl = p => root.querySelector(`.js-pic[data-p="${p}"]`);
    /* a row without parts = a ready sentence (workbook 2 p.13: sentence -> picture): it starts joined, a click reads it */
    const joined = new Set(rows.map((r, i) => r.parts ? -1 : i).filter(i => i >= 0)), match = new Map();   /* row -> picture */
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
      if (!rows[i].parts && sel !== i) say(rows[i].word);
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
      reset() { rows.forEach((r, i) => { if (r.parts) joined.delete(i); }); match.clear(); sel = null; svg.innerHTML = '';
        root.querySelectorAll('.js-row').forEach(r => r.classList.remove('done'));
        root.querySelectorAll('.js-line').forEach(l => { if (rows[+l.dataset.i].parts) l.innerHTML = '&nbsp;'; l.classList.remove('ok', 'no', 'sel'); });
        root.querySelectorAll('.js-pic').forEach(p => p.classList.remove('ok', 'bad')); },
      redraw: draw
    };
  }
  /* two-word phrases (workbook p.63): in each row the picture stands in the MIDDLE, a group of sounds -> a line on each side
   * (the right group first). Click a line: its sounds join into the word; when both words of a row are joined the phrase
   * shows big under the row (spoken if the voice is on). No matching step.
   *   JoinSounds.phrase(el, { rows: [{ img, groups: [{ parts: ['מָ','רָ','ק'], word: 'מָרָק' }, { parts: ['חַ','ם'], word: 'חַם' }] }, ...] }) */
  function phrase(root, opt) {
    if (!cssDone) { const s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s); cssDone = true; }
    const say = opt.say || (() => {}), beep = opt.beep || (() => {}), chime = opt.chime || (() => {}), rows = opt.rows;
    const grp = (g, i, k) => `<div class="js-row js-g" data-i="${i}" data-k="${k}">${g.parts.map((p, j) => (j ? '<span class="js-plus">+</span>' : '') + `<span class="js-snd">${p}</span>`).join('')}<span class="js-arr">⬅</span><button type="button" class="js-line">&nbsp;</button></div>`;
    root.innerHTML = `<p class="js-tip">לוֹחֲצִים עַל הַקַּו — הַצְּלִילִים מִתְחַבְּרִים לְמִלָּה. כְּשֶׁשְּׁתֵּי הַמִּלִּים מוּכָנוֹת — קוֹרְאִים אֶת שְׁתֵּיהֶן יַחַד.</p>` +
      rows.map((r, i) => `<div class="js-prow" data-i="${i}"><div class="js-pgrid">${grp(r.groups[0], i, 0)}<div class="js-pic js-mid"><img src="${r.img}" alt=""></div>${grp(r.groups[1], i, 1)}</div><div class="js-phrase" data-i="${i}"></div></div>`).join('');
    const done = new Set(), key = (i, k) => i + ':' + k;
    const join = (i, k) => {
      if (done.has(key(i, k))) return; done.add(key(i, k));
      const g = root.querySelector(`.js-g[data-i="${i}"][data-k="${k}"]`); g.classList.add('done'); g.querySelector('.js-line').textContent = rows[i].groups[k].word;
      g.querySelector('.js-line').classList.add('ok'); beep(760, .12); say(rows[i].groups[k].word);
      if (done.has(key(i, 0)) && done.has(key(i, 1))) { const p = rows[i].groups.map(x => x.word).join(' '); root.querySelector(`.js-phrase[data-i="${i}"]`).textContent = p; setTimeout(() => { say(p); chime(); }, 700); }
    };
    root.querySelectorAll('.js-g').forEach(g => g.querySelector('.js-line').onclick = () => join(+g.dataset.i, +g.dataset.k));
    return {
      check() { return { right: done.size, total: rows.length * 2 }; },
      show() { rows.forEach((r, i) => { join(i, 0); join(i, 1); }); },
      reset() { done.clear(); root.querySelectorAll('.js-g').forEach(g => { g.classList.remove('done'); const l = g.querySelector('.js-line'); l.innerHTML = '&nbsp;'; l.classList.remove('ok'); }); root.querySelectorAll('.js-phrase').forEach(p => p.textContent = ''); },
      redraw() {}
    };
  }
  return { mount, phrase };

})();
