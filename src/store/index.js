import {createStore, applyMiddleware, combineReducers} from 'redux';
import {rootReducer} from './reducers/index';
import {routerReducer} from "react-router-redux";

export default function configureStore() {
    const store = createStore(
        combineReducers({
            rootReducer,
            router: routerReducer
        }),

    );

    return store;
}