import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ParkService } from '../service/park.service';

//Models
import { RideResponse } from '../models/rides.model';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {
  park: string = '';
  park_logo: string = '';
  rides?: RideResponse[];
  isFetching: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _parkService: ParkService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.setPark();
  }

  backClick(): void {
    this._location.back()
  }

  setPark(): void {
    // Function will set what display is shown
    this.route.paramMap
      .subscribe(params => {
        this.park = params.get('park') || ''
        console.log(this.park)
      });

    this.getRides();
  }

  getRides(): void {
    this.isFetching = true;
    console.log(this.park)
    this._parkService.getParkRides(this.park).subscribe((response: any) => {
      console.log(response)
      if (response) {
        this.rides = response;
        //Implement NGRX in the future for below
        // this.park_logo = response.park_logo;
        this.isFetching = false;
      }
    })
  }

}
