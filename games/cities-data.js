/* ערים בישראל — נתונים / Cities of Israel — data
 *
 * HOW TO ADD A NEW CITY LESSON
 *  1. The city is already listed in CITIES below (name, area, map position).
 *  2. Add a block to CITY_LESSONS with the same id (copy the 'tel-aviv' block as a template).
 *     The map and the city picker switch the city from "בקרוב" to playable automatically.
 *  3. Every text is { he: "Hebrew with niqqud", en: "English" }.
 *
 * Lesson block:
 *   stats   – 3 small facts shown above the slides
 *   slides  – the "get to know the city" slides (title, text)
 *   memory  – 8 pairs: word (he) + picture (emoji) + fact shown when the pair is found
 *   cloze   – "complete the sentence": he has ___ for the gap, options[0] is the right answer
 *   order   – "put the words in order": he is the full correct sentence
 *   quiz    – trivia: options[0] is the right answer (the game shuffles them), why = explanation
 */

window.REGIONS = [
  { id: 'north', he: 'הַצָּפוֹן', en: 'The North', icon: '🌿', color: '#8fd18a',
    blurb: { he: 'בַּצָּפוֹן יֵשׁ הָרִים, עֲמָקִים וְהַרְבֵּה יָרוֹק. כָּאן יוֹרֵד הַכִּי הַרְבֵּה גֶּשֶׁם.',
             en: 'The north has mountains, valleys and lots of green. It gets the most rain.' },
    facts: [
      { icon: '⛰️', he: 'הַר מֵירוֹן — הֶהָר הַגָּבוֹהַּ בַּגָּלִיל (כְּ־1,200 מֶטֶר)', en: 'Mount Meron — the highest mountain in the Galilee (about 1,200 m)' },
      { icon: '🏞️', he: 'הַכִּנֶּרֶת — אֲגַם גָּדוֹל שֶׁל מַיִם מְתוּקִים', en: 'The Kinneret — a big freshwater lake' },
      { icon: '🌧️', he: 'יוֹתֵר גֶּשֶׁם וְיוֹתֵר יָרוֹק', en: 'More rain and more green' },
      { icon: '🏙️', he: 'חֵיפָה — עִיר גְּדוֹלָה עַל הַר הַכַּרְמֶל', en: 'Haifa — a big city on Mount Carmel' }
    ] },
  { id: 'coast', he: 'מִישׁוֹר הַחוֹף', en: 'The Coastal Plain', icon: '🏖️', color: '#c4a6ee',
    blurb: { he: 'מִישׁוֹר הַחוֹף הוּא אֵזוֹר שָׁטוּחַ לְיַד הַיָּם הַתִּיכוֹן. הַרְבֵּה אֲנָשִׁים גָּרִים כָּאן.',
             en: 'The Coastal Plain is a flat area next to the Mediterranean Sea. Lots of people live here.' },
    facts: [
      { icon: '🏖️', he: 'חוֹפִים יָפִים עַל הַיָּם הַתִּיכוֹן', en: 'Beautiful beaches on the Mediterranean Sea' },
      { icon: '🏙️', he: 'הַרְבֵּה עָרִים וְהַרְבֵּה אֲנָשִׁים', en: 'Many cities and many people' },
      { icon: '🍊', he: 'תַּפּוּזִים וְחַקְלָאוּת', en: 'Oranges and farming' },
      { icon: '🛣️', he: 'אֵזוֹר שָׁטוּחַ — קַל לִנְסֹעַ', en: 'A flat area — easy to travel' }
    ] },
  { id: 'shfela', he: 'הַשְּׁפֵלָה', en: 'The Shfela (Lowlands)', icon: '🍇', color: '#f2d57a',
    blurb: { he: 'הַשְּׁפֵלָה הִיא אֵזוֹר שֶׁל גְּבָעוֹת נְמוּכוֹת בֵּין הַחוֹף לֶהָרִים. מִשָּׁם עוֹלִים לִירוּשָׁלַיִם.',
             en: 'The Shfela is an area of low hills between the coast and the mountains. From here you go up to Jerusalem.' },
    facts: [
      { icon: '⛰️', he: 'גְּבָעוֹת נְמוּכוֹת בֵּין הַחוֹף לֶהָרִים', en: 'Low hills between the coast and the mountains' },
      { icon: '🍇', he: 'כְּרָמִים וְשָׂדוֹת', en: 'Vineyards and fields' },
      { icon: '🕍', he: 'יְרוּשָׁלַיִם נִמְצֵאת בְּהָרֵי יְהוּדָה, לְיַד הַשְּׁפֵלָה', en: 'Jerusalem is in the Judean Mountains, next to the Shfela' }
    ] },
  { id: 'negev', he: 'הַנֶּגֶב', en: 'The Negev', icon: '🏜️', color: '#f0b27a',
    blurb: { he: 'הַנֶּגֶב הוּא מִדְבָּר גָּדוֹל בַּדָּרוֹם. יֵשׁ בּוֹ הַרְבֵּה שֶׁמֶשׁ וּמְעַט גֶּשֶׁם.',
             en: 'The Negev is a big desert in the south. It has lots of sun and little rain.' },
    facts: [
      { icon: '🏜️', he: 'הַנֶּגֶב הוּא כְּ־60% מִשֵּׁטַח הַמְּדִינָה', en: 'The Negev is about 60% of the country’s area' },
      { icon: '🌵', he: 'מְעַט גֶּשֶׁם וְהַרְבֵּה שֶׁמֶשׁ', en: 'Little rain and lots of sun' },
      { icon: '🕳️', he: 'מַכְתֵּשׁ רָמוֹן — מַכְתֵּשׁ עֲנָק בַּמִּדְבָּר', en: 'Makhtesh Ramon — a giant crater in the desert' },
      { icon: '🐐', he: 'בַּנֶּגֶב גָּרִים יְעֵלִים וּבֶדוּאִים', en: 'Ibexes and Bedouin live in the Negev' }
    ] }
];

/* Facts about Israel — shown on the map page before an area is chosen */
window.ISRAEL_FACTS = [
  { icon: '🏛️', label: { he: 'בִּירָה', en: 'Capital' }, value: { he: 'יְרוּשָׁלַיִם', en: 'Jerusalem' } },
  { icon: '📅', label: { he: 'הַמְּדִינָה קָמָה', en: 'Founded' }, value: { he: 'בִּשְׁנַת 1948', en: 'in 1948' } },
  { icon: '👥', label: { he: 'תּוֹשָׁבִים', en: 'People' }, value: { he: 'כְּ־10 מִילְיוֹן', en: 'about 10 million' } },
  { icon: '🗣️', label: { he: 'שָׂפוֹת', en: 'Languages' }, value: { he: 'עִבְרִית וַעֲרָבִית', en: 'Hebrew and Arabic' } },
  { icon: '💰', label: { he: 'כֶּסֶף', en: 'Money' }, value: { he: 'שֶׁקֶל', en: 'the shekel' } },
  { icon: '📏', label: { he: 'אֹרֶךְ', en: 'Length' }, value: { he: 'כְּ־420 קִילוֹמֶטֶר מִצָּפוֹן לַדָּרוֹם', en: 'about 420 km from north to south' } },
  { icon: '🌊', label: { he: 'יַמִּים', en: 'Seas' }, value: { he: 'הַיָּם הַתִּיכוֹן, יַם סוּף, הַכִּנֶּרֶת וְיַם הַמֶּלַח', en: 'the Mediterranean, the Red Sea, the Kinneret and the Dead Sea' } },
  { icon: '🧂', label: { he: 'הַמָּקוֹם הַנָּמוּךְ בָּעוֹלָם', en: 'Lowest place on Earth' }, value: { he: 'יַם הַמֶּלַח — כְּ־430 מֶטֶר מִתַּחַת לִפְנֵי הַיָּם', en: 'the Dead Sea — about 430 m below sea level' } },
  { icon: '☀️', label: { he: 'מֶזֶג אֲוִיר', en: 'Weather' }, value: { he: 'קַיִץ חַם וְיָבֵשׁ, חֹרֶף גָּשׁוּם', en: 'hot dry summer, rainy winter' } }
];

/* Every city of the school classes. lat/lon = place on the map.
   side: which side of the dot the name is written ('r' or 'l'); dy = small vertical shift. */
window.CITIES = [
  { id: 'tel-aviv',  he: 'תֵּל אָבִיב',  en: 'Tel Aviv',   region: 'coast',  lat: 32.08, lon: 34.78, emoji: '🏙️', side: 'l', dy: -2 },
  { id: 'haifa',     he: 'חֵיפָה',       en: 'Haifa',      region: 'north',  lat: 32.80, lon: 34.99, emoji: '⚓', side: 'l' },
  { id: 'jerusalem', he: 'יְרוּשָׁלַיִם', en: 'Jerusalem',  region: 'shfela', lat: 31.77, lon: 35.21, emoji: '🕍', side: 'r' },
  { id: 'beer-sheva',he: 'בְּאֵר שֶׁבַע', en: 'Beer Sheva', region: 'negev',  lat: 31.25, lon: 34.79, emoji: '🏜️', side: 'l', dy: 3 },
  { id: 'eilat',     he: 'אֵילַת',       en: 'Eilat',      region: 'negev',  lat: 29.56, lon: 34.96, emoji: '🐠', side: 'l' },
  { id: 'safed',     he: 'צְפַת',        en: 'Safed',      region: 'north',  lat: 32.96, lon: 35.50, emoji: '🕯️', side: 'r' },
  { id: 'rahat',     he: 'רַהַט',        en: 'Rahat',      region: 'negev',  lat: 31.39, lon: 34.75, emoji: '🐪', side: 'l', dy: -3 },
  { id: 'nazareth',  he: 'נְצֶרֶת',      en: 'Nazareth',   region: 'north',  lat: 32.70, lon: 35.30, emoji: '⛪', side: 'r', dy: 3 },
  { id: 'yotvata',   he: 'יוֹטְבָתָה',   en: 'Yotvata',    region: 'negev',  lat: 29.89, lon: 35.06, emoji: '🥛', side: 'l' },
  { id: 'holon',     he: 'חוֹלוֹן',      en: 'Holon',      region: 'coast',  lat: 32.01, lon: 34.77, emoji: '🎠', side: 'l', dy: 5 },
  { id: 'givatayim', he: 'גִּבְעָתַיִם', en: 'Givatayim',  region: 'coast',  lat: 32.07, lon: 34.81, emoji: '🔭', side: 'r', dy: -2 },
  { id: 'arad',      he: 'עֲרָד',        en: 'Arad',       region: 'negev',  lat: 31.26, lon: 35.21, emoji: '🌬️', side: 'r' },
  { id: 'raanana',   he: 'רָעֲנָנָה',    en: 'Raanana',    region: 'coast',  lat: 32.18, lon: 34.87, emoji: '🌳', side: 'r' },
  { id: 'metula',    he: 'מְטוּלָה',     en: 'Metula',     region: 'north',  lat: 33.28, lon: 35.58, emoji: '🍎', side: 'l' },
  { id: 'ashdod',    he: 'אַשְׁדּוֹד',   en: 'Ashdod',     region: 'coast',  lat: 31.80, lon: 34.66, emoji: '🚢', side: 'l' }
];

window.CITY_LESSONS = {};

/* ───────────────────────── תֵּל אָבִיב ───────────────────────── */
window.CITY_LESSONS['tel-aviv'] = {
  title: { he: 'תֵּל אָבִיב־יָפוֹ', en: 'Tel Aviv-Yafo' },
  stats: [
    { icon: '📍', label: { he: 'אֵזוֹר', en: 'Area' }, value: { he: 'מִישׁוֹר הַחוֹף', en: 'Coastal Plain' } },
    { icon: '👥', label: { he: 'תּוֹשָׁבִים', en: 'People' }, value: { he: 'כִּמְעַט חֲצִי מִילְיוֹן', en: 'almost half a million' } },
    { icon: '📅', label: { he: 'נוֹסְדָה', en: 'Founded' }, value: { he: 'בִּשְׁנַת 1909', en: 'in 1909' } }
  ],
  slides: [
    { icon: '🏙️', title: { he: 'תֵּל אָבִיב־יָפוֹ', en: 'Tel Aviv-Yafo' },
      text: { he: 'תֵּל אָבִיב הִיא עִיר גְּדוֹלָה עַל חוֹף הַיָּם הַתִּיכוֹן. יֵשׁ בָּהּ חוֹף, מִגְדָּלִים וְהַרְבֵּה אֲנָשִׁים.',
              en: 'Tel Aviv is a big city on the Mediterranean coast. It has a beach, skyscrapers and lots of people.' } },
    { icon: '📍', title: { he: 'אֵיפֹה?', en: 'Where?' },
      text: { he: 'תֵּל אָבִיב נִמְצֵאת בְּמֶרְכַּז יִשְׂרָאֵל, בְּמִישׁוֹר הַחוֹף.',
              en: 'Tel Aviv is in the center of Israel, in the Coastal Plain.' } },
    { icon: '🏷️', title: { he: 'הַשֵּׁם', en: 'The name' },
      text: { he: '"תֵּל" הוּא גִּבְעָה עַתִּיקָה. "אָבִיב" הוּא עוֹנָה בַּשָּׁנָה. תֵּל אָבִיב = גִּבְעַת הָאָבִיב.',
              en: 'A “tel” is an ancient hill. “Aviv” is spring (a season of the year). Tel Aviv = “Hill of Spring”.' } },
    { icon: '📅', title: { he: 'הַהִיסְטוֹרְיָה', en: 'History' },
      text: { he: 'תֵּל אָבִיב נוֹסְדָה בִּשְׁנַת 1909, לְיַד יָפוֹ הָעַתִּיקָה. הִיא גָּדְלָה מַהֵר.',
              en: 'Tel Aviv was founded in 1909, next to ancient Jaffa. It grew fast.' } },
    { icon: '📜', title: { he: '1948', en: '1948' },
      text: { he: 'בִּשְׁנַת 1948 קָרְאוּ בְּתֵל אָבִיב אֶת מְגִלַּת הָעַצְמָאוּת. כָּךְ קָמָה מְדִינַת יִשְׂרָאֵל.',
              en: 'In 1948 the Declaration of Independence was read in Tel Aviv. That is how the State of Israel was established.' } },
    { icon: '⚪', title: { he: 'הָעִיר הַלְּבָנָה', en: 'The White City' },
      text: { he: 'בְּתֵל אָבִיב יֵשׁ הַרְבֵּה בָּתִּים לְבָנִים. לָכֵן קוֹרְאִים לָהּ "הָעִיר הַלְּבָנָה". בִּשְׁנַת 2003 בָּחֲרָה אוּנֶסְקוֹ בַּבָּתִּים הָאֵלֶּה כְּאוֹצָר שֶׁל כָּל הָעוֹלָם.',
              en: 'Tel Aviv has many white buildings, so it is called “the White City”. In 2003 UNESCO chose these buildings as a treasure of the whole world.' } },
    { icon: '🏖️', title: { he: 'חוֹפִים', en: 'Beaches' },
      text: { he: 'יֵשׁ בְּתֵל אָבִיב כְּ־14 קִילוֹמֶטֶר שֶׁל חוֹפִים. אֲנָשִׁים שׂוֹחִים, מְשַׂחֲקִים מַטְקוֹת וְרוֹכְבִים עַל אוֹפַנַּיִם.',
              en: 'Tel Aviv has about 14 km of beaches. People swim, play matkot and ride bikes.' } },
    { icon: '🌃', title: { he: 'הָעִיר שֶׁלֹּא יְשֵׁנָה', en: 'The city that never sleeps' },
      text: { he: 'בְּתֵל אָבִיב מִסְעָדוֹת וּבָתֵּי קָפֶה פְּתוּחִים גַּם בַּלַּיְלָה. לָכֵן אוֹמְרִים: "הָעִיר שֶׁלֹּא יְשֵׁנָה".',
              en: 'In Tel Aviv, restaurants and cafés are open at night too. That is why people say: “the city that never sleeps”.' } },
    { icon: '🏢', title: { he: 'מִגְדָּלִים', en: 'Skyscrapers' },
      text: { he: 'בְּתֵל אָבִיב יֵשׁ הַרְבֵּה מִגְדָּלִים גְּבוֹהִים. מִגְדְּלֵי עֲזְרִיאֵלִי הֵם שְׁלוֹשָׁה: מִגְדָּל עָגֹל, מִגְדָּל מְשֻׁלָּשׁ וּמִגְדָּל מְרֻבָּע.',
              en: 'Tel Aviv has many tall towers. The Azrieli Towers are three: a round tower, a triangle tower and a square tower.' } },
    { icon: '🍅', title: { he: 'שׁוּק הַכַּרְמֶל', en: 'The Carmel Market' },
      text: { he: 'בְּשׁוּק הַכַּרְמֶל קוֹנִים יְרָקוֹת, פֵּרוֹת וְאֹכֶל טָעִים. הַשּׁוּק צִבְעוֹנִי וְרוֹעֵשׁ.',
              en: 'At the Carmel Market you buy vegetables, fruit and tasty food. The market is colorful and noisy.' } },
    { icon: '⚓', title: { he: 'יָפוֹ', en: 'Jaffa' },
      text: { he: 'יָפוֹ הִיא עִיר עַתִּיקָה, וְיֵשׁ בָּהּ נָמֵל. הַיּוֹם יָפוֹ וְתֵל אָבִיב הֵן עִיר אַחַת.',
              en: 'Jaffa is an ancient city and it has a port. Today Jaffa and Tel Aviv are one city.' } }
  ],
  memory: [
    { he: 'חוֹף', pic: '🏖️', fact: { he: 'בְּתֵל אָבִיב יֵשׁ חוֹפִים יָפִים.', en: 'Tel Aviv has beautiful beaches.' } },
    { he: 'מִגְדָּלִים', pic: '🏙️', fact: { he: 'בְּתֵל אָבִיב יֵשׁ הַרְבֵּה מִגְדָּלִים גְּבוֹהִים.', en: 'Tel Aviv has many tall towers.' } },
    { he: 'נָמֵל', pic: '⚓', fact: { he: 'בְּיָפוֹ יֵשׁ נָמֵל עַתִּיק.', en: 'Jaffa has an ancient port.' } },
    { he: 'אוֹפַנַּיִם', pic: '🚲', fact: { he: 'רוֹכְבִים עַל אוֹפַנַּיִם בַּחוֹף וּבָעִיר.', en: 'People ride bikes on the beach and in the city.' } },
    { he: 'שׁוּק', pic: '🍅', fact: { he: 'בְּשׁוּק הַכַּרְמֶל קוֹנִים יְרָקוֹת וּפֵרוֹת.', en: 'At the Carmel Market you buy vegetables and fruit.' } },
    { he: 'פָּלָאפֶל', pic: '🥙', fact: { he: 'בְּתֵל אָבִיב אוֹכְלִים פָּלָאפֶל טָעִים.', en: 'In Tel Aviv people eat tasty falafel.' } },
    { he: 'תֵּיאַטְרוֹן', pic: '🎭', fact: { he: 'תֵּיאַטְרוֹן הַבִּימָה נִמְצָא בְּתֵל אָבִיב.', en: 'The Habima Theatre is in Tel Aviv.' } },
    { he: 'מְגִלַּת הָעַצְמָאוּת', pic: '📜', fact: { he: 'בִּשְׁנַת 1948 קָרְאוּ אֶת מְגִלַּת הָעַצְמָאוּת בְּתֵל אָבִיב.', en: 'In 1948 the Declaration of Independence was read in Tel Aviv.' } }
  ],
  cloze: [
    { he: 'תֵּל אָבִיב נִמְצֵאת עַל שְׂפַת ___.', en: 'Tel Aviv is on the edge of the ___.', options: ['הַיָּם', 'הַמִּדְבָּר', 'הָהָר'] },
    { he: 'הַבָּתִּים הַלְּבָנִים הֵם "הָעִיר ___".', en: 'The white houses are “the ___ City”.', options: ['הַלְּבָנָה', 'הַיְּרֻקָּה', 'הַכְּחֻלָּה'] },
    { he: 'בְּתֵל אָבִיב רוֹכְבִים עַל ___.', en: 'In Tel Aviv people ride ___.', options: ['אוֹפַנַּיִם', 'גְּמַלִּים', 'סוּסִים'] },
    { he: 'בִּשְׁנַת 1948 קָרְאוּ בְּתֵל אָבִיב אֶת מְגִלַּת ___.', en: 'In 1948 the Scroll of ___ was read in Tel Aviv.', options: ['הָעַצְמָאוּת', 'הַחֹרֶף', 'הַשַּׁבָּת'] },
    { he: 'תֵּל אָבִיב נוֹסְדָה בִּשְׁנַת ___.', en: 'Tel Aviv was founded in ___.', options: ['1909', '1500', '2020'] },
    { he: 'בְּשׁוּק הַכַּרְמֶל קוֹנִים יְרָקוֹת וּ___.', en: 'At the Carmel Market you buy vegetables and ___.', options: ['פֵּרוֹת', 'מְכוֹנִיּוֹת', 'מְטוֹסִים'] },
    { he: 'תֵּל אָבִיב הִיא הָעִיר שֶׁלֹּא ___.', en: 'Tel Aviv is the city that never ___.', options: ['יְשֵׁנָה', 'אוֹכֶלֶת', 'רוֹקֶדֶת'] }
  ],
  order: [
    { he: 'תֵּל אָבִיב נִמְצֵאת עַל חוֹף הַיָּם הַתִּיכוֹן.', en: 'Tel Aviv is on the Mediterranean coast.' },
    { he: 'בְּתֵל אָבִיב יֵשׁ הַרְבֵּה מִגְדָּלִים גְּבוֹהִים.', en: 'Tel Aviv has many tall towers.' },
    { he: 'בְּתֵל אָבִיב רוֹכְבִים עַל אוֹפַנַּיִם בַּחוֹף.', en: 'In Tel Aviv people ride bikes on the beach.' },
    { he: 'בָּעִיר הַלְּבָנָה יֵשׁ בָּתִּים לְבָנִים.', en: 'In the White City there are white houses.' },
    { he: 'תֵּל אָבִיב הִיא הָעִיר שֶׁלֹּא יְשֵׁנָה.', en: 'Tel Aviv is the city that never sleeps.' }
  ],
  quiz: [
    { q: { he: 'עַל חוֹף אֵיזֶה יָם נִמְצֵאת תֵּל אָבִיב?', en: 'Which sea is Tel Aviv on?' },
      options: ['הַיָּם הַתִּיכוֹן', 'יַם סוּף', 'יַם הַמֶּלַח', 'הַכִּנֶּרֶת'],
      why: { he: 'תֵּל אָבִיב עַל חוֹף הַיָּם הַתִּיכוֹן.', en: 'Tel Aviv is on the Mediterranean coast.' } },
    { q: { he: 'בְּאֵיזוֹ שָׁנָה נוֹסְדָה תֵּל אָבִיב?', en: 'In what year was Tel Aviv founded?' },
      options: ['1909', '1948', '1850', '2000'],
      why: { he: 'תֵּל אָבִיב נוֹסְדָה בִּשְׁנַת 1909.', en: 'Tel Aviv was founded in 1909.' } },
    { q: { he: 'מָה זֶה "אָבִיב"?', en: 'What is “aviv”?' },
      options: ['עוֹנָה בַּשָּׁנָה', 'שֵׁם שֶׁל הַר', 'סוּג שֶׁל אֹכֶל', 'יָם'],
      why: { he: 'אָבִיב הוּא עוֹנָה בַּשָּׁנָה.', en: 'Aviv is a season of the year — spring.' } },
    { q: { he: 'אֵיזוֹ עִיר עַתִּיקָה נִמְצֵאת לְיַד תֵּל אָבִיב?', en: 'Which ancient city is next to Tel Aviv?' },
      options: ['יָפוֹ', 'צְפַת', 'אֵילַת', 'עֲרָד'],
      why: { he: 'יָפוֹ הִיא עִיר עַתִּיקָה, וְהִיא חֵלֶק מִתֵּל אָבִיב.', en: 'Jaffa is an ancient city and part of Tel Aviv today.' } },
    { q: { he: 'מָה צֶבַע הַבָּתִּים בְּ"הָעִיר הַלְּבָנָה"?', en: 'What color are the houses in “the White City”?' },
      options: ['לָבָן', 'אָדֹם', 'כָּחֹל', 'יָרֹק'],
      why: { he: 'הַבָּתִּים לְבָנִים — לָכֵן "הָעִיר הַלְּבָנָה".', en: 'The houses are white — so “the White City”.' } },
    { q: { he: 'מָה קָרָה בְּתֵל אָבִיב בִּשְׁנַת 1948?', en: 'What happened in Tel Aviv in 1948?' },
      options: ['קָרְאוּ אֶת מְגִלַּת הָעַצְמָאוּת', 'בָּנוּ אֶת מִגְדְּלֵי עֲזְרִיאֵלִי', 'פָּתְחוּ אֶת הָרַכֶּבֶת הַקַּלָּה', 'מָצְאוּ אֶת הַיָּם הַתִּיכוֹן'],
      why: { he: 'בִּשְׁנַת 1948 קָרְאוּ בְּתֵל אָבִיב אֶת מְגִלַּת הָעַצְמָאוּת.', en: 'In 1948 the Declaration of Independence was read in Tel Aviv.' } },
    { q: { he: 'מָה אֶפְשָׁר לִרְאוֹת בְּתֵל אָבִיב?', en: 'What can you see in Tel Aviv?' },
      options: ['חוֹף וּמִגְדָּלִים', 'מִדְבָּר וּגְמַלִּים', 'שֶׁלֶג וְהָרִים', 'יַעַר גָּדוֹל'],
      why: { he: 'בְּתֵל אָבִיב יֵשׁ חוֹף וּמִגְדָּלִים.', en: 'Tel Aviv has a beach and towers.' } },
    { q: { he: 'אֵיפֹה בְּיִשְׂרָאֵל נִמְצֵאת תֵּל אָבִיב?', en: 'Where in Israel is Tel Aviv?' },
      options: ['בְּמִישׁוֹר הַחוֹף', 'בַּנֶּגֶב', 'בַּצָּפוֹן, בֶּהָרִים', 'בַּמִּדְבָּר'],
      why: { he: 'תֵּל אָבִיב נִמְצֵאת בְּמִישׁוֹר הַחוֹף.', en: 'Tel Aviv is in the Coastal Plain.' } },
    { q: { he: 'כַּמָּה אֲנָשִׁים גָּרִים בְּתֵל אָבִיב?', en: 'How many people live in Tel Aviv?' },
      options: ['כִּמְעַט חֲצִי מִילְיוֹן', 'כְּמֵאָה אֲנָשִׁים', 'כְּ־2,000 אֲנָשִׁים', 'כְּעֶשְׂרָה מִילְיוֹן'],
      why: { he: 'בְּתֵל אָבִיב גָּרִים כִּמְעַט חֲצִי מִילְיוֹן אֲנָשִׁים.', en: 'Almost half a million people live in Tel Aviv.' } },
    { q: { he: 'מָה אוֹמְרִים עַל תֵּל אָבִיב?', en: 'What do people say about Tel Aviv?' },
      options: ['הָעִיר שֶׁלֹּא יְשֵׁנָה', 'הָעִיר שֶׁל הַשֶּׁלֶג', 'הָעִיר הַקְּטַנָּה בְּיוֹתֵר', 'עִיר בַּמִּדְבָּר'],
      why: { he: 'הַמִּסְעָדוֹת פְּתוּחוֹת גַּם בַּלַּיְלָה — "הָעִיר שֶׁלֹּא יְשֵׁנָה".', en: 'Restaurants are open at night — “the city that never sleeps”.' } },
    { q: { he: 'מָה קוֹנִים בְּשׁוּק הַכַּרְמֶל?', en: 'What do you buy at the Carmel Market?' },
      options: ['יְרָקוֹת וּפֵרוֹת', 'מְכוֹנִיּוֹת', 'מַחְשְׁבִים', 'אוֹפַנּוֹעִים'],
      why: { he: 'בְּשׁוּק הַכַּרְמֶל קוֹנִים יְרָקוֹת וּפֵרוֹת.', en: 'At the Carmel Market you buy vegetables and fruit.' } }
  ]
};
