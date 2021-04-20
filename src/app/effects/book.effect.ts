import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { CrudService } from "../service/crud.service";
import * as addBookAct from "../actions/add-book.action";
import * as updateBookAct from "../actions/update-book.action";
import * as getBookAct from "../actions/get-book.action";
import * as getBooksAct from "../actions/get-books.action";
import * as deleteBookAct from "../actions/delete-book.action";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";


@Injectable()
  export class BookEffect {
    @Effect()
    addBook$ = this.actions.pipe(
        ofType(addBookAct.ADD_BOOK),
        switchMap((action: addBookAct.AddBookActions) => this.crudService.addBook(action.payload)),
        map(res => (new addBookAct.AddBookSuccess(res))),
        catchError(err => of(new addBookAct.AddBookFail(err)))
    )
    @Effect()
    updateBook$ = this.actions.pipe(
      ofType(updateBookAct.UPDATE_BOOK),
      switchMap((action: updateBookAct.UpdateBookActions) => this.crudService.updateBook(action.payload)),
      map(res => new updateBookAct.UpdateBookSuccess(res)),
      catchError(err => of(new updateBookAct.UpdateBookFail(err)))
    )
    @Effect()
    getBook$ = this.actions.pipe(
      ofType(getBookAct.GET_BOOK),
      switchMap((action: getBookAct.GetBookActions) => this.crudService.getBook(action.payload)),
      map(res => new getBookAct.GetBookSuccess(res)),
      catchError(err => of(new getBookAct.GetBookFail(err)))
    )
    @Effect()
    getBooks$ = this.actions.pipe(
      ofType(getBooksAct.GET_BOOKS),
      switchMap(() => this.crudService.getBooks()),
      map(res => new getBooksAct.GetBooksSuccess(res)),
      catchError(err => of(new getBooksAct.GetBooksFail(err)))
    )
    @Effect()
    deleteBook$ = this.actions.pipe(
        ofType(deleteBookAct.DELETE_BOOK),
        switchMap((action: deleteBookAct.DeleteBookActions) => this.crudService.deleteBook(action.payload)),
        map(res => (new deleteBookAct.DeleteBookSuccess(res))),
        catchError(err => of(new deleteBookAct.DeleteBookFail(err)))
    )
    constructor(private actions: Actions ,private crudService: CrudService) { }
  
  }