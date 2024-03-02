import { ModifierType } from '../pages/MenuManger/Category/category.types';
import { IVisibility } from '../types/MenuManager/menu';

export const value = 'test';
export const categories = [
  { value: 1, label: 'Sides' },
  { value: 2, label: 'NA Beverages' },
  { value: 3, label: 'Theme Craft Cocktails' },
  { value: 4, label: 'Flights Cocktails' },
  { value: 5, label: 'Happy Hour' },
  { value: 6, label: 'Brunch' },
  { value: 7, label: 'Food' },
  { value: 8, label: 'Wine' },
  { value: 9, label: 'Liquor' },
  { value: 10, label: 'Cocktails' },
  { value: 11, label: 'Beer' },
  { value: 12, label: 'Signature Flights' },
  { value: 13, label: 'Salads' },
];

export const IMAGES = {
  generatingGif: 'https://website-builder-demo.s3.us-west-2.amazonaws.com/assets/code.gif',
};
export const devicesName: Record<string, string> = {
  pos: 'POS & mPOS',
  online: 'Online',
  kiosk: 'Kiosk',
};
export const tags = [
  { value: 1, label: 'Spicy' },
  { value: 2, label: 'Halal' },
  { value: 3, label: 'Vegan' },
  { value: 4, label: 'Kosher' },
];

export const modifiers = [
  { value: 1, label: 'Size', type: ModifierType.modifier, options: ['Small', 'Regular', 'Large'] },
  { value: 2, label: 'Sauces', type: ModifierType.modifier, options: ['Ketchup', 'Mustard', 'Mushroom'] },
  {
    value: 3,
    label: 'Burger Modifiers',
    type: ModifierType.modifierGroup,
    options: ['Toppings', 'Cheese', 'Bread', 'Sauce'],
  },
  {
    value: 4,
    label: 'Pizza Modifiers',
    type: ModifierType.modifierGroup,
    options: ['Toppings', 'Cheese', 'Crust', 'Meat'],
  },
];

export const initialPrepStation = [
  { name: 'Drinks', taxValue: 5, value: false },
  { name: 'Food Station', taxValue: 5, value: false },
  { name: 'Hot Station', taxValue: 5, value: true },
  { name: 'BBQ Station', taxValue: 5, value: true },
  { name: 'Salad Station', taxValue: 5, value: false },
  { name: 'No Prints', taxValue: 5, value: false },
];
export const selectedCategories = [
  { value: 1, label: 'Sides' },
  { value: 2, label: 'NA Beverages' },
];
export const onPremdata: IVisibility = {
  isVisible: true,
  isDefault: false,
  channelVisibilityType: 'OnPrem',
  device: '',
  scheduling: [
    {
      id: null,
      day: 'Mon',
      allDay: false,
      startTime: '13:30',
      endTime: '14:31',
    },
    {
      id: null,
      day: 'Tue',
      allDay: true,
      startTime: '',
      endTime: '',
    },
    {
      id: null,
      day: 'Wed',
      allDay: true,
      startTime: '',
      endTime: '',
    },
    {
      id: null,
      day: 'Thu',
      allDay: false,
      startTime: '18:35',
      endTime: '22:33',
    },
  ],
};
export const offPremdata: IVisibility = {
  isVisible: true,
  isDefault: false,
  channelVisibilityType: 'OffPrem',
  device: '',
  scheduling: [
    {
      id: null,
      day: 'Mon',
      allDay: false,
      startTime: '13:30',
      endTime: '14:31',
    },
    {
      id: null,
      day: 'Tue',
      allDay: true,
      startTime: '',
      endTime: '',
    },
    {
      id: null,
      day: 'Wed',
      allDay: true,
      startTime: '',
      endTime: '',
    },
    {
      id: null,
      day: 'Thu',
      allDay: false,
      startTime: '18:35',
      endTime: '22:33',
    },
  ],
};

// const menuObj = {
//   menuName: '',
//   posDisplayName: '',
//   posButtonColor: '#fffff',
// };

export const customData: IVisibility[] = [
  {
    isVisible: true,
    isDefault: false,
    channelVisibilityType: 'Custom',
    device: 'Mpos',
    scheduling: [
      {
        id: null,
        day: 'Mon',
        allDay: false,
        startTime: '13:30',
        endTime: '14:31',
      },
      {
        id: null,
        day: 'Tue',
        allDay: true,
        startTime: '',
        endTime: '',
      },
      {
        id: null,
        day: 'Wed',
        allDay: true,
        startTime: '',
        endTime: '',
      },
      {
        id: null,
        day: 'Thu',
        allDay: false,
        startTime: '18:35',
        endTime: '22:33',
      },
    ],
  },
  {
    isVisible: true,
    isDefault: false,
    channelVisibilityType: 'Custom',
    device: 'Pos',
    scheduling: [
      {
        id: null,
        day: 'Mon',
        allDay: false,
        startTime: '13:30',
        endTime: '14:31',
      },
      {
        id: null,
        day: 'Tue',
        allDay: true,
        startTime: '',
        endTime: '',
      },
      {
        id: null,
        day: 'Wed',
        allDay: true,
        startTime: '',
        endTime: '',
      },
      {
        id: null,
        day: 'Thu',
        allDay: false,
        startTime: '18:35',
        endTime: '22:33',
      },
    ],
  },
];
