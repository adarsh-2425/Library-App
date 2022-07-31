import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    username:'',
    password:''
  }
  
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
   
  }

    
    loginUser(){
      // writing connection to respective service function
      // so the request from client will be properly routed to the server side
      this.auth.loginUser(this.user)
      console.log("success")
    }
    
}
