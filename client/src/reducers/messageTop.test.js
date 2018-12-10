import messageTopReducer from './messageTop';
import * as types from '../actions/actionTypes';

describe('messageTopReducer', () => {
  it('should return the initial state', () => {
    expect(messageTopReducer(undefined, {})).toEqual('Welcome to');
  });

  it('should return action.message on MESSAGE', () => {
    expect(
      messageTopReducer('Welcome to', {
        type: types.MESSAGE,
        message: 'pizzazz',
      }),
    ).toEqual('pizzazz');
  });
});
