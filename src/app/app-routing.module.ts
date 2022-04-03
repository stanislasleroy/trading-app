import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {OrderComponent} from './features/order/order.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'order/:id', component: OrderComponent},
  {path: 'orders', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
