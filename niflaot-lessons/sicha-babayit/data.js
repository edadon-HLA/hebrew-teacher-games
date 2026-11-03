/* Niflaot "שִׂיחָה בַּבַּיִת הֶחָדָשׁ" — word search data shared by the lesson page and the printable.
 * Rows in reading order (first letter = right-most cell). Words go right-to-left or top-down. */
window.SICHA = (() => {
const GRID = [
  'מבשלתכחזעצ',
  'סעגבניותדפ',
  'טקגבינהזצש',
  'פסטהצכחעקז',
  'זחמבקשתעסכ',
  'כעזצמדברקט',
  'שמבשלחעצזמ',
  'צזכעחקסטזר',
  'עחצזכסטפחק',
].map(r => Array.from(r));
const WORDS = [
  { he: 'מְבַשֵּׁל', r: 6, c: 1, d: 'h', n: 4 },
  { he: 'מְבַשֶּׁלֶת', r: 0, c: 0, d: 'h', n: 5 },
  { he: 'מָרָק', r: 6, c: 9, d: 'v', n: 3 },
  { he: 'עַגְבָנִיּוֹת', r: 1, c: 1, d: 'h', n: 7 },
  { he: 'פַּסְטָה', r: 3, c: 0, d: 'h', n: 4 },
  { he: 'גְּבִינָה', r: 2, c: 2, d: 'h', n: 5 },
  { he: 'מְבַקֶּשֶׁת', r: 4, c: 2, d: 'h', n: 5 },
  { he: 'מְדַבֵּר', r: 5, c: 4, d: 'h', n: 4 },
];
const cellsOf = w => Array.from({ length: w.n }, (_, i) => w.d === 'h' ? [w.r, w.c + i] : [w.r + i, w.c]);
return { GRID, WORDS, cellsOf };
})();
