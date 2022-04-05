import {Injectable} from '@angular/core';
import {Item} from '../../typings/item';
import {ItemService} from './item.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemsInCart = new Map();

  constructor(private itemService: ItemService) {
  }

  public addItem(item: Item): void {
    if (!this.itemsInCart.get(item.name)) {
      this.itemsInCart.set(item.name, new Array());
    }
    this.itemsInCart.get(item.name).push(item);
  }

  public getItems(): any {
    return this.itemsInCart;
  }

  decrementItem(name: string) {
    this.itemsInCart.get(name).pop();
    if (this.itemsInCart.get(name).length == 0) {
      this.itemsInCart.delete(name);
    }
  }

  incrementItem(name: string) {
    let item = this.itemService.getItem(name);
    if (item) {
      this.itemsInCart.get(name).push(item);
    }
  }
}
