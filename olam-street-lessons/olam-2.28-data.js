/* Olam Street 2.28 & 2.29 — shared data for the lesson page and the printables.
 * GRID rows are in reading order (first letter = right-most cell); r / c = row / column of the first letter (column 0 = right-most).
 * PICS = the 6 photos of workbook p.22 (cropped from the page, olam-2.28/), book order: right = man, left = woman.
 * Lesson exception (teacher 11/19, "Yes, girls use them"): both forms אוֹכֵל/אוֹכֶלֶת, רָעֵב/רְעֵבָה, צָמֵא/צְמֵאָה, אַתְּ. */
window.OLAM228 = (function () {
  const GRID = ['גלידהשקת', 'נמאוכלזש', 'סבתדפיצה', 'דוכןגעטק', 'פזגשנבתר', 'סקדלמחנע', 'טשצמאגלב', 'התנהולךז'].map(r => Array.from(r));
  const WORDS = [
    { he: 'אוֹכֵל', r: 1, c: 2, n: 4, d: 'h' },
    { he: 'רָעֵב', r: 4, c: 7, n: 3, d: 'v' },
    { he: 'צָמֵא', r: 6, c: 2, n: 3, d: 'h' },
    { he: 'פִּיצָה', r: 2, c: 4, n: 4, d: 'h' },
    { he: 'פַּסְטָה', r: 4, c: 0, n: 4, d: 'v' },
    { he: 'דּוּכָן', r: 3, c: 0, n: 4, d: 'h' },
    { he: 'הוֹלֵךְ', r: 7, c: 3, n: 4, d: 'h' },
    { he: 'גְּלִידָה', r: 0, c: 0, n: 5, d: 'h' },
  ];
  const cellsOf = w => Array.from({ length: w.n }, (_, i) => w.d === 'h' ? [w.r, w.c + i] : [w.r + i, w.c]);
  const P = 'olam-2.28/2.28-';
  /* g = 'm' | 'f', k = meaning group (eat / hungry / thirsty), syl = syllables, sent = reveal sentence */
  const PICS = [
    { id: 'ochel', he: 'אוֹכֵל', g: 'm', k: 'eat', img: P + 'ochel.jpg', syl: ['אוֹ', 'כֵל'], sent: 'הוּא אוֹכֵל.' },
    { id: 'ochelet', he: 'אוֹכֶלֶת', g: 'f', k: 'eat', img: P + 'ochelet.jpg', syl: ['אוֹ', 'כֶ', 'לֶת'], sent: 'הִיא אוֹכֶלֶת.' },
    { id: 'raev', he: 'רָעֵב', g: 'm', k: 'hungry', img: P + 'raev.jpg', syl: ['רָ', 'עֵב'], sent: 'הוּא רָעֵב.' },
    { id: 'reeva', he: 'רְעֵבָה', g: 'f', k: 'hungry', img: P + 'reeva.jpg', syl: ['רְ', 'עֵ', 'בָה'], sent: 'הִיא רְעֵבָה.' },
    { id: 'tzame', he: 'צָמֵא', g: 'm', k: 'thirsty', img: P + 'tzame.jpg', syl: ['צָ', 'מֵא'], sent: 'הוּא צָמֵא.' },
    { id: 'tzmea', he: 'צְמֵאָה', g: 'f', k: 'thirsty', img: P + 'tzmea.jpg', syl: ['צְ', 'מֵ', 'אָה'], sent: 'הִיא צְמֵאָה.' },
  ];
  const BY = Object.fromEntries(PICS.map(p => [p.id, p]));
  /* 2.29 — the 6 lines exactly as printed (line 5 לֶאֱכוֹל with ו, line 6 לֶאֱכֹל without; the stray quote mark of line 5 left out).
     hide = the word(s) the "מַסְתִּירִים מִלָּה" mode can hide in that line */
  const DIALOG = [
    { who: 'keren', t: 'אַתָּה רָעֵב?', hide: ['רָעֵב'] },
    { who: 'dan', t: 'כֵּן, וְאַתְּ רְעֵבָה?', hide: ['רְעֵבָה'] },
    { who: 'keren', t: 'אֲנִי צְמֵאָה, וְאַתָּה?', hide: ['צְמֵאָה'] },
    { who: 'dan', t: 'לֹא, אֲנִי לֹא צָמֵא', hide: ['צָמֵא'] },
    { who: 'keren', t: 'מָה אַתָּה רוֹצֶה לֶאֱכוֹל? פִּיצָה אוֹ פַּסְטָה?', hide: ['פִּיצָה', 'פַּסְטָה'] },
    { who: 'dan', t: 'אֲנִי רוֹצֶה לֶאֱכֹל פִּיצָה', hide: ['פִּיצָה'] },
  ];
  const NAME = { keren: 'קֶרֶן', dan: 'דָּן' };
  return { GRID, WORDS, cellsOf, PICS, BY, DIALOG, NAME };
})();
