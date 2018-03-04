import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../../modules/core/auth/authservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: any;

  constructor(
    private auth: AuthService,
    private _route: Router
  ) { }

  public loginGoogle(): void {
    this.auth.googleLogin();
    if (this.auth.user) {
      this._route.navigateByUrl('/main');
    }
  }
}
