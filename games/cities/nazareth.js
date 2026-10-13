/* נְצֶרֶת — Nazareth */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['nazareth'] = {
  title: { he: 'נְצֶרֶת', en: 'Nazareth' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'הַצָּפוֹן, בַּגָּלִיל', 'The North, in the Galilee'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּמְעַט 80,000', 'almost 80,000'),
    stat('🏙️', 'מְיֻחָד', 'Special', 'הָעִיר הָעֲרָבִית הַגְּדוֹלָה בְּיוֹתֵר', 'the biggest Arab city in Israel')
  ],
  slides: [
    slide('⛪', 'נְצֶרֶת', 'Nazareth',
      'נְצֶרֶת הִיא עִיר בַּגָּלִיל, בַּצָּפוֹן. הִיא הָעִיר הָעֲרָבִית הַגְּדוֹלָה בְּיוֹתֵר בְּיִשְׂרָאֵל.',
      'Nazareth is a city in the Galilee, in the north. It is the biggest Arab city in Israel.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'נְצֶרֶת נִמְצֵאת בֵּין גְּבָעוֹת יְרֻקּוֹת בַּגָּלִיל הַתַּחְתּוֹן.',
      'Nazareth is among green hills in the Lower Galilee.'),
    slide('🗣️', 'שָׂפָה', 'Language',
      'רֹב הַתּוֹשָׁבִים בִּנְצֶרֶת מְדַבְּרִים עֲרָבִית. הֵם מוּסְלְמִים וְנוֹצְרִים.',
      'Most residents of Nazareth speak Arabic. They are Muslims and Christians.'),
    slide('⛪', 'כְּנֵסִיַּת הַבְּשׂוֹרָה', 'The Church of the Annunciation',
      'בִּנְצֶרֶת יֵשׁ כְּנֵסִיָּה גְּדוֹלָה וִיפָה: כְּנֵסִיַּת הַבְּשׂוֹרָה. נוֹצְרִים מִכָּל הָעוֹלָם בָּאִים לְבַקֵּר בָּהּ.',
      'Nazareth has a big, beautiful church: the Church of the Annunciation. Christians from all over the world come to visit it.'),
    slide('👦', 'יֶלֶד בִּנְצֶרֶת', 'A childhood in Nazareth',
      'לְפִי הַמָּסֹרֶת הַנּוֹצְרִית, יֵשׁוּעַ גָּדַל בִּנְצֶרֶת כְּשֶׁהָיָה יֶלֶד. לָכֵן הָעִיר חֲשׁוּבָה לַנּוֹצְרִים.',
      'According to Christian tradition, Jesus grew up in Nazareth as a child. That is why the city is important to Christians.'),
    slide('🛍️', 'הַשּׁוּק הָעַתִּיק', 'The old market',
      'בָּעִיר הָעַתִּיקָה יֵשׁ שׁוּק צִבְעוֹנִי. מוֹכְרִים שָׁם תַּבְלִינִים, בְּגָדִים וְאֹכֶל טָעִים.',
      'In the old city there is a colorful market. They sell spices, clothes and tasty food there.'),
    slide('🍯', 'אֹכֶל', 'Food',
      'בִּנְצֶרֶת אוֹכְלִים חוּמוּס, פָּלָאפֶל וּכְנָאפֶה — מַתְּקָן חַם עִם גְּבִינָה וְסִירוֹפּ.',
      'In Nazareth people eat hummus, falafel and knafeh — a warm sweet with cheese and syrup.'),
    slide('💧', 'בְּאֵר מִרְיָם', 'Mary’s Well',
      'בִּנְצֶרֶת יֵשׁ בְּאֵר מַיִם עַתִּיקָה שֶׁנִּקְרֵאת "בְּאֵר מִרְיָם". הָאֲנָשִׁים בָּאוּ לְשָׁם לְהָבִיא מַיִם.',
      'Nazareth has an ancient well called “Mary’s Well”. People came there to bring water.'),
    slide('⛰️', 'הַר תָּבוֹר', 'Mount Tabor',
      'לְיַד נְצֶרֶת יֵשׁ הַר עָגֹל וְיָפֶה: הַר תָּבוֹר. מִן הָהָר רוֹאִים אֶת כָּל הָעֵמֶק.',
      'Near Nazareth there is a round, beautiful mountain: Mount Tabor. From the mountain you can see the whole valley.')
  ],
  memory: [
    mem('כְּנֵסִיָּה', '⛪', 'בִּנְצֶרֶת יֵשׁ כְּנֵסִיָּה גְּדוֹלָה.', 'Nazareth has a big church.'),
    mem('שׁוּק', '🛍️', 'בַּשּׁוּק הָעַתִּיק מוֹכְרִים תַּבְלִינִים וְאֹכֶל.', 'At the old market they sell spices and food.'),
    mem('חוּמוּס', '🥣', 'בִּנְצֶרֶת אוֹכְלִים חוּמוּס טָעִים.', 'In Nazareth people eat tasty hummus.'),
    mem('פָּלָאפֶל', '🥙', 'בִּנְצֶרֶת אוֹכְלִים גַּם פָּלָאפֶל.', 'In Nazareth people also eat falafel.'),
    mem('בְּאֵר', '💧', 'בִּנְצֶרֶת יֵשׁ בְּאֵר מַיִם עַתִּיקָה.', 'Nazareth has an ancient well.'),
    mem('הַר', '⛰️', 'לְיַד נְצֶרֶת נִמְצָא הַר תָּבוֹר.', 'Mount Tabor is near Nazareth.'),
    mem('גְּבָעָה', '🌄', 'נְצֶרֶת בְּנוּיָה בֵּין גְּבָעוֹת.', 'Nazareth is built among hills.'),
    mem('תַּבְלִין', '🌶️', 'בַּשּׁוּק מוֹכְרִים תַּבְלִינִים צִבְעוֹנִיִּים.', 'At the market they sell colorful spices.')
  ],
  cloze: [
    cloze('נְצֶרֶת נִמְצֵאת בַּגָּלִיל, בְּאֵזוֹר ___.', 'Nazareth is in the Galilee, in the ___ area.', ['הַצָּפוֹן', 'הַנֶּגֶב', 'מִישׁוֹר הַחוֹף']),
    cloze('בִּנְצֶרֶת יֵשׁ כְּנֵסִיָּה ___ וִיפָה.', 'Nazareth has a ___ and beautiful church.', ['גְּדוֹלָה', 'קְטַנְטַנָּה', 'שְׁחוֹרָה']),
    cloze('רֹב הַתּוֹשָׁבִים מְדַבְּרִים ___.', 'Most of the residents speak ___.', ['עֲרָבִית', 'סִינִית', 'צָרְפָתִית']),
    cloze('בַּשּׁוּק הָעַתִּיק מוֹכְרִים ___ וְאֹכֶל.', 'At the old market they sell ___ and food.', ['תַּבְלִינִים', 'מְכוֹנִיּוֹת', 'סִירוֹת']),
    cloze('לְיַד נְצֶרֶת יֵשׁ הַר ___.', 'Near Nazareth there is Mount ___.', ['תָּבוֹר', 'סִינַי', 'אֶוֶרֶסְט']),
    cloze('בִּנְצֶרֶת אוֹכְלִים חוּמוּס וּ___.', 'In Nazareth people eat hummus and ___.', ['פָּלָאפֶל', 'אֲבָנִים', 'חוֹל'])
  ],
  places: [
    place('כְּנֵסִיַּת הַבְּשׂוֹרָה', 'The Church of the Annunciation', ['sky', [['⛪', 200, 128, 160], ['🌳', 62, 190, 60], ['🌳', 338, 190, 60]]],
      'כְּנֵסִיַּת הַבְּשׂוֹרָה הִיא כְּנֵסִיָּה גְּדוֹלָה בִּנְצֶרֶת.', 'The Church of the Annunciation is a big church in Nazareth.'),
    place('הַשּׁוּק הָעַתִּיק', 'The old market', ['market', [['🌶️', 90, 178, 70], ['🧄', 170, 182, 62], ['🍯', 250, 178, 66], ['🧵', 325, 182, 60], ['🍋', 200, 222, 56]]],
      'בַּשּׁוּק הָעַתִּיק מוֹכְרִים תַּבְלִינִים, בְּגָדִים וְאֹכֶל.', 'At the old market they sell spices, clothes and food.'),
    place('בְּאֵר מִרְיָם', 'Mary’s Well', ['old', [['💧', 200, 135, 100], ['🏺', 90, 185, 80], ['🏺', 310, 190, 76]]],
      'הָאֲנָשִׁים בָּאוּ לַבְּאֵר לְהָבִיא מַיִם.', 'People came to the well to bring water.'),
    place('הַר תָּבוֹר', 'Mount Tabor', ['mountain', [['🌲', 70, 205, 64], ['🌳', 330, 205, 64]]],
      'הַר תָּבוֹר הוּא הַר עָגֹל וְיָפֶה לְיַד נְצֶרֶת.', 'Mount Tabor is a round, beautiful mountain near Nazareth.'),
    place('מִסְעָדָה בִּנְצֶרֶת', 'A restaurant in Nazareth', ['old', [['🥣', 110, 165, 90], ['🥙', 210, 160, 90], ['🍮', 310, 168, 80], ['🫓', 205, 225, 50]]],
      'בַּמִּסְעָדוֹת אוֹכְלִים חוּמוּס, פָּלָאפֶל וּכְנָאפֶה.', 'In the restaurants people eat hummus, falafel and knafeh.'),
    place('הַגְּבָעוֹת בַּגָּלִיל', 'The hills of the Galilee', ['green', [['🌳', 70, 160, 80], ['🫒', 320, 165, 80], ['🏘️', 200, 175, 90]]],
      'נְצֶרֶת בְּנוּיָה בֵּין גְּבָעוֹת יְרֻקּוֹת.', 'Nazareth is built among green hills.')
  ],
  quiz: [
    quiz('בְּאֵיזֶה אֵזוֹר נִמְצֵאת נְצֶרֶת?', 'In which area is Nazareth?', ['בַּצָּפוֹן, בַּגָּלִיל', 'בַּנֶּגֶב', 'עַל חוֹף הַיָּם', 'בַּמִּדְבָּר'], 'נְצֶרֶת נִמְצֵאת בַּגָּלִיל, בַּצָּפוֹן.', 'Nazareth is in the Galilee, in the north.'),
    quiz('מָה מְיֻחָד בִּנְצֶרֶת?', 'What is special about Nazareth?', ['הִיא הָעִיר הָעֲרָבִית הַגְּדוֹלָה בְּיוֹתֵר', 'הִיא הָעִיר הַדְּרוֹמִית בְּיוֹתֵר', 'הִיא עַל הַיָּם', 'הִיא בַּמִּדְבָּר'], 'נְצֶרֶת הִיא הָעִיר הָעֲרָבִית הַגְּדוֹלָה בְּיוֹתֵר בְּיִשְׂרָאֵל.', 'Nazareth is the biggest Arab city in Israel.'),
    quiz('אֵיזוֹ שָׂפָה מְדַבְּרִים רֹב הַתּוֹשָׁבִים?', 'Which language do most residents speak?', ['עֲרָבִית', 'סִינִית', 'צָרְפָתִית', 'יַפָּנִית'], 'רֹב הַתּוֹשָׁבִים בִּנְצֶרֶת מְדַבְּרִים עֲרָבִית.', 'Most residents of Nazareth speak Arabic.'),
    quiz('מָה שֵׁם הַכְּנֵסִיָּה הַגְּדוֹלָה בִּנְצֶרֶת?', 'What is the big church in Nazareth called?', ['כְּנֵסִיַּת הַבְּשׂוֹרָה', 'הַכֹּתֶל', 'הַמִּגְדָּל הָעָגֹל', 'הַמַּצְפֶּה'], 'בִּנְצֶרֶת יֵשׁ כְּנֵסִיַּת הַבְּשׂוֹרָה.', 'Nazareth has the Church of the Annunciation.'),
    quiz('מָה מוֹכְרִים בַּשּׁוּק הָעַתִּיק?', 'What do they sell at the old market?', ['תַּבְלִינִים, בְּגָדִים וְאֹכֶל', 'מְטוֹסִים', 'סְפִינוֹת', 'שֶׁלֶג'], 'בַּשּׁוּק הָעַתִּיק מוֹכְרִים תַּבְלִינִים, בְּגָדִים וְאֹכֶל.', 'At the old market they sell spices, clothes and food.'),
    quiz('אֵיזֶה הַר נִמְצָא לְיַד נְצֶרֶת?', 'Which mountain is near Nazareth?', ['הַר תָּבוֹר', 'הַר סִינַי', 'הַר אֶוֶרֶסְט', 'הַר הַזֵּיתִים'], 'הַר תָּבוֹר נִמְצָא לְיַד נְצֶרֶת.', 'Mount Tabor is near Nazareth.'),
    quiz('מָה אוֹכְלִים בִּנְצֶרֶת?', 'What do people eat in Nazareth?', ['חוּמוּס, פָּלָאפֶל וּכְנָאפֶה', 'שֶׁלֶג', 'אֲבָנִים', 'חוֹל'], 'בִּנְצֶרֶת אוֹכְלִים חוּמוּס, פָּלָאפֶל וּכְנָאפֶה.', 'In Nazareth people eat hummus, falafel and knafeh.'),
    quiz('מָה הַשֵּׁם שֶׁל בְּאֵר הַמַּיִם הָעַתִּיקָה בִּנְצֶרֶת?', 'What is the ancient well in Nazareth called?', ['בְּאֵר מִרְיָם', 'בְּאֵר אַבְרָהָם', 'בְּאֵר הַיָּם', 'בְּאֵר הַחוֹל'], 'בִּנְצֶרֶת יֵשׁ בְּאֵר מִרְיָם.', 'Nazareth has Mary’s Well.'),
    quiz('כַּמָּה תּוֹשָׁבִים בִּנְצֶרֶת?', 'How many people live in Nazareth?', ['כִּמְעַט 80,000', 'כְּעֶשְׂרָה', 'כְּ־10 מִילְיוֹן', 'כְּ־1,000'], 'בִּנְצֶרֶת גָּרִים כִּמְעַט 80,000 אֲנָשִׁים.', 'Almost 80,000 people live in Nazareth.')
  ]
};
})();
