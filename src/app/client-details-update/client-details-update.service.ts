import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { hostname } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class ClientDetailsUpdateService {

  constructor(private http: HttpClient) { }

  GET_ALL_STREAM_DETAILS = hostname +'/getAllStreamDetails';
  GET_ALL_SUB_STREAM_DETAILS = hostname +'/getAllSubStreamDetails';
  UPDATE_CLIENT_PROCESS_DETAILS = hostname +'//updateClientProcessDetails ';

  // get all Stream Details
  getAllStreamDetails(): Observable<any> {
    return this.http.get<any>(this.GET_ALL_STREAM_DETAILS);
  }
  // get all Substream Stream Details
  getAllSubStreamDetails(data): Observable<any> {
    return this.http.get<any>(this.GET_ALL_SUB_STREAM_DETAILS + '?streamName=' + data);
  }
  // post all Stream Details
  updateClientProcessDetails(client): Observable<any> {
    console.log(client);
    return this.http.post<any>(this.UPDATE_CLIENT_PROCESS_DETAILS, client);
  }

}
