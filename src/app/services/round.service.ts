import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RoundCreate, RoundListResponse } from '../interfaces/Round';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  private readonly _http = inject(HttpClient);
  private readonly apiUrl = 'http://192.168.100.12:5000/api/Rounds';
  
  createRound(round: RoundCreate): Observable<number> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this._http.post<number>(this.apiUrl, round, { headers });
  }

  getRoundList(): Observable<RoundListResponse[]> {
    return this._http.get<RoundListResponse[]>(`${this.apiUrl}`);
  }
}
