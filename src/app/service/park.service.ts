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

  getRides(park: string): Observable<any> {
    return this.http.get<RideResponse[]>(`/${park}/park_rides`)
      .pipe(map((data: any) => {
        console.log("park rides data: ", data)
        if (data) {
          this.rides?.push(data)
        }
      }))
  }
}
