import { bagOfLetters } from '../Constants'
import { makeRandomLetters, makeRandomLettersVowels } from '../scrabbleLogic/makeRandomLetters'

const RandomLettersReducer = (state = '0000000', action) => {
  switch (action.type) {
    case 'makeRandomLetters':
      return makeRandomLetters(bagOfLetters, 7);
    case 'makeRandomLettersVowels':
      return makeRandomLettersVowels(2, 7);
    case 'replaceLetter':
      if (action.target === 'randomLetters') {
        return state.substring(0, action.index)
                    .concat(action.letter)
                    .concat(state.substring(action.index + 1));
      }
      else {
        return state;
      }
    default:
      return state;
  }
}

export default RandomLettersReducer
