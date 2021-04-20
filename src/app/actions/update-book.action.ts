import { Action } from "@ngrx/store"

export const UPDATE_BOOK = '[Book] Update Book'
export const UPDATE_BOOK_SUCCESS = '[Book] Update Book Success'
export const UPDATE_BOOK_FAIL = '[Book] Update Book Fail'
export const UPDATE_BOOK_CLEAR = '[Book] Update Book Clear'

export class UpdateBook implements Action {
    readonly type = UPDATE_BOOK
    constructor(public payload: any) {}
}

export class UpdateBookSuccess implements Action{
    readonly type = UPDATE_BOOK_SUCCESS
    constructor(public payload: any) {}
}

export class UpdateBookFail implements Action{
    readonly type = UPDATE_BOOK_FAIL
    constructor(public payload: any) {}
}

export class UpdateBookClear implements Action{
    readonly type = UPDATE_BOOK_CLEAR
    constructor(public payload?: any) {}
}

export type UpdateBookActions = UpdateBook | UpdateBookSuccess | UpdateBookFail | UpdateBookClear