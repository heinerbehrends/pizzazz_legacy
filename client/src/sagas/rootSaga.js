import { all } from 'redux-saga/effects';
import watchEvents from './watchEventsSaga';
import watchGame from './gameSaga';
import orderedTransition, { watchStartGame } from './orderedTransition';


function* rootSaga() {
  yield all([
    orderedTransition('pizzazz'),
    watchStartGame(),
    watchGame(),
    watchEvents(),
  ]);
}

export default rootSaga;
