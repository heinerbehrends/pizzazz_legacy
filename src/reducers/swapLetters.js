export default swapLettersReducer = (state, action) => {
  switch (action.type) {
    case 'swapLetters':
      console.log(state);
    default:
      return state;
  }
}
