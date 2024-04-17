import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app.state'; // Asegúrate de importar correctamente tu estado
import { Token } from '../../interfaces/my-interfaces';

// Selector para obtener el estado de authToken
const selectAuthState = createFeatureSelector<AppState, Token>('authToken');

// Selector para obtener el ID de usuario
export const selectUserId = createSelector(
  selectAuthState,
  (state) => state.userId
);
// Selector para obtener el nombre de usuario
export const selectUserName = createSelector(
  selectAuthState,
  (authToken: Token) => authToken.userName
);
