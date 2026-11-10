/* לוֹמְדִים לִקְרֹא — the letter ה (reading workbook pp. 49-52). Read by letter-lesson.js and the printables (print-*.html).
 * The book's 4 forms: הָ הֲ / ה הַ (chataf patach like א and ח). p.52 = whole words from a bank + the first SENTENCES. */
window.LL = (() => {
  const TZ = '../games/tzlil/';
  return {
    key: 'he', letter: 'ה', n: 12, pages: '49–52', title: 'הָאוֹת ה', sub: 'הָ · הַ · הֲ',
    /* entry ticket: ג (last lesson). '*' = target. Look-alikes נ, ז. No ה. */
    search: {
      letter: 'ג', ask: 'גָ · גַ · גְ · ג', count: 'כַּמָּה ג מָצָאתִי?',
      rows: [
        ['נָ', '*גַ', 'שָׁ', 'ז', '*גְ', 'קָ', 'זַ', 'סָ'],
        ['*גָ', 'חַ', 'נ', '*ג', 'בַּ', 'שַׁ', 'רָ', 'זָ'],
        ['סְ', 'נַ', '*גַ', 'שְׁ', 'ז', '*גָ', 'ק', 'נְ'],
        ['בְּ', '*גְ', 'זַ', 'קַ', '*ג', 'רַ', 'נָ', 'תְ'],
        ['*גָ', 'שַׁ', 'סַ', 'נ', 'תַ', 'א', '*גַ', 'ז'],
        ['קָ', 'זָ', '*גְ', 'רְ', 'חָ', '*גָ', 'סַ', 'נַ'],
        ['שׁ', '*ג', 'אֲ', 'נְ', '*גַ', 'חַ', 'רְ', 'ז']
      ]
    },
    warm: {
      step: 'חִמּוּם: מָה לָמַדְנוּ', title: 'חוֹזְרִים עַל הָאוֹתִיּוֹת שֶׁלָּמַדְנוּ — אוֹמְרִים אֶת הַצְּלִיל',
      items: [
        { sy: 'גָ', snd: 'ga' }, { sy: 'נְ', snd: 'ne' }, { sy: 'גְ', snd: 'ge' }, { sy: 'חַ', snd: 'cha' }, { sy: 'גַ', snd: 'ga' },
        { he: 'גַּרְבַּיִם', sy: 'גַּ', snd: 'ga', pic: 'gimel/socks.png' }, { he: 'גַּב', sy: 'גַּ', snd: 'ga', pic: 'gimel/back.png' },
        { he: 'גַּן', sy: 'גַּ', snd: 'ga', pic: 'gimel/gan.png' }, { he: 'גְּלִידָה', sy: 'גְּ', snd: 'ge', pic: 'gimel/icecream.png' },
        { he: 'נָחָשׁ', sy: 'נָ', snd: 'na', pic: 'nun/snake.png' }, { he: 'חָלָב', sy: 'חָ', snd: 'cha', pic: 'het/milk.png' },
        { sy: 'חַג', snd: 'chag' }, { sy: 'אֲנָנָס', snd: 'ananas' }, { sy: 'אַגָּס', snd: 'agas' }
      ],
      note: 'חֲזָרָה עַל מָה שֶׁכְּבָר יוֹדְעִים: הֲבָרוֹת, תְּמוּנוֹת וּבַסּוֹף מִלִּים לִקְרִיאָה. אֵין כַּרְטִיסִים — כֻּלָּם אוֹמְרִים בְּיַחַד.'
    },
    card: {
      page: 49, pic: 'he/mountains.png', cap: 'הַר',
      forms: [['הָ', 'ha'], ['הֲ', 'ha'], ['ה', 'h · no vowel', 1], ['הַ', 'ha']],
      read: 'קוֹרְאִים יַחַד: <b>הָ… הַ… הֲ…</b> וְאַחַר כָּךְ: הַר!',
      en: 'Kamatz, patach and chataf-patach all say “a”: <bdi dir="rtl">הָ</bdi> = <bdi dir="rtl">הַ</bdi> = <bdi dir="rtl">הֲ</bdi> = ha.',
      note: ['ה וְ־ח: בְּ־ה הָרֶגֶל הַשְּׂמָאלִית לֹא נוֹגַעַת לְמַעְלָה.', 'ה בְּסוֹף מִלָּה - לֹא שׁוֹמְעִים אוֹתָהּ (חַנָּה, שָׁרָה).']
    },
    board: {
      page: 49,
      rows: [[['הָ', 'ha', 'm'], ['גְ', 'ge', 'm'], ['הַר', 'har', 'w'], ['שַׁבָּת', 'shabat', 'w']],
             [['שָׁר', 'shar', 'w'], ['אַגָּס', 'agas', 'w'], ['חַג', 'chag', 'w'], ['סַבָּא', 'saba', 'w']]]
    },
    drill: ['שׁ', 'בּ', 'ת', 'ק', 'ר', 'א', 'ס', 'ח', 'נ', 'ג', 'ה'],
    game: { key: 'he', name: 'ה' },
    line: {
      page: 50, ins: 'מִתְחוּ קַו מֵהַ"הַ" לַתְּמוּנוֹת הַמַּתְחִילוֹת בַּצְּלִיל הַ:', ctr: 'הַ',
      pics: [
        ['he/butterfly.png', 'פַּרְפַּר', false, 151, 637, 535, 907], ['he/gan.png', 'גַּן', false, 1079, 1560, 415, 782],
        ['he/sofa.png', 'סַפָּה', false, 99, 523, 1328, 1591], ['he/lettuce.png', 'חַסָּה', false, 1302, 1602, 1266, 1622],
        ['he/mountains.png', 'הַר', true, 509, 1244, 1717, 2032]
      ],
      note: 'רַק הַר מַתְחִיל בְּ־הַ. חַסָּה - חַ, לֹא הַ!'
    },
    strokes: {
      page: 51, ins: 'כִּתְבוּ "הַ" אוֹ "ה" בַּשּׁוּרוֹת הַבָּאוֹת, עִבְרוּ עַל הַקַּוִּים לְפִי הַדֻּגְמָה:',
      paths: ['M64 62H232', 'M232 62V190', 'M80 104V190'],
      nums: [[40, 62], [258, 100], [56, 130]],
      steps: ['הַקַּו הָעֶלְיוֹן — מִשְּׂמֹאל לְיָמִין', 'הַצַּד הַיְמָנִי — לְמַטָּה', 'רֶגֶל שְׂמָאלִית קְצָרָה וּנְפְרֶדֶת — לֹא נוֹגַעַת לְמַעְלָה (לֹא כְּמוֹ ח)'],
      vows: ['pa', 'ka', 'hp'], vowLabel: '+ נִקּוּד (הַ / הָ / הֲ)',
      note: 'שׁוּרָה 1 הָ, שׁוּרָה 2 הַ, שׁוּרָה 3 הָ, שׁוּרָה 4 הֲ, שׁוּרוֹת 5–6 ה.'
    },
    wb: [{
      type: 'drop', page: 52, words: true, ins: 'כִּתְבוּ אֶת הַמִּלָּה הַמַּתְאִימָה מִתַּחַת לַתְּמוּנָה:',
      bank: ['אֲנָנָס', 'גַּן', 'הַר', 'חַג', 'אַגָּס'],
      pics: [['he/mountains.png', 'הַר', ['הַר']], ['gimel/gan.png', 'גַּן', ['גַּן']], ['gimel/pineapple.png', 'אֲנָנָס', ['אֲנָנָס']]],
      sentences: { title: 'קִרְאוּ:', pic: 'resh/singing.png', lines: ['סַבָּא שָׁר.', 'אַבָּא שָׁר.', 'חַנָּה שָׁרָה.'] }
    }],
    wbNote: ['מַחְסַן הַמִּלִּים: שָׁלוֹשׁ מִלִּים מֵהַחוֹבֶרֶת וְעוֹד שְׁתַּיִם לֹא נְכוֹנוֹת (חַג, אַגָּס).',
      'הַמִּשְׁפָּטִים הָרִאשׁוֹנִים! כֻּלָּם קוֹרְאִים יַחַד ("🕒 3… 2… 1… קוֹרְאִים!"), וְאָז לוֹחֲצִים עַל מִשְׁפָּט — כָּל מִלָּה נִדְלֶקֶת. שִׂימוּ לֵב: שָׁר (סַבָּא, אַבָּא) - שָׁרָה (חַנָּה).'],
    exit: {
      q: 'Work alone. Read the sound. Circle the picture that starts with this sound.',
      rows: [
        { s: 'הַ', ok: 1, items: [['he/lettuce.png', 'חַסָּה'], ['he/mountains.png', 'הַר'], ['gimel/gan.png', 'גַּן']] },
        { head: 'Read the word. Circle the right picture.', s: 'גַּן', ok: 0, items: [['gimel/gan.png', 'גַּן'], ['he/mountains.png', 'הַר'], ['he/sofa.png', 'סַפָּה']] },
        { s: 'אֲנָנָס', ok: 1, items: [['alef/pear.png', 'אַגָּס'], ['gimel/pineapple.png', 'אֲנָנָס'], ['gimel/icecream.png', 'גְּלִידָה']] },
        { head: 'Read the sentence. Circle the right picture.', s: 'אַבָּא שָׁר.', ok: 0, items: [['alef/father.png', 'אַבָּא'], ['samekh/grandpa.png', 'סַבָּא'], ['resh/singing.png', 'שָׁר']] }
      ],
      reflect: 'I can read <bdi dir="rtl">הָ הַ הֲ</bdi> and short sentences',
      note: 'מְשִׂימָה חֲדָשָׁה, לֹא מֵהַחוֹבֶרֶת. רַק מִלִּים מֻכָּרוֹת. הַתְּשׁוּבוֹת: הַר · גַּן · אֲנָנָס · אַבָּא (צְפוּיָה שִׂיחָה: הַיֶּלֶד הַשָּׁר הוּא לֹא אַבָּא — מְקַבְּלִים אַבָּא). הַמּוֹרֶה אוֹסֵף בַּיְּצִיאָה.'
    }
  };
})();
