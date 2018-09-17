import { all } from 'redux-saga/effects'
import watchEvents from './watchEventsSaga'


function* rootSaga() {
  yield all([
    watchEvents(),
  ])
}

export default rootSaga
