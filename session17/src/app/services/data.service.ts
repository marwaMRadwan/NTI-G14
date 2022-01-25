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
  readNewsApi():Observable<any>{
    return this._http.get("https://newsapi.org/v2/everything?q=tesla&from=2021-12-25&sortBy=publishedAt&apiKey=702e9ad75b684b2ba13de7a0b5cf6ba3")
  }
  addUser(userData:any): Observable<any>{
    return this._http.post("http://localhost:3000/user/register", userData)
  }
}
