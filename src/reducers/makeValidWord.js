const validWordReducer = (state = "0000000", action) => {
  switch(action.type) {
    case 'replaceLetter':
    if (action.target === 'validWord') {
      return state.substring(0, action.index)
                  .concat(action.letter)
                  .concat(state.substring(action.index + 1));
    }
    else {
      return state;
    }
    default:
      return state;
  }
}

export default validWordReducer;
