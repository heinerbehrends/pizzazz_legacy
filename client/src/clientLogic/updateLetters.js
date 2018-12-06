// @flow
import type {
  DropProps,
  DropTarget,
  RandomOrValid,
} from '../actions/actionCreators';

export const replaceLetter = (
  word: string,
  letter: string,
  index: number
  ): string =>
    word
    .substring(0, index)
    .concat(letter)
    .concat(word.substring(index + 1));

type SwapProp = {
  index: number,
}
type SwapDrop = {
  targetString: string,
  targetIndex: number
}
export const swapLetters = (
  { index }: SwapProp,
  { targetLetter, targetString, targetIndex }: SwapDrop,
  ): string => {
  const firstMutation = replaceLetter(targetString, targetString[index], targetIndex);
  return replaceLetter(firstMutation, targetString[targetIndex], index);
};

export const updateLetters = (
  props: DropProps,
  target: DropTarget,
  randomOrValid: RandomOrValid
  ): string | false => {
  const {
    string,
    index,
    parent,
  } = props;
  const {
    targetIndex,
    targetParent,
    targetString,
  } = target;
  const isParent = (parent === randomOrValid);
  const isTargetParent = (targetParent === randomOrValid);

  if (isParent && isTargetParent) {
    return swapLetters(props, target);
  } if (isParent && !isTargetParent) {
    return replaceLetter(string, targetString[targetIndex], index);
  } if (!isParent && isTargetParent) {
    return replaceLetter(targetString, string[index], targetIndex);
  }
  return false;
};
