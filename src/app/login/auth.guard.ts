import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('currentUser')) {

      // if (JSON.parse(localStorage.getItem('currentUser')).roleVo.id == '1') {
        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/admin-home'], { queryParams: { returnUrl: state.url } });

      // } else if (JSON.parse(localStorage.getItem('currentUser')).roleVo.id == '2') {
        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/customer-home'], { queryParams: { returnUrl: state.url } });

      // }

      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
