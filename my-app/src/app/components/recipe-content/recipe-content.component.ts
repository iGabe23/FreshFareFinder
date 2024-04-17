import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Recipe } from '../../interfaces/my-interfaces';
import { MyRecipeService } from '../../services/my-recipe.service';
import { LoginService } from '../../services/login.service';

import { Store, select } from '@ngrx/store';

import { selectUserId, selectUserName } from '../../store/auth/auth.selector';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-recipe-content',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-content.component.html',
  styleUrl: './recipe-content.component.css',
})
export class RecipeContentComponent {
  //Injecciones de código-Importaciones
  router = inject(Router);
  loginService = inject(LoginService);
  recipesService = inject(MyRecipeService);

  constructor(private store: Store<AppState>) {}
  starIcon: boolean = false;

  //Propiedades-Variables
  userId: string = '';
  userName: string = '';
  recipeId: string = '';
  recipesForUserId: Recipe[] = [];
  recipeIngredients: string = '';
  recipeSelected: Recipe = {
    id: '',
    name: '',
    ingredients: '',
    steps: '',
    description: '',
    source: '',
    serves: 0,
    time: 0,
    tags: '',
    notes: '',
    fav: false,
  };
  showOnlyFavorites: boolean = false;
  
  manageReadAllRecipes() {
    this.store.pipe(select(selectUserId)).subscribe((userid: string) => {
      this.userId = userid;
      this.recipesService.readAllById(this.userId).subscribe((res: any) => {
        this.recipesForUserId = res.data;
        // Filtrar las recetas según la propiedad fav
        if (this.showOnlyFavorites) {
          this.recipesForUserId = res.data.filter(
            (recipe: Recipe) => recipe.fav === true
          );
        } else {
          this.recipesForUserId = res.data;
        }
      });
    });
  }
  manageReadSingleRecipe(id: string) {
    this.recipesService.read(id).subscribe((res: any) => {
      this.recipeId = id;
      this.recipeSelected = res.data;
      console.log(this.recipeSelected);
    });
  }
  manageDeleteRecipe(id: string) {
    this.recipesService.delete(id).subscribe((res: any) => {
      console.log(res);
      this.manageReadAllRecipes();
    });
  }
  // Métodos NGRX
  getUserName() {
    this.store.pipe(select(selectUserName)).subscribe((user: string) => {
      this.userName = user;
    });
  }

  //Método al cargar
  ngOnInit() {
    this.manageReadAllRecipes();
    this.getUserName();
  }
}
