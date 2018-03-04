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
  private defaultRoute = '/main';

  constructor(
    private _auth: AuthService,
    private _route: Router
  ) {
    const vm = this;
    if (vm._auth.user) {
      vm._route.navigateByUrl(vm.defaultRoute);
    }
  }

  public loginGoogle(): void {
    const vm = this;
    vm._auth.googleLogin()
      .then((success) => {
        vm._route.navigateByUrl(vm.defaultRoute);
      }).catch((err) => {
        vm.error = err;
      });
  }
}
