/* לוֹמְדִים לִקְרֹא — the letter בּ (reading workbook pp. 7-11). Shared by the lesson page and the printable sheets. */
window.BET = (() => {
  const B = 'בּ';                                  /* ב + dagesh */
  const K = 'ָ', P = 'ַ', V = 'ְ';                /* kamatz, patach, shva */
  const sh = { ka: B + K, pa: B + P, sv: B + V, plain: B };
  const SH = 'שׁ', shin = { ka: SH + K, pa: SH + P, sv: SH + V, plain: SH };

  /* entry ticket: letter search for שׁ (last lesson's letter), 7 rows x 8 columns, fixed so that the screen and the PDF match.
   * 'Tka' 'Tpa' 'Tsv' 'Tplain' = שָׁ שַׁ שְׁ שׁ (targets); anything else is a distractor. No בּ (not learned yet). */
  const T = 'T';
  const rows = [
    ['מַ', T + 'pa', 'סָ', T + 'sv', 'תָּ', 'לְ', T + 'ka', 'רַ'],
    [T + 'ka', 'צְ', T + 'plain', 'חַ', T + 'pa', 'דָּ', 'סְ', T + 'sv'],
    ['קָ', T + 'sv', 'טַ', 'עָ', T + 'ka', T + 'pa', 'מְ', 'כָּ'],
    [T + 'pa', 'תַּ', T + 'ka', 'רְ', 'לָ', T + 'plain', 'פַּ', 'חָ'],
    ['סַ', 'דְּ', T + 'sv', T + 'ka', 'צָ', 'קְ', T + 'pa', 'מָ'],
    [T + 'plain', 'עַ', 'לַ', T + 'pa', 'כְּ', T + 'sv', 'רָ', T + 'ka'],
    ['טָ', T + 'ka', 'חְ', 'פָּ', T + 'sv', 'תְּ', T + 'plain', 'סָ']
  ];
  const grid = rows.map(r => r.map(c => c[0] === T && c.length > 2 ? { t: true, k: c.slice(1), s: shin[c.slice(1)] } : { t: false, s: c }));

  /* workbook p.7 "קִרְאוּ" board, right to left: row 1 בָּ בּ בּ בַּ · row 2 בַּ בְּ בּ בָּ */
  const board = [
    { k: 'ka', sz: 'l' }, { k: 'plain', sz: 'm' }, { k: 'plain', sz: 'l' }, { k: 'pa', sz: 'm' },
    { k: 'pa', sz: 'l' }, { k: 'sv', sz: 'm' }, { k: 'plain', sz: 'm' }, { k: 'ka', sz: 'l' }
  ].map(b => ({ ...b, s: sh[b.k] }));

  /* what each card says (English sound labels only) */
  const sound = { ka: 'ba', pa: 'ba', sv: 'b', plain: 'b' };

  /* exit ticket: syllable + 3 pictures, ok = index of the right picture. pic = file under lomdim-likro/, emo = emoji, svg = key in SVG */
  const exit = [
    { s: sh.pa, ok: 1, items: [{ emo: '🐟', he: 'דָּג' }, { emo: '🧅', he: 'בָּצָל' }, { emo: '🐶', he: 'כֶּלֶב' }] },
    { s: sh.sv, ok: 2, items: [{ emo: '🚗', he: 'מְכוֹנִית' }, { emo: '🐴', he: 'סוּס' }, { svg: 'pool', he: 'בְּרֵכָה' }] },
    { s: sh.pa, ok: 0, items: [{ emo: '⚡', he: 'בָּרָק' }, { emo: '❤️', he: 'לֵב' }, { emo: '💧', he: 'מַיִם' }] },
    { s: shin.ka, ok: 2, items: [{ emo: '🌳', he: 'עֵץ' }, { emo: '🐱', he: 'חָתוּל' }, { pic: '../games/tzlil/pic-clock.png', he: 'שָׁעוֹן' }] }
  ];
  const SVG = {
    pool: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="22" width="108" height="62" rx="6" fill="#bfe6fb" stroke="#1f6fa8" stroke-width="4"/><path d="M14 44q8-6 16 0t16 0 16 0 16 0 16 0 16 0M14 62q8-6 16 0t16 0 16 0 16 0 16 0 16 0" fill="none" stroke="#1f6fa8" stroke-width="3"/><g fill="none" stroke="#6b7280" stroke-width="4" stroke-linecap="round"><path d="M88 6v44M104 6v44"/><path d="M88 18h16M88 32h16"/><path d="M88 6q0-4 4-4M104 6q0-4-4-4"/></g></svg>`
  };
  return { sh, shin, grid, board, sound, exit, SVG, targets: grid.flat().filter(c => c.t).length };
})();
