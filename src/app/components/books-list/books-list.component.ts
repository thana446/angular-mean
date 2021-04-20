import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IBook } from 'src/app/Interface/book.interface';
import { IResponse } from 'src/app/Interface/response.interface';
import { CrudService } from 'src/app/service/crud.service';
import * as fromReducer from '../../reducers';
import * as getBooksAct from '../../actions/get-books.action';
import * as deleteBookAct from '../../actions/delete-book.action';
import { LoadingService } from 'src/app/service/loading-service.service';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit ,OnDestroy {

  books: IBook[] = []

  
  getBooks$: Observable<IResponse>
  getBooksSub: Subscription
  deleteBook$: Observable<IResponse>
  deleteBookSub: Subscription

  constructor(
    private router: Router,
    private store: Store<fromReducer.State>,
    private loadingService: LoadingService
  ) { 
    this.getBooks$ = this.store.pipe(select('getBooks'))
    this.deleteBook$ = this.store.pipe(select('deleteBook'))
  }

  ngOnInit() {
    this.getBooks()
  }

  getBooks() {
    this.loadingService.startLoading()
    this.store.dispatch(new getBooksAct.GetBooks())
    this.getBooksSub = this.getBooks$.subscribe(res => {
      const {isLoading ,hasData ,hasError ,data} = res
      if(!isLoading) {
        this.loadingService.stopLoading()
        if(hasData) {
          this.books = [...data]
        }
        if(hasError) {
          alert(data)
        }
      }
    })
  }

  deleteBook(id ,i) {
    if(confirm(`Do you want to delete id ${id} from book store?`)) {
      this.deleteBookSub && this.deleteBookSub.unsubscribe()
      this.store.dispatch(new deleteBookAct.DeleteBook(id))
      this.deleteBookSub = this.deleteBook$.subscribe(res => {
        const {isLoading ,hasData ,hasError ,data} = res
        if(!isLoading) {
          this.loadingService.stopLoading()
          if(hasData) {
            this.books.splice(i ,1)
            this.store.dispatch(new deleteBookAct.DeleteBookClear())
          }
          if(hasError) {
            alert(data)
            this.store.dispatch(new deleteBookAct.DeleteBookClear())
          }
        }
      })
    }
  }

  editBook(id) {
    this.router.navigateByUrl(`/book-detail/${id}`)
  }

  ngOnDestroy(): void {
    this.getBooksSub && this.getBooksSub.unsubscribe()
    this.deleteBookSub && this.deleteBookSub.unsubscribe()
  }
}
