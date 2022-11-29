import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { UsPublicComponent } from './us-public/us-public.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductComponent } from './product/product.component';
import { UserDataComponent } from './user-data/user-data.component';
import { TodoComponent } from './todo/todo.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

const myRouter:Routes=[
  {
    path:"",
    component:PassengerComponent
  },
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"quotes",
    component:QuotesComponent
  },
  {
    path:"todo",
    component:TodoComponent

  },
  {
    path:"uspublic",
    component:UsPublicComponent

  },
  {
    path:"userdata",
    component:UserDataComponent

  },
  {
    path:"userinfo",
    component:UserInfoComponent

  }
]


@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    UsPublicComponent,
    UserInfoComponent,
    ProductComponent,
    UserDataComponent,
    TodoComponent,
    QuotesComponent,
    NavComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
