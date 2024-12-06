import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserCreateResponse} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = 'http://192.168.100.12:5000/api/Users';

  constructor(private http: HttpClient) { }  

  getUser(id: number): Observable<User>{
    const url = `${this.apiUrl}/${id}`; 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<User>(url, { headers })
  }

  createUser(user: User): Observable<UserCreateResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<UserCreateResponse>(this.apiUrl, user, { headers });
  }

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
