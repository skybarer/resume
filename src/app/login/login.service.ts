import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hostname } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {


  LOGIN: string = hostname + '/login';
  ROLES: string = hostname + '/roles';
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('currentUser'));
  }


  login(data): Observable<any> {
    return this.http.post<any>(this.LOGIN, data);
  }
  roles(): Observable<any> {
    // let headers = new HttpHeaders();
    // headers = headers.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    return this.http.get<any>(this.ROLES);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.clear();
  }

  hasRole(input: string) {
    if (this.data.role == input) {
      return true;
    }
    return false;
  }

}
