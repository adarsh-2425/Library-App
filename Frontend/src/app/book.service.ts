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
    return this.http.get("/"+id);
  }
  getBooks(){
    return this.http.get("/books");
  }
  newBook(item:any)
  {   
    return this.http.post("/insert",{"book":item})
    .subscribe(data =>{console.log(data)})
  }
  editBook(book:any)
  {
    console.log('book update')
    return this.http.put("update",book)
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any)
  {

    return this.http.delete("/remove/"+id)

  }
}
