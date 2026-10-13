/* גִּבְעָתַיִם — Givatayim */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['givatayim'] = {
  title: { he: 'גִּבְעָתַיִם', en: 'Givatayim' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'מִישׁוֹר הַחוֹף', 'Coastal Plain'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּ־60,000', 'about 60,000'),
    stat('⛰️', 'הַשֵּׁם', 'The name', 'שְׁתֵּי גְּבָעוֹת', 'two hills')
  ],
  slides: [
    slide('🔭', 'גִּבְעָתַיִם', 'Givatayim',
      'גִּבְעָתַיִם הִיא עִיר קְטַנָּה לְיַד תֵּל אָבִיב. יֵשׁ בָּהּ הַרְבֵּה עֵצִים, גַּנִּים וּרְחוֹבוֹת שְׁקֵטִים.',
      'Givatayim is a small city next to Tel Aviv. It has many trees, gardens and quiet streets.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'גִּבְעָתַיִם נִמְצֵאת בְּמִישׁוֹר הַחוֹף, מִזְרָחָה לְתֵל אָבִיב.',
      'Givatayim is in the Coastal Plain, just east of Tel Aviv.'),
    slide('🏷️', 'הַשֵּׁם', 'The name',
      'הַשֵּׁם "גִּבְעָתַיִם" פֵּרוּשׁוֹ "שְׁתֵּי גְּבָעוֹת". הָעִיר בְּנוּיָה עַל גְּבָעוֹת.',
      'The name “Givatayim” means “two hills”. The city is built on hills.'),
    slide('📅', 'הַהִיסְטוֹרְיָה', 'History',
      'גִּבְעָתַיִם נוֹסְדָה בִּשְׁנַת 1922. בַּהַתְחָלָה הָיְתָה שְׁכוּנָה קְטַנָּה, וְהַיּוֹם הִיא עִיר.',
      'Givatayim was founded in 1922. At first it was a small neighborhood, and today it is a city.'),
    slide('🔭', 'מַצְפֵּה הַכּוֹכָבִים', 'The observatory',
      'בְּגִבְעָתַיִם יֵשׁ מַצְפֵּה כּוֹכָבִים. בַּלַּיְלָה אֶפְשָׁר לִרְאוֹת דֶּרֶךְ טֵלֶסְקוֹפּ אֶת הַיָּרֵחַ וְאֶת הַכּוֹכָבִים.',
      'Givatayim has an observatory. At night you can see the moon and the stars through a telescope.'),
    slide('🎭', 'תֵּיאַטְרוֹן', 'Theatre',
      'בְּגִבְעָתַיִם יֵשׁ תֵּיאַטְרוֹן. אֲנָשִׁים בָּאִים לִרְאוֹת הַצָּגוֹת וְלִשְׁמֹעַ מוּזִיקָה.',
      'Givatayim has a theatre. People come to see plays and hear music.'),
    slide('🌳', 'גַּנִּים', 'Gardens',
      'בְּגִבְעָתַיִם יֵשׁ גַּנִּים וּפַּארְקִים. הָעִיר יְרֻקָּה וּשְׁקֵטָה.',
      'Givatayim has gardens and parks. The city is green and quiet.'),
    slide('🏘️', 'עִיר קְטַנָּה', 'A small city',
      'גִּבְעָתַיִם קְטַנָּה, אֲבָל נְעִימָה. אֶפְשָׁר לָלֶכֶת בָּרֶגֶל בֵּין הַבָּתִּים, הַגַּנִּים וְהַחֲנוּיוֹת.',
      'Givatayim is small, but pleasant. You can walk between the houses, gardens and shops.'),
    slide('🚌', 'תַּחְבּוּרָה', 'Transport',
      'מִגִּבְעָתַיִם מַגִּיעִים לְתֵל אָבִיב בְּכַמָּה דַּקּוֹת. יֵשׁ אוֹטוֹבּוּסִים וְרַכֶּבֶת.',
      'From Givatayim you reach Tel Aviv in a few minutes. There are buses and a train.')
  ],
  memory: [
    mem('גִּבְעָה', '⛰️', 'גִּבְעָתַיִם פֵּרוּשָׁהּ שְׁתֵּי גְּבָעוֹת.', 'Givatayim means two hills.'),
    mem('כּוֹכָב', '⭐', 'בַּמַּצְפֶּה רוֹאִים כּוֹכָבִים.', 'At the observatory you see stars.'),
    mem('טֵלֶסְקוֹפּ', '🔭', 'דֶּרֶךְ הַטֵּלֶסְקוֹפּ רוֹאִים אֶת הַיָּרֵחַ.', 'Through the telescope you see the moon.'),
    mem('יָרֵחַ', '🌙', 'בַּלַּיְלָה רוֹאִים אֶת הַיָּרֵחַ.', 'At night you see the moon.'),
    mem('תֵּיאַטְרוֹן', '🎭', 'בְּגִבְעָתַיִם יֵשׁ תֵּיאַטְרוֹן.', 'Givatayim has a theatre.'),
    mem('עֵץ', '🌳', 'בְּגִבְעָתַיִם יֵשׁ הַרְבֵּה עֵצִים.', 'Givatayim has many trees.'),
    mem('אוֹטוֹבּוּס', '🚌', 'מִגִּבְעָתַיִם נוֹסְעִים לְתֵל אָבִיב בְּאוֹטוֹבּוּס.', 'From Givatayim you travel to Tel Aviv by bus.'),
    mem('בַּיִת', '🏘️', 'בָּעִיר יֵשׁ בָּתִּים בֵּין גְּבָעוֹת.', 'The city has houses among hills.')
  ],
  cloze: [
    cloze('גִּבְעָתַיִם נִמְצֵאת לְיַד ___.', 'Givatayim is next to ___.', ['תֵּל אָבִיב', 'אֵילַת', 'צְפַת']),
    cloze('הַשֵּׁם "גִּבְעָתַיִם" פֵּרוּשׁוֹ "שְׁתֵּי ___".', 'The name “Givatayim” means “two ___”.', ['גְּבָעוֹת', 'אֳנִיּוֹת', 'מִגְדָּלִים']),
    cloze('בַּמַּצְפֶּה רוֹאִים אֶת הַיָּרֵחַ וְאֶת ___.', 'At the observatory you see the moon and the ___.', ['הַכּוֹכָבִים', 'הַגְּמַלִּים', 'הַדָּגִים']),
    cloze('בַּתֵּיאַטְרוֹן רוֹאִים ___.', 'At the theatre you see ___.', ['הַצָּגוֹת', 'דָּגִים', 'גְּמַלִּים']),
    cloze('גִּבְעָתַיִם נוֹסְדָה בִּשְׁנַת ___.', 'Givatayim was founded in ___.', ['1922', '1500', '2020']),
    cloze('בְּגִבְעָתַיִם יֵשׁ הַרְבֵּה ___ וְגַנִּים.', 'Givatayim has many ___ and gardens.', ['עֵצִים', 'גְּמַלִּים', 'סְפִינוֹת'])
  ],
  places: [
    place('מַצְפֵּה הַכּוֹכָבִים', 'The observatory', ['night', [['🔭', 200, 140, 120], ['⭐', 80, 70, 50], ['🌙', 322, 82, 60]]],
      'בְּמַצְפֵּה הַכּוֹכָבִים רוֹאִים אֶת הַיָּרֵחַ וְאֶת הַכּוֹכָבִים.', 'At the observatory you see the moon and the stars.'),
    place('הַתֵּיאַטְרוֹן', 'The theatre', ['night', [['🎭', 200, 130, 120], ['🎟️', 90, 205, 60], ['👏', 322, 200, 60]]],
      'בַּתֵּיאַטְרוֹן רוֹאִים הַצָּגוֹת.', 'At the theatre you see plays.'),
    place('הַגְּבָעוֹת', 'The hills', ['green', [['🏘️', 200, 140, 130], ['🌳', 70, 182, 70], ['🌳', 335, 182, 70]]],
      'גִּבְעָתַיִם בְּנוּיָה עַל גְּבָעוֹת.', 'Givatayim is built on hills.'),
    place('גַּן אֶסְתֵּר', 'Esther Garden', ['green', [['🌳', 70, 150, 90], ['🌳', 330, 150, 90], ['🎨', 200, 172, 80], ['🌷', 130, 232, 44]]],
      'גַּן אֶסְתֵּר הוּא גַּן יָרֹק עִם שְׁבִילִים וּפְסָלִים צִבְעוֹנִיִּים.', 'Esther Garden is a green garden with paths and colorful sculptures.'),
    place('תַּחֲנַת הָאוֹטוֹבּוּס', 'The bus stop', ['city', [['🚌', 200, 168, 120], ['🚏', 68, 192, 60]]],
      'מִגִּבְעָתַיִם נוֹסְעִים לְתֵל אָבִיב בְּאוֹטוֹבּוּס.', 'From Givatayim you go to Tel Aviv by bus.'),
    place('פַּארְק גִּבְעָתַיִם', 'Givatayim Park', ['green', [['🌴', 90, 160, 90], ['🌳', 300, 150, 90], ['⛲', 200, 190, 70]]],
      'בְּפַארְק גִּבְעָתַיִם יֵשׁ דְּקָלִים, עֵצִים וּמַיִם.', 'Givatayim Park has palm trees, trees and water.')
  ],
  quiz: [
    quiz('בְּאֵיזֶה אֵזוֹר נִמְצֵאת גִּבְעָתַיִם?', 'In which area is Givatayim?', ['בְּמִישׁוֹר הַחוֹף', 'בַּנֶּגֶב', 'בַּגָּלִיל', 'בְּהָרֵי יְהוּדָה'], 'גִּבְעָתַיִם נִמְצֵאת בְּמִישׁוֹר הַחוֹף.', 'Givatayim is in the Coastal Plain.'),
    quiz('מָה פֵּרוּשׁ הַשֵּׁם "גִּבְעָתַיִם"?', 'What does the name “Givatayim” mean?', ['שְׁתֵּי גְּבָעוֹת', 'שְׁנֵי יַמִּים', 'שְׁתֵּי עָרִים', 'שְׁנֵי נְהָרוֹת'], 'גִּבְעָתַיִם פֵּרוּשָׁהּ שְׁתֵּי גְּבָעוֹת.', 'Givatayim means two hills.'),
    quiz('לְיַד אֵיזוֹ עִיר גְּדוֹלָה נִמְצֵאת גִּבְעָתַיִם?', 'Next to which big city is Givatayim?', ['תֵּל אָבִיב', 'חֵיפָה', 'אֵילַת', 'צְפַת'], 'גִּבְעָתַיִם נִמְצֵאת לְיַד תֵּל אָבִיב.', 'Givatayim is next to Tel Aviv.'),
    quiz('מָה רוֹאִים בְּמַצְפֵּה הַכּוֹכָבִים?', 'What do you see at the observatory?', ['אֶת הַכּוֹכָבִים וְאֶת הַיָּרֵחַ', 'אֶת הַדָּגִים', 'אֶת הַגְּמַלִּים', 'אֶת הַשֶּׁלֶג'], 'בַּמַּצְפֶּה רוֹאִים אֶת הַכּוֹכָבִים וְאֶת הַיָּרֵחַ.', 'At the observatory you see the stars and the moon.'),
    quiz('מָה אֶפְשָׁר לִרְאוֹת בַּתֵּיאַטְרוֹן?', 'What can you see at the theatre?', ['הַצָּגוֹת', 'כַּדּוּרֶגֶל', 'סְפִינוֹת', 'גְּמַלִּים'], 'בַּתֵּיאַטְרוֹן רוֹאִים הַצָּגוֹת.', 'At the theatre you see plays.'),
    quiz('בְּאֵיזוֹ שָׁנָה נוֹסְדָה גִּבְעָתַיִם?', 'In what year was Givatayim founded?', ['1922', '1948', '1500', '2020'], 'גִּבְעָתַיִם נוֹסְדָה בִּשְׁנַת 1922.', 'Givatayim was founded in 1922.'),
    quiz('אֵיזוֹ עִיר הִיא גִּבְעָתַיִם?', 'What kind of city is Givatayim?', ['עִיר קְטַנָּה וִירֻקָּה', 'עִיר גְּדוֹלָה בַּמִּדְבָּר', 'עִיר עַל הַר גָּבוֹהַּ', 'כְּפָר עַל הַיָּם'], 'גִּבְעָתַיִם הִיא עִיר קְטַנָּה וִירֻקָּה.', 'Givatayim is a small, green city.'),
    quiz('כַּמָּה תּוֹשָׁבִים בְּגִבְעָתַיִם?', 'How many people live in Givatayim?', ['כִּ־60,000', 'כְּ־6', 'כְּ־10 מִילְיוֹן', 'כְּ־600'], 'בְּגִבְעָתַיִם גָּרִים כִּ־60,000 אֲנָשִׁים.', 'About 60,000 people live in Givatayim.')
  ]
};
})();
