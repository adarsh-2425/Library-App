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
  getBook(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }
  newBook(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"book":item})
    .subscribe(data =>{console.log(data)})
  }
  editBook(book:any)
  {
    console.log('book update')
    return this.http.put("http://localhost:3000/update",book)
    .subscribe(data =>{console.log(data)})
  }
}
