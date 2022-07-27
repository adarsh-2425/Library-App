import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addUser={
    firstName:'',
    lastName:'',
    email:'',
    password:''};
    
    newUser(){
      alert("New User Added")
    }
}
