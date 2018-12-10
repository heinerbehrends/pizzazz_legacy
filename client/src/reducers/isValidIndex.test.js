import isValidIndexReducer from './isValidIndex';
import * as types from '../actions/actionTypes';

describe('isValidIndexReducer', () => {
  it('should return 0 as the initial state', () => {
    expect(isValidIndexReducer(undefined, {})).toEqual(0);
  });

  it('should return action.index on IS_VALID', () => {
    expect(
      isValidIndexReducer(0, {
        type: types.IS_VALID,
        index: 7,
      }),
    ).toEqual(7);
  });

  it('should return 0 on SEND_SOLUTION', () => {
    expect(
      isValidIndexReducer(7, {
        type: types.SEND_SOLUTION,
      }),
    ).toEqual(0);
  });

  it('should return 0 on END_GAME', () => {
    expect(
      isValidIndexReducer(7, {
        type: types.END_GAME,
      }),
    ).toEqual(0);
  });
});
