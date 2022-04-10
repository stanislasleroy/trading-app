import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../../typings/item';
import {CartService} from '../../../../shared/services/cart.service';
import fr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  item!: Item;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    registerLocaleData(fr);
  }

  public addItem(item: Item): void {
    this.cartService.addItem(item);
  }
}
