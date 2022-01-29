import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getAllUsers():Observable<any>{
    return this._http.get(`${environment.commonApiUrl}/user/all`)
  }
  getSingleUser(id:any):Observable<any>{
    return this._http.get(`${environment.commonApiUrl}/user/all/${id}`)
  }
  uploadImage(data:any):Observable<any>{
    return this._http.post(`${environment.commonApiUrl}/user/myProfile`, data)
  }

}
