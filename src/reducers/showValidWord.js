import { SHOW_VALID } from '../actionTypes'

const showValidReducer = (state = 0, action) => {
  switch (action.type){
    case SHOW_VALID:
      if (state !== action.index) {
        return action.index;
      }
      else {
        return state;
      }
    default:
      return state;
 }
}

export default showValidReducer;
