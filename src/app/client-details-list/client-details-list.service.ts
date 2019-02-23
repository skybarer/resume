import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hostname } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class ClientDetailsListService {


  ALL_CLIENT_PROCESS_DETAILS  = hostname +'/allClientProcessDetails';
  SEARCH_CLIENT_PROCESS_DETAILS   = hostname +'/searchClientProcessDetails ';

  constructor(private http:HttpClient) { 

  }

  

  // get all client details
  allClientProcessDetails (pageNumber:number):Observable<any>{
    return this.http.get<any>(this.ALL_CLIENT_PROCESS_DETAILS+'?pagenum='+pageNumber);
  }
  // searchh all client details
  searchClientProcessDetails (search):Observable<any>{
    return this.http.post<any>(this.SEARCH_CLIENT_PROCESS_DETAILS,search);
  }

}
