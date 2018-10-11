import { START_GAME } from '../actionTypes';

const gameDataReducer = (state = {}, action) => {
  switch (action.type) {
    case START_GAME:
      return action.game;
    default:
      return state;
  }
};

export default gameDataReducer;
