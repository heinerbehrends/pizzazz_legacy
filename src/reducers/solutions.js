import { NEW_SOLUTION } from '../actionTypes'

const solutionsReducer = (state = [], action) => {
  switch(action.type) {
    case NEW_SOLUTION:
      return [...state, action.solution]
    default:
      return state;
  }
}

export default solutionsReducer
