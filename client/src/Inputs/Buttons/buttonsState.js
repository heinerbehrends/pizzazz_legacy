import { take, select } from 'redux-saga/effects';
import { getScreenName } from '../ScreenName/screenNameState';
import { SEND_NAME } from '../ScreenName/screenNameState';
import { START_GAME } from '../../gameFlow/gameFlowState';

export const SEND_SOLUTION = 'SEND_SOLUTION';
export const JOIN_GAME = 'JOIN_GAME';

export const canJoinReducer = (state = false, action) => {
  switch (action.type) {
    case SEND_NAME:
      return true;
    case START_GAME:
      return false;
    default:
      return state;
  }
};

export const joinGameAction = () => ({
  type: JOIN_GAME,
});
  

export const sendSolutionAction = solution => ({
  type: SEND_SOLUTION,
  solution,
});
  
export function* sendSolutionIO(socket) {
  while (true) {
    const action = yield take(SEND_SOLUTION);
    const { solution } = action;
    const name = yield select(getScreenName);
    socket.emit('sendSolution', { solution, name });
  }
}
  
  