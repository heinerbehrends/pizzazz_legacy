import { FIRST_PLAYER } from '../actionTypes'

const firstPlayer = (state = false, action) => {
  switch (action.type) {
    case FIRST_PLAYER:
      return action.firstPlayer;
    default:
      return state;
  }
}

export default firstPlayer;
