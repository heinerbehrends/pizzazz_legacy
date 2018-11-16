import {
  REPLACE_LETTER, IS_VALID, SEND_SOLUTION, END_DRAG,
  SHOW_WINNER, START_GAME, SEND_NAME, JOIN_GAME,
} from './actionTypes';

export const startGameAction = game => ({
  type: START_GAME,
  game,
});

export const endDragAction = (props, target) => ({
  type: END_DRAG,
  props,
  target,
});

export const replaceLettersAction = (randomLetters, validWord) => ({
  type: REPLACE_LETTER,
  randomLetters,
  validWord,
});

export const isValidIndexAction = index => ({
  type: IS_VALID,
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
