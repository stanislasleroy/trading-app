import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './features/home/cart/cart.component';
import { ItemComponent } from './features/home/item/item.component';
import { ItemListComponent } from './features/home/item-list/item-list.component';
import { ItemCategoryComponent } from './features/home/item-category/item-category.component';
import { HomeComponent } from './features/home/home.component';
import { ItemInCartComponent } from './features/home/cart/item-in-cart/item-in-cart.component';
import { NavbarComponent } from './features/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ItemComponent,
    ItemListComponent,
    ItemCategoryComponent,
    HomeComponent,
    ItemInCartComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
