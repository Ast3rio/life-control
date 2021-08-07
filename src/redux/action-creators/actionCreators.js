import {CLEAR_LOADING_AND_ERROR, SET_ERROR_MESSAGE, SET_LOADING} from "../action-constants/actionConstants";

export const setLoading = () => ({type: SET_LOADING});
export const setErrorMessage = error => ({type: SET_ERROR_MESSAGE, error});
export const clearLoadingAndError = () => ({type: CLEAR_LOADING_AND_ERROR});

