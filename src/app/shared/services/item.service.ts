import {Injectable} from '@angular/core';
import {from, Observable, of, timer} from 'rxjs';
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

  public getItems4(): Observable<any[]> {

    return timer(0, 2000)
      .pipe(
        switchMap(() => from(ITEMS).pipe(
            map(i => {
              i.previousPrice = i.currentPrice;
              i.currentPrice = this.getCurrentMarketPrice(i.currentPrice);
              return i
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

  public getItems(): Observable<any> {

    timer(0, 1000)
      .pipe(
        switchMap(() => from(ITEMS)),
        map(i => {
          i.currentPrice = this.getCurrentMarketPrice(i.currentPrice);
          return i
        }),
        tap(console.log)
      ).subscribe();


    let data = _.groupBy(ITEMS, 'category');
    return of(data).pipe(tap(console.log));
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
