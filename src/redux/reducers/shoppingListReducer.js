import {
    ADD_NEW_SHOPPING_LIST_ITEM, CHANGE_NEW_LIST_ITEM_COST_VALUE, CHANGE_NEW_LIST_ITEM_VALUE,
    DELETE_SHOPPING_LIST_ELEMENT, SET_DONE_STATUS, SET_LIKE_STATUS,
    SET_SHOPPING_LIST_ERROR,
    START_LOAD_SHOPPING_LIST,
    SUCCESS_GET_SHOPPING_LIST
} from "../action-constants/shoppingConstants";
import _ from 'lodash';
import {updateObjectInArray} from "../../utils/objectHelper";
import uuid from 'react-uuid';

const initialState = {
    shoppingList: [],
    loading: false,
    error: null,
    newListItemValue: 'Write item name...',
    newListItemCostValue: 'Write item cost...'
}

export const shoppingListReducer = (state = initialState, action) => {
    switch (action.type){
        case START_LOAD_SHOPPING_LIST:
            return {
                ...state,
                loading: true
            }
        case SET_SHOPPING_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case SUCCESS_GET_SHOPPING_LIST:
            return {
                ...state,
                loading: false,
                error: null,
                shoppingList: [...state.shoppingList, action.obj]
            }
        case DELETE_SHOPPING_LIST_ELEMENT:
            return {
                ...state,
                shoppingList: _.remove(state.shoppingList, el => {
                    return el.id !== action.id
                })
            }
        case SET_LIKE_STATUS:
            return {
                ...state,
                shoppingList: _.each(state.shoppingList, updateObjectInArray(state.shoppingList, action.id, {like: action.status}))
            }
        case SET_DONE_STATUS:
            return {
                ...state,
                shoppingList: _.each(state.shoppingList, updateObjectInArray(state.shoppingList, action.id, {done: action.status}))
            }
        case ADD_NEW_SHOPPING_LIST_ITEM:
            return {
                ...state,
                shoppingList: _.concat(state.shoppingList, {
                    id: uuid(),
                    item: action.item,
                    cost: +action.cost,
                    like: false,
                    done: false
                })
            }
        case CHANGE_NEW_LIST_ITEM_VALUE:
            return {
                ...state,
                newListItemValue: action.value
            }
        case CHANGE_NEW_LIST_ITEM_COST_VALUE:
            return {
                ...state,
                newListItemCostValue: action.value
            }
        default:
            return state;
    }
}
