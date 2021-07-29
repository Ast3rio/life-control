import {shoppingListData} from "../../db/shoppingListData";

const initialState = {
    shoppingList: shoppingListData,
}

export const shoppingListReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
}
