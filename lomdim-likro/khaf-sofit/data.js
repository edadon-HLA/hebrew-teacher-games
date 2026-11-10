/* לוֹמְדִים לִקְרֹא — the final letter ך (כַף סוֹפִית) (reading workbook 2, p.50 card + pp. 53-54). Teacher: "Own pages".
 * Same pattern as nun-sofit / mem-sofit / fe-sofit. ךְ = ch at the end of a word (ךָ = cha, as in לְךָ). */
window.LL = (() => {
  return {
    key: 'khaf-sofit', letter: 'ך', n: 29, book: 2, pages: '50, 53–54', title: 'ך סוֹפִית', sub: 'ך — הַצְּלִיל ch בְּסוֹף מִלָּה',
    /* entry ticket: כ (ch, last lesson). '*' = target. Look-alikes כּ (with the dot), ב, ר. No ך. */
    search: {
      letter: 'כ', ask: 'כָ · כַ · כְ · כ (בְּלִי נְקֻדָּה)', count: 'כַּמָּה כ מָצָאתִי?',
      rows: [
        ['כּ', '*כַ', 'ב', 'סַ', '*כ', 'דָ', 'ר', 'בָּ'],
        ['*כָ', 'חַ', 'כְּ', '*כְ', 'בַּ', 'גַ', 'רַ', 'תְ'],
        ['נְ', 'הָ', '*כ', 'שְׁ', 'כָּ', '*כַ', 'ק', 'ב'],
        ['בְּ', '*כְ', 'ר', 'קַ', '*כָ', 'רַ', 'כּ', 'טְ'],
        ['*כַ', 'שַׁ', 'פְּ', 'ב', 'כַּ', 'א', '*כ', 'ה'],
        ['קָ', 'דְ', '*כָ', 'רְ', 'לַ', '*כ', 'יַ', 'ן'],
        ['שׁ', '*כְ', 'אֲ', 'בּ', 'טַ', 'לְ', '*כַ', 'ם']
      ]
    },
    warm: {
      step: 'חִמּוּם: מָה לָמַדְנוּ', title: 'חוֹזְרִים עַל הָאוֹתִיּוֹת שֶׁלָּמַדְנוּ — אוֹמְרִים אֶת הַצְּלִיל',
      items: [
        { sy: 'כָ', snd: 'cha' }, { sy: 'כַּ', snd: 'ka' }, { sy: 'כְ', snd: 'che' }, { sy: 'שָׂ', snd: 'sa' }, { sy: 'פַ', snd: 'fa' },
        { he: 'עַכְבָּר', sy: 'עַ', snd: 'a', pic: 'ayin/mouse.png' }, { he: 'שָׂמֵחַ', sy: 'שָׂ', snd: 'sa', pic: 'zayin/smiley.png' },
        { he: 'כַּף', sy: 'כַּ', snd: 'ka', pic: 'kaf/spoon.png' }, { he: 'גָּמָל', sy: 'גָּ', snd: 'ga', pic: 'yod/camel.png' },
        { he: 'שָׁרָה', sy: 'שָׁ', snd: 'sha', pic: 'ayin/singer.png' },
        { sy: 'שְׂמִיכָה', snd: 'smicha' }, { sy: 'עַכְבָּר', snd: 'achbar' }, { sy: 'הַפְסָקָה', snd: 'hafsaka' }
      ],
      note: 'חֲזָרָה עַל כ (ch) מֵהַשִּׁעוּר הַקּוֹדֵם וְעַל כּ (k). אֵין כַּרְטִיסִים.'
    },
    card: {
      page: 50, pic: 'fe/king.png', cap: 'מֶלֶךְ', cols: 2,
      forms: [['כ', 'ch · start / middle', 1], ['ך', 'ch · end of a word', 1]],
      read: 'קוֹרְאִים יַחַד: <b>ךְ… ch</b> — מֶלֶ<b>ךְ</b>, הוֹלֵ<b>ךְ</b>!',
      en: '<bdi dir="rtl">ך</bdi> (final khaf) says the same sound as <bdi dir="rtl">כ</bdi>: ch. It comes only at the END of a word and goes down below the line.',
      extra: [
        { title: 'ך סוֹפִית — רַק בְּסוֹף מִלָּה', mark: 'ך', items: [['fe/king.png', 'מֶלֶךְ'], ['khaf/walker.png', 'הוֹלֵךְ']], line: 'כ — בְּהַתְחָלָה וּבָאֶמְצַע · ך — בְּסוֹף, עִם רֶגֶל אֲרֻכָּה לְמַטָּה' },
        { title: 'ן · ף · ך — כֻּלָּן יוֹרְדוֹת מִתַּחַת לַשּׁוּרָה', items: [[null, 'ן', null, 'n · end'], [null, 'ף', null, 'f · end'], [null, 'ך', null, 'ch · end']] }
      ],
      note: 'בְּסוֹף מִלָּה כ הוֹפֶכֶת לְ־ך, עִם רֶגֶל אֲרֻכָּה. אוֹתוֹ צְלִיל: ch.'
    },
    board: {
      page: 50,
      rows: [[['מֶלֶךְ', 'melech', 'w', 'fe/king.png'], ['הוֹלֵךְ', 'holech', 'w', 'khaf/walker.png']],
             [['ךְ', 'ch · end', 'l'], ['כַ', 'cha', 'm'], ['כְ', 'che', 'm'], ['כ', 'ch', 'm']]],
      note: 'שׁוֹאֲלִים: אֵיפֹה הַ־ך? — בַּסּוֹף!'
    },
    drill: ['שׁ', 'בּ', 'ת', 'ק', 'ר', 'א', 'ס', 'ח', 'נ', 'ג', 'ה', 'פּ', 'מ', 'ט', 'ל', 'ד', 'י', 'ב', 'ע', 'ו', 'כּ', 'ז', 'פ', 'שׂ', 'כ'], finals: ['ן', 'ם', 'ף', 'ך'],
    game: { key: 'khaf-sofit', name: 'ך', mode: 'end' },
    do: [
      { type: 'line', page: 53, ins: 'מִתְחוּ קַו מֵהַ"ך סוֹפִית" לַתְּמוּנוֹת שֶׁמִּסְתַּיְּמוֹת בַּצְּלִיל "ך":', ctr: 'ך', mark: 'ך', c: [874, 1128, 261],
        pics: [
          ['khaf/boybed.png', 'קָם', false, 83, 487, 358, 724], ['khaf/tap.png', 'בֶּרֶז', false, 1190, 1462, 353, 780],
          ['zayin/runner.png', 'רָץ', false, 47, 337, 1032, 1454], ['fe/nosearrow.png', 'אַף', false, 1260, 1592, 1236, 1502],
          ['fe/king.png', 'מֶלֶךְ', true, 220, 456, 1638, 1918], ['khaf/walker.png', 'הוֹלֵךְ', true, 1078, 1298, 1644, 1965]
        ],
        note: ['נִגְמָרוֹת בְּ־ך: מֶלֶךְ · הוֹלֵךְ.', 'אַף - נִגְמֶרֶת בְּ־ף, לֹא בְּ־ך! (שְׁתֵּי הַתְּמוּנוֹת לְמַעְלָה — הַיֶּלֶד קָם, הַבֶּרֶז — לֹא נִגְמָרוֹת בְּ־ך.)'] },
      { type: 'strokes', page: 54, ins: 'כִּתְבוּ "ך" (ך סוֹפִית) בַּשּׁוּרוֹת הַבָּאוֹת, עִבְרוּ עַל הַקַּוִּים לְפִי הַדֻּגְמָה:', cmp: 'כ ך',
        paths: ['M84 62H190', 'M190 62Q214 62 214 92V252'],
        nums: [[60, 62], [240, 120]],
        steps: ['הַקַּו הָעֶלְיוֹן — יָמִינָה', 'קַו אָרֹךְ יָשָׁר לְמַטָּה — מִתַּחַת לַשּׁוּרָה'],
        note: 'שׁוּרוֹת 1–2 ךָ, שׁוּרָה 3 ךְ, שׁוּרוֹת 4–6 ך. (ךָ = cha בְּסוֹף מִלָּה, כְּמוֹ לְךָ; ךְ = ch.) מַשְׁווִים: כ יוֹשֶׁבֶת עַל הַשּׁוּרָה, ך יוֹרֶדֶת.' }
    ],
    exit: {
      q: 'Work alone. Read the word. Circle the right picture.',
      rows: [
        { s: 'מֶלֶךְ', ok: 1, items: [['zayin/runner.png', 'רָץ'], ['fe/king.png', 'מֶלֶךְ'], ['fe/nosearrow.png', 'אַף']] },
        { s: 'הוֹלֵךְ', ok: 0, items: [['khaf/walker.png', 'הוֹלֵךְ'], ['zayin/runner.png', 'רָץ'], ['fe/jumper.png', 'קוֹפֵץ']] },
        { head: 'Circle the word that ENDS with the sound ch (<bdi dir="rtl">ך</bdi>).', s: 'ך', ok: 0, items: [[null, 'מֶלֶךְ'], [null, 'מַגָּף'], [null, 'אַף']] },
        { s: 'ך', ok: 1, items: [[null, 'סַבָּא'], [null, 'הוֹלֵךְ'], [null, 'כַּף']] }
      ],
      reflect: 'I can read <bdi dir="rtl">ך</bdi> at the end of a word',
      note: 'מְשִׂימָה חֲדָשָׁה, לֹא מֵהַחוֹבֶרֶת. רַק מִלִּים מֻכָּרוֹת. הַתְּשׁוּבוֹת: מֶלֶךְ · הוֹלֵךְ · מֶלֶךְ · הוֹלֵךְ. הַמּוֹרֶה אוֹסֵף בַּיְּצִיאָה.'
    }
  };
})();
