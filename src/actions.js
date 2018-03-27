import { MAKE_RANDOM_LETTERS, MAKE_RANDOM_LETTERS_VOWELS, REPLACE_LETTER,
        SHOW_VALID, MAKE_MOVE } from './actionTypes'
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

export const showValidAction = (index) => {
  return {
    type: SHOW_VALID,
    index: index,
  }
}

export const makeMoveAction = (word, score, index, player) => {
  return {
    type: MAKE_MOVE,
    word: word,
    score: score,
    index: index,
    player: 'local'
  }
}
