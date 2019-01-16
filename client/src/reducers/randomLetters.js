import { REPLACE_LETTER, RANDOM_LETTERS } from '../actions/actionTypes';

const randomLettersReducer = (state = '8888888', action) => {
  switch (action.type) {
    case RANDOM_LETTERS:
      return action.randomLetters.padEnd(7, '0');
    case REPLACE_LETTER:
      return action.randomLetters ? action.randomLetters : state;
    default:
      return state;
  }
};

export default randomLettersReducer;
