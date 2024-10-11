import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { RideResponse } from '../models/rides.model.js';

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  //hard coded url until I can figure out config.json
  //need to have images downloaded so app doesn't have to rely on internet images
  // private _mkUrl: string = './mock_api_server/parks/magic-kingdom.json'

  attraction?: RideResponse[];
  rides?: RideResponse[];

  constructor(private http: HttpClient) { }

  getParkRides(park: string): Observable<any> {
    return this.http.get<RideResponse[]>(`http://localhost:32819/${park}/park_rides`)
      .pipe(map((data: any) => {
        if (data) {
          return data
        }
      }))
  }

  getAttraction(park_name: string, ride_name: string): Observable<any> {
    return this.http.get<RideResponse[]>(`http://localhost:32819/${park_name}/park_rides/${ride_name}`)
      .pipe(map((data: any) => {
        if(data) {
          return data
        }
      }))
  }
}
