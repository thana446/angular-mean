import { IResponse } from "../Interface/response.interface";
import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store"
import * as fromAddBook from "./add-book.reducer"
import * as fromUpdateBook from "./update-book.reducer"
import * as fromGetBook from "./get-book.reducer"
import * as fromGetBooks from "./get-books.reducer"
import * as fromDeleteBook from "./delete-book.reducer"

export interface State {
    addBook: IResponse
    updateBook: IResponse
    getBook: IResponse
    getBooks: IResponse
    deleteBook: IResponse
}

export const reducer: ActionReducerMap<State>  = {
    addBook: fromAddBook.reducer,
    updateBook: fromUpdateBook.reducer,
    getBook: fromGetBook.reducer,
    getBooks: fromGetBooks.reducer,
    deleteBook: fromDeleteBook.reducer
}

// const state = (state: State) => state
// export const getAddBook = createSelector(state,(state: State) => state.addBook)