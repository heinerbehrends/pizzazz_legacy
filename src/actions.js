import { RANDOM_LETTERS, REPLACE_LETTER, SHOW_VALID, MAKE_MOVE,
  FIRST_PLAYER, START_GAME, END_GAME, SHOW_WINNER, OPPONENT } from './actionTypes'
import axios from 'axios'

export const randomLettersAction = game => {
  return {
    type: RANDOM_LETTERS,
    string: game.randomLetters,
    game: game,
  }
}

export function startGameAction(game) {
  return function(dispatch) {
    dispatch(randomLettersAction(game));
    dispatch(opponentAction())
  }
}


export const opponentAction = () => {
  return {
    type: OPPONENT,
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

export const firstPlayerAction = boolean => {
  return {
    type: FIRST_PLAYER,
    firstPlayer: boolean,
  }
}

export function sendNameAction(name) {
  return function(dispatch) {
    window.Echo.channel('pizzazz')
    .listen('StartGame', (event) => {
      dispatch(startGameAction(event.game));
    })

    window.Echo.channel('pizzazz')
    .listen('EndGame', (event) => {
      dispatch(showWinnerAction(event.game));
    });

    axios.post('/api/screenName', {
      screenName: name
    })
    .then((response) => {
      dispatch(firstPlayerAction(response.data.firstPlayer));
    });
  }
}

export function endGameAction(firstPlayer, makeMove) {
  return function(dispatch) {
    axios.post('/api/endGame', {
      firstPlayer: firstPlayer,
      makeMove: makeMove,
    })
  }
}

export const showWinnerAction = (game) => {
  return {
    type: SHOW_WINNER,
    game: game,
  }
}
