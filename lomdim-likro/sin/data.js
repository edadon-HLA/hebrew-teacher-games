/* לוֹמְדִים לִקְרֹא — the letter שׂ (sin = s; reading workbook 2, pp. 46-49). Every sin typed with its dot (שׂ), every shin with
 * its dot (שׁ) - the dot is the whole point of the lesson. New tzlil set `sin`. */
window.LL = (() => {
  return {
    key: 'sin', letter: 'שׂ', n: 27, book: 2, pages: '46–49', title: 'הָאוֹת שׂ', sub: 'שָׂ · שַׂ · שְׂ · שׁ אוֹ שׂ?',
    /* entry ticket: פ (f) and ף (last lessons). '*' = target. Look-alikes פּ (with the dot), כּ, ב. No שׂ. */
    search: {
      letter: 'פ / ף', ask: 'פָ · פַ · פְ · ף', count: 'כַּמָּה פ / ף מָצָאתִי?',
      rows: [
        ['פּ', '*פַ', 'כּ', 'סַ', '*ף', 'דָ', 'בָ', 'פָּ'],
        ['*פָ', 'חַ', 'בְּ', '*פְ', 'פַּ', 'גַ', 'בַ', 'תְ'],
        ['נְ', 'הָ', '*ף', 'שְׁ', 'כָּ', '*פַ', 'ק', 'פּ'],
        ['בְּ', '*פְ', 'ב', 'קַ', '*פָ', 'רַ', 'פָּ', 'טְ'],
        ['*פַ', 'שַׁ', 'פְּ', 'ר', 'כַּ', 'א', '*ף', 'ה'],
        ['קָ', 'דְ', '*פָ', 'רְ', 'לַ', '*ף', 'יַ', 'ן'],
        ['שׁ', '*פְ', 'אֲ', 'בּ', 'טַ', 'לְ', '*פַ', 'ם']
      ]
    },
    warm: {
      step: 'חִמּוּם: מָה לָמַדְנוּ', title: 'חוֹזְרִים עַל הָאוֹתִיּוֹת שֶׁלָּמַדְנוּ — אוֹמְרִים אֶת הַצְּלִיל',
      items: [
        { sy: 'פַ', snd: 'fa' }, { sy: 'פַּ', snd: 'pa' }, { sy: 'זָ', snd: 'za' }, { sy: 'ף', snd: 'f · end' }, { sy: 'כְּ', snd: 'ke' },
        { he: 'פַּח', sy: 'פַּ', snd: 'pa', pic: 'kaf/trash.png' }, { he: 'זַחַל', sy: 'זַ', snd: 'za', pic: 'vav/caterpillar.png' },
        { he: 'כְּפָפָה', sy: 'כְּ', snd: 'ke', pic: 'zayin/glove.png' }, { he: 'כַּף', sy: 'כַּ', snd: 'ka', pic: 'kaf/spoon.png' },
        { he: 'זָהָב', sy: 'זָ', snd: 'za', pic: 'vav/gold.png' },
        { he: 'אַף', sy: 'ף', snd: 'f (end of the word)', pic: 'alef/nose.png', end: true }, { he: 'מַגָּף', sy: 'ף', snd: 'f (end of the word)', pic: 'fe/boot.png', end: true },
        { sy: 'אַף', snd: 'af' }, { sy: 'מַדָּף', snd: 'madaf' }, { sy: 'כְּפָפָה', snd: 'kfafa' }
      ],
      note: 'שׁ - הַנְּקֻדָּה מִיָּמִין = sh. הַיּוֹם: הַנְּקֻדָּה מִשְּׂמֹאל! אֵין כַּרְטִיסִים.'
    },
    card: {
      page: 46, pic: 'zayin/smiley.png', cap: 'שָׂמֵחַ', order: [0, 1, 3, 2],
      forms: [['שָׂ', 'sa'], ['שַׂ', 'sa'], ['שׂ', 's · no vowel', 1], ['שְׂ', 'se']],
      read: 'קוֹרְאִים יַחַד: <b>שָׂ… שַׂ… שְׂ… שׂ…</b> וְאַחַר כָּךְ: שָׂמֵחַ!',
      en: 'Dot on the right = sh (<bdi dir="rtl">שׁ</bdi>). Dot on the left = s (<bdi dir="rtl">שׂ</bdi>): <bdi dir="rtl">שָׂ</bdi> = <bdi dir="rtl">שַׂ</bdi> = sa, <bdi dir="rtl">שְׂ</bdi> = se.',
      extra: { title: 'שׁ = sh · שׂ = s', items: [[null, 'שׁ', null, 'sh · dot on the right'], [null, 'שׂ', null, 's · dot on the left']], line: 'שׂ = ס - אוֹתוֹ צְלִיל.' },
      note: 'הַנְּקֻדָּה הִיא כָּל הַסִּפּוּר: מִיָּמִין = שׁ (sh), מִשְּׂמֹאל = שׂ (s). שׂ וְ־ס - אוֹתוֹ צְלִיל.'
    },
    board: {
      page: 46,
      rows: [[['שָׂ', 'sa'], ['שְׂ', 'se'], ['פַ', 'fa'], ['לְ', 'le'], ['פָ', 'fa']],
             [['שַׂ', 'sa'], ['וַ', 'va'], ['ף', 'f · end'], ['נַ', 'na'], ['ז', 'z']]]
    },
    drill: ['שׁ', 'בּ', 'ת', 'ק', 'ר', 'א', 'ס', 'ח', 'נ', 'ג', 'ה', 'פּ', 'מ', 'ט', 'ל', 'ד', 'י', 'ב', 'ע', 'ו', 'כּ', 'ז', 'פ', 'שׂ'], finals: ['ן', 'ם', 'ף'],
    game: { key: 'sin', name: 'שׂ' },
    do: [
      { type: 'line', page: 47, ins: 'מִתְחוּ קַו מֵהַ"שָׂ" לַתְּמוּנוֹת הַמַּתְחִילוֹת בַּצְּלִיל שָׂ:', ctr: 'שָׂ', c: [874, 1128, 261],
        pics: [
          ['zayin/bag.png', 'שַׂקִּית', true, 382, 596, 345, 651], ['pe/boots.png', 'מַגָּפַיִם', false, 1180, 1450, 319, 607],
          ['het/milk.png', 'חָלָב', false, 119, 301, 983, 1291], ['sin/turtle.png', 'צָב', false, 1291, 1649, 975, 1239],
          ['sin/clownfish.png', 'דָּג', false, 178, 617, 1618, 1887], ['zayin/smiley.png', 'שָׂמֵחַ', true, 1215, 1561, 1638, 1991]
        ],
        note: 'מַתְחִילוֹת בְּ־שָׂ: שַׂקִּית · שָׂמֵחַ.' },
      { type: 'strokes', page: 48, ins: 'כִּתְבוּ "שָׂ" אוֹ "שְׂ" בַּשּׁוּרוֹת הַבָּאוֹת, עִבְרוּ עַל הַקַּוִּים לְפִי הַדֻּגְמָה:',
        paths: ['M240 52V176', 'M240 176H62', 'M62 176V52', 'M150 52V176', 'M58 26h.1'],
        nums: [[240, 24], [266, 196], [40, 196], [150, 24], [30, 30]],
        steps: ['מִלְמַעְלָה לְמַטָּה — הַצַּד הַיְמָנִי', 'שְׂמֹאלָה — הַבָּסִיס', 'לְמַעְלָה — הַצַּד הַשְּׂמָאלִי', 'מִלְמַעְלָה לְמַטָּה — הַקַּו הָאֶמְצָעִי', 'הַנְּקֻדָּה — לְמַעְלָה מִשְּׂמֹאל'],
        vows: ['ka', 'sv'], vowLabel: '+ נִקּוּד (שָׂ / שְׂ)',
        note: 'שׁוּרָה 1 שָׂ, שׁוּרָה 2 שַׂ, שׁוּרָה 3 שְׂ, שׁוּרוֹת 4–6 שׂ. הַנְּקֻדָּה מִשְּׂמֹאל!' },
      { type: 'wb', pages: [{
          type: 'circle', page: 49, ins: 'הַקִּיפוּ בְּעִגּוּל אֶת הַצְּלִיל הַפּוֹתֵחַ הַמַּתְאִים לַתְּמוּנָה:',
          boxes: [
            ['zayin/smiley.png', 'שָׂמֵחַ', ['שָׂ', 'לְ'], 'שָׂ'], ['sin/spaghetti.png', 'סְפָּגֶטִי', ['סְ', 'חֲ'], 'סְ'], ['lamed/night.png', 'לַיְלָה', ['לַ', 'גָ'], 'לַ'],
            ['vav/caterpillar.png', 'זַחַל', ['פָ', 'זַ'], 'זַ'], ['kaf/spoon.png', 'כַּף', ['כַּ', 'דַ'], 'כַּ'], ['vav/gold.png', 'זָהָב', ['זָ', 'הֲ'], 'זָ'],
            ['samekh/window.png', 'חַלּוֹן', ['חַ', 'עֲ'], 'חַ'], ['zayin/bag.png', 'שַׂקִּית', ['בָ', 'שַׂ'], 'שַׂ'], ['bet/broccoli.png', 'בְּרוֹקוֹלִי', ['רְ', 'בְּ'], 'בְּ']
          ] }],
        note: 'לוֹחֲצִים עַל הַהֲבָרָה כְּדֵי לְהַקִּיף אוֹתָהּ. הַתְּשׁוּבוֹת: שָׂמֵחַ · סְפָּגֶטִי · לַיְלָה · זַחַל · כַּף · זָהָב · חַלּוֹן · שַׂקִּית · בְּרוֹקוֹלִי.' }
    ],
    exit: {
      q: 'Work alone. Read the sound. Circle the picture that starts with this sound.',
      rows: [
        { s: 'שַׂ', ok: 0, items: [['zayin/bag.png', 'שַׂקִּית'], ['sin/turtle.png', 'צָב'], ['het/milk.png', 'חָלָב']] },
        { s: 'זָ', ok: 1, items: [['pe/boots.png', 'מַגָּפַיִם'], ['vav/gold.png', 'זָהָב'], ['kaf/spoon.png', 'כַּף']] },
        { head: 'sh or s? Circle the right sound for the letter.', s: 'שָׂ', ok: 1, items: [[null, 'sha'], [null, 'sa']] },
        { s: 'שָׁ', ok: 0, items: [[null, 'sha'], [null, 'sa']] }
      ],
      reflect: 'I can read <bdi dir="rtl">שָׂ שַׂ שְׂ</bdi> and tell <bdi dir="rtl">שׁ</bdi> from <bdi dir="rtl">שׂ</bdi>',
      note: 'מְשִׂימָה חֲדָשָׁה, לֹא מֵהַחוֹבֶרֶת. רַק מִלִּים מֻכָּרוֹת. הַתְּשׁוּבוֹת: שַׂקִּית · זָהָב · sa · sha. הַמּוֹרֶה אוֹסֵף בַּיְּצִיאָה.'
    }
  };
})();
