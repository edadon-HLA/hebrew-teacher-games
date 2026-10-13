/* צְפַת — Safed */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['safed'] = {
  title: { he: 'צְפַת', en: 'Safed (Tzfat)' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'הַצָּפוֹן', 'The North'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּ־38,000', 'about 38,000'),
    stat('⛰️', 'גֹּבַהּ', 'Height', 'כִּמְעַט 900 מֶטֶר', 'almost 900 m')
  ],
  slides: [
    slide('🕯️', 'צְפַת', 'Safed',
      'צְפַת הִיא עִיר קְטַנָּה וַעֲתִיקָה בַּצָּפוֹן, בֵּין הֶהָרִים.',
      'Safed is a small, ancient city in the north, among the mountains.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'צְפַת נִמְצֵאת בַּגָּלִיל, בַּצָּפוֹן. מִצְּפַת רוֹאִים הָרִים וְנוֹף יָפֶה.',
      'Safed is in the Galilee, in the north. From Safed you see mountains and a beautiful view.'),
    slide('⛰️', 'גְּבוֹהָה', 'High up',
      'צְפַת הִיא אַחַת הֶעָרִים הַגְּבוֹהוֹת בְּיִשְׂרָאֵל — כִּמְעַט 900 מֶטֶר מֵעַל הַיָּם. בַּקַּיִץ נָעִים, וּבַחֹרֶף קַר.',
      'Safed is one of the highest cities in Israel — almost 900 m above sea level. Summer is pleasant and winter is cold.'),
    slide('🚪', 'הָעִיר הָעַתִּיקָה', 'The Old City',
      'בָּעִיר הָעַתִּיקָה שֶׁל צְפַת יֵשׁ סִמְטָאוֹת צָרוֹת וּדְלָתוֹת כְּחֻלּוֹת.',
      'In the Old City of Safed there are narrow alleys and blue doors.'),
    slide('🕍', 'בָּתֵּי כְּנֶסֶת עַתִּיקִים', 'Old synagogues',
      'בִּצְפַת יֵשׁ בָּתֵּי כְּנֶסֶת עַתִּיקִים וִיפֵהפִיִּים.',
      'Safed has old and beautiful synagogues.'),
    slide('📖', 'קַבָּלָה', 'Kabbalah',
      'צְפַת מְפֻרְסֶמֶת בַּקַּבָּלָה — חָכְמָה יְהוּדִית עַתִּיקָה וְסוֹדִית. חֲכָמִים גָּרוּ בָּהּ לִפְנֵי כְּ־500 שָׁנָה.',
      'Safed is famous for Kabbalah — an ancient, secret Jewish wisdom. Sages lived there about 500 years ago.'),
    slide('🎨', 'שְׁכוּנַת הָאָמָּנִים', 'The Artists’ Quarter',
      'בִּצְפַת יֵשׁ שְׁכוּנָה שֶׁל אָמָּנִים. צַיָּרִים וּפַסָּלִים עוֹבְדִים וּמוֹכְרִים שָׁם אָמָּנוּת.',
      'Safed has a quarter of artists. Painters and sculptors work and sell art there.'),
    slide('🕯️', 'נֵרוֹת', 'Candles',
      'צְפַת מְפֻרְסֶמֶת בִּנְרוֹת צִבְעוֹנִיִּים. אֶפְשָׁר לִרְאוֹת אֵיךְ מְכִינִים אוֹתָם.',
      'Safed is famous for colorful candles. You can see how they are made.'),
    slide('🎻', 'פֶּסְטִיבַּל קְלֶזְמֶר', 'Klezmer festival',
      'בַּקַּיִץ יֵשׁ בִּצְפַת פֶּסְטִיבַּל קְלֶזְמֶר — מוּזִיקָה שְׂמֵחָה.',
      'In summer Safed has a klezmer festival — happy music.')
  ],
  memory: [
    mem('הַר', '⛰️', 'צְפַת נִמְצֵאת בֵּין הֶהָרִים.', 'Safed is among the mountains.'),
    mem('נֵר', '🕯️', 'בִּצְפַת מְכִינִים נֵרוֹת צִבְעוֹנִיִּים.', 'In Safed they make colorful candles.'),
    mem('דֶּלֶת', '🚪', 'בָּעִיר הָעַתִּיקָה יֵשׁ דְּלָתוֹת כְּחֻלּוֹת.', 'The Old City has blue doors.'),
    mem('בֵּית כְּנֶסֶת', '🕍', 'בִּצְפַת יֵשׁ בָּתֵּי כְּנֶסֶת עַתִּיקִים.', 'Safed has old synagogues.'),
    mem('אָמָּן', '🎨', 'בִּצְפַת יֵשׁ שְׁכוּנָה שֶׁל אָמָּנִים.', 'Safed has a quarter of artists.'),
    mem('מוּזִיקָה', '🎻', 'בַּקַּיִץ יֵשׁ פֶּסְטִיבַּל קְלֶזְמֶר.', 'In summer there is a klezmer festival.'),
    mem('סֵפֶר', '📖', 'בִּצְפַת כָּתְבוּ סְפָרִים עַל קַבָּלָה.', 'In Safed people wrote books about Kabbalah.'),
    mem('שֶׁלֶג', '❄️', 'בַּחֹרֶף בִּצְפַת קַר, וְלִפְעָמִים יֵשׁ שֶׁלֶג.', 'In winter Safed is cold, and sometimes there is snow.')
  ],
  cloze: [
    cloze('צְפַת נִמְצֵאת בְּאֵזוֹר ___.', 'Safed is in the ___ area.', ['הַצָּפוֹן', 'הַנֶּגֶב', 'מִישׁוֹר הַחוֹף']),
    cloze('צְפַת הִיא עִיר ___ מְאוֹד — כִּמְעַט 900 מֶטֶר.', 'Safed is a very ___ city — almost 900 meters.', ['גְּבוֹהָה', 'נְמוּכָה', 'שְׁטוּחָה']),
    cloze('בָּעִיר הָעַתִּיקָה יֵשׁ דְּלָתוֹת ___.', 'In the Old City there are ___ doors.', ['כְּחֻלּוֹת', 'שְׁחוֹרוֹת', 'צְהֻבּוֹת']),
    cloze('צְפַת מְפֻרְסֶמֶת בִּנְרוֹת ___.', 'Safed is famous for ___ candles.', ['צִבְעוֹנִיִּים', 'שְׁחוֹרִים', 'רֵיקִים']),
    cloze('בַּקַּיִץ יֵשׁ בִּצְפַת פֶּסְטִיבַּל ___.', 'In summer Safed has a ___ festival.', ['קְלֶזְמֶר', 'שֶׁלֶג', 'יָם']),
    cloze('בִּצְפַת יֵשׁ שְׁכוּנָה שֶׁל ___.', 'Safed has a quarter of ___.', ['אָמָּנִים', 'רוֹפְאִים', 'דַּיָּגִים'])
  ],
  places: [
    place('הָעִיר הָעַתִּיקָה', 'The Old City', ['old', [['🚪', 110, 150, 100], ['🚪', 290, 150, 100], ['🕯️', 200, 205, 60]]],
      'בָּעִיר הָעַתִּיקָה יֵשׁ סִמְטָאוֹת צָרוֹת וּדְלָתוֹת כְּחֻלּוֹת.', 'The Old City has narrow alleys and blue doors.'),
    place('בֵּית כְּנֶסֶת עַתִּיק', 'An old synagogue', ['old', [['🕍', 200, 128, 150], ['⭐', 335, 58, 40]]],
      'בִּצְפַת יֵשׁ בָּתֵּי כְּנֶסֶת עַתִּיקִים.', 'Safed has old synagogues.'),
    place('שְׁכוּנַת הָאָמָּנִים', 'The Artists’ Quarter', ['old', [['🎨', 100, 150, 80], ['🖼️', 205, 140, 90], ['🏺', 320, 160, 70]]],
      'בִּשְׁכוּנָה זוֹ עוֹבְדִים צַיָּרִים וּפַסָּלִים.', 'Painters and sculptors work in this quarter.'),
    place('הַגָּלֶרְיָה', 'The art gallery', ['old', [['🖼️', 110, 150, 90], ['🎨', 290, 150, 90], ['🏺', 200, 208, 60]]],
      'בַּגָּלֶרְיָה אֶפְשָׁר לִרְאוֹת וְלִקְנוֹת אָמָּנוּת.', 'In the gallery you can see and buy art.'),
    place('הַנּוֹף מִצְּפַת', 'The view from Safed', ['mountain', [['🌲', 70, 205, 64], ['🌲', 135, 212, 56], ['🦅', 300, 80, 48]]],
      'מִצְּפַת רוֹאִים הָרִים וְנוֹף יָפֶה.', 'From Safed you see mountains and a beautiful view.'),
    place('פֶּסְטִיבַּל הַקְּלֶזְמֶר', 'The klezmer festival', ['night', [['🎻', 130, 150, 90], ['🎺', 270, 150, 90], ['🎵', 200, 88, 50], ['🎶', 335, 100, 40]]],
      'בַּפֶּסְטִיבַּל שׁוֹמְעִים מוּזִיקָה שְׂמֵחָה.', 'At the festival you hear happy music.')
  ],
  quiz: [
    quiz('אֵיפֹה בְּיִשְׂרָאֵל נִמְצֵאת צְפַת?', 'Where in Israel is Safed?', ['בַּצָּפוֹן, בֵּין הֶהָרִים', 'בַּנֶּגֶב', 'עַל חוֹף הַיָּם', 'בְּתוֹךְ הַמִּדְבָּר'], 'צְפַת נִמְצֵאת בַּצָּפוֹן, בַּגָּלִיל.', 'Safed is in the north, in the Galilee.'),
    quiz('אֵיךְ מֶזֶג הָאֲוִיר בִּצְפַת?', 'What is the weather like in Safed?', ['נָעִים בַּקַּיִץ וְקַר בַּחֹרֶף', 'חַם מְאוֹד כָּל הַשָּׁנָה', 'תָּמִיד שֶׁלֶג', 'תָּמִיד גֶּשֶׁם'], 'צְפַת גְּבוֹהָה: בַּקַּיִץ נָעִים וּבַחֹרֶף קַר.', 'Safed is high: pleasant in summer, cold in winter.'),
    quiz('מָה צֶבַע הַדְּלָתוֹת בָּעִיר הָעַתִּיקָה?', 'What color are the doors in the Old City?', ['כָּחֹל', 'אָדֹם', 'שָׁחֹר', 'יָרֹק'], 'בָּעִיר הָעַתִּיקָה יֵשׁ דְּלָתוֹת כְּחֻלּוֹת.', 'The Old City has blue doors.'),
    quiz('בְּמָה צְפַת מְפֻרְסֶמֶת?', 'What is Safed famous for?', ['קַבָּלָה, נֵרוֹת וְאָמָּנִים', 'נָמֵל וּסְפִינוֹת', 'שׁוֹנִית וְדָגִים', 'מַכְתֵּשׁ גָּדוֹל'], 'צְפַת מְפֻרְסֶמֶת בַּקַּבָּלָה, בִּנְרוֹת וּבָאָמָּנִים.', 'Safed is famous for Kabbalah, candles and artists.'),
    quiz('מָה מְכִינִים בִּצְפַת?', 'What do they make in Safed?', ['נֵרוֹת צִבְעוֹנִיִּים', 'מְכוֹנִיּוֹת', 'מְטוֹסִים', 'סְפִינוֹת'], 'בִּצְפַת מְכִינִים נֵרוֹת צִבְעוֹנִיִּים.', 'In Safed they make colorful candles.'),
    quiz('אֵיזֶה פֶּסְטִיבַּל יֵשׁ בִּצְפַת בַּקַּיִץ?', 'Which festival is in Safed in summer?', ['פֶּסְטִיבַּל קְלֶזְמֶר', 'פֶּסְטִיבַּל שֶׁלֶג', 'פֶּסְטִיבַּל צְלִילָה', 'פֶּסְטִיבַּל גְּמַלִּים'], 'בַּקַּיִץ יֵשׁ בִּצְפַת פֶּסְטִיבַּל קְלֶזְמֶר.', 'In summer Safed has a klezmer festival.'),
    quiz('מִי עוֹבֵד בִּשְׁכוּנַת הָאָמָּנִים?', 'Who works in the Artists’ Quarter?', ['צַיָּרִים וּפַסָּלִים', 'דַּיָּגִים', 'טַיָּסִים', 'רוֹפְאִים'], 'בִּשְׁכוּנַת הָאָמָּנִים עוֹבְדִים צַיָּרִים וּפַסָּלִים.', 'Painters and sculptors work in the Artists’ Quarter.'),
    quiz('כַּמָּה גְּבוֹהָה צְפַת?', 'How high is Safed?', ['כִּמְעַט 900 מֶטֶר', 'כִּ־5 מֶטֶר', 'כִּ־430 מֶטֶר מִתַּחַת לַיָּם', 'אֵין לָהּ גֹּבַהּ'], 'צְפַת גְּבוֹהָה — כִּמְעַט 900 מֶטֶר מֵעַל הַיָּם.', 'Safed is high — almost 900 m above sea level.'),
    quiz('מָה רוֹאִים מִצְּפַת?', 'What do you see from Safed?', ['הָרִים וְנוֹף יָפֶה', 'מִדְבָּר וּגְמַלִּים', 'תַּחֲנַת רַכֶּבֶת גְּדוֹלָה', 'חוֹף וּמִגְדָּלִים'], 'מִצְּפַת רוֹאִים הָרִים וְנוֹף יָפֶה.', 'From Safed you see mountains and a beautiful view.')
  ]
};
})();
