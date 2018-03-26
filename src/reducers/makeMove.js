import { MAKE_MOVE } from '../actionTypes'

const makeMoveReducer = (state = [], action) => {
  console.log(action.type);
  switch(action.type) {
    case MAKE_MOVE:
      console.log(state);
      let newState = state.splice();
      let { word, score, index } = action;
      let move = [word, score, index];
      newState.push(move);
      return newState
    default:
      return state;
  }
}

export default makeMoveReducer
