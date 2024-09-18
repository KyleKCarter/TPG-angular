import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

//Services
import { ParkService } from '../service/park.service';
import { ResortService } from '../service/resort.service';

//Models
import { RideResponse } from '../models/rides.model';
import { ParksResponse } from '../models/parks.model';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {
  disneyWorld!: boolean;
  universalStudiosOrlando!: boolean;
  resort: any;
  parks: any;
  WDW!: ParksResponse[];
  UO!: ParksResponse[];
  rides!: RideResponse;

  constructor(
    private route: ActivatedRoute,
    private _resortService: ResortService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.setResort();
  }

  backClick(): void {
    this._location.back()
  }

  setResort(): void {
    // Function will set what display is shown
    this.route.paramMap
      .subscribe(params => {
        this.resort = params.get('resort')
        console.log(this.resort)
      });
    if (this.resort == 'Disney World') {
      this.disneyWorld = true;
      this.universalStudiosOrlando = false;
    } else if (this.resort == 'Universal Studios Orlando') {
      this.disneyWorld = false;
      this.universalStudiosOrlando = true;
    }
    this.getResort();
  }

  getResort(): void {
    //service call to get resort from server
    //for now will use hardcoded data
    this._resortService.getResortParks().subscribe(resorts => {
      this.WDW = [];
      this.UO = [];
      if (resorts) {
        this.parks.push(resorts)
        for (const resort of resorts) {
          if (resort.resort === 'Walt Disney World') {
            this.WDW.push(resort)
          } else if (resort.resort === 'Universal Studios Orlando') {
            this.UO.push(resort)
          }
        }
      }
    });
  };
}
