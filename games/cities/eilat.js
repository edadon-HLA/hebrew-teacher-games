/* אֵילַת — Eilat */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['eilat'] = {
  title: { he: 'אֵילַת', en: 'Eilat' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'הַנֶּגֶב', 'The Negev'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּ־50,000', 'about 50,000'),
    stat('🧭', 'מְיֻחָד', 'Special', 'הָעִיר הַדְּרוֹמִית בְּיוֹתֵר', 'the southernmost city')
  ],
  slides: [
    slide('🐠', 'אֵילַת', 'Eilat',
      'אֵילַת הִיא הָעִיר הַדְּרוֹמִית בְּיוֹתֵר בְּיִשְׂרָאֵל. הִיא עַל חוֹף יַם סוּף.',
      'Eilat is the southernmost city in Israel. It is on the shore of the Red Sea.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'אֵילַת נִמְצֵאת בַּדָּרוֹם הָרָחוֹק, בֵּין הֶהָרִים וְהַיָּם.',
      'Eilat is in the far south, between the mountains and the sea.'),
    slide('☀️', 'חַם', 'Hot',
      'בְּאֵילַת חַם כִּמְעַט כָּל הַשָּׁנָה. בַּקַּיִץ יֵשׁ יָמִים שֶׁל 40 מַעֲלוֹת. בַּחֹרֶף נָעִים.',
      'It is hot in Eilat almost all year. In summer there are days of 40 degrees. Winter is pleasant.'),
    slide('🐠', 'הַשּׁוֹנִית', 'The coral reef',
      'בַּיָּם בְּאֵילַת יֵשׁ שׁוֹנִית אַלְמוֹגִים עִם דָּגִים צִבְעוֹנִיִּים. אֶפְשָׁר לִצְלוֹל וְלִשְׂחוֹת עִם מַסֵּכָה.',
      'In the sea at Eilat there is a coral reef with colorful fish. You can dive and swim with a mask.'),
    slide('🐬', 'דּוֹלְפִינִים', 'Dolphins',
      'בְּאֵילַת יֵשׁ מָקוֹם שֶׁבּוֹ אֶפְשָׁר לִרְאוֹת דּוֹלְפִינִים: "שׁוֹנִית הַדּוֹלְפִינִים".',
      'In Eilat there is a place where you can see dolphins: “Dolphin Reef”.'),
    slide('🦈', 'הַמַּצְפֶּה הַתַּת־יַמִּי', 'The Underwater Observatory',
      'בְּאֵילַת יֵשׁ מַצְפֶּה תַּת־יַמִּי. מִתּוֹכוֹ רוֹאִים דָּגִים וְכַרְישִׁים, בְּלִי לָרֶדֶת לַמַּיִם.',
      'Eilat has an underwater observatory. From inside you see fish and sharks without going into the water.'),
    slide('🏨', 'מְלוֹנוֹת', 'Hotels',
      'לְיַד הַחוֹף יֵשׁ הַרְבֵּה מְלוֹנוֹת. תַּיָּרִים בָּאִים לְאֵילַת לְחֻפְשָׁה.',
      'Next to the beach there are many hotels. Tourists come to Eilat for a vacation.'),
    slide('✈️', 'שְׂדֵה הַתְּעוּפָה', 'The airport',
      'בְּאֵילַת יֵשׁ שְׂדֵה תְּעוּפָה. מִשָּׁם טָסִים לִשְׁאָר הַמְּדִינָה וְלָעוֹלָם.',
      'Eilat has an airport. From there people fly to the rest of the country and to the world.'),
    slide('⛰️', 'הֶהָרִים הָאֲדֻמִּים', 'The red mountains',
      'סְבִיב אֵילַת יֵשׁ הָרִים אֲדֻמִּים. לְיַד הָעִיר נִמְצָא פַּארְק תִּמְנָע, עִם "עַמּוּדֵי שְׁלֹמֹה".',
      'Around Eilat there are red mountains. Near the city is Timna Park, with “Solomon’s Pillars”.')
  ],
  memory: [
    mem('חוֹף', '🏖️', 'אֵילַת עַל חוֹף יַם סוּף.', 'Eilat is on the shore of the Red Sea.'),
    mem('דָּג', '🐠', 'בַּיָּם בְּאֵילַת יֵשׁ דָּגִים צִבְעוֹנִיִּים.', 'In the sea at Eilat there are colorful fish.'),
    mem('דּוֹלְפִין', '🐬', 'בְּשׁוֹנִית הַדּוֹלְפִינִים רוֹאִים דּוֹלְפִינִים.', 'At Dolphin Reef you see dolphins.'),
    mem('צְלִילָה', '🤿', 'בְּאֵילַת אֶפְשָׁר לִצְלוֹל בַּיָּם.', 'In Eilat you can dive in the sea.'),
    mem('מָלוֹן', '🏨', 'לְיַד הַחוֹף יֵשׁ הַרְבֵּה מְלוֹנוֹת.', 'There are many hotels next to the beach.'),
    mem('מָטוֹס', '✈️', 'בְּאֵילַת יֵשׁ שְׂדֵה תְּעוּפָה.', 'Eilat has an airport.'),
    mem('הָרִים', '⛰️', 'סְבִיב אֵילַת יֵשׁ הָרִים אֲדֻמִּים.', 'There are red mountains around Eilat.'),
    mem('שֶׁמֶשׁ', '☀️', 'בְּאֵילַת יֵשׁ הַרְבֵּה שֶׁמֶשׁ.', 'Eilat has lots of sun.')
  ],
  cloze: [
    cloze('אֵילַת הִיא הָעִיר הַ___ בְּיוֹתֵר בְּיִשְׂרָאֵל.', 'Eilat is the ___ city in Israel.', ['דְּרוֹמִית', 'צְפוֹנִית', 'גְּדוֹלָה']),
    cloze('אֵילַת נִמְצֵאת עַל חוֹף ___.', 'Eilat is on the shore of ___.', ['יַם סוּף', 'הַיָּם הַתִּיכוֹן', 'הַכִּנֶּרֶת']),
    cloze('בְּאֵילַת חַם כִּמְעַט כָּל ___.', 'It is hot in Eilat almost all ___.', ['הַשָּׁנָה', 'הַשַּׁבָּת', 'הַלַּיְלָה']),
    cloze('בַּיָּם אֶפְשָׁר לִצְלוֹל וְלִרְאוֹת ___ צִבְעוֹנִיִּים.', 'In the sea you can dive and see colorful ___.', ['דָּגִים', 'מְכוֹנִיּוֹת', 'עֵצִים']),
    cloze('בְּשׁוֹנִית הַדּוֹלְפִינִים אֶפְשָׁר לִרְאוֹת ___.', 'At Dolphin Reef you can see ___.', ['דּוֹלְפִינִים', 'גְּמַלִּים', 'פִּילִים']),
    cloze('לְיַד הַחוֹף יֵשׁ הַרְבֵּה ___ לְתַיָּרִים.', 'Next to the beach there are many ___ for tourists.', ['מְלוֹנוֹת', 'הָרִים', 'עֵצִים']),
    cloze('בְּאֵילַת יֵשׁ שְׂדֵה ___.', 'Eilat has an ___ field (an airport).', ['תְּעוּפָה', 'שֶׁלֶג', 'יַעַר'])
  ],
  places: [
    place('הַשּׁוֹנִית', 'The coral reef', ['sea', [['🐠', 100, 170, 70], ['🐟', 215, 205, 56], ['🐡', 310, 160, 62], ['🌿', 60, 228, 50], ['🐚', 340, 230, 46]]],
      'בַּשּׁוֹנִית גָּרִים הַרְבֵּה דָּגִים צִבְעוֹנִיִּים.', 'Many colorful fish live on the reef.'),
    place('שׁוֹנִית הַדּוֹלְפִינִים', 'Dolphin Reef', ['sea', [['🐬', 140, 150, 100], ['🐬', 285, 190, 84], ['🌊', 200, 232, 50]]],
      'בְּשׁוֹנִית הַדּוֹלְפִינִים רוֹאִים דּוֹלְפִינִים.', 'At Dolphin Reef you see dolphins.'),
    place('הַמַּצְפֶּה הַתַּת־יַמִּי', 'The Underwater Observatory', ['sea', [['🦈', 125, 170, 96], ['🐠', 295, 148, 66], ['🐟', 270, 215, 52], ['🔭', 60, 70, 44]]],
      'מִן הַמַּצְפֶּה רוֹאִים כַּרְישִׁים וְדָגִים.', 'From the observatory you see sharks and fish.'),
    place('הַמְּלוֹנוֹת עַל הַחוֹף', 'The hotels on the beach', ['beach', [['🏨', 105, 92, 100], ['🏨', 295, 98, 100], ['🌴', 200, 150, 80], ['⛱️', 200, 215, 56]]],
      'עַל הַחוֹף יֵשׁ הַרְבֵּה מְלוֹנוֹת לְתַיָּרִים.', 'On the beach there are many hotels for tourists.'),
    place('שְׂדֵה הַתְּעוּפָה', 'The airport', ['sky', [['✈️', 200, 110, 120], ['🛫', 90, 190, 70], ['🧳', 320, 200, 64]]],
      'מִשְּׂדֵה הַתְּעוּפָה טָסִים לְכָל הָעוֹלָם.', 'From the airport you fly to everywhere in the world.'),
    place('הֶהָרִים הָאֲדֻמִּים', 'The red mountains', ['desert', [['⛰️', 110, 150, 110], ['⛰️', 290, 150, 110], ['🌵', 200, 208, 64]]],
      'סְבִיב אֵילַת יֵשׁ הָרִים אֲדֻמִּים.', 'There are red mountains around Eilat.')
  ],
  quiz: [
    quiz('אֵיפֹה בְּיִשְׂרָאֵל נִמְצֵאת אֵילַת?', 'Where in Israel is Eilat?', ['בַּדָּרוֹם', 'בַּצָּפוֹן', 'בַּמֶּרְכָּז', 'בְּתוֹךְ יַעַר גָּדוֹל'], 'אֵילַת נִמְצֵאת בַּדָּרוֹם הָרָחוֹק.', 'Eilat is in the far south.'),
    quiz('עַל חוֹף אֵיזֶה יָם נִמְצֵאת אֵילַת?', 'Which sea is Eilat on?', ['יַם סוּף', 'הַיָּם הַתִּיכוֹן', 'הַכִּנֶּרֶת', 'יַם הַמֶּלַח'], 'אֵילַת עַל חוֹף יַם סוּף.', 'Eilat is on the Red Sea.'),
    quiz('מָה אֶפְשָׁר לִרְאוֹת בַּיָּם בְּאֵילַת?', 'What can you see in the sea at Eilat?', ['שׁוֹנִית אַלְמוֹגִים וְדָגִים', 'שֶׁלֶג', 'גְּמַלִּים', 'מִגְדָּלִים'], 'בַּיָּם בְּאֵילַת יֵשׁ שׁוֹנִית וְדָגִים צִבְעוֹנִיִּים.', 'The sea at Eilat has a coral reef and colorful fish.'),
    quiz('אֵיזוֹ חַיָּה אֶפְשָׁר לִרְאוֹת בְּשׁוֹנִית הַדּוֹלְפִינִים?', 'Which animal can you see at Dolphin Reef?', ['דּוֹלְפִין', 'פִּיל', 'דֹּב', 'אַרְיֵה'], 'בְּשׁוֹנִית הַדּוֹלְפִינִים רוֹאִים דּוֹלְפִינִים.', 'At Dolphin Reef you see dolphins.'),
    quiz('אֵיךְ מֶזֶג הָאֲוִיר בְּאֵילַת?', 'What is the weather like in Eilat?', ['חַם כִּמְעַט כָּל הַשָּׁנָה', 'קַר מְאוֹד', 'שֶׁלֶג בַּחֹרֶף', 'גָּשׁוּם כָּל הַזְּמַן'], 'בְּאֵילַת חַם כִּמְעַט כָּל הַשָּׁנָה.', 'It is hot in Eilat almost all year.'),
    quiz('מָה אֶפְשָׁר לַעֲשׂוֹת בְּאֵילַת?', 'What can you do in Eilat?', ['לִצְלוֹל וְלִשְׂחוֹת', 'לְהַחֲלִיק עַל שֶׁלֶג', 'לָלֶכֶת לְיַעַר גָּדוֹל', 'לִרְכֹּב עַל רַכֶּבֶת תַּחַת הָאֲדָמָה'], 'בְּאֵילַת אֶפְשָׁר לִצְלוֹל וְלִשְׂחוֹת בַּיָּם.', 'In Eilat you can dive and swim in the sea.'),
    quiz('לָמָּה תַּיָּרִים בָּאִים לְאֵילַת?', 'Why do tourists come to Eilat?', ['לְחֻפְשָׁה בַּחוֹף', 'לִרְאוֹת שֶׁלֶג', 'לַעֲבוֹד בַּשָּׂדֶה', 'לִלְמֹד בְּבֵית סֵפֶר'], 'תַּיָּרִים בָּאִים לְאֵילַת לְחֻפְשָׁה בַּחוֹף.', 'Tourists come to Eilat for a vacation at the beach.'),
    quiz('מָה שֵׁם הַפַּארְק עִם "עַמּוּדֵי שְׁלֹמֹה" לְיַד אֵילַת?', 'What is the park with “Solomon’s Pillars” near Eilat called?', ['תִּמְנָע', 'הַיַּרְקוֹן', 'הַכַּרְמֶל', 'הַבָּהָאיִים'], 'פַּארְק תִּמְנָע נִמְצָא לְיַד אֵילַת.', 'Timna Park is near Eilat.'),
    quiz('כַּמָּה תּוֹשָׁבִים בְּאֵילַת?', 'How many people live in Eilat?', ['כִּ־50,000', 'כְּ־5 מִילְיוֹן', 'כְּמֵאָה', 'כְּ־500,000'], 'בְּאֵילַת גָּרִים כִּ־50,000 אֲנָשִׁים.', 'About 50,000 people live in Eilat.')
  ]
};
})();
