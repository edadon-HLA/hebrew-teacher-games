/* עֲרָד — Arad */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['arad'] = {
  title: { he: 'עֲרָד', en: 'Arad' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'הַנֶּגֶב', 'The Negev'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּ־26,000', 'about 26,000'),
    stat('📅', 'נוֹסְדָה', 'Founded', 'בִּשְׁנַת 1962', 'in 1962')
  ],
  slides: [
    slide('🌬️', 'עֲרָד', 'Arad',
      'עֲרָד הִיא עִיר קְטַנָּה בַּנֶּגֶב. הָאֲוִיר בָּהּ יָבֵשׁ וְנָקִי.',
      'Arad is a small city in the Negev. The air there is dry and clean.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'עֲרָד נִמְצֵאת בַּדָּרוֹם, לְיַד יַם הַמֶּלַח וּמְצָדָה.',
      'Arad is in the south, near the Dead Sea and Masada.'),
    slide('⛰️', 'גְּבוֹהָה', 'High up',
      'עֲרָד גְּבוֹהָה — כְּ־600 מֶטֶר מֵעַל הַיָּם. לָכֵן הָאֲוִיר בָּהּ נָעִים.',
      'Arad is high — about 600 m above sea level. That is why the air there is pleasant.'),
    slide('📅', 'עִיר חֲדָשָׁה', 'A new city',
      'עֲרָד נוֹסְדָה בִּשְׁנַת 1962. הִיא עִיר חֲדָשָׁה שֶׁבָּנוּ בְּאֶמְצַע הַמִּדְבָּר.',
      'Arad was founded in 1962. It is a new city built in the middle of the desert.'),
    slide('🌬️', 'אֲוִיר נָקִי', 'Clean air',
      'אֲנָשִׁים רַבִּים בָּאִים לַעֲרָד בִּגְלַל הָאֲוִיר הַיָּבֵשׁ וְהַנָּקִי. הוּא טוֹב לַנְּשִׁימָה.',
      'Many people come to Arad because of the dry, clean air. It is good for breathing.'),
    slide('🏺', 'תֵּל עֲרָד', 'Tel Arad',
      'לְיַד הָעִיר יֵשׁ "תֵּל עֲרָד" — עִיר עַתִּיקָה מִלִּפְנֵי אַלְפֵי שָׁנִים.',
      'Next to the city is “Tel Arad” — an ancient city from thousands of years ago.'),
    slide('🧂', 'יַם הַמֶּלַח', 'The Dead Sea',
      'מֵעֲרָד נוֹסְעִים כַּחֲצִי שָׁעָה לְיַם הַמֶּלַח — הַמָּקוֹם הַנָּמוּךְ בָּעוֹלָם.',
      'From Arad it is about half an hour’s drive to the Dead Sea — the lowest place in the world.'),
    slide('⛰️', 'מְצָדָה', 'Masada',
      'לֹא רָחוֹק מֵעֲרָד נִמְצֵאת מְצָדָה — הַר עִם מִבְצָר עַתִּיק.',
      'Not far from Arad is Masada — a mountain with an ancient fortress.'),
    slide('🎸', 'פֶּסְטִיבַּל', 'A festival',
      'מִדֵּי שָׁנָה יֵשׁ בַּעֲרָד פֶּסְטִיבַּל מוּזִיקָה. מוּזִיקָאִים וְאֲנָשִׁים רַבִּים בָּאִים אֵלָיו.',
      'Every year Arad has a music festival. Musicians and many people come to it.')
  ],
  memory: [
    mem('אֲוִיר', '🌬️', 'הָאֲוִיר בַּעֲרָד יָבֵשׁ וְנָקִי.', 'The air in Arad is dry and clean.'),
    mem('מִדְבָּר', '🏜️', 'עֲרָד נִמְצֵאת בְּאֶמְצַע הַמִּדְבָּר.', 'Arad is in the middle of the desert.'),
    mem('מְצָדָה', '⛰️', 'לֹא רָחוֹק מֵעֲרָד נִמְצֵאת מְצָדָה.', 'Masada is not far from Arad.'),
    mem('יַם הַמֶּלַח', '🧂', 'מֵעֲרָד נוֹסְעִים לְיַם הַמֶּלַח.', 'From Arad you drive to the Dead Sea.'),
    mem('שֶׁמֶשׁ', '☀️', 'בַּעֲרָד יֵשׁ הַרְבֵּה שֶׁמֶשׁ.', 'Arad has lots of sun.'),
    mem('מוּזִיקָה', '🎸', 'בַּעֲרָד יֵשׁ פֶּסְטִיבַּל מוּזִיקָה.', 'Arad has a music festival.'),
    mem('עִיר עַתִּיקָה', '🏺', 'תֵּל עֲרָד הוּא עִיר עַתִּיקָה.', 'Tel Arad is an ancient city.'),
    mem('בַּיִת', '🏘️', 'עֲרָד הִיא עִיר חֲדָשָׁה עִם בָּתִּים חֲדָשִׁים.', 'Arad is a new city with new houses.')
  ],
  cloze: [
    cloze('עֲרָד נִמְצֵאת בְּאֵזוֹר ___.', 'Arad is in the ___ area.', ['הַנֶּגֶב', 'הַצָּפוֹן', 'מִישׁוֹר הַחוֹף']),
    cloze('הָאֲוִיר בַּעֲרָד יָבֵשׁ וְ___.', 'The air in Arad is dry and ___.', ['נָקִי', 'רָטֹב', 'מְזֻהָם']),
    cloze('עֲרָד נוֹסְדָה בִּשְׁנַת ___.', 'Arad was founded in ___.', ['1962', '1500', '2020']),
    cloze('לְיַד עֲרָד יֵשׁ יַם ___.', 'Near Arad there is the ___ Sea.', ['הַמֶּלַח', 'סוּף', 'הַתִּיכוֹן']),
    cloze('מְצָדָה הִיא הַר עִם ___ עַתִּיק.', 'Masada is a mountain with an ancient ___.', ['מִבְצָר', 'נָמֵל', 'שׁוּק']),
    cloze('בַּעֲרָד יֵשׁ פֶּסְטִיבַּל ___.', 'Arad has a ___ festival.', ['מוּזִיקָה', 'צְלִילָה', 'שֶׁלֶג'])
  ],
  places: [
    place('הָעִיר בַּמִּדְבָּר', 'The city in the desert', ['desert', [['🏘️', 200, 150, 110], ['☀️', 332, 58, 50], ['🌵', 80, 205, 60]]],
      'עֲרָד הִיא עִיר בְּאֶמְצַע הַמִּדְבָּר.', 'Arad is a city in the middle of the desert.'),
    place('תֵּל עֲרָד', 'Tel Arad', ['old', [['🏺', 110, 150, 90], ['🏚️', 290, 150, 90], ['🪨', 200, 212, 60]]],
      'תֵּל עֲרָד הוּא עִיר עַתִּיקָה מִלִּפְנֵי אַלְפֵי שָׁנִים.', 'Tel Arad is an ancient city from thousands of years ago.'),
    place('מְצָדָה', 'Masada', ['desert', [['⛰️', 200, 128, 150], ['🏰', 200, 82, 56]]],
      'מְצָדָה הִיא הַר עִם מִבְצָר עַתִּיק.', 'Masada is a mountain with an ancient fortress.'),
    place('יַם הַמֶּלַח', 'The Dead Sea', ['sea', [['🧂', 100, 205, 64], ['🏊', 300, 178, 70], ['☀️', 335, 58, 50]]],
      'בְּיַם הַמֶּלַח אֶפְשָׁר לָצוּף עַל הַמַּיִם.', 'In the Dead Sea you can float on the water.'),
    place('הַכִּכָּר', 'The square', ['city', [['🌴', 90, 160, 90], ['🏪', 290, 165, 80], ['🚶', 200, 212, 64]]],
      'בְּלֵב עֲרָד יֵשׁ כִּכָּר עִם עֵצִים וַחֲנוּיוֹת.', 'In the center of Arad there is a square with trees and shops.'),
    place('הָרְחוֹבוֹת בַּעֲרָד', 'The streets of Arad', ['desert', [['🏘️', 120, 150, 100], ['🌳', 292, 170, 70], ['🚲', 200, 208, 66]]],
      'בַּעֲרָד אֶפְשָׁר לִרְכֹּב עַל אוֹפַנַּיִם בֵּין הַבָּתִּים.', 'In Arad you can ride a bike between the houses.')
  ],
  quiz: [
    quiz('בְּאֵיזֶה אֵזוֹר נִמְצֵאת עֲרָד?', 'In which area is Arad?', ['בַּנֶּגֶב', 'בַּצָּפוֹן', 'בְּמִישׁוֹר הַחוֹף', 'בַּגָּלִיל'], 'עֲרָד נִמְצֵאת בַּנֶּגֶב.', 'Arad is in the Negev.'),
    quiz('אֵיךְ הָאֲוִיר בַּעֲרָד?', 'What is the air like in Arad?', ['יָבֵשׁ וְנָקִי', 'רָטֹב וְחַם מְאוֹד', 'קַר מְאוֹד וְשֶׁלֶג', 'מָלֵא עָשָׁן'], 'הָאֲוִיר בַּעֲרָד יָבֵשׁ וְנָקִי.', 'The air in Arad is dry and clean.'),
    quiz('בְּאֵיזוֹ שָׁנָה נוֹסְדָה עֲרָד?', 'In what year was Arad founded?', ['1962', '1909', '1500', '2020'], 'עֲרָד נוֹסְדָה בִּשְׁנַת 1962.', 'Arad was founded in 1962.'),
    quiz('מָה נִמְצָא לְיַד עֲרָד?', 'What is near Arad?', ['יַם הַמֶּלַח וּמְצָדָה', 'הַיָּם הַתִּיכוֹן', 'הַכִּנֶּרֶת', 'הָרֵי הַגָּלִיל'], 'לְיַד עֲרָד נִמְצָאִים יַם הַמֶּלַח וּמְצָדָה.', 'The Dead Sea and Masada are near Arad.'),
    quiz('מָה זֶה תֵּל עֲרָד?', 'What is Tel Arad?', ['עִיר עַתִּיקָה', 'בִּנְיָן חָדָשׁ', 'שׁוּק', 'פַּארְק מִשְׂחָקִים'], 'תֵּל עֲרָד הוּא עִיר עַתִּיקָה.', 'Tel Arad is an ancient city.'),
    quiz('לָמָּה אֲנָשִׁים בָּאִים לַעֲרָד?', 'Why do people come to Arad?', ['בִּגְלַל הָאֲוִיר הַיָּבֵשׁ וְהַנָּקִי', 'בִּגְלַל הַיָּם', 'בִּגְלַל הַשֶּׁלֶג', 'בִּגְלַל הַנָּמֵל'], 'הָאֲוִיר בַּעֲרָד יָבֵשׁ וְנָקִי, וְהוּא טוֹב לַנְּשִׁימָה.', 'The air in Arad is dry and clean, and good for breathing.'),
    quiz('כַּמָּה גְּבוֹהָה עֲרָד?', 'How high is Arad?', ['כְּ־600 מֶטֶר', 'כְּ־5 מֶטֶר', 'מִתַּחַת לַיָּם', 'כְּ־10,000 מֶטֶר'], 'עֲרָד גְּבוֹהָה — כְּ־600 מֶטֶר מֵעַל הַיָּם.', 'Arad is high — about 600 m above sea level.'),
    quiz('כַּמָּה תּוֹשָׁבִים בַּעֲרָד?', 'How many people live in Arad?', ['כִּ־26,000', 'כְּ־3', 'כְּ־10 מִילְיוֹן', 'כְּ־260,000'], 'בַּעֲרָד גָּרִים כִּ־26,000 אֲנָשִׁים.', 'About 26,000 people live in Arad.')
  ]
};
})();
