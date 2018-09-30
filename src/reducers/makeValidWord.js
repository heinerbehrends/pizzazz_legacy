import { REPLACE_LETTER, SEND_SOLUTION, START_GAME } from '../actionTypes'

const validWordReducer = (state = "0000000", action) => {
  switch(action.type) {
    case START_GAME:
      return "0000000"
    case REPLACE_LETTER:
      return action.validWord ? action.validWord : state
    case SEND_SOLUTION:
      let zeros = ''
      let index = action.solution.length
      for (let i = 0; i < index; i++) {
        zeros += 0;
      }
      return zeros.concat(state.substring(index))
    default:
      return state;
  }
}

export default validWordReducer;
