import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { JwtHelperService } from '@auth0/angular-jwt';
const jwtHelperService = new JwtHelperService();

import { LoginService } from '../../services/login.service';
import { Credentials } from '../../interfaces/my-interfaces';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  loginService = inject(LoginService);

  //Obtenemos el valor de las variables del formulario en el html y las guardmos
  formUserData = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  manageLogin() {
    //console.log(this.formUserData);
    const username = this.formUserData.value.username;
    const password = this.formUserData.value.password;

    if (typeof username === 'string' && typeof password === 'string') {
      const credentials: Credentials = {
        username,
        password,
      };
      this.loginService.login(credentials).subscribe((res: any) => {
        console.log(res);
        if (res.result === 'good') {
          const decoded = jwtHelperService.decodeToken(res.data.token);
          console.log('user decoded');
          console.log(decoded);
          //Pop up message
          //Almacenar el token en el localstorage
          localStorage.setItem('token', res.data.token);
          //Almacenar información de usuario en el almacenamiento local de la pagina
          //localStorage.setItem('data', decoded.id);
          this.router.navigate(['/account']);
        } else {
          console.log('something went wrong with manage login');
          //pop up error message
        }
      });
    }
  }
}
