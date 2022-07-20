import { Component, OnInit } from '@angular/core';
import {HttpclientService, User} from '../service/httpclient.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
   
  constructor(
    private httpClientService:HttpclientService
  ) { }

  ngOnInit() {
    this.httpClientService.getUser().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: User[]){
      this.users=response;
  }

  deleteUser(user: User): void {
    this.httpClientService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter((u: any) => u !== user);
      })
  };

}
