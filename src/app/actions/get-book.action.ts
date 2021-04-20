import { Action } from "@ngrx/store"

export const GET_BOOK = '[Book] Get Book'
export const GET_BOOK_SUCCESS = '[Book] Get Book Success'
export const GET_BOOK_FAIL = '[Book] Get Book Fail'
export const GET_BOOK_CLEAR = '[Book] Get Book Clear'

export class GetBook implements Action {
    readonly type = GET_BOOK
    constructor(public payload: any) {}
}

export class GetBookSuccess implements Action{
    readonly type = GET_BOOK_SUCCESS
    constructor(public payload: any) {}
}

export class GetBookFail implements Action{
    readonly type = GET_BOOK_FAIL
    constructor(public payload: any) {}
}

export class GetBookClear implements Action{
    readonly type = GET_BOOK_CLEAR
    constructor(public payload?: any) {}
}

export type GetBookActions = GetBook | GetBookSuccess | GetBookFail | GetBookClear