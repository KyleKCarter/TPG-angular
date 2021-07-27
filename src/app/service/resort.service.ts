import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ParksResponse } from '../models/parks.model';

@Injectable({
  providedIn: 'root'
})

export class ResortService {

  //hard coded url until I can figure out config.json
  private _resortUrl: string = '/assets/data/parks.json';

  constructor(private http: HttpClient) { }

  getResortParks(): Observable<ParksResponse[]> {
    return this.http.get<ParksResponse[]>(this._resortUrl);
  }

}