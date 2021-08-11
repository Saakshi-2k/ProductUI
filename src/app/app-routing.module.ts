import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components/category/filter/filter.component';
import { ProductsComponent } from './components/category/products/products.component';
import { SortComponent } from './components/category/sort/sort.component';

const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'',component:FilterComponent},
  {path:'',component:SortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
