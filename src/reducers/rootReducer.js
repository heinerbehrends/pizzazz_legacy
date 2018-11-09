import { combineReducers } from 'redux';
import randomLettersReducer from './RandomLetters';
import validWordReducer from './makeValidWord';
import showValidReducer from './showValidWord';
import solutionsReducer from './solutions';
import messageTopReducer from './messageTop';
import gameDataReducer from './gameData';
import isCountdownReducer from './isCountdown';
import countdownValueReducer from './countdownValue';
import screenNameReducer from './screenName';
import canJoinReducer from './canJoin';

const rootReducer = combineReducers({
  randomLetters: randomLettersReducer,
  screenName: screenNameReducer,
  validWord: validWordReducer,
  showValid: showValidReducer,
  messageTop: messageTopReducer,
  isCountdown: isCountdownReducer,
  countdownValue: countdownValueReducer,
  solutions: solutionsReducer,
  gameData: gameDataReducer,
  canJoin: canJoinReducer,
});

export default rootReducer;
