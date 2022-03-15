import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import * as _ from 'lodash';
import {ITEMS} from './store';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() {
  }

  public getItems(): Observable<any> {

    let data = _.groupBy(ITEMS, 'category');

    console.log(data);

    return of(data);
  }
}
