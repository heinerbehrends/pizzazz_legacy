import { SHOW_WINNER } from '../actionTypes'

const gameEndReducer = (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case SHOW_WINNER:
      return action.game;
    default:
      return state;
  }
}

export default gameEndReducer
