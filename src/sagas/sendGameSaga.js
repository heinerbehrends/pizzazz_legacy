import { call, takeEvery, select } from 'redux-saga/effects'
import { sendGame } from '../apiCalls'

function* sendGameSaga(action) {
  try {
    const state = yield select()
    yield call(sendGame, state.gameData.id, state.firstPlayer, state.makeMove)
  } catch (error) {
    console.log(error)
  }
}

function* watchSendGame() {
  yield takeEvery('END_GAME', sendGameSaga)
}

export default watchSendGame
