import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import "./style.scss";

import Header from "../../layout/Header";

import Home from "../Home";
import UserCheckout from "../UserCheckout";
import About from "../About";
import List from "../List";
import Detail from "../Detail";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="app-inner">
        <Header/>
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/users_checkout' component={UserCheckout}/>
            <Route exact path='/list' component={List}/>
            <Route path='/list/:code' component={Detail}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App