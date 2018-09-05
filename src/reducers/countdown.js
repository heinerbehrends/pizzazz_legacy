import { OPPONENT, END_COUNTDOWN } from '../actionTypes'

const countdownReducer = (state = false, action) => {
  switch (action.type) {
    case OPPONENT:
      return true;
    case END_COUNTDOWN:
      return false;
    default:
      return state;
  }
}

export default countdownReducer;
