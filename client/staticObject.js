const plantDatabase = [
  {
    _id: '662fbb7313277adf58aeef05',
    State: 'New York',
    Species: 'Acer rubrum',
    CommonName: 'Red Maple',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG2564.JPG',
  },
  {
    _id: '662fbb7313277adf58aeef06',
    State: 'New York',
    Species: 'Acer saccharinum',
    CommonName: 'Silver Maple',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG1042.JPG',
  },
  {
    _id: '662fbb7313277adf58aeef07',
    State: 'New York',
    Species: 'Acer saccharum',
    CommonName: 'Sugar Maple',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG1396.JPG',
  },
  {
    _id: '662fbb7313277adf58aeef08',
    State: 'New York',
    Species: 'Achillea millefolium',
    CommonName: 'Common Yarrow',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Part-shade',
    Water: 'Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/LMP_IMG0402.JPG',
  },
  {
    _id: '662fbb7313277adf58aeef09',
    State: 'New York',
    Species: 'Actaea pachypoda',
    CommonName: 'White Baneberry',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Shade, Part-shade',
    Water: 'Wet, Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG0001.JPG',
  },
  {
    _id: '662fbb7313277adf58aeef0a',
    State: 'New York',
    Species: 'Actaea rubra',
    CommonName: 'Red Baneberry',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG0002.JPG',
  },
  {
    _id: '662fbb7313277adf58aeef0b',
    State: 'New York',
    Species: 'Adiantum pedatum',
    CommonName: 'Northern Maidenhair Fern',
    Duration: 'Perennial',
    Habit: 'Fern',
    Light: 'Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG3197.JPG',
  },
  {
    _id: '662fbb7313277adf58aeef0c',
    State: 'New York',
    Species: 'Amelanchier canadensis',
    CommonName: 'Canadian Serviceberry',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Wet, Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/PCD3612_IMG0031.JPG',
  },
  {
    _id: '662fbb7313277adf58aeef0d',
    State: 'New York',
    Species: 'Anaphalis margaritacea',
    CommonName: 'Western Pearly Everlasting',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Part-shade',
    Water: 'Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SCB_IMG3657.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef0e',
    State: 'New York',
    Species: 'Anemone canadensis',
    CommonName: 'Canadian Anemone',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/JLR_IMG12573.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef0f',
    State: 'New York',
    Species: 'Aquilegia canadensis',
    CommonName: 'Eastern Red Columbine',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/L_P_IMG0404.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef10',
    State: 'New York',
    Species: 'Asclepias tuberosa',
    CommonName: 'Butterflyweed',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG1660.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef11',
    State: 'New York',
    Species: 'Asimina triloba',
    CommonName: 'Pawpaw',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/BGNP_0038.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef12',
    State: 'New York',
    Species: 'Betula lenta',
    CommonName: 'Sweet Birch',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG0195.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef13',
    State: 'New York',
    Species: 'Betula populifolia',
    CommonName: 'Gray Birch',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Wet, Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SCB_IMG3757.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef14',
    State: 'New York',
    Species: 'Campanula rotundifolia',
    CommonName: 'Bluebell Bellflower',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/TRG_IMG0145.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef15',
    State: 'New York',
    Species: 'Campanulastrum americanum',
    CommonName: 'American Bellflower',
    Duration: 'Annual',
    Habit: 'Herb',
    Light: 'Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG5228.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef16',
    State: 'New York',
    Species: 'Campsis radicans',
    CommonName: 'Trumpet Creeper',
    Duration: 'Perennial',
    Habit: 'Vine',
    Light: 'Sun',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SAW_00681.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef17',
    State: 'New York',
    Species: 'Carpinus caroliniana',
    CommonName: 'American Hornbeam',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG0017.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef18',
    State: 'New York',
    Species: 'Carya glabra',
    CommonName: 'Pignut Hickory',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/RWS_IMG0718.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef19',
    State: 'New York',
    Species: 'Carya ovata',
    CommonName: 'Shagbark Hickory',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/PCD1286_IMG0034.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef1a',
    State: 'New York',
    Species: 'Carya tomentosa',
    CommonName: 'Mockernut Hickory',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/PCD1286_IMG0036.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef1b',
    State: 'New York',
    Species: 'Ceanothus americanus',
    CommonName: 'New Jersey Tea',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Sun, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/RWS_IMG1043.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef1c',
    State: 'New York',
    Species: 'Cercis canadensis',
    CommonName: 'Eastern Redbud',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG0022.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef1d',
    State: 'New York',
    Species: 'Chamaecyparis thyoides',
    CommonName: 'Atlantic White Cedar',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Part-shade',
    Water: 'Wet',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SAW_00847.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef1e',
    State: 'New York',
    Species: 'Chamerion angustifolium',
    CommonName: 'ssp.',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/FAL_IMG0002.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef1f',
    State: 'New York',
    Species: 'Claytonia caroliniana',
    CommonName: 'Carolina Springbeauty',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Part-shade',
    Water: 'Wet, Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG0879.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef20',
    State: 'New York',
    Species: 'Claytonia virginica',
    CommonName: 'Virginia Springbeauty',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/RWS_IMG3323.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef21',
    State: 'New York',
    Species: 'Conoclinium coelestinum',
    CommonName: 'Blue Mistflower',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/ADM_IMG0123.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef22',
    State: 'New York',
    Species: 'Coreopsis lanceolata',
    CommonName: 'Lanceleaf Coreopsis',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SCB_IMG1325.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef23',
    State: 'New York',
    Species: 'Cornus alternifolia',
    CommonName: 'Alternateleaf Dogwood',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/JCB_IMG0010.JPG',
  },
  {
    _id: '662fbb7413277adf58aeef24',
    State: 'New York',
    Species: 'Cornus florida',
    CommonName: 'Flowering Dogwood',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG0041.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef25',
    State: 'New York',
    Species: 'Desmodium canadense',
    CommonName: 'Showy Tick Trefoil',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/RWS_IMG1572.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef26',
    State: 'New York',
    Species: 'Eutrochium purpureum',
    CommonName: 'Purple Joepyeweed',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/RWS_IMG0465.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef27',
    State: 'New York',
    Species: 'Fagus grandifolia',
    CommonName: 'American Beech',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/JLR_IMG8955.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef28',
    State: 'New York',
    Species: 'Fothergilla gardenii',
    CommonName: 'Dwarf Witchalder',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Sun, Part-shade',
    Water: 'Unknown',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/RWS_IMG2043.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef29',
    State: 'New York',
    Species: 'Fraxinus americana',
    CommonName: 'White Ash',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/PCD0878_IMG0011.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef2a',
    State: 'New York',
    Species: 'Fraxinus nigra',
    CommonName: 'Black Ash',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Wet, Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG1214.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef2b',
    State: 'New York',
    Species: 'Gaultheria procumbens',
    CommonName: 'Eastern Teaberry',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/DHK_IMG0009.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef2c',
    State: 'New York',
    Species: 'Gaylussacia baccata',
    CommonName: 'Black Huckleberry',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Wet, Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/PCD1769_IMG0066.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef2d',
    State: 'New York',
    Species: 'Gaylussacia brachycera',
    CommonName: 'Box Huckleberry',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Part-shade',
    Water: 'Unknown',
    Thumb: null,
  },
  {
    _id: '662fbb7513277adf58aeef2e',
    State: 'New York',
    Species: 'Helianthus tuberosus',
    CommonName: 'Jerusalem Artichoke',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/BGNP_0161.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef2f',
    State: 'New York',
    Species: 'Hibiscus moscheutos',
    CommonName: 'Crimson-eyed Rose-mallow',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Sun, Part-shade',
    Water: 'Wet, Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SAW_01731.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef30',
    State: 'New York',
    Species: 'Hypericum prolificum',
    CommonName: "Shrubby St. John's-wort",
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG0595.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef31',
    State: 'New York',
    Species: 'Ilex opaca',
    CommonName: 'American Holly',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Wet, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SAW_01805.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef32',
    State: 'New York',
    Species: 'Juglans nigra',
    CommonName: 'Black Walnut',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SAW_01872.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef33',
    State: 'New York',
    Species: 'Juniperus virginiana',
    CommonName: 'Eastern Red Cedar',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/RCM_IMG2652.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef34',
    State: 'New York',
    Species: 'Kalmia latifolia',
    CommonName: 'Mountain Laurel',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SCB_IMG0213.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef35',
    State: 'New York',
    Species: 'Larix laricina',
    CommonName: 'Tamarack',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade',
    Water: 'Wet, Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/RWS_IMG2211.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef36',
    State: 'New York',
    Species: 'Liatris spicata',
    CommonName: 'Dense Blazing Star',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SCB_IMG1471.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef37',
    State: 'New York',
    Species: 'Liquidambar styraciflua',
    CommonName: 'Sweetgum',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SCB_IMG4811.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef38',
    State: 'New York',
    Species: 'Liriodendron tulipifera',
    CommonName: 'Tulip Tree',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG5624.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef39',
    State: 'New York',
    Species: 'Lobelia cardinalis',
    CommonName: 'Cardinal Flower',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Wet, Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SCB_IMG0003.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef3a',
    State: 'New York',
    Species: 'Lobelia siphilitica',
    CommonName: 'Great Blue Lobelia',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Wet, Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG1154.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef3b',
    State: 'New York',
    Species: 'Lupinus perennis',
    CommonName: 'Sundial Lupine',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG0029.JPG',
  },
  {
    _id: '662fbb7513277adf58aeef3c',
    State: 'New York',
    Species: 'Maianthemum racemosum',
    CommonName: 'ssp.',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG3068.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef3d',
    State: 'New York',
    Species: 'Maianthemum stellatum',
    CommonName: 'Starry False Lily Of The Valley',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG0590.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef3e',
    State: 'New York',
    Species: 'Malus coronaria',
    CommonName: 'Sweet Crabapple',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/RWS_IMG0021.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef3f',
    State: 'New York',
    Species: 'Matteuccia struthiopteris',
    CommonName: 'Ostrich Fern',
    Duration: 'Perennial',
    Habit: 'Herb, Fern',
    Light: 'Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG4467.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef40',
    State: 'New York',
    Species: 'Mitchella repens',
    CommonName: 'Partridgeberry',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG3280.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef41',
    State: 'New York',
    Species: 'Mitella diphylla',
    CommonName: 'Twoleaf Miterwort',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/RWS_IMG0312.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef42',
    State: 'New York',
    Species: 'Monarda didyma',
    CommonName: 'Scarlet Beebalm',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Part-shade',
    Water: 'Wet, Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG3196.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef43',
    State: 'New York',
    Species: 'Monarda fistulosa',
    CommonName: 'Wild Bergamot',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/JLR_IMG9432.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef44',
    State: 'New York',
    Species: 'Nyssa sylvatica',
    CommonName: 'Tupelo',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG0972.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef45',
    State: 'New York',
    Species: 'Osmunda cinnamomea',
    CommonName: 'Cinnamon Fern',
    Duration: 'Perennial',
    Habit: 'Herb, Fern',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Wet, Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG3117.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef46',
    State: 'New York',
    Species: 'Osmunda claytoniana',
    CommonName: 'Interrupted Fern',
    Duration: 'Perennial',
    Habit: 'Herb, Fern',
    Light: 'Shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG3075.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef47',
    State: 'New York',
    Species: 'Osmunda regalis',
    CommonName: 'Royal Fern',
    Duration: 'Perennial',
    Habit: 'Herb, Fern',
    Light: 'Shade, Part-shade',
    Water: 'Wet, Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SCB_IMG1155.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef48',
    State: 'New York',
    Species: 'Parthenocissus quinquefolia',
    CommonName: 'Virginia Creeper',
    Duration: 'Perennial',
    Habit: 'Vine',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/LMP_IMG0548.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef49',
    State: 'New York',
    Species: 'Penstemon digitalis',
    CommonName: 'Mississippi Penstemon',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Part-shade',
    Water: 'Wet, Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/RWS_IMG1004.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef4a',
    State: 'New York',
    Species: 'Penstemon hirsutus',
    CommonName: 'Hairy Penstemon',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/RWS_IMG2989.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef4b',
    State: 'New York',
    Species: 'Phlox divaricata',
    CommonName: 'Wild Blue Phlox',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG4229.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef4c',
    State: 'New York',
    Species: 'Phlox subulata',
    CommonName: 'Creeping Phlox',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Part-shade',
    Water: 'Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/RWS_IMG0327.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef4d',
    State: 'New York',
    Species: 'Physostegia virginiana',
    CommonName: 'Fall Obedient Plant',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG2987.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef4e',
    State: 'New York',
    Species: 'Picea rubens',
    CommonName: 'Red Spruce',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/WEB_IMG0389.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef4f',
    State: 'New York',
    Species: 'Pinus resinosa',
    CommonName: 'Red Pine',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG0986.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef50',
    State: 'New York',
    Species: 'Pinus strobus',
    CommonName: 'Eastern White Pine',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG1291.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef51',
    State: 'New York',
    Species: 'Pinus virginiana',
    CommonName: 'Virginia Pine',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG2386.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef52',
    State: 'New York',
    Species: 'Podophyllum peltatum',
    CommonName: 'Mayapple',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/ADM_IMG0082.JPG',
  },
  {
    _id: '662fbb7613277adf58aeef53',
    State: 'New York',
    Species: 'Polemonium reptans',
    CommonName: 'Greek Valerian',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG3931.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef54',
    State: 'New York',
    Species: 'Polystichum acrostichoides',
    CommonName: 'Christmas Fern',
    Duration: 'Perennial',
    Habit: 'Fern',
    Light: 'Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SAW_04132.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef55',
    State: 'New York',
    Species: 'Prunus serotina',
    CommonName: 'Black Cherry',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG1307.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef56',
    State: 'New York',
    Species: 'Prunus virginiana',
    CommonName: 'Chokecherry',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SAW_02909.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef57',
    State: 'New York',
    Species: 'Pteridium aquilinum',
    CommonName: 'Western Bracken Fern',
    Duration: 'Perennial',
    Habit: 'Herb, Fern',
    Light: 'Shade, Part-shade',
    Water: 'Wet, Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SAW_04136.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef58',
    State: 'New York',
    Species: 'Quercus alba',
    CommonName: 'White Oak',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SAW_02980.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef59',
    State: 'New York',
    Species: 'Quercus coccinea',
    CommonName: 'Scarlet Oak',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/PCD1757_IMG0011.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef5a',
    State: 'New York',
    Species: 'Quercus macrocarpa',
    CommonName: 'Bur Oak',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Wet, Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/DEW_00031.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef5b',
    State: 'New York',
    Species: 'Quercus muehlenbergii',
    CommonName: 'Chinkapin Oak',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Part-shade',
    Water: 'Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SAW_03027.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef5c',
    State: 'New York',
    Species: 'Quercus palustris',
    CommonName: 'Pin Oak',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Wet, Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG0577.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef5d',
    State: 'New York',
    Species: 'Quercus rubra',
    CommonName: 'var.',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Unknown',
    Water: 'Unknown',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/PCD1757_IMG0009.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef5e',
    State: 'New York',
    Species: 'Rhododendron arborescens',
    CommonName: 'Smooth Azalea',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG3169.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef5f',
    State: 'New York',
    Species: 'Rhododendron calendulaceum',
    CommonName: 'Flame Azalea',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG2671.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef60',
    State: 'New York',
    Species: 'Rhododendron maximum',
    CommonName: 'Great Laurel',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Part-shade',
    Water: 'Wet, Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG0278.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef61',
    State: 'New York',
    Species: 'Rhododendron prunifolium',
    CommonName: 'Plumleaf Azalea',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG3565.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef62',
    State: 'New York',
    Species: 'Rhus copallinum',
    CommonName: 'Winged Sumac',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Sun',
    Water: 'Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/PCD3897_IMG0018.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef63',
    State: 'New York',
    Species: 'Rosa palustris',
    CommonName: 'Swamp Rose',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Wet, Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG1669.JPG',
  },
  {
    _id: '662fbb7713277adf58aeef64',
    State: 'New York',
    Species: 'Rudbeckia hirta',
    CommonName: 'Black-eyed Susan',
    Duration: 'Annual, Biennial, Perennial',
    Habit: 'Herb',
    Light: 'Sun',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/LMP_IMG0084.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef65',
    State: 'New York',
    Species: 'Rudbeckia laciniata',
    CommonName: 'Green-headed Coneflower',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SCB_IMG2754.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef66',
    State: 'New York',
    Species: 'Sassafras albidum',
    CommonName: 'Sassafras',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/MBK_IMG0001.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef67',
    State: 'New York',
    Species: 'Sibbaldiopsis tridentata',
    CommonName: 'Shrubby Five-fingers',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun',
    Water: 'Unknown',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG0717.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef68',
    State: 'New York',
    Species: 'Silene virginica',
    CommonName: 'Fire Pink',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/ADM_IMG0187.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef69',
    State: 'New York',
    Species: 'Silphium perfoliatum',
    CommonName: 'Cup Plant',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Sun',
    Water: 'Wet, Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SCB_IMG1585.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef6a',
    State: 'New York',
    Species: 'Sorbus americana',
    CommonName: 'American Mountain Ash',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG0727.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef6b',
    State: 'New York',
    Species: 'Symphyotrichum novae-angliae',
    CommonName: 'New England Aster',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/BGNP_0040.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef6c',
    State: 'New York',
    Species: 'Thuja occidentalis',
    CommonName: 'Arborvitae',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/JLR_IMG15613.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef6d',
    State: 'New York',
    Species: 'Tiarella cordifolia',
    CommonName: 'Heartleaf Foamflower',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/JLR_IMG16122.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef6e',
    State: 'New York',
    Species: 'Tilia americana',
    CommonName: 'American Basswood',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/RWS_IMG1486.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef6f',
    State: 'New York',
    Species: 'Tilia americana',
    CommonName: 'var.',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Part-shade',
    Water: 'Unknown',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/J_M_IMG1616.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef70',
    State: 'New York',
    Species: 'Tsuga canadensis',
    CommonName: 'Eastern Hemlock',
    Duration: 'Perennial',
    Habit: 'Tree',
    Light: 'Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SAW_03860.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef71',
    State: 'New York',
    Species: 'Vaccinium angustifolium',
    CommonName: 'Lowbush Blueberry',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist, Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/SCB_IMG1755.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef72',
    State: 'New York',
    Species: 'Viburnum lentago',
    CommonName: 'Nannyberry',
    Duration: 'Perennial',
    Habit: 'Shrub',
    Light: 'Sun, Shade, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/JLR_IMG15489.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef73',
    State: 'New York',
    Species: 'Viola pedata',
    CommonName: 'Birdfoot Violet',
    Duration: 'Perennial',
    Habit: 'Herb',
    Light: 'Shade, Part-shade',
    Water: 'Dry',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG0053.JPG',
  },
  {
    _id: '662fbb7813277adf58aeef74',
    State: 'New York',
    Species: 'Viola sororia',
    CommonName: 'Missouri Violet',
    Duration: 'Annual',
    Habit: 'Herb',
    Light: 'Sun, Part-shade',
    Water: 'Moist',
    Thumb: 'https://shellscape.s3.us-east-2.amazonaws.com/A_C_IMG4702.JPG',
  },
];

export default plantDatabase;
