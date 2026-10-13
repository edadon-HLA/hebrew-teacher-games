/* אַשְׁדּוֹד — Ashdod */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['ashdod'] = {
  title: { he: 'אַשְׁדּוֹד', en: 'Ashdod' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'מִישׁוֹר הַחוֹף', 'Coastal Plain'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּ־225,000', 'about 225,000'),
    stat('⚓', 'מְיֻחָד', 'Special', 'הַנָּמֵל הַגָּדוֹל בְּיוֹתֵר בְּיִשְׂרָאֵל', 'Israel’s biggest port')
  ],
  slides: [
    slide('🚢', 'אַשְׁדּוֹד', 'Ashdod',
      'אַשְׁדּוֹד הִיא עִיר גְּדוֹלָה עַל חוֹף הַיָּם הַתִּיכוֹן. יֵשׁ בָּהּ נָמֵל גָּדוֹל וְחוֹפִים יָפִים.',
      'Ashdod is a big city on the Mediterranean coast. It has a big port and beautiful beaches.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'אַשְׁדּוֹד נִמְצֵאת בְּמִישׁוֹר הַחוֹף, מִדָּרוֹם לְתֵל אָבִיב.',
      'Ashdod is in the Coastal Plain, south of Tel Aviv.'),
    slide('⚓', 'הַנָּמֵל', 'The port',
      'בְּאַשְׁדּוֹד יֵשׁ הַנָּמֵל הַגָּדוֹל בְּיוֹתֵר בְּיִשְׂרָאֵל. סְפִינוֹת מְבִיאוֹת לָאָרֶץ מְכוֹנִיּוֹת, אֹכֶל וְהַרְבֵּה דְּבָרִים.',
      'Ashdod has Israel’s biggest port. Ships bring machines, food and many things to the country.'),
    slide('📦', 'מְכִלּוֹת', 'Containers',
      'בַּנָּמֵל יֵשׁ מְכִלּוֹת גְּדוֹלוֹת וְעַגּוּרִים גְּבוֹהִים. הָעַגּוּרִים מַעֲלִים אֶת הַמְּכִלּוֹת מִן הַסְּפִינוֹת.',
      'At the port there are big containers and tall cranes. The cranes lift the containers off the ships.'),
    slide('🏺', 'עִיר עַתִּיקָה', 'An ancient city',
      'כְּבָר לִפְנֵי אַלְפֵי שָׁנִים הָיְתָה בַּמָּקוֹם הַזֶּה עִיר בְּשֵׁם אַשְׁדּוֹד. הַפְּלִשְׁתִּים גָּרוּ בָּהּ. הִיא נִזְכֶּרֶת בַּתַּנַ"ךְ.',
      'Thousands of years ago there was already a city named Ashdod here. The Philistines lived in it. It is mentioned in the Bible.'),
    slide('🏙️', 'עִיר חֲדָשָׁה', 'A new city',
      'הָעִיר הַמּוֹדֶרְנִית אַשְׁדּוֹד נוֹסְדָה בִּשְׁנַת 1956. הִיא גָּדְלָה מַהֵר וְהָפְכָה לְאַחַת הֶעָרִים הַגְּדוֹלוֹת בְּיִשְׂרָאֵל.',
      'The modern city of Ashdod was founded in 1956. It grew fast and became one of the big cities in Israel.'),
    slide('⛵', 'הַמָּרִינָה', 'The marina',
      'בְּאַשְׁדּוֹד יֵשׁ מָרִינָה עִם סִירוֹת מִפְרָשׂ, מִסְעָדוֹת וְטַיֶּלֶת יָפָה לְיַד הַיָּם.',
      'Ashdod has a marina with sailboats, restaurants and a beautiful promenade by the sea.'),
    slide('🏰', 'מְצוּדַת אַשְׁדּוֹד־יָם', 'The Ashdod-Yam fortress',
      'בְּאַשְׁדּוֹד־יָם יֵשׁ מְצוּדָה עַתִּיקָה עַל שְׂפַת הַיָּם. הִיא נִבְנְתָה לִפְנֵי יוֹתֵר מֵאֶלֶף שָׁנִים.',
      'In Ashdod-Yam there is an ancient fortress on the seashore. It was built more than a thousand years ago.'),
    slide('🏖️', 'חוֹפִים', 'Beaches',
      'בְּאַשְׁדּוֹד יֵשׁ חוֹפִים יָפִים. הַקַּיִץ חַם, וַאֲנָשִׁים בָּאִים לִשְׂחוֹת וְלִהְיוֹת עִם הַמִּשְׁפָּחָה.',
      'Ashdod has beautiful beaches. Summer is hot, and people come to swim and be with their families.')
  ],
  memory: [
    mem('נָמֵל', '⚓', 'בְּאַשְׁדּוֹד יֵשׁ הַנָּמֵל הַגָּדוֹל בְּיוֹתֵר.', 'Ashdod has the biggest port.'),
    mem('סְפִינָה', '🚢', 'סְפִינוֹת גְּדוֹלוֹת מַגִּיעוֹת לַנָּמֵל.', 'Big ships arrive at the port.'),
    mem('מְכִלָּה', '📦', 'בַּנָּמֵל יֵשׁ מְכִלּוֹת גְּדוֹלוֹת.', 'The port has big containers.'),
    mem('עָגוּר', '🏗️', 'הָעָגוּר מַעֲלֶה אֶת הַמְּכִלּוֹת.', 'The crane lifts the containers.'),
    mem('סִירָה', '⛵', 'בַּמָּרִינָה יֵשׁ סִירוֹת מִפְרָשׂ.', 'The marina has sailboats.'),
    mem('מְצוּדָה', '🏰', 'בְּאַשְׁדּוֹד־יָם יֵשׁ מְצוּדָה עַתִּיקָה.', 'Ashdod-Yam has an ancient fortress.'),
    mem('חוֹף', '🏖️', 'בְּאַשְׁדּוֹד יֵשׁ חוֹפִים יָפִים.', 'Ashdod has beautiful beaches.'),
    mem('חֶרֶס', '🏺', 'בְּאַשְׁדּוֹד הָעַתִּיקָה גָּרוּ הַפְּלִשְׁתִּים.', 'The Philistines lived in ancient Ashdod.')
  ],
  cloze: [
    cloze('אַשְׁדּוֹד נִמְצֵאת עַל חוֹף הַיָּם ___.', 'Ashdod is on the coast of the ___ Sea.', ['הַתִּיכוֹן', 'הַמֶּלַח', 'סוּף']),
    cloze('בְּאַשְׁדּוֹד יֵשׁ ___ גָּדוֹל.', 'Ashdod has a big ___.', ['נָמֵל', 'הַר', 'מִדְבָּר']),
    cloze('סְפִינוֹת מְבִיאוֹת לַנָּמֵל ___.', 'Ships bring ___ to the port.', ['מְכִלּוֹת', 'שֶׁלֶג', 'עֲנָנִים']),
    cloze('הָעִיר הַמּוֹדֶרְנִית אַשְׁדּוֹד נוֹסְדָה בִּשְׁנַת ___.', 'The modern city of Ashdod was founded in ___.', ['1956', '1500', '2020']),
    cloze('הַפְּלִשְׁתִּים גָּרוּ בְּאַשְׁדּוֹד ___.', 'The Philistines lived in ___ Ashdod.', ['הָעַתִּיקָה', 'הַחֲדָשָׁה', 'הַקְּטַנְטַנָּה']),
    cloze('בַּמָּרִינָה יֵשׁ סִירוֹת ___.', 'In the marina there are ___ boats.', ['מִפְרָשׂ', 'שֶׁלֶג', 'גְּמַלִּים'])
  ],
  places: [
    place('נְמַל אַשְׁדּוֹד', 'Ashdod Port', ['sea', [['🚢', 200, 148, 120], ['📦', 70, 215, 60], ['🏗️', 335, 130, 64], ['📦', 330, 215, 56]]],
      'בְּנָמֵל אַשְׁדּוֹד יֵשׁ סְפִינוֹת, מְכִלּוֹת וְעַגּוּרִים.', 'Ashdod Port has ships, containers and cranes.'),
    place('הָעַגּוּרִים', 'The cranes', ['sky', [['🏗️', 110, 140, 110], ['🏗️', 290, 150, 100], ['📦', 200, 210, 64]]],
      'הָעַגּוּרִים מַעֲלִים מְכִלּוֹת מִן הַסְּפִינוֹת.', 'The cranes lift containers off the ships.'),
    place('הַמָּרִינָה', 'The marina', ['sea', [['⛵', 110, 150, 84], ['⛵', 290, 165, 76], ['🚤', 200, 210, 64], ['☀️', 335, 58, 50]]],
      'בַּמָּרִינָה יֵשׁ סִירוֹת מִפְרָשׂ וּמִסְעָדוֹת.', 'The marina has sailboats and restaurants.'),
    place('מְצוּדַת אַשְׁדּוֹד־יָם', 'The Ashdod-Yam fortress', ['beach', [['🏰', 200, 120, 130], ['🌊', 80, 170, 56]]],
      'הַמְּצוּדָה הָעַתִּיקָה עוֹמֶדֶת עַל שְׂפַת הַיָּם.', 'The ancient fortress stands on the seashore.'),
    place('הַחוֹף', 'The beach', ['beach', [['🏖️', 200, 112, 92], ['🌴', 62, 150, 70], ['⛱️', 300, 205, 56], ['🐚', 120, 228, 36]]],
      'בַּחוֹף שׂוֹחִים וְנִהְנִים מֵהַשֶּׁמֶשׁ.', 'At the beach people swim and enjoy the sun.'),
    place('אַשְׁדּוֹד הָעַתִּיקָה', 'Ancient Ashdod', ['old', [['🏺', 110, 150, 90], ['🏚️', 290, 150, 90], ['📜', 200, 210, 60]]],
      'בְּאַשְׁדּוֹד הָעַתִּיקָה גָּרוּ הַפְּלִשְׁתִּים.', 'The Philistines lived in ancient Ashdod.')
  ],
  quiz: [
    quiz('בְּאֵיזֶה אֵזוֹר נִמְצֵאת אַשְׁדּוֹד?', 'In which area is Ashdod?', ['בְּמִישׁוֹר הַחוֹף', 'בַּנֶּגֶב', 'בַּגָּלִיל', 'בְּהָרֵי יְהוּדָה'], 'אַשְׁדּוֹד נִמְצֵאת בְּמִישׁוֹר הַחוֹף.', 'Ashdod is in the Coastal Plain.'),
    quiz('מָה מְיֻחָד בְּאַשְׁדּוֹד?', 'What is special about Ashdod?', ['הַנָּמֵל הַגָּדוֹל בְּיוֹתֵר בְּיִשְׂרָאֵל', 'הָהָר הַגָּבוֹהַּ בְּיוֹתֵר', 'הַמִּדְבָּר הַגָּדוֹל', 'הַשֶּׁלֶג'], 'בְּאַשְׁדּוֹד יֵשׁ הַנָּמֵל הַגָּדוֹל בְּיוֹתֵר בְּיִשְׂרָאֵל.', 'Ashdod has Israel’s biggest port.'),
    quiz('מָה מַגִּיעַ לַנָּמֵל?', 'What arrives at the port?', ['סְפִינוֹת', 'גְּמַלִּים', 'מְטוֹסִים', 'רַכָּבוֹת'], 'סְפִינוֹת גְּדוֹלוֹת מַגִּיעוֹת לַנָּמֵל.', 'Big ships arrive at the port.'),
    quiz('מָה מַעֲלֶה אֶת הַמְּכִלּוֹת מִן הַסְּפִינָה?', 'What lifts the containers off the ship?', ['עָגוּר', 'סִירָה', 'סוּס', 'עֵץ'], 'הָעָגוּר מַעֲלֶה אֶת הַמְּכִלּוֹת.', 'The crane lifts the containers.'),
    quiz('מִי גָּר בְּאַשְׁדּוֹד הָעַתִּיקָה?', 'Who lived in ancient Ashdod?', ['הַפְּלִשְׁתִּים', 'הַבֶּדוּאִים', 'הַדַּיָּגִים מֵאֵילַת', 'אַף אֶחָד'], 'בְּאַשְׁדּוֹד הָעַתִּיקָה גָּרוּ הַפְּלִשְׁתִּים.', 'The Philistines lived in ancient Ashdod.'),
    quiz('בְּאֵיזוֹ שָׁנָה נוֹסְדָה הָעִיר הַמּוֹדֶרְנִית אַשְׁדּוֹד?', 'In what year was the modern city of Ashdod founded?', ['1956', '1909', '1500', '2020'], 'הָעִיר הַמּוֹדֶרְנִית אַשְׁדּוֹד נוֹסְדָה בִּשְׁנַת 1956.', 'The modern city of Ashdod was founded in 1956.'),
    quiz('מָה יֵשׁ בַּמָּרִינָה?', 'What is in the marina?', ['סִירוֹת מִפְרָשׂ', 'גְּמַלִּים', 'שֶׁלֶג', 'הָרִים'], 'בַּמָּרִינָה יֵשׁ סִירוֹת מִפְרָשׂ.', 'The marina has sailboats.'),
    quiz('כַּמָּה תּוֹשָׁבִים בְּאַשְׁדּוֹד?', 'How many people live in Ashdod?', ['כִּ־225,000', 'כְּ־225', 'כְּ־10 מִילְיוֹן', 'כְּ־2,000'], 'בְּאַשְׁדּוֹד גָּרִים כִּ־225,000 אֲנָשִׁים.', 'About 225,000 people live in Ashdod.')
  ]
};
})();
