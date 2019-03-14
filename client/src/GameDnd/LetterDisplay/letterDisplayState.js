import { REPLACE_LETTER } from '../gameDndState';

const LETTER_DISPLAY = 'LETTER_DISPLAY';

export const letterDisplayAction = letterDisplay => ({
  type: LETTER_DISPLAY,
  letterDisplay,
});

export const letterDisplayReducer = (state = '8888888', action) => {
  switch (action.type) {
    case LETTER_DISPLAY:
      return action.letterDisplay.padEnd(7, '0');
    case REPLACE_LETTER:
      return action.letterDisplay ? action.letterDisplay : state;
    default:
      return state;
  }
};
