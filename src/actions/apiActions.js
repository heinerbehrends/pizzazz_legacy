import { RANDOM_LETTERS, REPLACE_LETTER, SHOW_VALID, MAKE_MOVE,
  FIRST_PLAYER, SHOW_WINNER, START, STOP_COUNTDOWN, DECREMENT_COUNTDOWN } from '../actionTypes'
import axios from 'axios'

export const randomLettersAction = game => {
  return {
    type: RANDOM_LETTERS,
    string: game.randomLetters,
    game: game,
  }
}

export let countdownTimer = null;
export const startGameAction = (game) => {
  return function(dispatch) {
    dispatch(randomLettersAction(game));
    dispatch(startAction());
    countdownTimer = setInterval(() => { dispatch(decrementCountdownAction()) }, 1000);
  }
}

export const stopCountdownAction = countdownTimer => {
  clearInterval(countdownTimer)
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

export const firstPlayerAction = boolean => {
  return {
    type: FIRST_PLAYER,
    firstPlayer: boolean,
  }
}

export const sendNameAction = name => {
  return function(dispatch) {
    window.Echo.channel('pizzazz')
    .listen('StartGame', (event) => {
      dispatch(startGameAction(event.game));
    })

    window.Echo.channel('pizzazz')
    .listen('EndGame', (event) => {
      dispatch(showWinnerAction(event.game));
    });

    axios.post('/api/start', {
      screenName: name
    })
    .then((response) => {
      dispatch(firstPlayerAction(response.data.firstPlayer));
    });
  }
}

export const endCountdownAction = (countdownTimer) => {
  clearInterval(countdownTimer)
  return {
    type: STOP_COUNTDOWN,
  }
}

export const decrementCountdownAction = () => ({
  type: DECREMENT_COUNTDOWN,
})

export const endGameAction = (id, firstPlayer, makeMove) => {
  return function(dispatch) {
    axios.post('/api/endGame', {
      id: id,
      firstPlayer: firstPlayer,
      makeMove: makeMove,
    });
    dispatch(endCountdownAction());
  }
}

export const showWinnerAction = game => {
  return {
    type: SHOW_WINNER,
    game: game,
  }
}
