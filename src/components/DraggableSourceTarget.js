import { updateString } from '../scrabbleLogic/gameLogic'
import getIsValidIndex from '../scrabbleLogic/getIsValidIndex'


export const letterSource = {

  beginDrag(props) {
    return {
      sourceLetter: props.letter,
      sourceIndex: props.index,
    }
  },

  endDrag(props, monitor) {
    if (monitor.didDrop()) {

      const target = monitor.getDropResult();
      const { replaceLettersAction, showValidAction, validWords, dispatch } = props;

      const validWord = updateString(props, target, 'validWord');
      const randomLetters = updateString(props, target, 'randomLetters');

      dispatch(replaceLettersAction(randomLetters, validWord));

      if (validWord) {
        const isValidIndex = getIsValidIndex(validWord, validWords);
        dispatch(showValidAction(isValidIndex))
      }
    }
  }
}

export const letterTarget = {
  drop(props) {
    const { letter, string, index, parent } = props;
    return {
      targetLetter: letter,
      targetString: string,
      targetIndex: index,
      targetParent: parent,
    }
  }
}
