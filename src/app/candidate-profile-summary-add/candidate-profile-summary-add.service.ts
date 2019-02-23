import { Injectable } from '@angular/core';
import { hostname } from '../app.const';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateProfileSummaryAddService {

  INSERT_PROFILE_SUMMARY_DETAILS = hostname + '/insertProfileSummaryDetails';
  PROFILE_DETAILS = hostname + '/profileDetails';

  constructor(private http: HttpClient) { }


  insertProfileSummaryDetails(candidate: any): Observable<any> {
    return this.http.post<any>(this.INSERT_PROFILE_SUMMARY_DETAILS, candidate);
  }
  profileDetails(id: any): Observable<any> {
    return this.http.get<any>(this.PROFILE_DETAILS+ '?id='+ id);
  }


}
