import {CLEAR_LOADING_AND_ERROR, SET_ERROR_MESSAGE, SET_LOADING} from "../action-constants/actionConstants";

const initialState = {
    loading: false,
    error: null,
    currencyUSDtoUAH: 26,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case CLEAR_LOADING_AND_ERROR:
            return {
                ...state,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}
