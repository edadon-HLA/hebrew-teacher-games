/* Picture sets for "צליל פותח" (games/tzlil-poteach.html) and the Niflaot reading lessons.
 * One entry per letter (key = the ?letter= value). Add a new letter here and the game and lessons can use it.
 *   letter: the letter as shown      sound: English label for the sound
 *   items:  { he: word with nikud, yes: starts with the sound, pic: image under games/tzlil/ | emo: emoji }
 * Pictures marked wb come from the reading workbook (Kamatz-Patach-Shvah, pp. 4 and 6). */
window.TZLIL_SETS = {
  shin: {
    letter: 'שׁ', first: 'שׁ', sound: 'sh', title: 'שׁ',
    items: [
      { he: 'שָׁלוֹשׁ',   yes: true,  pic: 'tzlil/pic-three.png' },   /* wb */
      { he: 'שָׁטִיחַ',   yes: true,  pic: 'tzlil/pic-carpet.png' },  /* wb */
      { he: 'בַּיִת',     yes: false, pic: 'tzlil/pic-house.png' },   /* wb */
      { he: 'שָׁחוֹר',    yes: true,  pic: 'tzlil/pic-blot.png' },    /* wb */
      { he: 'תַּפּוּחַ',  yes: false, pic: 'tzlil/pic-apple.png' },   /* wb */
      { he: 'שָׁעוֹן',    yes: true,  pic: 'tzlil/pic-clock.png' },   /* wb */
      { he: 'בָּלוֹן',    yes: false, pic: 'tzlil/pic-balloon.png' }, /* wb */
      { he: 'שָׁמַיִם',   yes: true,  pic: 'tzlil/pic-sky.png' },     /* wb */
      { he: 'שְׁתַּיִם',  yes: true,  pic: 'tzlil/pic-two.png' },     /* wb */
      { he: 'שֶׁמֶשׁ',    yes: true,  emo: '☀️' },
      { he: 'סוּס',       yes: false, emo: '🐴' },
      { he: 'שׁוֹקוֹלָד', yes: true,  emo: '🍫' },
      { he: 'כֶּלֶב',     yes: false, emo: '🐶' },
      { he: 'שׁוּעָל',    yes: true,  emo: '🦊' },
      { he: 'דָּג',       yes: false, emo: '🐟' },
      { he: 'שִׁנַּיִם',  yes: true,  emo: '🦷' },
      { he: 'סַפָּה',     yes: false, emo: '🛋️' },
      { he: 'שִׁיר',      yes: true,  emo: '🎤' },
      { he: 'פִּיל',      yes: false, emo: '🐘' },
      { he: 'שׁוֹר',      yes: true,  emo: '🐂' }
    ]
  }
};
