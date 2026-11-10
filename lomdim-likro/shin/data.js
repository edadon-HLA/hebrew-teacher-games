/* Niflaot reading lesson 1 — the letter שׁ. Shared by the lesson page and the printable sheets. */
window.SHIN = (() => {
  const SH = 'שׁ';                                 /* ש + shin dot */
  const K = 'ָ', P = 'ַ', V = 'ְ';        /* kamatz, patach, shva */
  const sh = { ka: SH + K, pa: SH + P, sv: SH + V, plain: SH };

  /* letter search: 7 rows x 8 columns, fixed so that the screen and the PDF match.
   * 'ka' 'pa' 'sv' = שָׁ שַׁ שְׁ (targets); anything else is a distractor written as letter + nikud. */
  const T = 'T';
  const rows = [
    ['סָ', T + 'ka', 'תַּ', 'בָּ', T + 'pa', 'מְ', 'צַ', T + 'sv'],
    [T + 'sv', 'חָ', T + 'ka', 'רַ', 'סְ', T + 'pa', 'לָ', 'תָּ'],
    ['טַ', T + 'pa', 'קְ', T + 'ka', 'דָּ', 'עַ', T + 'sv', 'פְּ'],
    [T + 'ka', 'מַ', 'סַ', T + 'sv', T + 'pa', 'כָּ', 'צְ', 'חַ'],
    ['תְּ', T + 'sv', 'בַּ', 'רָ', T + 'ka', 'לְ', T + 'pa', 'סָ'],
    [T + 'pa', 'קָ', T + 'sv', 'מָ', 'חְ', T + 'ka', 'דַּ', 'עָ'],
    ['פַּ', T + 'ka', 'כְּ', T + 'pa', 'טָ', 'רְ', T + 'sv', 'בְּ']
  ];
  const grid = rows.map(r => r.map(c => c[0] === T && c.length === 3 ? { t: true, k: c.slice(1), s: sh[c.slice(1)] } : { t: false, s: c }));

  /* workbook p.3 "קִרְאוּ" board, right to left, first row then second row; sz = size on the board */
  const board = [
    { k: 'ka', sz: 'l' }, { k: 'plain', sz: 's' }, { k: 'plain', sz: 'm' }, { k: 'pa', sz: 'm' },
    { k: 'pa', sz: 's' }, { k: 'sv', sz: 'l' }, { k: 'plain', sz: 'm' }, { k: 'ka', sz: 'l' }
  ].map(b => ({ ...b, s: sh[b.k] }));

  /* what each card says (English sound labels only) */
  const sound = { ka: 'sha', pa: 'sha', sv: 'sh', plain: 'sh' };

  /* workbook p.6 — first sound of each picture */
  const exit = [
    { pic: 'tzlil/pic-sky.png',   he: 'שָׁמַיִם',  k: 'ka' },
    { pic: 'tzlil/pic-three.png', he: 'שָׁלוֹשׁ', k: 'ka' },
    { pic: 'tzlil/pic-blot.png',  he: 'שָׁחוֹר',   k: 'ka' },
    { pic: 'tzlil/pic-carpet.png', he: 'שָׁטִיחַ', k: 'ka' },
    { pic: 'tzlil/pic-clock.png', he: 'שָׁעוֹן',   k: 'ka' },
    { pic: 'tzlil/pic-two.png',   he: 'שְׁתַּיִם', k: 'sv' }
  ];
  return { sh, grid, board, sound, exit, targets: grid.flat().filter(c => c.t).length };
})();
