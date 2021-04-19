import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { CrudService } from "../service/crud.service";
import * as addBookAct from "../actions/add-book.action";
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
    constructor(private actions: Actions ,private crudService: CrudService) { }
  
  }