import { IResponse } from "../Interface/response.interface";
import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store"
import * as fromAddBook from "./add-book.reducer"

export interface State {
    addBook: IResponse
}

export const reducer: ActionReducerMap<State>  = {
    addBook: fromAddBook.reducer
}

// const state = (state: State) => state
// export const getAddBook = createSelector(state,(state: State) => state.addBook)