import { DeleteBookActions } from "../actions/delete-book.action";
import { IResponse } from "../Interface/response.interface";
import * as act from "../actions/delete-book.action"

const initialState: IResponse = {
    isLoading: false,
    hasData: false,
    hasError: false,
    data: {}
}

export function reducer(state = initialState ,action: DeleteBookActions) {
    switch(action.type) {
        case act.DELETE_BOOK:
            return {
                ...state,
                isLoading: true,
                hasData: false,
                hasError: false
            }
        case act.DELETE_BOOK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasData: true,
                hasError: false,
                data: action.payload
            }
        case act.DELETE_BOOK_FAIL:
            return {
                ...state,
                isLoading: false,
                hasData: false,
                hasError: true,
                data: action.payload
            }
        case act.DELETE_BOOK_CLEAR:
            return {
                ...initialState
            }
        default:
            return state
    }
}