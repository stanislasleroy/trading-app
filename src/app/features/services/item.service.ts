import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import * as _ from 'lodash';
import {ITEMS} from '../home/store';
import {Item} from '../../typings/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() {
  }

  public getItems(): Observable<any> {
    let data = _.groupBy(ITEMS, 'category');
    return of(data);
  }

  public getItem(name: string): Item | null {
    let index = _.findIndex(ITEMS, i => i.name === name);

    if (index !== -1) {
      return ITEMS[index];
    }
    return null;
  }
}
