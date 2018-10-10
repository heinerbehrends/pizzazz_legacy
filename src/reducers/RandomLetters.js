import { REPLACE_LETTER, RANDOM_LETTERS } from '../actionTypes';

const RandomLettersReducer = (state = '8888888', action) => {
  switch (action.type) {
    case RANDOM_LETTERS:
      return action.randomLetters;
    // case START_GAME:
    //   return action.game.randomLetters
    case REPLACE_LETTER:
      return action.randomLetters ? action.randomLetters : state;
    default:
      return state;
  }
};

export default RandomLettersReducer;
