import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux'

import App from '../components/App/index'
import Html from '../components/Html'

import configureStore from '../store/index';
const store = configureStore();

export default function handleRender(req, res) {

  const appComponent = (
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App/>
      </StaticRouter>
    </Provider>
  );

  const html = renderToString(
    <Html
      component={appComponent}
    />
  );

  res.send(html)
}