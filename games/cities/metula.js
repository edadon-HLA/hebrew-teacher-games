/* מְטוּלָה — Metula */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['metula'] = {
  title: { he: 'מְטוּלָה', en: 'Metula' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'הַצָּפוֹן', 'The North'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּ־2,000', 'about 2,000'),
    stat('🧭', 'מְיֻחָד', 'Special', 'הַיִּשּׁוּב הַצְּפוֹנִי בְּיוֹתֵר', 'the northernmost town')
  ],
  slides: [
    slide('🍎', 'מְטוּלָה', 'Metula',
      'מְטוּלָה הִיא הַיִּשּׁוּב הַצְּפוֹנִי בְּיוֹתֵר בְּיִשְׂרָאֵל. הִיא קְטַנָּה, יְרֻקָּה וִיפָה.',
      'Metula is the northernmost town in Israel. It is small, green and beautiful.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'מְטוּלָה נִמְצֵאת בַּצָּפוֹן הָרָחוֹק, בְּסוֹף הַמְּדִינָה, בֵּין הָרִים וּשְׂדוֹת.',
      'Metula is in the far north, at the end of the country, between mountains and fields.'),
    slide('🏘️', 'עִיר קְטַנָּה', 'A small town',
      'בִּמְטוּלָה גָּרִים כִּ־2,000 אֲנָשִׁים בִּלְבַד. כֻּלָּם מַכִּירִים זֶה אֶת זֶה.',
      'Only about 2,000 people live in Metula. Everyone knows each other.'),
    slide('📅', 'הַהִיסְטוֹרְיָה', 'History',
      'מְטוּלָה נוֹסְדָה בִּשְׁנַת 1896. הִיא אַחַת הַמּוֹשָׁבוֹת הָרִאשׁוֹנוֹת בְּיִשְׂרָאֵל.',
      'Metula was founded in 1896. It is one of the first moshavot in Israel.'),
    slide('🌡️', 'קַר וְיָרֹק', 'Cool and green',
      'בִּמְטוּלָה גְּבוֹהָה — כְּ־500 מֶטֶר — וְיוֹרֵד בָּהּ הַרְבֵּה גֶּשֶׁם. לָכֵן הַכֹּל יָרֹק, וּבַקַּיִץ נָעִים.',
      'Metula is high — about 500 m — and gets a lot of rain. That is why everything is green, and summer is pleasant.'),
    slide('🍎', 'פְּרִי', 'Fruit',
      'סְבִיב מְטוּלָה יֵשׁ מַטָּעִים. גְּדֵלִים שָׁם תַּפּוּחִים וּדְבֵלִים טְעִימִים.',
      'Around Metula there are orchards. Tasty apples and figs grow there.'),
    slide('⛸️', 'הַמֶּרְכָּז הַקַּנְדִּי', 'The Canada Centre',
      'בִּמְטוּלָה יֵשׁ מָקוֹם שֶׁבּוֹ אֶפְשָׁר לְהַחֲלִיק עַל קֶרַח, אֲפִלּוּ בַּקַּיִץ! קוֹרְאִים לוֹ "הַמֶּרְכָּז הַקַּנְדִּי".',
      'In Metula there is a place where you can ice-skate, even in summer! It is called “the Canada Centre”.'),
    slide('💦', 'נַחַל עֵיוֹן', 'Ayun Stream',
      'לְיַד מְטוּלָה יֵשׁ שִׁמּוּר טֶבַע עִם מַפָּלִים. אֶפְשָׁר לְטַיֵּל לְיַד הַמַּיִם.',
      'Near Metula there is a nature reserve with waterfalls. You can hike next to the water.'),
    slide('🌾', 'הַנּוֹף', 'The view',
      'מִמְּטוּלָה רוֹאִים אֶת עֵמֶק הַחוּלָה, הַגָּלִיל וְהָרִים רַבִּים. הַנּוֹף יָפֶה מְאוֹד.',
      'From Metula you see the Hula Valley, the Galilee and many mountains. The view is very beautiful.')
  ],
  memory: [
    mem('תַּפּוּחַ', '🍎', 'סְבִיב מְטוּלָה גְּדֵלִים תַּפּוּחִים.', 'Apples grow around Metula.'),
    mem('עֵץ', '🌳', 'בִּמְטוּלָה יֵשׁ הַרְבֵּה עֵצִים.', 'Metula has many trees.'),
    mem('קֶרַח', '🧊', 'בַּמֶּרְכָּז הַקַּנְדִּי אֶפְשָׁר לְהַחֲלִיק עַל קֶרַח.', 'At the Canada Centre you can skate on ice.'),
    mem('מַחְלִיקַיִם', '⛸️', 'מַחְלִיקִים עַל קֶרַח גַּם בַּקַּיִץ.', 'People ice-skate even in summer.'),
    mem('מַפָּל', '💦', 'בְּנַחַל עֵיוֹן יֵשׁ מַפָּלִים.', 'Ayun Stream has waterfalls.'),
    mem('הַר', '⛰️', 'מְטוּלָה בֵּין הָרִים.', 'Metula is among mountains.'),
    mem('גֶּשֶׁם', '🌧️', 'בִּמְטוּלָה יוֹרֵד הַרְבֵּה גֶּשֶׁם.', 'Metula gets a lot of rain.'),
    mem('שָׂדֶה', '🌾', 'מִמְּטוּלָה רוֹאִים שָׂדוֹת וְעֵמֶק.', 'From Metula you see fields and a valley.')
  ],
  cloze: [
    cloze('מְטוּלָה הִיא הַיִּשּׁוּב ___ בְּיוֹתֵר בְּיִשְׂרָאֵל.', 'Metula is the ___ town in Israel.', ['הַצְּפוֹנִי', 'הַדְּרוֹמִי', 'הַגָּדוֹל']),
    cloze('בִּמְטוּלָה גָּרִים כִּ־2,000 ___.', 'About 2,000 ___ live in Metula.', ['אֲנָשִׁים', 'גְּמַלִּים', 'דָּגִים']),
    cloze('מְטוּלָה נוֹסְדָה בִּשְׁנַת ___.', 'Metula was founded in ___.', ['1896', '1500', '2020']),
    cloze('סְבִיב מְטוּלָה גְּדֵלִים ___.', 'Around Metula grow ___.', ['תַּפּוּחִים', 'אַלְמוֹגִים', 'קַקְטוּסִים']),
    cloze('בַּמֶּרְכָּז הַקַּנְדִּי מַחֲלִיקִים עַל ___.', 'At the Canada Centre they skate on ___.', ['קֶרַח', 'חוֹל', 'מַיִם חַמִּים']),
    cloze('בִּמְטוּלָה יוֹרֵד הַרְבֵּה ___.', 'Metula gets a lot of ___.', ['גֶּשֶׁם', 'חוֹל', 'שֶׁמֶשׁ יְבֵשָׁה'])
  ],
  places: [
    place('הַמַּטָּעִים', 'The orchards', ['green', [['🍎', 80, 150, 80], ['🌳', 200, 150, 100], ['🍎', 320, 160, 80], ['🧺', 200, 225, 56]]],
      'סְבִיב מְטוּלָה גְּדֵלִים תַּפּוּחִים.', 'Apples grow around Metula.'),
    place('עֵמֶק הַחוּלָה', 'The Hula Valley', ['green', [['🦆', 100, 175, 80], ['🌾', 300, 195, 70], ['🦢', 215, 225, 56]]],
      'מִמְּטוּלָה רוֹאִים אֶת עֵמֶק הַחוּלָה — אֲגַם, שָׂדוֹת וְהַרְבֵּה צִפֳּרִים.', 'From Metula you see the Hula Valley — a lake, fields and many birds.'),
    place('נַחַל עֵיוֹן', 'Ayun Stream', ['green', [['💦', 200, 150, 120], ['🌳', 62, 160, 80], ['🌿', 338, 200, 56]]],
      'בְּנַחַל עֵיוֹן יֵשׁ מַפָּלִים וְשִׁבְילֵי טִיּוּל.', 'Ayun Stream has waterfalls and hiking trails.'),
    place('הַנּוֹף מִמְּטוּלָה', 'The view from Metula', ['mountain', [['🌾', 80, 210, 60], ['🌲', 335, 205, 64], ['🦅', 300, 78, 48]]],
      'מִמְּטוּלָה רוֹאִים עֵמֶק וְהָרִים.', 'From Metula you see a valley and mountains.'),
    place('הַבָּתִּים בִּמְטוּלָה', 'The houses in Metula', ['green', [['🏡', 110, 150, 90], ['🏡', 290, 156, 86], ['🌳', 200, 165, 90]]],
      'מְטוּלָה הִיא יִשּׁוּב קָטָן וְיָרֹק.', 'Metula is a small, green town.'),
    place('הַבְּרֵכָה בַּשִּׁמּוּר', 'The pool in the reserve', ['green', [['💧', 200, 170, 90], ['🌿', 70, 190, 70], ['🌳', 335, 150, 90]]],
      'בְּשִׁמּוּר הַטֶּבַע יֵשׁ בְּרֵכוֹת מַיִם בֵּין הָעֵצִים.', 'In the nature reserve there are pools of water among the trees.')
  ],
  quiz: [
    quiz('מָה מְיֻחָד בִּמְטוּלָה?', 'What is special about Metula?', ['הִיא הַיִּשּׁוּב הַצְּפוֹנִי בְּיוֹתֵר', 'הִיא הַיִּשּׁוּב הַדְּרוֹמִי בְּיוֹתֵר', 'הִיא הָעִיר הַגְּדוֹלָה בְּיוֹתֵר', 'הִיא עַל חוֹף הַיָּם'], 'מְטוּלָה הִיא הַיִּשּׁוּב הַצְּפוֹנִי בְּיוֹתֵר בְּיִשְׂרָאֵל.', 'Metula is the northernmost town in Israel.'),
    quiz('בְּאֵיזֶה אֵזוֹר נִמְצֵאת מְטוּלָה?', 'In which area is Metula?', ['בַּצָּפוֹן', 'בַּנֶּגֶב', 'בְּמִישׁוֹר הַחוֹף', 'בְּהָרֵי יְהוּדָה'], 'מְטוּלָה נִמְצֵאת בַּצָּפוֹן הָרָחוֹק.', 'Metula is in the far north.'),
    quiz('כַּמָּה אֲנָשִׁים גָּרִים בִּמְטוּלָה?', 'How many people live in Metula?', ['כִּ־2,000', 'כְּ־2 מִילְיוֹן', 'כְּ־200,000', 'כְּ־20'], 'בִּמְטוּלָה גָּרִים כִּ־2,000 אֲנָשִׁים.', 'About 2,000 people live in Metula.'),
    quiz('בְּאֵיזוֹ שָׁנָה נוֹסְדָה מְטוּלָה?', 'In what year was Metula founded?', ['1896', '1948', '1500', '2020'], 'מְטוּלָה נוֹסְדָה בִּשְׁנַת 1896.', 'Metula was founded in 1896.'),
    quiz('מָה גָּדֵל סְבִיב מְטוּלָה?', 'What grows around Metula?', ['תַּפּוּחִים', 'אַלְמוֹגִים', 'קַקְטוּסִים', 'דְּקָלִים בַּמִּדְבָּר'], 'סְבִיב מְטוּלָה גְּדֵלִים תַּפּוּחִים.', 'Apples grow around Metula.'),
    quiz('מָה אֶפְשָׁר לַעֲשׂוֹת בַּמֶּרְכָּז הַקַּנְדִּי?', 'What can you do at the Canada Centre?', ['לְהַחֲלִיק עַל קֶרַח', 'לִצְלוֹל בַּיָּם', 'לִרְכֹּב עַל גָּמָל', 'לָטוּס בְּמָטוֹס'], 'בַּמֶּרְכָּז הַקַּנְדִּי מַחֲלִיקִים עַל קֶרַח.', 'At the Canada Centre people ice-skate.'),
    quiz('אֵיךְ מֶזֶג הָאֲוִיר בִּמְטוּלָה?', 'What is the weather like in Metula?', ['יוֹרֵד הַרְבֵּה גֶּשֶׁם וְהַכֹּל יָרֹק', 'מִדְבָּר חַם וְיָבֵשׁ', 'חַם מְאוֹד כָּל הַשָּׁנָה', 'אֵין גֶּשֶׁם אַף פַּעַם'], 'בִּמְטוּלָה יוֹרֵד הַרְבֵּה גֶּשֶׁם, וְלָכֵן הַכֹּל יָרֹק.', 'Metula gets a lot of rain, so everything is green.'),
    quiz('מָה יֵשׁ בְּנַחַל עֵיוֹן?', 'What is there at Ayun Stream?', ['מַפָּלִים', 'מִגְדָּלִים', 'נָמֵל', 'שׁוֹנִית'], 'בְּנַחַל עֵיוֹן יֵשׁ מַפָּלִים.', 'Ayun Stream has waterfalls.')
  ]
};
})();
