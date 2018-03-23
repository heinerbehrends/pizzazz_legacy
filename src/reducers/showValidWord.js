const showValidReducer = (state = 0, action) => {
  switch (action.type){
    case 'showValid':
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
