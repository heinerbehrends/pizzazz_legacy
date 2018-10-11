import { START_GAME, END_GAME } from '../actionTypes';

const countdownReducer = (state = false, action) => {
  switch (action.type) {
    case START_GAME:
      return true;
    case END_GAME:
      return false;
    default:
      return state;
  }
};

export default countdownReducer;
