import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './features/home/cart/cart.component';
import { ItemComponent } from './features/home/item-list/item/item.component';
import { ItemListComponent } from './features/home/item-list/item-list.component';
import { ItemCategoryComponent } from './features/home/item-list/item-category/item-category.component';
import { HomeComponent } from './features/home/home.component';
import { ItemInCartComponent } from './features/home/cart/item-in-cart/item-in-cart.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { OrderComponent } from './features/order/order.component';
import { OrdersComponent } from './features/orders/orders.component';
import { AppPriceEvolutionDirective } from './shared/directives/app-price-evolution.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ItemComponent,
    ItemListComponent,
    ItemCategoryComponent,
    HomeComponent,
    ItemInCartComponent,
    NavbarComponent,
    OrderComponent,
    OrdersComponent,
    AppPriceEvolutionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
