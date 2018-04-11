import { RANDOM_LETTERS, SHOW_WINNER } from '../actionTypes'

const gameEndReducer = (state = null, action) => {
  switch (action.type) {
    case RANDOM_LETTERS:
      return action.game;
    case SHOW_WINNER:
      return action.game;
    default:
      return state;
  }
}

export default gameEndReducer
