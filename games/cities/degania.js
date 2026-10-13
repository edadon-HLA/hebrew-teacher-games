/* דְּגַנְיָה — Degania */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['degania'] = {
  title: { he: 'דְּגַנְיָה', en: 'Degania' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'הַצָּפוֹן, בְּעֵמֶק הַיַּרְדֵּן, לְיַד הַכִּנֶּרֶת', 'The North, in the Jordan Valley, near the Kinneret'),
    stat('🏡', 'סוּג', 'Type', 'קִבּוּץ', 'a kibbutz'),
    stat('📅', 'נוֹסְדָה', 'Founded', 'בִּשְׁנַת 1910', 'in 1910')
  ],
  slides: [
    slide('🏡', 'דְּגַנְיָה', 'Degania',
      'דְּגַנְיָה הִיא לֹא עִיר — הִיא קִבּוּץ. הִיא הַקִּבּוּץ הָרִאשׁוֹן בָּעוֹלָם, וְקוֹרְאִים לָהּ "אֵם הַקְּבוּצוֹת".',
      'Degania is not a city — it is a kibbutz. It is the first kibbutz in the world, and it is called “the mother of the kibbutzim”.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'דְּגַנְיָה נִמְצֵאת בַּצָּפוֹן, לְיַד הַכִּנֶּרֶת, בַּמָּקוֹם שֶׁבּוֹ נַהַר הַיַּרְדֵּן יוֹצֵא מִן הָאֲגַם.',
      'Degania is in the north, near the Kinneret, where the Jordan River flows out of the lake.'),
    slide('🏷️', 'הַשֵּׁם', 'The name',
      'הַשֵּׁם דְּגַנְיָה בָּא מִן הַמִּלָּה "דָּגָן". דָּגָן הוּא חִטָּה וּשְׂעוֹרָה — מַה שֶּׁמְּגַדְּלִים בַּשָּׂדֶה.',
      'The name Degania comes from the word “dagan”, grain — wheat and barley, which grow in the field.'),
    slide('📅', 'הַהִיסְטוֹרְיָה', 'History',
      'בִּשְׁנַת 1910 בָּאוּ צְעִירִים וּצְעִירוֹת מֵרוּסְיָה. הֵם עָבְדוּ בַּשָּׂדֶה יַחַד, וְהַכֹּל הָיָה שֶׁל כֻּלָּם.',
      'In 1910 young men and women came from Russia. They worked the field together, and everything belonged to everyone.'),
    slide('🚜', 'הַטְּרַקְטוֹר', 'The tractor',
      'בַּתְּחִלָּה עָבְדוּ בָּאֲדָמָה בְּיָדַיִם וְעִם חַיּוֹת. אַחַר כָּךְ בָּא טְרַקְטוֹר, וְהָעֲבוֹדָה נִהְיְתָה קַלָּה יוֹתֵר.',
      'At first they worked the soil by hand and with animals. Later a tractor came and the work became easier.'),
    slide('🍽️', 'חֶדֶר הָאֹכֶל', 'The dining hall',
      'בַּקִּבּוּץ אוֹכְלִים בְּחֶדֶר אֹכֶל גָּדוֹל. כָּל הַחֲבֵרִים יוֹשְׁבִים יַחַד וְאוֹכְלִים.',
      'In the kibbutz people eat in a big dining hall. All the members sit and eat together.'),
    slide('🍌', 'הַחַקְלָאוּת', 'Farming',
      'בִּדְגַנְיָה מְגַדְּלִים בַּנָּנוֹת, תְּמָרִים וְעוֹד. יֵשׁ גַּם בְּרֵכוֹת דָּגִים.',
      'In Degania they grow bananas, dates and more. There are also fish ponds.'),
    slide('🏛️', 'בֵּית גּוֹרְדוֹן', 'Beit Gordon',
      'בַּקִּבּוּץ יֵשׁ מוּזֵאוֹן עַל הַטֶּבַע וְעַל הַחַיִּים בַּקִּבּוּץ. הוּא נִקְרָא עַל שֵׁם א"ד גּוֹרְדוֹן, אִישׁ שֶׁאָהַב עֲבוֹדָה וְטֶבַע.',
      'The kibbutz has a museum about nature and kibbutz life. It is named after A.D. Gordon, a man who loved work and nature.'),
    slide('👨‍👩‍👧', 'הַיְּלָדִים', 'The children',
      'בִּדְגַנְיָה נוֹלַד מֹשֶׁה דַּיָּן, אִישׁ מְפֻרְסָם בְּיִשְׂרָאֵל. הַיּוֹם גָּרוֹת בַּקִּבּוּץ מִשְׁפָּחוֹת עִם יְלָדִים.',
      'Moshe Dayan, a famous Israeli, was born in Degania. Today families with children live in the kibbutz.')
  ],
  memory: [
    mem('קִבּוּץ', '🏡', 'דְּגַנְיָה הִיא הַקִּבּוּץ הָרִאשׁוֹן.', 'Degania is the first kibbutz.'),
    mem('חִטָּה', '🌾', 'דָּגָן — חִטָּה וּשְׂעוֹרָה.', 'Dagan — wheat and barley.'),
    mem('טְרַקְטוֹר', '🚜', 'הַטְּרַקְטוֹר עוֹזֵר לַעֲבֹד בַּשָּׂדֶה.', 'The tractor helps work in the field.'),
    mem('בַּנָּנָה', '🍌', 'בַּקִּבּוּץ מְגַדְּלִים בַּנָּנוֹת.', 'They grow bananas in the kibbutz.'),
    mem('כִּנֶּרֶת', '🏞️', 'הַקִּבּוּץ נִמְצָא לְיַד הַכִּנֶּרֶת.', 'The kibbutz is near the Kinneret.'),
    mem('חֶדֶר אֹכֶל', '🍽️', 'כֻּלָּם אוֹכְלִים בְּחֶדֶר הָאֹכֶל.', 'Everyone eats in the dining hall.'),
    mem('דָּג', '🐟', 'בַּקִּבּוּץ יֵשׁ בְּרֵכוֹת דָּגִים.', 'The kibbutz has fish ponds.'),
    mem('מוּזֵאוֹן', '🏛️', 'בְּבֵית גּוֹרְדוֹן יֵשׁ מוּזֵאוֹן.', 'Beit Gordon has a museum.')
  ],
  cloze: [
    cloze('דְּגַנְיָה הִיא הַ___ הָרִאשׁוֹן בָּעוֹלָם.', 'Degania is the first ___ in the world.', ['קִבּוּץ', 'מִסְעָדָה', 'נָמֵל']),
    cloze('דְּגַנְיָה נוֹסְדָה בִּשְׁנַת ___.', 'Degania was founded in ___.', ['1910', '1500', '2020']),
    cloze('הַקִּבּוּץ נִמְצָא לְיַד ___.', 'The kibbutz is near the ___.', ['הַכִּנֶּרֶת', 'הַמִּדְבָּר', 'הַשֶּׁלֶג']),
    cloze('בַּקִּבּוּץ עוֹבְדִים בַּ___.', 'In the kibbutz people work in the ___.', ['שָּׂדֶה', 'סִירָה', 'מַטּוֹס']),
    cloze('בַּקִּבּוּץ מְגַדְּלִים ___ וּתְמָרִים.', 'In the kibbutz they grow ___ and dates.', ['בַּנָּנוֹת', 'פִּינְגְּוִינִים', 'אֲבָנִים']),
    cloze('כָּל הַחֲבֵרִים אוֹכְלִים יַחַד בְּחֶדֶר ___.', 'All the members eat together in the ___ hall.', ['הָאֹכֶל', 'הַשֵּׁנָה', 'הַמֶּלֶךְ'])
  ],
  places: [
    place('שַׁעַר הַקִּבּוּץ', 'The kibbutz gate', ['green', [['🏡', 200, 135, 100], ['🌳', 62, 150, 90], ['🌳', 338, 150, 90], ['🚪', 200, 210, 60]]],
      'בְּשַׁעַר הַקִּבּוּץ אֶפְשָׁר לִרְאוֹת בָּתִּים וְעֵצִים.', 'At the kibbutz gate you can see houses and trees.'),
    place('חוֹף הַכִּנֶּרֶת', 'The Kinneret shore', ['sea', [['🏞️', 200, 150, 120], ['🦆', 80, 210, 56], ['🌴', 330, 150, 90]]],
      'הַקִּבּוּץ עַל חוֹף הַכִּנֶּרֶת.', 'The kibbutz is on the Kinneret shore.'),
    place('הַטְּרַקְטוֹר הַיָּשָׁן', 'The old tractor', ['green', [['🚜', 200, 180, 110], ['🌾', 80, 190, 80], ['🌾', 330, 190, 80]]],
      'הַטְּרַקְטוֹר הַיָּשָׁן עוֹמֵד בַּקִּבּוּץ.', 'The old tractor stands in the kibbutz.'),
    place('חֶדֶר הָאֹכֶל', 'The dining hall', ['city', [['🍽️', 200, 150, 100], ['🍞', 100, 205, 60], ['🥗', 300, 205, 60]]],
      'בַּקִּבּוּץ אוֹכְלִים בְּחֶדֶר אֹכֶל גָּדוֹל.', 'In the kibbutz people eat in a big dining hall.'),
    place('מַטָּע הַבַּנָּנוֹת', 'The banana grove', ['green', [['🍌', 130, 160, 90], ['🌴', 280, 140, 110], ['🍌', 320, 210, 56]]],
      'בַּקִּבּוּץ מְגַדְּלִים בַּנָּנוֹת.', 'In the kibbutz they grow bananas.'),
    place('בֵּית גּוֹרְדוֹן', 'Beit Gordon', ['old', [['🏛️', 200, 130, 130], ['🦋', 80, 190, 60], ['🪶', 330, 190, 60]]],
      'בְּבֵית גּוֹרְדוֹן יֵשׁ מוּזֵאוֹן טֶבַע.', 'Beit Gordon has a nature museum.')
  ],
  quiz: [
    quiz('מָה הִיא דְּגַנְיָה?', 'What is Degania?', ['קִבּוּץ', 'עִיר גְּדוֹלָה', 'הַר', 'נָמֵל'], 'דְּגַנְיָה הִיא קִבּוּץ.', 'Degania is a kibbutz.'),
    quiz('מָה מְיֻחָד בִּדְגַנְיָה?', 'What is special about Degania?', ['הִיא הַקִּבּוּץ הָרִאשׁוֹן', 'הִיא הָעִיר הַגְּדוֹלָה בְּיוֹתֵר', 'הִיא בַּמִּדְבָּר', 'הִיא עַל הָהָר'], 'דְּגַנְיָה הִיא הַקִּבּוּץ הָרִאשׁוֹן בָּעוֹלָם.', 'Degania is the first kibbutz in the world.'),
    quiz('בְּאֵיזוֹ שָׁנָה נוֹסְדָה דְּגַנְיָה?', 'In what year was Degania founded?', ['1910', '1948', '1500', '2020'], 'דְּגַנְיָה נוֹסְדָה בִּשְׁנַת 1910.', 'Degania was founded in 1910.'),
    quiz('לְיַד אֵיזֶה אֲגַם נִמְצֵאת דְּגַנְיָה?', 'Near which lake is Degania?', ['הַכִּנֶּרֶת', 'יָם הַמֶּלַח', 'הַיָּם הָאָדֹם', 'הַיַּרְקוֹן'], 'דְּגַנְיָה נִמְצֵאת לְיַד הַכִּנֶּרֶת.', 'Degania is near the Kinneret.'),
    quiz('מֵאֵיזוֹ מִלָּה בָּא הַשֵּׁם דְּגַנְיָה?', 'From which word does the name Degania come?', ['דָּגָן', 'דָּג', 'דֶּגֶל', 'דֶּלֶת'], 'הַשֵּׁם בָּא מִן הַמִּלָּה "דָּגָן" — חִטָּה וּשְׂעוֹרָה.', 'The name comes from “dagan” — wheat and barley.'),
    quiz('מֵאֵיזוֹ אֶרֶץ בָּאוּ מְיַסְּדֵי דְּגַנְיָה?', 'From which country did Degania’s founders come?', ['רוּסְיָה', 'סִין', 'בְּרָזִיל', 'אוֹסְטְרַלְיָה'], 'הַמְּיַסְּדִים בָּאוּ מֵרוּסְיָה.', 'The founders came from Russia.'),
    quiz('מָה אוֹכְלִים בַּקִּבּוּץ יַחַד?', 'Where do kibbutz members eat together?', ['בְּחֶדֶר הָאֹכֶל', 'בְּמִדְבָּר', 'בַּסִּירָה', 'בַּמְּעָרָה'], 'כֻּלָּם אוֹכְלִים בְּחֶדֶר הָאֹכֶל.', 'Everyone eats in the dining hall.'),
    quiz('מָה מְגַדְּלִים בִּדְגַנְיָה?', 'What do they grow in Degania?', ['בַּנָּנוֹת וּתְמָרִים', 'שֶׁלֶג', 'אֲבָנִים', 'מְכוֹנִיּוֹת'], 'בִּדְגַנְיָה מְגַדְּלִים בַּנָּנוֹת וּתְמָרִים.', 'In Degania they grow bananas and dates.'),
    quiz('מִי נוֹלַד בִּדְגַנְיָה?', 'Who was born in Degania?', ['מֹשֶׁה דַּיָּן', 'בִּנְיָמִין זְאֵב הֶרְצֶל', 'אַבְרָהָם אָבִינוּ', 'הַרַמְבַּ"ם'], 'מֹשֶׁה דַּיָּן נוֹלַד בִּדְגַנְיָה.', 'Moshe Dayan was born in Degania.')
  ]
};
})();
