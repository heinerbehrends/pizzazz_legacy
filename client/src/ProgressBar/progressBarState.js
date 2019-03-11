import { delay } from 'redux-saga';
import { put, select, call } from 'redux-saga/effects';
import { START_GAME, END_GAME } from '../gameFlow/gameFlowState';

export const DECREMENT_COUNTDOWN = 'DECREMENT_COUNTDOWN';
export const COUNTDOWN = 'COUNTDOWN';
export const SET_COUNTDOWN = 'SET_COUNTDOWN';

export const countdownValueReducer = (state = 40, action) => {
  switch (action.type) {
    case SET_COUNTDOWN:
      return action.value;
    case START_GAME:
      return action.game.seconds - 10;
    case DECREMENT_COUNTDOWN:
      return state - 1;
    default:
      return state;
  }
};

export const isCountdownReducer = (state = false, action) => {
  switch (action.type) {
    case START_GAME:
      return true;
    case END_GAME:
      return false;
    default:
      return state;
  }
};

export const countdownAction = value => ({
  type: COUNTDOWN,
  value,
});

export const subscribeCountdown = (socket, emit) => socket.on(
  'countdown', value => emit(countdownAction(value))
);

export const getCountdownValue = state => state.countdownValue;

function* handleCountdown() {
  while (true) {
    const value = yield select(getCountdownValue);
    if (value === 0) {
      return;
    }
    yield put({ type: DECREMENT_COUNTDOWN });
    yield call(delay, 1000);
  }
}

export default handleCountdown;
