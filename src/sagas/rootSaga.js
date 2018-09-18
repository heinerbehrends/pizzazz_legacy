import { all } from 'redux-saga/effects'
import watchSendName from './sendNameSaga'
import watchSendGame from './sendGameSaga'
import watchEvents from './watchEventsSaga'
import watchGame from './gameSaga'


function* rootSaga() {
  yield all([
    watchGame(),
    watchEvents(),
    watchSendName(),
    watchSendGame(),
  ])
}

export default rootSaga
