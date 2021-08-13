import {
    CHANGE_COMMON_MONEY_CURRENCY,
    CHANGE_COMMON_MONEY_VALUE,
    SET_COMMON_MONEY
} from "../action-constants/financesConstants";

const initialState = {
    commonMoney: 0,
    commonMoneyValue: 0,
    commonMoneyCurrency: 'USD'
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
        case CHANGE_COMMON_MONEY_CURRENCY:
            return {
                ...state,
                commonMoneyCurrency: action.currency
            }
        default:
            return state;
    }
}
