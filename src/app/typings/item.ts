export interface Item {
  name: string;
  description: string;
  price: number;
  currency: string;
  unit: Unit;
  category: Category;
  updateDate: Date;
}

export enum Category {
  MINERALS = 'Minerals',
  STOCKS = 'Stocks',
  HYDROCARBONS = 'Hydrocarbons',
  RAW_MATERIAL = 'Raw material'
}

export enum Unit {
  OUNCE = 'ounce',
  KG = 'kg',
  TON = 'ton',
  L = 'liter',
  M3 = 'm3',
  BARREL = 'barrel',
  BTU = 'BTU'
}

export interface ItemSummary {
  name: string;
  description: string;
  unitPrice: number;
  quantity: number
  totalPrice: number
  currency: string;
  unit: Unit;
  category: Category;
}

export interface Order {
  id: string,
  date: Date,
  pending: boolean,
  items: ItemSummary[],
  itemNumber: number,
  totalPrice: number
}
