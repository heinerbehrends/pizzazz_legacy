import { combineReducers } from 'redux';
import RandomLettersReducer from './RandomLetters'
import validWordReducer from './makeValidWord'
import showValidReducer from './showValidWord'
import gameStateReducer from './gameState'
import makeMoveReducer from './makeMove'
import firstPlayerReducer from './firstPlayer'
import gameEndReducer from './gameEnd'

const rootReducer = combineReducers({
  randomLetters: RandomLettersReducer,
  validWord: validWordReducer,
  showValid: showValidReducer,
  gameState: gameStateReducer,
  firstPlayer: firstPlayerReducer,
  makeMove: makeMoveReducer,
  gameEnd: gameEndReducer,
});

export default rootReducer
