import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddretailerComponent } from './admin/addretailer/addretailer.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ShowretailersComponent } from './admin/showretailers/showretailers.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  //category filtration paths
  { path: 'showItem', component: CategoryComponent },
  //admin profile paths
  { path: 'adminProfile', component: ProfileComponent },
  { path: 'addRetailers', component:AddretailerComponent },
  { path: 'showRetailers', component:ShowretailersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
