import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewBookComponent } from './new-book/new-book.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  { path: '', 
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent}
  ]},
  {
    path:'login',component: LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'books',component:BooksComponent,
  },
      {
        path:'header',component:HeaderComponent
      },
      {
        path:'new-book',component:NewBookComponent
      },
      {
        path:'update-book',component:UpdateBookComponent
      }
    
    ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
