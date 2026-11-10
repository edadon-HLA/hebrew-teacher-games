/* לוֹמְדִים לִקְרֹא — shared "see a letter with a vowel, say the sound" drill (the 6th-grade reading-card method of
 * Olam 2.19-2.20 / 2.23: one big card, modes 🔤 one letter / ◌ one vowel / 🔀 mix, "הַצֵּג צְלִיל", 🔊, arrows, auto).
 *
 * Each letter page only lists the LETTERS the class has learned so far; the vowels are ALL Hebrew vowels by default
 * (teacher, 11/10: "add all the hebrew vowls, not only those in the lesson. it is a good practice."):
 *   <div id="drill"></div>
 *   <script src="sound-drill.js"></script>
 *   SoundDrill.mount(document.getElementById('drill'), { letters: ['שׁ', 'בּ'] });
 * Next lessons just add their letter to `letters`. A smaller vowel list can still be passed: { letters, vowels: ['ka', 'pa', 'sv'] }.
 *
 * Teacher's sound rules: kamatz = patach = a; shva = segol = tsere = e; א and ע are silent (only the vowel is heard).
 */
window.SoundDrill = (() => {
  'use strict';
  /* letter -> sound (English, lower case). Letters with a dot are separate keys: בּ / ב, כּ / כ, פּ / פ, שׁ / שׂ. */
  const LETTER = {
    'א': '', 'בּ': 'b', 'ב': 'v', 'ג': 'g', 'ד': 'd', 'ה': 'h', 'ו': 'v', 'ז': 'z', 'ח': 'ch', 'ט': 't', 'י': 'y',
    'כּ': 'k', 'כ': 'ch', 'ל': 'l', 'מ': 'm', 'נ': 'n', 'ס': 's', 'ע': '', 'פּ': 'p', 'פ': 'f', 'צ': 'ts', 'ק': 'k',
    'ר': 'r', 'שׁ': 'sh', 'שׂ': 's', 'ת': 't'
  };
  /* vowel key -> mark (added after the letter), sound, Hebrew name */
  const VOWEL = {
    ka: { m: 'ָ', s: 'a', n: 'קָמָץ' },
    pa: { m: 'ַ', s: 'a', n: 'פַּתָּח' },
    sv: { m: 'ְ', s: 'e', n: 'שְׁוָא' },
    se: { m: 'ֶ', s: 'e', n: 'סֶגּוֹל' },
    ts: { m: 'ֵ', s: 'e', n: 'צֵירֵי' },
    hi: { m: 'ִ', s: 'i', n: 'חִירִיק' },
    hiy: { m: 'ִי', s: 'i', n: 'חִירִיק מָלֵא' },
    ho: { m: 'ֹ', s: 'o', n: 'חוֹלָם' },
    hov: { m: 'וֹ', s: 'o', n: 'חוֹלָם מָלֵא' },
    ku: { m: 'ֻ', s: 'u', n: 'קֻבּוּץ' },
    shu: { m: 'וּ', s: 'u', n: 'שׁוּרוּק' }
  };
  /* the default pool for every page = all vowels, in this order (a, e, i, o, u) */
  const ALL = ['ka', 'pa', 'ts', 'se', 'sv', 'hi', 'hiy', 'ho', 'hov', 'ku', 'shu'];
  /* NFC puts the marks in the standard order (e.g. ש + holam + shin dot = שֹׁ) */
  /* guttural letters never take a plain shva: they take chataf patach (אֲ), heard "a" (teacher's rule, workbook p.26) */
  const GUTTURAL = { 'א': 1, 'ע': 1, 'ה': 1, 'ח': 1 };
  const CHATAF = 'ֲ';
  const syl = (l, v) => (l + (v === 'sv' && GUTTURAL[l] ? CHATAF : VOWEL[v].m)).normalize('NFC');
  const sound = (l, v) => (LETTER[l] || '') + (v === 'sv' && GUTTURAL[l] ? 'a' : VOWEL[v].s);
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  /* final letters (workbook 2 on): one card each, NO vowel, in 🔤 letter mode and 🔀 mix only (never in ◌ vowel mode).
   * Pass them in `finals: ['ן', 'ם']` (or inside `letters`; they are moved out automatically). */
  /* letters that only take some vowels in the drill: ו with holam / shuruk would read as the vowel itself (וֹ = o, וּ = u) */
  const LIMIT = { 'ו': ['ka', 'pa', 'sv'] };
  const FINAL = { 'ן': 'n · end', 'ם': 'm · end', 'ך': 'ch · end', 'ף': 'f · end', 'ץ': 'ts · end' };

  function mount(root, opt) {
    const letters = opt.letters.filter(l => l in LETTER), vowels = (opt.vowels || ALL).filter(v => v in VOWEL);
    const finals = [...new Set(opt.letters.concat(opt.finals || []).filter(l => l in FINAL))];
    const POOL = [];
    const lim = Object.assign({}, LIMIT, opt.limit || {});
    letters.forEach(l => vowels.filter(v => !lim[l] || lim[l].includes(v)).forEach(v => POOL.push({ l, v, t: syl(l, v), s: sound(l, v) })));
    finals.forEach(l => POOL.push({ l, v: null, t: l, s: FINAL[l] }));
    root.classList.add('sd');
    root.innerHTML = `
      <div class="sd-modes">
        <button class="btn ghost" type="button" data-m="letter" aria-pressed="false">🔤 אוֹת אַחַת</button>
        <button class="btn ghost" type="button" data-m="vowel" aria-pressed="false">◌ תְּנוּעָה אַחַת</button>
        <button class="btn ghost" type="button" data-m="mix" aria-pressed="true">🔀 עִרְבּוּב</button>
        <span class="sd-sp"></span>
        <label><input type="checkbox" data-o="snd"> הַצֵּג צְלִיל</label>
        <label><input type="checkbox" data-o="voice"> 🔊 קוֹל</label>
      </div>
      <div class="sd-sub" hidden></div>
      <div class="sd-card">
        <div class="sd-cnt"></div>
        <div class="sd-sy" title="לְחִיצָה = הַצְּלִיל"></div>
        <div class="sd-snd"></div>
        <div class="sd-ctrl">
          <button class="btn ghost" type="button" data-a="prev">▶ הַקּוֹדֵם</button>
          <button class="btn good" type="button" data-a="rv">👁 הַצְּלִיל</button>
          <button class="btn ghost" type="button" data-a="again">🔊 שׁוּב</button>
          <button class="btn" type="button" data-a="next">הַבָּא ◀</button>
        </div>
        <div class="sd-auto"><button class="btn ghost" type="button" data-a="auto">▶ אוֹטוֹמָטִי</button><label>אִטִּי <input type="range" min="1200" max="4000" step="200" value="2600" style="direction:rtl"> מָהִיר</label></div>
      </div>`;
    const q = s => root.querySelector(s);
    const card = q('.sd-card'), big = q('.sd-sy'), snd = q('.sd-snd'), cnt = q('.sd-cnt'), subBox = q('.sd-sub');
    const showSnd = q('[data-o="snd"]'), voice = q('[data-o="voice"]'), speed = q('input[type=range]');
    let mode = 'mix', sub = null, list = [], idx = 0, rev = false, autoT = null;

    const say = t => { if (!window.speechSynthesis) return; const v = speechSynthesis.getVoices().find(x => /^(he|iw)/i.test(x.lang)); if (!v) return; speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.voice = v; u.lang = v.lang; u.rate = .7; speechSynthesis.speak(u); };
    /* mix: the whole pool twice when it is small, never the same syllable twice in a row */
    function mixList() {
      const base = POOL.length < 10 ? POOL.concat(POOL) : POOL;
      for (let k = 0; k < 30; k++) { const a = shuffle(base); if (a.every((x, i) => !i || x.t !== a[i - 1].t) && (!list.length || a[0].t !== list[list.length - 1].t)) return a; }
      return shuffle(base);
    }
    function build() {
      if (mode === 'letter') list = POOL.filter(x => x.l === sub);
      else if (mode === 'vowel') list = POOL.filter(x => x.v === sub);
      else list = mixList();
      idx = 0; show(true);
    }
    function show(speak) {
      const it = list[idx]; if (!it) return;
      rev = showSnd.checked;
      big.textContent = it.t;
      snd.textContent = rev ? it.s : '?'; snd.classList.toggle('hid', !rev);
      cnt.textContent = `${idx + 1} / ${list.length}`;
      card.classList.remove('pop'); void card.offsetWidth; card.classList.add('pop');
      q('[data-a="prev"]').disabled = idx === 0;
      q('[data-a="next"]').textContent = idx === list.length - 1 ? '↺ שׁוּב' : 'הַבָּא ◀';
      if (speak && rev && voice.checked) setTimeout(() => say(it.t), 120);
    }
    function reveal() { const it = list[idx]; rev = true; snd.textContent = it.s; snd.classList.remove('hid'); if (voice.checked) say(it.t); }
    function subPicker() {
      if (mode === 'letter' || mode === 'vowel') {
        const opts = mode === 'letter' ? letters.map(l => [l, l, LETTER[l] || '—']).concat(finals.map(l => [l, l, FINAL[l]])) : vowels.map(v => [v, '◌' + VOWEL[v].m + ' ' + VOWEL[v].n, VOWEL[v].s]);
        if (!opts.some(o => o[0] === sub)) sub = opts[0][0];
        subBox.innerHTML = opts.map(([k, t, s]) => `<button class="sd-chip${k === sub ? ' on' : ''}" type="button" data-k="${k}">${t}<small>${s}</small></button>`).join('');
        subBox.querySelectorAll('[data-k]').forEach(b => b.onclick = () => { sub = b.dataset.k; subPicker(); build(); });
        subBox.hidden = false;
      } else subBox.hidden = true;
    }
    const next = () => { if (idx < list.length - 1) idx++; else { if (mode === 'mix') list = mixList(); idx = 0; } show(true); };
    function autoStop() { clearInterval(autoT); autoT = null; q('[data-a="auto"]').textContent = '▶ אוֹטוֹמָטִי'; }
    root.querySelectorAll('[data-m]').forEach(b => b.onclick = () => { mode = b.dataset.m; root.querySelectorAll('[data-m]').forEach(x => x.setAttribute('aria-pressed', x === b)); subPicker(); build(); });
    q('[data-a="next"]').onclick = next;
    q('[data-a="prev"]').onclick = () => { if (idx > 0) { idx--; show(true); } };
    q('[data-a="rv"]').onclick = () => rev ? next() : reveal();
    q('[data-a="again"]').onclick = () => say(list[idx].t);   /* 🔊 on demand, even when the voice is off */
    big.onclick = () => { if (!rev) reveal(); };
    showSnd.onchange = () => show(false);
    q('[data-a="auto"]').onclick = () => { if (autoT) { autoStop(); return; } q('[data-a="auto"]').textContent = '⏸ עוֹצְרִים';
      autoT = setInterval(() => { if (!rev) reveal(); else if (idx < list.length - 1) { idx++; show(true); } else autoStop(); }, +speed.value / 2); };
    speed.oninput = () => { if (autoT) { autoStop(); q('[data-a="auto"]').click(); } };
    document.addEventListener('keydown', e => {
      const r = card.getBoundingClientRect();
      if (!r.width || r.top > innerHeight || r.bottom < 0 || /input|textarea|select/i.test(document.activeElement.tagName)) return;
      if (e.key === 'ArrowLeft') { next(); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { q('[data-a="prev"]').click(); e.preventDefault(); }
      else if (e.key === ' ' && document.activeElement === document.body) { q('[data-a="rv"]').click(); e.preventDefault(); }
    });
    build(); show(false);
    return { pool: POOL };
  }
  return { mount, LETTER, VOWEL, FINAL, ALL, GUTTURAL, syl, sound };
})();
