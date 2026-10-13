/* יְרוּשָׁלַיִם — Jerusalem */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['jerusalem'] = {
  title: { he: 'יְרוּשָׁלַיִם', en: 'Jerusalem' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'הָרֵי יְהוּדָה', 'Judean Hills'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּמְעַט מִילְיוֹן', 'almost a million'),
    stat('⛰️', 'גֹּבַהּ', 'Height', 'כְּ־750 מֶטֶר מֵעַל הַיָּם', 'about 750 m above sea level')
  ],
  slides: [
    slide('🕍', 'יְרוּשָׁלַיִם', 'Jerusalem',
      'יְרוּשָׁלַיִם הִיא הָעִיר הַגְּדוֹלָה בְּיוֹתֵר בְּיִשְׂרָאֵל וּבִירַת הַמְּדִינָה. הִיא עִיר עַתִּיקָה וּקְדוֹשָׁה.',
      'Jerusalem is the biggest city in Israel and the capital of the country. It is an ancient and holy city.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'יְרוּשָׁלַיִם נִמְצֵאת בְּהָרֵי יְהוּדָה, בְּמֶרְכַּז הַמְּדִינָה. מֵהַחוֹף עוֹלִים אֵלֶיהָ בֶּהָרִים.',
      'Jerusalem is in the Judean Hills, in the center of the country. From the coast you go up to it in the mountains.'),
    slide('🌡️', 'גְּבוֹהָה וְקָרָה', 'High and cold',
      'יְרוּשָׁלַיִם גְּבוֹהָה: כְּ־750 מֶטֶר מֵעַל הַיָּם. בַּחֹרֶף קַר, וְלִפְעָמִים יוֹרֵד שֶׁלֶג.',
      'Jerusalem is high: about 750 m above sea level. Winters are cold and sometimes it snows.'),
    slide('🏰', 'הָעִיר הָעַתִּיקָה', 'The Old City',
      'הָעִיר הָעַתִּיקָה מוּקֶּפֶת חוֹמָה. יֵשׁ בָּהּ רְחוֹבוֹת קְטַנִּים וְשׁוּקִים.',
      'The Old City is surrounded by a wall. It has small streets and markets.'),
    slide('🙏', 'עִיר קְדוֹשָׁה', 'A holy city',
      'יְרוּשָׁלַיִם קְדוֹשָׁה לִיהוּדִים, לְנוֹצְרִים וְלַמּוּסְלְמִים. אֲנָשִׁים בָּאִים לְהִתְפַּלֵּל מִכָּל הָעוֹלָם.',
      'Jerusalem is holy to Jews, Christians and Muslims. People come to pray from all over the world.'),
    slide('🧱', 'הַכֹּתֶל', 'The Western Wall',
      'הַכֹּתֶל הַמַּעֲרָבִי הוּא קִיר שֶׁל אֲבָנִים עַתִּיקוֹת. יְהוּדִים מִתְפַּלְּלִים לְיָדוֹ.',
      'The Western Wall is a wall of ancient stones. Jews pray next to it.'),
    slide('🕌', 'הַכִּפָּה הַזְּהֻבָּה', 'The golden dome',
      'בָּעִיר הָעַתִּיקָה יֵשׁ גַּם כִּפָּה זְהֻבָּה גְּדוֹלָה. הִיא נִרְאֵית מֵרָחוֹק.',
      'In the Old City there is also a big golden dome. You can see it from far away.'),
    slide('🏛️', 'הַכְּנֶסֶת', 'The Knesset',
      'בִּירוּשָׁלַיִם נִמְצֵאת הַכְּנֶסֶת, הַפַּרְלָמֶנְט שֶׁל יִשְׂרָאֵל. שָׁם עוֹבְדִים חַבְרֵי הַכְּנֶסֶת.',
      'The Knesset, Israel’s parliament, is in Jerusalem. Members of Knesset work there.'),
    slide('🪨', 'אֶבֶן יְרוּשַׁלְמִית', 'Jerusalem stone',
      'הַבָּתִּים בִּירוּשָׁלַיִם בְּנוּיִים מֵאֶבֶן בְּהִירָה. קוֹרְאִים לָהּ "אֶבֶן יְרוּשַׁלְמִית".',
      'The houses in Jerusalem are built of light-colored stone. It is called “Jerusalem stone”.'),
    slide('🍇', 'שׁוּק מַחֲנֵה יְהוּדָה', 'The Mahane Yehuda Market',
      'בְּשׁוּק מַחֲנֵה יְהוּדָה קוֹנִים פֵּרוֹת, יְרָקוֹת וְאֹכֶל. הַשּׁוּק הוּא מָקוֹם מָלֵא חַיִּים.',
      'At the Mahane Yehuda Market you buy fruit, vegetables and food. The market is full of life.'),
    slide('🚋', 'הָרַכֶּבֶת הַקַּלָּה', 'The light rail',
      'בִּירוּשָׁלַיִם נוֹסַעַת רַכֶּבֶת קַלָּה. הִיא עוֹבֶרֶת בְּאֶמְצַע הָעִיר.',
      'A light rail runs in Jerusalem, through the middle of the city.')
  ],
  memory: [
    mem('כֹּתֶל', '🧱', 'הַכֹּתֶל הַמַּעֲרָבִי הוּא קִיר שֶׁל אֲבָנִים עַתִּיקוֹת.', 'The Western Wall is a wall of ancient stones.'),
    mem('חוֹמָה', '🏰', 'הָעִיר הָעַתִּיקָה מוּקֶּפֶת חוֹמָה.', 'The Old City is surrounded by a wall.'),
    mem('כְּנֶסֶת', '🏛️', 'הַכְּנֶסֶת, הַפַּרְלָמֶנְט שֶׁל יִשְׂרָאֵל, בִּירוּשָׁלַיִם.', 'The Knesset, Israel’s parliament, is in Jerusalem.'),
    mem('שׁוּק', '🍇', 'בְּשׁוּק מַחֲנֵה יְהוּדָה קוֹנִים פֵּרוֹת וִירָקוֹת.', 'At the Mahane Yehuda Market you buy fruit and vegetables.'),
    mem('רַכֶּבֶת קַלָּה', '🚋', 'בִּירוּשָׁלַיִם נוֹסַעַת רַכֶּבֶת קַלָּה.', 'A light rail runs in Jerusalem.'),
    mem('אֶבֶן', '🪨', 'הַבָּתִּים בְּנוּיִים מֵאֶבֶן יְרוּשַׁלְמִית.', 'The houses are built of Jerusalem stone.'),
    mem('כִּפָּה זְהֻבָּה', '🕌', 'בָּעִיר הָעַתִּיקָה יֵשׁ כִּפָּה זְהֻבָּה גְּדוֹלָה.', 'The Old City has a big golden dome.'),
    mem('שֶׁלֶג', '❄️', 'בִּירוּשָׁלַיִם לִפְעָמִים יוֹרֵד שֶׁלֶג.', 'In Jerusalem it sometimes snows.')
  ],
  cloze: [
    cloze('יְרוּשָׁלַיִם הִיא הָעִיר הַ___ בְּיוֹתֵר בְּיִשְׂרָאֵל.', 'Jerusalem is the ___ city in Israel.', ['גְּדוֹלָה', 'קְטַנָּה', 'יְשָׁנָה']),
    cloze('הָעִיר הָעַתִּיקָה מוּקֶּפֶת ___.', 'The Old City is surrounded by a ___.', ['חוֹמָה', 'יָם', 'יַעַר']),
    cloze('הַכֹּתֶל הַמַּעֲרָבִי הוּא קִיר שֶׁל ___ עַתִּיקוֹת.', 'The Western Wall is a wall of ancient ___.', ['אֲבָנִים', 'עֵצִים', 'בְּגָדִים']),
    cloze('הַכְּנֶסֶת הִיא הַ___ שֶׁל יִשְׂרָאֵל.', 'The Knesset is Israel’s ___.', ['פַּרְלָמֶנְט', 'שׁוּק', 'נָמֵל']),
    cloze('בַּחֹרֶף בִּירוּשָׁלַיִם קַר, וְלִפְעָמִים יוֹרֵד ___.', 'In winter Jerusalem is cold and sometimes ___ falls.', ['שֶׁלֶג', 'חוֹל', 'אֵשׁ']),
    cloze('בִּירוּשָׁלַיִם נוֹסַעַת רַכֶּבֶת ___.', 'A ___ train runs in Jerusalem.', ['קַלָּה', 'יְרֻקָּה', 'יְשָׁנָה']),
    cloze('בְּשׁוּק מַחֲנֵה יְהוּדָה קוֹנִים פֵּרוֹת וּ___.', 'At the Mahane Yehuda Market you buy fruit and ___.', ['יְרָקוֹת', 'מְכוֹנִיּוֹת', 'מְטוֹסִים'])
  ],
  places: [
    place('הַכֹּתֶל הַמַּעֲרָבִי', 'The Western Wall', ['old', [], 'wall'],
      'הַכֹּתֶל הוּא קִיר שֶׁל אֲבָנִים עַתִּיקוֹת.', 'The Wall is made of ancient stones.'),
    place('הַכִּפָּה הַזְּהֻבָּה', 'The golden dome', ['sky', [['🌳', 62, 172, 66], ['🫒', 340, 175, 66]], 'dome'],
      'הַכִּפָּה הַזְּהֻבָּה נִרְאֵית מֵרָחוֹק.', 'The golden dome can be seen from far away.'),
    place('הַכְּנֶסֶת', 'The Knesset', ['sky', [['🏛️', 200, 128, 160], ['🌳', 60, 195, 58], ['🌳', 340, 195, 58]]],
      'בַּכְּנֶסֶת עוֹבְדִים חַבְרֵי הַכְּנֶסֶת.', 'Members of Knesset work in the Knesset.'),
    place('שׁוּק מַחֲנֵה יְהוּדָה', 'The Mahane Yehuda Market', ['market', [['🍇', 90, 175, 70], ['🍎', 170, 180, 66], ['🥕', 250, 178, 66], ['🧅', 325, 180, 60], ['🍋', 130, 218, 56], ['🫒', 270, 218, 56]]],
      'בַּשּׁוּק קוֹנִים פֵּרוֹת, יְרָקוֹת וְאֹכֶל.', 'At the market you buy fruit, vegetables and food.'),
    place('הָרַכֶּבֶת הַקַּלָּה', 'The light rail', ['city', [['🚋', 200, 168, 124]]],
      'הָרַכֶּבֶת הַקַּלָּה עוֹבֶרֶת בְּאֶמְצַע הָעִיר.', 'The light rail goes through the middle of the city.'),
    place('חוֹמוֹת הָעִיר הָעַתִּיקָה', 'The walls of the Old City', ['old', [['🏰', 200, 120, 150], ['🚶', 90, 205, 60], ['🚶', 310, 208, 60]]],
      'הַחוֹמָה מַקִּיפָה אֶת הָעִיר הָעַתִּיקָה.', 'The wall surrounds the Old City.')
  ],
  quiz: [
    quiz('מָה הִיא הָעִיר הַגְּדוֹלָה בְּיוֹתֵר בְּיִשְׂרָאֵל?', 'Which is the biggest city in Israel?', ['יְרוּשָׁלַיִם', 'אֵילַת', 'צְפַת', 'עֲרָד'], 'יְרוּשָׁלַיִם הִיא הָעִיר הַגְּדוֹלָה בְּיוֹתֵר.', 'Jerusalem is the biggest city.'),
    quiz('בְּאֵיזֶה אֵזוֹר נִמְצֵאת יְרוּשָׁלַיִם?', 'In which area is Jerusalem?', ['הָרֵי יְהוּדָה', 'הַנֶּגֶב', 'מִישׁוֹר הַחוֹף', 'הַצָּפוֹן'], 'יְרוּשָׁלַיִם נִמְצֵאת בְּהָרֵי יְהוּדָה.', 'Jerusalem is in the Judean Hills.'),
    quiz('מָה יֵשׁ סְבִיב הָעִיר הָעַתִּיקָה?', 'What surrounds the Old City?', ['חוֹמָה', 'יָם', 'מִדְבָּר', 'שֶׁלֶג'], 'הָעִיר הָעַתִּיקָה מוּקֶּפֶת חוֹמָה.', 'The Old City is surrounded by a wall.'),
    quiz('מָה זֶה הַכֹּתֶל?', 'What is the Kotel?', ['קִיר שֶׁל אֲבָנִים עַתִּיקוֹת', 'שׁוּק', 'נָמֵל', 'תֵּיאַטְרוֹן'], 'הַכֹּתֶל הוּא קִיר שֶׁל אֲבָנִים עַתִּיקוֹת.', 'The Kotel is a wall of ancient stones.'),
    quiz('מָה נִמְצָא בִּירוּשָׁלַיִם?', 'What is in Jerusalem?', ['הַכְּנֶסֶת', 'הַנָּמֵל', 'מִגְדְּלֵי עֲזְרִיאֵלִי', 'הַטֶּכְנִיּוֹן'], 'הַכְּנֶסֶת, הַפַּרְלָמֶנְט שֶׁל יִשְׂרָאֵל, בִּירוּשָׁלַיִם.', 'The Knesset, Israel’s parliament, is in Jerusalem.'),
    quiz('מִמָּה בְּנוּיִים הַבָּתִּים בִּירוּשָׁלַיִם?', 'What are the houses in Jerusalem built from?', ['מֵאֶבֶן יְרוּשַׁלְמִית', 'מֵעֵץ', 'מִשֶּׁלֶג', 'מִזְּכוּכִית'], 'הַבָּתִּים בְּנוּיִים מֵאֶבֶן יְרוּשַׁלְמִית.', 'The houses are built of Jerusalem stone.'),
    quiz('לְמִי קְדוֹשָׁה יְרוּשָׁלַיִם?', 'To whom is Jerusalem holy?', ['לִיהוּדִים, לְנוֹצְרִים וְלַמּוּסְלְמִים', 'רַק לְתַיָּרִים', 'רַק לְיֶלֶד אֶחָד', 'לְאַף אֶחָד'], 'יְרוּשָׁלַיִם קְדוֹשָׁה לִיהוּדִים, לְנוֹצְרִים וְלַמּוּסְלְמִים.', 'Jerusalem is holy to Jews, Christians and Muslims.'),
    quiz('מָה לִפְעָמִים יוֹרֵד בִּירוּשָׁלַיִם בַּחֹרֶף?', 'What sometimes falls in Jerusalem in winter?', ['שֶׁלֶג', 'חוֹל', 'אֶבֶן', 'אֵשׁ'], 'יְרוּשָׁלַיִם גְּבוֹהָה, וְלִפְעָמִים יוֹרֵד בָּהּ שֶׁלֶג.', 'Jerusalem is high, and sometimes it snows.'),
    quiz('מָה קוֹנִים בְּשׁוּק מַחֲנֵה יְהוּדָה?', 'What do you buy at the Mahane Yehuda Market?', ['פֵּרוֹת, יְרָקוֹת וְאֹכֶל', 'מְכוֹנִיּוֹת', 'מְטוֹסִים', 'סִירוֹת'], 'בַּשּׁוּק קוֹנִים פֵּרוֹת, יְרָקוֹת וְאֹכֶל.', 'At the market you buy fruit, vegetables and food.'),
    quiz('כַּמָּה גְּבוֹהָה יְרוּשָׁלַיִם?', 'How high is Jerusalem?', ['כְּ־750 מֶטֶר', 'כְּ־5 מֶטֶר', 'כְּ־10,000 מֶטֶר', 'מְאוֹד נְמוּכָה'], 'יְרוּשָׁלַיִם גְּבוֹהָה — כְּ־750 מֶטֶר מֵעַל הַיָּם.', 'Jerusalem is high — about 750 m above sea level.')
  ]
};
})();
