/* The 7 Israeli street foods of Olam Street Unit 2 (page 7): drawn pictures + emoji.
 * FoodArt.foods = [{ id, he, pic }] in workbook order; pic is an emoji or an <svg> string (FoodArt.html(pic) draws either). */
(function () {
  var HUMMUS = `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="46" rx="47" ry="30" fill="#dfe9f3"/><ellipse cx="50" cy="43" rx="37" ry="23" fill="#ecd29f"/>
  <path d="M24 44 Q50 22 76 44 Q50 62 24 44" fill="none" stroke="#d2b06c" stroke-width="3"/><ellipse cx="50" cy="43" rx="13" ry="7" fill="#d9a400" opacity=".75"/>
  <g fill="#e0b25f"><circle cx="46" cy="42" r="3"/><circle cx="53" cy="44" r="3"/><circle cx="50" cy="39" r="3"/></g><g fill="#c0392b"><circle cx="34" cy="38" r="1.6"/><circle cx="66" cy="47" r="1.6"/><circle cx="60" cy="33" r="1.6"/></g>
  <g fill="#3c9a45"><circle cx="40" cy="50" r="2"/><circle cx="62" cy="40" r="2"/></g></svg>`;
  var SHAKSHUKA = `<svg viewBox="0 0 110 80" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="36" width="30" height="8" rx="4" fill="#2b2b2b"/><circle cx="46" cy="40" r="38" fill="#333"/><circle cx="46" cy="40" r="32" fill="#d8432c"/>
  <path d="M22 34 q4 -10 14 -8 q10 -2 12 8 q4 10 -8 12 q-12 4 -18 -12z" fill="#fff"/><circle cx="34" cy="34" r="6" fill="#ffb703"/>
  <path d="M46 46 q4 -10 14 -8 q10 -2 12 8 q4 10 -8 12 q-12 4 -18 -12z" fill="#fff"/><circle cx="58" cy="46" r="6" fill="#ffb703"/>
  <g fill="#3c9a45"><circle cx="30" cy="54" r="2"/><circle cx="62" cy="28" r="2"/><circle cx="48" cy="22" r="2"/><circle cx="70" cy="56" r="2"/></g></svg>`;
  var SABICH = `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg"><path d="M8 40 Q50 -6 92 40 L92 58 Q50 80 8 58Z" fill="#e8c27a" stroke="#b98a3e" stroke-width="3"/><path d="M14 42 Q50 8 86 42 Q50 52 14 42Z" fill="#7a3f86"/><path d="M22 41 Q50 16 78 41 Q50 47 22 41Z" fill="#a85bb3" opacity=".7"/><ellipse cx="38" cy="30" rx="11" ry="8" fill="#fff" stroke="#e3dccb" stroke-width="1.5"/><circle cx="38" cy="30" r="4.2" fill="#ffb703"/><ellipse cx="62" cy="29" rx="11" ry="8" fill="#fff" stroke="#e3dccb" stroke-width="1.5"/><circle cx="62" cy="29" r="4.2" fill="#ffb703"/><g fill="#d8432c"><circle cx="30" cy="42" r="3.4"/><circle cx="50" cy="39" r="3.4"/><circle cx="70" cy="42" r="3.4"/></g><g fill="#3c9a45"><circle cx="22" cy="40" r="2.2"/><circle cx="78" cy="40" r="2.2"/><circle cx="50" cy="31" r="2.2"/></g></svg>`;
  var SALAD = `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="60" rx="42" ry="9" fill="#00000018"/><path d="M8 34 Q50 -2 92 34 Q92 70 50 72 Q8 70 8 34Z" fill="#fff" stroke="#d6dde7" stroke-width="3"/><g><rect x="22" y="30" width="11" height="11" rx="2" fill="#e0452f" transform="rotate(12 27 35)"/><rect x="38" y="24" width="10" height="10" rx="2" fill="#e0452f" transform="rotate(-10 43 29)"/><rect x="60" y="30" width="11" height="11" rx="2" fill="#e0452f" transform="rotate(20 65 35)"/><rect x="30" y="44" width="11" height="11" rx="2" fill="#7bc65b" transform="rotate(-14 35 49)"/><rect x="50" y="40" width="12" height="12" rx="2" fill="#9bd36b" transform="rotate(8 56 46)"/><rect x="68" y="46" width="10" height="10" rx="2" fill="#7bc65b" transform="rotate(-6 73 51)"/><rect x="46" y="54" width="10" height="9" rx="2" fill="#e0452f" transform="rotate(18 51 58)"/></g><path d="M26 52 q8 -8 16 0" fill="none" stroke="#a259c6" stroke-width="3"/><path d="M60 58 q9 -9 17 -2" fill="none" stroke="#a259c6" stroke-width="3"/><g fill="#2f8f3c"><circle cx="40" cy="38" r="1.8"/><circle cx="58" cy="28" r="1.8"/><circle cx="72" cy="40" r="1.8"/></g></svg>`;
  var foods = [
    { id: 'pizza',     he: 'פִּיצָה',           pic: '🍕' },
    { id: 'falafel',   he: 'פָלָאפֶל',          pic: '🧆' },
    { id: 'sabich',    he: 'סַבִּיח',            pic: SABICH },
    { id: 'shakshuka', he: 'שַׁקְשׁוּקָה',       pic: SHAKSHUKA },
    { id: 'hummus',    he: 'חוּמוּס',           pic: HUMMUS },
    { id: 'shawarma',  he: 'שָׁוַארְמָה',        pic: '🥙' },
    { id: 'salad',     he: 'סָלָט יִשְׂרְאֵלִי',  pic: SALAD }
  ];
  window.FoodArt = {
    foods: foods,
    html: function (pic) { return pic.charAt(0) === '<' ? pic : '<span class="emo">' + pic + '</span>'; }
  };
})();
