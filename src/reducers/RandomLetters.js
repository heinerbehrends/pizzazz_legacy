import { REPLACE_LETTER, RANDOM_LETTERS } from '../actionTypes';

const randomLettersReducer = (state = '0000000', action) => {
  switch (action.type) {
    case RANDOM_LETTERS:
      return action.randomLetters;
    case REPLACE_LETTER:
      return action.randomLetters ? action.randomLetters : state;
    default:
      return state;
  }
};

export default randomLettersReducer;
