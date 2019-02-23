import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hostname } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class DmuDetailsAddService {

  GET_SKILL_DEMAND_DETAILS = hostname +'/getskillDemandDetails';
  ADD_DEMAND_DETAILS = hostname +'/addDemandDetails';

  constructor(private http: HttpClient) { }

  getskillDemandDetails(): Observable<any> {
    return this.http.get<any>(this.GET_SKILL_DEMAND_DETAILS);
  }

  addDemandDetails(data): Observable<any> {
    return this.http.post<any>(this.ADD_DEMAND_DETAILS, data);
  }
}
