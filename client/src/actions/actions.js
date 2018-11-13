import {
  REPLACE_LETTER, SHOW_VALID, SEND_SOLUTION,
  SHOW_WINNER, START_GAME, SEND_NAME, JOIN_GAME,
} from '../actionTypes';

export const startGameAction = game => ({
  type: START_GAME,
  game,
});

export const replaceLettersAction = (randomLetters, validWord) => ({
  type: REPLACE_LETTER,
  randomLetters,
  validWord,
});

export const isValidIndexAction = index => ({
  type: SHOW_VALID,
  index,
});

export const sendSolutionAction = solution => ({
  type: SEND_SOLUTION,
  solution,
});

export const showWinnerAction = game => ({
  type: SHOW_WINNER,
  game,
});


export const sendNameAction = name => ({
  type: SEND_NAME,
  name,
});

export const joinGameAction = () => ({
  type: JOIN_GAME,
});
