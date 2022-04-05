import {Category, Item, Order, Unit} from '../../typings/item';

export const ITEMS: Item[] = [
  {
    name: 'Gold',
    description: 'Desc gold',
    category: Category.MINERALS,
    price: 1954,
    unit: Unit.OUNCE,
    updateDate: new Date()
  },
  {
    name: 'Silver',
    description: 'Desc silver',
    category: Category.MINERALS,
    price: 1954,
    unit: Unit.OUNCE,
    updateDate: new Date()
  },
  {
    name: 'Platinum',
    description: 'Desc platinum',
    category: Category.MINERALS,
    price: 1954,
    unit: Unit.OUNCE,
    updateDate: new Date()
  },
  {
    name: 'Copper',
    description: 'Desc copper',
    category: Category.MINERALS,
    price: 9877,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    name: 'Nickel',
    description: 'Desc nickel',
    category: Category.MINERALS,
    price: 42995,
    unit: Unit.OUNCE,
    updateDate: new Date()
  },
  {
    name: 'Wheat',
    description: 'Desc wheat',
    category: Category.RAW_MATERIAL,
    price: 380,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    name: 'Corn',
    description: 'Desc corn',
    category: Category.RAW_MATERIAL,
    price: 7.31,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    name: 'Coffee',
    description: 'Desc coffee',
    category: Category.RAW_MATERIAL,
    price: 7.31,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    name: 'Cotton',
    description: 'Desc cotton',
    category: Category.RAW_MATERIAL,
    price: 7.31,
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    name: 'Brent Oil',
    description: 'Brent Crude',
    category: Category.HYDROCARBONS,
    price: 105,
    unit: Unit.BARREL,
    updateDate: new Date()
  },
  {
    name: 'WTI oil',
    description: 'Where',
    category: Category.HYDROCARBONS,
    price: 4660,
    unit: Unit.BTU,
    updateDate: new Date()
  },
  {
    name: 'Natural gas',
    description: 'Where',
    category: Category.HYDROCARBONS,
    price: 4660,
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






