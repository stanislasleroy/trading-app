import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../typings/item';
import {CartService} from '../../services/cart.service';

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
  }

  public addItem(item: Item): void {
    this.cartService.addItem(item);
  }
}
