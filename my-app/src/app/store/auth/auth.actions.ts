import { createAction, props } from '@ngrx/store';
import { Token } from '../../interfaces/my-interfaces';

// Acción para indicar la creación exitosa de un elemento usuario/token
export const setUserInfo = createAction(
  '[Auth] Set User Info',
  props<{ userToken: Token }>()
);
// Acción para manejar errores que ocurran durante la obtención de elementos del Usuario
export const setUserError = createAction(
  '[Auth] Set User Error',
  props<{ error: string }>()
);
