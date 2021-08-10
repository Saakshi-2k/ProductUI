import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { SearchComponent } from './components/common/search/search.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { FilterComponent } from './components/category/filter/filter.component';
import { ProductsComponent } from './components/category/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { SortComponent } from './components/category/sort/sort.component';
import { ItemsComponent } from './components/category/products/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    FilterComponent,
    ProductsComponent,
    CategoryComponent,
    SortComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
