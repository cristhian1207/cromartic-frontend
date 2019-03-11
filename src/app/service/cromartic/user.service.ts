import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from 'src/app/bean/user';
import { URI_USER } from 'src/app/helpers/app.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  users(){
    return this.http.get<User[]>(`${URI_USER}/users`);
  }

  user(username: string){
    return this.http.get<User>(`${URI_USER}/users/${username}`);
  }
}
