import { connect } from 'react-redux';
import Header from '../components/Header';
import React from 'react';
import * as actionCreators from '../actions';

const App = (state, actions) => {
  console.log(actions);
  return (
    <Header user_id={state.user.user_id} loginUser={actions.loginUser} />
  );
}

const mapStateToProps = state => {
  console.log(state);
  return { ...state };
};

export default connect(mapStateToProps, actionCreators)(Header);
