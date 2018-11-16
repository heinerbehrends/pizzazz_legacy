import { delay } from 'redux-saga';
import {
  put, select, take, call, fork, cancel,
} from 'redux-saga/effects';
import {
  DECREMENT_COUNTDOWN, END_DRAG, START_GAME, SET_COUNTDOWN, END_GAME,
} from '../actions/actionTypes';
import { replaceLettersAction, isValidIndexAction } from '../actions/actionCreators';
import { updateLetters } from '../clientLogic/gameLogic';
import getIsValidIndex from '../clientLogic/getIsValidIndex';
import handleWinner, { getValidWords } from './handleWinner';
import {
  handleStartMessages,
  handleWaitingMessage,
  handleSolutions,
} from './messages';


function* handleCountdown() {
  while (true) {
    const countdownValue = yield select(state => state.countdownValue);
    if (countdownValue === 0) {
      return;
    }
    yield put({ type: DECREMENT_COUNTDOWN });
    yield call(delay, 1000);
  }
}

function* handleDrop() {
  while (true) {
    const dropAction = yield take(END_DRAG);
    const validWords = yield select(getValidWords);
    const { props, target } = dropAction;
    const scrabbleBoard = updateLetters(props, target, 'scrabbleBoard');
    const randomLetters = updateLetters(props, target, 'randomLetters');
    yield put(replaceLettersAction(randomLetters, scrabbleBoard));
    if (scrabbleBoard) {
      const isValidIndex = getIsValidIndex(scrabbleBoard, validWords);
      yield put(isValidIndexAction(isValidIndex));
    }
  }
}

function* handleGame() {
  yield fork(handleCountdown);
  yield fork(handleStartMessages);
  yield fork(handleDrop);
  yield fork(handleSolutions);
}
function* handleEnd(task) {
  yield cancel(task);
  yield fork(handleWinner);
}

function* gameLoop() {
  yield take(START_GAME);
  const gameTask = yield fork(handleGame);
  yield take(END_GAME);
  yield call(handleEnd, gameTask);
}

function* firstGame() {
  const countdown = yield take('COUNTDOWN');
  const { value } = countdown;
  yield put({ type: SET_COUNTDOWN, value });
  const countdownTask = yield fork(handleCountdown);
  const messageTask = yield fork(handleWaitingMessage);

  yield take(START_GAME);
  yield cancel(countdownTask);
  yield cancel(messageTask);
  const gameTask = yield fork(handleGame);
  yield take(END_GAME);
  yield call(handleEnd, gameTask);
}

function* watchGame() {
  yield call(firstGame);
  while (true) {
    yield call(gameLoop);
  }
}

export default watchGame;
