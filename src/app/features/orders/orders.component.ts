import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../shared/services/order.service';
import {EMPTY, Observable} from 'rxjs';
import {Order} from '../../typings/item';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders$: Observable<Order[]> = EMPTY;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orders$ = this.orderService.getOrders();
  }

}
