/* Olam Street 2.27 — shared data for the lesson page and the printables.
 * GRID rows are in reading order (first letter = right-most cell). Words go right-to-left ('h') or top-to-bottom ('v').
 * r / c = row / column of the first letter (column 0 = right-most).
 * PLACES = the 8 places of workbook p.21 (book order), pictures cropped from the workbook page (olam-2.27/), our nikud.
 * SENT = the 8 sentences of the "מִי הוֹלֵךְ לְאָן?" game (our sentences, not the book's answers). */
window.OLAM227 = (function () {
  const GRID = ['פסטיבלגד', 'קחומוסנע', 'רשטפלאפל', 'פיצהזבתמ', 'פגדכעיסס', 'סמהולךקו', 'טזבנעגרש', 'השכדבמתי'].map(r => Array.from(r));
  const WORDS = [
    { he: 'פֶּסְטִיבָל', r: 0, c: 0, n: 6, d: 'h' },
    { he: 'פִּיצָה', r: 3, c: 0, n: 4, d: 'h' },
    { he: 'פַּסְטָה', r: 4, c: 0, n: 4, d: 'v' },
    { he: 'סוּשִׁי', r: 4, c: 7, n: 4, d: 'v' },
    { he: 'חוּמוּס', r: 1, c: 1, n: 5, d: 'h' },
    { he: 'פָלָאפֶל', r: 2, c: 3, n: 5, d: 'h' },
    { he: 'הוֹלֵךְ', r: 5, c: 2, n: 4, d: 'h' },
    { he: 'סֶקֶר', r: 4, c: 6, n: 3, d: 'v' },
  ];
  const cellsOf = w => Array.from({ length: w.n }, (_, i) => w.d === 'h' ? [w.r, w.c + i] : [w.r + i, w.c]);
  const P = 'olam-2.27/2.27-';
  const PLACES = [
    { id: 'festival', he: 'פֶּסְטִיבָל', to: 'לַפֶּסְטִיבָל', img: P + 'festival.jpg' },
    { id: 'pizzeria', he: 'פִּיצֶרִיָּה', to: 'לַפִּיצֶרִיָּה', img: P + 'pizzeria.jpg', isNew: 1 },
    { id: 'pasta', he: 'דּוּכַן פַּסְטָה', to: 'לְדוּכַן פַּסְטָה', img: P + 'pasta-stand.jpg' },
    { id: 'falafel', he: 'דּוּכַן פָלָאפֶל', to: 'לְדוּכַן פָלָאפֶל', img: P + 'falafel-stand.jpg' },
    { id: 'sushi', he: 'דּוּכַן סוּשִׁי', to: 'לְדוּכַן סוּשִׁי', img: P + 'sushi-stand.jpg' },
    { id: 'icecream', he: 'דּוּכַן גְּלִידָה', to: 'לְדוּכַן גְּלִידָה', img: P + 'icecream-stand.jpg' },
    { id: 'hummus', he: 'דּוּכַן חוּמוּס', to: 'לְדוּכַן חוּמוּס', img: P + 'hummus-stand.jpg' },
    { id: 'hamburger', he: 'דּוּכַן הַמְבּוּרְגֶּר', to: 'לְדוּכַן הַמְבּוּרְגֶּר', img: P + 'hamburger-stand.jpg' },
  ];
  const BY = Object.fromEntries(PLACES.map(p => [p.id, p]));
  /* [who, place id] -> "דָּן הוֹלֵךְ לַפִּיצֶרִיָּה." / "קֶרֶן הוֹלֶכֶת לְדוּכַן גְּלִידָה." */
  const SENT = [['dan', 'pizzeria'], ['keren', 'icecream'], ['dan', 'falafel'], ['keren', 'festival'], ['dan', 'sushi'], ['keren', 'hummus'], ['dan', 'hamburger'], ['keren', 'pasta']]
    .map(([who, id]) => ({ who, id, s: (who === 'dan' ? 'דָּן הוֹלֵךְ ' : 'קֶרֶן הוֹלֶכֶת ') + BY[id].to + '.' }));
  return { GRID, WORDS, cellsOf, PLACES, BY, SENT };
})();
