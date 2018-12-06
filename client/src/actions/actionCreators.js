// @flow
import {
  REPLACE_LETTER, IS_VALID, SEND_SOLUTION, END_DRAG,
  SHOW_WINNER, START_GAME, SEND_NAME, JOIN_GAME, MESSAGE,
} from './actionTypes';

export type Game = {
  randomLetters: string,
  validWords: Array<string>,
  seconds: number,
}

export const startGameAction = (game: Game) => ({
  type: START_GAME,
  game,
});

export type RandomOrValid = 'randomLetters' | 'scrabbleBoard';

export type DropProps = {
  string: string,
  index: number,
  parent: RandomOrValid,
};

export type DropTarget = {
  targetString: string,
  targetIndex: number,
  targetParent: RandomOrValid,
};

export const endDragAction = (props: DropProps, target: DropTarget) => ({
  type: END_DRAG,
  props,
  target,
});

export const replaceLettersAction = (randomLetters: string, validWord: string) => ({
  type: REPLACE_LETTER,
  randomLetters,
  validWord,
});

export const isValidIndexAction = (index: number) => ({
  type: IS_VALID,
  index,
});

export type Solution = {
  solution: string,
  name: string,
}

export const sendSolutionAction = (solution: Solution) => ({
  type: SEND_SOLUTION,
  solution,
});

export const showWinnerAction = (game: Game) => ({
  type: SHOW_WINNER,
  game,
});


export const sendNameAction = (name: string) => ({
  type: SEND_NAME,
  name,
});

export const joinGameAction = () => ({
  type: JOIN_GAME,
});

export const messageAction = (message: string) => ({
  type: MESSAGE,
  message,
});
