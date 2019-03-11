import { REPLACE_LETTER } from '../gameDndState';

const RANDOM_LETTERS = 'RANDOM_LETTERS';

export const randomLettersAction = randomLetters => ({
  type: RANDOM_LETTERS,
  randomLetters,
})

export const randomLettersReducer = (state = '8888888', action) => {
  switch (action.type) {
    case RANDOM_LETTERS:
      return action.randomLetters.padEnd(7, '0');
    case REPLACE_LETTER:  
      return action.randomLetters ? action.randomLetters : state;
    default:  
      return state;
  }    
};  

