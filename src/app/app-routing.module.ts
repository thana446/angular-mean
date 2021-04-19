import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';


const routes: Routes = [
  {path: '' ,pathMatch: 'full' ,redirectTo: 'books-list'},
  {path: 'add-book' ,component: AddBookComponent},
  {path: 'book-detail/:id'  ,component: AddBookComponent},
  {path: 'books-list'  ,component: BooksListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
