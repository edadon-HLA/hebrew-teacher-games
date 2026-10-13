/* הֶרְצְלִיָּה — Herzliya */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['herzliya'] = {
  title: { he: 'הֶרְצְלִיָּה', en: 'Herzliya' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'מִישׁוֹר הַחוֹף, בַּשָּׁרוֹן', 'Coastal Plain, in the Sharon'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּ־100,000', 'about 100,000'),
    stat('📅', 'נוֹסְדָה', 'Founded', 'בִּשְׁנַת 1924', 'in 1924')
  ],
  slides: [
    slide('🏖️', 'הֶרְצְלִיָּה', 'Herzliya',
      'הֶרְצְלִיָּה הִיא עִיר עַל חוֹף הַיָּם הַתִּיכוֹן. יֵשׁ בָּהּ חוֹפִים יָפִים, מְשַׂרְדִים וְהַרְבֵּה אֲנָשִׁים שֶׁעוֹבְדִים בְּהַיְי־טֶק.',
      'Herzliya is a city on the Mediterranean coast. It has beautiful beaches, offices and many people who work in high-tech.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'הֶרְצְלִיָּה נִמְצֵאת בְּמִישׁוֹר הַחוֹף, בְּאֵזוֹר הַשָּׁרוֹן, מִצָּפוֹן לְתֵל אָבִיב.',
      'Herzliya is in the Coastal Plain, in the Sharon area, north of Tel Aviv.'),
    slide('🏷️', 'הַשֵּׁם', 'The name',
      'הַשֵּׁם הֶרְצְלִיָּה בָּא מִשְּׁמוֹ שֶׁל בִּנְיָמִין זְאֵב הֶרְצֶל, הֶחָזוֹן שֶׁל הַמְּדִינָה הַיְּהוּדִית.',
      'The name Herzliya comes from Theodor Herzl, the visionary of the Jewish state.'),
    slide('📅', 'הַהִיסְטוֹרְיָה', 'History',
      'הֶרְצְלִיָּה נוֹסְדָה בִּשְׁנַת 1924 כְּיִשּׁוּב קָטָן. הִיא גָּדְלָה וְנִהְיְתָה עִיר גְּדוֹלָה.',
      'Herzliya was founded in 1924 as a small community. It grew and became a big city.'),
    slide('⛵', 'הַמָּרִינָה', 'The marina',
      'בַּמָּרִינָה שֶׁל הֶרְצְלִיָּה עוֹמְדוֹת הַרְבֵּה סִירוֹת וִיכטוֹת. אֶפְשָׁר לָלֶכֶת לְיַד הַמַּיִם וְלֶאֱכֹל גְּלִידָה.',
      'In the Herzliya marina many boats and yachts are docked. You can walk by the water and eat ice cream.'),
    slide('🏖️', 'הַחוֹפִים', 'The beaches',
      'בְּהֶרְצְלִיָּה יֵשׁ חוֹפִים רְחָבִים עִם חוֹל זָהֹב. אֲנָשִׁים בָּאִים לְשַׂחֵק וְלִשְׂחוֹת בַּקַּיִץ.',
      'Herzliya has wide beaches with golden sand. People come to play and swim in summer.'),
    slide('🎓', 'הָאוּנִיבֶרְסִיטָה', 'The university',
      'בְּהֶרְצְלִיָּה יֵשׁ אוּנִיבֶרְסִיטָה מְפֻרְסֶמֶת — אוּנִיבֶרְסִיטַת רַייכְמַן. סְטוּדֶנְטִים רַבִּים לוֹמְדִים שָׁם.',
      'Herzliya has a famous university — Reichman University. Many students study there.'),
    slide('💻', 'הֶרְצְלִיָּה פִּתּוּחַ', 'Herzliya Pituach',
      'בְּאֵזוֹר הֶרְצְלִיָּה פִּתּוּחַ יֵשׁ מִגְדָּלִים עִם מִשְׂרָדִים שֶׁל חֲבֵרוֹת הַיְי־טֶק, וְגַם בָּתֵּי מָלוֹן עַל הַחוֹף.',
      'In the Herzliya Pituach area there are towers with offices of high-tech companies, and also hotels on the beach.'),
    slide('🚴', 'אוֹפַנַּיִם', 'Bikes',
      'בְּהֶרְצְלִיָּה אֶפְשָׁר לִרְכֹּב עַל אוֹפַנַּיִם בְּשְׁבִילִים יָפִים לְיַד הַיָּם.',
      'In Herzliya you can ride a bike on nice paths by the sea.')
  ],
  memory: [
    mem('חוֹף', '🏖️', 'בְּהֶרְצְלִיָּה יֵשׁ חוֹפִים יָפִים.', 'Herzliya has beautiful beaches.'),
    mem('מָרִינָה', '⛵', 'בַּמָּרִינָה עוֹמְדוֹת סִירוֹת.', 'Boats are docked in the marina.'),
    mem('יַכְטָה', '🛥️', 'הַיַּכְטוֹת עוֹמְדוֹת בַּמָּרִינָה.', 'The yachts stand in the marina.'),
    mem('חוֹל', '🏝️', 'עַל הַחוֹף יֵשׁ חוֹל זָהֹב.', 'The beach has golden sand.'),
    mem('גְּלִידָה', '🍦', 'אוֹכְלִים גְּלִידָה לְיַד הַיָּם.', 'People eat ice cream by the sea.'),
    mem('סְטוּדֶנְט', '🎓', 'סְטוּדֶנְטִים לוֹמְדִים בָּאוּנִיבֶרְסִיטָה.', 'Students study at the university.'),
    mem('מַחְשֵׁב', '💻', 'בְּהֶרְצְלִיָּה יֵשׁ חֲבֵרוֹת הַיְי־טֶק.', 'Herzliya has high-tech companies.'),
    mem('אוֹפַנַּיִם', '🚴', 'רוֹכְבִים עַל אוֹפַנַּיִם לְיַד הַיָּם.', 'People ride bikes by the sea.')
  ],
  cloze: [
    cloze('הֶרְצְלִיָּה נִמְצֵאת עַל חוֹף הַיָּם ___.', 'Herzliya is on the coast of the ___ Sea.', ['הַתִּיכוֹן', 'הַמֵּת', 'הָאָדֹם']),
    cloze('הֶרְצְלִיָּה נוֹסְדָה בִּשְׁנַת ___.', 'Herzliya was founded in ___.', ['1924', '1500', '2020']),
    cloze('בַּמָּרִינָה עוֹמְדוֹת הַרְבֵּה ___.', 'Many ___ are docked in the marina.', ['סִירוֹת', 'גְּמַלִּים', 'אֶשְׁכּוֹלִיּוֹת']),
    cloze('הַשֵּׁם הֶרְצְלִיָּה בָּא מִשֵּׁם ___.', 'The name Herzliya comes from the name ___.', ['הֶרְצֶל', 'בֶּן־גּוּרְיוֹן', 'אַבְרָהָם']),
    cloze('בְּהֶרְצְלִיָּה יֵשׁ חוֹף עִם ___ זָהֹב.', 'Herzliya has a beach with golden ___.', ['חוֹל', 'שֶׁלֶג', 'מַיִם קְפוּאִים']),
    cloze('בְּהֶרְצְלִיָּה לוֹמְדִים בָּאוּנִיבֶרְסִיטָה ___.', 'In Herzliya, ___ study at the university.', ['סְטוּדֶנְטִים', 'דַּיָּגִים', 'גְּמַלִּים'])
  ],
  places: [
    place('חוֹף הַיָּם', 'The beach', ['beach', [['🏖️', 200, 170, 90], ['⛱️', 100, 190, 70], ['🏐', 310, 205, 56], ['🌊', 330, 130, 60]]],
      'עַל הַחוֹף יֵשׁ חוֹל זָהֹב וּמַיִם כְּחֻלִּים.', 'The beach has golden sand and blue water.'),
    place('הַמָּרִינָה', 'The marina', ['sea', [['⛵', 120, 160, 90], ['🛥️', 290, 175, 80], ['⛵', 200, 135, 60], ['🍦', 330, 215, 50]]],
      'בַּמָּרִינָה עוֹמְדוֹת סִירוֹת וִיכטוֹת.', 'Boats and yachts are docked in the marina.'),
    place('הָאוּנִיבֶרְסִיטָה', 'The university', ['city', [['🎓', 200, 170, 90], ['🏛️', 200, 118, 110], ['📚', 90, 205, 60], ['🚲', 320, 205, 60]]],
      'בְּהֶרְצְלִיָּה יֵשׁ אוּנִיבֶרְסִיטָה מְפֻרְסֶמֶת.', 'Herzliya has a famous university.'),
    place('מִגְדְּלֵי הַיְי־טֶק', 'The high-tech towers', ['sky', [['🏢', 130, 130, 120], ['🏢', 270, 140, 110], ['💻', 200, 205, 70]]],
      'בְּהֶרְצְלִיָּה פִּתּוּחַ יֵשׁ מִגְדָּלִים עִם מִשְׂרָדִים.', 'Herzliya Pituach has towers with offices.'),
    place('בֵּית הַמָּלוֹן עַל הַחוֹף', 'The beach hotel', ['beach', [['🏨', 200, 130, 130], ['🌴', 80, 175, 80], ['🌴', 330, 175, 80], ['🏊', 200, 215, 56]]],
      'עַל חוֹף הֶרְצְלִיָּה יֵשׁ בָּתֵּי מָלוֹן.', 'On the Herzliya coast there are hotels.'),
    place('שְׁבִיל הָאוֹפַנַּיִם', 'The bike path', ['green', [['🚴', 200, 185, 80], ['🌳', 62, 140, 90], ['🌳', 338, 140, 90], ['🌊', 330, 215, 50]]],
      'רוֹכְבִים עַל אוֹפַנַּיִם בַּשְּׁבִילִים לְיַד הַיָּם.', 'People ride bikes on the paths by the sea.')
  ],
  quiz: [
    quiz('בְּאֵיזֶה אֵזוֹר נִמְצֵאת הֶרְצְלִיָּה?', 'In which area is Herzliya?', ['בְּמִישׁוֹר הַחוֹף', 'בַּנֶּגֶב', 'בַּגָּלִיל', 'בְּהָרֵי יְהוּדָה'], 'הֶרְצְלִיָּה נִמְצֵאת בְּמִישׁוֹר הַחוֹף.', 'Herzliya is in the Coastal Plain.'),
    quiz('מִמִּי בָּא הַשֵּׁם הֶרְצְלִיָּה?', 'After whom is Herzliya named?', ['בִּנְיָמִין זְאֵב הֶרְצֶל', 'דָּוִד בֶּן־גּוּרְיוֹן', 'אַבְרָהָם אָבִינוּ', 'הַמֶּלֶךְ דָּוִד'], 'הָעִיר נִקְרֵאת עַל שֵׁם הֶרְצֶל.', 'The city is named after Herzl.'),
    quiz('בְּאֵיזוֹ שָׁנָה נוֹסְדָה הֶרְצְלִיָּה?', 'In what year was Herzliya founded?', ['1924', '1948', '1500', '2020'], 'הֶרְצְלִיָּה נוֹסְדָה בִּשְׁנַת 1924.', 'Herzliya was founded in 1924.'),
    quiz('לְיַד אֵיזוֹ עִיר גְּדוֹלָה נִמְצֵאת הֶרְצְלִיָּה?', 'Near which big city is Herzliya?', ['תֵּל אָבִיב', 'אֵילַת', 'צְפַת', 'בְּאֵר שֶׁבַע'], 'הֶרְצְלִיָּה נִמְצֵאת מִצָּפוֹן לְתֵל אָבִיב.', 'Herzliya is north of Tel Aviv.'),
    quiz('מָה עוֹמֵד בַּמָּרִינָה?', 'What is docked in the marina?', ['סִירוֹת וִיכטוֹת', 'גְּמַלִּים', 'מְכוֹנִיּוֹת', 'מְטוֹסִים'], 'בַּמָּרִינָה עוֹמְדוֹת סִירוֹת וִיכטוֹת.', 'Boats and yachts are docked in the marina.'),
    quiz('אֵיזֶה מָקוֹם לִמּוּדִים יֵשׁ בְּהֶרְצְלִיָּה?', 'What place of learning is in Herzliya?', ['אוּנִיבֶרְסִיטַת רַייכְמַן', 'מִכְרֶה', 'נָמֵל', 'מִדְבָּר'], 'בְּהֶרְצְלִיָּה יֵשׁ אוּנִיבֶרְסִיטַת רַייכְמַן.', 'Herzliya has Reichman University.'),
    quiz('בְּאֵיזֶה תְּחוּם עוֹבְדִים הַרְבֵּה אֲנָשִׁים בְּהֶרְצְלִיָּה?', 'In which field do many people work in Herzliya?', ['הַיְי־טֶק', 'דַּיִג', 'רַעְיַת גְּמַלִּים', 'מִכְרוֹת'], 'הַרְבֵּה אֲנָשִׁים עוֹבְדִים בְּהַיְי־טֶק.', 'Many people work in high-tech.'),
    quiz('מָה עוֹשִׂים בַּחוֹף?', 'What do people do at the beach?', ['שׂוֹחִים וּמְשַׂחֲקִים בַּחוֹל', 'מַחְלִיקִים עַל שֶׁלֶג', 'רוֹכְבִים עַל גְּמַלִּים', 'חוֹרְשִׁים שָׂדוֹת'], 'בַּחוֹף שׂוֹחִים וּמְשַׂחֲקִים בַּחוֹל.', 'At the beach people swim and play in the sand.'),
    quiz('כַּמָּה תּוֹשָׁבִים בְּהֶרְצְלִיָּה?', 'How many people live in Herzliya?', ['כִּ־100,000', 'כְּ־10', 'כְּ־10 מִילְיוֹן', 'כְּ־1,000'], 'בְּהֶרְצְלִיָּה גָּרִים כִּ־100,000 אֲנָשִׁים.', 'About 100,000 people live in Herzliya.')
  ]
};
})();
