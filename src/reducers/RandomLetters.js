import { START_GAME, REPLACE_LETTER } from '../actionTypes'

const RandomLettersReducer = (state = 'PIZZAZZ', action) => {
  switch (action.type) {
    case START_GAME:
      return action.game.randomLetters;
    case REPLACE_LETTER:
      return action.randomLetters ? action.randomLetters : state
    default:
      return state;
  }
}

export default RandomLettersReducer
