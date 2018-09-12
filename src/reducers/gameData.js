import { SHOW_WINNER, START_GAME } from '../actionTypes'

const gameDataReducer = (state = null, action) => {
  switch (action.type) {
    case START_GAME:
      return action.game;
    case SHOW_WINNER:
      return action.game;
    default:
      return state;
  }
}

export default gameDataReducer
