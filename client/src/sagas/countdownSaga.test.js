import { delay } from 'redux-saga';
import {
  put, select, call,
} from 'redux-saga/effects';
import handleCountdown, { getCountdownValue } from './countdownSaga';

const generator = handleCountdown();

describe('handleCountdown', () => {
  it('gets the countdownValue from the store', () => {
    const store = { countdownValue: 1 };
    const firstYield = generator.next();
    expect(firstYield.value).toEqual(select(getCountdownValue));
  });
});
