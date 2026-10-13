/* רַהַט — Rahat */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['rahat'] = {
  title: { he: 'רַהַט', en: 'Rahat' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'הַנֶּגֶב', 'The Negev'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּ־75,000', 'about 75,000'),
    stat('⛺', 'מְיֻחָד', 'Special', 'הָעִיר הַבֶּדוּאִית הַגְּדוֹלָה בְּיוֹתֵר', 'the biggest Bedouin city')
  ],
  slides: [
    slide('⛺', 'רַהַט', 'Rahat',
      'רַהַט הִיא עִיר בַּנֶּגֶב. הַתּוֹשָׁבִים שֶׁלָּהּ הֵם בֶּדוּאִים.',
      'Rahat is a city in the Negev. Its residents are Bedouin.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'רַהַט נִמְצֵאת בַּדָּרוֹם, בַּנֶּגֶב, לְיַד בְּאֵר שֶׁבַע.',
      'Rahat is in the south, in the Negev, next to Beer Sheva.'),
    slide('🐪', 'מִי הֵם הַבֶּדוּאִים?', 'Who are the Bedouin?',
      'הַבֶּדוּאִים הֵם עַם שֶׁחַי בַּמִּדְבָּר הַרְבֵּה שָׁנִים. פַּעַם הֵם גָּרוּ בְּאֹהָלִים וְטִיְּלוּ עִם גְּמַלִּים וְעִם צֹאן.',
      'The Bedouin are a people who have lived in the desert for many years. In the past they lived in tents and traveled with camels and sheep.'),
    slide('🏘️', 'מֵאֹהָלִים לְבָתִּים', 'From tents to houses',
      'רַהַט קָמָה בִּשְׁנַת 1971. הַיּוֹם הַבֶּדוּאִים גָּרִים בָּהּ בְּבָתִּים.',
      'Rahat was founded in 1971. Today the Bedouin live there in houses.'),
    slide('🗣️', 'שָׂפָה', 'Language',
      'הַתּוֹשָׁבִים בְּרַהַט מְדַבְּרִים עֲרָבִית וְגַם עִבְרִית. רֹב הַתּוֹשָׁבִים מוּסְלְמִים.',
      'The residents of Rahat speak Arabic and also Hebrew. Most residents are Muslim.'),
    slide('☕', 'הַכְנָסַת אוֹרְחִים', 'Hospitality',
      'הַבֶּדוּאִים מְפֻרְסָמִים בְּהַכְנָסַת אוֹרְחִים. כְּשֶׁאוֹרֵחַ בָּא, מַגִּישִׁים לוֹ קָפֶה וְתֵה.',
      'The Bedouin are famous for hospitality. When a guest comes, they serve coffee and tea.'),
    slide('🏫', 'בָּתֵּי סֵפֶר', 'Schools',
      'בְּרַהַט יֵשׁ הַרְבֵּה בָּתֵּי סֵפֶר. יְלָדִים וִילָדוֹת לוֹמְדִים עִבְרִית, עֲרָבִית וְאַנְגְּלִית.',
      'Rahat has many schools. Boys and girls learn Hebrew, Arabic and English.'),
    slide('🐑', 'בַּמִּדְבָּר', 'In the desert',
      'סְבִיב רַהַט יֵשׁ מִדְבָּר. אֶפְשָׁר לִרְאוֹת עֲדָרִים שֶׁל כְּבָשִׂים וְעִזִּים.',
      'Around Rahat there is desert. You can see flocks of sheep and goats.')
  ],
  memory: [
    mem('אֹהֶל', '⛺', 'פַּעַם הַבֶּדוּאִים גָּרוּ בְּאֹהָלִים.', 'In the past the Bedouin lived in tents.'),
    mem('גָּמָל', '🐪', 'הַבֶּדוּאִים טִיְּלוּ עִם גְּמַלִּים.', 'The Bedouin traveled with camels.'),
    mem('קָפֶה', '☕', 'מַגִּישִׁים קָפֶה לָאוֹרְחִים.', 'They serve coffee to guests.'),
    mem('בַּיִת', '🏠', 'הַיּוֹם גָּרִים בְּרַהַט בְּבָתִּים.', 'Today people in Rahat live in houses.'),
    mem('בֵּית סֵפֶר', '🏫', 'בְּרַהַט יֵשׁ הַרְבֵּה בָּתֵּי סֵפֶר.', 'Rahat has many schools.'),
    mem('כֶּבֶשׂ', '🐑', 'סְבִיב רַהַט יֵשׁ עֲדָרִים שֶׁל כְּבָשִׂים.', 'Around Rahat there are flocks of sheep.'),
    mem('מִדְבָּר', '🏜️', 'רַהַט נִמְצֵאת בְּתוֹךְ הַמִּדְבָּר.', 'Rahat is in the middle of the desert.'),
    mem('עֵז', '🐐', 'בַּנֶּגֶב יֵשׁ גַּם עִזִּים.', 'There are also goats in the Negev.')
  ],
  cloze: [
    cloze('רַהַט נִמְצֵאת בְּאֵזוֹר ___.', 'Rahat is in the ___ area.', ['הַנֶּגֶב', 'הַצָּפוֹן', 'מִישׁוֹר הַחוֹף']),
    cloze('פַּעַם הַבֶּדוּאִים גָּרוּ בְּ___.', 'In the past the Bedouin lived in ___.', ['אֹהָלִים', 'מִגְדָּלִים', 'סְפִינוֹת']),
    cloze('הַבֶּדוּאִים טִיְּלוּ בַּמִּדְבָּר עִם ___.', 'The Bedouin traveled in the desert with ___.', ['גְּמַלִּים', 'אוֹפַנַּיִם', 'מְכוֹנִיּוֹת']),
    cloze('כְּשֶׁאוֹרֵחַ בָּא, מַגִּישִׁים לוֹ ___.', 'When a guest comes, they serve him ___.', ['קָפֶה', 'שֶׁלֶג', 'אֶבֶן']),
    cloze('הַיּוֹם גָּרִים בְּרַהַט בְּ___.', 'Today people in Rahat live in ___.', ['בָּתִּים', 'אֳנִיּוֹת', 'מְעָרוֹת']),
    cloze('בְּרַהַט מְדַבְּרִים עֲרָבִית וְגַם ___.', 'In Rahat people speak Arabic and also ___.', ['עִבְרִית', 'סִינִית', 'יַפָּנִית'])
  ],
  places: [
    place('אֹהֶל בֶּדוּאִי', 'A Bedouin tent', ['desert', [['⛺', 200, 140, 120], ['🐪', 90, 192, 80], ['🔥', 322, 200, 56]]],
      'פַּעַם הַבֶּדוּאִים גָּרוּ בְּאֹהָלִים כָּאֵלֶּה.', 'In the past the Bedouin lived in tents like this.'),
    place('גְּמַלִּים בַּמִּדְבָּר', 'Camels in the desert', ['desert', [['🐪', 110, 160, 100], ['🐪', 290, 172, 86], ['🌵', 200, 215, 50]]],
      'הַבֶּדוּאִים טִיְּלוּ בַּמִּדְבָּר עִם גְּמַלִּים.', 'The Bedouin traveled in the desert with camels.'),
    place('קָפֶה לָאוֹרְחִים', 'Coffee for guests', ['old', [['☕', 130, 168, 90], ['🫖', 262, 165, 90], ['🍪', 200, 218, 56]]],
      'לָאוֹרְחִים מַגִּישִׁים קָפֶה וְתֵה.', 'Guests are served coffee and tea.'),
    place('בֵּית הַסֵּפֶר', 'The school', ['sky', [['🏫', 200, 128, 130], ['🚌', 80, 190, 66], ['🎒', 330, 195, 60]]],
      'בְּבֵית הַסֵּפֶר לוֹמְדִים עִבְרִית, עֲרָבִית וְאַנְגְּלִית.', 'At school they learn Hebrew, Arabic and English.'),
    place('עֵדֶר כְּבָשִׂים', 'A flock of sheep', ['desert', [['🐑', 90, 170, 70], ['🐑', 190, 185, 70], ['🐐', 290, 175, 70], ['🌵', 340, 212, 50]]],
      'סְבִיב רַהַט רוֹעִים כְּבָשִׂים וְעִזִּים.', 'Around Rahat they herd sheep and goats.'),
    place('הַבָּתִּים בְּרַהַט', 'The houses in Rahat', ['desert', [['🏘️', 200, 140, 130], ['🌳', 70, 192, 60], ['🌳', 335, 192, 60]]],
      'הַיּוֹם גָּרִים בְּרַהַט בְּבָתִּים.', 'Today people in Rahat live in houses.')
  ],
  quiz: [
    quiz('בְּאֵיזֶה אֵזוֹר נִמְצֵאת רַהַט?', 'In which area is Rahat?', ['בַּנֶּגֶב', 'בַּצָּפוֹן', 'בַּגָּלִיל', 'בִּירוּשָׁלַיִם'], 'רַהַט נִמְצֵאת בַּנֶּגֶב.', 'Rahat is in the Negev.'),
    quiz('מִי גָּר בְּרַהַט?', 'Who lives in Rahat?', ['בֶּדוּאִים', 'אַסְטְרוֹנָאוּטִים', 'דַּיָּגִים בַּיָּם', 'אַף אֶחָד'], 'בְּרַהַט גָּרִים בֶּדוּאִים.', 'Bedouin live in Rahat.'),
    quiz('בְּמָה גָּרוּ הַבֶּדוּאִים פַּעַם?', 'Where did the Bedouin live in the past?', ['בְּאֹהָלִים', 'בְּמִגְדָּלִים', 'בִּסְפִינוֹת', 'בְּמָטוֹסִים'], 'פַּעַם הַבֶּדוּאִים גָּרוּ בְּאֹהָלִים.', 'In the past the Bedouin lived in tents.'),
    quiz('עִם אֵיזוֹ חַיָּה הַבֶּדוּאִים טִיְּלוּ בַּמִּדְבָּר?', 'With which animal did the Bedouin travel in the desert?', ['גָּמָל', 'דּוֹלְפִין', 'פִּינְגְוִין', 'דֹּב קְטָבִי'], 'הַבֶּדוּאִים טִיְּלוּ בַּמִּדְבָּר עִם גְּמַלִּים.', 'The Bedouin traveled in the desert with camels.'),
    quiz('מָה מַגִּישִׁים לְאוֹרֵחַ?', 'What do they serve a guest?', ['קָפֶה וְתֵה', 'שֶׁלֶג', 'אֲבָנִים', 'מְכוֹנִית'], 'לָאוֹרֵחַ מַגִּישִׁים קָפֶה וְתֵה.', 'A guest is served coffee and tea.'),
    quiz('בְּאֵיזוֹ שָׁנָה קָמָה רַהַט?', 'In what year was Rahat founded?', ['1971', '1909', '1500', '2020'], 'רַהַט קָמָה בִּשְׁנַת 1971.', 'Rahat was founded in 1971.'),
    quiz('אֵיזוֹ שָׂפָה מְדַבְּרִים הַתּוֹשָׁבִים בְּרַהַט?', 'Which language do the residents of Rahat speak?', ['עֲרָבִית', 'סִינִית', 'יַפָּנִית', 'לָטִינִית'], 'בְּרַהַט מְדַבְּרִים עֲרָבִית.', 'In Rahat they speak Arabic.'),
    quiz('כַּמָּה תּוֹשָׁבִים בְּרַהַט?', 'How many people live in Rahat?', ['כִּ־75,000', 'כְּ־50', 'כְּ־10 מִילְיוֹן', 'כְּ־500'], 'בְּרַהַט גָּרִים כִּ־75,000 אֲנָשִׁים.', 'About 75,000 people live in Rahat.'),
    quiz('לְיַד אֵיזוֹ עִיר גְּדוֹלָה נִמְצֵאת רַהַט?', 'Next to which big city is Rahat?', ['בְּאֵר שֶׁבַע', 'חֵיפָה', 'צְפַת', 'מְטוּלָה'], 'רַהַט נִמְצֵאת לְיַד בְּאֵר שֶׁבַע.', 'Rahat is next to Beer Sheva.')
  ]
};
})();
