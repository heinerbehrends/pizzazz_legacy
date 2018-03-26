import { REPLACE_LETTER, MAKE_MOVE } from '../actionTypes'

const validWordReducer = (state = "0000000", action) => {
  switch(action.type) {
    case REPLACE_LETTER:
      if (action.target === 'validWord') {
        return state.substring(0, action.index)
                    .concat(action.letter)
                    .concat(state.substring(action.index + 1));
      }
      else {
        return state;
      }
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
