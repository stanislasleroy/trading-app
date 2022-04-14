import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './features/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'order/:id',
    loadChildren: () => import('./modules/order/order.module')
      .then(module => module.OrderModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./modules/orders/orders.module')
      .then(module => module.OrdersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
