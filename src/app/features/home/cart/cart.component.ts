import {Component, OnInit} from '@angular/core';
import {ItemInCart} from '../../../typings/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  itemsInCart = [
    {
      name: 'Wheat',
      quantity: 3,
      unitPrice: 123
    },
    {
      name: 'Corn',
      quantity: 10,
      unitPrice: 123
    },
    {
      name: 'Oil',
      quantity: 1,
      unitPrice: 123
    }
  ] as ItemInCart[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
