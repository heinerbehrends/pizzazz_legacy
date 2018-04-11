import { RANDOM_LETTERS, START_GAME, SHOW_VALID, MAKE_MOVE,
  FIRST_PLAYER, SHOW_WINNER, OPPONENT } from '../actionTypes'

const gameStateReducer = (state='init', action) => {
  switch (action.type) {
    case FIRST_PLAYER:
      if (action.firstPlayer) {
        return 'waiting';
      }
      else {
        return 'makeWord';
      }
    case OPPONENT:
      return 'makeWord';
    case SHOW_VALID:
      if (action.index !== 0) {
        return 'play';
      }
      else {
        return 'makeWord';
      }
    case MAKE_MOVE:
      return 'makeWordEnd';
    case SHOW_WINNER:
      return 'showWinner'
    default:
      return state;
  }
}

export default gameStateReducer;
