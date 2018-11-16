import { letterValues } from '../Constants';

export const replaceLetter = (string, letter, index) => string
  .substring(0, index)
  .concat(letter)
  .concat(string.substring(index + 1));

const swapLetters = (props, target) => {
  const firstMutation = replaceLetter(target.targetString, props.letter, target.targetIndex);
  return replaceLetter(firstMutation, target.targetLetter, props.index);
};

export const updateLetters = (props, target, randomOrValid) => {
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

export const getScore = (word, letterValuesDict) => word
  .split('')
  .map((letter, index) => (index === 4 ? letterValuesDict[letter] * 2 : letterValuesDict[letter]))
  .reduce((sum, element) => element + sum);

export const getMaxScore = wordArray => wordArray
  .map(word => getScore(word, letterValues))
  .reduce((max, value) => Math.max(max, value));

export const getMaxLength = wordArray => wordArray
  .map(word => word.length)
  .reduce((max, value) => Math.max(max, value));

export const getMaxLengthScore = (wordArray) => {
  const maxLength = wordArray.filter(word => word.length === getMaxLength(wordArray));
  return maxLength.filter(word => getScore(word, letterValues) === getMaxScore(maxLength));
};

export const getWinnerSolution = (solutionArray) => {
  const solutions = solutionArray.map(solution => solution.solution);
  const maxLength = solutions
    .filter(solution => solution.length === getMaxLength(solutions));
  const maxLengthScore = maxLength
    .filter(word => getScore(word, letterValues) === getMaxScore(maxLength));
  const winnerSolution = solutionArray.filter(solution => solution.solution === maxLengthScore[0]);

  return winnerSolution[0];
};

export const getRandomIndex = strArr => Math.floor(Math.random() * strArr.length);

export const getRandomLetter = strArr => strArr[getRandomIndex(strArr)];
