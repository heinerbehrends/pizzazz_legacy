// @flow
import * as t from './actionTypes';

export type Game = {
  randomLetters: string,
  validWords: Array<string>,
  seconds: number,
}

export const startGameAction = (game: Game) => ({
  type: t.START_GAME,
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
  type: t.END_DRAG,
  props,
  target,
});

export const replaceLettersAction = (randomLetters: string, scrabbleBoard: string) => ({
  type: t.REPLACE_LETTER,
  randomLetters,
  scrabbleBoard,
});

export const isValidAction = (index: number) => ({
  type: t.IS_VALID,
  index,
});

export type Solution = {
  solution: string,
  name: string,
}

export const sendSolutionAction = (solution: Solution) => ({
  type: t.SEND_SOLUTION,
  solution,
});

export const sendNameAction = (name: string) => ({
  type: t.SEND_NAME,
  name,
});

export const joinGameAction = () => ({
  type: t.JOIN_GAME,
});

export const messageAction = (message: string) => ({
  type: t.MESSAGE,
  message,
});

export const lookupAction = (word: string) => ({
  type: t.LOOK_UP,
  word,
});

export const definitionAction = (definition: string) => ({
  type: t.DEFINE,
  definition,
});

export const countdownAction = (value: number) => ({
  type: t.COUNTDOWN,
  value,
});

export const newSolutionAction = (solution: string) => ({
  type: t.NEW_SOLUTION,
  solution,
});
