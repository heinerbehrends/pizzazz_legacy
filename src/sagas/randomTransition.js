import { delay } from 'redux-saga'
import { put, take, call } from 'redux-saga/effects'
import { RANDOM_LETTERS, START_GAME } from '../actionTypes'

const getRandomIndex = bagOfLetters => Math.floor(Math.random() * bagOfLetters.length)
const abc = 'abcdefghijklmnopqrstuvwxyz8'

function* randomTransition(string) {

  const stringArrEnd = string.split('')
  let stringArrRandom = stringArrEnd.map(letter => abc[getRandomIndex(abc)])

  while (true) {
    yield delay(20)
    stringArrRandom = stringArrRandom.map((letter, i) => letter !== 'correct' ?
                                                           abc[getRandomIndex(abc)] :
                                                           stringArrEnd[i])

    yield put({type: RANDOM_LETTERS, randomLetters: stringArrRandom.join('')})

    stringArrRandom.map((letter, i) => letter === stringArrEnd[i] ?
                                         stringArrRandom[i] = 'correct' :
                                         letter)

    if (!stringArrRandom.filter(element => element !== 'correct').length) {
      break
    }
  }
}

export function* watchStartGame() {
  while (true) {
    const action = yield take(START_GAME)
    yield randomTransition(action.game.randomLetters)
  }
}

export default randomTransition
