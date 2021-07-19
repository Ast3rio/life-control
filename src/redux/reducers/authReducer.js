import {
    SET_ERROR_AUTH,
    SET_USER_EMAIL,
    SET_USER_PASSWORD,
    START_REGISTER,
    SUCCESS_REGISTER
} from "../action-constants/authConstants";

const initialState = {
    loading: false,
    error: null,
    currentUser: [],
    email: '',
    password: '',
    isAuth: false
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
        case START_REGISTER:
            return {
                ...state,
                loading: true
            }
        case SUCCESS_REGISTER:
            return {
                ...state,
                loading: false,
                error: null,
                currentUser: [...state.currentUser, action.obj]
            }
        case SET_ERROR_AUTH:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}