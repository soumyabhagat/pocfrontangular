import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn:boolean = false;
  constructor(public loginService:AuthService) { }

  ngOnInit() {
    this.isUserLoggedIn=this.loginService.isUserLoggedIn();
  }

}
