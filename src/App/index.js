import React, {Component} from 'react';
import {Route, Switch, IndexRoute} from 'react-router-dom';

import "./style.scss";

import Header from "./layout/Header";

import Home from "./components/Home";
import About from "./components/About";
import List from "./components/List";
import Detail from "./components/Detail";

export default class App extends Component {

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
                        <Switch>
                            <Route exact path='/list' component={List}/>
                            <Route path='/list/:code' component={Detail}/>
                        </Switch>
                    </Switch>
                </main>
            </div>
        )
    }
}