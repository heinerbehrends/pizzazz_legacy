import { all } from 'redux-saga/effects';
import watchEvents from './watchEventsSaga';
import watchGame from './gameSaga';
import orderedTransition from './orderedTransition';


function* rootSaga() {
  yield all([
    orderedTransition('pizzazz'),
    watchGame(),
    watchEvents(),
  ]);
}

export default rootSaga;
