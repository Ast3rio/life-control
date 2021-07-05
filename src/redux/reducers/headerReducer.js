import {headerMenuData} from "../../db/headerData";

const initialState = {
    menu: headerMenuData
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
