import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { RideResponse } from '../models/rides.model';

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  //hard coded url until I can figure out config.json
  // private _mkUrl: string = './mock_api_server/parks/magic-kingdom.json'
  private _mkUrl: string = '/assets/data/mk.json';

  constructor(private http: HttpClient) { }

  getMKRides(): Observable<RideResponse> {
    // return this.http.get('/disney/magicKingdom');
    return this.http.get<RideResponse>(this._mkUrl);
  }
}
