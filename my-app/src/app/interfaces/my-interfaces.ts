
export interface Recipe {
  id: String;
  name: String;
  ingredients: string;
  steps: string;
  description: String;
  source: String;
  serves: string;
  time: string;
  tags: String;
  notes: String;
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
