import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { hostname } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class SowPessUpdateService {

  // ALL_CLIENT_SELECTED_DETAILS = hostname +'/allClientSelectedDetails';
  GET_CANDIDATE_SOW_PES_DETAILS = hostname +'/getCandidateSowPesDetails';
  UPDATE_CANDIDATE_SOW_PES_DETAILS = hostname +'/updateCandidateSowPesDetails';

  constructor(private http: HttpClient) { }

  // allClientSelectedDetails(): Observable<any> {
  //   return this.http.get<any>(this.ALL_CLIENT_SELECTED_DETAILS);
  // }
  getCandidateSowPesDetails(): Observable<any> {
    return this.http.get<any>(this.GET_CANDIDATE_SOW_PES_DETAILS);
  }
  updateCandidateSowPesDetails(data): Observable<any> {
    return this.http.post<any>(this.UPDATE_CANDIDATE_SOW_PES_DETAILS, data);
  }
}
