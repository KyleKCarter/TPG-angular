import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module.js'
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';


//components
import { AppComponent } from './app.component.js';
import { HomeComponent } from './home/home.component.js';
import { NavComponent } from './nav/nav.component.js';
import { ResortsComponent } from './resorts/resorts.component.js';
import { ParksComponent } from './parks/parks.component.js';
import { RidesComponent } from './rides/rides.component.js';
import { ScheduleComponent } from './schedule/schedule.component.js';
import { NotfoundComponent } from './notfound/notfound.component.js';

//service
import { ResortService } from './service/resort.service.js';
import { ParkService } from './service/park.service.js';
import { AttractionComponent } from './attraction/attraction.component.js';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ResortsComponent,
    ParksComponent,
    NotfoundComponent,
    RidesComponent,
    AttractionComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    CommonModule
  ],
  providers: [
    ParkService,
    ResortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
