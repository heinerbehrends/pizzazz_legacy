import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import {
  put, take, call, fork, select, cancel,
} from 'redux-saga/effects';
import * as t from '../actions/actionTypes';
import * as create from '../actions/actionCreators';

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
      emit(create.startGameAction(game));
    });
    socket.on('EndGame', action => emit(action));
    socket.on('countdown', value => emit(create.countdownAction(value)));
    socket.on('newSolution', solution => emit(create.newSolutionAction(solution)));
    socket.on('definition', def => emit(create.definitionAction(def)));
    socket.on('disconnect', emit({ type: t.DISCONNECT }));

    return () => {};
  });
}

const getScreenName = state => state.screenName;

function* sendSolution(socket) {
  while (true) {
    const action = yield take(t.SEND_SOLUTION);
    const { solution } = action;
    const name = yield select(getScreenName);
    socket.emit('sendSolution', { solution, name });
  }
}

function* sendName(socket) {
  const action = yield take(t.SEND_NAME);
  const { name } = action;
  socket.emit('sendName', { name });
}

function* joinGame(socket) {
  yield take(t.JOIN_GAME);
  socket.emit('joinGame');
}

function* lookUp(socket) {
  while (true) {
    const action = yield take(t.LOOK_UP);
    const { word } = action;
    socket.emit('lookUp', { word });
  }
}

function* read(socket) {
  yield take(t.SEND_NAME);
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  yield call(sendName, socket);
  yield fork(joinGame, socket);
  yield fork(sendSolution, socket);
  yield fork(lookUp, socket);
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* watchEvents() {
  while (true) {
    const socket = yield call(connect);
    const task = yield fork(handleIO, socket);
    yield take(t.DISCONNECT);
    yield cancel(task);
  }
}

export default watchEvents;
