import {
  put, take, call, fork, cancel, all,
} from 'redux-saga/effects';
import handleDrop from './dropSaga';
import handleWinner from './handleWinner';
import handleCountdown from './countdownSaga';
import orderedTransition from './orderedTransition';
import {
  handleStartMessages,
  handleWaitingMessage,
  handleSolutions,
} from './messages';
import {
  START_GAME, SET_COUNTDOWN, END_GAME,
} from '../actions/actionTypes';


function* handleEntry() {
  const countdown = yield take('COUNTDOWN');
  const { value } = countdown;
  yield all([
    put({ type: SET_COUNTDOWN, value }),
    fork(handleWaitingMessage),
    fork(handleCountdown),
  ]);
}

function* handleGame(game) {
  const { randomLetters, validWords } = game;
  yield all([
    fork(orderedTransition, randomLetters),
    fork(handleCountdown),
    fork(handleStartMessages, validWords),
    fork(handleDrop),
    fork(handleSolutions),
  ]);
}

function* handleEnd(task) {
  yield cancel(task);
  yield fork(handleWinner);
}

function* firstGame() {
  const entryTask = yield fork(handleEntry);

  const { game } = yield take(START_GAME);
  yield cancel(entryTask);
  const gameTask = yield fork(handleGame, game);

  yield take(END_GAME);
  yield call(handleEnd, gameTask);
}

function* gameLoop() {
  while (true) {
    const start = yield take(START_GAME);
    const gameTask = yield fork(handleGame, start.game);

    yield take(END_GAME);
    yield call(handleEnd, gameTask);
  }
}

function* watchGame() {
  yield call(firstGame);
  yield call(gameLoop);
}

export default watchGame;
