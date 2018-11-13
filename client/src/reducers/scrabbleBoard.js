import {
  REPLACE_LETTER, SEND_SOLUTION, START_GAME, END_GAME,
} from '../actionTypes';

const scrabbleBoardReducer = (state = '0000000', action) => {
  switch (action.type) {
    case START_GAME:
      return '0000000';
    case END_GAME:
      return '0000000';
    case REPLACE_LETTER:
      return action.validWord ? action.validWord : state;
    case SEND_SOLUTION:
      return state
        .split('')
        .map((letter, i) => (i <= action.solution.length ? '0' : letter))
        .join('');
    default:
      return state;
  }
};

export default scrabbleBoardReducer;
