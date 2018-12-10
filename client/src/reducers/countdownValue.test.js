import countdownValueReducer from './countdownValue';
import * as types from '../actions/actionTypes';

describe('countdownValueReducer', () => {
  it('should return 40 as the initial state', () => {
    expect(countdownValueReducer(undefined, {})).toEqual(40);
  });

  it('should handle SET_COUNTDOWN by returning action.value', () => {
    expect(
      countdownValueReducer([], {
        type: types.SET_COUNTDOWN,
        value: 42,
      }),
    ).toEqual(42);
  });

  it('should handle START_GAME by returning action.game.seconds -10', () => {
    expect(
      countdownValueReducer([], {
        type: types.START_GAME,
        game: {
          seconds: 42,
        },
      }),
    ).toEqual(32);
  });

  it('should handle DECREMENT_COUNTDOWN by returning state - 1', () => {
    expect(
      countdownValueReducer(42, {
        type: types.DECREMENT_COUNTDOWN,
      }),
    ).toEqual(41);
  });
});
