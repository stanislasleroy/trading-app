import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item-in-cart',
  templateUrl: './item-in-cart.component.html',
  styleUrls: ['./item-in-cart.component.scss']
})
export class ItemInCartComponent implements OnInit {

  @Input()
  item: any | undefined;

  @Output() decrementEvent = new EventEmitter<string>();
  @Output() incrementEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  increment(value: string) {
    this.incrementEvent.emit(value)
  }

  decrement(value: string) {
    this.decrementEvent.emit(value)
  }
}
