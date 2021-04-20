import { UpdateBookActions } from "../actions/update-book.action";
import { IResponse } from "../Interface/response.interface";
import * as act from "../actions/update-book.action"

const initialState: IResponse = {
    isLoading: false,
    hasData: false,
    hasError: false,
    data: {}
}

export function reducer(state = initialState ,action: UpdateBookActions) {
    switch(action.type) {
        case act.UPDATE_BOOK:
            return {
                ...state,
                isLoading: true,
                hasData: false,
                hasError: false
            }
        case act.UPDATE_BOOK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasData: true,
                hasError: false,
                data: action.payload
            }
        case act.UPDATE_BOOK_FAIL:
            return {
                ...state,
                isLoading: false,
                hasData: false,
                hasError: true,
                data: action.payload
            }
        case act.UPDATE_BOOK_CLEAR:
            return {
                ...initialState
            }
        default:
            return state
    }
}