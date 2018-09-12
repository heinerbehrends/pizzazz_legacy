import { REPLACE_LETTER, SHOW_VALID, MAKE_MOVE,
         FIRST_PLAYER, SHOW_WINNER, START_GAME } from '../actionTypes'

export const startGameAction = game => ({
  game: game,
  type: START_GAME,
})

export const replaceLettersAction = (randomLetters, validWord) => ({
  randomLetters: randomLetters,
  validWord: validWord,
  type: REPLACE_LETTER,
})

export const showValidAction = index => ({
  type: SHOW_VALID,
  index: index,
})

export const makeMoveAction = (word, score, index, player) => ({
  type: MAKE_MOVE,
  word: word,
  score: score,
  index: index,
})

export const firstPlayerAction = boolean => ({
  type: FIRST_PLAYER,
  firstPlayer: boolean,
})


export const showWinnerAction = game => ({
  type: SHOW_WINNER,
  game: game,
})
