import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hostname } from '../app.const';


@Injectable({
  providedIn: 'root'
})
export class SowPessSearchService {

  ALL_CLIENT_SELECTED_DETAILS = hostname + '/allClientSelectedDetails';
  INSERT_SELECTED_CANDIDATE_DETAILS = hostname+ '/insertSelectedCandidateDetails';

  constructor(private http: HttpClient) { }

  allClientSelectedDetails(): Observable<any> {
    return this.http.get<any>(this.ALL_CLIENT_SELECTED_DETAILS);
  }
  insertSelectedCandidateDetails(details): Observable<any> {
    return this.http.post<any>(this.INSERT_SELECTED_CANDIDATE_DETAILS, details);
  }
}
