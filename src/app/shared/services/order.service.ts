import {Injectable} from '@angular/core';
import {Item, ItemSummary, Order, Unit} from '../../typings/item';
import {Observable, of} from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders = [
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
          currency: 'USD',
          unit: Unit.TON,
          totalPrice: 370.02
        },
        {
          name: 'Silver',
          unitPrice: 2345.09,
          quantity: 1,
          currency: 'USD',
          unit: Unit.TON,
          totalPrice: 2345.09
        }
      ],
      currency: 'USD',
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
          currency: 'USD',
          unit: Unit.BARREL,
          totalPrice: 440.02
        },
        {
          name: 'Silver',
          unitPrice: 2345.09,
          quantity: 1,
          currency: 'USD',
          unit: Unit.TON,
          totalPrice: 2345.09
        }
      ],
      currency: 'USD',
      totalPrice: 2715.11
    }
  ] as Order[];

  constructor() {
  }

  public createOrder(items: Map<string, Item[]>): string {

    let itemsSummary: ItemSummary[] = [];

    items.forEach(
      value => {
        itemsSummary.push({
          name: value[0].name,
          unitPrice: value[0].price,
          quantity: value.length,
          totalPrice: value[0].price * value.length,
          currency: value[0].currency,
          unit: value[0].unit,
        } as ItemSummary);
      }
    );

   let quantity = itemsSummary.map(i => i.quantity).reduce((prev, current) => prev + current);
   let totalPrice = itemsSummary.map(i => i.totalPrice).reduce((prev, current) => prev + current);

    let order = {
      id: Date.now().toString(),
      date: new Date(),
      pending: true,
      items: itemsSummary,
      itemNumber: quantity,
      totalPrice: totalPrice,
    } as Order;

    this.orders.push(order);
    return order.id;
  }

  public getOrder(id: string): Observable<Order> {
    let index = _.findIndex(this.orders, o => o.id == id);
    return of(this.orders[index]);
  }

  public addOrder(id: string): void {
    let index = _.findIndex(this.orders, o => o.id == id);
    console.log( this.orders[index]);
    this.orders[index].pending = false;
  }

  public getOrders(): Observable<Order[]> {
    //return of(this.orders.filter(o => o.pending == false));
    return of(this.orders);
  }
}
