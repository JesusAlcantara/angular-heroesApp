import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authServie: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.authServie.verificaAutenticacion()
          .pipe(
              tap( estaAutenticado => {
                  if( !estaAutenticado ) {
                      this.router.navigate(['.auth/login'])
                  }
              })
          )

      /*if( this.authServie.auth.id )  {
        return true;
      }
      return false;*/
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      return this.authServie.verificaAutenticacion()
          .pipe(
              tap( estaAutenticado => {
                  if( !estaAutenticado ) {
                      this.router.navigate(['.auth/login'])
                  }
              })
          )

      /*if( this.authServie.auth.id )  {
          return true;
      }
    return false;*/
  }
}
