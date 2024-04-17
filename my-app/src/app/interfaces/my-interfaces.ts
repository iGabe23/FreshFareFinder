export interface Recipe {
  id: string;
  name: string;
  ingredients: string;
  steps: string;
  description: string;
  source: string;
  serves: number;
  time: number;
  tags: string;
  notes: string;
  fav?: boolean;
}

export interface Token {
  userId: string;
  userName: string;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
}

export interface isFavOn {
  showOnlyFavorite: boolean;
}
