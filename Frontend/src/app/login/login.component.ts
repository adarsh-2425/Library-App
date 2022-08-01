import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // users: UserModel[] = [];

  public user: any = {
    uname:'',
    password:''
  };
 
  
  constructor(public _auth:AuthService,private _router:Router,private userService: UserService) { }

  ngOnInit(): void {
 
  }


    
    loginUser(){
      // writing connection to respective service function
      // so the request from client will be properly routed to the server side
      
      this._auth.loginUser(this.user)
      .subscribe(
        res=>{
          localStorage.setItem('token',res.token)
          this._router.navigate(['/books'])
        }
      )
      console.log("success")
    }
    
}
