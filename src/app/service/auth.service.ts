import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


export class User{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient:HttpClient
  ) { }

  authenticate(username: string, password: string) {
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.httpClient.get<User>('http://localhost:8080/validateLogin',{headers}).pipe(
       map(
         userData => {
          sessionStorage.setItem('username',username);
          let authString = btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
         }
       )
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
