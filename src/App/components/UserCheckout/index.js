import React, {Component} from 'react';

export default class UserCheckout extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="page-inner">
              <button onClick={this.props.changeUser}>Переключить юзера</button>
            </div>
        )
    }
}