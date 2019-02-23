import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { hostname } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class GetResumeService {

  //  IP_ADDRESS=hostname +'/';

  SEND_RESUME_DATA_TO_URL = hostname + '/insertCandidateDetails';
  MODIFY_CANDIDATE_DETAILS = hostname + '/modifyCandidateDetails';
  GET_ALL_CANDIDATE_DETAILS = hostname + '/allCandidateDetails';
  GET_CANDIDATE_DETAILS_BY_ID = hostname + '/getCandidateDetailsById';
  INSERT_CLIENT_PROCESS_DETAILS = hostname + '/insertClientProcessDetails';
  GET_SKILL_DEMAND_DETAILS = hostname + '/getskillDemandDetails';
  PRIMARY_SKILLS = hostname + '/primarySkills';
  SECONDARY_SKILLS = hostname + '/secondarySkills';
  INITIATE_HACKER_RANK = hostname + '/initiateHackerRank';
  PROFILE_DETAILS = hostname + '/profileDetails';
  SEND_EMAIL = hostname + '/sendEmail';


  constructor(private http: HttpClient) { }

  //insert single candidate details.

  insertCandidateDetails(candidate: any): Observable<any> {
    return this.http.post<any>(this.SEND_RESUME_DATA_TO_URL, candidate);
  }

  updateCandidateDetails(candidate: any): Observable<any> {
    return this.http.post<any>(this.MODIFY_CANDIDATE_DETAILS, candidate);
  }


  // get all candidate details
  allCandidateDetails(pagenumber): Observable<any> {
    return this.http.get<any>(this.GET_ALL_CANDIDATE_DETAILS + '?pagenum=' + pagenumber);
  }

  // get single candidate details by id
  getCandidateDetailsById(id: number): Observable<any> {
    return this.http.post<any>(this.GET_CANDIDATE_DETAILS_BY_ID, id);
  }

  //client insert candidate list
  insertClientProcessDetails(candidateArrayList): Observable<any> {
    return this.http.post<any>(this.INSERT_CLIENT_PROCESS_DETAILS, candidateArrayList);
  }

  getskillDemandDetails(): Observable<any> {
    return this.http.get<any>(this.GET_SKILL_DEMAND_DETAILS);

  }
  primarySkills(): Observable<any> {
    return this.http.get<any>(this.PRIMARY_SKILLS);
  }
  secondarySkills(data): Observable<any> {
    return this.http.get<any>(this.SECONDARY_SKILLS + '?skillName=' + data);
  }

  initiateHackerRank(data): Observable<any> {
    return this.http.post<any>(this.INITIATE_HACKER_RANK, data);
  }

  profileDetails(data): Observable<any> {
    return this.http.get<any>(this.PROFILE_DETAILS + '?id=' + data);
  }
  sendEmail(): Observable<any> {
    return this.http.get<any>(this.SEND_EMAIL);
  }


}
