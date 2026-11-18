/* shared/warmup-ab-data.js — the approved A/B warm-ups (11/19 model + Niflaot R1-R9, teacher 11/18: "Approve as is").
 * Used by shared/warmup-ab.js. Photo sources: 'bayit:<key>' = games/bayit-photos.js, '@/...' = path from the site root.
 * shared/warmup-photos/*.jpg: downloaded 2026-11-18 (teacher: "Yes, download"); credits = NEWCR below. A missing file shows its word in a neutral box. */
(() => {
const WM = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/';
const H = '@/niflaot-lessons/hacheder-sheli/';
const NEW = '@/shared/warmup-photos/';
const NEWCR = {
  shirt: '"Clean-blank-shirt-hanger" – Pajju12, CC BY-SA 4.0', coat: '"Grey duffle coat in Muji" – Peachyeung316, CC BY-SA 4.0 (cropped)',
  school: '"PikiWiki Israel 8287 school building in bnei-atarot" – Avishai Teicher (PikiWiki), CC BY 2.5',
  akko: '"Acre - Akko 6 - the fishing port" – israeltourism, CC BY 2.0', newyork: '"Lower Manhattan from Jersey City November 2014 panorama 3" – King of Hearts, CC BY-SA 3.0',
  black: '"Black cat sitting on gravel" – Negative Mortality, CC BY 4.0', pasta: '"Spaghetti-prepared" – public domain', cheese: '"Emmental slices" – Tiia Monto, CC BY-SA 4.0',
  broccoli: '"Brassica oleracea var. italica Calabrese (broccoli) (SaatPilot)" – Steffen Bauer, CC BY 4.0', soup: '"Bowl of lentil soup with green and red lentils" – Whoisjohngalt, CC BY-SA 4.0',
  tomatoes: '"Tomatoes plain and sliced" – FoeNyx, CC BY-SA 3.0' };
const PENDING = n => NEWCR[n];
const ar = s => s.replace(' ⬅ ', '<span class="ar">⬅</span>');
const P = { /* reused photos */
  apples: WM + '1/1f/Three_apples%2C_red_and_green%2C_rest_near_an_open_book_on_a_wooden_table.jpg/500px-Three_apples%2C_red_and_green%2C_rest_near_an_open_book_on_a_wooden_table.jpg',
  cats: WM + 'b/be/Two_cats_sitting_with_beautiful_posture.jpg/500px-Two_cats_sitting_with_beautiful_posture.jpg',
  bed: WM + 'a/ad/Pillows_on_a_hotel_bed.jpg/500px-Pillows_on_a_hotel_bed.jpg',
  table: WM + '4/4f/Wooden_table.jpg/500px-Wooden_table.jpg',
  door: WM + 'c/c2/Front_door_of_an_alley_house%2C_South_Side%2C_2022-10-08%2C_01.jpg/500px-Front_door_of_an_alley_house%2C_South_Side%2C_2022-10-08%2C_01.jpg',
  window: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Window.jpg',
  lamp: WM + '1/19/Wooden_Antique_Table_Lamp.jpg/500px-Wooden_Antique_Table_Lamp.jpg',
  chair: WM + '1/1f/Chair_2020_P02.jpg/500px-Chair_2020_P02.jpg',
  curtain: WM + '9/9e/Curtains_in_the_doors.jpg/500px-Curtains_in_the_doors.jpg',
  wardrobe: WM + 'b/bd/Wooden_Wardrobe.jpg/500px-Wooden_Wardrobe.jpg',
  sky: WM + '2/24/Clear_blue_sky_%284-12-2026%29.jpg/500px-Clear_blue_sky_%284-12-2026%29.jpg',
  telaviv: WM + '8/8c/Israel_Tel_Aviv_-_Azrieli_towers.jpg/500px-Israel_Tel_Aviv_-_Azrieli_towers.jpg',
  paris: WM + 'a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/500px-Tour_Eiffel_Wikimedia_Commons.jpg',
  london: WM + 'f/f7/Big_Ben_Elizabeth_Tower_London_2023_01.jpg/500px-Big_Ben_Elizabeth_Tower_London_2023_01.jpg',
};
const CR = 'Photos (Wikimedia Commons): ';

/* ---------- R3 / R5: A2 carousel "שׁ: כּוֹתְבִים אֶת הַצְּלִיל הָרִאשׁוֹן" ---------- */
const A2 = { type: 'carousel', label: 'חִמּוּם A', title: 'שׁ: כּוֹתְבִים אֶת הַצְּלִיל הָרִאשׁוֹן',
  sub: 'רוֹאִים תְּמוּנָה ⬅ כּוֹתְבִים עַל הַלּוּחַ: שָׁ, שַׁ, שְׁ אוֹ ✘ ⬅ 3-2-1 הָרִימוּ! ⬅ אוֹמְרִים לֶחָבֵר: "זֶה ___."',
  boxes: ['שָׁ', 'שַׁ', 'שְׁ', '✘'],
  items: [
    { src: P.apples, ans: 'שָׁ', word: 'שָׁלוֹשׁ' }, { src: 'bayit:wu_rug', ans: 'שָׁ', word: 'שָׁטִיחַ' },
    { src: H + 'wu-elevator.jpg', ans: '✘', word: 'מַעֲלִית' }, { src: 'bayit:clock', ans: 'שָׁ', word: 'שָׁעוֹן' },
    { src: 'bayit:wu_sofa', ans: '✘', word: 'סַפָּה' }, { src: P.sky, ans: 'שָׁ', word: 'שָׁמַיִם' },
    { src: P.door, ans: '✘', word: 'דֶּלֶת' }, { src: P.cats, ans: 'שְׁ', word: 'שְׁתַּיִם' },
    { src: NEW + 'black.jpg', ans: 'שָׁ', word: 'שָׁחוֹר' } ],
  note: 'חִמּוּם A: חֲזָרָה עַל הָאוֹת שׁ (11/9). כָּל תַּלְמִיד כּוֹתֵב עַל לוּחַ קָטָן אֶת הַצְּלִיל הָרִאשׁוֹן (שָׁ / שַׁ / שְׁ), אוֹ ✘ אִם הַמִּלָּה לֹא מַתְחִילָה בְּשׁ. 3-2-1 הָרִימוּ!, הַמּוֹרֶה מְגַלֶּה, וְאוֹמְרִים לֶחָבֵר: "זֶה ___." 6-9 תְּמוּנוֹת.',
  credits: CR + '3 apples – Shixart1985, CC BY 2.0 · rug – Ohead, CC BY 4.0 · elevator – Shixart1985, CC BY 2.0 · clock – Christoph Braun, CC0 · sofa – Ser Amantio di Nicolao, CC0 · blue sky – SpongeLover08, CC0 · door – Cbaile19, CC0 · 2 cats – KKPCW, CC BY-SA 4.0 · ' + PENDING('black') + '.' };

/* ---------- R4 / R6: B2 "מָה אַתָּה מְבַשֵּׁל?" ---------- */
const FOOD = [['pasta', 'פַּסְטָה'], ['cheese', 'גְּבִינָה'], ['broccoli', 'בְּרוֹקוֹלִי'], ['soup', 'מָרָק'], ['tomatoes', 'עַגְבָנִיּוֹת']];
const B2 = { label: 'חִמּוּם B', title: 'מָה אַתָּה מְבַשֵּׁל?', sub: 'מְדַבְּרִים בְּזוּגוֹת, וְאָז כּוֹתְבִים.',
  photos: FOOD.map(([k, w]) => ({ src: NEW + k + '.jpg', word: w, pos: k === 'tomatoes' ? '50% 6%' : '' })),
  rounds: ['<b>מָה אַתָּה מְבַשֵּׁל?</b> ⬅ אֲנִי מְבַשֵּׁל ___.', '<b>עִם מָה?</b> ⬅ ___ עִם ___.', '<b>מִי מְבַשֵּׁל בַּבַּיִת שֶׁלְּךָ?</b> ⬅ אַבָּא מְבַשֵּׁל. / אִמָּא מְבַשֶּׁלֶת.'].map(ar),
  bank: FOOD.map(f => f[1]).join(' · '),
  write: { prompt: '✏️ כִּתְבוּ עַל הַלּוּחַ הַקָּטָן: אֲנִי מְבַשֵּׁל ___ עִם ___.', hint: '(מַעְתִּיקִים מִלִּים מֵהַתְּמוּנוֹת)', example: 'אֲנִי מְבַשֵּׁל פַּסְטָה עִם גְּבִינָה.' },
  note: 'חִמּוּם B: חֲזָרָה עַל "שִׂיחָה בַּבַּיִת הֶחָדָשׁ" (11/12). 1. קוֹרְאִים יַחַד אֶת הַמִּלִּים. 2. סִבּוּב 1 + סִבּוּב 2 (דַּקָּה כָּל אֶחָד), בֶּן זוּג חָדָשׁ. 3. כָּל תַּלְמִיד כּוֹתֵב מִשְׁפָּט אֶחָד עַל לוּחַ קָטָן, 3-2-1 הָרִימוּ! 4. שְׁנַיִם-שְׁלוֹשָׁה תַּלְמִידִים קוֹרְאִים.',
  credits: CR + FOOD.map(f => PENDING(f[0])).join(' · ') + '.' };

/* ---------- R7 / R9: A3 board "קוֹרְאִים לֶחָבֵר: שׁ" ---------- */
const A3 = { type: 'board', label: 'חִמּוּם A', title: 'קוֹרְאִים לֶחָבֵר: שׁ', sub: 'בְּזוּגוֹת: אֶחָד קוֹרֵא, הַשֵּׁנִי בּוֹדֵק. אַחַר כָּךְ מַחְלִיפִים.',
  rows: [['שָׁ', 'שַׁ', 'שְׁ'], ['שָׁ', 'שְׁ', 'שַׁ'], ['שַׁ', 'שָׁ', 'שְׁ']],
  photos: [{ src: P.apples, word: 'שָׁלוֹשׁ' }, { src: 'bayit:wu_rug', word: 'שָׁטִיחַ' }, { src: 'bayit:clock', word: 'שָׁעוֹן' }, { src: P.sky, word: 'שָׁמַיִם' }],
  roundLabels: ['תַּלְמִיד א קוֹרֵא', 'מַחְלִיפִים! 🔄'],
  write: { prompt: '✏️ בֶּן הַזּוּג אוֹמֵר 3 הֲבָרוֹת — כּוֹתְבִים אוֹתָן עַל הַלּוּחַ הַקָּטָן.', example: 'שָׁ  שְׁ  שַׁ' },
  note: 'חִמּוּם A: חֲזָרָה עַל הָאוֹת שׁ (11/9; אֵין אוֹת שֶׁנִּלְמְדָה לִפְנֵי 2-3 שָׁבוּעוֹת). 1. סִבּוּב 1: תַּלְמִיד א קוֹרֵא שׁוּרָה, תַּלְמִיד ב בּוֹדֵק. 2. סִבּוּב 2: מַחְלִיפִים. 3. כָּל אֶחָד אוֹמֵר לְבֶן הַזּוּג 3 הֲבָרוֹת, וְהַשֵּׁנִי כּוֹתֵב. 3-2-1 הָרִימוּ!',
  credits: CR + '3 apples – Shixart1985, CC BY 2.0 · rug – Ohead, CC BY 4.0 · clock – Christoph Braun, CC0 · blue sky – SpongeLover08, CC0.' };

window.WAB_SETS = {
  /* Niflaot 11/19 הַחֶדֶר שֶׁלִּי (the approved model) */
  '1119': { label: 'חִמּוּם B', title: 'בְּאֵיזוֹ קוֹמָה אַתָּה גָּר?', sub: 'מְדַבְּרִים בְּזוּגוֹת: שׁוֹאֲלִים וְעוֹנִים. בְּכָל סִבּוּב — בֶּן זוּג חָדָשׁ.',
    photos: [{ src: H + 'wu-building.jpg', word: 'בִּנְיָן' }, { src: H + 'wu-elevator.jpg', word: 'מַעֲלִית', pos: '50% 75%' }, { src: H + 'wu-stairs.jpg', word: 'מַדְרֵגוֹת' }, { src: H + 'wu-house.jpg', word: 'בַּיִת' }],
    rounds: ['<b>בְּאֵיזוֹ קוֹמָה אַתָּה גָּר?</b> ⬅ אֲנִי גָּר בְּקוֹמָה ___. / אֲנִי גָּר בְּבַיִת.', '<b>יֵשׁ מַעֲלִית בַּבִּנְיָן שֶׁלְּךָ?</b> ⬅ כֵּן, יֵשׁ מַעֲלִית. / לֹא, אֵין מַעֲלִית.', '<b>אַתָּה עוֹלֶה בַּמַּעֲלִית אוֹ בַּמַּדְרֵגוֹת?</b> ⬅ אֲנִי עוֹלֶה בַּמַּעֲלִית. / אֲנִי עוֹלֶה בַּמַּדְרֵגוֹת.'].map(ar),
    bank: '0 אֶפֶס · 1 אַחַת · 2 שְׁתַּיִם · 3 שָׁלוֹשׁ · 4 אַרְבַּע · 5 חָמֵשׁ · 6 שֵׁשׁ · 7 שֶׁבַע · 8 שְׁמוֹנֶה · 9 תֵּשַׁע · 10 עֶשֶׂר',
    write: { prompt: '✏️ כִּתְבוּ עַל הַלּוּחַ הַקָּטָן: בְּאֵיזוֹ קוֹמָה גָּר בֶּן הַזּוּג שֶׁלָּכֶם?', hint: '(מִסְפָּר. בַּיִת = 0)', example: 'הוּא גָּר בְּקוֹמָה שָׁלוֹשׁ.' },
    note: 'חִמּוּם B שֶׁל הַשָּׁבוּעַ: חֲזָרָה עַל עַמּוּדִים 16-17 (הַבִּנְיָן, קוֹמוֹת, מַעֲלִית). 1. מַצִּיגִים אֶת הַתְּמוּנוֹת וְקוֹרְאִים יַחַד אֶת הַשְּׁאֵלוֹת. 2. סִבּוּב 1 (דַּקָּה): בְּזוּגוֹת, שׁוֹאֲלִים וְעוֹנִים, וּמַחְלִיפִים תַּפְקִידִים. 3. סִבּוּב 2 (דַּקָּה): בֶּן זוּג חָדָשׁ. 4. כָּל תַּלְמִיד כּוֹתֵב עַל לוּחַ קָטָן אֶת הַקּוֹמָה שֶׁל בֶּן הַזּוּג הָאַחֲרוֹן, 3-2-1 הָרִימוּ!, וּשְׁנַיִם-שְׁלוֹשָׁה תַּלְמִידִים אוֹמְרִים: "הוּא גָּר בְּקוֹמָה ___."',
    credits: CR + '"Brown apartment building (Unsplash)" by Rene Bieder, CC0 · "Elevator control panel showing floor buttons and indicators in a modern building at an urban location" by Shixart1985, CC BY 2.0 · "Staircase in a 1960s apt building" by Kotivalo, CC BY-SA 4.0 · "Newly developed single-family home in northern Germany" by Boereck, public domain.' },

  /* R1 Tue 11/24 bayit-shelanu-1: B1 הַבֹּקֶר שֶׁלִּי */
  B1: { label: 'חִמּוּם B', title: 'הַבֹּקֶר שֶׁלִּי', sub: 'כּוֹתְבִים, וְאָז מְדַבְּרִים בְּזוּגוֹת.',
    photos: [{ src: 'bayit:alarm', word: 'שָׁעוֹן מְעוֹרֵר' }, { src: NEW + 'shirt.jpg', word: 'חֻלְצָה', pos: '50% 30%' }, { src: NEW + 'coat.jpg', word: 'מְעִיל', pos: '50% 12%' }, { src: NEW + 'school.jpg', word: 'בֵּית סֵפֶר' }],
    rounds: ['<b>בְּאֵיזוֹ שָׁעָה אַתָּה קָם?</b> ⬅ אֲנִי קָם בְּשָׁעָה ___.', '<b>מָה אַתָּה לוֹבֵשׁ?</b> ⬅ אֲנִי לוֹבֵשׁ ___.', '<b>לְאָן אַתָּה הוֹלֵךְ?</b> ⬅ אֲנִי הוֹלֵךְ לְבֵית הַסֵּפֶר.'].map(ar),
    bank: 'חֻלְצָה · מְעִיל · 6 שֵׁשׁ · 7 שֶׁבַע · 8 שְׁמוֹנֶה',
    write: { first: true, prompt: '✏️ כִּתְבוּ עַל הַלּוּחַ הַקָּטָן: אֲנִי קָם בְּשָׁעָה ___.', hint: '(כּוֹתְבִים מִסְפָּר)', example: 'אֲנִי קָם בְּשָׁעָה שֶׁבַע.' },
    note: 'חִמּוּם B: חֲזָרָה עַל עַמּוּדִים 18-19 (הַבֹּקֶר). 1. כָּל תַּלְמִיד כּוֹתֵב עַל לוּחַ קָטָן בְּאֵיזוֹ שָׁעָה הוּא קָם, 3-2-1 הָרִימוּ! 2. סִבּוּב 1 (דַּקָּה): בְּזוּגוֹת, שׁוֹאֲלִים וְעוֹנִים, וּמַחְלִיפִים. 3. סִבּוּב 2 (דַּקָּה): בֶּן זוּג חָדָשׁ. 4. שְׁנַיִם-שְׁלוֹשָׁה תַּלְמִידִים מְסַפְּרִים: "הוּא קָם בְּשָׁעָה ___."',
    credits: CR + 'alarm clock – Santeri Viinamäki, CC BY-SA 4.0 · ' + PENDING('shirt') + ' · ' + PENDING('coat') + ' · ' + PENDING('school') + '.' },

  /* R2 Wed 11/25 bayit-shelanu-2: A1 מֵאֵיפֹה אַתָּה? */
  A1: { label: 'חִמּוּם A', title: 'מֵאֵיפֹה אַתָּה?', sub: 'מְדַבְּרִים בְּזוּגוֹת. בְּכָל סִבּוּב — בֶּן זוּג חָדָשׁ.',
    photos: [{ src: P.telaviv, word: 'תֵּל אָבִיב' }, { src: P.paris, word: 'פָּרִיז' }, { src: P.london, word: 'לוֹנְדוֹן' }, { src: '@/games/cities/img/haifa-0.jpg', word: 'חֵיפָה' },
      { src: '@/games/cities/img/eilat-0.jpg', word: 'אֵילַת' }, { src: NEW + 'akko.jpg', word: 'עַכּוֹ' }, { src: NEW + 'newyork.jpg', word: 'נְיוּ יוֹרְק' }],
    rounds: ['<b>מָה שִׁמְךָ?</b> ⬅ שְׁמִי ___.', '<b>מֵאֵיפֹה אַתָּה?</b> ⬅ אֲנִי מִ___.', '<b>מֵאֵיפֹה הוּא?</b> ⬅ הוּא מִ___.'].map(ar),
    bank: 'תֵּל אָבִיב · פָּרִיז · לוֹנְדוֹן · חֵיפָה · אֵילַת · עַכּוֹ · נְיוּ יוֹרְק',
    write: { prompt: '✏️ כִּתְבוּ: מֵאֵיפֹה בֶּן הַזּוּג שֶׁלָּכֶם?', hint: '(מַעְתִּיקִים אֶת שֵׁם הָעִיר מֵהַתְּמוּנוֹת)', example: 'הוּא מִנְּיוּ יוֹרְק.' },
    note: 'חִמּוּם A: חֲזָרָה עַל "מֵאֵיפֹה אַתָּה?" (עַמּוּדִים 22-24). 1. קוֹרְאִים יַחַד אֶת שְׁמוֹת הֶעָרִים. 2. סִבּוּב 1 + סִבּוּב 2 (דַּקָּה כָּל אֶחָד), בֶּן זוּג חָדָשׁ. 3. כּוֹתְבִים עַל לוּחַ קָטָן מֵאֵיפֹה בֶּן הַזּוּג, 3-2-1 הָרִימוּ! 4. שְׁנַיִם-שְׁלוֹשָׁה תַּלְמִידִים אוֹמְרִים: "הוּא מִ___."',
    credits: CR + 'Azrieli towers – Eurovaran, CC BY-SA 4.0 · Eiffel Tower – Benh LIEU SONG, public domain · Big Ben – Julian Herzog, CC BY 4.0 · Haifa Carmelit station – Deinocheirus, CC BY-SA 4.0 · Eilat coral reef – Yoav95179, CC BY-SA 4.0 · ' + PENDING('akko') + ' · ' + PENDING('newyork') + '.' },

  A2, B2, A3,

  /* R8 Tue 12/8 ma-yesh-barechov: B3 הַחֶדֶר שֶׁלִּי */
  B3: { label: 'חִמּוּם B', title: 'הַחֶדֶר שֶׁלִּי', sub: 'מְדַבְּרִים בְּזוּגוֹת, וְאָז כּוֹתְבִים מִשְׁפָּט.',
    photos: [{ src: P.bed, word: 'מִטָּה' }, { src: P.table, word: 'שֻׁלְחָן' }, { src: P.chair, word: 'כִּסֵּא' }, { src: P.window, word: 'חַלּוֹן' }, { src: P.door, word: 'דֶּלֶת' },
      { src: P.lamp, word: 'מְנוֹרָה' }, { src: P.curtain, word: 'וִילוֹן' }, { src: P.wardrobe, word: 'אָרוֹן' }, { src: 'bayit:wu_sofa', word: 'סַפָּה' }, { src: 'bayit:wu_rug', word: 'שָׁטִיחַ' }],
    rounds: ['<b>מָה יֵשׁ בַּחֶדֶר שֶׁלְּךָ?</b> ⬅ בַּחֶדֶר שֶׁלִּי יֵשׁ ___ וְ___.', '<b>מָה אֵין בַּחֶדֶר שֶׁלְּךָ?</b> ⬅ בַּחֶדֶר שֶׁלִּי אֵין ___.', '<b>מָה יֵשׁ בַּסָּלוֹן שֶׁלְּךָ?</b> ⬅ בַּסָּלוֹן שֶׁלִּי יֵשׁ ___.'].map(ar),
    bank: 'מִטָּה · שֻׁלְחָן · כִּסֵּא · חַלּוֹן · דֶּלֶת · מְנוֹרָה · וִילוֹן · אָרוֹן · סַפָּה · שָׁטִיחַ',
    write: { prompt: '✏️ כִּתְבוּ עַל הַלּוּחַ הַקָּטָן מִשְׁפָּט אֶחָד: בַּחֶדֶר שֶׁלִּי יֵשׁ ___.', hint: '(מַעְתִּיקִים מִלָּה מֵהַתְּמוּנוֹת)', example: 'בַּחֶדֶר שֶׁלִּי יֵשׁ מִטָּה וּמְנוֹרָה.' },
    note: 'חִמּוּם B: חֲזָרָה עַל "הַחֶדֶר שֶׁלִּי" (11/19) וְ"הַבַּיִת שֶׁלָּנוּ 1" (11/24). 1. קוֹרְאִים יַחַד אֶת הַמִּלִּים. 2. סִבּוּב 1 + סִבּוּב 2 (דַּקָּה כָּל אֶחָד), בֶּן זוּג חָדָשׁ. 3. כָּל תַּלְמִיד כּוֹתֵב מִשְׁפָּט אֶחָד, 3-2-1 הָרִימוּ! 4. שְׁנַיִם-שְׁלוֹשָׁה תַּלְמִידִים קוֹרְאִים.',
    credits: CR + 'bed – Amin, CC BY-SA 4.0 · table – Wikimedia Commons user, CC BY 4.0 · chair – Fallaner, CC BY-SA 4.0 · window – public domain · door – Cbaile19, CC0 · lamp – Amitbalani, CC0 · curtain – Vijay Kumar Soren, CC BY-SA 4.0 · wardrobe – Taoheedah, CC BY-SA 4.0 · sofa – Ser Amantio di Nicolao, CC0 · rug – Ohead, CC BY 4.0.' },
};
})();
