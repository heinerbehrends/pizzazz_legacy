import { delay } from 'redux-saga'
import { put, select, take, call, fork } from 'redux-saga/effects'
import { DECREMENT_COUNTDOWN, END_GAME, MESSAGE_TOP, NEW_SOLUTION } from '../actionTypes'
import randomTransition from './randomTransition'
import { getMaxLength, getMaxLengthScore, getWinnerSolution, addZeros } from '../scrabbleLogic/gameLogic'


const getCountdownValue = state => state.countdownValue
const getValidWords = state => state.gameData.validWords
const getSolutions = state => state.solutions

function* handleSolutions() {
  while (true) {
    let { solution } = yield take(NEW_SOLUTION)
    yield put({
      type: MESSAGE_TOP,
      message: `${ solution.name } played a \
                ${ solution.solution.length }-letter word`
    })
  }
}

const getWinnerMessage = solution => {
  return solution ?
    `The winner ${ solution.name.toUpperCase() } played ` :
    'No user solutions were received'
}

function* handleWinner() {
  yield take(END_GAME)
  const solutions = yield select(getSolutions)
  const solution = getWinnerSolution(solutions)
  let message = getWinnerMessage(solution)
  yield put({ type: MESSAGE_TOP, message })
  if (solution) {
    yield fork(randomTransition, addZeros(solution.solution))
  }
  yield call(delay, 5000)

  const validWords = yield select(getValidWords)
  message = 'The best word was'
  yield put({ type: MESSAGE_TOP, message })
  yield fork(randomTransition, addZeros(getMaxLengthScore(validWords)[0]))

}

function* handleTopMessage() {
  const validWords = yield select(getValidWords)

  let message = `There are ${ validWords.length } possible words`
  yield put({ type: MESSAGE_TOP, message})
  yield call(delay, 5000)

  message = `The longest word is ${ getMaxLength(validWords) } letters long`
  yield put({ type: MESSAGE_TOP, message })
  yield fork(handleSolutions)
}

function* handleCountdown() {
  while (true) {
    yield call(delay, 1000)
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
    yield fork(handleCountdown)
    yield fork(handleTopMessage)
    yield fork(handleWinner)
  }
}

export default watchGame
