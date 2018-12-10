import { MESSAGE } from '../actions/actionTypes';

const messageTopReducer = (state = 'Welcome to', action) => {
  switch (action.type) {
    case MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export default messageTopReducer;
