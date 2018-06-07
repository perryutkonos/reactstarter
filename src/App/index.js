import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import {bindActionCreators} from 'redux'

import {changeUser} from './store/reducers'

import "./style.scss";

import Header from "./layout/Header";

import Home from "./components/Home";
import UserCheckout from "./components/UserCheckout";
import About from "./components/About";
import List from "./components/List";
import Detail from "./components/Detail";


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="app-inner">

                <Header user={this.props.user.name}/>
                <main>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/users_checkout' component={({...props}) => <UserCheckout {...props} changeUser={this.props.changeUser}/>}/>
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

function mapStateToProps(state) {
    return {
        user: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeUser: bindActionCreators(changeUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)