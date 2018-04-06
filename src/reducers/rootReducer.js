import { combineReducers } from 'redux';
import RandomLettersReducer from './RandomLettersReducer'
import validWordReducer from './makeValidWord'
import showValidReducer from './showValidWord'
import gameStateReducer from './gameState'
import makeMoveReducer from './makeMove'

const rootReducer = combineReducers({
  randomLetters: RandomLettersReducer,
  validWord: validWordReducer,
  showValid: showValidReducer,
  gameState: gameStateReducer,
  makeMove: makeMoveReducer,
});

export default rootReducer
