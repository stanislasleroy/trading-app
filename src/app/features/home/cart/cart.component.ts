import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Router} from '@angular/router';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items = new Map();

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
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

  goToOrderDetails() {
  let id = this.orderService.createOrder(this.items);
    this.router.navigate(['order/' + id]);
  }
}
