/* בְּאֵר שֶׁבַע — Beer Sheva */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['beer-sheva'] = {
  title: { he: 'בְּאֵר שֶׁבַע', en: 'Beer Sheva' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'הַנֶּגֶב', 'The Negev'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּ־220,000', 'about 220,000'),
    stat('👑', 'כִּנּוּי', 'Nickname', 'בִּירַת הַנֶּגֶב', 'Capital of the Negev')
  ],
  slides: [
    slide('🐪', 'בְּאֵר שֶׁבַע', 'Beer Sheva',
      'בְּאֵר שֶׁבַע הִיא הָעִיר הַגְּדוֹלָה בַּנֶּגֶב. קוֹרְאִים לָהּ "בִּירַת הַנֶּגֶב".',
      'Beer Sheva is the biggest city in the Negev. It is called “the capital of the Negev”.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'בְּאֵר שֶׁבַע נִמְצֵאת בַּדָּרוֹם, בְּתוֹךְ הַנֶּגֶב — הַמִּדְבָּר הַגָּדוֹל שֶׁל יִשְׂרָאֵל.',
      'Beer Sheva is in the south, in the Negev — the big desert of Israel.'),
    slide('🏷️', 'הַשֵּׁם', 'The name',
      '"בְּאֵר" הִיא מָקוֹם עִם מַיִם בָּאֲדָמָה. "שֶׁבַע" הוּא הַמִּסְפָּר 7.',
      'A “be’er” is a well — a place with water in the ground. “Sheva” is the number seven.'),
    slide('🪣', 'הַבְּאֵר שֶׁל אַבְרָהָם', 'Abraham’s well',
      'לְפִי הַסִּפּוּר בַּתַּנַ"ךְ, אַבְרָהָם חָפַר בְּאֵר בַּמָּקוֹם הַזֶּה. הַיּוֹם אֶפְשָׁר לְבַקֵּר בְּ"בְּאֵר אַבְרָהָם".',
      'According to the story in the Bible, Abraham dug a well in this place. Today you can visit “Abraham’s Well”.'),
    slide('🏜️', 'מִדְבָּר', 'Desert',
      'בִּבְאֵר שֶׁבַע חַם בַּקַּיִץ וְיֵשׁ מְעַט גֶּשֶׁם. הָאֲוִיר יָבֵשׁ.',
      'Beer Sheva is hot in summer and has little rain. The air is dry.'),
    slide('🏚️', 'הָעִיר הָעַתִּיקָה', 'The Old City',
      'בִּבְאֵר שֶׁבַע יֵשׁ עִיר עַתִּיקָה קְטַנָּה. הַבָּתִּים בָּהּ נִבְנוּ לִפְנֵי יוֹתֵר מִמֵּאָה שָׁנָה.',
      'Beer Sheva has a small old city. The houses there were built more than a hundred years ago.'),
    slide('🎓', 'אוּנִיבֶרְסִיטָה', 'University',
      'בִּבְאֵר שֶׁבַע יֵשׁ אוּנִיבֶרְסִיטָה גְּדוֹלָה: אוּנִיבֶרְסִיטַת בֶּן־גּוּרְיוֹן בַּנֶּגֶב. הַרְבֵּה סְטוּדֶנְטִים לוֹמְדִים שָׁם.',
      'Beer Sheva has a big university: Ben-Gurion University of the Negev. Many students study there.'),
    slide('🛍️', 'שׁוּק בֶּדוּאִי', 'A Bedouin market',
      'בְּיוֹם חֲמִישִׁי יֵשׁ בִּבְאֵר שֶׁבַע שׁוּק בֶּדוּאִי גָּדוֹל.',
      'On Thursdays there is a big Bedouin market in Beer Sheva.'),
    slide('💻', 'הַיְי־טֶק', 'High-tech',
      'בִּבְאֵר שֶׁבַע יֵשׁ פַּארְק שֶׁל חֲבֵרוֹת מַחְשְׁבִים וְהַיְי־טֶק.',
      'Beer Sheva has a park of computer and high-tech companies.'),
    slide('🌳', 'פַּארְק נַחַל בְּאֵר שֶׁבַע', 'The Beer Sheva River Park',
      'בָּעִיר יֵשׁ פַּארְק גָּדוֹל עִם אֲגַם. אֶפְשָׁר לָלֶכֶת וְלִרְכֹּב עַל אוֹפַנַּיִם.',
      'The city has a big park with a lake. You can walk and ride bikes.')
  ],
  memory: [
    mem('בְּאֵר', '🪣', 'אַבְרָהָם חָפַר בְּאֵר בַּמָּקוֹם הַזֶּה.', 'Abraham dug a well in this place.'),
    mem('מִדְבָּר', '🏜️', 'בִּבְאֵר שֶׁבַע חַם וְיָבֵשׁ.', 'Beer Sheva is hot and dry.'),
    mem('גָּמָל', '🐪', 'בַּנֶּגֶב גָּרִים בֶּדוּאִים וְיֵשׁ גְּמַלִּים.', 'In the Negev there are Bedouin and camels.'),
    mem('שׁוּק', '🛍️', 'בְּיוֹם חֲמִישִׁי יֵשׁ שׁוּק בֶּדוּאִי.', 'On Thursdays there is a Bedouin market.'),
    mem('אוּנִיבֶרְסִיטָה', '🎓', 'אוּנִיבֶרְסִיטַת בֶּן־גּוּרְיוֹן נִמְצֵאת בִּבְאֵר שֶׁבַע.', 'Ben-Gurion University is in Beer Sheva.'),
    mem('מַחְשֵׁב', '💻', 'יֵשׁ בָּעִיר חֲבֵרוֹת הַיְי־טֶק.', 'The city has high-tech companies.'),
    mem('פַּארְק', '🌳', 'בַּפַּארְק יֵשׁ אֲגַם וְעֵצִים.', 'The park has a lake and trees.'),
    mem('שֶׁמֶשׁ', '☀️', 'בַּקַּיִץ בִּבְאֵר שֶׁבַע חַם מְאוֹד.', 'In summer it is very hot in Beer Sheva.')
  ],
  cloze: [
    cloze('בְּאֵר שֶׁבַע נִמְצֵאת בְּאֵזוֹר ___.', 'Beer Sheva is in the ___ area.', ['הַנֶּגֶב', 'הַצָּפוֹן', 'מִישׁוֹר הַחוֹף']),
    cloze('קוֹרְאִים לָהּ "בִּירַת ___".', 'It is called “the capital of the ___”.', ['הַנֶּגֶב', 'הַיָּם', 'הַחֹרֶף']),
    cloze('"בְּאֵר" הִיא מָקוֹם עִם ___ בָּאֲדָמָה.', 'A “be’er” is a place with ___ in the ground.', ['מַיִם', 'חוֹל', 'אֵשׁ']),
    cloze('בִּבְאֵר שֶׁבַע חַם בַּקַּיִץ, וְיֵשׁ מְעַט ___.', 'Beer Sheva is hot in summer, and there is little ___.', ['גֶּשֶׁם', 'חוֹל', 'שֶׁלֶג חַם']),
    cloze('בְּיוֹם חֲמִישִׁי יֵשׁ שׁוּק ___ גָּדוֹל.', 'On Thursday there is a big ___ market.', ['בֶּדוּאִי', 'יַמִּי', 'שֶׁלֶג']),
    cloze('בִּבְאֵר שֶׁבַע יֵשׁ פַּארְק גָּדוֹל עִם ___.', 'Beer Sheva has a big park with a ___.', ['אֲגַם', 'שֶׁלֶג', 'הַר']),
    cloze('בִּבְאֵר שֶׁבַע לוֹמְדִים בְּאוּנִיבֶרְסִיטַת ___.', 'In Beer Sheva people study at ___ University.', ['בֶּן־גּוּרְיוֹן', 'הַכֹּתֶל', 'הַנָּמֵל'])
  ],
  places: [
    place('הַבְּאֵר שֶׁל אַבְרָהָם', 'Abraham’s Well', ['desert', [['⛲', 200, 150, 100], ['🌳', 80, 168, 64], ['🐪', 325, 185, 64]]],
      'לְפִי הַסִּפּוּר, אַבְרָהָם חָפַר בָּאֵר בַּמָּקוֹם הַזֶּה.', 'According to the story, Abraham dug a well in this place.'),
    place('שׁוּק הַבֶּדוּאִים', 'The Bedouin market', ['desert', [['🐪', 85, 160, 80], ['⛺', 210, 145, 90], ['🐐', 325, 188, 60], ['🧺', 150, 218, 50]]],
      'בְּיוֹם חֲמִישִׁי יֵשׁ שׁוּק בֶּדוּאִי גָּדוֹל.', 'On Thursday there is a big Bedouin market.'),
    place('אוּנִיבֶרְסִיטַת בֶּן־גּוּרְיוֹן', 'Ben-Gurion University', ['sky', [['🏫', 200, 130, 130], ['🎓', 70, 185, 66], ['📚', 335, 185, 66]]],
      'בָּאוּנִיבֶרְסִיטָה לוֹמְדִים סְטוּדֶנְטִים רַבִּים.', 'Many students study at the university.'),
    place('פַּארְק נַחַל בְּאֵר שֶׁבַע', 'The Beer Sheva River Park', ['green', [['🌳', 70, 158, 84], ['🦆', 200, 232, 44], ['🚲', 320, 190, 80]]],
      'בַּפַּארְק יֵשׁ אֲגַם, וְאֶפְשָׁר לִרְכֹּב עַל אוֹפַנַּיִם.', 'The park has a lake, and you can ride bikes.'),
    place('הַמִּדְבָּר', 'The desert', ['desert', [['🌵', 90, 170, 80], ['🐪', 300, 180, 90], ['☀️', 330, 58, 50]]],
      'הַנֶּגֶב הוּא מִדְבָּר: חַם, יָבֵשׁ וְיֵשׁ בּוֹ מְעַט גֶּשֶׁם.', 'The Negev is a desert: hot, dry, with little rain.'),
    place('הָעִיר הָעַתִּיקָה', 'The Old City', ['old', [['🏚️', 110, 150, 90], ['🏘️', 290, 152, 90], ['🚶', 200, 208, 60]]],
      'הַבָּתִּים בָּעִיר הָעַתִּיקָה נִבְנוּ לִפְנֵי יוֹתֵר מִמֵּאָה שָׁנָה.', 'The houses in the Old City were built more than a hundred years ago.')
  ],
  quiz: [
    quiz('בְּאֵיזֶה אֵזוֹר נִמְצֵאת בְּאֵר שֶׁבַע?', 'In which area is Beer Sheva?', ['בַּנֶּגֶב', 'בַּצָּפוֹן', 'בְּמִישׁוֹר הַחוֹף', 'בְּהָרֵי יְהוּדָה'], 'בְּאֵר שֶׁבַע נִמְצֵאת בַּנֶּגֶב.', 'Beer Sheva is in the Negev.'),
    quiz('מָה הַכִּנּוּי שֶׁל בְּאֵר שֶׁבַע?', 'What is Beer Sheva’s nickname?', ['בִּירַת הַנֶּגֶב', 'הָעִיר הַלְּבָנָה', 'הָעִיר שֶׁלֹּא יְשֵׁנָה', 'עִיר הַשֶּׁלֶג'], 'קוֹרְאִים לָהּ "בִּירַת הַנֶּגֶב".', 'It is called “the capital of the Negev”.'),
    quiz('מָה זֶה "בְּאֵר"?', 'What is a “be’er”?', ['מָקוֹם עִם מַיִם בָּאֲדָמָה', 'הַר גָּבוֹהַּ', 'שׁוּק', 'חוֹף'], 'בְּאֵר הִיא מָקוֹם עִם מַיִם בָּאֲדָמָה.', 'A be’er is a place with water in the ground.'),
    quiz('מִי חָפַר בְּאֵר בִּבְאֵר שֶׁבַע, לְפִי הַסִּפּוּר?', 'Who dug a well in Beer Sheva, according to the story?', ['אַבְרָהָם', 'נֹחַ', 'מֹשֶׁה', 'שִׁמְשׁוֹן'], 'אַבְרָהָם חָפַר בְּאֵר בַּמָּקוֹם הַזֶּה.', 'Abraham dug a well in this place.'),
    quiz('מָה יֵשׁ בִּבְאֵר שֶׁבַע בְּיוֹם חֲמִישִׁי?', 'What is there in Beer Sheva on Thursdays?', ['שׁוּק בֶּדוּאִי גָּדוֹל', 'מִשְׂחַק כַּדּוּרֶגֶל', 'שֶׁלֶג', 'פֶּסְטִיבַּל יָם'], 'בְּיוֹם חֲמִישִׁי יֵשׁ שׁוּק בֶּדוּאִי גָּדוֹל.', 'On Thursdays there is a big Bedouin market.'),
    quiz('אֵיזוֹ אוּנִיבֶרְסִיטָה יֵשׁ בִּבְאֵר שֶׁבַע?', 'Which university is in Beer Sheva?', ['אוּנִיבֶרְסִיטַת בֶּן־גּוּרְיוֹן', 'הַטֶּכְנִיּוֹן', 'אוּנִיבֶרְסִיטַת תֵּל אָבִיב', 'הָאוּנִיבֶרְסִיטָה הָעִבְרִית'], 'בִּבְאֵר שֶׁבַע יֵשׁ אוּנִיבֶרְסִיטַת בֶּן־גּוּרְיוֹן.', 'Ben-Gurion University is in Beer Sheva.'),
    quiz('אֵיךְ מֶזֶג הָאֲוִיר בִּבְאֵר שֶׁבַע בַּקַּיִץ?', 'What is the weather in Beer Sheva in summer?', ['חַם וְיָבֵשׁ', 'קַר וְשֶׁלֶג', 'גָּשׁוּם', 'מְעֻנָּן'], 'בַּקַּיִץ בִּבְאֵר שֶׁבַע חַם וְיָבֵשׁ.', 'In summer Beer Sheva is hot and dry.'),
    quiz('מָה יֵשׁ בְּפַארְק נַחַל בְּאֵר שֶׁבַע?', 'What is in the Beer Sheva River Park?', ['אֲגַם', 'יָם', 'שֶׁלֶג', 'מִגְדָּלִים'], 'בַּפַּארְק יֵשׁ אֲגַם.', 'The park has a lake.'),
    quiz('מָה הַמִּסְפָּר שֶׁבַּשֵּׁם "בְּאֵר שֶׁבַע"?', 'Which number is in the name “Beer Sheva”?', ['7', '3', '10', '100'], '"שֶׁבַע" הוּא הַמִּסְפָּר 7.', '“Sheva” is the number seven.'),
    quiz('כַּמָּה תּוֹשָׁבִים בִּבְאֵר שֶׁבַע?', 'How many people live in Beer Sheva?', ['כִּ־220,000', 'כְּעֶשְׂרָה', 'כְּ־10 מִילְיוֹן', 'כְּ־2,000'], 'בִּבְאֵר שֶׁבַע גָּרִים כִּ־220,000 אֲנָשִׁים.', 'About 220,000 people live in Beer Sheva.')
  ]
};
})();
