import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './modules/core/authGuard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
  { path: 'user-profile', component: UserProfileComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'login-email', component: EmailComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
