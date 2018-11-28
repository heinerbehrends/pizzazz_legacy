import { put, select, take } from 'redux-saga/effects';
import { END_DRAG } from '../actions/actionTypes';
import { replaceLettersAction, isValidIndexAction } from '../actions/actionCreators';
import { updateLetters } from '../clientLogic/gameLogic';
import { getValidWords } from './handleWinner';
import getIsValidIndex from '../clientLogic/getIsValidIndex';


function* handleDrop() {
  while (true) {
    const dropAction = yield take(END_DRAG);
    const validWords = yield select(getValidWords);
    const { props, target } = dropAction;

    const scrabbleBoard = updateLetters(props, target, 'scrabbleBoard');
    const randomLetters = updateLetters(props, target, 'randomLetters');
    yield put(replaceLettersAction(randomLetters, scrabbleBoard));

    if (scrabbleBoard) {
      const isValidIndex = getIsValidIndex(scrabbleBoard, validWords);
      yield put(isValidIndexAction(isValidIndex));
    }
  }
}

export default handleDrop;
