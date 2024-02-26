import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../interfaces/my-interfaces';
import { SignUpService } from '../../services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  router = inject(Router);
  signUpService = inject(SignUpService);

  //Obtenemos el valor de las variables del formulario en el html y las guardmos
  formNewUserData = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required),
  });

  manageCreate() {
    const username = this.formNewUserData.value.username;
    const email = this.formNewUserData.value.email;
    const password = this.formNewUserData.value.password;
    const password2 = this.formNewUserData.value.password2;
    if (
      typeof username === 'string' &&
      typeof email === 'string' &&
      typeof password === 'string' &&
      password === password2
    ) {
      const newUser: User = {
        username,
        email,
        password,
      };
      console.log(newUser);
      this.signUpService.create(newUser).subscribe((res: any) => {
        //pop up message
        console.log('Good... Response:', res);
      });
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }
}
