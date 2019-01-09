import { delay } from 'redux-saga';
import {
  put, select, call, fork,
} from 'redux-saga/effects';
import * as create from '../actions/actionCreators';
import {
  getMaxLengthScore, getWinnerSolution,
} from '../clientLogic/findWinner';
import orderedTransition from './orderedTransition';

const getSolutions = state => state.solutions;
export const getValidWords = state => state.gameData.validWords;


function* bestUserWord() {
  const solutions = yield select(getSolutions);
  if (solutions.length) {
    const { name, solution } = getWinnerSolution(solutions);
    yield put(create.messageAction(`The winner ${name.toUpperCase()} played`));
    yield fork(orderedTransition, solution);
    yield put(create.lookupAction(solution));
  } else {
    yield put(create.messageAction('No solutions were received'));
  }
  yield call(delay, 4000);
}

function* bestWord() {
  const validWords = yield select(getValidWords);
  yield put(create.messageAction('The best word was'));
  const bestSolution = getMaxLengthScore(validWords)[0];
  yield put(create.lookupAction(bestSolution));
  yield call(orderedTransition, bestSolution);
}

function* handleWinner() {
  yield call(bestUserWord);
  yield call(bestWord);
}

export default handleWinner;
