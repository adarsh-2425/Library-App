import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookModel } from '../books/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private bookService: BookService,private router: Router) { }
  bookItem= {
    bookId:'',
    bookName:'',
    
    authorName:'',
    imageUrl:'',
    genre:''
  }
  ngOnInit() {
  }
  AddBook()
  {    
    this.bookService.newBook(this.bookItem);
    console.log("Called");    
    // alert("Success");
    this.router.navigate(['/books']);
  }
}

