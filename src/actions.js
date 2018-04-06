import { RANDOM_LETTERS, REPLACE_LETTER, SHOW_VALID,
         MAKE_MOVE, NEW_GAME } from './actionTypes'
import axios from 'axios'

export const randomLettersAction = string => {
  return {
    type: RANDOM_LETTERS,
    string: string
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

export const newGameAction = id => {
  return {
    type: NEW_GAME,
    id,
  }
}

export function sendNameAction(name) {
  return function(dispatch) {
    axios.post('/api/screenName', {
      screenName: name
    })
    .then(function(response) {
      let gameId = response.data.game.id;
      dispatch(newGameAction(gameId))
      window.Echo.channel('pizzazz' + gameId)
          .listen('StartGame', (event) => {
              console.log(event.randomLetters);
              dispatch(randomLettersAction(event.randomLetters));
          });
    })
    .catch(function(error) {
      console.log(error);
    });
  }
}
