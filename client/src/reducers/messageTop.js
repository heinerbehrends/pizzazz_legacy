import { SEND_NAME, MESSAGE } from '../actions/actionTypes';

const messageTopReducer = (state = 'Welcome to', action) => {
  switch (action.type) {
    case SEND_NAME:
      return 'Waiting for a new game';
    case MESSAGE: {
      return action.message;
    }
    default:
      return state;
  }
};

export default messageTopReducer;
