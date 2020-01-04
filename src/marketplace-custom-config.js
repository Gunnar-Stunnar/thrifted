/*
 * Marketplace specific configuration.
 */
/*
export const amenities = [
  {
    key: 'towels',
    label: 'Towels',
  },
  {
    key: 'bathroom',
    label: 'Bathroom',
  },
  {
    key: 'swimming_pool',
    label: 'Swimming pool',
  },
  {
    key: 'own_drinks',
    label: 'Own drinks allowed',
  },
  {
    key: 'jacuzzi',
    label: 'Jacuzzi',
  },
  {
    key: 'audiovisual_entertainment',
    label: 'Audiovisual entertainment',
  },
  {
    key: 'barbeque',
    label: 'Barbeque',
  },
  {
    key: 'own_food_allowed',
    label: 'Own food allowed',
  },
];*/

export const size = [
  {
    key:"XXS",
    label:'XXS'
  },
  {
    key:"XS",
    label:'XS'
  },
  {
    key:"small",
    label:'small'
  },
  {
    key:"Medium",
    label:'Medium'
  },
  {
    key:"Large",
    label:'Large'
  },
  {
    key:"XL",
    label:'XL'
  },
  {
    key:"XXL",
    label:'XXL'
  },
  {
    key:"One Size",
    label:'One Size'
  },

];

export const condition = [
  {
    key:"Perfect",
    label:'Perfect'
  },
  {
    key:"Great",
    label:'Great'
  },
  {
    key:"Good",
    label:'Good'
  },
  {
    key:"Lightly Used",
    label:'Lightly Used'
  },
  {
    key:"Used",
    label:'Used'
  },
];

export const shoe_size = {
  Min:0,
  Max:20,
  step:0.5
}

export const categories = [
  { key: 'Men', label: 'Men\'s Clothing' },
  { key: 'Women', label: 'Women\'s Clothing' },
  { key: 'Gear', label: 'Gear (Outdoor/Sporting)' },
  { key: 'party', label: 'Costumes + Party' },
];



// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};
