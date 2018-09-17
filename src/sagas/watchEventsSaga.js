import { put, take, call } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import Echo from 'laravel-echo'
import { START_GAME, SHOW_WINNER } from '../actionTypes'

const createNewEcho = () => {
  return new Echo({
    broadcaster: 'pusher',
    key: "3d2256d4fd0ec99b3854",
    cluster: 'eu',
    encrypted: true
  });
}

const createPusherChannel = socket => {

  return eventChannel(emit => {

    socket.channel('pizzazz')
          .listen('StartGame', event => {
            event.isStart = true
            emit(event)
          }).listen('EndGame', event => {
            emit(event)
          })

    const unsubscribe = () => {
      socket.leave('pizzazz')
    }
    return unsubscribe
  })
}

function* watchEvents() {

  const socket = yield call(createNewEcho)
  const socketChannel = yield call(createPusherChannel, socket)

  while (true) {

    const payload = yield take(socketChannel)
    const type = payload.isStart ? START_GAME : SHOW_WINNER
    yield put({type, game: payload.game})
  }
}

export default watchEvents
