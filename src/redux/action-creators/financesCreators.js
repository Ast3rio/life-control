import {CHANGE_COMMON_MONEY_VALUE, SET_COMMON_MONEY} from "../action-constants/financesConstants";

export const setCommonMoney = value => ({type: SET_COMMON_MONEY, value});
export const changeCommonMoneyValue = value => ({type: CHANGE_COMMON_MONEY_VALUE, value})
