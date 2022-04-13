import {Category, Item, Order, Unit} from '../../typings/item';

export const ITEMS: Item[] = [
  {
    id: 1,
    name: 'Gold',
    category: Category.MINERALS,
    currentPrice: 1954,
    previousPrice: 0,
    unit: Unit.OUNCE,
    updateDate: new Date()
  },
  {
    id: 2,
    name: 'Silver',
    category: Category.MINERALS,
    currentPrice: 1954,
    previousPrice: 0,
    unit: Unit.OUNCE,
    updateDate: new Date()
  },
  {
    id: 3,
    name: 'Platinum',
    category: Category.MINERALS,
    currentPrice: 1954,
    previousPrice: 0,
    unit: Unit.OUNCE,
    updateDate: new Date()
  },
  {
    id: 4,
    name: 'Copper',
    category: Category.MINERALS,
    currentPrice: 9877,
    previousPrice: 0,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    id: 5,
    name: 'Wheat',
    category: Category.RAW_MATERIAL,
    currentPrice: 380,
    previousPrice: 0,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    id: 6,
    name: 'Corn',
    category: Category.RAW_MATERIAL,
    currentPrice: 7.31,
    previousPrice: 0,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    id: 7,
    name: 'Coffee',
    category: Category.RAW_MATERIAL,
    currentPrice: 7.31,
    previousPrice: 0,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    id: 8,
    name: 'Cotton',
    category: Category.RAW_MATERIAL,
    currentPrice: 7.31,
    previousPrice: 0,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    id: 9,
    name: 'Brent Oil',
    category: Category.HYDROCARBONS,
    currentPrice: 105,
    previousPrice: 0,
    unit: Unit.BARREL,
    updateDate: new Date()
  },
  {
    id: 10,
    name: 'WTI oil',
    category: Category.HYDROCARBONS,
    currentPrice: 4660,
    previousPrice: 0,
    unit: Unit.BTU,
    updateDate: new Date()
  },
  {
    id: 11,
    name: 'Natural gas',
    category: Category.HYDROCARBONS,
    currentPrice: 4660,
    previousPrice: 0,
    unit: Unit.BTU,
    updateDate: new Date()
  }
]

export const ORDERS = [
  {
    id: '222222222222',
    date: new Date(),
    pending: false,
    itemNumber: 12,
    items: [
      {
        name: 'Wheat',
        unitPrice: 123.34,
        quantity: 3,
        unit: Unit.TON,
        totalPrice: 370.02
      },
      {
        name: 'Silver',
        unitPrice: 2345.09,
        quantity: 1,
        unit: Unit.TON,
        totalPrice: 2345.09
      }
    ],
    totalPrice: 2715.11
  },
  {
    id: '333333333333',
    date: new Date(),
    pending: false,
    itemNumber: 4,
    items: [
      {
        name: 'Oil',
        unitPrice: 45.87,
        quantity: 3,
        unit: Unit.BARREL,
        totalPrice: 440.02
      },
      {
        name: 'Silver',
        unitPrice: 2345.09,
        quantity: 1,
        unit: Unit.TON,
        totalPrice: 2345.09
      }
    ],
    totalPrice: 2715.11
  }
] as Order[];






