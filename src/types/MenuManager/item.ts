export interface Item {
  id?: number | null;
  itemName: string;
  posDisplayName: string;
  kdsName: string;
  itemDiscription?: string;
  posImage: string;
  onlineImage: string;
  kioskImage: string;
  thirdPartImage: string;
  itemPrice: number;
  totalPrice: number;
  taxLinkedWithParentSettings: boolean;
  calculatePriceWithTaxInclude: boolean;
  takeOutException: boolean;
  stockStatus: number;
  stockValue: string;
  orderQuantityLimit: boolean;
  minLimit?: number;
  maxLimit?: number;
  noMaxLimit: boolean;
  calories: number;
  inheritModifierFromCategory: boolean;
  preprationTime: string;
}

export interface Tax {
  name: string;
  percentage: number;
}

export interface Modifier {
  modifierName: string;
  isStockAvailable: boolean;
}

export interface CreateItemRequest {
  item: Item;
  tax: Tax;
  modifier: Modifier;
}

export interface Items {
  id?: number | null;
  itemName: string;
  category: string[];
  startTime?: string | '';
  endTime?: string | '';
}
