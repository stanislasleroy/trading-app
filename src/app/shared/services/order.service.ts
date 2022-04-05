import {Injectable} from '@angular/core';
import {Item, ItemSummary, Order} from '../../typings/item';
import {Observable, of} from 'rxjs';
import * as _ from 'lodash';
import {ORDERS} from './store';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  orders = [...ORDERS];

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
    console.log(this.orders[index]);
    this.orders[index].pending = false;
  }

  public getOrders(): Observable<Order[]> {
    //return of(this.orders.filter(o => o.pending == false));
    console.log(this.orders);
    return of(this.orders);
  }
}
