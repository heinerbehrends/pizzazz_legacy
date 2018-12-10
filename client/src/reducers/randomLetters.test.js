import randomLettersReducer from './randomLetters';
import * as types from '../actions/actionTypes';

describe('randomLettersReducer', () => {
  it('should return the initial state', () => {
    expect(randomLettersReducer(undefined, {})).toEqual('8888888');
  });

  it('should return action.randomLetters on RANDOM_LETTERS', () => {
    expect(
      randomLettersReducer('Welcome to', {
        type: types.RANDOM_LETTERS,
        randomLetters: 'pizzazz',
      }),
    ).toEqual('pizzazz');
  });

  it('should return action.randomLetters on REPLACE_LETTER if randomLetters is not false', () => {
    expect(
      randomLettersReducer('Welcome to', {
        type: types.REPLACE_LETTER,
        randomLetters: 'pizzazz',
      }),
    ).toEqual('pizzazz');
  });

  it('should return state on REPLACE_LETTER if randomLetters is false', () => {
    expect(
      randomLettersReducer('8888888', {
        type: types.REPLACE_LETTER,
        randomLetters: false,
      }),
    ).toEqual('8888888');
  });
});
