import { put, take, call, fork, select, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import { START_GAME, SEND_SOLUTION, NEW_SOLUTION, DISCONNECT, SEND_NAME } from '../actionTypes';
import { getMaxScore, getWinnerSolution } from '../scrabbleLogic/gameLogic';

const connect = () => {
  const socket = io('http://localhost:3001');
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

function subscribe(socket) {
  return eventChannel((emit) => {
    socket.on('StartGame', (game) => {
      emit({ type: START_GAME, game });
    });
    socket.on('newSolution', solution => emit({ type: NEW_SOLUTION, solution }));
    socket.on('disconnect', emit({ type: DISCONNECT }));

    return () => {};
  });
}

function* read(socket) {
  yield take(SEND_NAME);
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

const getScreenName = state => state.screenName;

function* write(socket) {
  while (true) {
    const action = yield take(SEND_SOLUTION);
    const { solution } = action;
    const name = yield select(getScreenName);
    socket.emit('sendSolution', { solution, name });
  }
}


function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* watchEvents() {
  while (true) {
    const socket = yield call(connect);
    const task = yield fork(handleIO, socket);
    yield take(DISCONNECT);
    yield cancel(task);
  }
}

export default watchEvents;
