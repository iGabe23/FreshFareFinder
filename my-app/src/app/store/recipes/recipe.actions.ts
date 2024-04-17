import { createAction, props } from '@ngrx/store';
import { Recipe } from '../../interfaces/my-interfaces';

export const toggleFavorites = createAction('[Recipes] show Favorites');
// Otras acciones para crear, actualizar, eliminar y agregar a favoritos recetas
export const addFavoriteRecipe = createAction(
  '[Recipes] Add Favorite Recipe',
  props<{ recipeId: string }>()
);
export const removeFavoriteRecipe = createAction(
  '[Recipes] Remove Favorite Recipe',
  props<{ recipeId: string }>()
);

export const updateRecipe = createAction(
  '[Recipes] Update Recipe',
  props<{ id: Recipe }>()
);
