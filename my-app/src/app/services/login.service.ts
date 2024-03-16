import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Credentials } from '../interfaces/my-interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  router = inject(Router);
  //Importamos y desempaquetamos el HttpClient
  httpClient = inject(HttpClient);
  //Definimos la URL de la API
  API_URL: string = `http://3.143.229.22:8080/login`;

  //Creamos el servicio para ingresar Usuarios y le pasamamos una Interface(la de las credenciales del usuario)
  login(credentials: Credentials) {
    return this.httpClient.post(this.API_URL, credentials);
  }
  //creamos una funcion para verificar el token del usuario, necesita un token
  verifyToken(token: string) {
    return this.httpClient.get(`${this.API_URL}/${token}`);
  }

  isLogged() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
