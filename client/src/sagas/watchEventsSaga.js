import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import {
  put, take, call, fork, select, cancel,
} from 'redux-saga/effects';
import {
  START_GAME, SEND_SOLUTION, NEW_SOLUTION, DISCONNECT, SEND_NAME, JOIN_GAME,
} from '../actions/actionTypes';

const connect = () => {
  const socket = io();
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
    socket.on('EndGame', action => emit(action));
    socket.on('countdown', value => emit({ type: 'COUNTDOWN', value }));
    socket.on('newSolution', solution => emit({ type: NEW_SOLUTION, solution }));
    socket.on('disconnect', emit({ type: DISCONNECT }));

    return () => {};
  });
}

const getScreenName = state => state.screenName;

function* sendSolution(socket) {
  const action = yield take(SEND_SOLUTION);
  const { solution } = action;
  const name = yield select(getScreenName);
  socket.emit('sendSolution', { solution, name });
}

function* sendName(socket) {
  const action = yield take(SEND_NAME);
  const { name } = action;
  socket.emit('sendName', { name });
}

function* joinGame(socket) {
  yield take(JOIN_GAME);
  socket.emit('joinGame');
}

function* read(socket) {
  yield take(SEND_NAME);
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  yield call(sendName, socket);
  yield fork(joinGame, socket);
  while (true) {
    yield call(sendSolution, socket);
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
