import { delay } from 'redux-saga'
import { put, select, takeEvery } from 'redux-saga/effects'
import { DECREMENT_COUNTDOWN, END_GAME } from '../actionTypes'


const getCountdownValue = state => {
  return state.countdownValue
}

export function* handleGame() {

  while (true) {
    yield delay(1000)
    yield put({ type: DECREMENT_COUNTDOWN })

    let countdownValue = yield select(getCountdownValue)

    if (countdownValue < 0) {
      yield put({ type: END_GAME })
      break
    }
  }
}

function* watchGame() {
  yield takeEvery('START_GAME', handleGame)
}

export default watchGame
