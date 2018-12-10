import gameDataReducer, { initialState } from './gameData';
import * as types from '../actions/actionTypes';

describe('', () => {
  it('should return the initial state', () => {
    expect(gameDataReducer(undefined, {})).toEqual(initialState);
  });

  it('should return action.game on START_GAME', () => {
    const game = {
      randomLetters: 'pizzazz',
      validWords: ['pi', 'pia', 'zap', 'pizza', 'pizazz', 'pizzaz', 'pizzazz'],
      seconds: 40,
    };
    expect(
      gameDataReducer(initialState, {
        type: types.START_GAME,
        game,
      }),
    ).toEqual(game);
  });
});
