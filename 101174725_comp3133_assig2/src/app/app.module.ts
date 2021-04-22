import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HotelsComponent } from './hotels/hotels.component';
import {  BookingComponent} from './booking/booking.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
  { path: 'hotels', component: HotelsComponent},
  {path: 'bookings', component: BookingComponent}


];@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    BookingComponent,
    UsersComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
