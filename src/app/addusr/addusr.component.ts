import { Component, OnInit } from '@angular/core';
import { HttpclientService, User } from '../service/httpclient.service';

@Component({
  selector: 'app-addusr',
  templateUrl: './addusr.component.html',
  styleUrls: ['./addusr.component.css']
})
export class AddusrComponent implements OnInit {

  user: User = new User("","","");

  constructor(
    private httpClientService: HttpclientService
  ) { }

  ngOnInit() {
  }

  createUser(): void {
    this.httpClientService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });
  };

}
