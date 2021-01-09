import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  logoutshow = true;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (sessionStorage.getItem('current User')) {
      // logged in so return true
      console.log('login');
      this.logoutshow = false;
      return true;       
    }

     // not logged in so redirect to login page with the return url
     this.router.navigate([''], { queryParams: { returnUrl: state.url }});
     console.log('not login');
     return false;    
     }

  // }
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }
}
