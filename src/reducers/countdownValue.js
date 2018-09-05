import { DECREMENT_COUNTDOWN } from '../actionTypes'

const countdownValueReducer = (state = 40, action) => {
  switch (action.type) {
    case DECREMENT_COUNTDOWN:
      return state -1;
    default:
      return state;
  }
}

export default countdownValueReducer;
