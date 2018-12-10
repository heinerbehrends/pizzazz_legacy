import canJoinReducer from './canJoin';
import * as types from '../actions/actionTypes';

describe('canJoinReducer', () => {
  it('should return false as the initial state', () => {
    expect(canJoinReducer(undefined, {})).toEqual(false);
  });

  it('should return true on SEND_NAME', () => {
    expect(
      canJoinReducer([], {
        type: types.SEND_NAME,
      }),
    ).toEqual(true);
  });

  it('should return false on START_GAME', () => {
    expect(
      canJoinReducer([], {
        type: types.START_GAME,
      }),
    ).toEqual(false);
  });
});
