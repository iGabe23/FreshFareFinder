import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MyRecipeService } from '../../services/my-recipe.service';
import { Recipe } from '../../interfaces/my-interfaces';

@Component({
  selector: 'app-update-recipe-drawer',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-recipe-drawer.component.html',
  styleUrl: './update-recipe-drawer.component.css',
})
export class UpdateRecipeDrawerComponent {
  //Injecciones de código-Importaciones
  router = inject(Router);
  loginService = inject(LoginService);
  recipesService = inject(MyRecipeService);

  //Propiedades-Variables
  userId: string = '';
  recipeId: string = '';
  recipesForUserId: any = [];
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

  //Modelo Receta
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

  //Métodos para manejar funciones
  manageReadSingleRecipe(id: string) {
    this.recipesService.read(id).subscribe((res: any) => {
      this.recipeId = id;
      this.recipeSelected = res.data;
      console.log(this.recipeSelected);
    });
  }
  manageUpdateRecipe(id: string) {
    this.recipeId = id;
    this.recipesService.update(id, this.recipeModel).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }

  //Método al cargar
  ngOnInit() {}
}
