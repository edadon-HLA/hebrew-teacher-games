/* Olam Street 2.23 & 2.24 — shared data for the lesson page and the word-search printable.
 * GRID rows are in reading order (first letter = right-most cell). Words go right-to-left ('h') or top-to-bottom ('v').
 * r / c = row / column of the first letter (column 0 = right-most). */
window.OLAM223 = (function () {
  const GRID = ['פיצהלגדר', 'קשבטונהע', 'רבננהצאש', 'דגלקטעים', 'שרעבכתוס', 'חקשדרמגל', 'לעצתקידט', 'בגרשנםפצ'].map(r => Array.from(r));
  const WORDS = [
    { he: 'פִּיצָה', r: 0, c: 0, n: 4, d: 'h' },
    { he: 'סָלָט', r: 4, c: 7, n: 3, d: 'v' },
    { he: 'חָלָב', r: 5, c: 0, n: 3, d: 'v' },
    { he: 'טוּנָה', r: 1, c: 3, n: 4, d: 'h' },
    { he: 'מַיִם', r: 5, c: 5, n: 3, d: 'v' },
    { he: 'בָּנָנָה', r: 2, c: 1, n: 4, d: 'h' },
    { he: 'רָעֵב', r: 4, c: 1, n: 3, d: 'h' },
    { he: 'טָעִים', r: 3, c: 4, n: 4, d: 'h' },
  ];
  const cellsOf = w => Array.from({ length: w.n }, (_, i) => w.d === 'h' ? [w.r, w.c + i] : [w.r + i, w.c]);
  return { GRID, WORDS, cellsOf };
})();
