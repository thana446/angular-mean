import { Action } from "@ngrx/store"

export const ADD_BOOK = '[Book] Add Book'
export const ADD_BOOK_SUCCESS = '[Book] Add Book Success'
export const ADD_BOOK_FAIL = '[Book] Add Book Fail'

export class AddBook implements Action {
    readonly type = ADD_BOOK
    constructor(public payload: any) {}
}

export class AddBookSuccess implements Action{
    readonly type = ADD_BOOK_SUCCESS
    constructor(public payload: any) {}
}

export class AddBookFail implements Action{
    readonly type = ADD_BOOK_FAIL
    constructor(public payload: any) {}
}

export type AddBookActions = AddBook | AddBookSuccess | AddBookFail