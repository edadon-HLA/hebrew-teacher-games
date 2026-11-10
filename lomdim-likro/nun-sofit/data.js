/* לוֹמְדִים לִקְרֹא — the final letter ן (נוּן סוֹפִית) (reading workbook p.38 card + pp. 42-43). Read by letter-lesson.js and the
 * printables. Teacher: final letters get their own pages ("Own pages"). ן never takes a vowel, so the drill has no final forms.
 * Pictures come from the נ folder (nun/). */
window.LL = (() => {
  const TZ = '../games/tzlil/';
  return {
    key: 'nun-sofit', letter: 'ן', n: 10, pages: '38, 42–43', title: 'ן סוֹפִית', sub: 'ן — הַצְּלִיל n בְּסוֹף מִלָּה',
    /* entry ticket: נ (last lesson). '*' = target. Look-alikes ה, ת, בּ. No ן. */
    search: {
      letter: 'נ', ask: 'נָ · נַ · נְ · נ', count: 'כַּמָּה נ מָצָאתִי?',
      rows: [
        ['הָ', '*נַ', 'שָׁ', 'תַ', '*נְ', 'קָ', 'אַ', 'סָ'],
        ['*נָ', 'חַ', 'ת', '*נ', 'בַּ', 'שַׁ', 'רָ', 'הְ'],
        ['סְ', 'בָּ', '*נַ', 'שְׁ', 'הָ', '*נָ', 'ק', 'ח'],
        ['בְּ', '*נְ', 'הַ', 'קַ', '*נ', 'רַ', 'שָׁ', 'תְ'],
        ['*נָ', 'שַׁ', 'סַ', 'חֲ', 'תַ', 'א', '*נַ', 'בּ'],
        ['קָ', 'ה', '*נְ', 'רְ', 'שְׁ', '*נָ', 'סַ', 'ת'],
        ['שׁ', '*נ', 'אֲ', 'תְ', '*נַ', 'חָ', 'רְ', 'ס']
      ]
    },
    warm: {
      step: 'חִמּוּם: מָה לָמַדְנוּ', title: 'חוֹזְרִים עַל הָאוֹתִיּוֹת שֶׁלָּמַדְנוּ — אוֹמְרִים אֶת הַצְּלִיל',
      items: [
        { sy: 'נָ', snd: 'na' }, { sy: 'חְ', snd: 'che' }, { sy: 'נְ', snd: 'ne' }, { sy: 'סַ', snd: 'sa' }, { sy: 'נַ', snd: 'na' },
        { he: 'נָחָשׁ', sy: 'נָ', snd: 'na', pic: 'nun/snake.png' }, { he: 'נַעֲלַיִם', sy: 'נַ', snd: 'na', pic: 'nun/sneakers.png' },
        { he: 'נַדְנֵדָה', sy: 'נַ', snd: 'na', pic: 'nun/swing.png' }, { he: 'חָתוּל', sy: 'חָ', snd: 'cha', pic: 'het/kitten.png' },
        { he: 'סַבְתָּא', sy: 'סַ', snd: 'sa', pic: 'samekh/grandma.png' }, { he: 'רַגְלַיִם', sy: 'רַ', snd: 'ra', pic: 'resh/legs.png' },
        { sy: 'חַנָּה', snd: 'chana' }, { sy: 'אַחַת', snd: 'achat' }, { sy: 'סַבָּא', snd: 'saba' }
      ],
      note: 'חֲזָרָה עַל מָה שֶׁכְּבָר יוֹדְעִים (גַּם נ מֵהַשִּׁעוּר הַקּוֹדֵם): הֲבָרוֹת, תְּמוּנוֹת וּבַסּוֹף מִלִּים לִקְרִיאָה. אֵין כַּרְטִיסִים — כֻּלָּם אוֹמְרִים בְּיַחַד.'
    },
    card: {
      page: 38, pic: 'nun/window.png', cap: 'חַלּוֹן', cols: 2,
      forms: [['נ', 'n · start / middle', 1], ['ן', 'n · end of a word', 1]],
      read: 'קוֹרְאִים יַחַד: <b>ן… n</b> — חַלּוֹ<b>ן</b>, בָּלוֹ<b>ן</b>, עָנָ<b>ן</b>!',
      en: '<bdi dir="rtl">ן</bdi> (final nun) says the same sound as <bdi dir="rtl">נ</bdi>: n. It comes only at the END of a word and never takes a vowel. <bdi dir="rtl">נ</bdi> sits on the line, <bdi dir="rtl">ן</bdi> goes down below the line.',
      extra: { title: 'ן סוֹפִית — רַק בְּסוֹף מִלָּה', mark: 'ן', items: [['nun/window.png', 'חַלּוֹן'], ['nun/balloon.png', 'בָּלוֹן'], ['nun/cloud.png', 'עָנָן']], line: 'נ — בְּהַתְחָלָה וּבָאֶמְצַע · ן — בְּסוֹף' },
      note: 'ן בָּאָה רַק בְּסוֹף מִלָּה. נ - בְּהַתְחָלָה וּבָאֶמְצַע. אוֹתוֹ צְלִיל: n.'
    },
    board: {
      page: 38,
      rows: [[['חַלּוֹן', 'chalon', 'w', 'nun/window.png'], ['בָּלוֹן', 'balon', 'w', 'nun/balloon.png'], ['עָנָן', 'anan', 'w', 'nun/cloud.png']],
             [['ן', 'n · end', 'l'], ['נַ', 'na', 'm'], ['נְ', 'ne', 'm'], ['נ', 'n', 'm']]],
      note: 'הַמִּלִּים מִכַּרְטִיס "ן סוֹפִית" (עַמּוּד 38). שׁוֹאֲלִים: אֵיפֹה הַ־ן? — בַּסּוֹף!'
    },
    drill: ['שׁ', 'בּ', 'ת', 'ק', 'ר', 'א', 'ס', 'ח', 'נ'],
    game: { key: 'nun', name: 'נ' },
    do: [
      { type: 'line', page: 42, ins: 'מִתְחוּ קַו מֵהַ"ן סוֹפִית" לַתְּמוּנוֹת שֶׁמִּסְתַּיְּמוֹת בַּצְּלִיל ן:', ctr: 'ן', mark: 'ן',
        pics: [
          ['nun/window.png', 'חַלּוֹן', true, 224, 523, 327, 679], ['nun/balloon.png', 'בָּלוֹן', true, 1224, 1498, 300, 788],
          ['nun/cloud.png', 'עָנָן', true, 21, 549, 867, 1203], ['nun/runner.png', 'רָץ', false, 1214, 1633, 835, 1431],
          ['nun/water.png', 'מַיִם', false, 146, 565, 1432, 2084], ['nun/pencil.png', 'עִפָּרוֹן', true, 1048, 1493, 1597, 2084]
        ],
        note: ['הַפַּעַם — הַצְּלִיל בְּסוֹף הַמִּלָּה! חַלּוֹן, בָּלוֹן, עָנָן, עִפָּרוֹן — נִגְמָרִים בְּ־ן. רָץ, מַיִם — לֹא.', 'אִם תַּלְמִיד אוֹמֵר "אָצָן" - גַּם נָכוֹן!'] },
      { type: 'strokes', page: 43, ins: 'כִּתְבוּ "ן" בַּשּׁוּרוֹת הַבָּאוֹת, עִבְרוּ עַל הַקַּוִּים לְפִי הַדֻּגְמָה:', cmp: 'נ ן',
        paths: ['M120 62H196', 'M196 62V252'],
        nums: [[96, 62], [222, 100]],
        steps: ['קַו קָצָר לְמַעְלָה — מִשְּׂמֹאל לְיָמִין', 'קַו אָרֹךְ לְמַטָּה — מִתַּחַת לַשּׁוּרָה'],
        note: 'בְּכָל הַשּׁוּרוֹת ן. מַשְׁווִים: נ יוֹשֶׁבֶת עַל הַשּׁוּרָה, ן יוֹרֶדֶת מִתַּחַת לַשּׁוּרָה.' }
    ],
    exit: {
      q: 'Work alone. Say each picture word quietly.',
      rows: [
        { head: 'Circle the picture whose word ENDS with <bdi dir="rtl">ן</bdi>.', s: '…ן', ok: 1, items: [['nun/snake.png', 'נָחָשׁ'], ['alef/wardrobe.png', 'אָרוֹן'], ['het/kitten.png', 'חָתוּל']] },
        { s: '…ן', ok: 0, items: [['nun/pencil.png', 'עִפָּרוֹן'], ['nun/swing.png', 'נַדְנֵדָה'], ['tav/apple.png', 'תַּפּוּחַ']] },
        { s: '…ן', ok: 2, items: [['nun/runner.png', 'רָץ'], ['het/milk.png', 'חָלָב'], [TZ + 'pic-clock.png', 'שָׁעוֹן']] },
        { head: 'Circle the picture whose word STARTS with <bdi dir="rtl">נַ</bdi>.', s: 'נַ…', ok: 1, items: [['nun/window.png', 'חַלּוֹן'], ['nun/sneakers.png', 'נַעֲלַיִם'], ['nun/cloud.png', 'עָנָן']] }
      ],
      reflect: 'I know <bdi dir="rtl">ן</bdi> = n at the end of a word',
      note: 'מְשִׂימָה חֲדָשָׁה, לֹא מֵהַחוֹבֶרֶת. רַק מִלִּים מֻכָּרוֹת. הַתְּשׁוּבוֹת: אָרוֹן · עִפָּרוֹן · שָׁעוֹן · נַעֲלַיִם (בְּשׁוּרָה 4 — נַ בַּהַתְחָלָה, לֹא ן בַּסּוֹף!). הַמּוֹרֶה אוֹסֵף בַּיְּצִיאָה.'
    }
  };
})();
