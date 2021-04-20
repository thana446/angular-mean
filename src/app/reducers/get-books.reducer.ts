import { GetBooksActions } from "../actions/get-books.action";
import { IResponse } from "../Interface/response.interface";
import * as act from "../actions/get-books.action"

const initialState: IResponse = {
    isLoading: false,
    hasData: false,
    hasError: false,
    data: {}
}

export function reducer(state = initialState ,action: GetBooksActions) {
    switch(action.type) {
        case act.GET_BOOKS:
            return {
                ...state,
                isLoading: true,
                hasData: false,
                hasError: false
            }
        case act.GET_BOOKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasData: true,
                hasError: false,
                data: action.payload
            }
        case act.GET_BOOKS_FAIL:
            return {
                ...state,
                isLoading: false,
                hasData: false,
                hasError: true,
                data: action.payload
            }
        case act.GET_BOOKS_CLEAR:
            return {
                ...initialState
            }
        default:
            return state
    }
}