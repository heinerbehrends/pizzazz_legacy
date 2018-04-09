import { FIRST_PLAYER } from '../actionTypes'

const firstPlayer = (state = null, action) => {
  switch (action.type) {
    case FIRST_PLAYER:
      return action.firstPlayer;
    default:
      return state;
  }
}

export default firstPlayer;
