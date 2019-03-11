import { all } from 'redux-saga/effects';
import socketIO from '../socketIO/socketIO';
import gameSaga from '../gameFlow/gameSaga';
import transition from '../GameDnd/RandomLetters/transition';


function* rootSaga() {
  yield all([
    transition('pizzazz'),
    socketIO(),
    gameSaga(),
  ]);
}

export default rootSaga;
