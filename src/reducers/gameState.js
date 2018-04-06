import { RANDOM_LETTERS, SHOW_VALID, MAKE_MOVE } from '../actionTypes'

const gameStateReducer = (state='init', action) => {
  switch (action.type) {
    case RANDOM_LETTERS:
      return 'disabled';
    case SHOW_VALID:
      if (action.index !== 0) {
        return 'play';
      }
      else {
        return 'disabled';
      }
    case MAKE_MOVE:
      return 'disabled';
    default:
      return state;
  }
}

export default gameStateReducer;
