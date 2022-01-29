import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!localStorage.getItem("proToken")){
        alert('not allowed')
this._route.navigateByUrl("/login?msg='please login first'")
        return false
      }
    return true;
  }

}
// 0=>10  11=>20 21=>31     10    0
//.g=find().skip(skipCount = (count*pageNumber)).get(count)
