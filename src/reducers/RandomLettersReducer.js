import { bagOfLetters } from '../Constants'
import { replaceLetter } from '../scrabbleLogic/gameLogic'
import { MAKE_RANDOM_LETTERS, MAKE_RANDOM_LETTERS_VOWELS, REPLACE_LETTER } from '../actionTypes'

const RandomLettersReducer = (state = '0000000', action) => {
  switch (action.type) {
    case MAKE_RANDOM_LETTERS:
      return action.string;
    case MAKE_RANDOM_LETTERS_VOWELS:
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
