import {
    CLEAR_LOADING_AND_ERROR, SET_CURRENCY_TIME_UPDATE,
    SET_CURRENCY_USD_TO_UAH,
    SET_ERROR_MESSAGE,
    SET_LOADING
} from "../action-constants/actionConstants";
import {convertCurrency} from "../../api/api";

export const setLoading = () => ({type: SET_LOADING});
export const setErrorMessage = error => ({type: SET_ERROR_MESSAGE, error});
export const clearLoadingAndError = () => ({type: CLEAR_LOADING_AND_ERROR});
export const setCurrencyUSDtoUAH = value => ({type: SET_CURRENCY_USD_TO_UAH, value});
export const setCurrencyTimeUpdate = time => ({type: SET_CURRENCY_TIME_UPDATE, time});

export const getCurrency = (fromCurrency, toCurrency) => dispatch => {
    dispatch(setLoading());

    const success = (res) => {
        console.log(res)
        dispatch(clearLoadingAndError())
        if (fromCurrency === 'USD' && toCurrency === 'UAH'){
            dispatch(setCurrencyUSDtoUAH(res.data.result.USD_UAH))
            dispatch(setCurrencyTimeUpdate(res.data.updated))
        }
    }

    const setError = (error) => {
        if(error.slice(-3) !== 401){
            dispatch(clearLoadingAndError())
            return
        }
        dispatch(setErrorMessage(error))
    }

    convertCurrency(fromCurrency, toCurrency, success, setError)
}
