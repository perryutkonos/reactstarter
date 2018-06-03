import React, {Component} from 'react';
import {list} from "../../data/list";

import ListItem from "./ListItem";

export default class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const userArray = list;

        const userList = userArray.map((user, index) =>
            <ListItem key={user.id} user={user}/>
        );

        return (

            <div className="page-inner">
                <h1>Список</h1>
                {userList}
            </div>
        )
    }
}