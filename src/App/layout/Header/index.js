import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import "./style.scss";

export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <header>
                <nav>
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink exact={true} activeClassName="active" className="nav-list__item-link" to='/'>
                                Домашняя
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink activeClassName="active" className="nav-list__item-link" to='/about'>
                                О чем-то
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink activeClassName="active" className="nav-list__item-link" to='/list'>
                                Список c деталками
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}