import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@@models';
import { AuthService } from '@@auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  login(user: User) {
    this.authService.login(user);
    this.router.navigateByUrl('/', {
      onSameUrlNavigation: 'reload',
      skipLocationChange: true,
    });
  }
}
