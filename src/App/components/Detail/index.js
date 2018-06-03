import React, {Component} from 'react';

import "./style.scss"

import {list} from "../../data/list";

export default class Detail extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {


        list.forEach(item => {

            if (item.code === this.props.match.params.code) {
                this.setState({
                    user: item
                });
            }
        })
    }

    render() {

        return (

            <div className="page-inner">
                <h1>{this.state.user.name}</h1>
                <p>
                    {this.state.user.description}
                </p>
            </div>
        )
    }
}