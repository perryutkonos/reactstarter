import React from 'react'
import ReactDOMServer, {renderToString, renderToNodeStream} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux'

import {ServerStyleSheet} from 'styled-components'

import configureStore from '../store/index';

const store = configureStore();

import App from '../components/App/index'
import Html from '../components/Html'


export default function handleRender(req, res) {

  const appComponent = (
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App/>
      </StaticRouter>
    </Provider>
  );

  const sheet = new ServerStyleSheet();
  const markup = renderToString(sheet.collectStyles(appComponent))

  const styleTags = sheet.getStyleElement() // or sheet.getStyleElement()

  const html = renderToString(
    <Html
      markup={markup}
      styleTags={styleTags}
    />
  );

  res.send(html)

}