/* "גִּרְסָה מֻרְחֶבֶת" for games/hebrew-hide-and-seek.html (?set=ext) — new hiding places drawn into the existing rooms.
 * Also used by the Niflaot lesson "הַבַּיִת שֶׁלָּנוּ 1" (click-to-hear rooms). The default game never shows any of this.
 *   art[room] = SVG added at the end of that room's <g id="a-ROOM">;  places = like PLACES in the game;  easy[room] = extra easy clues.
 *   Lesson 4 (bedroom words) will add to the same lists. */
window.HIDE_EXT = {
  art: {
    kitchen:
      /* microwave on the fridge */
      '<g class="ext-art"><rect x="353" y="282" width="46" height="28" rx="3" fill="#eceff1" stroke="#78909c" stroke-width="2"/><rect x="357" y="286" width="28" height="20" rx="2" fill="#37474f"/><rect x="359" y="288" width="10" height="16" fill="#546e7a" opacity=".6"/><rect x="388" y="287" width="8" height="4" fill="#80deea"/><circle cx="392" cy="298" r="2.5" fill="#607d8b"/><circle cx="392" cy="304" r="2" fill="#607d8b"/>' +
      /* knife and spoon on a wall rail */
      '<rect x="464" y="356" width="40" height="4" rx="2" fill="#78909c"/><rect x="473" y="359" width="5" height="12" rx="2" fill="#5d4037"/><path d="M472 371h7v14q-3 5-7 0z" fill="#e0e6ea" stroke="#78909c" stroke-width="1.2"/>' +
      '<rect x="490" y="359" width="4" height="16" rx="2" fill="#b0bec5" stroke="#78909c" stroke-width=".8"/><ellipse cx="492" cy="381" rx="6" ry="8" fill="#e0e6ea" stroke="#78909c" stroke-width="1.2"/>' +
      /* kettle on the table */
      '<path d="M564 428h20l-2-20h-16z" fill="#e53935" stroke="#b71c1c" stroke-width="1.5"/><path d="M583 411q9 5 1 14" stroke="#b71c1c" stroke-width="3" fill="none"/><path d="M566 412l-8-6" stroke="#b71c1c" stroke-width="3" stroke-linecap="round"/><rect x="567" y="404" width="14" height="4" rx="2" fill="#b71c1c"/>' +
      /* dishwasher (in front of the table) */
      '<rect x="459" y="402" width="38" height="52" rx="3" fill="url(#gMetal)" stroke="#78909c" stroke-width="2.5"/><rect x="462" y="405" width="32" height="8" rx="2" fill="#546e7a"/><circle cx="467" cy="409" r="1.8" fill="#80deea"/><circle cx="473" cy="409" r="1.8" fill="#fff"/><rect x="467" y="420" width="22" height="4" rx="2" fill="#90a4ae"/><path d="M462 440h32" stroke="#b0bec5" stroke-width="2"/></g>',
    bath:
      /* shelf over the toilet: cup with toothbrush + toothpaste, comb */
      '<g class="ext-art"><rect x="544" y="116" width="54" height="5" rx="2" fill="#a1887f"/>' +
      '<g transform="rotate(-10 556 100)"><rect x="555" y="90" width="3" height="18" fill="#42a5f5"/><rect x="553" y="86" width="6" height="6" rx="1" fill="#fff" stroke="#90a4ae" stroke-width=".8"/></g>' +
      '<path d="M561 106l2-16h5l2 16z" fill="#fff" stroke="#e53935" stroke-width="1.5"/><rect x="562" y="86" width="7" height="4" fill="#e53935"/>' +
      '<path d="M549 116l2-12h14l2 12z" fill="#80cbc4" stroke="#00897b" stroke-width="1.2"/>' +
      '<rect x="576" y="104" width="20" height="5" rx="1.5" fill="#6a1b9a"/><path d="M577.5 109v6M580.5 109v6M583.5 109v6M586.5 109v6M589.5 109v6M592.5 109v6M595 109v6" stroke="#6a1b9a" stroke-width="1.3"/>' +
      /* shampoo on the bath edge */
      '<rect x="352" y="150" width="14" height="21" rx="3" fill="#7e57c2" stroke="#4527a0" stroke-width="1"/><rect x="355" y="144" width="8" height="7" rx="1" fill="#fff" stroke="#4527a0" stroke-width=".8"/><rect x="354" y="157" width="10" height="6" rx="1" fill="#fff" opacity=".7"/></g>',
    living:
      /* air conditioner */
      '<g class="ext-art"><rect x="216" y="274" width="64" height="22" rx="6" fill="#fafafa" stroke="#90a4ae" stroke-width="2"/><path d="M222 290h52" stroke="#b0bec5" stroke-width="2"/><circle cx="272" cy="281" r="2" fill="#66bb6a"/><path d="M224 300q4 5 0 9M276 300q4 5 0 9" stroke="#81d4fa" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      /* remote control on the sofa */
      '<g transform="rotate(-8 129 428)"><rect x="118" y="424" width="22" height="8" rx="3" fill="#212121"/><circle cx="123" cy="428" r="1.6" fill="#e53935"/><circle cx="129" cy="428" r="1.2" fill="#9e9e9e"/><circle cx="134" cy="428" r="1.2" fill="#9e9e9e"/></g>' +
      /* armchair in front of the TV */
      '<rect x="232" y="420" width="46" height="34" rx="10" fill="#8e24aa"/><rect x="226" y="438" width="14" height="32" rx="6" fill="#6a1b9a"/><rect x="270" y="438" width="14" height="32" rx="6" fill="#6a1b9a"/><rect x="238" y="446" width="34" height="18" rx="6" fill="#ab47bc"/><rect x="232" y="468" width="5" height="9" fill="#4a148c"/><rect x="273" y="468" width="5" height="9" fill="#4a148c"/></g>'
  },
  places: [
    { id: 'x_microwave', room: 'kitchen', n: 'מִיקְרוֹגַל', hard: 'לְיַד הַמִּיקְרוֹגַל', z: ['r', 350, 278, 52, 32] },
    { id: 'x_kettle', room: 'kitchen', n: 'קֻמְקוּם', hard: 'לְיַד הַקֻּמְקוּם', z: ['r', 554, 398, 38, 32] },
    { id: 'x_dishwasher', room: 'kitchen', n: 'מֵדִיחַ כֵּלִים', hard: 'לְיַד מֵדִיחַ הַכֵּלִים', z: ['r', 456, 400, 44, 56] },
    { id: 'x_cutlery', room: 'kitchen', n: 'סַכִּין וְכַף', hard: 'לְיַד הַסַּכִּין וְהַכַּף', z: ['r', 462, 350, 46, 40] },
    { id: 'x_teeth', room: 'bath', n: 'מִבְרֶשֶׁת שִׁנַּיִם וּמִשְׁחַת שִׁנַּיִם', hard: 'לְיַד הַמִּבְרֶשֶׁת וְהַמִּשְׁחָה', z: ['r', 545, 82, 27, 36] },
    { id: 'x_shampoo', room: 'bath', n: 'שַׁמְפּוֹ', hard: 'לְיַד הַשַּׁמְפּוֹ', z: ['r', 347, 140, 24, 33] },
    { id: 'x_comb', room: 'bath', n: 'מַסְרֵק', hard: 'לְיַד הַמַּסְרֵק', z: ['r', 573, 96, 26, 24] },
    { id: 'x_armchair', room: 'living', n: 'כֻּרְסָה', hard: 'מֵאֲחוֹרֵי הַכֻּרְסָה', z: ['r', 224, 418, 62, 60] },
    { id: 'x_remote', room: 'living', n: 'שַׁלָּט', hard: 'לְיַד הַשַּׁלָּט', z: ['r', 112, 415, 34, 22] },
    { id: 'x_ac', room: 'living', n: 'מַזְגָן', hard: 'מִתַּחַת לַמַּזְגָן', z: ['r', 212, 270, 72, 30] }
  ],
  easy: {
    kitchen: ['בַּחֶדֶר שֶׁיֵּשׁ בּוֹ מִיקְרוֹגַל'],
    bath: ['בַּחֶדֶר שֶׁיֵּשׁ בּוֹ שַׁמְפּוֹ'],
    living: ['בַּחֶדֶר שֶׁיֵּשׁ בּוֹ כֻּרְסָה']
  }
};
