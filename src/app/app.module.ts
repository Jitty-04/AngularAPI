import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { UsPublicComponent } from './us-public/us-public.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    UsPublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
