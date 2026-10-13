/* חֵיפָה — Haifa */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['haifa'] = {
  title: { he: 'חֵיפָה', en: 'Haifa' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'הַצָּפוֹן', 'The North'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּ־300,000', 'about 300,000'),
    stat('⛰️', 'בְּנוּיָה עַל', 'Built on', 'הַר הַכַּרְמֶל', 'Mount Carmel')
  ],
  slides: [
    slide('🌆', 'חֵיפָה', 'Haifa',
      'חֵיפָה הִיא הָעִיר הַגְּדוֹלָה בַּצָּפוֹן. הִיא עַל הַר וְעַל הַיָּם.',
      'Haifa is the biggest city in the north. It is on a mountain and by the sea.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'חֵיפָה נִמְצֵאת בַּצָּפוֹן, עַל הַר הַכַּרְמֶל, לְיַד הַיָּם הַתִּיכוֹן.',
      'Haifa is in the north, on Mount Carmel, next to the Mediterranean Sea.'),
    slide('⛰️', 'הַר וְיָם', 'Mountain and sea',
      'חֵיפָה בְּנוּיָה עַל הַר הַכַּרְמֶל. מֵהָהָר רוֹאִים אֶת הַיָּם וְאֶת הַמִּפְרָץ.',
      'Haifa is built on Mount Carmel. From the mountain you can see the sea and the bay.'),
    slide('🚇', 'הַכַּרְמֶלִית', 'The Carmelit',
      'בְּחֵיפָה יֵשׁ רַכֶּבֶת תַּחַת הָאֲדָמָה. קוֹרְאִים לָהּ "הַכַּרְמֶלִית". הִיא עוֹלָה וְיוֹרֶדֶת בֶּהָר. זוֹ הָרַכֶּבֶת הַתַּת־קַרְקָעִית הַיְּחִידָה בְּיִשְׂרָאֵל.',
      'Haifa has an underground train called “the Carmelit”. It goes up and down the mountain. It is the only underground train in Israel.'),
    slide('🌺', 'גַּנֵּי הַבָּהָאיִים', 'The Baha’i Gardens',
      'עַל הַר הַכַּרְמֶל יֵשׁ גַּנִּים יָפִים מְאוֹד, עִם מַדְרֵגוֹת, פְּרָחִים וְכִפָּה זְהֻבָּה. מְבַקְּרִים בָּאִים מִכָּל הָעוֹלָם.',
      'On Mount Carmel there are very beautiful gardens with stairs, flowers and a golden dome. Visitors come from all over the world.'),
    slide('⚓', 'הַנָּמֵל', 'The port',
      'בְּחֵיפָה יֵשׁ נָמֵל גָּדוֹל. סְפִינוֹת מַגִּיעוֹת מִכָּל הָעוֹלָם.',
      'Haifa has a big port. Ships arrive from all over the world.'),
    slide('🎓', 'הַטֶּכְנִיּוֹן', 'The Technion',
      'בְּחֵיפָה יֵשׁ אוּנִיבֶרְסִיטָה מְפֻרְסֶמֶת, הַטֶּכְנִיּוֹן. לוֹמְדִים בָּהּ הַנְדָּסָה וּמַדָּעִים.',
      'Haifa has a famous university, the Technion. People study engineering and science there.'),
    slide('🌲', 'הַיַּעַר', 'The forest',
      'הַר הַכַּרְמֶל יָרֹק. יֵשׁ בּוֹ יַעַר וּשְׁבִילֵי טִיּוּל.',
      'Mount Carmel is green. It has a forest and hiking trails.'),
    slide('🤝', 'גָּרִים יַחַד', 'Living together',
      'בְּחֵיפָה גָּרִים יַחַד יְהוּדִים וַעֲרָבִים.',
      'In Haifa, Jews and Arabs live together.')
  ],
  memory: [
    mem('הַר', '⛰️', 'חֵיפָה בְּנוּיָה עַל הַר.', 'Haifa is built on a mountain.'),
    mem('יָם', '🌊', 'מֵחֵיפָה רוֹאִים אֶת הַיָּם.', 'From Haifa you see the sea.'),
    mem('נָמֵל', '⚓', 'בְּחֵיפָה יֵשׁ נָמֵל גָּדוֹל.', 'Haifa has a big port.'),
    mem('סְפִינָה', '🚢', 'סְפִינוֹת בָּאוֹת לַנָּמֵל.', 'Ships come to the port.'),
    mem('רַכֶּבֶת', '🚇', 'הַכַּרְמֶלִית הִיא רַכֶּבֶת תַּחַת הָאֲדָמָה.', 'The Carmelit is an underground train.'),
    mem('גַּן', '🌺', 'בַּגַּנִּים יֵשׁ פְּרָחִים יָפִים.', 'The gardens have beautiful flowers.'),
    mem('אוּנִיבֶרְסִיטָה', '🎓', 'הַטֶּכְנִיּוֹן הוּא אוּנִיבֶרְסִיטָה בְּחֵיפָה.', 'The Technion is a university in Haifa.'),
    mem('יַעַר', '🌲', 'בְּהַר הַכַּרְמֶל יֵשׁ יַעַר.', 'Mount Carmel has a forest.')
  ],
  cloze: [
    cloze('חֵיפָה בְּנוּיָה עַל הַר ___.', 'Haifa is built on Mount ___.', ['הַכַּרְמֶל', 'הַחֶרְמוֹן', 'הַזֵּיתִים']),
    cloze('הָרַכֶּבֶת שֶׁתַּחַת הָאֲדָמָה בְּחֵיפָה נִקְרֵאת "___".', 'The underground train in Haifa is called “the ___”.', ['הַכַּרְמֶלִית', 'הַמְּהִירָה', 'הַיְּרֻקָּה']),
    cloze('בְּחֵיפָה יֵשׁ ___ גָּדוֹל, וּסְפִינוֹת מַגִּיעוֹת אֵלָיו.', 'Haifa has a big ___, and ships arrive there.', ['נָמֵל', 'מִדְבָּר', 'שׁוּק']),
    cloze('בַּגַּנִּים יֵשׁ כִּפָּה ___.', 'In the gardens there is a ___ dome.', ['זְהֻבָּה', 'אֲדֻמָּה', 'שְׁחוֹרָה']),
    cloze('הַטֶּכְנִיּוֹן הוּא ___ מְפֻרְסֶמֶת.', 'The Technion is a famous ___.', ['אוּנִיבֶרְסִיטָה', 'מִסְעָדָה', 'חֲנוּת']),
    cloze('חֵיפָה נִמְצֵאת בְּאֵזוֹר ___.', 'Haifa is in the ___ area.', ['הַצָּפוֹן', 'הַנֶּגֶב', 'הַשְּׁפֵלָה'])
  ],
  places: [
    place('הַכַּרְמֶלִית', 'The Carmelit', ['night', [['🚇', 200, 125, 120], ['🚉', 70, 200, 60], ['💡', 335, 70, 40], ['💡', 70, 70, 40]]],
      'הַכַּרְמֶלִית נוֹסַעַת תַּחַת הָאֲדָמָה.', 'The Carmelit travels under the ground.'),
    place('גַּנֵּי הַבָּהָאיִים', 'The Baha’i Gardens', ['green', [['🌺', 62, 225, 50], ['🌷', 338, 225, 50], ['🌸', 200, 238, 44]], 'bahai'],
      'בַּגַּנִּים יֵשׁ מַדְרֵגוֹת, פְּרָחִים וְכִפָּה זְהֻבָּה.', 'The gardens have stairs, flowers and a golden dome.'),
    place('נְמַל חֵיפָה', 'Haifa Port', ['sea', [['🚢', 200, 150, 120], ['⚓', 70, 215, 60], ['📦', 335, 215, 60], ['🏗️', 335, 130, 60]]],
      'בַּנָּמֵל יֵשׁ סְפִינוֹת גְּדוֹלוֹת.', 'The port has big ships.'),
    place('הַטֶּכְנִיּוֹן', 'The Technion', ['sky', [['🏛️', 200, 135, 130], ['🎓', 70, 178, 70], ['📚', 335, 178, 70], ['🔬', 130, 232, 40]]],
      'בַּטֶּכְנִיּוֹן לוֹמְדִים הַנְדָּסָה וּמַדָּעִים.', 'At the Technion people study engineering and science.'),
    place('הַר הַכַּרְמֶל', 'Mount Carmel', ['green', [['🌲', 62, 150, 84], ['🌲', 140, 172, 72], ['🌳', 270, 165, 86], ['🥾', 340, 222, 52], ['🦅', 320, 70, 44]]],
      'בְּהַר הַכַּרְמֶל יֵשׁ יַעַר וּשְׁבִילֵי טִיּוּל.', 'Mount Carmel has a forest and hiking trails.'),
    place('הַחוֹף', 'The beach', ['beach', [['🏖️', 200, 112, 92], ['🌴', 62, 150, 70], ['⛱️', 300, 205, 56], ['🐚', 120, 228, 36]]],
      'בְּחֵיפָה יֵשׁ חוֹפִים לְיַד הָעִיר.', 'Haifa has beaches next to the city.')
  ],
  quiz: [
    quiz('עַל אֵיזֶה הַר בְּנוּיָה חֵיפָה?', 'On which mountain is Haifa built?', ['הַר הַכַּרְמֶל', 'הַר מֵירוֹן', 'הַר הַזֵּיתִים', 'הַר סִינַי'], 'חֵיפָה בְּנוּיָה עַל הַר הַכַּרְמֶל.', 'Haifa is built on Mount Carmel.'),
    quiz('אֵיפֹה בְּיִשְׂרָאֵל נִמְצֵאת חֵיפָה?', 'Where in Israel is Haifa?', ['בַּצָּפוֹן', 'בַּדָּרוֹם', 'בַּמִּדְבָּר', 'בְּתוֹךְ הַיָּם'], 'חֵיפָה נִמְצֵאת בַּצָּפוֹן.', 'Haifa is in the north.'),
    quiz('מָה שֵׁם הָרַכֶּבֶת שֶׁתַּחַת הָאֲדָמָה בְּחֵיפָה?', 'What is the name of the underground train in Haifa?', ['הַכַּרְמֶלִית', 'הָרַכֶּבֶת הַקַּלָּה', 'הָאוֹטוֹבּוּס', 'הַמַּעֲלִית'], 'הַכַּרְמֶלִית הִיא הָרַכֶּבֶת שֶׁתַּחַת הָאֲדָמָה.', 'The Carmelit is the underground train.'),
    quiz('מָה אֶפְשָׁר לִרְאוֹת מֵהַר הַכַּרְמֶל?', 'What can you see from Mount Carmel?', ['אֶת הַיָּם וְאֶת הַמִּפְרָץ', 'אֶת הַמִּדְבָּר', 'אֶת הַשֶּׁלֶג', 'אֶת הַפִּירָמִידוֹת'], 'מֵהָהָר רוֹאִים אֶת הַיָּם וְאֶת הַמִּפְרָץ.', 'From the mountain you see the sea and the bay.'),
    quiz('אֵיזֶה גַּנִּים מְפֻרְסָמִים יֵשׁ בְּחֵיפָה?', 'Which famous gardens are in Haifa?', ['גַּנֵּי הַבָּהָאיִים', 'גַּן הַשֶּׁלֶג', 'גַּן הַמִּדְבָּר', 'גַּן הַמִּגְדָּלִים'], 'גַּנֵּי הַבָּהָאיִים הֵם גַּנִּים יָפִים עִם מַדְרֵגוֹת.', 'The Baha’i Gardens are beautiful gardens with stairs.'),
    quiz('מָה צֶבַע הַכִּפָּה בַּגַּנִּים?', 'What color is the dome in the gardens?', ['זָהָב', 'אָדֹם', 'שָׁחֹר', 'וָרֹד'], 'הַכִּפָּה בַּגַּנִּים זְהֻבָּה.', 'The dome in the gardens is golden.'),
    quiz('מָה לּוֹמְדִים בַּטֶּכְנִיּוֹן?', 'What do people study at the Technion?', ['הַנְדָּסָה וּמַדָּעִים', 'בִּשּׁוּל', 'רִקּוּד', 'צִיּוּר'], 'בַּטֶּכְנִיּוֹן לוֹמְדִים הַנְדָּסָה וּמַדָּעִים.', 'At the Technion people study engineering and science.'),
    quiz('מָה יֵשׁ בְּחֵיפָה לְיַד הַיָּם?', 'What is next to the sea in Haifa?', ['נָמֵל גָּדוֹל', 'מִגְדַּל אֵיפֶל', 'פִּירָמִידָה', 'מַכְתֵּשׁ'], 'בְּחֵיפָה יֵשׁ נָמֵל גָּדוֹל.', 'Haifa has a big port.'),
    quiz('מִי גָּר בְּחֵיפָה?', 'Who lives in Haifa?', ['יְהוּדִים וַעֲרָבִים יַחַד', 'רַק תַּיָּרִים', 'רַק יְלָדִים', 'אַף אֶחָד'], 'בְּחֵיפָה גָּרִים יַחַד יְהוּדִים וַעֲרָבִים.', 'In Haifa Jews and Arabs live together.'),
    quiz('כַּמָּה תּוֹשָׁבִים בְּחֵיפָה?', 'How many people live in Haifa?', ['כִּ־300,000', 'כְּמֵאָה', 'כְּ־3 מִילְיוֹן', 'כְּ־2,000'], 'בְּחֵיפָה גָּרִים כִּ־300,000 אֲנָשִׁים.', 'About 300,000 people live in Haifa.')
  ]
};
})();
