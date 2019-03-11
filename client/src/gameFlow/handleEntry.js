import { put, take, select, fork, all } from 'redux-saga/effects';
import handleCountdown, { getCountdownValue } from '../ProgressBar/progressBarState';
import { messageAction } from '../Message/messageState';
import { JOIN_GAME } from '../Inputs/Buttons/buttonsState';
import { DECREMENT_COUNTDOWN, SET_COUNTDOWN } from '../ProgressBar/progressBarState';

export function* handleWaitingMessage() {
  while (true) {
    yield take(DECREMENT_COUNTDOWN);
    const value = yield select(getCountdownValue);
    yield put(messageAction(`A new game starts in ${value} seconds`));
  }
}

function* handleEntry() {
  const countdown = yield take('COUNTDOWN');
  const { value } = countdown;
  yield all([
    put({ type: SET_COUNTDOWN, value }),
    fork(handleCountdown),
    fork(handleWaitingMessage),
  ]);
}

export function* joinGameIO(socket) {
  yield take(JOIN_GAME);
  socket.emit('joinGame');
}

export default handleEntry;
