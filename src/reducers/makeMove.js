import { MAKE_MOVE } from '../actionTypes'

const makeMoveReducer = (state = [], action) => {
  console.log(action.type);
  switch(action.type) {
    case MAKE_MOVE:
      let newState = state.slice(0);
      let { word, score, index } = action;
      let move = [word, score, index, 'local'];
      newState.push(move);
      return newState
    default:
      return state;
  }
}

export default makeMoveReducer
