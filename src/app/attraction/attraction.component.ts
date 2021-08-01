import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParksResponse } from '../models/parks.model';
import { RideResponse } from '../models/rides.model';
import { ParkService } from '../service/park.service';


@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.css']
})
export class AttractionComponent implements OnInit {

  attraction: string;
  park: string;
  // rides: RideResponse;
  rides: any;
  ride: any;

  constructor(
    private route: ActivatedRoute,
    private _parkService: ParkService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.attraction = params.get('attraction')
        this.park = params.get('park')
        console.log(this.attraction)
      });
      this.getAttraction();
  }

  getAttraction(): void {
    // function get's the ride based off attraction selected
    this._parkService.getRides(this.park).subscribe(response => {
      if (response) {
        this.rides = response
      }
      console.log(this.rides)
      for (let i = 0; i <= this.rides.length; i++) {
        if (this.rides[i].name === this.attraction) {
          this.ride = this.rides[i]
        }
      }
    })
  }

}