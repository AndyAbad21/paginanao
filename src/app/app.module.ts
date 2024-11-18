import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { routes } from './app.routes'; // Importa tus rutas aquí

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Aquí importamos RouterModule con tus rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
