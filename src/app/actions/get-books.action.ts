import { Action } from "@ngrx/store"

export const GET_BOOKS = '[Book] Get Books'
export const GET_BOOKS_SUCCESS = '[Book] Get Books Success'
export const GET_BOOKS_FAIL = '[Book] Get Books Fail'
export const GET_BOOKS_CLEAR = '[Book] Get Books Clear'

export class GetBooks implements Action {
    readonly type = GET_BOOKS
    constructor(public payload?: any) {}
}

export class GetBooksSuccess implements Action{
    readonly type = GET_BOOKS_SUCCESS
    constructor(public payload: any) {}
}

export class GetBooksFail implements Action{
    readonly type = GET_BOOKS_FAIL
    constructor(public payload: any) {}
}

export class GetBooksClear implements Action{
    readonly type = GET_BOOKS_CLEAR
    constructor(public payload?: any) {}
}

export type GetBooksActions = GetBooks | GetBooksSuccess | GetBooksFail | GetBooksClear