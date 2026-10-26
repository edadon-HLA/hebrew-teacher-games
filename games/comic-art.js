/* Festival comic (Olam Street 2.14): own drawn street scenes and faces of the three friends. Not copied from the workbook.
 * ComicArt.chars               -> { keren, dan, roni } { he, color, ink }
 * ComicArt.face(id)            -> <svg> head + shoulders (viewBox 0 0 100 100), for cards and answers
 * ComicArt.scene(panel, who)   -> <svg> city street with the three friends; who = id of the speaker (mouth open) or null
 * ComicArt.panels              -> 13 panels in workbook order: { n, props }                                     */
(function () {
  var chars = {
    keren: { he: 'קֶרֶן', color: '#d6342f', soft: '#fde7e5', skin: '#f6d2b0', hair: '#6b3a1e' },
    dan:   { he: 'דָּן',   color: '#3a3d46', soft: '#e6e7ea', skin: '#c98f5f', hair: '#241a14' },
    roni:  { he: 'רוֹנִי', color: '#e2506a', soft: '#fde6ec', skin: '#e6b48c', hair: '#4a2b18' }
  };
  var panels = [
    { props: '' }, { props: '🎪' }, { props: '🎪' }, { props: '😋' }, { props: '🍕🐟' }, { props: '🍕🧀' }, { props: '🍝' },
    { props: '🍫' }, { props: '🍫🥭' }, { props: '🥭🥑' }, { props: '🥗🥭' }, { props: '🔍' }, { props: '🎪🍕' }
  ];
  var ink = '#2b2118';
  function eyes(cx, cy) { return '<circle cx="' + (cx - 9) + '" cy="' + cy + '" r="3" fill="' + ink + '"/><circle cx="' + (cx + 9) + '" cy="' + cy + '" r="3" fill="' + ink + '"/>'; }
  function mouth(cx, cy, open) {
    return open ? '<ellipse cx="' + cx + '" cy="' + (cy + 3) + '" rx="6" ry="5" fill="#7a1f1f" stroke="' + ink + '" stroke-width="1.6"/>'
                : '<path d="M' + (cx - 7) + ' ' + cy + ' Q' + cx + ' ' + (cy + 7) + ' ' + (cx + 7) + ' ' + cy + '" fill="none" stroke="' + ink + '" stroke-width="2.4" stroke-linecap="round"/>';
  }
  /* one friend, centred on cx, head centre at y = 98; the body runs down to y = 240 */
  function person(id, cx, open, tag) {
    var c = chars[id], g = '', top = 124;
    if (id === 'roni') g += '<path d="M' + (cx - 29) + ' 98 Q' + (cx - 34) + ' 60 ' + cx + ' 60 Q' + (cx + 34) + ' 60 ' + (cx + 29) + ' 98 L' + (cx + 31) + ' 140 L' + (cx - 31) + ' 140 Z" fill="' + c.hair + '"/>';
    if (id === 'keren') g += '<circle cx="' + (cx - 21) + '" cy="68" r="11" fill="' + c.hair + '"/><circle cx="' + (cx + 21) + '" cy="68" r="11" fill="' + c.hair + '"/>';
    /* body */
    if (id === 'keren') g += '<path d="M' + (cx - 38) + ' 240 L' + (cx - 34) + ' 140 Q' + cx + ' 118 ' + (cx + 34) + ' 140 L' + (cx + 38) + ' 240 Z" fill="#d6342f"/>';
    if (id === 'dan') g += '<path d="M' + (cx - 40) + ' 240 L' + (cx - 36) + ' 138 Q' + cx + ' 118 ' + (cx + 36) + ' 138 L' + (cx + 40) + ' 240 Z" fill="#1f1f24"/><path d="M' + (cx - 12) + ' 128 L' + cx + ' 150 L' + (cx + 12) + ' 128 Z" fill="#f5f5f5"/><line x1="' + cx + '" y1="150" x2="' + cx + '" y2="240" stroke="#6b6e78" stroke-width="2"/>';
    if (id === 'roni') {
      g += '<path d="M' + (cx - 38) + ' 240 L' + (cx - 34) + ' 140 Q' + cx + ' 118 ' + (cx + 34) + ' 140 L' + (cx + 38) + ' 240 Z" fill="#f4a0b4"/>';
      [[-18, 158], [10, 150], [22, 176], [-8, 190], [-24, 212], [16, 214], [0, 168]].forEach(function (p) {
        g += '<circle cx="' + (cx + p[0]) + '" cy="' + p[1] + '" r="5" fill="#fff"/><circle cx="' + (cx + p[0]) + '" cy="' + p[1] + '" r="1.8" fill="#e2506a"/>';
      });
    }
    /* neck + head */
    g += '<rect x="' + (cx - 7) + '" y="118" width="14" height="14" fill="' + c.skin + '"/>';
    g += '<circle cx="' + cx + '" cy="98" r="26" fill="' + c.skin + '" stroke="' + ink + '" stroke-width="2"/>';
    if (id === 'keren') g += '<path d="M' + (cx - 26) + ' 94 Q' + (cx - 24) + ' 68 ' + cx + ' 70 Q' + (cx + 24) + ' 68 ' + (cx + 26) + ' 94 Q' + cx + ' 80 ' + (cx - 26) + ' 94 Z" fill="' + c.hair + '"/>';
    if (id === 'dan') g += '<path d="M' + (cx - 26) + ' 92 Q' + (cx - 28) + ' 66 ' + cx + ' 68 Q' + (cx + 28) + ' 66 ' + (cx + 26) + ' 92 Q' + cx + ' 78 ' + (cx - 26) + ' 92 Z" fill="' + c.hair + '"/>';
    if (id === 'roni') g += '<path d="M' + (cx - 26) + ' 96 Q' + (cx - 26) + ' 68 ' + cx + ' 68 Q' + (cx + 26) + ' 68 ' + (cx + 26) + ' 96 Q' + (cx + 8) + ' 82 ' + (cx - 26) + ' 96 Z" fill="' + c.hair + '"/>';
    g += eyes(cx, 100) + mouth(cx, 112, open);
    g += '<circle cx="' + (cx - 17) + '" cy="108" r="4" fill="#f08a8a" opacity=".5"/><circle cx="' + (cx + 17) + '" cy="108" r="4" fill="#f08a8a" opacity=".5"/>';
    if (tag) g += '<rect x="' + (cx - 24) + '" y="172" width="48" height="20" rx="6" fill="#fff" stroke="' + c.color + '" stroke-width="2.4"/><text x="' + cx + '" y="187" text-anchor="middle" font-family="Noto Sans Hebrew,Arial,sans-serif" font-size="14" font-weight="800" fill="' + c.color + '">' + c.he + '</text>';
    return '<g' + (open ? ' transform="translate(0 -4)"' : '') + '>' + g + '</g>';
  }
  function face(id) {
    return '<svg viewBox="0 52 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + chars[id].he + '"><g>' +
      '<rect x="0" y="52" width="100" height="100" fill="' + chars[id].soft + '"/>' + person(id, 50, false, false).replace(/^<g[^>]*>/, '<g>') + '</g></svg>';
  }
  function scene(n, who) {
    var p = panels[n - 1] || { props: '' }, s = n * 7 % 5;
    var sky = ['#cfe8f7', '#fbe3c8', '#d7efe0', '#f3dff2', '#fff0b8'][s];
    var b = '';
    var cols = ['#d56a55', '#e8b04a', '#5aa6c8', '#b56a9c', '#7bb77c'];
    for (var i = 0; i < 4; i++) {
      var x = -10 + i * 95 + (n % 3) * 12, h = 90 + ((i * 37 + n * 13) % 60), col = cols[(i + n) % 5];
      b += '<rect x="' + x + '" y="' + (190 - h) + '" width="82" height="' + h + '" fill="' + col + '" stroke="#2b2118" stroke-width="2"/>';
      for (var r = 0; r < 3; r++) for (var k = 0; k < 2; k++) b += '<rect x="' + (x + 12 + k * 34) + '" y="' + (190 - h + 12 + r * 24) + '" width="20" height="14" fill="#fff6d6" stroke="#2b2118" stroke-width="1.4"/>';
    }
    if (n === 2 || n === 3 || n === 12 || n === 13) {
      b += '<path d="M0 30 Q90 62 180 30 T360 30" fill="none" stroke="#2b2118" stroke-width="2"/>';
      ['#e2506a', '#f4b400', '#2a8bd0', '#3aa76d', '#e2506a', '#f4b400', '#2a8bd0'].forEach(function (c, i) { b += '<path d="M' + (28 + i * 48) + ' ' + (i % 2 ? 46 : 38) + ' l12 0 l-6 16 z" fill="' + c + '" stroke="#2b2118" stroke-width="1.4"/>'; });
    }
    var street = '<rect x="0" y="190" width="360" height="50" fill="#8c8a94"/><rect x="0" y="190" width="360" height="9" fill="#b9b7c2"/><g fill="#fff6d6"><rect x="20" y="222" width="34" height="5"/><rect x="110" y="222" width="34" height="5"/><rect x="200" y="222" width="34" height="5"/><rect x="290" y="222" width="34" height="5"/></g>';
    var ppl = person('keren', 70, who === 'keren', true) + person('dan', 180, who === 'dan', true) + person('roni', 290, who === 'roni', true);
    var props = p.props ? '<g><ellipse cx="180" cy="26" rx="46" ry="21" fill="#fff" stroke="#2b2118" stroke-width="2"/><circle cx="164" cy="50" r="5" fill="#fff" stroke="#2b2118" stroke-width="1.6"/><circle cx="156" cy="60" r="3" fill="#fff" stroke="#2b2118" stroke-width="1.4"/><text x="180" y="35" text-anchor="middle" font-size="26">' + p.props + '</text></g>' : '';
    return '<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="תמונה ' + n + '"><rect width="360" height="240" fill="' + sky + '"/>' + b + street + ppl + props + '</svg>';
  }
  window.ComicArt = { chars: chars, panels: panels, face: face, scene: scene };
})();
