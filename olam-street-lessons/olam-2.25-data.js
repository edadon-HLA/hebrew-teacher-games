/* Olam Street 2.25 & 2.26 — shared data for the lesson page and the printables.
 * GRID rows are in reading order (first letter = right-most cell). Words go right-to-left ('h') or top-to-bottom ('v').
 * r / c = row / column of the first letter (column 0 = right-most).
 * FOODS = the 8 foods of the workbook p.19 survey (workbook order) with the site's real photos (credits on the lesson page). */
window.OLAM225 = (function () {
  const GRID = ['גבינהשקפ', 'לדמתוקזס', 'פרנצטעים', 'מרירשגלא', 'קדשגטפחצ', 'מכשנעסלמ', 'יזפגקרבא', 'םשתרעבנד'].map(r => Array.from(r));
  const WORDS = [
    { he: 'גְּבִינָה', r: 0, c: 0, n: 5, d: 'h' },
    { he: 'צָמֵא', r: 4, c: 7, n: 3, d: 'v' },
    { he: 'רָעֵב', r: 7, c: 3, n: 3, d: 'h' },
    { he: 'טָעִים', r: 2, c: 4, n: 4, d: 'h' },
    { he: 'מָתוֹק', r: 1, c: 2, n: 4, d: 'h' },
    { he: 'מָרִיר', r: 3, c: 0, n: 4, d: 'h' },
    { he: 'חָלָב', r: 4, c: 6, n: 3, d: 'v' },
    { he: 'מַיִם', r: 5, c: 0, n: 3, d: 'v' },
  ];
  const cellsOf = w => Array.from({ length: w.n }, (_, i) => w.d === 'h' ? [w.r, w.c + i] : [w.r + i, w.c]);
  const WT = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/';
  const wm = p => WT + p + '/500px-' + p.split('/').pop();
  const FOODS = [
    { id: 'pizza', he: 'פִּיצָה', img: wm('a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg') },
    { id: 'tuna', he: 'טוּנָה', img: wm('1/19/Tuna_can.jpg') },
    { id: 'chocolate', he: 'שׁוֹקוֹלָד', img: wm('d/d8/Malagos_Chocolate_white_bg.jpg') },
    { id: 'cheese', he: 'גְּבִינָה', img: wm('8/89/Swiss_cheese_cubes.jpg') },
    { id: 'pasta', he: 'פַּסְטָה', img: 'olam-2.2-pasta.jpg' },
    { id: 'mango', he: 'מַנְגּוֹ', img: wm('3/34/Mango_on_white.jpg') },
    { id: 'salad', he: 'סָלָט', img: 'olam-2.2-salad.jpg' },
    { id: 'avocado', he: 'אָבוֹקָדוֹ', img: wm('a/af/Liat_Portal_for_Foodie_Disorder_-_Avocado_Halves.jpg') },
  ];
  return { GRID, WORDS, cellsOf, FOODS };
})();
