import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { hostname } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class BatchUploadService {

  UPLOAD_BATCH_PROFILE = hostname + '/uploadBatchProfile';

  constructor(private http: HttpClient) {

  }

  uploadBatchProfile(candidate): Observable<any> {
    return this.http.post<any>(this.UPLOAD_BATCH_PROFILE, candidate);
  }
}
