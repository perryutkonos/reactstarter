import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from "../../store/reducers/user";

class UserCheckout extends React.Component {

  state = {
    userName: this.props.name
  };

  onChange = (event) =>{
    this.setState({userName: event.target.value});
  };

  changeUser = () => {
    const {changeUser} = this.props;
    changeUser(this.state.userName)
  };

  render() {
    return (
      <div className="page-inner">
        <h2>Смена пользователя</h2>
        <input type="text" value={this.state.userName} onChange={this.onChange}/>
        <button onClick={this.changeUser}>Переключить юзера</button>
      </div>
    );
  }
}

const connector = connect(
  ({userReducer}) => ({...userReducer}),
  dispatch => bindActionCreators(actions, dispatch),
);

export default connector(UserCheckout);