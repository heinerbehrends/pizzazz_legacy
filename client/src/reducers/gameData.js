import { START_GAME } from '../actions/actionTypes';

export const initialState = {
  randomLetters: '',
  validWords: [],
  seconds: 0,
};

const gameDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return action.game;
    default:
      return state;
  }
};

export default gameDataReducer;
