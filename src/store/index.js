import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/user';

export default function configureStore() {
    const store = createStore(
        combineReducers({
            userReducer
        }),

    );

    return store;
}