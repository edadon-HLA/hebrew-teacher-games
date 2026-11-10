/* לוֹמְדִים לִקְרֹא — the final letter ם (מֵם סוֹפִית) (reading workbook p.57 card + pp. 61-63). Read by letter-lesson.js and the
 * printables. Teacher: final letters get their own pages ("Own pages"). ם never takes a vowel, so the drill has no final forms.
 * p.63 = two-word phrases ending with ם (מָרָק חַם / אַבָּא קָם; join-sounds.js, phrase mode). Pictures from the מ folder (mem/). */
window.LL = (() => {
  const TZ = '../games/tzlil/';
  return {
    key: 'mem-sofit', letter: 'ם', n: 15, pages: '57, 61–63', title: 'ם סוֹפִית', sub: 'ם — הַצְּלִיל m בְּסוֹף מִלָּה',
    /* entry ticket: מ (last lesson). '*' = target. Look-alikes ס, כּ, נ. No ם. */
    search: {
      letter: 'מ', ask: 'מָ · מַ · מְ · מ', count: 'כַּמָּה מ מָצָאתִי?',
      rows: [
        ['סָ', '*מַ', 'שָׁ', 'הַ', '*מְ', 'קָ', 'נַ', 'כָּ'],
        ['*מָ', 'חַ', 'ס', '*מ', 'בַּ', 'גַ', 'רָ', 'פְּ'],
        ['נְ', 'הָ', '*מַ', 'שְׁ', 'סַ', '*מָ', 'ק', 'כְּ'],
        ['בְּ', '*מְ', 'פָּ', 'קַ', '*מ', 'רַ', 'גָ', 'תְ'],
        ['*מָ', 'שַׁ', 'סְ', 'כּ', 'תַ', 'א', '*מַ', 'ה'],
        ['קָ', 'נָ', '*מְ', 'רְ', 'חָ', '*מָ', 'פַּ', 'גְ'],
        ['שׁ', '*מ', 'אֲ', 'ס', '*מַ', 'כַּ', 'רְ', 'ת']
      ]
    },
    warm: {
      step: 'חִמּוּם: מָה לָמַדְנוּ', title: 'חוֹזְרִים עַל הָאוֹתִיּוֹת שֶׁלָּמַדְנוּ — אוֹמְרִים אֶת הַצְּלִיל',
      items: [
        { sy: 'מָ', snd: 'ma' }, { sy: 'פְּ', snd: 'pe' }, { sy: 'מְ', snd: 'me' }, { sy: 'נַ', snd: 'na' }, { sy: 'מַ', snd: 'ma' },
        { he: 'מָרָק', sy: 'מָ', snd: 'ma', pic: 'mem/soup.png' }, { he: 'מַתָּנָה', sy: 'מַ', snd: 'ma', pic: 'mem/gift.png' },
        { he: 'מַגָּפַיִם', sy: 'מַ', snd: 'ma', pic: 'mem/boots.png' }, { he: 'בָּלוֹן', sy: 'ן', snd: 'n · end', pic: 'nun/balloon.png', end: 1 },
        { he: 'פַּרְפַּר', sy: 'פַּ', snd: 'pa', pic: 'pe/butterfly.png' }, { he: 'הַר', sy: 'הַ', snd: 'ha', pic: 'he/mountains.png' },
        { sy: 'אַבָּא', snd: 'aba' }, { sy: 'מַתָּנָה', snd: 'matana' }, { sy: 'חַנָּה', snd: 'chana' }
      ],
      note: 'חֲזָרָה עַל מָה שֶׁכְּבָר יוֹדְעִים (גַּם מ מֵהַשִּׁעוּר הַקּוֹדֵם, וְ־ן בְּסוֹף בָּלוֹן): הֲבָרוֹת, תְּמוּנוֹת וּבַסּוֹף מִלִּים לִקְרִיאָה. אֵין כַּרְטִיסִים — כֻּלָּם אוֹמְרִים בְּיַחַד.'
    },
    card: {
      page: 57, pic: 'mem/water.png', cap: 'מַיִם', cols: 2,
      forms: [['מ', 'm · start / middle', 1], ['ם', 'm · end of a word', 1]],
      read: 'קוֹרְאִים יַחַד: <b>ם… m</b> — מַיִ<b>ם</b>, חַ<b>ם</b>, קָ<b>ם</b>!',
      en: '<bdi dir="rtl">ם</bdi> (final mem) says the same sound as <bdi dir="rtl">מ</bdi>: m. It comes only at the END of a word and never takes a vowel. <bdi dir="rtl">מ</bdi> is open at the bottom, <bdi dir="rtl">ם</bdi> is a closed box.',
      extra: { title: 'ם סוֹפִית — רַק בְּסוֹף מִלָּה', mark: 'ם', items: [['mem/water.png', 'מַיִם'], ['mem/hot.png', 'חַם'], ['mem/getup.png', 'קָם']], line: 'מ — בְּהַתְחָלָה וּבָאֶמְצַע · ם — בְּסוֹף' },
      note: 'כְּמוֹ ן - גַּם ם בָּאָה רַק בְּסוֹף מִלָּה. אוֹתוֹ צְלִיל: m.'
    },
    board: {
      page: 57,
      rows: [[['מַיִם', 'mayim', 'w', 'mem/water.png'], ['חַם', 'cham', 'w', 'mem/hot.png'], ['קָם', 'kam', 'w', 'mem/getup.png']],
             [['ם', 'm · end', 'l'], ['מַ', 'ma', 'm'], ['מְ', 'me', 'm'], ['מ', 'm', 'm']]],
      note: 'הַמִּלִּים מִכַּרְטִיס "ם סוֹפִית" (עַמּוּד 57). שׁוֹאֲלִים: אֵיפֹה הַ־ם? — בַּסּוֹף!'
    },
    drill: ['שׁ', 'בּ', 'ת', 'ק', 'ר', 'א', 'ס', 'ח', 'נ', 'ג', 'ה', 'פּ', 'מ'],
    game: { key: 'mem-sofit', name: 'ם', mode: 'end' },
    do: [
      { type: 'line', page: 61, ins: 'מִתְחוּ קַו מֵהַ"ם סוֹפִית" לַתְּמוּנוֹת שֶׁמִּסְתַּיְּמוֹת בַּצְּלִיל "ם":', ctr: 'ם', mark: 'ם',
        pics: [
          ['mem/trampoline.png', 'קוֹפֶצֶת', false, 198, 549, 338, 813], ['mem/water.png', 'מַיִם', true, 1167, 1467, 348, 813],
          ['mem/hot.png', 'חַם', true, 99, 419, 1038, 1493], ['mem/runner.png', 'רָץ', false, 1224, 1612, 991, 1539],
          ['mem/king.png', 'מֶלֶךְ', false, 312, 715, 1613, 2058], ['mem/getup.png', 'קָם', true, 929, 1451, 1629, 2053]
        ],
        note: ['הַפַּעַם — הַצְּלִיל בְּסוֹף הַמִּלָּה! מַיִם, חַם, קָם — נִגְמָרִים בְּ־ם.', 'מֶלֶךְ מַתְחִיל בְּ־מ, אֲבָל לֹא נִגְמָר בְּ־ם!'] },
      { type: 'strokes', page: 62, ins: 'כִּתְבוּ "ם" בַּשּׁוּרוֹת הַבָּאוֹת, עִבְרוּ עַל הַקַּוִּים לְפִי הַדֻּגְמָה:', cmp: 'מ ם',
        paths: ['M70 62H226', 'M226 62V190', 'M226 190H70', 'M70 190V62'],
        nums: [[46, 62], [252, 100], [252, 196], [46, 160]],
        steps: ['הַקַּו הָעֶלְיוֹן — מִשְּׂמֹאל לְיָמִין', 'הַצַּד הַיְמָנִי — לְמַטָּה', 'הַקַּו הַתַּחְתּוֹן — שְׂמֹאלָה', 'הַצַּד הַשְּׂמָאלִי — לְמַעְלָה (רִבּוּעַ סָגוּר)'],
        note: 'בְּכָל הַשּׁוּרוֹת ם. (בַּחוֹבֶרֶת כָּתוּב "ם" אוֹ "ם" — טָעוּת דְּפוּס.) מַשְׁווִים: מ פְּתוּחָה לְמַטָּה, ם סְגוּרָה.' },
      { type: 'wb', pages: [{
          type: 'phrase', page: 63, ins: 'חַבְּרוּ אֶת הַצְּלִילִים לְמִלָּה שְׁלֵמָה:',
          rows: [
            { img: 'pe/soup.png', groups: [{ parts: ['מָ', 'רָ', 'ק'], word: 'מָרָק' }, { parts: ['חַ', 'ם'], word: 'חַם' }] },
            { img: 'mem/getup.png', groups: [{ parts: ['אַ', 'בָּ', 'א'], word: 'אַבָּא' }, { parts: ['קָ', 'ם'], word: 'קָם' }] }
          ] }],
        note: 'קוֹרְאִים אֶת שְׁתֵּי הַמִּלִּים יַחַד: מָרָק חַם! אַבָּא קָם! (שְׁתֵּיהֶן נִגְמָרוֹת בְּ־ם.)' }
    ],
    exit: {
      q: 'Work alone. Say each picture word quietly.',
      rows: [
        { head: 'Circle the picture whose word ENDS with <bdi dir="rtl">ם</bdi>.', s: '…ם', ok: 1, items: [['mem/king.png', 'מֶלֶךְ'], ['mem/water.png', 'מַיִם'], ['nun/balloon.png', 'בָּלוֹן']] },
        { s: '…ם', ok: 0, items: [['mem/getup.png', 'קָם'], ['mem/gift.png', 'מַתָּנָה'], ['mem/trampoline.png', 'קוֹפֶצֶת']] },
        { s: '…ם', ok: 2, items: [['nun/window.png', 'חַלּוֹן'], ['mem/runner.png', 'רָץ'], ['mem/hot.png', 'חַם']] },
        { head: 'Read the words. Circle the right picture.', s: 'אַבָּא קָם', ok: 1, items: [['mem/soup.png', 'מָרָק'], ['mem/getup.png', 'קָם'], ['gimel/icecream.png', 'גְּלִידָה']] }
      ],
      reflect: 'I know <bdi dir="rtl">ם</bdi> = m at the end of a word',
      note: 'מְשִׂימָה חֲדָשָׁה, לֹא מֵהַחוֹבֶרֶת. רַק מִלִּים מֻכָּרוֹת. הַתְּשׁוּבוֹת: מַיִם · קָם · חַם · אַבָּא קָם (הַיֶּלֶד קָם מֵהַמִּטָּה). הַמּוֹרֶה אוֹסֵף בַּיְּצִיאָה.'
    }
  };
})();
