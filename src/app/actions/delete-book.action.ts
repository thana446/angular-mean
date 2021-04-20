import { Action } from "@ngrx/store"

export const DELETE_BOOK = '[Book] Delete Book'
export const DELETE_BOOK_SUCCESS = '[Book] Delete Book Success'
export const DELETE_BOOK_FAIL = '[Book] Delete Book Fail'
export const DELETE_BOOK_CLEAR = '[Book] Delete Book Clear'

export class DeleteBook implements Action {
    readonly type = DELETE_BOOK
    constructor(public payload: any) {}
}

export class DeleteBookSuccess implements Action{
    readonly type = DELETE_BOOK_SUCCESS
    constructor(public payload: any) {}
}

export class DeleteBookFail implements Action{
    readonly type = DELETE_BOOK_FAIL
    constructor(public payload: any) {}
}

export class DeleteBookClear implements Action{
    readonly type = DELETE_BOOK_CLEAR
    constructor(public payload?: any) {}
}

export type DeleteBookActions = DeleteBook | DeleteBookSuccess | DeleteBookFail | DeleteBookClear