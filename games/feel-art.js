/* "How are you?" (Olam Street 2.7–2.9): the 7 answers in workbook order, drawn faces, and a boy / girl holding a feeling card.
 * FeelArt.feelings = [{ id, he, fem, en, syl }]  (fem is unused: the teacher wants one form, the masculine, for everyone)
 * FeelArt.face(id)            -> <svg> of the face (viewBox 0 0 100 100)
 * FeelArt.person(g, name, id) -> <svg> of a boy ('m') or girl ('f') with a name tag, holding the feeling card
 * FeelArt.ask(g)              -> 'מָה שְׁלוֹמְךָ' / 'מָה שְׁלוֹמֵךְ'                                                  */
(function () {
  var feelings = [
    { id: 'excellent', he: 'מְצוּיָּן',      fem: null, en: 'Excellent',        syl: ['מְ', 'צוּ', 'יָּן'] },
    { id: 'good',      he: 'טוֹב',           fem: null,           en: 'Good',             syl: ['טוֹב'] },
    { id: 'verygood',  he: 'טוֹב מְאוֹד',    fem: null,           en: 'Very good',        syl: ['טוֹב', 'מְ', 'אוֹד'] },
    { id: 'notgood',   he: 'לֹא טוֹב',       fem: null,           en: 'Not good',         syl: ['לֹא', 'טוֹב'] },
    { id: 'perfect',   he: 'מֻשְׁלָם',       fem: null,   en: 'Perfect',          syl: ['מֻשְׁ', 'לָם'] },
    { id: 'great',     he: 'מְעֻלֶּה',       fem: null,      en: 'Great / Outstanding', syl: ['מְ', 'עֻ', 'לֶּה'] },
    { id: 'soso',      he: 'כָּכָה כָּכָה',   fem: null,           en: 'So-so / Okay',     syl: ['כָּ', 'כָה', 'כָּ', 'כָה'] }
  ];
  var beseder = { id: 'beseder', he: 'בְּסֵדֶר', fem: null, en: 'Okay / fine', syl: ['בְּ', 'סֵ', 'דֶר'] };
  var skin = '#ffd23f', ink = '#3b2a1a';
  var star = function (cx, cy, r) { var p = []; for (var i = 0; i < 10; i++) { var a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r; p.push((cx + rr * Math.cos(a)).toFixed(1) + ',' + (cy + rr * Math.sin(a)).toFixed(1)); } return '<polygon points="' + p.join(' ') + '" fill="#f59e0b" stroke="#b45309" stroke-width="1.5" stroke-linejoin="round"/>'; };
  var heart = function (cx, cy, s) { return '<path transform="translate(' + cx + ' ' + cy + ') scale(' + s + ')" d="M0 7 C-14 -4 -9 -15 0 -8 C9 -15 14 -4 0 7Z" fill="#e11d48" stroke="#9f1239" stroke-width="1.2"/>'; };
  var dots = '<circle cx="36" cy="42" r="5.5" fill="' + ink + '"/><circle cx="64" cy="42" r="5.5" fill="' + ink + '"/>';
  var parts = {
    excellent: dots.replace(/r="5.5"/g, 'rx="5" ry="7"').replace(/circle/g, 'ellipse') + '<path d="M24 56 Q50 92 76 56 Z" fill="#7a1f1f" stroke="' + ink + '" stroke-width="2.5" stroke-linejoin="round"/><path d="M36 72 Q50 82 64 72 Q50 66 36 72Z" fill="#f87171"/>',
    good: dots + '<path d="M32 62 Q50 78 68 62" fill="none" stroke="' + ink + '" stroke-width="4" stroke-linecap="round"/>',
    verygood: '<path d="M27 44 Q36 34 45 44 M55 44 Q64 34 73 44" fill="none" stroke="' + ink + '" stroke-width="4" stroke-linecap="round"/><circle cx="27" cy="58" r="7" fill="#fb7185" opacity=".6"/><circle cx="73" cy="58" r="7" fill="#fb7185" opacity=".6"/><path d="M26 56 Q50 86 74 56" fill="none" stroke="' + ink + '" stroke-width="4.5" stroke-linecap="round"/>',
    notgood: '<path d="M27 34 L45 40 M73 34 L55 40" stroke="' + ink + '" stroke-width="4" stroke-linecap="round"/>' + dots.replace(/cy="42"/g, 'cy="46"') + '<path d="M32 76 Q50 58 68 76" fill="none" stroke="' + ink + '" stroke-width="4.5" stroke-linecap="round"/><path d="M70 54 q6 10 0 14 q-6 -4 0 -14z" fill="#60a5fa" stroke="#1d4ed8" stroke-width="1.2"/>',
    perfect: heart(36, 42, 1.25) + heart(64, 42, 1.25) + '<path d="M30 60 Q50 84 70 60 Q50 66 30 60Z" fill="#7a1f1f" stroke="' + ink + '" stroke-width="2.5" stroke-linejoin="round"/>',
    great: star(36, 42, 12) + star(64, 42, 12) + '<path d="M24 56 Q50 92 76 56 Z" fill="#7a1f1f" stroke="' + ink + '" stroke-width="2.5" stroke-linejoin="round"/><path d="M36 72 Q50 82 64 72 Q50 66 36 72Z" fill="#f87171"/>',
    beseder: dots.replace(/cy="42"/g, 'cy="44"') + '<path d="M34 66 Q50 72 66 66" fill="none" stroke="' + ink + '" stroke-width="4.5" stroke-linecap="round"/>',
    soso: '<path d="M27 32 L45 32 M55 26 L73 32" stroke="' + ink + '" stroke-width="4" stroke-linecap="round"/>' + dots.replace(/cy="42"/g, 'cy="44"') + '<path d="M30 70 Q38 62 46 70 T62 70 T70 68" fill="none" stroke="' + ink + '" stroke-width="4.5" stroke-linecap="round"/>'
  };
  var fill = { notgood: '#a5c8f5', soso: '#ffe08a' };
  function face(id) {
    return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + id + '"><circle cx="50" cy="50" r="45" fill="' + (fill[id] || skin) + '" stroke="#b45309" stroke-width="4"/>' + parts[id] + '</svg>';
  }
  function person(g, name, id) {
    var m = g === 'm', shirt = m ? '#3b82f6' : '#ec4899', hair = m ? '#3b2a1a' : '#7c2d12', tone = m ? '#8d5524' : '#f1c27d';
    var hairBack = m ? '' : '<path d="M30 62 Q22 120 36 132 L44 90Z M90 62 Q98 120 84 132 L76 90Z" fill="' + hair + '"/>';
    var hairTop = m ? '<path d="M32 58 Q34 34 60 34 Q86 34 88 58 Q76 46 60 48 Q44 46 32 58Z" fill="' + hair + '"/>' : '<path d="M30 66 Q28 34 60 33 Q92 34 90 66 Q80 46 60 46 Q40 46 30 66Z" fill="' + hair + '"/>';
    var card = '<g transform="translate(112 96) rotate(6)"><rect width="66" height="76" rx="8" fill="#fff" stroke="#23233a" stroke-width="3"/><g transform="translate(7 8) scale(.52)">' + '<g>' + face(id).replace(/<\/?svg[^>]*>/g, '') + '</g></g><rect x="8" y="64" width="50" height="5" rx="2.5" fill="#e5e7eb"/></g>';
    return '<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + name + '">' +
      hairBack +
      '<path d="M26 238 Q26 150 60 150 Q94 150 94 238Z" fill="' + shirt + '"/>' +
      '<path d="M88 168 Q118 168 124 130" fill="none" stroke="' + shirt + '" stroke-width="16" stroke-linecap="round"/><circle cx="125" cy="126" r="9" fill="' + tone + '"/>' +
      '<rect x="52" y="136" width="16" height="16" fill="' + tone + '"/>' +
      '<circle cx="60" cy="96" r="34" fill="' + tone + '"/>' + hairTop +
      '<circle cx="48" cy="98" r="3.6" fill="#23233a"/><circle cx="72" cy="98" r="3.6" fill="#23233a"/><path d="M50 112 Q60 120 70 112" fill="none" stroke="#23233a" stroke-width="3" stroke-linecap="round"/>' +
      card +
      '<g><rect x="30" y="178" width="60" height="22" rx="5" fill="#fff" stroke="#23233a" stroke-width="2"/><text x="60" y="194" text-anchor="middle" font-size="15" font-weight="800" font-family="Noto Sans Hebrew,Arial,sans-serif" fill="#23233a" direction="rtl">' + name + '</text></g>' +
      '</svg>';
  }
  window.FeelArt = {
    feelings: feelings,
    face: face,
    person: person,
    beseder: beseder,
    /* the 7 answers with בְּסֵדֶר placed between טוֹב מְאוֹד / טוֹב and כָּכָה כָּכָה (a rough happy-to-sad scale) */
    withBeseder: function () { var a = feelings.slice(), i = a.findIndex(function (f) { return f.id === 'soso'; }); a.splice(i, 0, beseder); return a; },
    ask: function (g) { return g === 'f' ? 'מָה שְׁלוֹמֵךְ' : 'מָה שְׁלוֹמְךָ'; },
    answer: function (f) { return f.he; },
    byId: function (id) { if (id === 'beseder') return beseder; for (var i = 0; i < feelings.length; i++) if (feelings[i].id === id) return feelings[i]; }
  };
})();
