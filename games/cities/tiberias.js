/* טְבֶרְיָה — Tiberias */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['tiberias'] = {
  title: { he: 'טְבֶרְיָה', en: 'Tiberias' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'הַצָּפוֹן, עַל שְׂפַת הַכִּנֶּרֶת', 'The North, on the shore of the Kinneret'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּ־50,000', 'about 50,000'),
    stat('📅', 'נוֹסְדָה', 'Founded', 'לִפְנֵי כְּ־2,000 שָׁנָה', 'about 2,000 years ago')
  ],
  slides: [
    slide('🏞️', 'טְבֶרְיָה', 'Tiberias',
      'טְבֶרְיָה הִיא עִיר עַל שְׂפַת הַכִּנֶּרֶת, הָאֲגַם הַמָּתוֹק הַגָּדוֹל שֶׁל יִשְׂרָאֵל. הַמָּקוֹם יָפֶה מְאוֹד וְחַם בַּקַּיִץ.',
      'Tiberias is a city on the shore of the Kinneret, Israel’s big freshwater lake. The place is very beautiful and hot in summer.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'טְבֶרְיָה נִמְצֵאת בַּצָּפוֹן, בַּגָּלִיל, עַל הַחוֹף הַמַּעֲרָבִי שֶׁל הַכִּנֶּרֶת. הַכִּנֶּרֶת נִמְצֵאת הַרְבֵּה מִתַּחַת לִפְנֵי הַיָּם, וְלָכֵן חַם בָּעִיר.',
      'Tiberias is in the north, in the Galilee, on the western shore of the Kinneret. The Kinneret is far below sea level, so it is hot in the city.'),
    slide('🏷️', 'הַשֵּׁם', 'The name',
      'הַשֵּׁם טְבֶרְיָה בָּא מִשֵּׁם הַקֵּיסָר הָרוֹמִי טִיבֶּרְיוּס. הַמֶּלֶךְ הִרוֹדֵס אַנְטִיפַּס בָּנָה אֶת הָעִיר.',
      'The name Tiberias comes from the Roman emperor Tiberius. King Herod Antipas built the city.'),
    slide('📜', 'עִיר קְדוֹשָׁה', 'A holy city',
      'טְבֶרְיָה הִיא אַחַת מֵאַרְבַּע עָרֵי הַקֹּדֶשׁ שֶׁל הַיְּהוּדִים, יַחַד עִם יְרוּשָׁלַיִם, צְפַת וְחֶבְרוֹן. חֲכָמִים כָּתְבוּ כָּאן אֶת הַתַּלְמוּד הַיְרוּשַׁלְמִי.',
      'Tiberias is one of the four holy cities of the Jewish people, with Jerusalem, Safed and Hebron. Sages wrote the Jerusalem Talmud here.'),
    slide('♨️', 'הַמַּעְיָנוֹת הַחַמִּים', 'The hot springs',
      'בִּטְבֶרְיָה יֵשׁ מַעְיָנוֹת מַיִם חַמִּים מִתַּחַת לָאֲדָמָה. אֲנָשִׁים בָּאִים לְהִתְרַחֵץ בָּהֶם כְּבָר אַלְפֵי שָׁנִים.',
      'Tiberias has hot water springs under the ground. People have come to bathe in them for thousands of years.'),
    slide('🚶', 'הַטַּיֶּלֶת', 'The promenade',
      'לְאֹרֶךְ הַכִּנֶּרֶת יֵשׁ טַיֶּלֶת יָפָה עִם מִסְעָדוֹת, בָּתֵּי מָלוֹן וְסִירוֹת. מִשְׁפָּחוֹת בָּאוֹת לְטַיֵּל וּלְהִסְתַּכֵּל עַל הַמַּיִם.',
      'Along the Kinneret there is a beautiful promenade with restaurants, hotels and boats. Families come to walk and look at the water.'),
    slide('🐟', 'דַּג מִן הַכִּנֶּרֶת', 'Fish from the Kinneret',
      'בַּמִּסְעָדוֹת שֶׁל טְבֶרְיָה אוֹכְלִים דָּג טָרִי מִן הַכִּנֶּרֶת. הַדָּג הַמְפֻרְסָם נִקְרָא אַמְנוּן, אוֹ "דַּג פֶּטְרוֹס".',
      'In Tiberias restaurants people eat fresh fish from the Kinneret. The famous fish is called amnun, or “St. Peter’s fish”.'),
    slide('🕯️', 'קִבְרֵי צַדִּיקִים', 'Graves of sages',
      'בִּטְבֶרְיָה נִמְצָאִים קִבְרֵי חֲכָמִים גְּדוֹלִים, כְּמוֹ הָרַמְבַּ"ם וְרַבִּי עֲקִיבָא. אֲנָשִׁים רַבִּים בָּאִים לְבַקֵּר שָׁם.',
      'Tiberias has the graves of great sages, like Maimonides (the Rambam) and Rabbi Akiva. Many people come to visit.'),
    slide('⛰️', 'הֶהָרִים סָבִיב', 'Mountains around',
      'סָבִיב הָעִיר יֵשׁ הָרִים. אֶפְשָׁר לְטַפֵּס עַל הַר אַרְבֵּל וְלִרְאוֹת מִלְּמַעְלָה אֶת הַכִּנֶּרֶת כֻּלָּהּ.',
      'There are mountains around the city. You can climb Mount Arbel and see the whole Kinneret from above.')
  ],
  memory: [
    mem('כִּנֶּרֶת', '🏞️', 'טְבֶרְיָה נִמְצֵאת עַל שְׂפַת הַכִּנֶּרֶת.', 'Tiberias is on the shore of the Kinneret.'),
    mem('מַעְיָן חַם', '♨️', 'בִּטְבֶרְיָה יֵשׁ מַעְיָנוֹת מַיִם חַמִּים.', 'Tiberias has hot springs.'),
    mem('דָּג', '🐟', 'אוֹכְלִים דָּג מִן הַכִּנֶּרֶת.', 'People eat fish from the Kinneret.'),
    mem('סִירָה', '⛵', 'סִירוֹת שָׁטוֹת עַל הַכִּנֶּרֶת.', 'Boats sail on the Kinneret.'),
    mem('טַיֶּלֶת', '🚶', 'מְטַיְּלִים בַּטַּיֶּלֶת לְיַד הַמַּיִם.', 'People walk on the promenade by the water.'),
    mem('הַר', '⛰️', 'סָבִיב טְבֶרְיָה יֵשׁ הָרִים.', 'There are mountains around Tiberias.'),
    mem('מָלוֹן', '🏨', 'בַּטַּיֶּלֶת יֵשׁ בָּתֵּי מָלוֹן.', 'The promenade has hotels.'),
    mem('חַם', '☀️', 'בַּקַּיִץ חַם מְאוֹד בִּטְבֶרְיָה.', 'In summer it is very hot in Tiberias.')
  ],
  cloze: [
    cloze('טְבֶרְיָה נִמְצֵאת עַל שְׂפַת ___.', 'Tiberias is on the shore of the ___.', ['הַכִּנֶּרֶת', 'הַמִּדְבָּר', 'הַהַר']),
    cloze('בִּטְבֶרְיָה יֵשׁ מַעְיָנוֹת מַיִם ___.', 'Tiberias has ___ water springs.', ['חַמִּים', 'קְפוּאִים', 'שְׁחוֹרִים']),
    cloze('בַּמִּסְעָדוֹת אוֹכְלִים ___ מִן הַכִּנֶּרֶת.', 'In the restaurants people eat ___ from the Kinneret.', ['דָּג', 'גְּמַלִּים', 'שֶׁלֶג']),
    cloze('טְבֶרְיָה נִמְצֵאת בַּגָּלִיל, בְּ___ הָאָרֶץ.', 'Tiberias is in the Galilee, in the ___ of the country.', ['צָפוֹן', 'דָּרוֹם', 'מֶרְכָּז']),
    cloze('הַשֵּׁם טְבֶרְיָה בָּא מִשֵּׁם הַקֵּיסָר ___.', 'The name Tiberias comes from the emperor ___.', ['טִיבֶּרְיוּס', 'נֶפּוֹלֶיאוֹן', 'אַבְרָהָם']),
    cloze('בַּקַּיִץ בִּטְבֶרְיָה מָזֶג הָאֲוִיר ___ מְאוֹד.', 'In summer the weather in Tiberias is very ___.', ['חַם', 'קַר', 'קָפוּא'])
  ],
  places: [
    place('טַיֶּלֶת טְבֶרְיָה', 'The Tiberias promenade', ['sky', [['🚶', 130, 195, 70], ['🌴', 62, 150, 90], ['⛵', 300, 150, 80], ['🏨', 335, 120, 70]]],
      'לְאֹרֶךְ הַכִּנֶּרֶת יֵשׁ טַיֶּלֶת עִם מִסְעָדוֹת וּבָתֵּי מָלוֹן.', 'Along the Kinneret there is a promenade with restaurants and hotels.'),
    place('הַכִּנֶּרֶת', 'The Kinneret', ['sea', [['⛵', 150, 160, 90], ['🏞️', 300, 140, 70], ['🦆', 80, 210, 50]]],
      'הַכִּנֶּרֶת הִיא אֲגַם מַיִם מְתוּקִים בַּצָּפוֹן.', 'The Kinneret is a freshwater lake in the north.'),
    place('הַמַּעְיָנוֹת הַחַמִּים', 'The hot springs', ['green', [['♨️', 200, 170, 100], ['🧖', 100, 205, 60], ['🌴', 62, 130, 80], ['🌴', 338, 130, 80]]],
      'אֲנָשִׁים מִתְרַחֲצִים בְּמַעְיָנוֹת הַמַּיִם הַחַמִּים.', 'People bathe in the hot water springs.'),
    place('קֶבֶר הָרַמְבַּ"ם', 'The grave of the Rambam', ['old', [['🕯️', 200, 150, 90], ['🕍', 100, 170, 70], ['🌳', 320, 170, 80]]],
      'בִּטְבֶרְיָה נִמְצָא קִבְרוֹ שֶׁל הָרַמְבַּ"ם.', 'The grave of the Rambam (Maimonides) is in Tiberias.'),
    place('הַר אַרְבֵּל', 'Mount Arbel', ['mountain', [['⛰️', 200, 130, 130], ['🏞️', 80, 205, 60], ['🥾', 320, 205, 60]]],
      'מֵהַר אַרְבֵּל רוֹאִים אֶת כָּל הַכִּנֶּרֶת.', 'From Mount Arbel you can see the whole Kinneret.'),
    place('מִסְעֲדַת דָּגִים', 'A fish restaurant', ['city', [['🐟', 200, 160, 90], ['🍽️', 100, 200, 60], ['🍋', 300, 205, 60], ['🌊', 330, 130, 60]]],
      'בַּמִּסְעָדָה אוֹכְלִים דָּג טָרִי מִן הַכִּנֶּרֶת.', 'In the restaurant people eat fresh fish from the Kinneret.')
  ],
  quiz: [
    quiz('עַל שְׂפַת אֵיזֶה אֲגַם נִמְצֵאת טְבֶרְיָה?', 'On the shore of which lake is Tiberias?', ['הַכִּנֶּרֶת', 'יָם הַמֶּלַח', 'הַיָּם הַתִּיכוֹן', 'הַיַּרְקוֹן'], 'טְבֶרְיָה נִמְצֵאת עַל שְׂפַת הַכִּנֶּרֶת.', 'Tiberias is on the shore of the Kinneret.'),
    quiz('בְּאֵיזֶה אֵזוֹר נִמְצֵאת טְבֶרְיָה?', 'In which area is Tiberias?', ['בַּצָּפוֹן', 'בַּנֶּגֶב', 'בְּמִישׁוֹר הַחוֹף', 'בְּיָם סוּף'], 'טְבֶרְיָה נִמְצֵאת בַּצָּפוֹן, בַּגָּלִיל.', 'Tiberias is in the north, in the Galilee.'),
    quiz('מִמִּי בָּא הַשֵּׁם טְבֶרְיָה?', 'After whom is Tiberias named?', ['הַקֵּיסָר טִיבֶּרְיוּס', 'דָּוִד הַמֶּלֶךְ', 'הַמֶּלֶךְ שְׁלֹמֹה', 'הַקֵּיסָר נֶרוֹן'], 'הָעִיר נִקְרֵאת עַל שֵׁם הַקֵּיסָר הָרוֹמִי טִיבֶּרְיוּס.', 'The city is named after the Roman emperor Tiberius.'),
    quiz('כַּמָּה עָרֵי קֹדֶשׁ יֵשׁ לַיְּהוּדִים?', 'How many holy cities do Jews have?', ['אַרְבַּע', 'אַחַת', 'שֵׁשׁ', 'עֶשֶׂר'], 'יֵשׁ אַרְבַּע עָרֵי קֹדֶשׁ: יְרוּשָׁלַיִם, צְפַת, טְבֶרְיָה וְחֶבְרוֹן.', 'There are four holy cities: Jerusalem, Safed, Tiberias and Hebron.'),
    quiz('מָה יֵשׁ בִּטְבֶרְיָה מִתַּחַת לָאֲדָמָה?', 'What does Tiberias have under the ground?', ['מַעְיָנוֹת מַיִם חַמִּים', 'שֶׁלֶג', 'מִדְבָּר', 'נָמֵל'], 'בִּטְבֶרְיָה יֵשׁ מַעְיָנוֹת מַיִם חַמִּים.', 'Tiberias has hot water springs.'),
    quiz('אֵיזֶה דָּג מְפֻרְסָם בִּטְבֶרְיָה?', 'Which fish is famous in Tiberias?', ['אַמְנוּן — דַּג פֶּטְרוֹס', 'כְּרִישׁ', 'דּוֹלְפִין', 'סַלְמוֹן'], 'הָאַמְנוּן מִן הַכִּנֶּרֶת הוּא דָּג מְפֻרְסָם.', 'The amnun from the Kinneret is a famous fish.'),
    quiz('אֵיזֶה חָכָם גָּדוֹל קָבוּר בִּטְבֶרְיָה?', 'Which great sage is buried in Tiberias?', ['הָרַמְבַּ"ם', 'בֶּן־גּוּרְיוֹן', 'הַרְצֶל', 'אַבְרָהָם אָבִינוּ'], 'קִבְרוֹ שֶׁל הָרַמְבַּ"ם נִמְצָא בִּטְבֶרְיָה.', 'The grave of the Rambam is in Tiberias.'),
    quiz('מָה אֶפְשָׁר לַעֲשׂוֹת עַל הַכִּנֶּרֶת?', 'What can you do on the Kinneret?', ['לְהִפְלִיג בְּסִירָה', 'לְהַחְלִיק עַל שֶׁלֶג', 'לִרְכֹּב עַל גָּמָל', 'לִנְסוֹעַ בְּרַכֶּבֶת'], 'אֶפְשָׁר לְהִפְלִיג בְּסִירָה עַל הַכִּנֶּרֶת.', 'You can sail a boat on the Kinneret.'),
    quiz('כַּמָּה תּוֹשָׁבִים בִּטְבֶרְיָה?', 'How many people live in Tiberias?', ['כִּ־50,000', 'כְּ־5', 'כְּ־5 מִילְיוֹן', 'כְּ־500'], 'בִּטְבֶרְיָה גָּרִים כִּ־50,000 אֲנָשִׁים.', 'About 50,000 people live in Tiberias.')
  ]
};
})();
