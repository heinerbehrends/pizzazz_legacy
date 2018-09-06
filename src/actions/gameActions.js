import { RANDOM_LETTERS, REPLACE_LETTER, SHOW_VALID, MAKE_MOVE,
  FIRST_PLAYER, SHOW_WINNER, START } from '../actionTypes'

export const randomLettersAction = game => {
  return {
    type: RANDOM_LETTERS,
    string: game.randomLetters,
    game: game,
  }
}

export const startAction = () => {
  return {
    type: START,
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

export const showValidAction = index => {
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

export const firstPlendGameActionayerAction = boolean => {
  return {
    type: FIRST_PLAYER,
    firstPlayer: boolean,
  }
}


export const showWinnerAction = game => {
  return {
    type: SHOW_WINNER,
    game: game,
  }
}
