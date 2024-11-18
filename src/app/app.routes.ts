import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ReviewsComponent } from './reviews/reviews.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'reviews', component: ReviewsComponent }, // Por ejemplo, agrega aquí otros componentes
  { path: 'contact', component: HomeComponent }, // Ajusta estas rutas según tu estructura
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];
