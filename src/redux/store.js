import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./reducers/appReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import ReduxPromise from 'redux-promise';

const reducers = combineReducers({
    app: appReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, ReduxPromise)) );

