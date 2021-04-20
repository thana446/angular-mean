import { GetBookActions } from "../actions/get-book.action";
import { IResponse } from "../Interface/response.interface";
import * as act from "../actions/get-book.action"

const initialState: IResponse = {
    isLoading: false,
    hasData: false,
    hasError: false,
    data: {}
}

export function reducer(state = initialState ,action: GetBookActions) {
    switch(action.type) {
        case act.GET_BOOK:
            return {
                ...state,
                isLoading: true,
                hasData: false,
                hasError: false
            }
        case act.GET_BOOK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasData: true,
                hasError: false,
                data: action.payload
            }
        case act.GET_BOOK_FAIL:
            return {
                ...state,
                isLoading: false,
                hasData: false,
                hasError: true,
                data: action.payload
            }
        case act.GET_BOOK_CLEAR:
            return {
                ...initialState
            }
        default:
            return state
    }
}