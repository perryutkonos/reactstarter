import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'

import configureStore from '../store/index';
import App from '../components/App/index'

import "../styles/main.scss"

if(process.env.NODE_ENV === "development"){
  require("./index.html")
}

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  )
});