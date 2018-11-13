import { SEND_NAME } from '../actions/actionTypes';

const screenNameReducer = (state = '', action) => {
  switch (action.type) {
    case SEND_NAME:
      return action.name;
    default:
      return state;
  }
};

export default screenNameReducer;
