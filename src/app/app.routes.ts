import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Ruta para Home
  { path: 'auth', component: AuthComponent }, // Ruta para Auth
  { path: '', pathMatch: 'full', redirectTo: 'home' }, // Redirección para la raíz
  { path: '**', redirectTo: 'home' } // Redirección para rutas no coincidentes
];
