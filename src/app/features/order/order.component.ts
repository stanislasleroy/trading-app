import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {Order} from '../../typings/item';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order$: Observable<Order> = EMPTY;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.order$ = this.activeRoute.params.pipe(
      map(params => params['id']),
      switchMap(id => this.orderService.getOrder(id)),
      tap(console.log)
    );
  }

  submitOrder() {
    //let id = this.orderService.createOrder();
    this.router.navigate(['orders']);
  }
}
