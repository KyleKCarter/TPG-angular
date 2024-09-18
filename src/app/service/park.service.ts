import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { RideResponse } from '../models/rides.model';

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  //hard coded url until I can figure out config.json
  //need to have images downloaded so app doesn't have to rely on internet images
  // private _mkUrl: string = './mock_api_server/parks/magic-kingdom.json'
  private _mkUrl: string = '/assets/data/mk.json';
  private _eUrl: string = '/assets/data/e.json';
  private _hsUrl: string = '/assets/data/hs.json';
  private _akUrl: string = '/assets/data/ak.json';
  private _usUrl: string = '/assets/data/us.json';
  private _ioaUrl: string = '/assets/data/ioa.json';
  attraction!: RideResponse;
  rides!: RideResponse;

  constructor(private http: HttpClient) { }

  getRides(park: string): Observable<RideResponse> {
    // return this.http.get('/disney/magicKingdom');
    if (park === "Magic Kingdom") {
      return this.http.get<RideResponse>(this._mkUrl);
    } else if ( park === "Epcot") {
      return this.http.get<RideResponse>(this._eUrl);
    } else if ( park === "Hollywood Studios") {
      return this.http.get<RideResponse>(this._hsUrl);
    } else if ( park === "Animal Kingdom") {
      return this.http.get<RideResponse>(this._akUrl);
    } else if ( park === "Universal Studios") {
      return this.http.get<RideResponse>(this._usUrl);
    } else if (park === "Islands of Adventure") {
      return this.http.get<RideResponse>(this._ioaUrl);
    }
  }
}
