import { put, call, takeEvery } from 'redux-saga/effects'
import { firstPlayerAction } from '../actions/actions'
import { sendName } from '../apiCalls'

function* sendNameSaga(action) {
  try {
    const response = yield call(sendName, action.name)
    const isFirstPlayer = response.data.firstPlayer

    if (isFirstPlayer) {
      yield put(firstPlayerAction(isFirstPlayer))
    }


  } catch (error) {
    console.log(error)
  }
}

function* watchSendName() {
  yield takeEvery('SEND_NAME', sendNameSaga)
}

export default watchSendName
