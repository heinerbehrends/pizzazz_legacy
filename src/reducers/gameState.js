import { SHOW_VALID, SEND_SOLUTION, SEND_NAME, SHOW_WINNER, START_GAME } from '../actionTypes'

const gameStateReducer = (state='init', action) => {
  switch (action.type) {
    case SEND_NAME:
      return 'waiting';
    case START_GAME:
      return 'start';
    case SHOW_VALID:
      if (action.index !== 0) {
        return 'solution';
      }
      else {
        return 'start';
      }
    case SEND_SOLUTION:
      return 'makeWordEnd';
    case SHOW_WINNER:
      return 'endGame'
    default:
      return state;
  }
}

export default gameStateReducer;
