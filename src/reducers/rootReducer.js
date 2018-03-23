import { combineReducers } from 'redux';
import RandomLettersReducer from './RandomLettersReducer'
import validWordReducer from './makeValidWord'
import showValidReducer from './showValidWord'
import buttonStateReducer from './buttonState'

const rootReducer = combineReducers({
  randomLetters: RandomLettersReducer,
  validWord: validWordReducer,
  showValid: showValidReducer,
  buttonState: buttonStateReducer,
});

export default rootReducer
