import { Injectable } from '@angular/core';
import { hostname } from '../app.const';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MailTempleteService {

  EMAIL_CANDIDATES = hostname + '/email-candidates'

  constructor(
    private http: HttpClient
  ) { }

  emailCandidates(data: any): Observable<any> {
    return this.http.post<any>(this.EMAIL_CANDIDATES, data);
  }
}
