import { delay } from 'redux-saga'
import { put, select, take, call } from 'redux-saga/effects'
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
  while (true) {
    yield take('START_GAME')
    yield call(handleGame)
    console.log('yeah');    
  }
}

export default watchGame
