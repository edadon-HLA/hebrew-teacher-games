/* לוֹמְדִים לִקְרֹא — the letter ח (reading workbook pp. 34-37). Read by letter-lesson.js and the printables (print-*.html).
 * Five forms in the book: חָ חַ חֲ ח חְ (חֲ = chataf patach, like אֲ). p.37 = the join engine (join-sounds.js). */
window.LL = (() => {
  const TZ = '../games/tzlil/';
  return {
    key: 'het', letter: 'ח', n: 8, pages: '34–37', title: 'הָאוֹת ח', sub: 'חָ · חַ · חְ',
    /* entry ticket: ס (last lesson). '*' = target. Look-alike ם. No ח. */
    search: {
      letter: 'ס', ask: 'סָ · סַ · סְ · ס', count: 'כַּמָּה ס מָצָאתִי?',
      rows: [
        ['ם', '*סַ', 'שָׁ', 'רַ', '*סְ', 'קָ', 'אַ', 'בָּ'],
        ['*סָ', 'תַ', 'ם', '*ס', 'בַּ', 'שַׁ', 'אָ', 'קְ'],
        ['רְ', 'אֲ', '*סַ', 'שְׁ', 'תָ', '*סָ', 'ם', 'ק'],
        ['בְּ', '*סְ', 'ם', 'קַ', '*ס', 'רָ', 'שָׁ', 'א'],
        ['*סָ', 'שַׁ', 'בְּ', 'אַ', 'תַ', 'ם', '*סַ', 'בּ'],
        ['קָ', 'ם', '*סְ', 'רַ', 'שְׁ', '*סָ', 'בַּ', 'אָ'],
        ['שׁ', '*ס', 'אֲ', 'תְ', '*סַ', 'קַ', 'רְ', 'ם']
      ]
    },
    warm: {
      step: 'חִמּוּם: מָה לָמַדְנוּ', title: 'חוֹזְרִים עַל הָאוֹתִיּוֹת שֶׁלָּמַדְנוּ — אוֹמְרִים אֶת הַצְּלִיל',
      items: [
        { sy: 'סָ', snd: 'sa' }, { sy: 'סְ', snd: 'se' }, { sy: 'אַ', snd: 'a' }, { sy: 'סַ', snd: 'sa' }, { sy: 'רְ', snd: 're' },
        { he: 'סַבָּא', sy: 'סַ', snd: 'sa', pic: 'samekh/grandpa.png' }, { he: 'סַבְתָּא', sy: 'סַ', snd: 'sa', pic: 'samekh/grandma.png' },
        { he: 'סָלָט', sy: 'סָ', snd: 'sa', pic: 'samekh/salad.png' }, { he: 'סַנְדָּל', sy: 'סַ', snd: 'sa', pic: 'samekh/sandal.png' },
        { he: 'סְפָרִים', sy: 'סְ', snd: 'se', pic: 'samekh/books.png' }, { he: 'אַף', sy: 'אַ', snd: 'a', pic: 'alef/nose.png' },
        { sy: 'אַבָּא', snd: 'aba' }, { sy: 'שַׁבָּת', snd: 'shabat' }, { sy: 'קַר', snd: 'kar' }
      ],
      note: 'חֲזָרָה עַל מָה שֶׁכְּבָר יוֹדְעִים: הֲבָרוֹת, תְּמוּנוֹת וּבַסּוֹף מִלִּים לִקְרִיאָה. אֵין כַּרְטִיסִים — כֻּלָּם אוֹמְרִים בְּיַחַד.'
    },
    card: {
      page: 34, pic: 'het/window.png', cap: 'חַלּוֹן', cols: 3,
      forms: [['חָ', 'cha'], ['חַ', 'cha'], ['חֲ', 'cha'], ['ח', 'ch · no vowel', 1], ['חְ', 'che']],
      read: 'קוֹרְאִים יַחַד: <b>חָ… חַ… חֲ… חְ… ח…</b> וְאַחַר כָּךְ: חַלּוֹן!',
      en: 'Kamatz, patach and chataf-patach all say “a”: <bdi dir="rtl">חָ</bdi> = <bdi dir="rtl">חַ</bdi> = <bdi dir="rtl">חֲ</bdi> = cha. Shva says “e”: <bdi dir="rtl">חְ</bdi> = che.',
      note: 'ח וְ־ה דּוֹמוֹת - בְּ־ח אֵין רֶוַח לְמַעְלָה. ח וְ־ת - לְ־ת יֵשׁ רֶגֶל קְטַנָּה.'
    },
    board: {
      page: 34,
      rows: [[['חַ', 'cha', 'l'], ['סְ', 'se', 'm'], ['סַבָּא', 'saba', 'w'], ['חְ', 'che', 'm']],
             [['שָׁ', 'sha', 'l'], ['חַסָּה', 'chasa', 'w'], ['קַר', 'kar', 'w'], ['אַבָּא', 'aba', 'w']]],
      note: 'חַסָּה - מִלָּה חֲדָשָׁה לִקְרִיאָה (lettuce).'
    },
    drill: ['שׁ', 'בּ', 'ת', 'ק', 'ר', 'א', 'ס', 'ח'],
    game: { key: 'het', name: 'ח' },
    line: {
      page: 35, ins: 'מִתְחוּ קַו מֵהַ"חַ" לַתְּמוּנוֹת הַמַּתְחִילוֹת בַּצְּלִיל חַ:', ctr: 'חַ',
      pics: [
        ['het/hot.png', 'חַם', true, 130, 502, 519, 1052], ['het/window.png', 'חַלּוֹן', true, 706, 1052, 379, 803],
        ['het/kitten.png', 'חָתוּל', true, 1261, 1607, 602, 1052], ['het/milk.png', 'חָלָב', true, 130, 419, 1463, 1939],
        ['het/sneakers.png', 'נַעֲלַיִם', false, 675, 1073, 1764, 2022], ['het/five.png', 'חָמֵשׁ', true, 1333, 1519, 1675, 1975]
      ],
      note: 'חַם, חַלּוֹן, חָתוּל, חָלָב, חָמֵשׁ — מַתְחִילִים בְּ־חַ. נַעֲלַיִם — לֹא.'
    },
    strokes: {
      page: 36, ins: 'כִּתְבוּ "חַ" אוֹ "חְ" בַּשּׁוּרוֹת הַבָּאוֹת, עִבְרוּ עַל הַקַּוִּים לְפִי הַדֻּגְמָה:',
      paths: ['M64 62H232', 'M232 62V190', 'M70 62V190'],
      nums: [[40, 62], [258, 100], [46, 120]],
      steps: ['הַקַּו הָעֶלְיוֹן — מִשְּׂמֹאל לְיָמִין', 'הַצַּד הַיְמָנִי — לְמַטָּה', 'הַצַּד הַשְּׂמָאלִי — לְמַטָּה (בְּלִי רֶגֶל, לֹא כְּמוֹ ת)'],
      vows: ['pa', 'sv', 'hp'], vowLabel: '+ נִקּוּד (חַ / חְ / חֲ)',
      note: 'שׁוּרָה 1 חָ, שׁוּרָה 2 חַ, שׁוּרָה 3 חְ, שׁוּרָה 4 חֲ, שׁוּרוֹת 5–6 ח.'
    },
    wb: [{
      type: 'join', page: 37, ins: 'חַבְּרוּ אֶת הַצְּלִילִים לְמִלָּה שְׁלֵמָה:',
      rows: [{ parts: ['אַ', 'חַ', 'ת'], word: 'אַחַת', pic: 2 }, { parts: ['סַ', 'בָּ', 'א'], word: 'סַבָּא', pic: 0 }, { parts: ['אַ', 'בָּ', 'א'], word: 'אַבָּא', pic: 1 }],
      pics: [{ img: 'samekh/grandpa.png', he: 'סַבָּא' }, { img: 'alef/father.png', he: 'אַבָּא' }, { img: 'het/one.png', he: 'אַחַת' }]
    }],
    wbNote: 'קוֹרְאִים לְאַט: אַ… חַ… ת… אַחַת! הַתְּמוּנוֹת לֹא בְּאוֹתָהּ שׁוּרָה - מוֹתְחִים קַו. הַתְּשׁוּבוֹת: אַחַת ⬅ 1 · סַבָּא ⬅ הַסַּבָּא · אַבָּא ⬅ הָאַבָּא.',
    exit: {
      q: 'Work alone. Read the sound in each row. Circle the picture that starts with this sound.',
      rows: [
        { s: 'חַ', ok: 1, items: [['samekh/sandal.png', 'סַנְדָּל'], ['het/kitten.png', 'חָתוּל'], ['alef/pear.png', 'אַגָּס']] },
        { s: 'חַ', ok: 2, items: [['samekh/books.png', 'סְפָרִים'], ['alef/nose.png', 'אַף'], ['het/milk.png', 'חָלָב']] },
        { head: 'Read the word. Circle the right picture.', s: 'אַחַת', ok: 1, items: [['het/five.png', 'חָמֵשׁ'], ['het/one.png', 'אַחַת'], ['tav/eight.png', 'שְׁמוֹנֶה']] },
        { s: 'סַבָּא', ok: 0, items: [['samekh/grandpa.png', 'סַבָּא'], ['alef/father.png', 'אַבָּא'], ['resh/singing.png', 'שָׁר']] }
      ],
      reflect: 'I can read and write <bdi dir="rtl">חָ חַ חְ</bdi>',
      note: 'מְשִׂימָה חֲדָשָׁה, לֹא מֵהַחוֹבֶרֶת. רַק מִלִּים מֻכָּרוֹת. הַתְּשׁוּבוֹת: חָתוּל · חָלָב · אַחַת (1) · סַבָּא. הַמּוֹרֶה אוֹסֵף בַּיְּצִיאָה.'
    }
  };
})();
