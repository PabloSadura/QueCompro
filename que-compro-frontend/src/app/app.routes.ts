import { Routes } from '@angular/router';
import { AuthGuard } from '@angular/fire/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./auth/signup/signup').then(m => m.SignupComponent)
  },
  {
    path: 'history',
    loadComponent: () => import('./components/history/history').then(m => m.HistoryComponent),
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        loadComponent: () => import('./components/results/results').then(m => m.ResultsComponent)
      }
    ]
  },
  {
    path: 'product/:collectionId/:productId',
    loadComponent: () => import('./components/product/product-details').then(m => m.ProductDetailComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then(m => m.About)
  },
  {
    path: 'terms',
    loadComponent: () => import('./components/terms/terms').then(m => m.Terms)
  },
  {
    path: '**',
    redirectTo: ''
  },
];
