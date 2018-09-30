import { all } from 'redux-saga/effects'
import watchEvents from './watchEventsSaga'
import watchGame from './gameSaga'


function* rootSaga() {
  yield all([
    watchGame(),
    watchEvents(),
  ])
}

export default rootSaga
