import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { ParksResponse } from '../models/parks.model';

@Injectable({
  providedIn: 'root'
})

export class ResortService {

  //hard coded url until I can figure out config.json
  private _resortUrl: string = '/assets/data/parks.json';
  // parks?: ParksResponse[]

  constructor(private http: HttpClient) { }

  getResortParks(resort: any): Observable<any> {
    console.log("resort in resort service: ", resort)
   return this.http.get<ParksResponse[]>(`http://localhost:32819/${resort}`)
    .pipe(map((data) => {
        return data
    }))
  }

}