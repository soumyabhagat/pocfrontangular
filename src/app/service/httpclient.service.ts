import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class User{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

    getUser(){
      console.log("test call");
      return this.httpClient.get<User[]>('http://localhost:8080/users');
    }
    public deleteUser(user: any) {
      console.log(user.usrId);
      return this.httpClient.delete<User>("http://localhost:8080/" + user.usrId);
    }
  
    public createUser(user: any) {
      return this.httpClient.post<User>("http://localhost:8080/", user);
    }
}