import {Category, Item, Order, Unit} from '../../typings/item';

export const ITEMS: Item[] = [
  {
    name: 'Gold',
    category: Category.MINERALS,
    currentPrice: 1954,
    previousPrice: 0,
    unit: Unit.OUNCE,
    updateDate: new Date()
  },
  {
    name: 'Silver',
    category: Category.MINERALS,
    currentPrice: 1954,
    previousPrice: 0,
    unit: Unit.OUNCE,
    updateDate: new Date()
  },
  {
    name: 'Platinum',
    category: Category.MINERALS,
    currentPrice: 1954,
    previousPrice: 0,
    unit: Unit.OUNCE,
    updateDate: new Date()
  },
  {
    name: 'Copper',
    category: Category.MINERALS,
    currentPrice: 9877,
    previousPrice: 0,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    name: 'Wheat',
    category: Category.RAW_MATERIAL,
    currentPrice: 380,
    previousPrice: 0,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    name: 'Corn',
    category: Category.RAW_MATERIAL,
    currentPrice: 7.31,
    previousPrice: 0,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    name: 'Coffee',
    category: Category.RAW_MATERIAL,
    currentPrice: 7.31,
    previousPrice: 0,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    name: 'Cotton',
    category: Category.RAW_MATERIAL,
    currentPrice: 7.31,
    previousPrice: 0,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    name: 'Brent Oil',
    category: Category.HYDROCARBONS,
    currentPrice: 105,
    previousPrice: 0,
    unit: Unit.BARREL,
    updateDate: new Date()
  },
  {
    name: 'WTI oil',
    category: Category.HYDROCARBONS,
    currentPrice: 4660,
    previousPrice: 0,
    unit: Unit.BTU,
    updateDate: new Date()
  },
  {
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






