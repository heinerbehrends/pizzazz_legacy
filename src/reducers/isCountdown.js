import { START_GAME, STOP_COUNTDOWN } from '../actionTypes'

const countdownReducer = (state = false, action) => {
  switch (action.type) {
    case START_GAME:
      return true;
    case STOP_COUNTDOWN:
      return false;
    default:
      return state;
  }
}

export default countdownReducer;
