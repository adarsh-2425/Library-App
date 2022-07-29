import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  item= {
    bookId:'',
    bookName:'',
    authorName:'',
    imageUrl:'',
    genre:''}
  constructor(private http:HttpClient) { }
  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }
  newBook(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"book":item})
    .subscribe(data =>{console.log(data)})
  }
}
