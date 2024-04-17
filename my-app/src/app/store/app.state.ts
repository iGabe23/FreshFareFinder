import { Token } from '../interfaces/my-interfaces';

export interface AppState {
  readonly authToken: Token;
  readonly showOnlyFavorites: boolean;
}
