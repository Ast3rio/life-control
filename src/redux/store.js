import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./reducers/appReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import ReduxPromise from 'redux-promise';
import {headerReducer} from "./reducers/headerReducer";
import {authReducer} from "./reducers/authReducer";
import {fileReducer} from "./reducers/fileReducer";

const reducers = combineReducers({
    app: appReducer,
    header: headerReducer,
    auth: authReducer,
    file: fileReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, ReduxPromise)) );

