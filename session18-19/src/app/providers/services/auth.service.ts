import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public flag = true
  public userData = null
  commonApiUrl = 'http://localhost:3000/api'
  constructor(private _http:HttpClient) { }

  login(data: any):Observable<any>{
    return this._http.post(`${this.commonApiUrl}/user/login`, data)
  }
  me():Observable<any>{
    return this._http.get(`${this.commonApiUrl}/user/me`)
  }
}
