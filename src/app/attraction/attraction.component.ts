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
  rides: any;
  ride = [];

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
      this.getRide();
      this.getAttraction();
  }

  getRide(): void {
    // function get's the ride based off attraction selected
    this._parkService.getRides(this.park).subscribe(response => {
      if (response) {
        this.rides = response
      }
      console.log(this.rides)
    })
  }

  getAttraction(): void {
    let name = this.attraction;
    this.ride = this.rides.filter(name);
    console.log(this.ride)
  }

}
