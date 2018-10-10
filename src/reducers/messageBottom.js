import { START_GAME, SEND_NAME } from '../actionTypes';

const defaultState = {
  message: 'Enter screen name to play',
  isVisible: true,
};

const messageBottomReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEND_NAME:
      return { ...state, isVisible: false };
    case START_GAME:
      return { ...state, message: 'Move letters to form a word' };
    default:
      return state;
  }
};

export default messageBottomReducer;
