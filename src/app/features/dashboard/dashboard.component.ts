import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@@auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public isSidenavOpen = false;

  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/', {
      onSameUrlNavigation: 'reload',
      skipLocationChange: true,
    });
  }
}
