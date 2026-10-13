/* תֵּל אָבִיב — Tel Aviv. Template for the other cities: see the notes at the top of ../cities-data.js */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['tel-aviv'] = {
  title: { he: 'תֵּל אָבִיב־יָפוֹ', en: 'Tel Aviv-Yafo' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'מִישׁוֹר הַחוֹף', 'Coastal Plain'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּמְעַט חֲצִי מִילְיוֹן', 'almost half a million'),
    stat('📅', 'נוֹסְדָה', 'Founded', 'בִּשְׁנַת 1909', 'in 1909')
  ],
  slides: [
    slide('🏙️', 'תֵּל אָבִיב־יָפוֹ', 'Tel Aviv-Yafo',
      'תֵּל אָבִיב הִיא עִיר גְּדוֹלָה עַל חוֹף הַיָּם הַתִּיכוֹן. יֵשׁ בָּהּ חוֹף, מִגְדָּלִים וְהַרְבֵּה אֲנָשִׁים.',
      'Tel Aviv is a big city on the Mediterranean coast. It has a beach, skyscrapers and lots of people.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'תֵּל אָבִיב נִמְצֵאת בְּמֶרְכַּז יִשְׂרָאֵל, בְּמִישׁוֹר הַחוֹף.',
      'Tel Aviv is in the center of Israel, in the Coastal Plain.'),
    slide('🏷️', 'הַשֵּׁם', 'The name',
      '"תֵּל" הוּא גִּבְעָה עַתִּיקָה. "אָבִיב" הוּא עוֹנָה בַּשָּׁנָה. תֵּל אָבִיב = גִּבְעַת הָאָבִיב.',
      'A “tel” is an ancient hill. “Aviv” is spring (a season of the year). Tel Aviv = “Hill of Spring”.'),
    slide('📅', 'הַהִיסְטוֹרְיָה', 'History',
      'תֵּל אָבִיב נוֹסְדָה בִּשְׁנַת 1909, לְיַד יָפוֹ הָעַתִּיקָה. הִיא גָּדְלָה מַהֵר.',
      'Tel Aviv was founded in 1909, next to ancient Jaffa. It grew fast.'),
    slide('📜', '1948', '1948',
      'בִּשְׁנַת 1948 קָרְאוּ בְּתֵל אָבִיב אֶת מְגִלַּת הָעַצְמָאוּת. כָּךְ קָמָה מְדִינַת יִשְׂרָאֵל.',
      'In 1948 the Declaration of Independence was read in Tel Aviv. That is how the State of Israel was established.'),
    slide('⚪', 'הָעִיר הַלְּבָנָה', 'The White City',
      'בְּתֵל אָבִיב יֵשׁ הַרְבֵּה בָּתִּים לְבָנִים. לָכֵן קוֹרְאִים לָהּ "הָעִיר הַלְּבָנָה". בִּשְׁנַת 2003 בָּחֲרָה אוּנֶסְקוֹ בַּבָּתִּים הָאֵלֶּה כְּאוֹצָר שֶׁל כָּל הָעוֹלָם.',
      'Tel Aviv has many white buildings, so it is called “the White City”. In 2003 UNESCO chose these buildings as a treasure of the whole world.'),
    slide('🏖️', 'חוֹפִים', 'Beaches',
      'יֵשׁ בְּתֵל אָבִיב כְּ־14 קִילוֹמֶטֶר שֶׁל חוֹפִים. אֲנָשִׁים שׂוֹחִים, מְשַׂחֲקִים מַטְקוֹת וְרוֹכְבִים עַל אוֹפַנַּיִם.',
      'Tel Aviv has about 14 km of beaches. People swim, play matkot and ride bikes.'),
    slide('🌃', 'הָעִיר שֶׁלֹּא יְשֵׁנָה', 'The city that never sleeps',
      'בְּתֵל אָבִיב מִסְעָדוֹת וּבָתֵּי קָפֶה פְּתוּחִים גַּם בַּלַּיְלָה. לָכֵן אוֹמְרִים: "הָעִיר שֶׁלֹּא יְשֵׁנָה".',
      'In Tel Aviv, restaurants and cafés are open at night too. That is why people say: “the city that never sleeps”.'),
    slide('🏢', 'מִגְדָּלִים', 'Skyscrapers',
      'בְּתֵל אָבִיב יֵשׁ הַרְבֵּה מִגְדָּלִים גְּבוֹהִים. מִגְדְּלֵי עֲזְרִיאֵלִי הֵם שְׁלוֹשָׁה: מִגְדָּל עָגֹל, מִגְדָּל מְשֻׁלָּשׁ וּמִגְדָּל מְרֻבָּע.',
      'Tel Aviv has many tall towers. The Azrieli Towers are three: a round tower, a triangle tower and a square tower.'),
    slide('🍅', 'שׁוּק הַכַּרְמֶל', 'The Carmel Market',
      'בְּשׁוּק הַכַּרְמֶל קוֹנִים יְרָקוֹת, פֵּרוֹת וְאֹכֶל טָעִים. הַשּׁוּק צִבְעוֹנִי וְרוֹעֵשׁ.',
      'At the Carmel Market you buy vegetables, fruit and tasty food. The market is colorful and noisy.'),
    slide('⚓', 'יָפוֹ', 'Jaffa',
      'יָפוֹ הִיא עִיר עַתִּיקָה, וְיֵשׁ בָּהּ נָמֵל. הַיּוֹם יָפוֹ וְתֵל אָבִיב הֵן עִיר אַחַת.',
      'Jaffa is an ancient city and it has a port. Today Jaffa and Tel Aviv are one city.')
  ],
  memory: [
    mem('חוֹף', '🏖️', 'בְּתֵל אָבִיב יֵשׁ חוֹפִים יָפִים.', 'Tel Aviv has beautiful beaches.'),
    mem('מִגְדָּלִים', '🏙️', 'בְּתֵל אָבִיב יֵשׁ הַרְבֵּה מִגְדָּלִים גְּבוֹהִים.', 'Tel Aviv has many tall towers.'),
    mem('נָמֵל', '⚓', 'בְּיָפוֹ יֵשׁ נָמֵל עַתִּיק.', 'Jaffa has an ancient port.'),
    mem('אוֹפַנַּיִם', '🚲', 'רוֹכְבִים עַל אוֹפַנַּיִם בַּחוֹף וּבָעִיר.', 'People ride bikes on the beach and in the city.'),
    mem('שׁוּק', '🍅', 'בְּשׁוּק הַכַּרְמֶל קוֹנִים יְרָקוֹת וּפֵרוֹת.', 'At the Carmel Market you buy vegetables and fruit.'),
    mem('פָּלָאפֶל', '🥙', 'בְּתֵל אָבִיב אוֹכְלִים פָּלָאפֶל טָעִים.', 'In Tel Aviv people eat tasty falafel.'),
    mem('תֵּיאַטְרוֹן', '🎭', 'תֵּיאַטְרוֹן הַבִּימָה נִמְצָא בְּתֵל אָבִיב.', 'The Habima Theatre is in Tel Aviv.'),
    mem('מְגִלַּת הָעַצְמָאוּת', '📜', 'בִּשְׁנַת 1948 קָרְאוּ אֶת מְגִלַּת הָעַצְמָאוּת בְּתֵל אָבִיב.', 'In 1948 the Declaration of Independence was read in Tel Aviv.')
  ],
  cloze: [
    cloze('תֵּל אָבִיב נִמְצֵאת עַל שְׂפַת ___.', 'Tel Aviv is on the edge of the ___.', ['הַיָּם', 'הַמִּדְבָּר', 'הָהָר']),
    cloze('הַבָּתִּים הַלְּבָנִים הֵם "הָעִיר ___".', 'The white houses are “the ___ City”.', ['הַלְּבָנָה', 'הַיְּרֻקָּה', 'הַכְּחֻלָּה']),
    cloze('בְּתֵל אָבִיב רוֹכְבִים עַל ___.', 'In Tel Aviv people ride ___.', ['אוֹפַנַּיִם', 'גְּמַלִּים', 'סוּסִים']),
    cloze('בִּשְׁנַת 1948 קָרְאוּ בְּתֵל אָבִיב אֶת מְגִלַּת ___.', 'In 1948 the Scroll of ___ was read in Tel Aviv.', ['הָעַצְמָאוּת', 'הַחֹרֶף', 'הַשַּׁבָּת']),
    cloze('תֵּל אָבִיב נוֹסְדָה בִּשְׁנַת ___.', 'Tel Aviv was founded in ___.', ['1909', '1500', '2020']),
    cloze('בְּשׁוּק הַכַּרְמֶל קוֹנִים יְרָקוֹת וּ___.', 'At the Carmel Market you buy vegetables and ___.', ['פֵּרוֹת', 'מְכוֹנִיּוֹת', 'מְטוֹסִים']),
    cloze('תֵּל אָבִיב הִיא הָעִיר שֶׁלֹּא ___.', 'Tel Aviv is the city that never ___.', ['יְשֵׁנָה', 'אוֹכֶלֶת', 'רוֹקֶדֶת'])
  ],
  places: [
    place('הַחוֹף', 'The beach', ['beach', [['🏖️', 200, 112, 96], ['🌴', 62, 150, 74], ['🌴', 340, 150, 74], ['⛱️', 280, 208, 56]]],
      'בַּחוֹף שׂוֹחִים, מְשַׂחֲקִים מַטְקוֹת וְנִהְנִים מֵהַשֶּׁמֶשׁ.', 'At the beach people swim, play matkot and enjoy the sun.'),
    place('מִגְדְּלֵי עֲזְרִיאֵלִי', 'The Azrieli Towers', ['city', [], 'azrieli'],
      'מִגְדָּל עָגֹל, מִגְדָּל מְשֻׁלָּשׁ וּמִגְדָּל מְרֻבָּע.', 'A round tower, a triangle tower and a square tower.'),
    place('שׁוּק הַכַּרְמֶל', 'The Carmel Market', ['market', [['🍅', 90, 175, 70], ['🥕', 170, 180, 66], ['🍋', 250, 175, 66], ['🍇', 325, 180, 66], ['🥬', 130, 215, 56], ['🍉', 270, 218, 60]]],
      'בַּשּׁוּק קוֹנִים יְרָקוֹת, פֵּרוֹת וְאֹכֶל.', 'At the market you buy vegetables, fruit and food.'),
    place('נְמַל יָפוֹ', 'Jaffa Port', ['sea', [['⛵', 120, 150, 80], ['🚤', 290, 180, 66], ['⚓', 205, 215, 70], ['🐟', 330, 112, 40]]],
      'בְּנָמֵל יָפוֹ יֵשׁ סִירוֹת וְדַיָּגִים.', 'Jaffa Port has boats and fishermen.'),
    place('מִגְדַּל הַשָּׁעוֹן בְּיָפוֹ', 'The Clock Tower in Jaffa', ['sky', [['🌴', 70, 170, 66], ['🌴', 335, 175, 62]], 'clock'],
      'מִגְדַּל הַשָּׁעוֹן בְּיָפוֹ עוֹמֵד כְּבָר יוֹתֵר מִמֵּאָה שָׁנָה.', 'The Clock Tower in Jaffa has stood for more than a hundred years.'),
    place('פַּארְק הַיַּרְקוֹן', 'The Yarkon Park', ['green', [['🌳', 70, 150, 90], ['🌳', 330, 150, 90], ['🚲', 200, 175, 80], ['🦆', 130, 218, 46], ['🧺', 290, 215, 50]]],
      'בְּפַּארְק הַיַּרְקוֹן רוֹכְבִים עַל אוֹפַנַּיִם וְעוֹשִׂים פִּיקְנִיק.', 'In the Yarkon Park people ride bikes and have picnics.')
  ],
  quiz: [
    quiz('עַל חוֹף אֵיזֶה יָם נִמְצֵאת תֵּל אָבִיב?', 'Which sea is Tel Aviv on?', ['הַיָּם הַתִּיכוֹן', 'יַם סוּף', 'יַם הַמֶּלַח', 'הַכִּנֶּרֶת'], 'תֵּל אָבִיב עַל חוֹף הַיָּם הַתִּיכוֹן.', 'Tel Aviv is on the Mediterranean coast.'),
    quiz('בְּאֵיזוֹ שָׁנָה נוֹסְדָה תֵּל אָבִיב?', 'In what year was Tel Aviv founded?', ['1909', '1948', '1850', '2000'], 'תֵּל אָבִיב נוֹסְדָה בִּשְׁנַת 1909.', 'Tel Aviv was founded in 1909.'),
    quiz('מָה זֶה "אָבִיב"?', 'What is “aviv”?', ['עוֹנָה בַּשָּׁנָה', 'שֵׁם שֶׁל הַר', 'סוּג שֶׁל אֹכֶל', 'יָם'], 'אָבִיב הוּא עוֹנָה בַּשָּׁנָה.', 'Aviv is a season of the year — spring.'),
    quiz('אֵיזוֹ עִיר עַתִּיקָה נִמְצֵאת לְיַד תֵּל אָבִיב?', 'Which ancient city is next to Tel Aviv?', ['יָפוֹ', 'צְפַת', 'אֵילַת', 'עֲרָד'], 'יָפוֹ הִיא עִיר עַתִּיקָה, וְהִיא חֵלֶק מִתֵּל אָבִיב.', 'Jaffa is an ancient city and part of Tel Aviv today.'),
    quiz('מָה צֶבַע הַבָּתִּים בְּ"הָעִיר הַלְּבָנָה"?', 'What color are the houses in “the White City”?', ['לָבָן', 'אָדֹם', 'כָּחֹל', 'יָרֹק'], 'הַבָּתִּים לְבָנִים — לָכֵן "הָעִיר הַלְּבָנָה".', 'The houses are white — so “the White City”.'),
    quiz('מָה קָרָה בְּתֵל אָבִיב בִּשְׁנַת 1948?', 'What happened in Tel Aviv in 1948?', ['קָרְאוּ אֶת מְגִלַּת הָעַצְמָאוּת', 'בָּנוּ אֶת מִגְדְּלֵי עֲזְרִיאֵלִי', 'פָּתְחוּ אֶת הָרַכֶּבֶת הַקַּלָּה', 'מָצְאוּ אֶת הַיָּם הַתִּיכוֹן'], 'בִּשְׁנַת 1948 קָרְאוּ בְּתֵל אָבִיב אֶת מְגִלַּת הָעַצְמָאוּת.', 'In 1948 the Declaration of Independence was read in Tel Aviv.'),
    quiz('מָה אֶפְשָׁר לִרְאוֹת בְּתֵל אָבִיב?', 'What can you see in Tel Aviv?', ['חוֹף וּמִגְדָּלִים', 'מִדְבָּר וּגְמַלִּים', 'שֶׁלֶג וְהָרִים', 'יַעַר גָּדוֹל'], 'בְּתֵל אָבִיב יֵשׁ חוֹף וּמִגְדָּלִים.', 'Tel Aviv has a beach and towers.'),
    quiz('אֵיפֹה בְּיִשְׂרָאֵל נִמְצֵאת תֵּל אָבִיב?', 'Where in Israel is Tel Aviv?', ['בְּמִישׁוֹר הַחוֹף', 'בַּנֶּגֶב', 'בַּצָּפוֹן, בֶּהָרִים', 'בַּמִּדְבָּר'], 'תֵּל אָבִיב נִמְצֵאת בְּמִישׁוֹר הַחוֹף.', 'Tel Aviv is in the Coastal Plain.'),
    quiz('כַּמָּה אֲנָשִׁים גָּרִים בְּתֵל אָבִיב?', 'How many people live in Tel Aviv?', ['כִּמְעַט חֲצִי מִילְיוֹן', 'כְּמֵאָה אֲנָשִׁים', 'כְּ־2,000 אֲנָשִׁים', 'כְּעֶשְׂרָה מִילְיוֹן'], 'בְּתֵל אָבִיב גָּרִים כִּמְעַט חֲצִי מִילְיוֹן אֲנָשִׁים.', 'Almost half a million people live in Tel Aviv.'),
    quiz('מָה אוֹמְרִים עַל תֵּל אָבִיב?', 'What do people say about Tel Aviv?', ['הָעִיר שֶׁלֹּא יְשֵׁנָה', 'הָעִיר שֶׁל הַשֶּׁלֶג', 'הָעִיר הַקְּטַנָּה בְּיוֹתֵר', 'עִיר בַּמִּדְבָּר'], 'הַמִּסְעָדוֹת פְּתוּחוֹת גַּם בַּלַּיְלָה — "הָעִיר שֶׁלֹּא יְשֵׁנָה".', 'Restaurants are open at night — “the city that never sleeps”.'),
    quiz('מָה קוֹנִים בְּשׁוּק הַכַּרְמֶל?', 'What do you buy at the Carmel Market?', ['יְרָקוֹת וּפֵרוֹת', 'מְכוֹנִיּוֹת', 'מַחְשְׁבִים', 'אוֹפַנּוֹעִים'], 'בְּשׁוּק הַכַּרְמֶל קוֹנִים יְרָקוֹת וּפֵרוֹת.', 'At the Carmel Market you buy vegetables and fruit.')
  ]
};
})();
