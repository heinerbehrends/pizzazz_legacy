import { SHOW_VALID, MAKE_MOVE } from '../actionTypes'

const showValidReducer = (state = 0, action) => {
  switch (action.type){
    case SHOW_VALID:
      if (state !== action.index) {
        return action.index;
      }
      else {
        return state;
      }
    case MAKE_MOVE:
      return 0;
    default:
      return state;
 }
}

export default showValidReducer;
