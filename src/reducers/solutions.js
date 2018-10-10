import { NEW_SOLUTION, START_GAME } from '../actionTypes';

const solutionsReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_SOLUTION:
      return [...state, action.solution];
    case START_GAME:
      return [];
    default:
      return state;
  }
};

export default solutionsReducer;
