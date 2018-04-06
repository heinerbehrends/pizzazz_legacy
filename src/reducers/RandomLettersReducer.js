import { replaceLetter } from '../scrabbleLogic/gameLogic'
import { RANDOM_LETTERS, REPLACE_LETTER } from '../actionTypes'

const RandomLettersReducer = (state = '0000000', action) => {
  switch (action.type) {
    case RANDOM_LETTERS:
      return action.string;
    case REPLACE_LETTER:
      if (action.target === 'randomLetters') {
        return replaceLetter(state, action.letter, action.index);
      }
      else {
        return state;
      }
    default:
      return state;
  }
}

export default RandomLettersReducer
