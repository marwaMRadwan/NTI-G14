import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private _http:HttpClient) { }

  readApi():Observable<any>{
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
