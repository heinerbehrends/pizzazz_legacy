import { combineReducers } from 'redux';
import randomLettersReducer from './randomLetters';
import scrabbleBoardReducer from './scrabbleBoard';
import isValidIndexReducer from './isValidIndex';
import screenNameReducer from './screenName';
import messageTopReducer from './messageTop';
import isCountdownReducer from './isCountdown';
import countdownValueReducer from './countdownValue';
import solutionsReducer from './solutions';
import gameDataReducer from './gameData';
import canJoinReducer from './canJoin';
import definitionReducer from './definition';

const rootReducer = combineReducers({
  randomLetters: randomLettersReducer,
  scrabbleBoard: scrabbleBoardReducer,
  isValidIndex: isValidIndexReducer,
  screenName: screenNameReducer,
  messageTop: messageTopReducer,
  isCountdown: isCountdownReducer,
  countdownValue: countdownValueReducer,
  solutions: solutionsReducer,
  gameData: gameDataReducer,
  canJoin: canJoinReducer,
  definition: definitionReducer,
});

export default rootReducer;
