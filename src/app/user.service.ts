import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:3000/api/users/";
  constructor(private http: HttpClient) { }

  saveUser(userData: User): Promise<User> {
    var saveUserPromise = new Promise((resolve, reject) => {
      this.http.post(this.url, userData).toPromise()
        .then((res: User) => {
          console.log(res);
          resolve(res);

        })
        .catch((err: any) => {
          console.log(err);
          reject(err);

        })
        .finally(() => {
          console.log("over"); });
        });
    return saveUserPromise as Promise<User>
  }
  }
