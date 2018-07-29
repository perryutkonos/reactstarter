import React, {Component} from 'react';
import {list} from "../../data/list";

export default class Detail extends Component {

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
        <h2>{this.state.user.name}</h2>
        <p>
          {this.state.user.description}
        </p>
      </div>
    )
  }
}