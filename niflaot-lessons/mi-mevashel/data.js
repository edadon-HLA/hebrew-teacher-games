/* Niflaot "מִי מְבַשֵּׁל וּמִי מְסַדֵּר?" — word search data (page + printable). Rows in reading order; words right-to-left. */
window.MIMEV = (() => {
const GRID = ['מסדרתכחזעצ', 'פזמבשלתעכט', 'חעצקזמסדרנ', 'כמבקשתזחצע', 'זצכעחקמבשל', 'טחזמבקשכעצ', 'עכצחזטכעחז', 'צטעזכחצזטכ'].map(r => Array.from(r));
const WORDS = [
  { he: 'מְסַדֵּר', r: 2, c: 5, d: 'h', n: 4 },
  { he: 'מְסַדֶּרֶת', r: 0, c: 0, d: 'h', n: 5 },
  { he: 'מְבַשֵּׁל', r: 4, c: 6, d: 'h', n: 4 },
  { he: 'מְבַשֶּׁלֶת', r: 1, c: 2, d: 'h', n: 5 },
  { he: 'מְבַקֵּשׁ', r: 5, c: 3, d: 'h', n: 4 },
  { he: 'מְבַקֶּשֶׁת', r: 3, c: 1, d: 'h', n: 5 },
];
const cellsOf = w => Array.from({ length: w.n }, (_, i) => w.d === 'h' ? [w.r, w.c + i] : [w.r + i, w.c]);
return { GRID, WORDS, cellsOf };
})();
