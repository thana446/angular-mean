import { AfterViewInit, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IBook } from 'src/app/Interface/book.interface';
import { IResponse } from 'src/app/Interface/response.interface';
import { CrudService } from 'src/app/service/crud.service';
import * as fromReducer from '../../reducers';
import * as addBookAct from '../../actions/add-book.action';
import * as updateBookAct from '../../actions/update-book.action';
import * as getBookAct from '../../actions/get-book.action';
import { LoadingService } from 'src/app/service/loading-service.service';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit ,OnDestroy {

  bookForm: FormGroup
  isEdit: boolean
  id: string

  addBook$: Observable<IResponse>
  addBookSub: Subscription
  updateBook$: Observable<IResponse>
  updateBookSub: Subscription
  getBook$: Observable<IResponse>
  getBookSub: Subscription

  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private router: Router,
    private zone: NgZone,
    private route: ActivatedRoute,
    private store: Store<fromReducer.State>,
    private loadingService: LoadingService
    ) {
      this.addBook$ = this.store.pipe(select('addBook'))
      this.updateBook$ = this.store.pipe(select('updateBook'))
      this.getBook$ = this.store.pipe(select('getBook'))
      this.bookForm = fb.group({
        name: [''],
        price: [''],
        description: ['']
      })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.isEdit = this.id ? true : false
    if(this.isEdit) this.getBookDetail(this.id)

    this.addBookSub = this.addBook$.pipe(skip(1)).subscribe(res => this.handleSubmitResponse(res ,'Add Book Success'))
    this.updateBookSub = this.updateBook$.pipe(skip(1)).subscribe(res => this.handleSubmitResponse(res ,'Update Book Success'))
  }

  getBookDetail(id) {
    this.store.dispatch(new getBookAct.GetBook(id))
    this.loadingService.startLoading()
    this.getBookSub = this.getBook$.subscribe(res => {
      const {isLoading ,hasData ,hasError ,data} = res
      if(!isLoading) {
        this.loadingService.stopLoading()
        if(hasData) {
          const {name ,price ,description} = data
          this.bookForm.setValue({name ,price ,description})
        }
        if(hasError) {
          alert(data)
        }
      }
    })
  }

  onSubmit(values) {
    this.loadingService.startLoading()
    if(this.isEdit) {
      const book: IBook = {_id: this.id ,...values}
      this.store.dispatch(new updateBookAct.UpdateBook(book))
    }else {
      this.store.dispatch(new addBookAct.AddBook(values))
    }

  }

  handleSubmitResponse(res: IResponse ,msgLog) {
    const {isLoading ,hasData ,hasError ,data} = res
    if(!isLoading) {
      this.loadingService.stopLoading();
      if(hasData) {
        console.log(msgLog)
        this.store.dispatch(new addBookAct.AddBookClear())
        this.zone.run(() => this.router.navigateByUrl('/books-list'))
      }
      if(hasError) {
        alert(data)
        this.store.dispatch(new addBookAct.AddBookClear())
      }
    }
  }

  ngOnDestroy() {
    this.addBookSub && this.addBookSub.unsubscribe()
    this.updateBookSub && this.updateBookSub.unsubscribe()

  }
}


