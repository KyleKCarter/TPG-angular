import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ResortsComponent } from './resorts/resorts.component';
import { ParksComponent } from './parks/parks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParkService } from './service/park.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ResortsComponent,
    ParksComponent,
    NotfoundComponent

  ],
  imports: [
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
