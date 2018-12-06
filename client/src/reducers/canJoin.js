// @flow
import { SEND_NAME, START_GAME } from '../actions/actionTypes';

const canJoinReducer = (state = false, action) => {
  switch (action.type) {
    case SEND_NAME:
      return true;
    case START_GAME:
      return false;
    default:
      return state;
  }
};

export default canJoinReducer;
