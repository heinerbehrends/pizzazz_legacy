import { SEND_NAME, MESSAGE_TOP } from '../actions/actionTypes';

const messageTopReducer = (state = 'Welcome to', action) => {
  switch (action.type) {
    case SEND_NAME:
      return 'Waiting for a new game';
    case MESSAGE_TOP: {
      return action.message;
    }
    default:
      return state;
  }
};

export default messageTopReducer;
