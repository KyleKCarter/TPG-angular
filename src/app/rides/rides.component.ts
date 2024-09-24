import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RideResponse } from '../models/rides.model';
import { ParkService } from '../service/park.service';


@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {
  park: string = '';
  rides!: RideResponse;

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
    // function get's and set's the ride based off of the park
    this._parkService.getRides(this.park).subscribe(response => {
      if (response) {
        this.rides = response
      }
    })
  }

}
