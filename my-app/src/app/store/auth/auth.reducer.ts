import { createReducer, on } from '@ngrx/store';
import { setUserInfo } from './auth.actions';
import { Token } from '../../interfaces/my-interfaces';

// Estado inicial! Variables que se comunican entre componentes.
//Incializado el loading como falso y la info del usuario como un array vacío.
export const initState: Token = {
  userId: '',
  userName: '',
};

//Esta funcion authReducer, createReducer está creando un reducer que donde,
// lo primero que agarra es el estado inicial, y luego escucha las diferentes acciones.
export const authReducer = createReducer(
  initState,
  on(setUserInfo, (oldState, { userToken }) => {
    return userToken;
  })
);
