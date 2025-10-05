import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './auth/login/login';
import { SignupComponent } from './auth/signup/signup';
import { HistoryComponent } from './components/history/history';
import { AuthGuard } from '@angular/fire/auth-guard';
import { ProductDetailComponent } from './components/product/product-details';
import { ResultsComponent } from './components/results/results';
import { About } from './components/about/about';
import { Terms } from './components/terms/terms';

export const routes: Routes = [
{ path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard], 
    children:[
        {
            path:':id', component: ResultsComponent
        }
    ] 
  },
  { path: 'product/:collectionId/:productId', component: ProductDetailComponent},
  {path: 'about', component: About},
  {path:'terms', component: Terms},
  { path: '**', redirectTo: '' },
];
