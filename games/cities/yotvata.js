/* יוֹטְבָתָה — Yotvata (a kibbutz in the Arava) */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['yotvata'] = {
  title: { he: 'יוֹטְבָתָה', en: 'Yotvata' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'הַנֶּגֶב, בָּעֲרָבָה', 'The Negev, in the Arava'),
    stat('🏡', 'סוּג', 'Type', 'קִבּוּץ', 'a kibbutz'),
    stat('📅', 'נוֹסַד', 'Founded', 'בִּשְׁנַת 1957', 'in 1957')
  ],
  slides: [
    slide('🥛', 'יוֹטְבָתָה', 'Yotvata',
      'יוֹטְבָתָה הִיא קִבּוּץ בַּנֶּגֶב, בְּאֶמְצַע הַמִּדְבָּר. הִיא מְפֻרְסֶמֶת בְּחָלָב וּבְשׁוֹקוֹ.',
      'Yotvata is a kibbutz in the Negev, in the middle of the desert. It is famous for milk and chocolate milk.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'יוֹטְבָתָה נִמְצֵאת בָּעֲרָבָה — עֵמֶק גָּדוֹל בַּדָּרוֹם, כְּ־40 קִילוֹמֶטֶר מִצָּפוֹן לְאֵילַת.',
      'Yotvata is in the Arava — a big valley in the south, about 40 km north of Eilat.'),
    slide('🏡', 'מָה זֶה קִבּוּץ?', 'What is a kibbutz?',
      'קִבּוּץ הוּא יִשּׁוּב שֶׁבּוֹ אֲנָשִׁים חַיִּים וְעוֹבְדִים יַחַד.',
      'A kibbutz is a community where people live and work together.'),
    slide('📅', 'הַהִיסְטוֹרְיָה', 'History',
      'הַקִּבּוּץ נוֹסַד בִּשְׁנַת 1957. אֲנָשִׁים בָּנוּ אוֹתוֹ בְּאֶמְצַע הַמִּדְבָּר.',
      'The kibbutz was founded in 1957. People built it in the middle of the desert.'),
    slide('🐄', 'פָּרוֹת בַּמִּדְבָּר', 'Cows in the desert',
      'בְּיוֹטְבָתָה יֵשׁ פָּרוֹת! הֵן נוֹתְנוֹת חָלָב, וְעוֹשִׂים מִמֶּנּוּ גְּבִינָה, יוֹגוּרְט וְשׁוֹקוֹ.',
      'Yotvata has cows! They give milk, and from it they make cheese, yogurt and chocolate milk.'),
    slide('🍫', 'שׁוֹקוֹ יוֹטְבָתָה', 'Yotvata chocolate milk',
      'הַשּׁוֹקוֹ שֶׁל יוֹטְבָתָה מְפֻרְסָם בְּכָל יִשְׂרָאֵל. הַרְבֵּה יְלָדִים אוֹהֲבִים אוֹתוֹ.',
      'Yotvata’s chocolate milk is famous all over Israel. Many children love it.'),
    slide('🦌', 'חַי־בַּר', 'Hai-Bar nature reserve',
      'לְיַד הַקִּבּוּץ יֵשׁ שִׁמּוּר טֶבַע: "חַי־בַּר יוֹטְבָתָה". אֶפְשָׁר לִרְאוֹת בּוֹ חַיּוֹת מִן הַמִּדְבָּר.',
      'Next to the kibbutz there is a nature reserve: “Hai-Bar Yotvata”. You can see desert animals there.'),
    slide('🌳', 'עֲצֵי שִׁטָּה', 'Acacia trees',
      'בָּעֲרָבָה גְּדֵלִים עֲצֵי שִׁטָּה. הֵם יְרֻקִּים גַּם בַּמִּדְבָּר.',
      'Acacia trees grow in the Arava. They are green even in the desert.'),
    slide('☀️', 'חַם', 'Hot',
      'בְּיוֹטְבָתָה חַם מְאוֹד בַּקַּיִץ, וְכִמְעַט אֵין גֶּשֶׁם.',
      'Yotvata is very hot in summer, and there is almost no rain.')
  ],
  memory: [
    mem('פָּרָה', '🐄', 'בְּיוֹטְבָתָה יֵשׁ פָּרוֹת בַּמִּדְבָּר.', 'Yotvata has cows in the desert.'),
    mem('חָלָב', '🥛', 'הַפָּרוֹת נוֹתְנוֹת חָלָב.', 'The cows give milk.'),
    mem('שׁוֹקוֹ', '🍫', 'הַשּׁוֹקוֹ שֶׁל יוֹטְבָתָה מְפֻרְסָם.', 'Yotvata’s chocolate milk is famous.'),
    mem('גְּבִינָה', '🧀', 'מִן הֶחָלָב עוֹשִׂים גְּבִינָה.', 'From the milk they make cheese.'),
    mem('מִדְבָּר', '🏜️', 'יוֹטְבָתָה נִמְצֵאת בְּאֶמְצַע הַמִּדְבָּר.', 'Yotvata is in the middle of the desert.'),
    mem('עֵץ', '🌳', 'בָּעֲרָבָה גְּדֵלִים עֲצֵי שִׁטָּה.', 'Acacia trees grow in the Arava.'),
    mem('חַיָּה', '🦌', 'בְּחַי־בַּר רוֹאִים חַיּוֹת מִן הַמִּדְבָּר.', 'At Hai-Bar you see desert animals.'),
    mem('שֶׁמֶשׁ', '☀️', 'בְּיוֹטְבָתָה יֵשׁ הַרְבֵּה שֶׁמֶשׁ.', 'Yotvata has lots of sun.')
  ],
  cloze: [
    cloze('יוֹטְבָתָה הִיא ___ בַּנֶּגֶב.', 'Yotvata is a ___ in the Negev.', ['קִבּוּץ', 'נָמֵל', 'הַר']),
    cloze('בְּיוֹטְבָתָה יֵשׁ ___ שֶׁנּוֹתְנוֹת חָלָב.', 'Yotvata has ___ that give milk.', ['פָּרוֹת', 'גְּמַלִּים', 'דָּגִים']),
    cloze('מִן הֶחָלָב עוֹשִׂים גְּבִינָה, יוֹגוּרְט וְ___.', 'From milk they make cheese, yogurt and ___.', ['שׁוֹקוֹ', 'חוֹל', 'אֶבֶן']),
    cloze('יוֹטְבָתָה נִמְצֵאת בָּעֲרָבָה, בְּאֵזוֹר ___.', 'Yotvata is in the Arava, in the ___ area.', ['הַנֶּגֶב', 'הַצָּפוֹן', 'מִישׁוֹר הַחוֹף']),
    cloze('בְּחַי־בַּר יוֹטְבָתָה אֶפְשָׁר לִרְאוֹת ___.', 'At Hai-Bar Yotvata you can see ___.', ['חַיּוֹת', 'מִגְדָּלִים', 'שׁוּקִים']),
    cloze('בְּיוֹטְבָתָה חַם מְאוֹד, וְיֵשׁ מְעַט ___.', 'Yotvata is very hot, and there is little ___.', ['גֶּשֶׁם', 'חוֹל', 'שֶׁמֶשׁ'])
  ],
  places: [
    place('הַפָּרוֹת בַּקִּבּוּץ', 'The cows on the kibbutz', ['green', [['🐄', 100, 160, 100], ['🐄', 280, 170, 92], ['🌾', 200, 228, 56]]],
      'הַפָּרוֹת נוֹתְנוֹת חָלָב.', 'The cows give milk.'),
    place('מוּצְרֵי הֶחָלָב', 'The dairy products', ['market', [['🥛', 110, 172, 90], ['🍫', 215, 172, 86], ['🧀', 312, 174, 80]]],
      'מִן הֶחָלָב עוֹשִׂים שׁוֹקוֹ, גְּבִינָה וְיוֹגוּרְט.', 'From milk they make chocolate milk, cheese and yogurt.'),
    place('חַי־בַּר יוֹטְבָתָה', 'Hai-Bar Yotvata', ['desert', [['🦌', 110, 160, 90], ['🦓', 285, 170, 90], ['🌿', 200, 218, 56]]],
      'בְּחַי־בַּר רוֹאִים חַיּוֹת מִן הַמִּדְבָּר.', 'At Hai-Bar you see desert animals.'),
    place('עֲצֵי הַשִּׁטָּה', 'The acacia trees', ['desert', [['🌳', 100, 150, 100], ['🌳', 292, 158, 92], ['☀️', 335, 56, 50]]],
      'עֲצֵי הַשִּׁטָּה יְרֻקִּים גַּם בַּמִּדְבָּר.', 'Acacia trees are green even in the desert.'),
    place('הָעֲרָבָה', 'The Arava valley', ['desert', [['⛰️', 90, 150, 100], ['⛰️', 305, 150, 100], ['🛣️', 200, 222, 60]]],
      'הָעֲרָבָה הִיא עֵמֶק גָּדוֹל בַּדָּרוֹם.', 'The Arava is a big valley in the south.'),
    place('הַקִּבּוּץ', 'The kibbutz', ['green', [['🏡', 110, 160, 90], ['🏡', 290, 168, 86], ['🌳', 200, 192, 70]]],
      'בַּקִּבּוּץ אֲנָשִׁים חַיִּים וְעוֹבְדִים יַחַד.', 'On the kibbutz people live and work together.')
  ],
  quiz: [
    quiz('מָה זֶה יוֹטְבָתָה?', 'What is Yotvata?', ['קִבּוּץ בַּנֶּגֶב', 'עִיר עַל הַיָּם', 'הַר בַּצָּפוֹן', 'אֲגַם'], 'יוֹטְבָתָה הִיא קִבּוּץ בַּנֶּגֶב.', 'Yotvata is a kibbutz in the Negev.'),
    quiz('עַל מָה יוֹטְבָתָה מְפֻרְסֶמֶת?', 'What is Yotvata famous for?', ['חָלָב וְשׁוֹקוֹ', 'מִגְדָּלִים', 'סְפִינוֹת', 'שֶׁלֶג'], 'יוֹטְבָתָה מְפֻרְסֶמֶת בְּחָלָב וּבְשׁוֹקוֹ.', 'Yotvata is famous for milk and chocolate milk.'),
    quiz('אֵיזוֹ חַיָּה בְּיוֹטְבָתָה נוֹתֶנֶת חָלָב?', 'Which animal in Yotvata gives milk?', ['פָּרָה', 'דּוֹלְפִין', 'אַרְיֵה', 'פִּינְגְוִין'], 'הַפָּרוֹת נוֹתְנוֹת חָלָב.', 'The cows give milk.'),
    quiz('בְּאֵיזֶה אֵזוֹר נִמְצֵאת יוֹטְבָתָה?', 'In which area is Yotvata?', ['בָּעֲרָבָה, בַּנֶּגֶב', 'בַּגָּלִיל', 'בְּמִישׁוֹר הַחוֹף', 'בְּהָרֵי יְהוּדָה'], 'יוֹטְבָתָה נִמְצֵאת בָּעֲרָבָה, בַּנֶּגֶב.', 'Yotvata is in the Arava, in the Negev.'),
    quiz('יוֹטְבָתָה נִמְצֵאת כְּ־40 קִילוֹמֶטֶר מִצָּפוֹן לְ...', 'Yotvata is about 40 km north of...', ['אֵילַת', 'חֵיפָה', 'צְפַת', 'מְטוּלָה'], 'יוֹטְבָתָה נִמְצֵאת כְּ־40 קִילוֹמֶטֶר מִצָּפוֹן לְאֵילַת.', 'Yotvata is about 40 km north of Eilat.'),
    quiz('בְּאֵיזוֹ שָׁנָה נוֹסַד הַקִּבּוּץ?', 'In what year was the kibbutz founded?', ['1957', '1909', '1500', '2020'], 'הַקִּבּוּץ נוֹסַד בִּשְׁנַת 1957.', 'The kibbutz was founded in 1957.'),
    quiz('מָה זֶה קִבּוּץ?', 'What is a kibbutz?', ['יִשּׁוּב שֶׁבּוֹ אֲנָשִׁים חַיִּים וְעוֹבְדִים יַחַד', 'שׁוּק', 'נָמֵל', 'בֵּית סֵפֶר גָּדוֹל'], 'קִבּוּץ הוּא יִשּׁוּב שֶׁבּוֹ אֲנָשִׁים חַיִּים וְעוֹבְדִים יַחַד.', 'A kibbutz is a community where people live and work together.'),
    quiz('מָה אֶפְשָׁר לִרְאוֹת בְּחַי־בַּר?', 'What can you see at Hai-Bar?', ['חַיּוֹת מִן הַמִּדְבָּר', 'מִגְדָּלִים', 'שׁוּקִים', 'סְפִינוֹת'], 'בְּחַי־בַּר רוֹאִים חַיּוֹת מִן הַמִּדְבָּר.', 'At Hai-Bar you see desert animals.'),
    quiz('מָה גָּדֵל בָּעֲרָבָה?', 'What grows in the Arava?', ['עֲצֵי שִׁטָּה', 'יַעַר צָפוֹנִי', 'שֶׁלֶג', 'עֲצֵי תַּפּוּחִים'], 'בָּעֲרָבָה גְּדֵלִים עֲצֵי שִׁטָּה.', 'Acacia trees grow in the Arava.')
  ]
};
})();
