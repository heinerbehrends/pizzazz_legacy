import { SHOW_VALID, SEND_SOLUTION, SEND_NAME, SHOW_WINNER, START_GAME } from '../actionTypes'

const gameStateReducer = (state='init', action) => {
  switch (action.type) {
    case SEND_NAME:
      return 'waiting';
    case START_GAME:
      return 'makeWord';
    case SHOW_VALID:
      if (action.index !== 0) {
        return 'play';
      }
      else {
        return 'makeWord';
      }
    case SEND_SOLUTION:
      return 'makeWordEnd';
    case SHOW_WINNER:
      return 'showWinner'
    default:
      return state;
  }
}

export default gameStateReducer;
