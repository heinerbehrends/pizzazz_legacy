import { SAVE_GAME, SHOW_WINNER } from '../actionTypes'

const gameDataReducer = (state = null, action) => {
  switch (action.type) {
    case SAVE_GAME:
      return action.game;
    case SHOW_WINNER:
      return action.game;
    default:
      return state;
  }
}

export default gameDataReducer
