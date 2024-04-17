import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { MyRecipeService } from '../../services/my-recipe.service';
import { LoginService } from '../../services/login.service';
import { Token } from '../../interfaces/my-interfaces';

import { CreateRecipeDrawerComponent } from '../create-recipe-drawer/create-recipe-drawer.component';
import { RecipeContentComponent } from '../recipe-content/recipe-content.component';
import { UpdateRecipeDrawerComponent } from '../update-recipe-drawer/update-recipe-drawer.component';

import { AppState } from '../../store/app.state';
import { setUserInfo } from '../../store/auth/auth.actions';
import { selectUserId, selectUserName } from '../../store/auth/auth.selector';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CreateRecipeDrawerComponent,
    RecipeContentComponent,
    UpdateRecipeDrawerComponent,
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  constructor(private store: Store<AppState>) {}
  //Injecciones de código-Importaciones
  router = inject(Router);
  loginService = inject(LoginService);
  recipesService = inject(MyRecipeService);

  //Propiedades-Variables
  userName: string = '';
  userId: string = '';

  decodeToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.loginService.verifyToken(token).subscribe((res: any) => {
        if (res.result === 'good') {
          console.log(res);
          const userId = res.data.id;
          const userName = res.data.username;
          const userToken: Token = { userId, userName };
          console.log(userToken);
          this.store.dispatch(setUserInfo({ userToken }));
        } else {
          this.loginService.logOut();
        }
      });
    } else {
      this.loginService.logOut();
    }
  }

  // Métodos NGRX
  getUserId() {
    this.store.pipe(select(selectUserId)).subscribe((user: string) => {
      this.userId = user;
      console.log(this.userId);
    });
  }
  getUserName() {
    this.store.pipe(select(selectUserName)).subscribe((user: string) => {
      this.userName = user;
    });
  }

  //Método al cargar
  ngOnInit() {
    this.decodeToken();
    this.getUserId();
    this.getUserName();
  }
}
