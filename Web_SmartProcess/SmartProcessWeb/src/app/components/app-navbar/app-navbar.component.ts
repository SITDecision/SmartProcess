import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/core/auth/authservice';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor(
    private _auth: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this._auth.signOut();
  }
}
