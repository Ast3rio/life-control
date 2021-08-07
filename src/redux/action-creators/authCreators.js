import {
    SET_USER_EMAIL,
    SET_USER_PASSWORD,
    SUCCESS_AUTH,
    SUCCESS_REGISTER
} from "../action-constants/authConstants";
import {postRequest} from "../../api/api";
import {setLoading, setErrorMessage, clearLoadingAndError} from "./actionCreators";

export const setUserEmail = text => ({type: SET_USER_EMAIL, text});
export const setUserPassword = text => ({type: SET_USER_PASSWORD, text});
export const successRegister = obj => ({type: SUCCESS_REGISTER, obj});
export const successAuth = token => ({type: SUCCESS_AUTH, token});

export const postNewUser = (email, password) => dispatch => {
    dispatch(setLoading());
    const success = (data) => {
        dispatch(successRegister(data))
        dispatch(clearLoadingAndError())
    }
    const setError = (error) => {
        dispatch(setErrorMessage(error))
    }
    postRequest({
        url: '/auth/registration',
        obj: {
            email,
            password
        },
        success,
        setError
    })
}

export const postCurrentUser = (email, password) => dispatch => {
    dispatch(setLoading());
    const success = (data) => {
        dispatch(successAuth(data.token))
        dispatch(clearLoadingAndError())
    }
    const setError = (error) => {
        dispatch(setErrorMessage(error))
    }
    postRequest({
        url: '/auth/login',
        obj: {
            email,
            password
        },
        success,
        setError
    })
}
