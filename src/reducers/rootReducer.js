import { combineReducers } from 'redux';
import RandomLettersReducer from './RandomLettersReducer'
import validWordReducer from './makeValidWord'
import showValidReducer from './showValidWord'
import buttonStateReducer from './buttonState'
import makeMoveReducer from './makeMove'

const rootReducer = combineReducers({
  randomLetters: RandomLettersReducer,
  validWord: validWordReducer,
  showValid: showValidReducer,
  buttonState: buttonStateReducer,
  makeMove: makeMoveReducer,
});

export default rootReducer
