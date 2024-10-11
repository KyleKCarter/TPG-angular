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
  styleUrls: ['./parks.component.css'],
})
export class ParksComponent implements OnInit {
  disneyWorld?: boolean;
  universalStudiosOrlando?: boolean;
  resort: any;
  parks: any[] = [];
  WDW?: ParksResponse[];
  UO?: ParksResponse[];
  rides?: RideResponse;

  constructor(
    private route: ActivatedRoute,
    private _resortService: ResortService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.setResort();
    console.log('parks page hit');
  }

  backClick(): void {
    this._location.back();
  }

  setResort(): void {
    // Function will set what display is shown
    console.log('parks component page');
    this.route.paramMap.subscribe((params) => {
      this.resort = params.get('resort');
      console.log(this.resort);
    });
    if (this.resort == 'Walt Disney World') {
      this.disneyWorld = true;
      this.universalStudiosOrlando = false;
    } else if (this.resort == 'Universal Orlando Resort') {
      this.disneyWorld = false;
      this.universalStudiosOrlando = true;
    }
    this.getResort();
  }

  getResort(): void {
    this._resortService.getResortParks(this.resort).subscribe((resorts: any) => {
      this.WDW = [];
      this.UO = [];
      if (resorts) {
        this.parks.push(resorts);
        for (const resort of resorts) {
          if (resort.resort === 'Walt Disney World') {
            this.WDW.push(resort);
          } else if (resort.resort === 'Universal Orlando Resort') {
            this.UO.push(resort);
          }
        }
      }
    });
  }
}
