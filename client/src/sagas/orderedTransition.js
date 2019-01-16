import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as R from 'ramda';
import { randomLettersAction } from '../actions/actionCreators';
import { abc } from '../Constants';

const frameDuration = 20;
const duration = frameDuration * 8;

const getRandomIndex = strArr => Math.floor(Math.random() * strArr.length);
const getRandomLetter = strArr => strArr[getRandomIndex(strArr)];
const getRandomAbc = () => getRandomLetter(abc);
const getIndex = (time, letterDuration) => Math.floor(time / letterDuration);

const randomizeEnd = (string, index) => (
  R.concat(
    R.slice(0, index)(string),
    R.pipe(
      R.map(getRandomAbc),
      R.join(''),
    )(Array(R.length(string) - index)),
  )
);

function* orderedTransition(final) {
  let time = 0;
  while (time < duration * R.length(final)) {
    yield delay(frameDuration);
    time += frameDuration;
    yield put(randomLettersAction(
      randomizeEnd(final, getIndex(time, duration)),
    ));
  }
}

export default orderedTransition;
