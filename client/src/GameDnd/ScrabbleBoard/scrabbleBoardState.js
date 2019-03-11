import { REPLACE_LETTER } from '../gameDndState';
import { SEND_SOLUTION } from '../../Inputs/Buttons/buttonsState';
import { START_GAME, END_GAME } from '../../gameFlow/gameFlowState';
const IS_VALID = 'IS_VALID';

const scrabbleBoardReducer = (state = '0000000', action) => {
  switch (action.type) {
    case START_GAME:
      return '0000000';
    case END_GAME:
      return '0000000';
    case REPLACE_LETTER:
      return action.scrabbleBoard ? action.scrabbleBoard : state;
    case SEND_SOLUTION:
      return state
        .split('')
        .map((letter, i) => (i < action.solution.length ? '0' : letter))
        .join('');
    default:
      return state;
  }
};

export const isValidIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case IS_VALID:
      return action.index;
    case SEND_SOLUTION:
      return 0;
    case END_GAME:
      return 0;
    default:
      return state;
  }
};

export const isValidAction = index => ({
  type: IS_VALID,
  index,
});

export default scrabbleBoardReducer;
