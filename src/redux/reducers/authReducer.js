import {
    SET_USER_EMAIL,
    SET_USER_PASSWORD,
    SUCCESS_AUTH,
    SUCCESS_REGISTER
} from "../action-constants/authConstants";

const initialState = {
    currentUser: [],
    message: '',
    email: '',
    password: '',
    token: '',
    isAuth: true
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_EMAIL:
            return {
                ...state,
                email: action.text
            }
        case SET_USER_PASSWORD:
            return {
                ...state,
                password: action.text
            }
        case SUCCESS_REGISTER:
            return {
                ...state,
                message: action.obj
            }
        case SUCCESS_AUTH:
            localStorage.setItem('token', action.token)
            return {
                ...state,
                loading: false,
                error: null,
                token: action.token,
                isAuth: true
            }
        default:
            return state;
    }
}
