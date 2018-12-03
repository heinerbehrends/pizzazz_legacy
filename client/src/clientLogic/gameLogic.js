// @flow
import { letterValues } from '../Constants';
import type {
  DropProps,
  DropTarget,
  Solution,
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

const swapLetters = (
  { letter, index }: DropProps,
  { targetLetter, targetString, targetIndex }: DropTarget,
  ): string => {
  const firstMutation = replaceLetter(targetString, letter, targetIndex);
  return replaceLetter(firstMutation, targetLetter, index);
};

export const updateLetters = (
  props: DropProps,
  target: DropTarget,
  randomOrValid: RandomOrValid
  ): string | false => {
  const {
    letter,
    string,
    index,
    parent,
  } = props;
  const {
    targetLetter,
    targetIndex,
    targetParent,
    targetString,
  } = target;
  const isParent = (parent === randomOrValid);
  const isTargetParent = (targetParent === randomOrValid);

  if (isParent && isTargetParent) {
    return swapLetters(props, target);
  } if (isParent && !isTargetParent) {
    return replaceLetter(string, targetLetter, index);
  } if (!isParent && isTargetParent) {
    return replaceLetter(targetString, letter, targetIndex);
  }
  return false;
};

export const getScore = (
  word: string,
  letterValuesDict: { property: number }
  ): number =>
  word.split('')
  .map((letter, index) => (index === 4 ? letterValuesDict[letter] * 2 : letterValuesDict[letter]))
  .reduce((sum, element) => element + sum);

export const getMaxScore = (wordArray: Array<string>): number => wordArray
  .map(word => getScore(word, letterValues))
  .reduce((max, value) => Math.max(max, value));

export const getMaxLength = (wordArray: Array<string>): number => wordArray
  .map(word => word.length)
  .reduce((max, value) => Math.max(max, value));

export const getMaxLengthScore = (wordArray: Array<string>): Array<string> => {
  const maxLength = wordArray.filter(word => word.length === getMaxLength(wordArray));
  return maxLength.filter(word => getScore(word, letterValues) === getMaxScore(maxLength));
};

export const getWinnerSolution = (solutionArray: Array<Solution>): Solution => {
  const solutions = solutionArray.map(solution => solution.solution);
  const maxLength = solutions
    .filter(solution => solution.length === getMaxLength(solutions));
  const maxLengthScore = maxLength
    .filter(word => getScore(word, letterValues) === getMaxScore(maxLength));
  const winnerSolution = solutionArray.filter(solution => solution.solution === maxLengthScore[0]);

  return winnerSolution[0];
};

export const getRandomIndex = (strArr: string | Array<any>): number => Math.floor(Math.random() * strArr.length);

export const getRandomLetter = (strArr: string): string => strArr[getRandomIndex(strArr)];
