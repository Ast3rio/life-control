import {
    ADD_NEW_SHOPPING_LIST_ITEM, CHANGE_NEW_LIST_ITEM_COST_VALUE,
    CHANGE_NEW_LIST_ITEM_VALUE,
    DELETE_SHOPPING_LIST_ELEMENT,
    SET_DONE_STATUS,
    SET_LIKE_STATUS
} from "../action-constants/shoppingConstants";

export const deleteShoppingListElement = id => ({type: DELETE_SHOPPING_LIST_ELEMENT, id});
export const setLikeStatus = (id, status) => ({type: SET_LIKE_STATUS, id, status});
export const setDoneStatus = (id, status) => ({type: SET_DONE_STATUS, id, status});
export const addNewShoppingListItem = (item, cost)=> ({type: ADD_NEW_SHOPPING_LIST_ITEM, item, cost});
export const changeNewListItemValue = value => ({type: CHANGE_NEW_LIST_ITEM_VALUE, value});
export const changeNewListItemCostValue = value => ({type: CHANGE_NEW_LIST_ITEM_COST_VALUE, value});

