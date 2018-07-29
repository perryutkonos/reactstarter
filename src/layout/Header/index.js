import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';

import "./style.scss";

const Header = ({name}) => (

  <header className="header">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <NavLink exact={true} activeClassName="active" className="nav-link" to='/'>
        Домашняя
      </NavLink>

      <NavLink activeClassName="active" className="nav-link" to='/about'>
        О чем-то
      </NavLink>

      <NavLink activeClassName="active" className="nav-link" to='/users_checkout'>
        Переключить юзера
      </NavLink>

      <NavLink activeClassName="active" className="nav-link" to='/list'>
        Список c деталками
      </NavLink>

    </nav>
    <div className="header-user">
      {name}
    </div>
  </header>
)

const connector = connect(
  ({userReducer}) => ({...userReducer})
);

export default withRouter (connector(Header));