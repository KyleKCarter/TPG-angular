import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ResortsComponent } from './resorts/resorts.component';
import { ParksComponent } from './parks/parks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParkService } from './service/park.service';
import { RidesComponent } from './rides/rides.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ResortsComponent,
    ParksComponent,
    NotfoundComponent,
    RidesComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'resorts/:park',
        component: ParksComponent
      },
      {
        path: 'resorts',
        component: ResortsComponent
      },
      {
        path: '**',
        component: NotfoundComponent
      }
    ])
  ],
  providers: [ParkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
