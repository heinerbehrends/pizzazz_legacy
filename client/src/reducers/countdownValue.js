import { SET_COUNTDOWN, DECREMENT_COUNTDOWN, START_GAME } from '../actionTypes';

const countdownValueReducer = (state = 40, action) => {
  switch (action.type) {
    case SET_COUNTDOWN:
      return action.value;
    case START_GAME:
      return action.game.seconds - 10;
    case DECREMENT_COUNTDOWN:
      return state - 1;
    default:
      return state;
  }
};

export default countdownValueReducer;
