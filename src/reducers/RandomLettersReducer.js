import { bagOfLetters } from '../Constants'
import { makeRandomLetters, makeRandomLettersVowels } from '../scrabbleLogic/makeRandomLetters'
import { replaceLetter } from '../scrabbleLogic/gameLogic'

const RandomLettersReducer = (state = '0000000', action) => {
  switch (action.type) {
    case 'makeRandomLetters':
      return makeRandomLetters(bagOfLetters, 7);
    case 'makeRandomLettersVowels':
      return makeRandomLettersVowels(2, 7);
    case 'replaceLetter':
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
