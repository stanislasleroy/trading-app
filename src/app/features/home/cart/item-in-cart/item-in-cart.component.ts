import {Component, Input, OnInit} from '@angular/core';
import {ItemInCart} from '../../../../typings/item';

@Component({
  selector: 'app-item-in-cart',
  templateUrl: './item-in-cart.component.html',
  styleUrls: ['./item-in-cart.component.scss']
})
export class ItemInCartComponent implements OnInit {

  @Input()
  item: ItemInCart | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
