import { combineReducers } from 'redux';
import makeRandomLettersReducer from './makeRandomLetters'
import validWordReducer from './makeValidWord'

const rootReducer = combineReducers({
  randomLetters: makeRandomLettersReducer,
  validWord: validWordReducer
});

export default rootReducer
