import * as t from '../actions/actionTypes';

const definitionReducer = (state = 'a micro-scrabble word game', action) => {
  switch (action.type) {
    case t.DEFINE:
      return action.definition;
    case t.END_GAME:
      return '...';
    case t.START_GAME:
      return '...';
    case t.SEND_SOLUTION:
      return '...';
    default:
      return state;
  }
};

export default definitionReducer;
