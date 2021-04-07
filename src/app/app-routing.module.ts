import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';


const routes: Routes = [
  {path: '' ,pathMatch: 'full' ,redirectTo: 'add-book'},
  {path: 'add-book' ,component: AddBookComponent},
  {path: 'book-detail/:id'  ,component: BookDetailComponent},
  {path: 'books-list'  ,component: BooksListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
