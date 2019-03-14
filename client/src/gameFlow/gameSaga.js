import { delay } from 'redux-saga';
import {
  put, take, call, fork, cancel, all,
} from 'redux-saga/effects';
import handleEntry from './handleEntry';
import handleWinner from './solutions/handleWinner';
import { displaySolution } from './solutions/solutionsState';
import { getMaxLength } from './solutions/findWinner';
import handleCountdown from '../ProgressBar/progressBarState';
import transition from '../GameDnd/LetterDisplay/transition';
import handleDrop from '../GameDnd/gameDndState';
import { messageAction } from '../Message/messageState';
import { START_GAME, END_GAME } from './gameFlowState';

export function* handleStartMessages(validWords) {
  yield all([
    put(messageAction(`There are ${validWords.length} possible words`)),
    call(delay, 4000),
    put(messageAction(`The longest word is ${getMaxLength(validWords)} letters long`)),
  ]);
}

function* firstGame() {
  const entryTask = yield fork(handleEntry);
  const { game } = yield take(START_GAME);
  yield cancel(entryTask);
  const gameTask = yield fork(handleGame, game);

  yield take(END_GAME);
  yield call(handleEnd, gameTask);
}

function* handleGame(game) {
  const { randomLetters, validWords } = game;
  yield all([
    fork(transition, randomLetters),
    fork(handleCountdown),
    fork(handleStartMessages, validWords),
    fork(handleDrop),
    fork(displaySolution),
  ]);
}

function* handleEnd(task) {
  yield cancel(task);
  yield fork(handleWinner);
}

function* gameLoop() {
  while (true) {
    const { game } = yield take(START_GAME);
    const gameTask = yield fork(handleGame, game);

    yield take(END_GAME);
    yield call(handleEnd, gameTask);
  }
}

function* gameSaga() {
  yield call(firstGame);
  yield call(gameLoop);
}

export default gameSaga;
