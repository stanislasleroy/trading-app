import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items = new Map();

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  decrementItem($event: string) {
    this.cartService.decrementItem($event);
  }

  incrementItem($event: string) {
    this.cartService.incrementItem($event);
  }
}
