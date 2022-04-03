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
      totalPrice: 2715.11
    }
  ] as Order[];

  constructor() {
  }

  public createOrder(items: Map<string, Item[]>): string {

    let itemSummary: ItemSummary[] = [];

    items.forEach(
      value => {
        itemSummary.push({
          name: value[0].name,
          unitPrice: value[0].price,
          quantity: value.length,
          totalPrice: value[0].price * value.length,
          currency: value[0].currency
        } as ItemSummary);
      }
    );

    let order = {
      id: Date.now().toString(),
      date: new Date(),
      pending: true,
      items: itemSummary,
      itemNumber: 15,
      totalPrice: 345.54
    } as Order;

    this.orders.push(order);
    return order.id;
  }

  public getOrder(id: any): Observable<Order> {
    console.log(id);
    console.log('Orders %o', this.orders);
    let index = _.findIndex(this.orders, o => o.id == id);
    console.log(index);

    return of(this.orders[index]);
  }
}
