import { SHOW_VALID, SEND_SOLUTION } from '../actionTypes'

const showValidReducer = (state = 0, action) => {
  switch (action.type){
    case SHOW_VALID:
      if (state !== action.index) {
        return action.index;
      }
      else {
        return state;
      }
    case SEND_SOLUTION:
      return 0;
    default:
      return state;
 }
}

export default showValidReducer;
