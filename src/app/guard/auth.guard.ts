import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, take} from 'rxjs';
import {AuthService} from "../auth-service/auth.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( public authService: AuthService, public router: Router )
  { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.userData$.pipe(
      take(1),
      map((user) => {
        if (user) { return true; }
        else {
          this.router.navigate(['/login']).then(r => r);
          return false;
        }
      }));
  }
}

export class AddDishGuard implements CanActivate {
  constructor( public authService: AuthService, public router: Router )
  { }
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable< true | any >
  {
    return this.authService.userData$.pipe(
      take(1),
      map(user => {
        if (user && this.authService.canAdd(user)){
          return true;
        } else {
          return this.router.navigate(['/dishes']).then(r => r);
        }
      }));
  }
}
export class LogInGuard implements CanActivate {
  constructor( public authService: AuthService, public router: Router )
  { }
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>
  {
    return this.authService.userData$.pipe(
      take(1),
      map(user => {
        return !!user;
      }));
  }
}
