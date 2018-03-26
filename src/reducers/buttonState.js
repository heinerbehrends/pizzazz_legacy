import { MAKE_RANDOM_LETTERS, MAKE_RANDOM_LETTERS_VOWELS, SHOW_VALID, MAKE_MOVE } from '../actionTypes'

const buttonStateReducer = (state='init', action) => {
  switch (action.type) {
    case MAKE_RANDOM_LETTERS:
      return 'disabled';
    case MAKE_RANDOM_LETTERS_VOWELS:
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

export default buttonStateReducer;
