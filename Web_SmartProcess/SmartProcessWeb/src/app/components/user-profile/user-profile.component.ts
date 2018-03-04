import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/core/auth/authservice';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: AuthService) {console.log('profile'); }

  ngOnInit() {
  }

}
