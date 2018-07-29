import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from "../../layout/Header";
import Home from "../Home";
import UserCheckout from "../UserCheckout";
import About from "../About";
import List from "../List";
import Detail from "../Detail";

import "bootstrap/scss/bootstrap.scss"
import "./style.scss";

import logo from "../../resources/logo.jpg"

const App = () => (

  <div className="container">
    <div className="jumbotron">
      <div className='jumbotron-inner'>
        <h1 className="display-4">Server Side Render!</h1>
        <div className="jumbotron-logo">
          <img src={logo} alt=""/>
        </div>

      </div>

    </div>
    <Header/>
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/users_checkout' component={UserCheckout}/>
        <Route exact path='/list' component={List}/>
        <Route exact path='/list/:code' component={Detail}/>
      </Switch>
    </main>
  </div>
);

export default App