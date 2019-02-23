import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hostname } from '../app.const';


@Injectable({
  providedIn: 'root'
})
export class DemandDetailsSearchService {


  GET_SKILL_DEMAND_DETAILS = hostname + '/getskillDemandDetails';
  GET_DEMAND_TRACKER_DETAILS = hostname + '/getDemandTrackerDetails ';
  GET_ALL_STREAM_DETAILS = hostname + '/getAllStreamDetails';
  GET_ALL_SUB_STREAM_DETAILS = hostname + '/getAllSubStreamDetails';
  SEARCH_DEMAND_TRACKER_DETAILS = hostname + '/searchDemandTrackerDetails';


  constructor(private http: HttpClient) { }


  getskillDemandDetails(): Observable<any> {
    return this.http.get<any>(this.GET_SKILL_DEMAND_DETAILS);
  }
  getDemandTrackerDetails(): Observable<any> {
    return this.http.get<any>(this.GET_DEMAND_TRACKER_DETAILS);
  }

  getAllStreamDetails(): Observable<any> {
    return this.http.get<any>(this.GET_ALL_STREAM_DETAILS);
  }
  getAllSubStreamDetails(data): Observable<any> {
    return this.http.get<any>(this.GET_ALL_SUB_STREAM_DETAILS + '/?streamName=' + data);
  }

  searchDemandTrackerDetails(data): Observable<any> {
    return this.http.get<any>(this.SEARCH_DEMAND_TRACKER_DETAILS + '/?skillName=' + data.skillName + '&streamName=' + data.streamName + '&subStreamName=' + data.subStreamName);
  }


}
