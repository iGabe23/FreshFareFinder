import { createReducer, on } from '@ngrx/store';
import { toggleFavorites } from './recipe.actions';
import { isFavOn } from '../../interfaces/my-interfaces';

const initState: isFavOn = {
  showOnlyFavorite: false,
};

export const favReducer = createReducer(
  initState,
  on(toggleFavorites, (state) => ({
    ...state,
    showOnlyFavorite: !state.showOnlyFavorite,
  }))
);
