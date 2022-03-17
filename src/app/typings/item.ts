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
  BTU = 'British Thermal Unit'
}

export interface ItemInCart {
  name: string;
  description: string;
  unitPrice: number;
  currency: string;
  unit: Unit;
  category: Category;
  quantity: number
}
