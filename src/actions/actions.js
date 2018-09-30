import { REPLACE_LETTER, SHOW_VALID, SEND_SOLUTION,
         SHOW_WINNER, START_GAME, SEND_NAME } from '../actionTypes'

export const startGameAction = game => ({
  type: START_GAME,
  game,
})

export const replaceLettersAction = (randomLetters, validWord) => ({
  type: REPLACE_LETTER,
  randomLetters,
  validWord,
})

export const showValidAction = index => ({
  type: SHOW_VALID,
  index,
})

export const sendSolutionAction = solution => ({
  type: SEND_SOLUTION,
  solution,
})

export const showWinnerAction = game => ({
  type: SHOW_WINNER,
  game: game,
})


export const sendNameAction = name => ({
  type: SEND_NAME,
  name
})
