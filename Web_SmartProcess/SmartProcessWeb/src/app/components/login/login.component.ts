import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: any;
    constructor() {

    //   this.af.auth.subscribe(auth => {
    //   if (auth) {
    //     this.router.navigateByUrl('/members');
    //   }
    // });
  }
}
