import { createFeatureSelector, createSelector } from '@ngrx/store';
import { isFavOn } from '../../interfaces/my-interfaces'; // Asegúrate de importar correctamente tu interfaz RecipesState

export const selectAppState = createFeatureSelector<isFavOn>('Recipes');

export const selectShowOnlyFavorites = createSelector(
  selectAppState,
  (state) => state.showOnlyFavorite
);
