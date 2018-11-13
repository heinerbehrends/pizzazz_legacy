import { IS_VALID, SEND_SOLUTION, END_GAME } from '../actions/actionTypes';

const isValidIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case IS_VALID:
      return state !== action.index ? action.index : state;
    case SEND_SOLUTION:
      return 0;
    case END_GAME:
      return 0;
    default:
      return state;
  }
};

export default isValidIndexReducer;
