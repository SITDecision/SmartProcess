import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/core/auth/authservice';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  userName: string;

  constructor(
    public _auth: AuthService
  ) {
    const vm = this;
    vm._auth.user.subscribe(user => {
      vm.userName = user.displayName;
    });
  }

  ngOnInit() {
  }

  logout() {
    this._auth.signOut();
  }
}
