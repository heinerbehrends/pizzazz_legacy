import { delay } from 'redux-saga';
import {
  put, select, take, call,
} from 'redux-saga/effects';
import {
  DECREMENT_COUNTDOWN, MESSAGE, NEW_SOLUTION,
} from '../actions/actionTypes';

import { getMaxLength } from '../clientLogic/gameLogic';

const getValidWords = state => state.gameData.validWords;
const getCountdownValue = state => state.countdownValue;

export function* handleStartMessages() {
  const validWords = yield select(getValidWords);
  let message = `There are ${validWords.length} possible words`;
  yield put({ type: MESSAGE, message });
  yield call(delay, 5000);

  message = `The longest word is ${getMaxLength(validWords)} letters long`;
  yield put({ type: MESSAGE, message });
}

export function* handleWaitingMessage() {
  let value = yield select(getCountdownValue);
  yield call(delay, 500);
  value -= 2;
  while (true) {
    yield take(DECREMENT_COUNTDOWN);
    const message = `A new game starts in ${value} seconds`;
    yield put({ type: MESSAGE, message });
    value -= 1;
    if (value < 0) {
      break;
    }
  }
}

export function* handleSolutions() {
  while (true) {
    const { solution } = yield take(NEW_SOLUTION);
    yield put({
      type: MESSAGE,
      message: `${solution.name.toUpperCase()} played a \
                ${solution.solution.length}-letter word`,
    });
  }
}
