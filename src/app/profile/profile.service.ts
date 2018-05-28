import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './../shared/entities/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user: User;

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get('user/profile', { withCredentials: true });
  }
}
