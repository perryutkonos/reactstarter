import React from 'react'
import { renderToString } from 'react-dom/server'
import {Provider} from 'react-redux'
import createHistory from "history/createBrowserHistory";
import {ConnectedRouter, routerMiddleware} from "react-router-redux";
import configureStore from '../store/index';

import App from '../components/App/index'
import Html from '../components/Html'

const history = createHistory();
const middleware = routerMiddleware(history);

export default function handleRender(req, res) {

  // Create a new Redux store instance
  const store = configureStore(middleware);

  const html = renderToString(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
);

  // Send the rendered page back to the client
  res.send(Html(html))
}