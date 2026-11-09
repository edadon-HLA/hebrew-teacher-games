/* Niflaot "מַה יֵּשׁ בָּרְחוֹב?" — shared by the lesson page and its printables.
 * GRID rows in reading order (first letter = right-most cell); all words go right-to-left.
 * SPOTS: hotspots on street.jpg (the CET class item picture, screens 1-2; copied by the teacher's order), in % of the picture:
 *   x / y = centre, w / h = size. CARDS: the 14 screen-5 words with photos (Wikimedia Commons; credits in the page note). */
window.BARECHOV = (() => {
const GRID = [
  'אוטובוסזכע',
  'צרחובטפזקמ',
  'כבנייניםזע',
  'טזרמזורצפק',
  'פקצאישהזטכ',
  'זחנותכפצעט',
  'כעטפזאישצק',
  'עכבישזטפקצ',
  'קצזעטפכזעפ',
].map(r => Array.from(r));
const WORDS = [
  { he: 'רְחוֹב', r: 1, c: 1, d: 'h', n: 4 },
  { he: 'כְּבִישׁ', r: 7, c: 1, d: 'h', n: 4 },
  { he: 'אוֹטוֹבּוּס', r: 0, c: 0, d: 'h', n: 7 },
  { he: 'רַמְזוֹר', r: 3, c: 2, d: 'h', n: 5 },
  { he: 'אִישׁ', r: 6, c: 5, d: 'h', n: 3 },
  { he: 'אִישָׁה', r: 4, c: 3, d: 'h', n: 4 },
  { he: 'חֲנוּת', r: 5, c: 1, d: 'h', n: 4 },
  { he: 'בִּנְיָנִים', r: 2, c: 1, d: 'h', n: 7 },
];
const cellsOf = w => Array.from({ length: w.n }, (_, i) => w.d === 'h' ? [w.r, w.c + i] : [w.r + i, w.c]);

/* hotspots: k = item key (sentences / questions highlight by key), he = bubble text, say = spoken text, star = new word */
const SPOTS = [
  { k: 'sign', he: 'רְחוֹב הַשָּׁלוֹם', say: 'רְחוֹב', star: true, x: 9.5, y: 44, w: 11, h: 13 },
  { k: 'build', he: 'בִּנְיָנִים', x: 51, y: 17, w: 16, h: 28 },
  { k: 'build', he: 'בִּנְיָנִים', x: 74, y: 7, w: 18, h: 12 },
  { k: 'bus', he: 'אוֹטוֹבּוּס', star: true, x: 79, y: 30, w: 28, h: 32 },
  { k: 'car', he: 'מְכוֹנִית', x: 58, y: 61, w: 14, h: 15 },
  { k: 'car', he: 'מְכוֹנִית', x: 70, y: 77, w: 16, h: 15 },
  { k: 'car', he: 'מְכוֹנִית', x: 83.5, y: 56, w: 14, h: 15 },
  { k: 'road', he: 'כְּבִישׁ', star: true, x: 22, y: 96, w: 18, h: 7 },
  { k: 'road', he: 'כְּבִישׁ', x: 69, y: 91, w: 12, h: 6 },
  { k: 'light', he: 'רַמְזוֹר', star: true, x: 41.5, y: 38, w: 5, h: 30 },
  { k: 'man', he: 'אִישׁ', star: true, x: 47.5, y: 77, w: 7, h: 32 },
  { k: 'woman', he: 'אִישָׁה', x: 38.5, y: 81, w: 6, h: 28 },
  { k: 'veg', he: 'חֲנוּת יְרָקוֹת', x: 23, y: 54, w: 13, h: 36 },
  { k: 'clothes', he: 'חֲנוּת בְּגָדִים', x: 96.5, y: 52, w: 7, h: 60 },
  { k: 'rest', he: 'מִסְעָדָה', x: 34, y: 31, w: 10, h: 34 },
  { k: 'dog', he: 'יַלְדָּה עִם כֶּלֶב', x: 86, y: 84, w: 14, h: 24 },
  { k: 'tree', he: 'עֵץ', x: 8, y: 73, w: 8, h: 24 },
  { k: 'tree', he: 'עֵץ', x: 59, y: 38, w: 4, h: 22 },
  { k: 'kids', he: 'יְלָדִים', x: 49, y: 47, w: 11, h: 20 },
];

const T = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/';
const PH = {
  plate: T + '5/5d/Empty_table_setting_plate_fork_knife_%2842585288225%29.jpg/500px-Empty_table_setting_plate_fork_knife_%2842585288225%29.jpg',
  chef: T + '5/5c/%E8%A5%BF%E5%B4%8E%E7%B7%8F%E6%96%99%E7%90%86%E9%95%B7.jpg/500px-%E8%A5%BF%E5%B4%8E%E7%B7%8F%E6%96%99%E7%90%86%E9%95%B7.jpg',
  noise: T + '7/7a/Traffic_jam_Bangkok.JPG/500px-Traffic_jam_Bangkok.JPG',
  quiet: T + '7/7e/People_studying_in_the_Wolfson_Reading_Room_of_Manchester_Central_Library_02.jpg/500px-People_studying_in_the_Wolfson_Reading_Room_of_Manchester_Central_Library_02.jpg',
  build: T + 'f/fe/Apartment_building_in_Haifa_-_Sarah_Stierch.jpg/500px-Apartment_building_in_Haifa_-_Sarah_Stierch.jpg',
  table: T + '6/6f/East_Slovak_Museum_in_Ko%C5%A1ice_-_Experience_Gothic_exhibit_-_Wooden_dining_table%2C_15th_century%2C_Spi%C5%A1_region.jpg/500px-East_Slovak_Museum_in_Ko%C5%A1ice_-_Experience_Gothic_exhibit_-_Wooden_dining_table%2C_15th_century%2C_Spi%C5%A1_region.jpg',
  trees: T + 'c/c4/Avenue_of_Trees%2C_Chipping_Norton_02.jpg/500px-Avenue_of_Trees%2C_Chipping_Norton_02.jpg',
  glass: T + '8/8f/Female_doctor_in_uniform_holding_a_glass_of_water_closeup.jpg/500px-Female_doctor_in_uniform_holding_a_glass_of_water_closeup.jpg',
  road: T + '4/47/Asphalt_road_under_the_hills_%28Unsplash%29.jpg/500px-Asphalt_road_under_the_hills_%28Unsplash%29.jpg',
  bus: T + '1/17/Egged_bus_IL_WV.JPG/500px-Egged_bus_IL_WV.JPG',
  lamp: T + 'e/e5/Blaue_Halogen-Schreibtischlampe_links_2022.jpg/500px-Blaue_Halogen-Schreibtischlampe_links_2022.jpg',
  books: T + '0/0f/Books_on_shelves_%28121%29.jpg/500px-Books_on_shelves_%28121%29.jpg',
  comp: T + '4/45/Computer_Lab_Picture.jpg/500px-Computer_Lab_Picture.jpg',
  chair: T + '1/1f/Chair_2020_P02.jpg/500px-Chair_2020_P02.jpg',
  bed: T + 'a/ad/Pillows_on_a_hotel_bed.jpg/500px-Pillows_on_a_hotel_bed.jpg',
  /* place headers */
  street: T + '0/05/Bus_lane_in_King_George_Street%2C_Jerusalem%2C_April_2025_03.jpg/500px-Bus_lane_in_King_George_Street%2C_Jerusalem%2C_April_2025_03.jpg',
  library: T + '7/7f/NYC_Public_Library_Research_Room_Jan_2006-1-_3.jpg/500px-NYC_Public_Library_Research_Room_Jan_2006-1-_3.jpg',
  restaurant: T + 'f/f3/Restaurant_room_of_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg/500px-Restaurant_room_of_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg',
  /* exit ticket: a new street (Allenby Street, Tel Aviv) */
  exit: T + '6/6e/Israel%2C_Tel_Aviv%2C_Allenby_Street%2C_February_2016.jpg/960px-Israel%2C_Tel_Aviv%2C_Allenby_Street%2C_February_2016.jpg',
};
/* the 14 screen-5 cards, in the CET order; at = suggested places (s = street, l = library, r = restaurant) */
const CARDS = [
  { k: 'plate', he: 'צַלַּחַת', at: 'r' }, { k: 'chef', he: 'שֵׁף', at: 'r' }, { k: 'noise', he: 'רַעַשׁ', at: 'sr' }, { k: 'quiet', he: 'שֶׁקֶט', at: 'l' },
  { k: 'build', he: 'בִּנְיָנִים', at: 's' }, { k: 'table', he: 'שׁוּלְחָן', at: 'lr' }, { k: 'trees', he: 'עֵצִים', at: 's' }, { k: 'glass', he: 'כּוֹס', at: 'r' },
  { k: 'road', he: 'כְּבִישׁ', at: 's' }, { k: 'bus', he: 'אוֹטוֹבּוּס', at: 's' }, { k: 'lamp', he: 'מְנוֹרָה', at: 'l' }, { k: 'books', he: 'סְפָרִים', at: 'l' },
  { k: 'comp', he: 'מַחְשְׁבִים', at: 'l' }, { k: 'chair', he: 'כִּסֵּא', at: 'lr' },
];
const PLACES = [{ k: 's', he: 'בָּרְחוֹב', ph: 'street' }, { k: 'l', he: 'בַּסִּפְרִיָּה', ph: 'library' }, { k: 'r', he: 'בַּמִּסְעָדָה', ph: 'restaurant' }];
return { GRID, WORDS, cellsOf, SPOTS, PH, CARDS, PLACES };
})();
