//reservation/new

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  newReservation(): Observable<any> {
    return this.http.get('/api/data');
  }

}
