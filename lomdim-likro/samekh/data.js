/* לוֹמְדִים לִקְרֹא — the letter ס (reading workbook pp. 30-33). Read by letter-lesson.js and the printables (print-*.html). */
window.LL = (() => {
  const TZ = '../games/tzlil/';
  return {
    key: 'samekh', letter: 'ס', n: 7, pages: '30–33', title: 'הָאוֹת ס', sub: 'סָ · סַ · סְ',
    /* entry ticket: א (last lesson). '*' = target. Look-alike ע. No ס. */
    search: {
      letter: 'א', ask: 'אָ · אַ · אֲ · א', count: 'כַּמָּה א מָצָאתִי?',
      rows: [
        ['עָ', '*אַ', 'שָׁ', 'רַ', '*אֲ', 'קָ', 'עַ', 'בָּ'],
        ['*אָ', 'תַ', 'ע', '*א', 'בַּ', 'שַׁ', 'קְ', 'עָ'],
        ['רְ', 'עַ', '*אַ', 'שְׁ', 'תָ', '*אָ', 'ק', 'ע'],
        ['בְּ', '*אֲ', 'עָ', 'קַ', '*א', 'רָ', 'שָׁ', 'תְ'],
        ['*אָ', 'שַׁ', 'בְּ', 'עַ', 'תַ', 'ר', '*אַ', 'בּ'],
        ['קָ', 'ע', '*אֲ', 'רַ', 'שְׁ', '*אָ', 'בַּ', 'עָ'],
        ['שׁ', '*א', 'עַ', 'תְ', '*אַ', 'קַ', 'רְ', 'ע']
      ]
    },
    warm: {
      step: 'חִמּוּם: מָה לָמַדְנוּ', title: 'חוֹזְרִים עַל הָאוֹתִיּוֹת שֶׁלָּמַדְנוּ — אוֹמְרִים אֶת הַצְּלִיל',
      items: [
        { sy: 'אָ', snd: 'a' }, { sy: 'רְ', snd: 're' }, { sy: 'אַ', snd: 'a' }, { sy: 'קַ', snd: 'ka' }, { sy: 'אֲ', snd: 'a' },
        { he: 'אַף', sy: 'אַ', snd: 'a', pic: 'alef/nose.png' }, { he: 'אַגָּס', sy: 'אַ', snd: 'a', pic: 'alef/pear.png' },
        { he: 'אָרוֹן', sy: 'אָ', snd: 'a', pic: 'alef/wardrobe.png' }, { he: 'רַכֶּבֶת', sy: 'רַ', snd: 'ra', pic: 'resh/train.png' },
        { he: 'תַּפּוּחַ', sy: 'תַּ', snd: 'ta', pic: 'tav/apple.png' }, { he: 'שָׁעוֹן', sy: 'שָׁ', snd: 'sha', pic: TZ + 'pic-clock.png' },
        { sy: 'קַר', snd: 'kar' }, { sy: 'שָׁר', snd: 'shar' }, { sy: 'שַׁבָּת', snd: 'shabat' }
      ],
      note: 'חֲזָרָה עַל מָה שֶׁכְּבָר יוֹדְעִים: הֲבָרוֹת, תְּמוּנוֹת וּבַסּוֹף מִלִּים מֵהַלּוּחוֹת (קַר, שָׁר, שַׁבָּת). אֵין כַּרְטִיסִים — כֻּלָּם אוֹמְרִים בְּיַחַד.'
    },
    card: {
      page: 30, pic: 'samekh/grandpa.png', cap: 'סַבָּא',
      forms: [['סָ', 'sa'], ['סַ', 'sa'], ['ס', 's · no vowel', 1], ['סְ', 'se']],
      read: 'קוֹרְאִים יַחַד: <b>סָ… סַ… סְ… ס…</b> וְאַחַר כָּךְ: סַבָּא!',
      en: 'Kamatz and patach both say “a”: <bdi dir="rtl">סָ</bdi> = <bdi dir="rtl">סַ</bdi> = sa. Shva says “e”: <bdi dir="rtl">סְ</bdi> = se.'
    },
    board: {
      page: 30,
      rows: [[['סַ', 'sa', 'l'], ['בְּ', 'be', 'm'], ['אַבָּא', 'aba', 'w'], ['קַר', 'kar', 'w']],
             [['קְ', 'ke', 'm'], ['אֲ', 'a', 'm'], ['א', 'silent', 'm'], ['שַׁבָּת', 'shabat', 'w']]],
      note: 'אַבָּא - מִלָּה חֲדָשָׁה לִקְרִיאָה.'
    },
    drill: ['שׁ', 'בּ', 'ת', 'ק', 'ר', 'א', 'ס'],
    game: { key: 'samekh', name: 'ס' },
    line: {
      page: 31, ins: 'מִתְחוּ קַו מֵהַ"סַ" לַתְּמוּנוֹת הַמַּתְחִילוֹת בַּצְּלִיל סַ:', ctr: 'סַ',
      pics: [
        ['samekh/salad.png', 'סָלָט', true, 664, 1083, 322, 710], ['samekh/window.png', 'חַלּוֹן', false, 1276, 1622, 560, 979],
        ['samekh/wardrobe.png', 'אָרוֹן', false, 68, 394, 483, 979], ['samekh/grandma.png', 'סַבְתָּא', true, 52, 445, 1162, 1627],
        ['samekh/grandpa.png', 'סַבָּא', true, 1266, 1576, 1177, 1627], ['samekh/sandal.png', 'סַנְדָּל', true, 612, 1135, 1649, 2001]
      ],
      note: 'סָלָט, סַבְתָּא, סַבָּא, סַנְדָּל — מַתְחִילִים בְּ־סַ. חַלּוֹן וְאָרוֹן — לֹא.'
    },
    strokes: {
      page: 32, ins: 'כִּתְבוּ "סַ" אוֹ "סְ" בַּשּׁוּרוֹת הַבָּאוֹת, עִבְרוּ עַל הַקַּוִּים לְפִי הַדֻּגְמָה:',
      paths: ['M70 62H226', 'M70 62V130Q70 190 148 190Q226 190 226 130V62'],
      nums: [[46, 62], [46, 112]],
      steps: ['הַקַּו הָעֶלְיוֹן — מִשְּׂמֹאל לְיָמִין', 'מֵהַפִּנָּה הַשְּׂמָאלִית — לְמַטָּה, סִיבוּב, וּלְמַעְלָה עַד הַפִּנָּה הַיְמָנִית'],
      vows: ['pa', 'sv'], vowLabel: '+ נִקּוּד (סַ / סְ)',
      note: 'שׁוּרָה 1 סָ, שׁוּרָה 2 סַ, שׁוּרָה 3 סְ, שׁוּרוֹת 4–6 ס. צוּרָה סְגוּרָה.'
    },
    wb: [{
      type: 'drop', page: 33, ins: 'כִּתְבוּ מִתַּחַת לְכָל תְּמוּנָה אֶת הַצְּלִיל הַמַּתְאִים:',
      bank: ['סַ', 'אַ', 'סְ', 'בַּ', 'שַׁ', 'רַ'],
      pics: [['bet/balloon.png', 'בָּלוֹן', ['בַּ']], ['samekh/salad.png', 'סָלָט', ['סַ']], ['alef/father.png', 'אַבָּא', ['אַ']], ['samekh/books.png', 'סְפָרִים', ['סְ']]]
    }],
    wbNote: 'אַרְבָּעָה צְלִילִים בַּחוֹבֶרֶת, כָּל אֶחָד פַּעַם אַחַת; בַּמַּחְסָן עַל הַמָּסָךְ יֵשׁ גַּם שְׁנַיִם לֹא נְכוֹנִים (שַׁ, רַ). בָּלוֹן ⬅ בַּ (קָמָץ = פַּתָּח).',
    exit: {
      q: 'Work alone. Read the sound in each row. Circle the picture that starts with this sound.',
      rows: [
        { s: 'סַ', ok: 1, items: [['resh/train.png', 'רַכֶּבֶת'], ['samekh/sandal.png', 'סַנְדָּל'], ['alef/nose.png', 'אַף']] },
        { s: 'סְ', ok: 0, items: [['samekh/books.png', 'סְפָרִים'], ['bet/clothes.png', 'בְּגָדִים'], ['tav/cold.png', 'קַר']] },
        { head: 'Read the word. Circle the right picture.', s: 'אַבָּא', ok: 1, items: [['samekh/grandpa.png', 'סַבָּא'], ['alef/father.png', 'אַבָּא'], ['alef/pear.png', 'אַגָּס']] },
        { s: 'שַׁבָּת', ok: 0, items: [['resh/calendar.png', 'שַׁבָּת'], ['samekh/salad.png', 'סָלָט'], ['resh/singing.png', 'שָׁר']] }
      ],
      reflect: 'I can read and write <bdi dir="rtl">סָ סַ סְ</bdi>',
      note: 'מְשִׂימָה חֲדָשָׁה, לֹא מֵהַחוֹבֶרֶת. רַק מִלִּים מֻכָּרוֹת. הַתְּשׁוּבוֹת: סַנְדָּל · סְפָרִים · אַבָּא · שַׁבָּת. הַמּוֹרֶה אוֹסֵף בַּיְּצִיאָה.'
    }
  };
})();
