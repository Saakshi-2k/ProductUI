import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './admin/profile/profile.component';
import { AddretailerComponent } from './admin/addretailer/addretailer.component';
import { ShowretailersComponent } from './admin/showretailers/showretailers.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProfileComponent,
    AddretailerComponent,
    ShowretailersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
