import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketComponent } from './features/home/basket/basket.component';
import { ItemComponent } from './features/home/item/item.component';
import { ItemListComponent } from './features/home/item-list/item-list.component';
import { ItemCategoryComponent } from './features/home/item-category/item-category.component';
import { HomeComponent } from './features/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    ItemComponent,
    ItemListComponent,
    ItemCategoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
