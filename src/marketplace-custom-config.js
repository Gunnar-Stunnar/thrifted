/*
 * Marketplace specific configuration.
 */



export const size = [
  {
    key:"xxs",
    label:'XXS'
  },
  {
    key:"xs",
    label:'XS'
  },
  {
    key:"small",
    label:'small'
  },
  {
    key:"medium",
    label:'Medium'
  },
  {
    key:"large",
    label:'Large'
  },
  {
    key:"xl",
    label:'XL'
  },
  {
    key:"xxl",
    label:'XXL'
  },
  {
    key:"one-size",
    label:"one-size"
  }

];

export const condition = [
  {
    key:"perfect",
    label:'Perfect'
  },
  {
    key:"great",
    label:'Great'
  },
  {
    key:"good",
    label:'Good'
  },
  {
    key:"lightly Used",
    label:'Lightly Used'
  },
  {
    key:"used",
    label:'Used'
  },
];


export const categories = [
  {
    key: 'mens',
    label: 'Men\'s',
    subCategories: [
      { key: 'pants', label: 'Pants',},
      { key: 'men-shirts', label: 'Shirts',},
      { key: 'men-jackets', label: 'Jackets',},
      { key: 'men-overalls', label:'overalls' },
      { key: 'hats', label:'hats'}
    ],
  },
  {
    key: 'womens',
    label: 'Women\'s',
    subCategories: [
      { key: 'women-shirts', label: 'Shirts',},
      { key: 'bottoms', label: 'Bottoms',},
      { key: 'denim', label: 'Denim',},

    ],
  },
  //{ key: 'Clothing', label: 'Clothing', },
  { key: 'Gear',
    label: 'Gear (Outdoor/Sporting)',
    subCategories:[
      { key: 'rock-climbing', label: 'Rock Climbing' },
      { key: 'ski-and-snow', label: 'Ski and Snow' },
      { key: 'camping-and-hiking', label:'Camping and Hiking'},
      { key: 'wheels', label: 'Wheels' },
      { key: 'nets-balls-and-bats', label: 'Nets, Balls, And Bats' }
    ]
  },
  { key: 'party',
    label: 'Costumes + Party',
    subCategories:[
      { key: 'school-spirit-wear', label: 'School Spirit Wear' },
      { key: 'retro-ski-gear', label: 'Retro Ski Gear' },
      { key: '70-s-disco', label: '70\'s Disco' },
      { key: '90-s-grunge', label: '90\'s Grunge' },
      { key: 'funky-printed-shirts', label: 'Funky Printed Shirts' }
    ]
  },
  { key: 'Shoes',
    label: 'Shoes',
    subCategories:[
      { key: 'sneakers', label: 'sneakers' },
      { key: 'high-heels', label: 'high heels' },
      { key: 'sandals', label: 'sandals' },
      { key: 'boots', label: 'boots' },
      { key: 'dress shoes', label: 'flats' }
    ]
  }
];

/*
export const subCategory = {
  Clothing:[
    { key: 'men', label: 'Men\'s' },
    { key: 'women', label: 'Women\'s' },
    { key: 'unisex', label: 'Unisex' },
    { key: 'pants', label: 'Pants' },
    { key: 'shirt', label: 'Shirts' },
    { key: 'jackets', label: 'Jackets' },
    { key: 'Overalls', label: 'Overalls' },
    { key: 'Hats', label: 'Hats' }
  ],
  Gear:[
    { key: 'rock-climbing', label: 'Rock Climbing' },
    { key: 'ski-and-snow', label: 'Ski and Snow' },
    { key: 'camping-and-hiking', label:'Camping and Hiking'},
    { key: 'wheels', label: 'Wheels' },
    { key: 'nets-balls-and-bats', label: 'Nets, Balls, And Bats' }
  ]
  ,
  party:[
    { key: 'school-spirit-wear', label: 'School Spirit Wear' },
    { key: 'retro-ski-gear', label: 'Retro Ski Gear' },
    { key: '70-s-disco', label: '70\'s Disco' },
    { key: '90-s-grunge', label: '90\'s Grunge' },
    { key: 'funky-printed-shirts', label: 'Funky Printed Shirts' }
  ]
};
*/

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 60,
  step: 1,
};
// Shoe size filter config
export const shoe_size = {
  Min:0,
  Max:20,
  step:0.5
};

// Activate booking dates filter on search page
/*
export const dateRangeFilterConfig = {
  active: true,
};
*/

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};
