import {
    SET_ERROR_AUTH,
    SET_USER_EMAIL,
    SET_USER_PASSWORD,
    START_REGISTER, SUCCESS_AUTH,
    SUCCESS_REGISTER
} from "../action-constants/authConstants";
import {postRequest} from "../../api/api";


export const setUserEmail = text => ({type: SET_USER_EMAIL, text});
export const setUserPassword = text => ({type: SET_USER_PASSWORD, text});

export const startAuthPost = () => ({type: START_REGISTER});
export const successRegister = obj => ({type: SUCCESS_REGISTER, obj});
export const successAuth = token => ({type: SUCCESS_AUTH, token});
export const setErrorAuth = error => ({type: SET_ERROR_AUTH, error});

export const postNewUser = (email, password) => dispatch => {
    dispatch(startAuthPost());
    const success = (data) => {
        dispatch(successRegister(data))
    }
    const setError = (error) => {
        dispatch(setErrorAuth(error))
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
    dispatch(startAuthPost());
    const success = (data) => {
        dispatch(successAuth(data.token))
    }
    const setError = (error) => {
        dispatch(setErrorAuth(error))
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
