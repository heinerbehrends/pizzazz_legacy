import { all } from 'redux-saga/effects'
import watchEvents from './watchEventsSaga'
import watchGame from './gameSaga'
import randomTransition, { watchStartGame } from './randomTransition'


function* rootSaga() {
  yield all([
    randomTransition('pizzazz'),
    watchStartGame(),
    watchGame(),
    watchEvents(),
  ])
}

export default rootSaga
