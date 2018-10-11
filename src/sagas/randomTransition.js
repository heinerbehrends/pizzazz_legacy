import { delay } from 'redux-saga';
import { put, take } from 'redux-saga/effects';
import { RANDOM_LETTERS, START_GAME } from '../actionTypes';
import {
  zeroToCorrect, isAllCorrect, randomOrCorrect, markAsCorrect,
} from '../scrabbleLogic/transitionLogic';


function* randomTransition(string) {
  let stringArrRandom = string
    .split('')
    .map(zeroToCorrect);

  while (true) {
    yield delay(20);
    stringArrRandom = randomOrCorrect(stringArrRandom, string);
    yield put({ type: RANDOM_LETTERS, randomLetters: stringArrRandom.join('') });

    stringArrRandom = markAsCorrect(stringArrRandom, string);
    if (isAllCorrect(stringArrRandom)) {
      break;
    }
  }
}

export function* watchStartGame() {
  while (true) {
    const action = yield take(START_GAME);
    yield randomTransition(action.game.randomLetters);
  }
}

export default randomTransition;
