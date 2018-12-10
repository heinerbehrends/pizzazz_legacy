import isCountdownReducer from './isCountdown';
import * as types from '../actions/actionTypes';

describe('isCountdownReducer', () => {
  it('should return false as the initial state', () => {
    expect(isCountdownReducer(undefined, {})).toEqual(false);
  });

  it('should return true on START_GAME', () => {
    expect(
      isCountdownReducer([], {
        type: types.START_GAME,
      }),
    ).toEqual(true);
  });

  it('should return false on END_GAME', () => {
    expect(
      isCountdownReducer([], {
        type: types.END_GAME,
      }),
    ).toEqual(false);
  });
});
