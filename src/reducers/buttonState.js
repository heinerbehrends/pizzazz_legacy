const buttonStateReducer = (state='init', action) => {
  switch (action.type) {
    case 'makeRandomLetters':
      return 'disabled';
    case 'makeRandomLettersVowels':
      return 'disabled';
    case 'showValid':
      if (action.index !== 0) {
        return 'play';
      }
      else {
        return 'disabled';
      }
    default:
      return state;
  }
}

export default buttonStateReducer;
