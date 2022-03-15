import {Category, Item, Unit} from '../../typings/item';

export const ITEMS: Item[] = [
  {
    name: 'Gold',
    description: 'Desc gold',
    category: Category.MINERALS,
    price: 1954,
    currency: '$',
    unit: Unit.OUNCE,
    updateDate: new Date()
  },
  {
    name: 'Copper',
    description: 'Desc copper',
    category: Category.MINERALS,
    price: 9877,
    currency: '$',
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    name: 'Nickel',
    description: 'Desc nickel',
    category: Category.MINERALS,
    price: 42995,
    currency: '$',
    unit: Unit.OUNCE,
    updateDate: new Date()
  },
  {
    name: 'Wheat',
    description: 'Desc wheat',
    category: Category.RAW_MATERIAL,
    price: 380,
    currency: '$',
    unit: Unit.TON,
    updateDate: new Date()
  },
  {
    name: 'Oil',
    description: 'Brent Crude',
    category: Category.HYDROCARBONS,
    price: 105,
    currency: '$',
    unit: Unit.BARREL,
    updateDate: new Date()
  },
  {
    name: 'Natural gas',
    description: 'Where',
    category: Category.HYDROCARBONS,
    price: 4660,
    currency: '$',
    unit: Unit.BTU,
    updateDate: new Date()
  }
]






