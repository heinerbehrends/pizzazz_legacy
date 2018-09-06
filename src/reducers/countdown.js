import { RANDOM_LETTERS, STOP_COUNTDOWN } from '../actionTypes'

const countdownReducer = (state = false, action) => {
  switch (action.type) {
    case RANDOM_LETTERS:
      return true;
    case STOP_COUNTDOWN:
      return false;
    default:
      return state;
  }
}

export default countdownReducer;
