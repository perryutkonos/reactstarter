import React from 'react'
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux'

import configureStore from '../store/index';
const store = configureStore();

import App from '../components/App/index'
import Html from '../components/Html'

export default function handleRender() {

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter history={history}>
        <App/>
      </StaticRouter>
    </Provider>
  );

  // Send the rendered page back to the client
 return Html(html)
}