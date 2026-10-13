/* רָעֲנָנָה — Raanana */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['raanana'] = {
  title: { he: 'רָעֲנָנָה', en: 'Raanana' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'מִישׁוֹר הַחוֹף, בַּשָּׁרוֹן', 'Coastal Plain, in the Sharon'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּ־80,000', 'about 80,000'),
    stat('📅', 'נוֹסְדָה', 'Founded', 'בִּשְׁנַת 1921', 'in 1921')
  ],
  slides: [
    slide('🌳', 'רָעֲנָנָה', 'Raanana',
      'רָעֲנָנָה הִיא עִיר יְרֻקָּה וּנְעִימָה בְּמֶרְכַּז הַמְּדִינָה. יֵשׁ בָּהּ הַרְבֵּה עֵצִים וּפַּארְקִים.',
      'Raanana is a green and pleasant city in the center of the country. It has many trees and parks.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'רָעֲנָנָה נִמְצֵאת בְּמִישׁוֹר הַחוֹף, בְּאֵזוֹר הַשָּׁרוֹן, מִצָּפוֹן לְתֵל אָבִיב.',
      'Raanana is in the Coastal Plain, in the Sharon area, north of Tel Aviv.'),
    slide('🏷️', 'הַשֵּׁם', 'The name',
      'הַמִּלָּה "רַעֲנָן" פֵּרוּשָׁהּ יָרֹק וְטָרִי. הַשֵּׁם רָעֲנָנָה מַתְאִים לָעִיר הַיְּרֻקָּה.',
      'The word “ra’anan” means green and fresh. The name Raanana fits the green city.'),
    slide('📅', 'הַהִיסְטוֹרְיָה', 'History',
      'רָעֲנָנָה נוֹסְדָה בִּשְׁנַת 1921. בַּהַתְחָלָה הָיְתָה יִשּׁוּב קָטָן שֶׁל חַקְלָאִים.',
      'Raanana was founded in 1921. At first it was a small community of farmers.'),
    slide('🌳', 'פַּארְק רָעֲנָנָה', 'Park Raanana',
      'בְּלֵב הָעִיר יֵשׁ פַּארְק גָּדוֹל עִם אֲגַם, גְּשָׁרִים וּבַרְבּוּרִים. מִשְׁפָּחוֹת בָּאוֹת לְטַיֵּל וְלַעֲשׂוֹת פִּיקְנִיק.',
      'In the heart of the city there is a big park with a lake, bridges and swans. Families come to walk and have picnics.'),
    slide('💻', 'הַיְי־טֶק', 'High-tech',
      'בְּרָעֲנָנָה יֵשׁ הַרְבֵּה חֲבֵרוֹת מַחְשְׁבִים וְהַיְי־טֶק. אֲנָשִׁים רַבִּים עוֹבְדִים שָׁם.',
      'Raanana has many computer and high-tech companies. Many people work there.'),
    slide('🗣️', 'שָׂפוֹת', 'Languages',
      'בְּרָעֲנָנָה גָּרִים הַרְבֵּה אֲנָשִׁים שֶׁבָּאוּ מֵאַרְצוֹת דּוֹבְרוֹת אַנְגְּלִית. שׁוֹמְעִים בָּעִיר עִבְרִית וְגַם אַנְגְּלִית.',
      'Many people who came from English-speaking countries live in Raanana. In the city you hear Hebrew and also English.'),
    slide('☕', 'רְחוֹב אֲחוּזָה', 'Ahuza Street',
      'בְּרְחוֹב אֲחוּזָה, הָרְחוֹב הָרָאשִׁי, יֵשׁ חֲנוּיוֹת, מִסְעָדוֹת וּבָתֵּי קָפֶה.',
      'On Ahuza Street, the main street, there are shops, restaurants and cafés.'),
    slide('🚴', 'אוֹפַנַּיִם', 'Bikes',
      'בְּרָעֲנָנָה אֶפְשָׁר לִרְכֹּב עַל אוֹפַנַּיִם בֵּין הַפַּארְקִים, הַגַּנִּים וְהָרְחוֹבוֹת.',
      'In Raanana you can ride a bike between the parks, gardens and streets.')
  ],
  memory: [
    mem('עֵץ', '🌳', 'בְּרָעֲנָנָה יֵשׁ הַרְבֵּה עֵצִים.', 'Raanana has many trees.'),
    mem('אֲגַם', '🌊', 'בַּפַּארְק יֵשׁ אֲגַם.', 'The park has a lake.'),
    mem('בַּרְבּוּר', '🦢', 'בָּאֲגַם שׂוֹחִים בַּרְבּוּרִים.', 'Swans swim on the lake.'),
    mem('פִּיקְנִיק', '🧺', 'מִשְׁפָּחוֹת עוֹשׂוֹת פִּיקְנִיק בַּפַּארְק.', 'Families have picnics in the park.'),
    mem('מַחְשֵׁב', '💻', 'בְּרָעֲנָנָה יֵשׁ חֲבֵרוֹת הַיְי־טֶק.', 'Raanana has high-tech companies.'),
    mem('אוֹפַנַּיִם', '🚴', 'רוֹכְבִים עַל אוֹפַנַּיִם בֵּין הַפַּארְקִים.', 'People ride bikes between the parks.'),
    mem('בֵּית קָפֶה', '☕', 'בְּרְחוֹב אֲחוּזָה יֵשׁ בָּתֵּי קָפֶה.', 'Ahuza Street has cafés.'),
    mem('חֲנוּת', '🛍️', 'בְּרְחוֹב אֲחוּזָה יֵשׁ חֲנוּיוֹת.', 'Ahuza Street has shops.')
  ],
  cloze: [
    cloze('רָעֲנָנָה הִיא עִיר ___ וּנְעִימָה.', 'Raanana is a ___ and pleasant city.', ['יְרֻקָּה', 'שְׁחוֹרָה', 'קָרָה']),
    cloze('רָעֲנָנָה נוֹסְדָה בִּשְׁנַת ___.', 'Raanana was founded in ___.', ['1921', '1500', '2020']),
    cloze('בַּפַּארְק יֵשׁ ___ גָּדוֹל עִם בַּרְבּוּרִים.', 'The park has a big ___ with swans.', ['אֲגַם', 'מִדְבָּר', 'הַר']),
    cloze('מִשְׁפָּחוֹת בָּאוֹת לַפַּארְק לַעֲשׂוֹת ___.', 'Families come to the park to have a ___.', ['פִּיקְנִיק', 'צְלִילָה', 'שֶׁלֶג']),
    cloze('בְּרָעֲנָנָה יֵשׁ הַרְבֵּה חֲבֵרוֹת ___.', 'Raanana has many ___ companies.', ['הַיְי־טֶק', 'דַּיָּגִים', 'גְּמַלִּים']),
    cloze('רְחוֹב אֲחוּזָה הוּא הָרְחוֹב ___.', 'Ahuza Street is the ___ street.', ['הָרָאשִׁי', 'הַיָּבֵשׁ', 'הַקָּפוּא'])
  ],
  places: [
    place('פַּארְק רָעֲנָנָה', 'Park Raanana', ['green', [['🌳', 62, 150, 90], ['🦢', 200, 222, 56], ['🌳', 338, 150, 90], ['🌉', 200, 140, 60]]],
      'בַּפַּארְק יֵשׁ אֲגַם, גְּשָׁרִים וּבַרְבּוּרִים.', 'The park has a lake, bridges and swans.'),
    place('הַפִּיקְנִיק', 'The picnic', ['green', [['🧺', 200, 190, 90], ['🍉', 100, 205, 60], ['🥪', 305, 205, 60], ['🌳', 62, 130, 80], ['🌳', 338, 130, 80]]],
      'מִשְׁפָּחוֹת עוֹשׂוֹת פִּיקְנִיק בַּפַּארְק.', 'Families have picnics in the park.'),
    place('חֲבֵרַת הַיְי־טֶק', 'A high-tech company', ['sky', [['🏢', 200, 125, 130], ['💻', 80, 192, 70], ['🖥️', 322, 192, 70]]],
      'בְּרָעֲנָנָה עוֹבְדִים הַרְבֵּה אֲנָשִׁים בְּהַיְי־טֶק.', 'In Raanana many people work in high-tech.'),
    place('רְחוֹב אֲחוּזָה', 'Ahuza Street', ['city', [['☕', 110, 170, 80], ['🛍️', 290, 170, 80], ['🚶', 200, 208, 66], ['🌳', 200, 140, 70]]],
      'בְּרְחוֹב אֲחוּזָה יֵשׁ חֲנוּיוֹת וּבָתֵּי קָפֶה.', 'Ahuza Street has shops and cafés.'),
    place('הָאֲגַם', 'The lake', ['green', [['🦢', 130, 190, 80], ['🌳', 62, 130, 80], ['🌳', 338, 130, 80], ['⛲', 290, 200, 70]]],
      'בְּלֵב הַפַּארְק יֵשׁ אֲגַם עִם פֶּסֶל.', 'In the heart of the park there is a lake with a sculpture.'),
    place('הַבָּתִּים הַיְרֻקִּים', 'The green neighborhoods', ['green', [['🏡', 110, 150, 90], ['🏡', 290, 156, 86], ['🌳', 200, 160, 90]]],
      'בְּרָעֲנָנָה יֵשׁ בָּתִּים בֵּין עֵצִים.', 'Raanana has houses among trees.')
  ],
  quiz: [
    quiz('בְּאֵיזֶה אֵזוֹר נִמְצֵאת רָעֲנָנָה?', 'In which area is Raanana?', ['בְּמִישׁוֹר הַחוֹף', 'בַּנֶּגֶב', 'בַּגָּלִיל', 'בְּהָרֵי יְהוּדָה'], 'רָעֲנָנָה נִמְצֵאת בְּמִישׁוֹר הַחוֹף.', 'Raanana is in the Coastal Plain.'),
    quiz('מָה פֵּרוּשׁ הַמִּלָּה "רַעֲנָן"?', 'What does the word “ra’anan” mean?', ['יָרֹק וְטָרִי', 'חַם וְיָבֵשׁ', 'קַר וְלָבָן', 'גָּבוֹהַּ מְאוֹד'], '"רַעֲנָן" פֵּרוּשׁוֹ יָרֹק וְטָרִי.', '“Ra’anan” means green and fresh.'),
    quiz('בְּאֵיזוֹ שָׁנָה נוֹסְדָה רָעֲנָנָה?', 'In what year was Raanana founded?', ['1921', '1948', '1500', '2020'], 'רָעֲנָנָה נוֹסְדָה בִּשְׁנַת 1921.', 'Raanana was founded in 1921.'),
    quiz('מָה יֵשׁ בְּפַּארְק רָעֲנָנָה?', 'What is in Park Raanana?', ['אֲגַם וּבַרְבּוּרִים', 'מִדְבָּר וּגְמַלִּים', 'שֶׁלֶג', 'נָמֵל'], 'בַּפַּארְק יֵשׁ אֲגַם, גְּשָׁרִים וּבַרְבּוּרִים.', 'The park has a lake, bridges and swans.'),
    quiz('מָה עוֹשִׂים מִשְׁפָּחוֹת בַּפַּארְק?', 'What do families do in the park?', ['מְטַיְּלוֹת וְעוֹשׂוֹת פִּיקְנִיק', 'צוֹלְלוֹת', 'מַחְלִיקוֹת עַל שֶׁלֶג', 'נוֹסְעוֹת בִּסְפִינָה'], 'מִשְׁפָּחוֹת מְטַיְּלוֹת וְעוֹשׂוֹת פִּיקְנִיק בַּפַּארְק.', 'Families walk and have picnics in the park.'),
    quiz('בְּאֵיזֶה תְּחוּם עוֹבְדִים הַרְבֵּה אֲנָשִׁים בְּרָעֲנָנָה?', 'In which field do many people work in Raanana?', ['הַיְי־טֶק', 'דַּיִג', 'רַעְיַת גְּמַלִּים', 'מִכְרוֹת'], 'בְּרָעֲנָנָה עוֹבְדִים הַרְבֵּה אֲנָשִׁים בְּהַיְי־טֶק.', 'In Raanana many people work in high-tech.'),
    quiz('מָה שֵׁם הָרְחוֹב הָרָאשִׁי בְּרָעֲנָנָה?', 'What is the main street in Raanana called?', ['רְחוֹב אֲחוּזָה', 'רְחוֹב הַיָּם', 'רְחוֹב הַמִּדְבָּר', 'רְחוֹב הַשֶּׁלֶג'], 'רְחוֹב אֲחוּזָה הוּא הָרְחוֹב הָרָאשִׁי.', 'Ahuza Street is the main street.'),
    quiz('כַּמָּה תּוֹשָׁבִים בְּרָעֲנָנָה?', 'How many people live in Raanana?', ['כִּ־80,000', 'כְּ־8', 'כְּ־10 מִילְיוֹן', 'כְּ־800'], 'בְּרָעֲנָנָה גָּרִים כִּ־80,000 אֲנָשִׁים.', 'About 80,000 people live in Raanana.')
  ]
};
})();
