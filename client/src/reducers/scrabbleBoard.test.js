import scrabbleBoardReducer from './scrabbleBoard';
import * as types from '../actions/actionTypes';

describe('scrabbleBoardReducer', () => {
  it('should return the initial state', () => {
    expect(scrabbleBoardReducer(undefined, {})).toEqual('0000000');
  });

  it('should return 0000000 on START_GAME', () => {
    expect(
      scrabbleBoardReducer('pizzazz', {
        type: types.START_GAME,
      }),
    ).toEqual('0000000');
  });

  it('should return 0000000 on END_GAME', () => {
    expect(
      scrabbleBoardReducer('pizzazz', {
        type: types.END_GAME,
      }),
    ).toEqual('0000000');
  });

  it('should return action.scrabbleBoard on REPLACE_LETTER if scrabbleBoard is not false', () => {
    expect(
      scrabbleBoardReducer('0000000', {
        type: types.REPLACE_LETTER,
        scrabbleBoard: 'pizzazz',
      }),
    ).toEqual('pizzazz');
  });

  it('should return state on REPLACE_LETTER if scrabbleBoard is false', () => {
    expect(
      scrabbleBoardReducer('0000000', {
        type: types.REPLACE_LETTER,
        scrabbleBoard: false,
      }),
    ).toEqual('0000000');
  });

  it('should replace the letters of the solution with zeros on SEND_SOLUTION', () => {
    expect(
      scrabbleBoardReducer('pizzaxx', {
        type: types.SEND_SOLUTION,
        solution: 'pizza',
      }),
    ).toEqual('00000xx');
  });
});
