import { combineReducers } from 'redux';
import { letterDisplayReducer } from '../GameDnd/LetterDisplay/letterDisplayState';
import scrabbleBoardReducer, { isValidIndexReducer } from '../GameDnd/ScrabbleBoard/scrabbleBoardState';
import { screenNameReducer } from '../Inputs/ScreenName/screenNameState';
import { canJoinReducer } from '../Inputs/Buttons/buttonsState';
import messageTopReducer from '../Message/messageState';
import { isCountdownReducer, countdownValueReducer } from '../ProgressBar/progressBarState';
import { solutionsReducer } from '../gameFlow/solutions/solutionsState';
import gameDataReducer from '../gameFlow/gameFlowState';
import { definitionReducer } from '../Definitions/definitionsState';

const rootReducer = combineReducers({
  letterDisplay: letterDisplayReducer,
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
