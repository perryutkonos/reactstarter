import React from 'react'
import {render} from 'react-dom'

import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';

import createHistory from "history/createBrowserHistory";
import {
    ConnectedRouter,
    routerMiddleware,
    push
} from "react-router-redux";
import configureStore from './App/store';

import App from './App'

import "./index.html"

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = configureStore(middleware);

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('app')
    )
});