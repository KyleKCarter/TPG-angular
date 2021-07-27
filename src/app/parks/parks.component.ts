import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Services
import { ParkService } from '../service/park.service';
import { ResortService } from '../service/resort.service';

//Models
import { RideResponse } from '../models/rides.model';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {
  disneyWorld: boolean;
  universalStudiosOrlando: boolean;
  resort: any;
  parks = [];
  WDW = [];
  UO = [];
  rides: RideResponse;

  constructor(
    private route: ActivatedRoute,
    private _resortService: ResortService,
    private _parkService: ParkService
  ) { }

  ngOnInit(): void {
    this.setResort();
  }

  setResort(): void {
    // Function will set what display is shown
    this.route.paramMap
      .subscribe(params => {
        this.resort = params.get('park')
        console.log(this.resort)
      });
    if ( this.resort == 'Disney World') {
      this.disneyWorld = true;
      this.universalStudiosOrlando = false;
    } else if ( this.resort == 'Universal Studios Orlando') {
      this.disneyWorld = false;
      this.universalStudiosOrlando = true;
    }
    this.getResort();
  }

  getResort(): void {
    //service call to get resort from server
    //for now will use hardcoded data
    this._resortService.getResortParks().subscribe( resorts => {
      if ( resorts) {
        this.parks.push(resorts)
        // might have to do a normal for loop...possibly
        for (let i = 0; i < resorts.length; i++) {
          if ( resorts[i].resort === 'Walt Disney World') {
            console.log(resorts[i])
            return this.WDW.push(resorts[i])
          } else if ( resorts[i].resort === 'Universal Studios Orlando') {
            return this.UO.push(resorts[i])
          }
        }
        // for (const resort of resorts) {
        //   console.log(resort)
        //   if ( resort.resort === 'Walt Disney World') {
        //     return this.parks.unshift(resort)
        //   } else if ( resort.resort === 'Universal Studios Orlando') {
        //     return this.parks.unshift(resort)
        //   }
        // }
      }
    });
    console.log(this.WDW);
    console.log(this.UO)
  };

  getRides() {
    // function get's and set's the ride based off of the park
    // if(park === 'Magic Kingdom') {
      this._parkService.getMKRides().subscribe( response => {
        if (response) {
          console.log(response)
        }
      })
    // } else {
      // return null
    // }
  }

}
