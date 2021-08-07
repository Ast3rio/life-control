import {CHANGE_COMMON_MONEY_VALUE, SET_COMMON_MONEY} from "../action-constants/financesConstants";

const initialState = {
    commonMoney: 0,
    commonMoneyValue: 0,
}

export const financesReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_COMMON_MONEY:

            return {
                ...state,
                commonMoney: action.value
            }
        case CHANGE_COMMON_MONEY_VALUE:
            return {
                ...state,
                commonMoneyValue: action.value
            }
        default:
            return state;
    }
}
