import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { UsPublicComponent } from './us-public/us-public.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductComponent } from './product/product.component';
import { UserDataComponent } from './user-data/user-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    UsPublicComponent,
    UserInfoComponent,
    ProductComponent,
    UserDataComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
