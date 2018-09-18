import { REPLACE_LETTER, SHOW_VALID, MAKE_MOVE,
         FIRST_PLAYER, SHOW_WINNER, START_GAME, SEND_NAME } from '../actionTypes'

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

export const makeMoveAction = (word, score, index) => ({
  type: MAKE_MOVE,
  word,
  score,
  index,
})

export const firstPlayerAction = firstPlayer => ({
  type: FIRST_PLAYER,
  firstPlayer,
})


export const showWinnerAction = game => ({
  type: SHOW_WINNER,
  game: game,
})


export const sendNameAction = name => ({
  type: SEND_NAME,
  name
})
