/* ערים בישראל — נתונים / Cities of Israel — shared data
 *
 * HOW TO ADD A NEW CITY LESSON
 *  1. Find the city in CITIES below (name, area, position on the map) and set  ready: true
 *     (for a city that is not listed yet, add a line there first).
 *  2. Create  games/cities/<id>.js  — copy games/cities/tel-aviv.js and replace the content.
 *     It is loaded automatically when the teacher opens the city.
 *
 * A city file fills CITY_LESSONS['<id>'] using the helpers in window.CL:
 *   CL.stat(icon, labelHe, labelEn, valueHe, valueEn)        – 3 small facts above the slides
 *   CL.slide(icon, titleHe, titleEn, textHe, textEn)         – "get to know the city" slides
 *   CL.mem(wordHe, picture, factHe, factEn)                  – memory game: word + picture + fact (8 pairs)
 *   CL.cloze(sentenceHe_with___, sentenceEn, [right, wrong, wrong]) – complete the sentence (6–7)
 *   CL.place(nameHe, nameEn, picture, factHe, factEn)        – "what place is this?" picture game (6)
 *   CL.quiz(questionHe, questionEn, [right, wrong, wrong, wrong], whyHe, whyEn) – trivia (9–11)
 *
 * Pictures are drawn in the browser:  [background, [[emoji, x, y, size], ...], optionalDrawing]
 *   background: sky beach sea city green desert old night market mountain
 *   x: 0–400, y: 0–260.  optionalDrawing: azrieli, dome, wall, clock, bahai
 */

(() => {
const T = (he, en) => ({ he, en });
window.CL = {
  stat:  (icon, lh, le, vh, ve) => ({ icon, label: T(lh, le), value: T(vh, ve) }),
  slide: (icon, th, te, xh, xe) => ({ icon, title: T(th, te), text: T(xh, xe) }),
  mem:   (he, pic, fh, fe) => ({ he, pic, fact: T(fh, fe) }),
  cloze: (he, en, options) => ({ he, en, options }),
  place: (he, en, pic, fh, fe) => ({ he, en, pic, fact: T(fh, fe) }),
  quiz:  (qh, qe, options, wh, we) => ({ q: T(qh, qe), options, why: T(wh, we) })
};
})();

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
  { id: 'coast', he: 'מִישׁוֹר הַחוֹף', en: 'The Coastal Plain', icon: '🏖️', color: '#f4a6c0',
    blurb: { he: 'מִישׁוֹר הַחוֹף הוּא אֵזוֹר שָׁטוּחַ לְיַד הַיָּם הַתִּיכוֹן. הַרְבֵּה אֲנָשִׁים גָּרִים כָּאן.',
             en: 'The Coastal Plain is a flat area next to the Mediterranean Sea. Lots of people live here.' },
    facts: [
      { icon: '🏖️', he: 'חוֹפִים יָפִים עַל הַיָּם הַתִּיכוֹן', en: 'Beautiful beaches on the Mediterranean Sea' },
      { icon: '🏙️', he: 'הַרְבֵּה עָרִים וְהַרְבֵּה אֲנָשִׁים', en: 'Many cities and many people' },
      { icon: '🍊', he: 'תַּפּוּזִים וְחַקְלָאוּת', en: 'Oranges and farming' },
      { icon: '🛣️', he: 'אֵזוֹר שָׁטוּחַ — קַל לִנְסֹעַ', en: 'A flat area — easy to travel' }
    ] },
  { id: 'shfela', he: 'הַשְּׁפֵלָה', en: 'The Shfela (Lowlands)', icon: '🍇', color: '#f5dd7e',
    blurb: { he: 'הַשְּׁפֵלָה הִיא אֵזוֹר שֶׁל גְּבָעוֹת נְמוּכוֹת בֵּין הַחוֹף לֶהָרִים.',
             en: 'The Shfela is an area of low hills between the coast and the mountains.' },
    facts: [
      { icon: '⛰️', he: 'גְּבָעוֹת נְמוּכוֹת בֵּין הַחוֹף לֶהָרִים', en: 'Low hills between the coast and the mountains' },
      { icon: '🍇', he: 'כְּרָמִים וְשָׂדוֹת', en: 'Vineyards and fields' },
      { icon: '🚗', he: 'מֵהַשְּׁפֵלָה עוֹלִים לִירוּשָׁלַיִם', en: 'From the Shfela you go up to Jerusalem' }
    ] },
  { id: 'judea', he: 'הָרֵי יְהוּדָה', en: 'The Judean Hills', icon: '🕍', color: '#b8a0e0',
    blurb: { he: 'הָרֵי יְהוּדָה הֵם הָרִים גְּבוֹהִים בְּמֶרְכַּז הַמְּדִינָה. יְרוּשָׁלַיִם נִמְצֵאת בָּהֶם.',
             en: 'The Judean Hills are high mountains in the center of the country. Jerusalem is in them.' },
    facts: [
      { icon: '🕍', he: 'יְרוּשָׁלַיִם — הָעִיר הַגְּדוֹלָה בְּיוֹתֵר בְּיִשְׂרָאֵל', en: 'Jerusalem — the biggest city in Israel' },
      { icon: '🌡️', he: 'בֶּהָרִים קַר יוֹתֵר מִבַּחוֹף. לִפְעָמִים יֵשׁ שֶׁלֶג!', en: 'It is colder in the mountains than on the coast. Sometimes there is snow!' },
      { icon: '🫒', he: 'עֲצֵי זַיִת וַאֲבָנִים לְבָנוֹת', en: 'Olive trees and white stones' },
      { icon: '🏜️', he: 'מִזְרָחָה מֵהֶהָרִים מַתְחִיל מִדְבַּר יְהוּדָה', en: 'East of the hills the Judean Desert begins' }
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
   side: which side of the dot the name is written ('r' or 'l'); dy = small vertical shift.
   ready: true = the lesson exists (games/cities/<id>.js). */
window.CITIES = [
  { id: 'tel-aviv',  he: 'תֵּל אָבִיב',  en: 'Tel Aviv',   region: 'coast',  lat: 32.08, lon: 34.78, emoji: '🏙️', side: 'l', dy: -2, ready: true },
  { id: 'haifa',     he: 'חֵיפָה',       en: 'Haifa',      region: 'north',  lat: 32.80, lon: 34.99, emoji: '⚓', side: 'l', ready: true },
  { id: 'jerusalem', he: 'יְרוּשָׁלַיִם', en: 'Jerusalem',  region: 'judea',  lat: 31.77, lon: 35.21, emoji: '🕍', side: 'r', ready: true },
  { id: 'beer-sheva',he: 'בְּאֵר שֶׁבַע', en: 'Beer Sheva', region: 'negev',  lat: 31.25, lon: 34.79, emoji: '🐪', side: 'l', dy: 3, ready: true },
  { id: 'eilat',     he: 'אֵילַת',       en: 'Eilat',      region: 'negev',  lat: 29.56, lon: 34.96, emoji: '🐠', side: 'l', ready: true },
  { id: 'safed',     he: 'צְפַת',        en: 'Safed',      region: 'north',  lat: 32.96, lon: 35.50, emoji: '🕯️', side: 'r', ready: true },
  { id: 'rahat',     he: 'רַהַט',        en: 'Rahat',      region: 'negev',  lat: 31.39, lon: 34.75, emoji: '⛺', side: 'l', dy: -3, ready: true },
  { id: 'nazareth',  he: 'נְצֶרֶת',      en: 'Nazareth',   region: 'north',  lat: 32.70, lon: 35.30, emoji: '⛪', side: 'r', dy: 3, ready: true },
  { id: 'yotvata',   he: 'יוֹטְבָתָה',   en: 'Yotvata',    region: 'negev',  lat: 29.89, lon: 35.06, emoji: '🥛', side: 'l', ready: true },
  { id: 'holon',     he: 'חוֹלוֹן',      en: 'Holon',      region: 'coast',  lat: 32.01, lon: 34.77, emoji: '🎠', side: 'l', dy: 5, ready: true },
  { id: 'givatayim', he: 'גִּבְעָתַיִם', en: 'Givatayim',  region: 'coast',  lat: 32.07, lon: 34.81, emoji: '🔭', side: 'r', dy: -2, ready: true },
  { id: 'arad',      he: 'עֲרָד',        en: 'Arad',       region: 'negev',  lat: 31.26, lon: 35.21, emoji: '🌬️', side: 'r', ready: true },
  { id: 'raanana',   he: 'רָעֲנָנָה',    en: 'Raanana',    region: 'coast',  lat: 32.18, lon: 34.87, emoji: '🌳', side: 'r', ready: true },
  { id: 'metula',    he: 'מְטוּלָה',     en: 'Metula',     region: 'north',  lat: 33.28, lon: 35.58, emoji: '🍎', side: 'l', ready: true },
  { id: 'ashdod',    he: 'אַשְׁדּוֹד',   en: 'Ashdod',     region: 'coast',  lat: 31.80, lon: 34.66, emoji: '🚢', side: 'l', ready: true },
  { id: 'tiberias',  he: 'טְבֶרְיָה',    en: 'Tiberias',   region: 'north',  lat: 32.79, lon: 35.53, emoji: '🏞️', side: 'r', dy: -4, ready: true },
  { id: 'herzliya',  he: 'הֶרְצְלִיָּה', en: 'Herzliya',   region: 'coast',  lat: 32.17, lon: 34.84, emoji: '⛵', side: 'l', dy: -4, ready: true },
  { id: 'degania',   he: 'דְּגַנְיָה',    en: 'Degania',    region: 'north',  lat: 32.70, lon: 35.57, emoji: '🍌', side: 'r', dy: 5, ready: true }
];

window.CITY_LESSONS = {};
