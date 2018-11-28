import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { RANDOM_LETTERS } from '../actions/actionTypes';
import {
  getRandomAbc,
  makeRandomArray,
  makeZerosArray,
  isFinished,
  isKeyframe,
  getNextLetter,
} from '../clientLogic/transitionLogic';

// duration must be a multiple of frameDuration
const frameDuration = 20;
const duration = frameDuration * 8;

function* orderedTransition(finalString) {
  const zerosPart = makeZerosArray(finalString);
  let randomPart = makeRandomArray(finalString);
  let finalPart = [];
  let time = 0;

  while (true) {
    yield delay(frameDuration);
    time += frameDuration;

    yield put({
      type: RANDOM_LETTERS,
      randomLetters: finalPart
        .concat(randomPart)
        .concat(zerosPart)
        .join(''),
    });

    if (isFinished(finalPart, zerosPart)) {
      break;
    } else if (isKeyframe(time, duration)) {
      randomPart = randomPart.slice(1);
      finalPart = finalPart.concat(
        finalString[getNextLetter(time, duration)],
      );
    }
    randomPart = randomPart.map(getRandomAbc);
  }
}

export default orderedTransition;
