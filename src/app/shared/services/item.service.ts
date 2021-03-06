import {Injectable} from '@angular/core';
import {from, Observable, timer} from 'rxjs';
import * as _ from 'lodash';
import {ITEMS} from './store';
import {Item} from '../../typings/item';
import {groupBy, map, mergeMap, reduce, switchMap, tap, toArray} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() {
  }

  public getItems(): Observable<any[]> {

    let r = 0;

    return timer(0, 300)
      .pipe(
        tap(() => r = _.random(0, ITEMS.length)),
        switchMap(() => from(ITEMS).pipe(
            map((item: Item, index: number) => {
              item.previousPrice = item.currentPrice;
              if (index === r) {
                item.currentPrice = this.getCurrentMarketPrice(item.currentPrice);
              }
              return item
            }),
            groupBy(item => item.category),
            mergeMap(category => category.pipe(
                reduce((acc, item) => {
                    acc.values.push(item);
                    return acc;
                  },
                  {key: category.key, values: new Array()})
              ),
            ),
            toArray(),
          )
        ));
  }

  public getItem(name: string): Item | null {
    let index = _.findIndex(ITEMS, i => i.name === name);

    if (index !== -1) {
      return ITEMS[index];
    }
    return null;
  }

  private getCurrentMarketPrice(currentPrice: number): number {
    let newPrice: number;
    if (Math.random() >= 0.5) {
      newPrice = currentPrice * (1 + 1 * 10 / 100);
    } else {
      newPrice = currentPrice * (1 - 1 * 10 / 100);
    }
    return newPrice;
  }
}
