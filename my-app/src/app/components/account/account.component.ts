import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MyRecipeService } from '../../services/my-recipe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Recipe } from '../../interfaces/my-interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  //Injecciones de código-Importaciones
  router = inject(Router);
  RecipeService = inject(MyRecipeService);
  loginService = inject(LoginService);
  recipesService = inject(MyRecipeService);

  //Propiedades-Variables
  userName: string = '';
  userId: string = '';
  recipeId: string = '';
  recipesForId: any = [];
  recipesForUserId: any = [];
  recipeSelected: any = {};
  recipeIngredients: any = '';

  //Modelo Receta
  recipeModel: Recipe = {
    id: '',
    name: '',
    ingredients: '',
    steps: '',
    description: '',
    source: '',
    serves: '',
    time: '',
    tags: '',
    notes: '',
  };

  //Métodos para manejar funciones
  manageCreateRecipe() {
    this.recipesService.create(this.recipeModel).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }
  manageReadSingleRecipe(id: string) {
    this.recipesService.read(id).subscribe((res: any) => {
      this.recipeId = id;
      this.recipeSelected = res.data;
      console.log(this.recipeSelected);
    });
  }
  manageReadAllRecipes() {
    this.RecipeService.readAllById(this.userId).subscribe((response: any) => {
      this.recipesForUserId = response.data;
      console.log(this.recipesForUserId);
    });
  }
  manageUpdateRecipe(id: string) {
    this.recipeId = id;
    this.recipesService.update(id, this.recipeModel).subscribe((res: any) => {
      console.log(res);
      this.manageReadAllRecipes();
    });
  }
  manageDeleteRecipe(id: string) {
    this.recipesService.delete(id).subscribe((res: any) => {
      console.log(res);
      this.manageReadAllRecipes();
    });
  }

  //Método al cargar
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.loginService.verifyToken(token).subscribe((res: any) => {
        if (res.result === 'good') {
          this.userName = res.data.username;
          this.userId = res.data.id;
          this.recipeModel.id = res.data.id;
          console.log(res);
          console.log(this.userId);
          this.manageReadAllRecipes();
        } else {
          this.loginService.logOut();
        }
      });
    } else {
      this.loginService.logOut();
    }
  }
}
