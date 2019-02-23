import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hostname } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class UploadCandidateProfileService {

  GET_CANDIDATE_DETAILS_BY_ID = hostname + '/uploadProfile';

  constructor(private http: HttpClient) {

  }

  uploadUserProfile(candidate): Observable<any> {
    return this.http.post<any>(this.GET_CANDIDATE_DETAILS_BY_ID, candidate);
  }
}
