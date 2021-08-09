import {
    CLEAR_LOADING_AND_ERROR,
    SET_CURRENCY_USD_TO_UAH,
    SET_ERROR_MESSAGE,
    SET_LOADING
} from "../action-constants/actionConstants";
import {convertCurrency} from "../../api/api";

export const setLoading = () => ({type: SET_LOADING});
export const setErrorMessage = error => ({type: SET_ERROR_MESSAGE, error});
export const clearLoadingAndError = () => ({type: CLEAR_LOADING_AND_ERROR});
export const setCurrencyUSDtoUAH = value => ({type: SET_CURRENCY_USD_TO_UAH, value})


export const getCurrency = (fromCurrency, toCurrency) => dispatch => {
    dispatch(setLoading());

    const success = (res) => {
        dispatch(clearLoadingAndError())
        if (fromCurrency === 'USD' && toCurrency === 'UAH'){
            setCurrencyUSDtoUAH(res.USD_UAH)
        }
    }

    const setError = (error) => {
        setErrorMessage(error)
    }

    convertCurrency(fromCurrency, toCurrency, success, setError)

}
