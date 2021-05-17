import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../services/authentification/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthentificationService, private router: Router) {}

  canActivate(): boolean {
    if(!this.auth.isAuthenticated()) {
     let choise = confirm('Нужно войти в систему, чтобы продолжить!');
      if(choise)
      {
        this.router.navigate(['login']);

      }
      else {
        this.router.navigate(['home']);
      }
      return false;
    }
    return true;
  }
  
}
