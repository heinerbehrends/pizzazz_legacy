import { MAKE_MOVE } from '../actionTypes'

const makeMoveReducer = (state = [['NoSolution', 0]], action) => {
  switch(action.type) {
    case MAKE_MOVE:
      let firstMove = state[0][0] === 'NoSolution';
      let newState = state.slice((firstMove ? 1 : 0));
      let { word, score, index } = action;
      let move = [word, score, index];
      newState.push(move);
      return newState
    default:
      return state;
  }
}

export default makeMoveReducer
