import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IBook } from 'src/app/Interface/book.interface';
import { IResponse } from 'src/app/Interface/response.interface';
import { CrudService } from 'src/app/service/crud.service';
import * as fromReducer from '../../reducers'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup
  isEdit: boolean
  id: string

  addBook$: Observable<IResponse>
  addBookSub: Subscription

  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private router: Router,
    private zone: NgZone,
    private route: ActivatedRoute,
    private store: Store<fromReducer.State>
    ) {
      this.addBook$ = this.store.pipe(select('addBook'))
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
    this.addBook$.subscribe(res => console.log(res))
  }

  getBookDetail(id) {
    this.crudService.getBook(id).subscribe((book: IBook) => {
      const {name ,price ,description} = book
      this.bookForm.setValue({name ,price ,description})
    } ,err => console.log(err))
  }

  onSubmit(values) {
    if(this.isEdit) {
      const book: IBook = {_id: this.id ,...values}
      this.crudService.updateBook(book).subscribe(res => this.handleSubmitResponse('Update Book Success') ,err => console.log(err))
    }else {
      this.crudService.addBook(values).subscribe(res => this.handleSubmitResponse('Add Book Success') ,err => console.log(err))
    }

  }

  handleSubmitResponse(msgLog) {
    console.log(msgLog)
    this.zone.run(() => this.router.navigateByUrl('/books-list'))
  }

}
