import { REPLACE_LETTER, MAKE_MOVE } from '../actionTypes'

const validWordReducer = (state = "0000000", action) => {
  switch(action.type) {
    case REPLACE_LETTER:
      return action.validWord ? action.validWord : state
    case MAKE_MOVE:
      let zeros = '';
      for (let i = 0; i < action.index; i++) {
        zeros += 0;
      }
      return zeros.concat(state.substring(action.index))
    default:
      return state;
  }
}

export default validWordReducer;
