import { delay } from 'redux-saga'
import { put, take } from 'redux-saga/effects'
import { RANDOM_LETTERS, START_GAME } from '../actionTypes'

const getRandomIndex = bagOfLetters => Math.floor(Math.random() * bagOfLetters.length)
const getRandomLetter = () => abc[getRandomIndex(abc)]
const abc = 'abcdefghijklmnopqrstuvwxyz8'

function* randomTransition(string) {
  let stringArrRandom = string
    .split('')
    .map((letter, i) => letter === '0' ? 'correct' : getRandomLetter())

  while (true) {
    yield delay(20)
    stringArrRandom = stringArrRandom
      .map((letter, i) => letter !== 'correct' ? getRandomLetter() : string[i])

    yield put({type: RANDOM_LETTERS, randomLetters: stringArrRandom.join('')})

    stringArrRandom = stringArrRandom
      .map((letter, i) => letter === string[i] ? stringArrRandom[i] = 'correct' : letter)

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
