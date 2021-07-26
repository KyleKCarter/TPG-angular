import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { RideResponse } from '../models/rides.model';

@Injectable({
  providedIn: 'root'
})
export class ParkService {
  constructor(private http: HttpClient) { }

  getMKRides(): Observable<any> {
    return this.http.get('/disney/magicKingdom');
  }
}
