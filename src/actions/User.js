import { handleActions } from 'redux-actions';

const user = handleActions({
  [actions.addUser](state, { payload: { user } }) {
    return user;
  },
}, {});

export default users;
