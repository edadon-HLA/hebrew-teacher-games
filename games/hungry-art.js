/* Hungry / tasty drawings (Olam Street 2.15–2.16): one boy in different moods and small scenes. No text, no English.
 * HungryArt.kid(mood, crop)   -> <svg> of the boy: mood = growl | full | smell | yum | yuck | happy
 *                                crop = true gives a tight head-and-belly picture for cards
 * HungryArt.scene(id)         -> <svg> (260 x 200) with props; ids are in HungryArt.ids (hungry / not hungry / tasty / yuck)
 * HungryArt.hungry()          -> <svg> (240 x 180) one clear "hungry" picture: kid holding the tummy, empty plate, food thought bubble
 * HungryArt.ids               -> { hungry: [...], full: [...], yum: [...], yuck: [...] }                         */
(function () {
  var skin = '#f6c9a0', ink = '#3b2a1a', shirt = '#2a8bd0', hair = '#3a2a20';
  var st = ' stroke="' + ink + '" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
  function kidParts(mood) {
    var g = '', face = '', skinC = mood === 'yuck' ? '#d4e3a1' : skin;
    if (mood === 'full' || mood === 'happy') {
      g += '<ellipse cx="100" cy="172" rx="50" ry="40" fill="' + shirt + '"' + st + '/><circle cx="100" cy="176" r="3.5" fill="' + ink + '"/>';
      g += '<circle cx="62" cy="168" r="11" fill="' + skin + '"' + st + '/><circle cx="138" cy="168" r="11" fill="' + skin + '"' + st + '/>';
    } else {
      g += '<path d="M52 200 L58 152 Q100 134 142 152 L148 200 Z" fill="' + shirt + '"' + st + '/>';
    }
    if (mood === 'growl') g += '<path d="M54 168 q-10 6 0 12 M44 162 q-16 10 0 24 M146 168 q10 6 0 12 M156 162 q16 10 0 24" fill="none" stroke="#e2506a" stroke-width="4" stroke-linecap="round"/><path d="M78 176 q8 -9 16 0 t16 0 t16 0" fill="none" stroke="#8fc3ef" stroke-width="3" stroke-linecap="round"/>';
    g += '<rect x="90" y="108" width="20" height="20" fill="' + skinC + '"' + st + '/>';
    g += '<circle cx="100" cy="78" r="38" fill="' + skinC + '"' + st + '/>';
    g += '<path d="M62 74 Q62 36 100 38 Q138 36 138 74 Q122 56 100 60 Q78 56 62 74Z" fill="' + hair + '"' + st + '/>';
    var eyesOpen = '<circle cx="86" cy="80" r="4.5" fill="' + ink + '"/><circle cx="114" cy="80" r="4.5" fill="' + ink + '"/>';
    var eyesClosed = '<path d="M78 80 q8 -9 16 0 M106 80 q8 -9 16 0" fill="none" stroke="' + ink + '" stroke-width="3.5" stroke-linecap="round"/>';
    if (mood === 'growl') face = '<circle cx="86" cy="80" r="6" fill="#fff"' + st + '/><circle cx="114" cy="80" r="6" fill="#fff"' + st + '/><circle cx="87" cy="82" r="2.6" fill="' + ink + '"/><circle cx="113" cy="82" r="2.6" fill="' + ink + '"/>' +
      '<path d="M76 66 l16 5 M124 66 l-16 5" stroke="' + ink + '" stroke-width="3" stroke-linecap="round"/><path d="M84 104 q5 -6 10 0 t10 0 t10 0" fill="none" stroke="' + ink + '" stroke-width="3.2" stroke-linecap="round"/><path d="M124 102 q4 8 0 12 q-5 -4 0 -12z" fill="#8fc3ef"/>';
    else if (mood === 'full' || mood === 'happy') face = eyesClosed + '<path d="M82 98 Q100 116 118 98" fill="none" stroke="' + ink + '" stroke-width="3.5" stroke-linecap="round"/><circle cx="72" cy="94" r="5" fill="#f08a8a" opacity=".55"/><circle cx="128" cy="94" r="5" fill="#f08a8a" opacity=".55"/>';
    else if (mood === 'smell') face = eyesClosed + '<path d="M90 100 Q100 108 110 100" fill="none" stroke="' + ink + '" stroke-width="3.5" stroke-linecap="round"/><path d="M100 84 q-5 8 1 10" fill="none" stroke="' + ink + '" stroke-width="2.6" stroke-linecap="round"/>';
    else if (mood === 'yum') face = '<path d="M78 80 q8 -10 16 0 M106 80 q8 -10 16 0" fill="none" stroke="' + ink + '" stroke-width="3.5" stroke-linecap="round"/><path d="M80 96 Q100 122 120 96 Z" fill="#7a1f1f"' + st + '/><path d="M104 108 q8 4 8 14 q-8 2 -12 -6z" fill="#ef6b8a"' + st + '/><circle cx="72" cy="94" r="5" fill="#f08a8a" opacity=".55"/><circle cx="128" cy="94" r="5" fill="#f08a8a" opacity=".55"/>';
    else if (mood === 'yuck') face = '<path d="M76 72 l16 8 l-16 8 M124 72 l-16 8 l16 8" fill="none" stroke="' + ink + '" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M82 106 q6 -8 12 0 t12 0 t12 0" fill="none" stroke="' + ink + '" stroke-width="3.4" stroke-linecap="round"/><path d="M96 106 q4 20 14 8 l-2 -8z" fill="#ef6b8a"' + st + '/><circle cx="72" cy="96" r="6" fill="#8fbf4a" opacity=".6"/><circle cx="128" cy="96" r="6" fill="#8fbf4a" opacity=".6"/>';
    return g + face;
  }
  function wrap(vb, inner, label) { return '<svg viewBox="' + vb + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + (label || '') + '">' + inner + '</svg>'; }
  function kid(mood, crop) { return wrap(crop ? '20 24 160 176' : '0 0 200 200', '<rect x="-20" y="-20" width="240" height="240" fill="#fff" opacity="0"/>' + kidParts(mood), mood); }
  var T = function (x, y, size, s) { return '<text x="' + x + '" y="' + y + '" font-size="' + size + '" text-anchor="middle">' + s + '</text>'; };
  var plate = function (cx, cy, rx, empty) { return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + (rx * .3) + '" fill="#fff" stroke="' + ink + '" stroke-width="2.6"/>' + (empty ? '' : ''); };
  var aroma = '<path d="M196 96 q-10 -9 0 -18 t0 -18 M212 98 q-10 -9 0 -18 t0 -18 M228 96 q-10 -9 0 -18 t0 -18" fill="none" stroke="#f0a94a" stroke-width="3.4" stroke-linecap="round" opacity=".85"/>';
  var SC = {
    smell:   { mood: 'smell', extra: aroma + T(212, 160, 54, '🍕') },
    fridge:  { mood: 'growl', extra: '<rect x="182" y="26" width="70" height="162" rx="8" fill="#eaf3ff"' + st + '/><rect x="190" y="34" width="54" height="146" fill="#fff8d6" stroke="' + ink + '" stroke-width="2"/><path d="M190 76 H244 M190 118 H244 M190 156 H244" stroke="' + ink + '" stroke-width="3"/>' },
    morning: { mood: 'growl', extra: T(214, 60, 46, '☀️') + T(214, 160, 46, '⏰') },
    plates:  { mood: 'full', extra: [0, 1, 2, 3].map(function (i) { return plate(214, 182 - i * 11, 36); }).join('') + T(214, 126, 30, '🍴') },
    sleep:   { mood: 'full', extra: T(206, 70, 40, '💤') + '<path d="M70 96 q-4 -6 0 -9" fill="none"/>' },
    empty:   { mood: 'happy', extra: plate(212, 170, 40) + '<ellipse cx="212" cy="168" rx="26" ry="7" fill="#fff" stroke="#c9c2b4" stroke-width="2"/>' + T(212, 128, 32, '🍴') },
    sandwich:{ mood: 'growl', extra: T(214, 130, 62, '🥪') },
    thumbs:  { mood: 'yum', extra: T(214, 126, 62, '👍') },
    yum1: { mood: 'yum', extra: T(214, 130, 58, '🍕') }, yum2: { mood: 'yum', extra: T(214, 130, 58, '🥭') }, yum3: { mood: 'yum', extra: T(214, 130, 58, '🍫') },
    yuck1: { mood: 'yuck', extra: T(214, 130, 58, '🥦') }, yuck2: { mood: 'yuck', extra: T(214, 130, 58, '🍋') }, yuck3: { mood: 'yuck', extra: T(214, 130, 58, '🧅') }
  };
  function scene(id) { var s = SC[id]; return wrap('0 0 260 200', '<g transform="translate(-6 0)">' + kidParts(s.mood) + '</g>' + s.extra, id); }
  /* HungryArt.hungry() -> one clear "רָעֵב" picture (240 x 180, filled background like a photo, Olam 2.23):
     a kid holding the tummy, a growling belly, an empty plate on the table and a thought bubble with food. */
  function hungry() {
    var s = '<rect width="240" height="180" rx="14" fill="#fff4e2"/>';
    /* thought bubble with a pizza slice and an apple */
    s += '<circle cx="128" cy="58" r="4" fill="#fff"' + st.replace('stroke-width="3"', 'stroke-width="2.4"') + '/><circle cx="138" cy="44" r="6.5" fill="#fff"' + st.replace('stroke-width="3"', 'stroke-width="2.4"') + '/>';
    s += '<path d="M150 40 q-6 -20 14 -24 q8 -14 26 -6 q16 -10 30 4 q18 2 12 22 q8 16 -10 22 q-6 14 -26 8 q-14 10 -28 0 q-20 2 -18 -14 q-10 -6 0 -12z" fill="#fff"' + st + '/>';
    s += '<path d="M162 26 L196 36 L170 62 Z" fill="#ffd25a"' + st.replace('stroke-width="3"', 'stroke-width="2.4"') + '/><path d="M160 24 Q178 22 198 34 L196 38 Q178 28 162 30 Z" fill="#d8893a"' + st.replace('stroke-width="3"', 'stroke-width="2.2"') + '/>';
    s += '<circle cx="174" cy="38" r="3.6" fill="#e2506a"/><circle cx="182" cy="45" r="3" fill="#e2506a"/><circle cx="172" cy="50" r="2.8" fill="#e2506a"/>';
    s += '<circle cx="211" cy="44" r="11" fill="#e2506a"' + st.replace('stroke-width="3"', 'stroke-width="2.4"') + '/><path d="M211 33 q1 -6 5 -8" fill="none" stroke="' + ink + '" stroke-width="2.4" stroke-linecap="round"/><path d="M213 31 q8 -6 12 0 q-6 4 -12 0z" fill="#58b368"/>';
    /* the kid: body, arms bent to the tummy, hands on the tummy */
    s += '<path d="M52 180 L58 132 Q90 116 122 132 L128 180 Z" fill="' + shirt + '"' + st + '/>';
    s += '<path d="M62 136 Q48 152 64 160 L80 152" fill="none" stroke="' + shirt + '" stroke-width="13" stroke-linecap="round"/><path d="M118 136 Q132 152 116 160 L100 152" fill="none" stroke="' + shirt + '" stroke-width="13" stroke-linecap="round"/>';
    s += '<path d="M62 136 Q48 152 64 160 L80 152 M118 136 Q132 152 116 160 L100 152" fill="none" stroke="' + ink + '" stroke-width="2" stroke-linecap="round" opacity=".35"/>';
    s += '<ellipse cx="82" cy="150" rx="9" ry="7.5" fill="' + skin + '"' + st.replace('stroke-width="3"', 'stroke-width="2.4"') + '/><ellipse cx="98" cy="150" rx="9" ry="7.5" fill="' + skin + '"' + st.replace('stroke-width="3"', 'stroke-width="2.4"') + '/>';
    /* growling tummy */
    s += '<path d="M44 140 q-8 6 0 12 M36 134 q-14 12 0 24 M134 140 q8 6 0 12 M141 134 q14 12 0 24" fill="none" stroke="#e2506a" stroke-width="3.6" stroke-linecap="round"/>';
    /* head, hair, worried face */
    s += '<rect x="80" y="100" width="20" height="18" fill="' + skin + '"' + st + '/>';
    s += '<circle cx="90" cy="72" r="33" fill="' + skin + '"' + st + '/>';
    s += '<path d="M57 70 Q56 36 90 38 Q124 36 123 70 Q110 52 90 56 Q70 52 57 70Z" fill="' + hair + '"' + st + '/>';
    s += '<path d="M70 64 L82 60 M110 64 L98 60" stroke="' + ink + '" stroke-width="3" stroke-linecap="round"/>';
    s += '<circle cx="78" cy="74" r="4.5" fill="' + ink + '"/><circle cx="102" cy="74" r="4.5" fill="' + ink + '"/><circle cx="79.5" cy="72.5" r="1.4" fill="#fff"/><circle cx="103.5" cy="72.5" r="1.4" fill="#fff"/>';
    s += '<path d="M80 94 Q90 86 100 94" fill="none" stroke="' + ink + '" stroke-width="3.2" stroke-linecap="round"/>';
    /* table with an empty plate and a fork */
    s += '<rect x="160" y="140" width="80" height="40" fill="#d9a566"' + st + '/><path d="M160 148 H240" stroke="' + ink + '" stroke-width="2" opacity=".35"/>';
    s += '<ellipse cx="196" cy="138" rx="28" ry="8" fill="#fff"' + st.replace('stroke-width="3"', 'stroke-width="2.6"') + '/><ellipse cx="196" cy="137" rx="17" ry="4.5" fill="none" stroke="#c9c2b4" stroke-width="2"/>';
    s += '<path d="M231 112 V138 M226 112 v9 q5 5 10 0 v-9 M231 112 v8" fill="none" stroke="#8a8f9c" stroke-width="2.8" stroke-linecap="round"/>';
    /* mirrored so the kid is on the right and the thought bubble on the left (number badges sit top-right in RTL cards) */
    return wrap('0 0 240 180', '<rect width="240" height="180" rx="14" fill="#fff4e2"/><g transform="translate(240 0) scale(-1 1)">' + s + '</g>', 'hungry');
  }
  window.HungryArt = { kid: kid, scene: scene, hungry: hungry, ids: { hungry: ['smell', 'fridge', 'morning'], full: ['plates', 'sleep', 'empty'], yum: ['yum1', 'yum2', 'yum3'], yuck: ['yuck1', 'yuck2', 'yuck3'] } };
})();
