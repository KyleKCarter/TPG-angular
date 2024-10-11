import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

//models
import { ParksResponse } from '../models/parks.model';
import { RideResponse } from '../models/rides.model';

//service
import { ParkService } from '../service/park.service';


@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.css']
})
export class AttractionComponent implements OnInit {

  attraction!: string;
  park!: string;
  rides?: any;
  ride: any;

  constructor(
    private route: ActivatedRoute,
    private _parkService: ParkService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.attraction = params.get('attraction') || ''
        this.park = params.get('park') || ''
        console.log(this.attraction)
      });
      this.getAttraction();
  }

  getAttraction(): void {
    // function get's the ride based off attraction selected
    this._parkService.getAttraction(this.park, this.attraction).subscribe(response => {
      if (response) {
        this.rides = response
        for (let i = 0; i <= this.rides.length; i++) {
          if (this.rides[i].ride_name === this.attraction) {
            this.ride = this.rides[i]
          }
        }
      }
    })
  }

  backClick(): void {
    this._location.back()
  }

}