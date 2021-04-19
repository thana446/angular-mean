import { AddBookActions } from "../actions/add-book.action";
import { IResponse } from "../Interface/response.interface";
import * as act from "../actions/add-book.action"

const initialState: IResponse = {
    isLoading: false,
    hasData: false,
    hasError: false,
    data: {}
}

export function reducer(state = initialState ,action: AddBookActions) {
    switch(action.type) {
        case act.ADD_BOOK:
            return {
                ...state,
                isLoading: true,
                hasData: false,
                hasError: false
            }
        case act.ADD_BOOK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasData: true,
                hasError: false,
                data: action.payload
            }
        case act.ADD_BOOK_FAIL:
            return {
                ...state,
                isLoading: false,
                hasData: false,
                hasError: true,
                data: action.payload
            }
        default:
            return state
    }
}