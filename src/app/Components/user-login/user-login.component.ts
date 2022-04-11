import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
isUserLooged:boolean = false;
  constructor(private authservice:UserAuthService) { }

  ngOnInit(): void {
  }
login(){
this.authservice.login('userName','Passwords');
this.isUserLooged=this.authservice.IsUserLogged;
}
logout(){
this.authservice.logout();
this.isUserLooged=this.authservice.IsUserLogged;
}
}
