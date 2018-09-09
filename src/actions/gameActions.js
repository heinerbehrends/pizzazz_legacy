import { RANDOM_LETTERS, REPLACE_LETTER, SHOW_VALID, MAKE_MOVE,
  FIRST_PLAYER, SHOW_WINNER, START_GAME, SAVE_GAME } from '../actionTypes'

export const startGameAction = (game) => {
  return dispatch => {
    dispatch(saveGameAction(game));
    dispatch(randomLettersAction(game.randomLetters));
    dispatch(startAction());
  }
}

export const saveGameAction = game => ({
  type: SAVE_GAME,
  game: game,
})

export const randomLettersAction = string => ({
  type: RANDOM_LETTERS,
  string: string,
})

export const startAction = () => ({
  type: START_GAME,
})

export const replaceLetterAction = (letter, target, index) => ({
  type: REPLACE_LETTER,
  letter: letter,
  target: target,
  index: index,
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
