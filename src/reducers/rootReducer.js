import { combineReducers } from 'redux';
import makeRandomLettersReducer from './makeRandomLetters'

const rootReducer = combineReducers({randomLetters: makeRandomLettersReducer});

export default rootReducer
