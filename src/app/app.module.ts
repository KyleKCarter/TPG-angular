import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';


//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ResortsComponent } from './resorts/resorts.component';
import { ParksComponent } from './parks/parks.component';
import { RidesComponent } from './rides/rides.component';
import { NotfoundComponent } from './notfound/notfound.component';

//service
import { ResortService } from './service/resort.service';
import { ParkService } from './service/park.service';
import { AttractionComponent } from './attraction/attraction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ResortsComponent,
    ParksComponent,
    NotfoundComponent,
    RidesComponent,
    AttractionComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [
    ParkService,
    ResortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
