import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IBook } from 'src/app/Interface/book.interface';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit ,OnDestroy {

  books: IBook[] = []

  getBooksSub: Subscription
  deleteBookSub: Subscription

  constructor(
    private crudService: CrudService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBooksSub = this.crudService.getBooks().subscribe(res => {
      this.books = res
    } ,err => console.log(err))
  }

  deleteBook(id ,i) {
    this.deleteBookSub = this.crudService.deleteBook(id).subscribe(res => {
      this.books.splice(i)
    } ,err => console.log(err))
  }

  editBook(id) {
    this.router.navigateByUrl(`/book-detail/${id}`)
  }

  ngOnDestroy(): void {
    this.getBooksSub && this.getBooksSub.unsubscribe()

  }
}
