import { delay } from 'redux-saga';
import { put, select, take, call } from 'redux-saga/effects'; // eslint-disable-line
import { DECREMENT_COUNTDOWN, NEW_SOLUTION } from '../actions/actionTypes';
import { messageAction } from '../actions/actionCreators';
import { getMaxLength } from '../clientLogic/findWinner';

// const getValidWords = state => state.gameData.validWords;
const getCountdownValue = state => state.countdownValue;

export function* handleStartMessages(validWords) {
  // const validWords = yield select(getValidWords);
  yield put(messageAction(`There are ${validWords.length} possible words`));
  yield call(delay, 4000);
  yield put(messageAction(`The longest word is ${getMaxLength(validWords)} letters long`));
}

export function* handleWaitingMessage() {
  while (true) {
    yield take(DECREMENT_COUNTDOWN);
    const value = yield select(getCountdownValue);
    yield put(messageAction(`A new game starts in ${value} seconds`));
  }
}

export function* handleSolutions() {
  while (true) {
    const { solution } = yield take(NEW_SOLUTION);
    yield put(messageAction(
      `${solution.name.toUpperCase()} played a ${solution.solution.length}-letter word`,
    ));
  }
}
