import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private API_URL = 'http://100.115.249.2:8862/api/password';

  constructor(private http: HttpClient) {}


  resetPassword(token: string, newPassword: string): Observable<any> {
    const params = { token, newPassword };
    return this.http.post(`${this.API_URL}/reset`, null, { params, responseType: 'text' });
  }
}
