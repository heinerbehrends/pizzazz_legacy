import { put, call, takeEvery } from 'redux-saga/effects'
import { firstPlayerAction } from '../actions/gameActions'
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
  const action = yield takeEvery('SEND_NAME', sendNameSaga)
  console.log(action);
}

export default watchSendName
