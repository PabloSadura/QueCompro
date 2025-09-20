import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './auth/login/login';
import { SignupComponent } from './auth/signup/signup';
import { HistoryComponent } from './components/history/history';
import { AuthGuard } from '@angular/fire/auth-guard';

export const routes: Routes = [
{ path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];
