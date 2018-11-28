import { delay } from 'redux-saga';
import {
  put, select, call, fork,
} from 'redux-saga/effects';
import { MESSAGE } from '../actions/actionTypes';
import {
  getMaxLengthScore, getWinnerSolution,
} from '../clientLogic/gameLogic';
import orderedTransition from './orderedTransition';

const getSolutions = state => state.solutions;
export const getValidWords = state => state.gameData.validWords;


function* bestUserWord() {
  const solutions = yield select(getSolutions);
  if (solutions.length) {
    const winnerSolution = getWinnerSolution(solutions);
    const { name, solution } = winnerSolution;
    yield put({
      type: MESSAGE,
      message: `The winner ${name.toUpperCase()} played`,
    });
    yield fork(orderedTransition, solution);
  } else {
    const message = 'No user solutions were received';
    yield put({ type: MESSAGE, message });
  }
  yield call(delay, 4000);
}

function* bestWord() {
  const validWords = yield select(getValidWords);
  const message = 'The best word was';
  yield put({ type: MESSAGE, message });
  const bestSolution = getMaxLengthScore(validWords)[0];
  yield call(orderedTransition, bestSolution);
}

function* handleWinner() {
  yield call(bestUserWord);
  yield call(bestWord);
}

export default handleWinner;
