import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./reducers/appReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import ReduxPromise from 'redux-promise';
import {headerReducer} from "./reducers/headerReducer";
import {authReducer} from "./reducers/authReducer";
import {fileReducer} from "./reducers/fileReducer";
import {shoppingListReducer} from "./reducers/shoppingListReducer";
import {financesReducer} from "./reducers/financesReducer";

const reducers = combineReducers({
    app: appReducer,
    header: headerReducer,
    auth: authReducer,
    file: fileReducer,
    finances: financesReducer,
    shopping: shoppingListReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, ReduxPromise)) );

