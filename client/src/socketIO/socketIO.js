import io from 'socket.io-client';
import { fork, cancel, call, take } from 'redux-saga/effects';
import send from './send';
import receive from './receive';

export const DISCONNECT = 'DISCONNECT';

const connect = () => {
  const socket = io();
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

function* sendReceive(socket) {
  yield fork(receive, socket);
  yield fork(send, socket);
}

function* socketIO() {
  while (true) {
    const socket = yield call(connect);
    const task = yield fork(sendReceive, socket);
    yield take(DISCONNECT);
    yield cancel(task);
  }
}

export default socketIO;
