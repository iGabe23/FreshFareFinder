export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  steps: string[];
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
