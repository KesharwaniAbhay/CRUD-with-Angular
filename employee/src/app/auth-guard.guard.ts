// import { inject } from '@angular/core';
// // import { CanActivateFn, Router } from '@angular/router';
// import { Router } from '@angular/router';

// export const authGuard: CanActivate() => {

//   let isLoggedIn = localStorage.getItem('userRef');
//   console.log('userref value', isLoggedIn)
//   if (isLoggedIn == null) {
//     router.navigate(['/login']);
//     return false;
//   }
//   else {
//     router.navigate(['/dashboard'])
//     return true;
//   }
// }

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    // debugger
    var isLoggedIn = localStorage.getItem('userRef');
    if (isLoggedIn && isLoggedIn != null) {
      console.log("auth logged in", isLoggedIn);

      return true;
    } else {
      console.log("auth not logged in", isLoggedIn);
      this.router.navigate(['/login']);
      return false;
    }
  }
}
