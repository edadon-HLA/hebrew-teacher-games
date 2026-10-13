/* Drawings of things in a home — used by the vocabulary game, the family-house game and the Niflaot lessons.
 * HomeArt.svg('elevator')  → a ready <svg> string (200 x 150).  HomeArt.has(key) tells if a drawing exists.
 * Everything is drawn here, so there are no picture files and no copyright questions. */
(function(){
const INK = '#2b2a3a';
const W = (bg) => `<rect width="200" height="150" fill="${bg}"/>`;
const FLOOR = (y, c = '#d9b98a') => `<rect y="${y}" width="200" height="${150 - y}" fill="${c}"/><rect y="${y}" width="200" height="4" fill="rgba(0,0,0,.12)"/>`;
const person = (x, y, s = 1, shirt = '#e2506a', skin = '#f2c4a0', hair = '#4a2c1a') =>
  `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-9" y="14" width="18" height="24" rx="6" fill="${shirt}"/><circle cx="0" cy="6" r="9" fill="${skin}"/><path d="M-9 4 Q0 -8 9 4 Q0 0 -9 4Z" fill="${hair}"/><rect x="-7" y="38" width="5" height="12" fill="#3d5a80"/><rect x="2" y="38" width="5" height="12" fill="#3d5a80"/></g>`;

const ART = {
  elevator: () => W('#efe3cf') + FLOOR(128, '#cdb89a') +
    `<rect x="48" y="14" width="104" height="116" rx="4" fill="#9aa5b1"/><rect x="54" y="22" width="92" height="108" fill="#c9d2da"/>
     <rect x="54" y="22" width="45" height="108" fill="#dfe6ec" stroke="#8f9aa6" stroke-width="2"/><rect x="101" y="22" width="45" height="108" fill="#dfe6ec" stroke="#8f9aa6" stroke-width="2"/>
     <rect x="76" y="2" width="48" height="14" rx="3" fill="${INK}"/><text x="100" y="13" text-anchor="middle" font-size="11" font-weight="800" fill="#7CFC9a" font-family="Arial">▲ 3</text>
     <rect x="160" y="52" width="20" height="38" rx="5" fill="#8f9aa6"/><path d="M170 60 l-5 8 h10z M170 84 l-5 -8 h10z" fill="#fff"/>`,
  stairs: () => W('#e8f1fb') + FLOOR(134, '#c9b79c') +
    `<path d="M20 134 V118 H56 V102 H92 V86 H128 V70 H164 V54 H190 V134Z" fill="#d1a974" stroke="#a37c48" stroke-width="2"/>
     <path d="M20 118 H56 M56 102 H92 M92 86 H128 M128 70 H164 M164 54 H190" stroke="#b08850" stroke-width="3"/>
     <path d="M24 100 L186 28" stroke="#6b7685" stroke-width="5" stroke-linecap="round"/><path d="M40 108 V93 M80 92 V76 M120 75 V59 M160 57 V41" stroke="#6b7685" stroke-width="3"/>`,
  window: () => W('#f4ead8') +
    `<rect x="42" y="14" width="116" height="110" rx="4" fill="#8a6a45"/><rect x="50" y="22" width="100" height="94" fill="#9fd4f5"/>
     <ellipse cx="80" cy="48" rx="20" ry="8" fill="#fff"/><ellipse cx="100" cy="44" rx="14" ry="7" fill="#fff"/><circle cx="130" cy="42" r="9" fill="#ffe27a"/>
     <path d="M50 116 V92 Q70 78 90 92 Q110 74 130 92 Q140 86 150 92 V116Z" fill="#7bbf7a"/>
     <rect x="98" y="22" width="4" height="94" fill="#8a6a45"/><rect x="50" y="68" width="100" height="4" fill="#8a6a45"/><rect x="36" y="122" width="128" height="9" rx="2" fill="#a07c52"/>`,
  curtain: () => W('#f4ead8') +
    `<rect x="40" y="10" width="120" height="8" rx="3" fill="#6b4a2b"/><rect x="62" y="18" width="76" height="100" fill="#9fd4f5"/><circle cx="118" cy="40" r="8" fill="#ffe27a"/>
     <path d="M44 18 Q70 60 62 130 H44Z" fill="#e2506a"/><path d="M156 18 Q130 60 138 130 H156Z" fill="#e2506a"/>
     <path d="M52 20 Q64 70 58 128 M150 20 Q138 70 144 128" stroke="#c53d57" stroke-width="3" fill="none"/><rect x="40" y="60" width="26" height="6" rx="3" fill="#ffd166"/><rect x="134" y="60" width="26" height="6" rx="3" fill="#ffd166"/>
     <rect x="40" y="126" width="120" height="6" fill="#b79a73"/>`,
  lamp: () => W('#fbefd8') + FLOOR(122) +
    `<ellipse cx="100" cy="30" rx="60" ry="26" fill="#fff3a8" opacity=".55"/><path d="M70 22 L130 22 L118 58 H82Z" fill="#ffd54a" stroke="#d9a400" stroke-width="2"/>
     <rect x="97" y="58" width="6" height="52" fill="#6b7685"/><ellipse cx="100" cy="112" rx="26" ry="8" fill="#6b7685"/><rect x="60" y="116" width="80" height="8" rx="4" fill="rgba(0,0,0,.08)"/>`,
  rug: () => W('#d9b98a') +
    `<rect x="20" y="30" width="160" height="90" rx="8" fill="#3d8bf2"/><rect x="30" y="40" width="140" height="70" rx="4" fill="#fff" opacity=".25"/>
     <rect x="38" y="48" width="124" height="54" rx="3" fill="#e2506a"/><rect x="48" y="56" width="104" height="38" fill="#ffd166"/><path d="M100 60 L132 75 L100 90 L68 75Z" fill="#3d8bf2"/>
     <path d="M20 38 h-8 M20 50 h-8 M20 62 h-8 M20 74 h-8 M20 86 h-8 M20 98 h-8 M20 110 h-8 M180 38 h8 M180 50 h8 M180 62 h8 M180 74 h8 M180 86 h8 M180 98 h8 M180 110 h8" stroke="#f1e6cf" stroke-width="3"/>`,
  picture: () => W('#f4ead8') +
    `<rect x="46" y="18" width="108" height="86" rx="3" fill="#8a5a2b"/><rect x="56" y="28" width="88" height="66" fill="#bfe6fb"/>
     <circle cx="124" cy="46" r="9" fill="#ffe27a"/><path d="M56 94 V72 Q76 56 96 72 Q112 60 144 76 V94Z" fill="#7bbf7a"/><path d="M56 94 V84 Q80 76 100 86 Q124 78 144 88 V94Z" fill="#5ea85c"/>
     <path d="M100 18 L100 8" stroke="#6b7685" stroke-width="2"/><rect x="40" y="116" width="120" height="6" fill="#b79a73"/>`,
  wardrobe: () => W('#f1e6d3') + FLOOR(130) +
    `<rect x="46" y="14" width="108" height="116" rx="4" fill="#a8743e"/><rect x="52" y="20" width="46" height="104" fill="#c58d52" stroke="#8d5d2d" stroke-width="2"/><rect x="102" y="20" width="46" height="104" fill="#c58d52" stroke="#8d5d2d" stroke-width="2"/>
     <circle cx="90" cy="74" r="4" fill="#ffd166"/><circle cx="110" cy="74" r="4" fill="#ffd166"/><rect x="54" y="130" width="10" height="8" fill="#6a4524"/><rect x="136" y="130" width="10" height="8" fill="#6a4524"/>`,
  table: () => W('#f6ebd8') + FLOOR(118) +
    `<rect x="34" y="62" width="132" height="12" rx="4" fill="#b9814a"/><rect x="48" y="74" width="10" height="46" fill="#8d5d2d"/><rect x="142" y="74" width="10" height="46" fill="#8d5d2d"/>
     <ellipse cx="78" cy="56" rx="16" ry="5" fill="#fff"/><path d="M62 56 q16 -14 32 0" fill="#e2506a"/><rect x="112" y="40" width="16" height="22" rx="3" fill="#7fb7e8"/><path d="M120 40 V28 M114 32 q6 -10 12 0" stroke="#5ea85c" stroke-width="3" fill="none"/>`,
  chair: () => W('#f6ebd8') + FLOOR(122) +
    `<rect x="62" y="14" width="64" height="58" rx="6" fill="#d9965b" stroke="#a96a35" stroke-width="2"/><rect x="58" y="70" width="84" height="14" rx="5" fill="#e8aa6e" stroke="#a96a35" stroke-width="2"/>
     <rect x="64" y="84" width="9" height="40" fill="#8d5d2d"/><rect x="127" y="84" width="9" height="40" fill="#8d5d2d"/><rect x="62" y="22" width="56" height="6" fill="#c07d44"/><rect x="62" y="36" width="56" height="6" fill="#c07d44"/>`,
  sofa: () => W('#f6ebd8') + FLOOR(122) +
    `<rect x="26" y="46" width="148" height="56" rx="12" fill="#3d8bf2"/><rect x="38" y="36" width="124" height="44" rx="12" fill="#5aa3f7"/><rect x="18" y="62" width="28" height="48" rx="12" fill="#2f78de"/><rect x="154" y="62" width="28" height="48" rx="12" fill="#2f78de"/>
     <rect x="30" y="100" width="12" height="16" fill="#6a4524"/><rect x="158" y="100" width="12" height="16" fill="#6a4524"/><circle cx="62" cy="62" r="11" fill="#ffd166"/><circle cx="140" cy="62" r="11" fill="#e2506a"/>`,
  bed: () => W('#f4ead8') + FLOOR(122) +
    `<rect x="22" y="40" width="10" height="82" fill="#8d5d2d"/><rect x="168" y="62" width="10" height="60" fill="#8d5d2d"/><rect x="22" y="76" width="156" height="30" rx="6" fill="#e8f1fb" stroke="#b9c8dc" stroke-width="2"/>
     <rect x="34" y="62" width="40" height="18" rx="8" fill="#fff" stroke="#c7d2e3" stroke-width="2"/><rect x="74" y="76" width="104" height="30" rx="6" fill="#e2506a"/><path d="M74 88 H178 M74 98 H178" stroke="#c53d57" stroke-width="2"/>`,
  kitchen: () => W('#fff4dc') + FLOOR(122, '#e7d4b0') +
    `<rect x="12" y="22" width="46" height="100" rx="5" fill="#dfe6ec" stroke="#aab4bf" stroke-width="2"/><rect x="18" y="28" width="34" height="38" fill="#eef3f7"/><rect x="18" y="72" width="34" height="44" fill="#eef3f7"/><rect x="46" y="40" width="3" height="14" fill="#8f9aa6"/>
     <rect x="64" y="66" width="124" height="56" fill="#c58d52"/><rect x="64" y="60" width="124" height="8" fill="#e8d3b3"/><rect x="72" y="76" width="50" height="40" fill="#b3763f"/><rect x="128" y="76" width="52" height="40" fill="#b3763f"/>
     <rect x="136" y="48" width="42" height="12" rx="3" fill="#6b7685"/><circle cx="146" cy="44" r="4" fill="#e2506a"/><circle cx="168" cy="44" r="4" fill="#e2506a"/><rect x="76" y="48" width="38" height="12" rx="3" fill="#9aa5b1"/><path d="M92 48 v-10 h10" stroke="#9aa5b1" stroke-width="4" fill="none"/>
     <rect x="70" y="16" width="112" height="22" rx="3" fill="#ffd166" opacity=".6"/>`,
  livingroom: () => W('#fbf1df') + FLOOR(112) +
    `<rect x="30" y="22" width="60" height="40" rx="3" fill="#2b2a3a"/><rect x="34" y="26" width="52" height="32" fill="#6fb7e8"/><rect x="54" y="62" width="12" height="8" fill="#555"/>
     <rect x="14" y="70" width="110" height="46" rx="10" fill="#e2506a"/><rect x="22" y="60" width="94" height="36" rx="10" fill="#f0728a"/><rect x="132" y="42" width="14" height="70" fill="#6b7685"/><path d="M118 42 L160 42 L152 22 H126Z" fill="#ffd54a"/>
     <path d="M168 112 V86 M168 100 q-12 -10 -6 -22 M168 96 q12 -8 8 -20" stroke="#5ea85c" stroke-width="4" fill="none"/><rect x="158" y="106" width="20" height="16" rx="3" fill="#a8743e"/>`,
  bedroom: () => W('#ece6fb') + FLOOR(116) +
    `<rect x="120" y="14" width="64" height="54" rx="3" fill="#8a6a45"/><rect x="126" y="20" width="52" height="42" fill="#9fd4f5"/><circle cx="162" cy="34" r="6" fill="#fff3a8"/>
     <rect x="14" y="58" width="8" height="58" fill="#8d5d2d"/><rect x="14" y="80" width="118" height="26" rx="6" fill="#fff"/><rect x="26" y="68" width="34" height="16" rx="7" fill="#fff" stroke="#c7d2e3" stroke-width="2"/><rect x="56" y="80" width="76" height="26" rx="6" fill="#3d8bf2"/>
     <rect x="14" y="106" width="8" height="12" fill="#6a4524"/><rect x="124" y="106" width="8" height="12" fill="#6a4524"/>`,
  shower: () => W('#e1f3fb') +
    `<path d="M0 0 H200 V150 H0Z" fill="#d6edf8"/><g stroke="#bfe0f0" stroke-width="2">${[20, 40, 60, 80, 100, 120, 140, 160, 180].map(x => `<path d="M${x} 0 V150"/>`).join('')}${[25, 50, 75, 100, 125].map(y => `<path d="M0 ${y} H200"/>`).join('')}</g>
     <rect x="60" y="10" width="80" height="128" rx="4" fill="#bfe6fb" opacity=".55" stroke="#8fbfd9" stroke-width="3"/><path d="M92 10 V30 Q92 40 108 40 H130" stroke="#8f9aa6" stroke-width="5" fill="none"/>
     <ellipse cx="126" cy="46" rx="14" ry="6" fill="#aab4bf"/>${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${112 + i * 5} ${56 + (i % 2) * 8} v14" stroke="#4aa3e0" stroke-width="3" stroke-linecap="round"/><path d="M${116 + i * 5} ${80 + (i % 2) * 6} v14" stroke="#4aa3e0" stroke-width="3" stroke-linecap="round"/>`).join('')}
     <rect x="60" y="134" width="80" height="8" fill="#9bb7c9"/>`,
  toilet: () => W('#e9f1f6') + FLOOR(120, '#cfd9e0') +
    `<rect x="62" y="22" width="60" height="42" rx="6" fill="#fff" stroke="#c7d2e3" stroke-width="2"/><rect x="108" y="30" width="8" height="6" rx="2" fill="#aab4bf"/>
     <path d="M62 66 H134 Q138 92 112 100 V118 H78 V100 Q56 92 62 66Z" fill="#fff" stroke="#c7d2e3" stroke-width="2"/><ellipse cx="98" cy="68" rx="34" ry="8" fill="#e6eef5" stroke="#c7d2e3" stroke-width="2"/>
     <rect x="152" y="40" width="30" height="42" rx="5" fill="#3d8bf2"/><circle cx="167" cy="54" r="6" fill="#fff"/><path d="M160 68 h14" stroke="#fff" stroke-width="4"/>`,
  building: () => W('#dff0fb') + FLOOR(132, '#8fbf7a') +
    `<rect x="54" y="8" width="92" height="126" fill="#c9d4e0" stroke="#8f9aa6" stroke-width="2"/>${[0, 1, 2, 3, 4].map(r => [0, 1, 2].map(c => `<rect x="${64 + c * 28}" y="${16 + r * 22}" width="18" height="14" fill="${(r + c) % 3 === 0 ? '#ffe27a' : '#8cc5ee'}"/>`).join('')).join('')}
     <rect x="88" y="112" width="24" height="22" fill="#8a5a2b"/><rect x="48" y="4" width="104" height="6" fill="#6b7685"/>`,
  apartment: () => W('#efe3cf') + FLOOR(130, '#c9b79c') +
    `<rect x="62" y="14" width="76" height="116" rx="4" fill="#8a5a2b"/><rect x="70" y="22" width="60" height="108" fill="#a8743e"/><rect x="78" y="30" width="44" height="40" rx="3" fill="#8d5d2d"/><rect x="78" y="78" width="44" height="44" rx="3" fill="#8d5d2d"/>
     <circle cx="124" cy="82" r="5" fill="#ffd166"/><rect x="86" y="2" width="28" height="14" rx="3" fill="#2b2a3a"/><text x="100" y="13" text-anchor="middle" font-size="12" font-weight="800" fill="#fff" font-family="Arial">12</text><rect x="64" y="130" width="72" height="8" rx="3" fill="#6a4524"/>`,
  floor: () => W('#dff0fb') +
    `<rect x="46" y="6" width="108" height="138" fill="#c9d4e0" stroke="#8f9aa6" stroke-width="2"/>${[0, 1, 2, 3].map(r => `<rect x="52" y="${12 + r * 33}" width="96" height="29" fill="${r === 1 ? '#ffe27a' : '#eaf0f6'}" stroke="#8f9aa6" stroke-width="2"/>`).join('')}
     <path d="M158 30 V6 L186 18 L158 30" fill="#e2506a"/><rect x="156" y="6" width="3" height="60" fill="#6b7685"/><text x="100" y="62" text-anchor="middle" font-size="18" font-weight="800" fill="#2b2a3a" font-family="Arial">2</text>`,
  zero: () => W('#d6dbe1') +
    `<rect x="54" y="12" width="92" height="126" rx="10" fill="#8f9aa6"/><rect x="62" y="20" width="76" height="30" rx="5" fill="#2b2a3a"/><text x="100" y="44" text-anchor="middle" font-size="26" font-weight="800" fill="#7CFC9a" font-family="Arial">0</text>
     ${[[76, 68, '3'], [124, 68, '2'], [76, 96, '1'], [124, 96, '0']].map(([x, y, t]) => `<circle cx="${x}" cy="${y}" r="13" fill="${t === '0' ? '#ffd166' : '#eef3f7'}" stroke="#6b7685" stroke-width="2"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="15" font-weight="800" fill="#2b2a3a" font-family="Arial">${t}</text>`).join('')}`,
  down: () => W('#e8f1fb') + FLOOR(134, '#c9b79c') +
    `<path d="M20 38 V54 H56 V70 H92 V86 H128 V102 H164 V118 H190 V134 H20Z" fill="#d1a974" stroke="#a37c48" stroke-width="2"/>${person(78, 36, .9, '#2a8bd0')}
     <path d="M150 16 V50 M138 40 L150 54 L162 40" stroke="#e2506a" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  up: () => W('#e8f1fb') + FLOOR(134, '#c9b79c') +
    `<path d="M20 134 V118 H56 V102 H92 V86 H128 V70 H164 V54 H190 V134Z" fill="#d1a974" stroke="#a37c48" stroke-width="2"/>${person(112, 12, .9, '#2f9d55')}
     <path d="M36 70 V36 M24 46 L36 32 L48 46" stroke="#2f9d55" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  inside: () => W('#fbf1df') + FLOOR(120) +
    `<path d="M50 70 H150 L142 120 H58Z" fill="#c58d52" stroke="#8d5d2d" stroke-width="3"/><path d="M50 70 L38 52 H64 M150 70 L162 52 H136" stroke="#8d5d2d" stroke-width="3" fill="#d9a366"/><circle cx="100" cy="86" r="18" fill="#e2506a"/><path d="M92 80 q8 -8 16 0" stroke="#fff" stroke-width="3" fill="none"/>
     <path d="M100 8 V44 M90 34 L100 46 L110 34" stroke="#2b2a3a" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  hasroom: () => W('#eaf6ec') + FLOOR(112, '#cfe3d2') +
    `<rect x="18" y="62" width="164" height="12" rx="4" fill="#a8743e"/>${[0, 1, 2].map(i => `<rect x="${30 + i * 44}" y="30" width="30" height="34" rx="6" fill="#d9965b"/>${person(45 + i * 44, 16, .55, ['#3d8bf2', '#e2506a', '#2f9d55'][i])}`).join('')}
     <rect x="150" y="30" width="26" height="34" rx="6" fill="none" stroke="#2f9d55" stroke-width="4" stroke-dasharray="6 5"/><path d="M158 100 l8 8 l14 -18" stroke="#2f9d55" stroke-width="7" fill="none" stroke-linecap="round"/>`,
  noroom: () => W('#fbeaea') + FLOOR(112, '#e6cfcf') +
    `<rect x="18" y="62" width="164" height="12" rx="4" fill="#a8743e"/>${[0, 1, 2, 3].map(i => `<rect x="${24 + i * 40}" y="30" width="30" height="34" rx="6" fill="#d9965b"/>${person(39 + i * 40, 16, .55, ['#3d8bf2', '#e2506a', '#2f9d55', '#f2b01e'][i])}`).join('')}
     <path d="M158 92 l22 22 M180 92 l-22 22" stroke="#e2506a" stroke-width="7" stroke-linecap="round"/>`,
  neighbor: () => W('#efe3cf') + FLOOR(130, '#c9b79c') +
    `<rect x="12" y="20" width="62" height="110" rx="4" fill="#8a5a2b"/><rect x="18" y="26" width="50" height="104" fill="#a8743e"/><circle cx="62" cy="80" r="4" fill="#ffd166"/>
     <rect x="126" y="20" width="62" height="110" rx="4" fill="#5b7fa6"/><rect x="132" y="26" width="50" height="104" fill="#7ea0c4"/><circle cx="140" cy="80" r="4" fill="#ffd166"/>
     ${person(100, 60, 1.1, '#2f9d55')}<path d="M112 70 q16 -16 20 -34" stroke="#f2c4a0" stroke-width="6" fill="none" stroke-linecap="round"/><text x="132" y="34" font-size="16">👋</text>`,
  balloon: () => W('#dff0fb') +
    `<ellipse cx="100" cy="56" rx="34" ry="42" fill="#e2506a"/><ellipse cx="88" cy="40" rx="8" ry="14" fill="#fff" opacity=".4" transform="rotate(20 88 40)"/><path d="M94 96 L100 104 L106 96Z" fill="#c53d57"/>
     <path d="M100 104 q-10 14 4 24 q10 8 -4 20" stroke="#6b7685" stroke-width="2.5" fill="none"/>`,
  grandpa: () => W('#fbf1df') + `<text x="100" y="105" text-anchor="middle" font-size="96">👴</text>`,
  grandma: () => W('#fbf1df') + `<text x="100" y="105" text-anchor="middle" font-size="96">👵</text>`,
  dad: () => W('#e8f1fb') + `<text x="100" y="105" text-anchor="middle" font-size="96">👨</text>`,
  mom: () => W('#fde3e7') + `<text x="100" y="105" text-anchor="middle" font-size="96">👩</text>`,
  brother: () => W('#e8f1fb') + `<text x="100" y="105" text-anchor="middle" font-size="96">👦</text>`,
  sister: () => W('#fde3e7') + `<text x="100" y="105" text-anchor="middle" font-size="96">👧</text>`
};

/* a room with a person doing something — used by the family-house game.  rooms are drawn on a 400 x 260 stage */
const HomeArt = {
  has: k => !!ART[k],
  svg: (key, extra = '') => `<svg viewBox="0 0 200 150" role="img" aria-label="" xmlns="http://www.w3.org/2000/svg" style="font-family:'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif">${(ART[key] || (() => W('#eee')))()}${extra}</svg>`,
  keys: () => Object.keys(ART),
  person
};
window.HomeArt = HomeArt;
})();
