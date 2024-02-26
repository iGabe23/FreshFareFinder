import { Injectable, inject } from '@angular/core';
import { Recipe } from '../interfaces/my-interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyRecipeService {
  constructor() {}

  API_URL = 'http://localhost:5000/recipes';
  API_URL2 = 'http://localhost:5000/recipes/recipe';
  API_URL3 = 'http://localhost:5000/recipes/user';
  httpClient = inject(HttpClient);

  //Para crear el regalo le pasamos el parámetro User que es de tipo :Interface de User
  create(recipe: Recipe) {
    // la unica función de estos método es retornar lo que está dentro de ellos
    return this.httpClient.post(this.API_URL, recipe);
  }
  readAllById(id: string) {
    return this.httpClient.get(`${this.API_URL3}/${id}`);
  }
  readAll() {
    return this.httpClient.get(`${this.API_URL}`);
  }
  //Para leer u otras acciones, necesitamos el id del mismo, el id puede ser de tipo string o number
  read(id: string | number) {
    return this.httpClient.get(`${this.API_URL2}/${id}`);
  }
  update(id: string, recipe: Recipe) {
    return this.httpClient.put(`${this.API_URL}/${id}`, recipe);
  }
  delete(id: string) {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }
}
