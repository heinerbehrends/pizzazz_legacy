import { DECREMENT_COUNTDOWN, START_GAME } from '../actionTypes'

const countdownValueReducer = (state = 15, action) => {
  switch (action.type) {
    case START_GAME:
      return 15
    case DECREMENT_COUNTDOWN:
      return state -1
    default:
      return state
  }
}

export default countdownValueReducer
