import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiftCreate, GiftbyUserResponse } from '../interfaces/Gift';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  private readonly _http = inject(HttpClient);
  private readonly apiUrl = 'http://192.168.100.12:5000/api/Gifts';


  createGift(gift: GiftCreate): Observable<number> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this._http.post<number>(this.apiUrl, gift, { headers });
  }
  
  getGiftbyUser(id: number): Observable<GiftbyUserResponse>{
    const url = `${this.apiUrl}/User/${id}`; 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this._http.get<GiftbyUserResponse>(url, { headers })
  }
}
