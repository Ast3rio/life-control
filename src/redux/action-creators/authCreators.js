import {
    SET_ERROR_AUTH,
    SET_USER_EMAIL,
    SET_USER_PASSWORD,
    START_REGISTER,
    SUCCESS_REGISTER
} from "../action-constants/authConstants";
import {registartionApi} from "../../api/auth-api";


export const setUserEmail = text => ({type: SET_USER_EMAIL, text});
export const setUserPassword = text => ({type: SET_USER_PASSWORD, text});

export const startRegister = () => ({type: START_REGISTER});
export const successRegister = obj => ({type: SUCCESS_REGISTER, obj});
export const setErrorAuth = error => ({type: SET_ERROR_AUTH, error});

export const postNewUser = (email, password) => dispatch => {
    dispatch(startRegister());
    registartionApi(email, password, successRegister, setErrorAuth, dispatch);
}
