import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/shared/services/authentification/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isClicked = false;
  isBurgerClicked = false;
  constructor(private authService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
  }

  clickBurger() {
    this.isBurgerClicked = !this.isBurgerClicked;
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }

  goToPage(page: string) {
    this.router.navigate(['','carwashes', page]);
  }
}
