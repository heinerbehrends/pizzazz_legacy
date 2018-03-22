import { combineReducers } from 'redux';
import RandomLettersReducer from './RandomLetters'
import validWordReducer from './makeValidWord'

const rootReducer = combineReducers({
  randomLetters: RandomLettersReducer,
  validWord: validWordReducer
});

export default rootReducer
