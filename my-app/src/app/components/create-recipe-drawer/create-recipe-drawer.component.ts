import { Component, inject } from '@angular/core';
import { MyRecipeService } from '../../services/my-recipe.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Recipe } from '../../interfaces/my-interfaces';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectUserId } from '../../store/auth/auth.selector';

@Component({
  selector: 'app-create-recipe-drawer',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create-recipe-drawer.component.html',
  styleUrl: './create-recipe-drawer.component.css',
})
export class CreateRecipeDrawerComponent {
  router = inject(Router);
  recipesService = inject(MyRecipeService);
  loginService = inject(LoginService);

  userId: string = '';
  recipesForUserId: Recipe[] = [];

  recipeModel: Recipe = {
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

  constructor(private store: Store<AppState>) {}

  //Métodos para manejar funciones
  manageCreateRecipe() {
    this.recipesService.create(this.recipeModel).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
      this.manageReadAllRecipes();
    });
  }
  manageReadAllRecipes() {
    this.store.pipe(select(selectUserId)).subscribe((userId: string) => {
      this.userId = userId;
      this.recipesService.readAllById(this.userId).subscribe((res: any) => {
        this.recipesForUserId = res.data;
      });
    });
  }
  ngOnInit() {
    this.store.pipe(select(selectUserId)).subscribe((userId: string) => {
      this.recipeModel.id = userId;
    });
  }
}
