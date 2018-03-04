import { NgModule } from '@angular/core';

import { AuthService } from './auth/authservice';
import { AuthGuard } from './authGuard/auth.guard';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService, AuthGuard],
  declarations: []
})
export class CoreModule { constructor() { console.log('core'); } }
