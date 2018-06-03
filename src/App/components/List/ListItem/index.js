import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class ListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {name, code} = this.props.user;
        return (

            <div className="user-list__item">

                <h2>
                    <NavLink className="nav-list__item-link" to={`/list/${code}`}>{name}</NavLink>
                </h2>
            </div>
        )
    }
}