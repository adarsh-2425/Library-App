import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  item= {
    First_Name:'',
    Last_Name:'',
    email:'',
    password:''
    }
  constructor(private http:HttpClient) { }
  getUser(id:any){
    return this.http.get("/"+id);
  }
  getusers(){
    return this.http.get("users");
  }
}
