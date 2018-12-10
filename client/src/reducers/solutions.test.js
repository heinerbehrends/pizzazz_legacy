import solutionsReducer from './solutions';
import * as types from '../actions/actionTypes';

describe('solutionsReducer', () => {
  it('should return an empty array as the initial state', () => {
    expect(solutionsReducer(undefined, {})).toEqual([]);
  });

  it('should add action.solution to the array on SEND_SOLUTION', () => {
    expect(
      solutionsReducer([], {
        type: types.NEW_SOLUTION,
        solution: 'pizzazz',
      }),
    ).toEqual(['pizzazz']);
  });
});
