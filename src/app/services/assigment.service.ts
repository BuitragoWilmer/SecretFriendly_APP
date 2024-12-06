import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { secretUserAssigmentRequest, secretUserAssigmentResponse } from '../interfaces/Assigment';

@Injectable({
  providedIn: 'root'
})
export class AssigmentService {

  private readonly _http = inject(HttpClient);
  private readonly apiUrl = 'http://192.168.100.12:5000/api/Assigment';

  GetFriendlySecret(user: secretUserAssigmentRequest): Observable<secretUserAssigmentResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this._http.post<secretUserAssigmentResponse>(this.apiUrl, user, { headers });
  }
}
