import screenNameReducer from './screenName';
import * as types from '../actions/actionTypes';

describe('screenNameReducer', () => {
  it('should return the initial state', () => {
    expect(screenNameReducer(undefined, {})).toEqual('');
  });

  it('should return action.message on SEND_NAME', () => {
    expect(
      screenNameReducer('', {
        type: types.SEND_NAME,
        name: 'pizarro',
      }),
    ).toEqual('pizarro');
  });
});
