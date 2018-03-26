import { MAKE_RANDOM_LETTERS, MAKE_RANDOM_LETTERS_VOWELS, REPLACE_LETTER, SHOW_VALID} from './actionTypes'
import { makeRandomLetters, makeRandomLettersVowels } from './scrabbleLogic/makeRandomLetters'
import { bagOfLetters } from './Constants'

export const makeRandomLettersAction = () => {
  return {
    type: MAKE_RANDOM_LETTERS,
    string: makeRandomLetters(7, bagOfLetters)
  }
}

export const makeRandomLettersVowelsAction = () => {
  return {
    type: MAKE_RANDOM_LETTERS_VOWELS,
    string: makeRandomLettersVowels(2, 7)
  }
}

export const replaceLetterAction = (letter, target, index) => {
  return {
    type: REPLACE_LETTER,
    letter: letter,
    target: target,
    index: index,
  }
}

export const showValidAction = (index, score) => {
  return {
    type: SHOW_VALID,
    index: index,
  }
}
