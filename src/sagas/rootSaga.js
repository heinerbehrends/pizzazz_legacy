import { all } from 'redux-saga/effects'
import watchEvents from './sendNameSaga'
import watchSendName from './watchEventsSaga'



function* rootSaga() {
  yield all([
    watchSendName(),
    watchEvents(),
  ])
}

export default rootSaga
