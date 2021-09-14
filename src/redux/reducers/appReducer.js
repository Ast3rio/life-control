import {
    CLEAR_LOADING_AND_ERROR, SET_CURRENCY_TIME_UPDATE,
    SET_CURRENCY_USD_TO_UAH,
    SET_ERROR_MESSAGE,
    SET_LOADING
} from "../action-constants/actionConstants";

const initialState = {
    loading: false,
    error: null,
    currencyUSDtoUAH: 26.81,
    currencyTimeUpdate: ''
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
        case SET_CURRENCY_USD_TO_UAH:
            return {
                ...state,
                currencyUSDtoUAH: Math.round(action.value*100)/100
            }
        case SET_CURRENCY_TIME_UPDATE:
            return {
                ...state,
                currencyTimeUpdate: action.time
            }
        default:
            return state;
    }
}
