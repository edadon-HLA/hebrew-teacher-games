/* חוֹלוֹן — Holon */
(() => { const { stat, slide, mem, cloze, place, quiz } = CL;
CITY_LESSONS['holon'] = {
  title: { he: 'חוֹלוֹן', en: 'Holon' },
  stats: [
    stat('📍', 'אֵזוֹר', 'Area', 'מִישׁוֹר הַחוֹף', 'Coastal Plain'),
    stat('👥', 'תּוֹשָׁבִים', 'People', 'כִּ־200,000', 'about 200,000'),
    stat('🏖️', 'הַשֵּׁם בָּא מִן', 'The name comes from', 'חוֹל', 'sand')
  ],
  slides: [
    slide('🎠', 'חוֹלוֹן', 'Holon',
      'חוֹלוֹן הִיא עִיר גְּדוֹלָה לְיַד תֵּל אָבִיב. יֵשׁ בָּהּ מוּזֵיאוֹנִים מְיֻחָדִים, בֵּין הַשְּׁאָר מוּזֵיאוֹן לִילָדִים.',
      'Holon is a big city next to Tel Aviv. It has special museums, among them a museum for children.'),
    slide('📍', 'אֵיפֹה?', 'Where?',
      'חוֹלוֹן נִמְצֵאת בְּמִישׁוֹר הַחוֹף, מִדָּרוֹם לְתֵל אָבִיב.',
      'Holon is in the Coastal Plain, south of Tel Aviv.'),
    slide('🏷️', 'הַשֵּׁם', 'The name',
      'הַשֵּׁם "חוֹלוֹן" בָּא מִן הַמִּלָּה "חוֹל". הָעִיר נִבְנְתָה עַל אֲדָמָה שֶׁל חוֹל.',
      'The name “Holon” comes from the word “hol” — sand. The city was built on sandy land.'),
    slide('📅', 'הַהִיסְטוֹרְיָה', 'History',
      'חוֹלוֹן נוֹסְדָה בִּשְׁנַת 1933 עַל הַחוֹל. הִיא גָּדְלָה וְהָפְכָה לְעִיר גְּדוֹלָה.',
      'Holon was founded in 1933 on the sand. It grew and became a big city.'),
    slide('🧸', 'מוּזֵיאוֹן הַיְלָדִים', 'The Children’s Museum',
      'בְּחוֹלוֹן יֵשׁ מוּזֵיאוֹן מְיֻחָד לִילָדִים. לוֹמְדִים בּוֹ וּמְשַׂחֲקִים.',
      'Holon has a special museum for children. You learn and play there.'),
    slide('🎨', 'מוּזֵיאוֹן הָעִצּוּב', 'The Design Museum',
      'בְּחוֹלוֹן יֵשׁ מוּזֵיאוֹן שֶׁל עִצּוּב. הַבִּנְיָן שֶׁלּוֹ מְיֻחָד מְאוֹד.',
      'Holon has a design museum. Its building is very special.'),
    slide('🎭', 'הָעַדְלָאיָדַע', 'The Adloyada',
      'בְּפּוּרִים יֵשׁ בְּחוֹלוֹן תַּהֲלוּכָה גְּדוֹלָה וְצִבְעוֹנִית: הָעַדְלָאיָדַע. הַיְלָדִים לוֹבְשִׁים תַּחְפֹּשׂוֹת.',
      'On Purim Holon has a big, colorful parade: the Adloyada. Children wear costumes.'),
    slide('📚', 'הַמֶּדְיָטֶק', 'The Mediatheque',
      'בְּחוֹלוֹן יֵשׁ סִפְרִיָּה גְּדוֹלָה וּמְיֻחֶדֶת שֶׁנִּקְרֵאת "הַמֶּדְיָטֶק".',
      'Holon has a big, special library called “the Mediatheque”.'),
    slide('🌳', 'פַּארְקִים', 'Parks',
      'בְּחוֹלוֹן יֵשׁ פַּארְקִים רַבִּים. אֶפְשָׁר לְשַׂחֵק, לָרוּץ וְלִרְכֹּב עַל אוֹפַנַּיִם.',
      'Holon has many parks. You can play, run and ride bikes.')
  ],
  memory: [
    mem('חוֹל', '🏖️', 'הַשֵּׁם חוֹלוֹן בָּא מִן הַמִּלָּה חוֹל.', 'The name Holon comes from the word “hol” — sand.'),
    mem('מוּזֵיאוֹן', '🏛️', 'בְּחוֹלוֹן יֵשׁ מוּזֵיאוֹנִים מְיֻחָדִים.', 'Holon has special museums.'),
    mem('צַעֲצוּעַ', '🧸', 'בְּמוּזֵיאוֹן הַיְלָדִים מְשַׂחֲקִים וְלוֹמְדִים.', 'At the Children’s Museum you play and learn.'),
    mem('תַּהֲלוּכָה', '🎪', 'בְּפּוּרִים יֵשׁ בְּחוֹלוֹן תַּהֲלוּכָה גְּדוֹלָה.', 'On Purim Holon has a big parade.'),
    mem('תַּחְפֹּשֶׂת', '🎭', 'בְּפּוּרִים לוֹבְשִׁים תַּחְפֹּשׂוֹת.', 'On Purim people wear costumes.'),
    mem('סֵפֶר', '📚', 'בַּמֶּדְיָטֶק יֵשׁ הַרְבֵּה סְפָרִים.', 'The Mediatheque has many books.'),
    mem('פַּארְק', '🌳', 'בְּחוֹלוֹן יֵשׁ פַּארְקִים רַבִּים.', 'Holon has many parks.'),
    mem('עִצּוּב', '🎨', 'הַמּוּזֵיאוֹן שֶׁל עִצּוּב מְיֻחָד מְאוֹד.', 'The design museum is very special.')
  ],
  cloze: [
    cloze('חוֹלוֹן נִמְצֵאת בְּמִישׁוֹר ___.', 'Holon is in the ___ Plain.', ['הַחוֹף', 'הַנֶּגֶב', 'הַכִּנֶּרֶת']),
    cloze('הַשֵּׁם "חוֹלוֹן" בָּא מִן הַמִּלָּה "___".', 'The name “Holon” comes from the word “___”.', ['חוֹל', 'יָם', 'הַר']),
    cloze('חוֹלוֹן נוֹסְדָה בִּשְׁנַת ___.', 'Holon was founded in ___.', ['1933', '1500', '2020']),
    cloze('בְּמוּזֵיאוֹן הַיְלָדִים ___ וְלוֹמְדִים.', 'At the Children’s Museum children ___ and learn.', ['מְשַׂחֲקִים', 'יְשֵׁנִים', 'שׁוֹחִים']),
    cloze('בְּפּוּרִים יֵשׁ בְּחוֹלוֹן תַּהֲלוּכָה ___ וְצִבְעוֹנִית.', 'On Purim Holon has a ___ and colorful parade.', ['גְּדוֹלָה', 'קְטַנְטַנָּה', 'שְׁחוֹרָה']),
    cloze('בַּמֶּדְיָטֶק יֵשׁ הַרְבֵּה ___.', 'The Mediatheque has many ___.', ['סְפָרִים', 'סְפִינוֹת', 'גְּמַלִּים'])
  ],
  places: [
    place('הַחוֹל', 'The sand', ['desert', [['🏖️', 200, 138, 110], ['🪣', 95, 205, 64], ['🏰', 315, 205, 70]]],
      'חוֹלוֹן נִבְנְתָה עַל חוֹל, וּמִמֶּנּוּ בָּא הַשֵּׁם.', 'Holon was built on sand, and the name comes from it.'),
    place('מוּזֵיאוֹן הַיְלָדִים', 'The Children’s Museum', ['sky', [['🏛️', 200, 125, 120], ['🧸', 80, 192, 70], ['🎈', 330, 118, 70], ['🧩', 320, 208, 56]]],
      'בְּמוּזֵיאוֹן הַיְלָדִים מְשַׂחֲקִים וְלוֹמְדִים.', 'At the Children’s Museum you play and learn.'),
    place('מוּזֵיאוֹן הָעִצּוּב', 'The Design Museum', ['sky', [['🎨', 200, 130, 110], ['🪑', 90, 190, 70], ['🖼️', 322, 172, 76]]],
      'הַבִּנְיָן שֶׁל מוּזֵיאוֹן הָעִצּוּב מְיֻחָד מְאוֹד.', 'The design museum building is very special.'),
    place('הָעַדְלָאיָדַע', 'The Adloyada parade', ['city', [['🎭', 130, 142, 90], ['🎪', 272, 150, 100], ['🎉', 200, 88, 60], ['🎊', 340, 118, 50]]],
      'בְּפּוּרִים יֵשׁ תַּהֲלוּכָה גְּדוֹלָה וְצִבְעוֹנִית.', 'On Purim there is a big, colorful parade.'),
    place('הַמֶּדְיָטֶק', 'The Mediatheque', ['sky', [['📚', 200, 130, 110], ['💻', 90, 192, 70], ['📖', 322, 192, 70]]],
      'בַּמֶּדְיָטֶק יֵשׁ הַרְבֵּה סְפָרִים וּמַחְשְׁבִים.', 'The Mediatheque has many books and computers.'),
    place('הַפַּארְק', 'The park', ['green', [['🌳', 70, 150, 90], ['🌳', 330, 150, 90], ['🚲', 200, 190, 80], ['🧺', 130, 232, 44]]],
      'בַּפַּארְק רוֹכְבִים עַל אוֹפַנַּיִם וּמְשַׂחֲקִים.', 'In the park people ride bikes and play.')
  ],
  quiz: [
    quiz('בְּאֵיזֶה אֵזוֹר נִמְצֵאת חוֹלוֹן?', 'In which area is Holon?', ['בְּמִישׁוֹר הַחוֹף', 'בַּנֶּגֶב', 'בַּגָּלִיל', 'בְּהָרֵי יְהוּדָה'], 'חוֹלוֹן נִמְצֵאת בְּמִישׁוֹר הַחוֹף.', 'Holon is in the Coastal Plain.'),
    quiz('מִמָּה בָּא הַשֵּׁם "חוֹלוֹן"?', 'Where does the name “Holon” come from?', ['מִן הַמִּלָּה "חוֹל"', 'מִן הַמִּלָּה "הַר"', 'מִן הַמִּלָּה "יָם"', 'מִן הַמִּלָּה "שֶׁלֶג"'], 'חוֹלוֹן נִבְנְתָה עַל חוֹל.', 'Holon was built on sand.'),
    quiz('לְיַד אֵיזוֹ עִיר גְּדוֹלָה נִמְצֵאת חוֹלוֹן?', 'Next to which big city is Holon?', ['תֵּל אָבִיב', 'חֵיפָה', 'אֵילַת', 'צְפַת'], 'חוֹלוֹן נִמְצֵאת מִדָּרוֹם לְתֵל אָבִיב.', 'Holon is south of Tel Aviv.'),
    quiz('בְּאֵיזוֹ שָׁנָה נוֹסְדָה חוֹלוֹן?', 'In what year was Holon founded?', ['1933', '1909', '1500', '2020'], 'חוֹלוֹן נוֹסְדָה בִּשְׁנַת 1933.', 'Holon was founded in 1933.'),
    quiz('מָה קוֹרֶה בְּחוֹלוֹן בְּפּוּרִים?', 'What happens in Holon on Purim?', ['הָעַדְלָאיָדַע — תַּהֲלוּכָה גְּדוֹלָה', 'מַרְתּוֹן בַּמִּדְבָּר', 'שֶׁלֶג וְהַחְלָקָה', 'צְלִילָה בַּיָּם'], 'בְּפּוּרִים יֵשׁ בְּחוֹלוֹן תַּהֲלוּכָה גְּדוֹלָה: הָעַדְלָאיָדַע.', 'On Purim Holon has a big parade: the Adloyada.'),
    quiz('מָה עוֹשִׂים בְּמוּזֵיאוֹן הַיְלָדִים?', 'What do you do at the Children’s Museum?', ['מְשַׂחֲקִים וְלוֹמְדִים', 'יְשֵׁנִים', 'שׁוֹחִים בַּיָּם', 'נוֹסְעִים בִּסְפִינָה'], 'בְּמוּזֵיאוֹן הַיְלָדִים מְשַׂחֲקִים וְלוֹמְדִים.', 'At the Children’s Museum you play and learn.'),
    quiz('מָה יֵשׁ בַּמֶּדְיָטֶק?', 'What is in the Mediatheque?', ['הַרְבֵּה סְפָרִים', 'הַרְבֵּה גְּמַלִּים', 'הַרְבֵּה שֶׁלֶג', 'הַרְבֵּה סְפִינוֹת'], 'הַמֶּדְיָטֶק הוּא סִפְרִיָּה גְּדוֹלָה.', 'The Mediatheque is a big library.'),
    quiz('כַּמָּה תּוֹשָׁבִים בְּחוֹלוֹן?', 'How many people live in Holon?', ['כִּ־200,000', 'כְּ־50', 'כְּ־10 מִילְיוֹן', 'כְּ־1,000'], 'בְּחוֹלוֹן גָּרִים כִּ־200,000 אֲנָשִׁים.', 'About 200,000 people live in Holon.')
  ]
};
})();
