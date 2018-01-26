import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from '../actions'

const user = handleActions({
  [actions.loginUser](state, payload) {
    return { user_id: 5 };
  },
  [actions.logoutUser](state, payload) {
    return { user_id: 10 };
  },
  [actions.signuoUser](state, payload) {
    return { user_id: 15 };
  },
}, {});

export default combineReducers({
  user,
});
