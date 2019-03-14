import {
  put, select, take, call,
} from 'redux-saga/effects';
import { isValidAction } from './ScrabbleBoard/scrabbleBoardState';
import { lookupScrabbleBoard } from '../Definitions/definitionsState';
import updateLetters from './updateLetters';
import { getValidWords } from '../gameFlow/solutions/handleWinner';
import getIsValidIndex from './ScrabbleBoard/getIsValidIndex';

export const REPLACE_LETTER = 'REPLACE_LETTER';
export const END_DRAG = 'END_DRAG';


export const endDragAction = (props, target) => ({
  type: END_DRAG,
  props,
  target,
});

export const replaceLettersAction = (letterDisplay, scrabbleBoard) => ({
  type: REPLACE_LETTER,
  letterDisplay,
  scrabbleBoard,
});

function* handleDrop() {
  while (true) {
    const { props, target } = yield take(END_DRAG);
    const letterDisplay = updateLetters(props, target, 'letterDisplay');
    const scrabbleBoard = updateLetters(props, target, 'scrabbleBoard');

    yield put(replaceLettersAction(
      letterDisplay,
      scrabbleBoard,
    ));
    if (scrabbleBoard) {
      const validWords = yield select(getValidWords);
      const isValidIndex = getIsValidIndex(scrabbleBoard, validWords);
      yield put(isValidAction(isValidIndex));
      yield call(lookupScrabbleBoard, scrabbleBoard, isValidIndex);
    }
  }
}

export default handleDrop;
