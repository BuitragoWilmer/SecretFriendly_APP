import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroupFamily, GroupFamilyCreate, GroupFamilyList } from '../interfaces/GroupFamily';

@Injectable({
  providedIn: 'root'
})
export class GroupFamilyService {
  private readonly _http = inject(HttpClient);
  private readonly apiUrl = 'http://192.168.100.12:5000/api/GroupsFamily';

  //constructor(private http: HttpClient) { }  

  getGroupFamiliList(): Observable<GroupFamilyList> {
    return this._http.get<GroupFamilyList>(`${this.apiUrl}`);
  }


  createGroupFamili(groupFamily: GroupFamilyCreate): Observable<GroupFamily> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this._http.post<GroupFamily>(this.apiUrl, groupFamily, { headers });
  }
}
