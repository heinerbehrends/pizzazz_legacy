import { combineReducers } from 'redux';
import RandomLettersReducer from './RandomLetters'
import validWordReducer from './makeValidWord'
import showValidReducer from './showValidWord'
import gameStateReducer from './gameState'
import solutionsReducer from './solutions'
import gameDataReducer from './gameData'
import isCountdownReducer from './isCountdown'
import countdownValueReducer from './countdownValue'
import screenNameReducer from './screenName'

const rootReducer = combineReducers({
  randomLetters: RandomLettersReducer,
  screenName: screenNameReducer,
  validWord: validWordReducer,
  showValid: showValidReducer,
  gameState: gameStateReducer,
  isCountdown: isCountdownReducer,
  countdownValue: countdownValueReducer,
  solutions: solutionsReducer,
  gameData: gameDataReducer,
});

export default rootReducer
