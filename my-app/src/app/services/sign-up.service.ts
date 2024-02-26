import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/my-interfaces';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor() {}

  httpClient = inject(HttpClient);
  API_URL = 'http://localhost:4000/user';

  create(user: User) {
    return this.httpClient.post(this.API_URL, user);
  }
  readAll() {
    return this.httpClient.get(this.API_URL);
  }
  read(id: string | number) {
    return this.httpClient.get(`${this.API_URL}/${id}`);
  }

}
