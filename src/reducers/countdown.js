import { OPPONENT } from '../actionTypes'

const countdownReducer = (state = false, action) => {
  switch (action.type) {
    case OPPONENT:
      return true;
    default:
      return state;
  }
}

export default countdownReducer;
