import { delay } from 'redux-saga';
import {
  put, select, call,
} from 'redux-saga/effects';
import { DECREMENT_COUNTDOWN } from '../actions/actionTypes';

function* handleCountdown() {
  while (true) {
    const value = yield select(state => state.countdownValue);
    if (value === 0) {
      return;
    }
    yield put({ type: DECREMENT_COUNTDOWN });
    yield call(delay, 1000);
  }
}

export default handleCountdown;
