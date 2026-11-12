/* A private house next to an apartment building, seen from outside (the building's ground floor and top floor are cut open).
 * Used by games/habinyan-shelanu.html ("גִּרְסָה מֻרְחֶבֶת: הַבִּנְיָן מִבַּחוּץ"), games/vocab-game.html (?set=binyan-ext) and the
 * Niflaot lesson "הַבַּיִת שֶׁלָּנוּ 2" (story frames, exit ticket). Everything is drawn here: no picture files, no text in the picture.
 *   HouseOut.svg({ vb, kids, nums, cls })   -> an <svg> string (viewBox 0 0 1000 620 or vb = [x, y, w, h])
 *       kids: [{ x, y, s, g: 'f'|'m', shirt }]  extra children drawn on top;  nums: [[n, x, y]] numbered circles (exit ticket)
 *   HouseOut.PARTS  -> [{ k, he, s: sentence, z: [shapes] }]   shapes: ['r', x, y, w, h] | ['c', cx, cy, r]
 *   HouseOut.box(k) -> [x, y, w, h] around a part (for crops: HouseOut.svg({ vb: HouseOut.box('gate', 30) }))
 *   HouseOut.kid(x, y, s, g, shirt) -> <g> string of a child (standing, feet at y) */
(function(){
const INK = '#2b2a3a';
function kid(x, y, s, g, shirt){
  s = s || 1; shirt = shirt || (g === 'f' ? '#e2506a' : '#2a6fd0');
  const hair = g === 'f'
    ? '<path d="M-13 -78 Q0 -98 13 -78 L15 -56 Q8 -62 6 -72 Q0 -66 -6 -72 Q-8 -62 -15 -56Z" fill="#5a3416"/>'
    : '<path d="M-12 -76 Q0 -94 12 -76 Q6 -82 0 -80 Q-6 -82 -12 -76Z" fill="#3b2412"/>';
  const legs = g === 'f'
    ? '<path d="M-13 -40 L13 -40 L18 -14 L-18 -14Z" fill="' + shirt + '"/><rect x="-9" y="-14" width="6" height="14" fill="#f2c4a0"/><rect x="3" y="-14" width="6" height="14" fill="#f2c4a0"/>'
    : '<rect x="-10" y="-34" width="9" height="34" fill="#3d5a80"/><rect x="1" y="-34" width="9" height="34" fill="#3d5a80"/>';
  return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + legs +
    '<rect x="-12" y="-58" width="24" height="26" rx="8" fill="' + shirt + '"/>' +
    '<path d="M-12 -54 L-20 -36 M12 -54 L20 -36" stroke="#f2c4a0" stroke-width="6" stroke-linecap="round"/>' +
    '<circle cx="0" cy="-72" r="13" fill="#f2c4a0"/>' + hair +
    '<circle cx="-4.5" cy="-72" r="1.8" fill="' + INK + '"/><circle cx="4.5" cy="-72" r="1.8" fill="' + INK + '"/>' +
    '<path d="M-4 -66 Q0 -62 4 -66" stroke="#c0392b" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
    '<ellipse cx="-6" cy="0" rx="7" ry="3" fill="' + INK + '"/><ellipse cx="6" cy="0" rx="7" ry="3" fill="' + INK + '"/></g>';
}
const DEFS = '<defs><linearGradient id="hoSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7cc8f8"/><stop offset="1" stop-color="#e6f6ff"/></linearGradient>' +
  '<pattern id="hoTile" width="24" height="14" patternUnits="userSpaceOnUse"><rect width="24" height="14" fill="#cf4a35"/><path d="M0 14a12 12 0 0 1 24 0" fill="none" stroke="#8e2a20" stroke-width="2"/></pattern>' +
  '<pattern id="hoGrass" width="16" height="12" patternUnits="userSpaceOnUse"><rect width="16" height="12" fill="#7cc95a"/><path d="M3 12l1-6M8 12v-8M12 12l-1-6" stroke="#4f9a35" stroke-width="1.4" stroke-linecap="round"/></pattern>' +
  '<pattern id="hoBrick" width="40" height="20" patternUnits="userSpaceOnUse"><rect width="40" height="20" fill="#f3e2c4"/><path d="M0 19.5H40M20 0V10M0 10H40M10 10V20M30 10V20" stroke="#dcc49c" stroke-width="1.2"/></pattern></defs>';

const ART =
  /* sky, ground */
  '<rect width="1000" height="620" fill="url(#hoSky)"/><circle cx="520" cy="70" r="30" fill="#ffd54f"/><circle cx="520" cy="70" r="40" fill="#ffd54f" opacity=".25"/>' +
  '<g fill="#fff" opacity=".95"><ellipse cx="120" cy="80" rx="46" ry="16"/><circle cx="104" cy="70" r="16"/><circle cx="130" cy="64" r="20"/><ellipse cx="420" cy="130" rx="38" ry="13"/><circle cx="430" cy="120" r="15"/></g>' +
  '<rect y="470" width="1000" height="150" fill="url(#hoGrass)"/><rect y="592" width="1000" height="28" fill="#b9b2a6"/>' +
  /* yard (חָצֵר): lawn, tree, flowers, swing */
  '<rect x="20" y="482" width="190" height="66" rx="8" fill="#94d977"/>' +
  '<rect x="44" y="400" width="14" height="96" fill="#7a5038"/><circle cx="51" cy="388" r="40" fill="#3f9b45"/><circle cx="32" cy="372" r="22" fill="#57b05a"/><circle cx="72" cy="380" r="20" fill="#57b05a"/>' +
  '<g fill="#e53935"><circle cx="40" cy="384" r="4"/><circle cx="64" cy="396" r="4"/><circle cx="54" cy="366" r="4"/></g>' +
  '<ellipse cx="186" cy="504" rx="20" ry="14" fill="#5fae3f"/><circle cx="150" cy="526" r="11" fill="#fff" stroke="#37474f" stroke-width="2"/><path d="M150 519l6 4-2 7h-8l-2-7z" fill="#37474f"/>' +
  '<g transform="translate(90 540)"><circle r="5" fill="#ff7043"/><circle cx="14" r="5" fill="#ffca28"/><circle cx="28" r="5" fill="#ab47bc"/><circle cx="-14" r="5" fill="#ff7043"/></g>' +
  /* private house: walls, roof (גַּג), chimney, windows, door, key, doorbell */
  '<rect x="292" y="196" width="26" height="60" fill="#a1583f" stroke="#7b3f2c" stroke-width="3"/>' +
  '<rect x="112" y="296" width="256" height="184" fill="url(#hoBrick)" stroke="#8d6e63" stroke-width="4"/>' +
  '<polygon points="92,300 240,190 388,300" fill="url(#hoTile)" stroke="#8e2a20" stroke-width="5" stroke-linejoin="round"/>' +
  '<rect x="130" y="326" width="62" height="54" fill="#9fd6f5" stroke="#fff" stroke-width="5"/><path d="M161 326V380M130 353H192" stroke="#fff" stroke-width="3"/>' +
  '<rect x="292" y="326" width="62" height="54" fill="#9fd6f5" stroke="#fff" stroke-width="5"/><path d="M323 326V380M292 353H354" stroke="#fff" stroke-width="3"/>' +
  '<rect x="122" y="380" width="78" height="8" rx="2" fill="#8d6e63"/><rect x="284" y="380" width="78" height="8" rx="2" fill="#8d6e63"/>' +
  '<rect x="212" y="384" width="56" height="96" rx="4" fill="#8a5a3c" stroke="#5d3a22" stroke-width="3"/><rect x="220" y="394" width="40" height="30" rx="3" fill="#a87250"/><rect x="220" y="432" width="40" height="38" rx="3" fill="#a87250"/>' +
  '<circle cx="258" cy="440" r="4" fill="#ffd54f"/>' +
  /* key in the lock */
  '<g stroke="#b8860b" stroke-width="3" fill="#ffd54f"><circle cx="232" cy="446" r="8"/><path d="M240 446H252M248 446V452M252 446V451" fill="none"/></g><circle cx="232" cy="446" r="3" fill="#8a5a3c"/>' +
  /* doorbell */
  '<rect x="276" y="418" width="16" height="22" rx="3" fill="#eceff1" stroke="#607d8b" stroke-width="2"/><circle cx="284" cy="429" r="5" fill="#f9a825" stroke="#c17900" stroke-width="1.5"/>' +
  '<rect x="204" y="478" width="72" height="8" fill="#9e9e9e"/>' +
  /* path from the door to the gate */
  '<polygon points="214,486 268,486 362,552 300,552" fill="#e0c9a0" stroke="#c9ad7d" stroke-width="2"/>' +
  /* parking (חֲנָיָה) with a car */
  '<rect x="392" y="486" width="160" height="66" fill="#8f949a"/><path d="M400 552V500M472 552V500M544 552V500" stroke="#fff" stroke-width="3" stroke-dasharray="8 6"/>' +
  '<g transform="translate(408 500)"><rect x="4" y="18" width="104" height="26" rx="10" fill="#1e88e5"/><path d="M22 18 L34 2 H78 L92 18Z" fill="#1e88e5"/><path d="M28 18 L37 6 H54 V18Z M58 18 V6 H75 L86 18Z" fill="#bbdefb"/>' +
  '<circle cx="28" cy="44" r="10" fill="#263238"/><circle cx="28" cy="44" r="4" fill="#cfd8dc"/><circle cx="86" cy="44" r="10" fill="#263238"/><circle cx="86" cy="44" r="4" fill="#cfd8dc"/><rect x="100" y="24" width="8" height="6" rx="2" fill="#ffee58"/></g>' +
  /* fence (גָּדֵר) and gate (שַׁעַר) */
  '<g fill="#fff6e0" stroke="#c9a46a" stroke-width="2">' + Array.from({ length: 15 }, (_, i) => '<path d="M' + (14 + i * 19) + ' 594V556l7-9 7 9v38z"/>').join('') +
  '<path d="M368 594V556l7-9 7 9v38z"/></g><path d="M10 566H296M10 584H296M364 566H388M364 584H388" stroke="#c9a46a" stroke-width="5"/>' +
  '<g stroke="#455a64" stroke-width="4" fill="none"><rect x="300" y="548" width="60" height="44" rx="3"/><path d="M312 548V592M324 548V592M336 548V592M348 548V592"/></g><rect x="296" y="540" width="8" height="54" fill="#37474f"/><rect x="356" y="540" width="8" height="54" fill="#37474f"/>' +
  /* building: roof with solar heaters (גַּג), floors, balconies */
  '<rect x="610" y="58" width="340" height="12" fill="#9e9e9e"/><g fill="#90a4ae" stroke="#607d8b" stroke-width="2"><rect x="650" y="30" width="44" height="22" rx="10"/><rect x="760" y="30" width="44" height="22" rx="10"/><rect x="870" y="30" width="44" height="22" rx="10"/></g>' +
  '<path d="M660 52V58M684 52V58M770 52V58M794 52V58M880 52V58M904 52V58" stroke="#607d8b" stroke-width="3"/>' +
  '<rect x="606" y="70" width="348" height="490" fill="#f1e7d6" stroke="#8d7b68" stroke-width="5"/>' +
  [0, 1, 2, 3].map(f => { const y = 162 + f * 80;
    return '<g>' + [632, 742, 852].map(x => '<rect x="' + x + '" y="' + (y + 14) + '" width="72" height="44" fill="#9fd6f5" stroke="#fff" stroke-width="4"/><path d="M' + (x + 36) + ' ' + (y + 14) + 'v44" stroke="#fff" stroke-width="3"/>').join('') +
      '<rect x="736" y="' + (y + 50) + '" width="84" height="20" fill="none" stroke="#5d6d7e" stroke-width="3"/><path d="M748 ' + (y + 50) + 'v20M760 ' + (y + 50) + 'v20M772 ' + (y + 50) + 'v20M784 ' + (y + 50) + 'v20M796 ' + (y + 50) + 'v20M808 ' + (y + 50) + 'v20" stroke="#5d6d7e" stroke-width="2"/>' +
      '<path d="M606 ' + (y + 80) + 'H954" stroke="#c9b79c" stroke-width="3"/></g>'; }).join('') +
  /* top floor cut open: corridor (מִסְדְּרוֹן) with three apartment doors */
  '<rect x="610" y="74" width="340" height="86" fill="#fff8e7"/><rect x="610" y="146" width="340" height="14" fill="#cdb89a"/><path d="M610 160H950" stroke="#8d7b68" stroke-width="4"/>' +
  '<g>' + [[640, 8], [760, 9], [880, 10]].map(([x, n]) => '<rect x="' + x + '" y="88" width="40" height="58" rx="3" fill="#8a5a3c" stroke="#5d3a22" stroke-width="2"/><circle cx="' + (x + 33) + '" cy="120" r="3" fill="#ffd54f"/>' +
    '<rect x="' + (x + 10) + '" y="94" width="20" height="13" rx="2" fill="#fff"/><text x="' + (x + 20) + '" y="105" font-family="Arial" font-size="11" font-weight="700" text-anchor="middle" fill="' + INK + '">' + n + '</text>' +
    '<rect x="' + (x + 46) + '" y="110" width="8" height="12" rx="2" fill="#eceff1" stroke="#607d8b"/><circle cx="' + (x + 50) + '" cy="116" r="2.5" fill="#f9a825"/>').join('') + '</g>' +
  '<g fill="#ffe08a" opacity=".8"><circle cx="700" cy="82" r="5"/><circle cx="820" cy="82" r="5"/><circle cx="920" cy="82" r="5"/></g>' +
  /* ground floor cut open: entrance (הַכְּנִיסָה), mailboxes (תֵּבַת דֹּאַר), elevator (מַעֲלִית), stairs (מַדְרֵגוֹת) */
  '<rect x="610" y="484" width="340" height="74" fill="#fdf3dc"/><rect x="610" y="546" width="340" height="12" fill="#cfc2ad"/>' +
  '<rect x="600" y="470" width="96" height="12" rx="3" fill="#455a64"/><rect x="618" y="486" width="68" height="70" fill="#b3e5fc" stroke="#546e7a" stroke-width="4"/><path d="M652 486V556" stroke="#546e7a" stroke-width="3"/><path d="M646 520V530M658 520V530" stroke="#37474f" stroke-width="3"/>' +
  '<rect x="616" y="556" width="72" height="8" fill="#9e9e9e"/>' +
  '<g>' + [0, 1, 2].map(r => [0, 1, 2, 3].map(c => '<rect x="' + (704 + c * 20) + '" y="' + (494 + r * 16) + '" width="18" height="14" rx="1.5" fill="#b0874f" stroke="#7b5a2c" stroke-width="1.5"/><path d="M' + (708 + c * 20) + ' ' + (499 + r * 16) + 'h10" stroke="#5d4020" stroke-width="2"/>').join('')).join('') + '</g>' +
  '<rect x="800" y="490" width="56" height="64" fill="#9aa5b1" stroke="#78858f" stroke-width="3"/><rect x="804" y="496" width="23" height="58" fill="#dfe6ec" stroke="#8f9aa6" stroke-width="1.5"/><rect x="829" y="496" width="23" height="58" fill="#dfe6ec" stroke="#8f9aa6" stroke-width="1.5"/>' +
  '<path d="M862 512l5-5 5 5M862 524l5 5 5-5" stroke="#455a64" stroke-width="2" fill="none"/>' +
  '<path d="M880 556H896V542H912V528H928V514H944V500H950V556Z" fill="#c98b4f" stroke="#7a4a22" stroke-width="2.5" stroke-linejoin="round"/><path d="M884 536L948 490" stroke="#5f6b80" stroke-width="3" stroke-linecap="round"/>' +
  '<path d="M606 484H954" stroke="#8d7b68" stroke-width="4"/>';

/* clickable parts: big ones first (later shapes sit on top) */
const PARTS = [
  { k: 'building', the: 'הַבִּנְיָן', he: 'בִּנְיָן', s: 'זֶה בִּנְיָן.', z: [['r', 606, 58, 348, 502]] },
  { k: 'house', the: 'הַבַּיִת הַפְּרָטִי', he: 'בַּיִת פְּרָטִי', s: 'זֶה בַּיִת פְּרָטִי.', star: 1, z: [['r', 112, 296, 256, 184]] },
  { k: 'roof', the: 'הַגַּג', he: 'גַּג', s: 'זֶה הַגַּג.', star: 1, z: [['r', 100, 196, 280, 100], ['r', 610, 26, 340, 44]] },
  { k: 'yard', the: 'הֶחָצֵר', he: 'חָצֵר', s: 'זוֹ הֶחָצֵר.', star: 1, z: [['r', 14, 480, 200, 68], ['r', 10, 346, 96, 134]] },
  { k: 'parking', the: 'הַחֲנָיָה', he: 'חֲנָיָה', s: 'זוֹ הַחֲנָיָה.', star: 1, z: [['r', 392, 486, 160, 66]] },
  { k: 'fence', the: 'הַגָּדֵר', he: 'גָּדֵר', s: 'זוֹ הַגָּדֵר.', z: [['r', 10, 548, 286, 46], ['r', 364, 548, 26, 46]] },
  { k: 'gate', the: 'הַשַּׁעַר', he: 'שַׁעַר', s: 'זֶה הַשַּׁעַר.', star: 1, z: [['r', 296, 540, 68, 54]] },
  { k: 'corridor', the: 'הַמִּסְדְּרוֹן', he: 'מִסְדְּרוֹן', s: 'זֶה הַמִּסְדְּרוֹן.', star: 1, z: [['r', 610, 74, 340, 86]] },
  { k: 'entrance', the: 'הַכְּנִיסָה לַבִּנְיָן', he: 'הַכְּנִיסָה לַבִּנְיָן', s: 'זוֹ הַכְּנִיסָה לַבִּנְיָן.', z: [['r', 600, 468, 96, 96]] },
  { k: 'mailbox', the: 'תֵּבַת הַדֹּאַר', he: 'תֵּבַת דֹּאַר', s: 'זוֹ תֵּבַת הַדֹּאַר.', star: 1, z: [['r', 700, 490, 88, 54]] },
  { k: 'elevator', the: 'הַמַּעֲלִית', he: 'מַעֲלִית', s: 'זוֹ הַמַּעֲלִית.', z: [['r', 798, 488, 78, 70]] },
  { k: 'stairs', the: 'הַמַּדְרֵגוֹת', he: 'מַדְרֵגוֹת', s: 'אֵלֶּה הַמַּדְרֵגוֹת.', z: [['r', 878, 488, 74, 70]] },
  { k: 'bell', the: 'הַפַּעֲמוֹן', he: 'פַּעֲמוֹן', s: 'זֶה הַפַּעֲמוֹן.', star: 1, z: [['c', 284, 429, 17]] },
  { k: 'key', the: 'הַמַּפְתֵּחַ', he: 'מַפְתֵּחַ', s: 'זֶה מַפְתֵּחַ.', star: 1, z: [['c', 238, 447, 17]] },
];
function shapeBox(z){ return z[0] === 'r' ? [z[1], z[2], z[1] + z[3], z[2] + z[4]] : [z[1] - z[3], z[2] - z[3], z[1] + z[3], z[2] + z[3]]; }
function box(k, pad){
  pad = pad == null ? 20 : pad; const p = PARTS.find(x => x.k === k); if (!p) return [0, 0, 1000, 620];
  const b = p.z.slice(0, 1).map(shapeBox)[0];
  return [b[0] - pad, b[1] - pad, b[2] - b[0] + 2 * pad, b[3] - b[1] + 2 * pad];
}
function svg(o){
  o = o || {}; const vb = (o.vb || [0, 0, 1000, 620]).join(' ');
  const kids = (o.kids || []).map(k => kid(k.x, k.y, k.s, k.g, k.shirt)).join('');
  const nums = (o.nums || []).map(([n, x, y, tx, ty]) => (tx != null ? '<path d="M' + x + ' ' + y + 'L' + tx + ' ' + ty + '" stroke="' + INK + '" stroke-width="3"/><circle cx="' + tx + '" cy="' + ty + '" r="5" fill="' + INK + '"/>' : '') +
    '<circle cx="' + x + '" cy="' + y + '" r="19" fill="#fff" stroke="' + INK + '" stroke-width="4"/><text x="' + x + '" y="' + (y + 8) + '" font-family="Arial" font-size="23" font-weight="800" text-anchor="middle" fill="' + INK + '">' + n + '</text>').join('');
  return '<svg class="' + (o.cls || 'ho-svg') + '" viewBox="' + vb + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="בַּיִת וּבִנְיָן">' + DEFS + ART + kids + nums + (o.extra || '') + '</svg>';
}
window.HouseOut = { svg, PARTS, box, kid, shapeBox };
})();
