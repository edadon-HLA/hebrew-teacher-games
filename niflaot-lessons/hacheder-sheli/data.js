/* Niflaot "הַחֶדֶר שֶׁלִּי" — word search data + photo links (Wikimedia Commons; credits in the page's teacher note). */
window.HACHEDER = (() => {
const GRID = ['שולחןזכטצע', 'פמיטהעזכטצ', 'טצזדלתכעזפ', 'זכחלוןעצטפ', 'עטצזמנורהכ', 'צזכסאטעפצז', 'כעוילוןטזצ', 'טפזצארוןעכ'].map(r => Array.from(r));
const WORDS = [
  { he: 'מִיטָּה', r: 1, c: 1, d: 'h', n: 4 }, { he: 'שׁוּלְחָן', r: 0, c: 0, d: 'h', n: 5 }, { he: 'דֶּלֶת', r: 2, c: 3, d: 'h', n: 3 }, { he: 'חַלּוֹן', r: 3, c: 2, d: 'h', n: 4 },
  { he: 'מְנוֹרָה', r: 4, c: 4, d: 'h', n: 5 }, { he: 'כִּסֵּא', r: 5, c: 2, d: 'h', n: 3 }, { he: 'וִילוֹן', r: 6, c: 2, d: 'h', n: 5 }, { he: 'אָרוֹן', r: 7, c: 4, d: 'h', n: 4 },
];
const cellsOf = w => Array.from({ length: w.n }, (_, i) => w.d === 'h' ? [w.r, w.c + i] : [w.r + i, w.c]);
const T = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/';
const PHOTOS = {
  apples: T + '1/1f/Three_apples%2C_red_and_green%2C_rest_near_an_open_book_on_a_wooden_table.jpg/500px-Three_apples%2C_red_and_green%2C_rest_near_an_open_book_on_a_wooden_table.jpg',
  lemons: T + '8/8a/Five_Lemons_on_lemon_tree%2C_Burj_Bhalaike.jpg/500px-Five_Lemons_on_lemon_tree%2C_Burj_Bhalaike.jpg',
  cats: T + 'b/be/Two_cats_sitting_with_beautiful_posture.jpg/500px-Two_cats_sitting_with_beautiful_posture.jpg',
  pencils: T + 'c/c6/Seven_Coloured_Pencils_%28sRGB%29.jpg/500px-Seven_Coloured_Pencils_%28sRGB%29.jpg',
  eggs: T + 'e/e9/Four_eggs_in_profile%2C_May_2011.jpg/500px-Four_eggs_in_profile%2C_May_2011.jpg',
  hands: T + '9/92/A_man%27s_hands%2C_palms_down%2C_opened_out_and_spread_onto_black_Wellcome_V0029446.jpg/500px-A_man%27s_hands%2C_palms_down%2C_opened_out_and_spread_onto_black_Wellcome_V0029446.jpg',
  bed: T + 'a/ad/Pillows_on_a_hotel_bed.jpg/500px-Pillows_on_a_hotel_bed.jpg',
  table: T + '4/4f/Wooden_table.jpg/500px-Wooden_table.jpg',
  door: T + 'c/c2/Front_door_of_an_alley_house%2C_South_Side%2C_2022-10-08%2C_01.jpg/500px-Front_door_of_an_alley_house%2C_South_Side%2C_2022-10-08%2C_01.jpg',
  window: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Window.jpg',
  lamp: T + '1/19/Wooden_Antique_Table_Lamp.jpg/500px-Wooden_Antique_Table_Lamp.jpg',
  chair: T + '1/1f/Chair_2020_P02.jpg/500px-Chair_2020_P02.jpg',
  curtain: T + '9/9e/Curtains_in_the_doors.jpg/500px-Curtains_in_the_doors.jpg',
  wardrobe: T + 'b/bd/Wooden_Wardrobe.jpg/500px-Wooden_Wardrobe.jpg',
};
return { GRID, WORDS, cellsOf, PHOTOS };
})();
