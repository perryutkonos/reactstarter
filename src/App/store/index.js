import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';

export default function configureStore(middleware) {
    const store = createStore(rootReducer, applyMiddleware(middleware))

    return store;
}