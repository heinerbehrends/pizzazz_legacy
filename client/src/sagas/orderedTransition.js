import { delay } from 'redux-saga';
import { put, take } from 'redux-saga/effects';
import { RANDOM_LETTERS, START_GAME } from '../actions/actionTypes';
import {
  getRandomAbc,
  makeRandomArray,
  makeZerosArray,
  isFinished,
  isKeyframe,
  getNextIndex,
} from '../clientLogic/transitionLogic';
// duration must be a multiple of frameDuration
const frameDuration = 25;
const duration = frameDuration * 7;

function* orderedTransition(finalString) {
  const zerosPart = makeZerosArray(finalString);
  let randomPart = makeRandomArray(finalString);
  let finalPart = [];
  let time = 0;

  while (true) {
    yield delay(frameDuration);
    time += frameDuration;

    const randomLetters = finalPart
      .concat(randomPart)
      .concat(zerosPart)
      .join('');

    yield put({ type: RANDOM_LETTERS, randomLetters });

    if (isFinished(finalPart, zerosPart)) {
      break;
    } else if (isKeyframe(time, duration)) {
      const nextLetter = finalString[getNextIndex(time, duration)];
      randomPart = randomPart.slice(1);
      finalPart = finalPart.concat(nextLetter);
    }

    randomPart = randomPart.map(getRandomAbc);
  }
}

export function* watchStartGame() {
  while (true) {
    const action = yield take(START_GAME);
    yield orderedTransition(action.game.randomLetters);
  }
}

export default orderedTransition;
