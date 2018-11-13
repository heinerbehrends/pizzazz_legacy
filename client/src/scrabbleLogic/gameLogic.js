import { letterValues as LETTER_VALUES } from '../Constants';

export const replaceLetter = (string, letter, index) => string
  .substring(0, index)
  .concat(letter)
  .concat(string.substring(index + 1));

const swapLetters = (props, target) => {
  const firstMutation = replaceLetter(target.targetString, props.letter, target.targetIndex);
  return replaceLetter(firstMutation, target.targetLetter, props.index);
};

export const updateString = (props, target, randomOrValid) => {
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

export const getScore = (word, letterValues) => word
  .split('')
  .map((letter, index) => (index === 4 ? letterValues[letter] * 2 : letterValues[letter]))
  .reduce((sum, element) => element + sum);

export const getMaxScore = wordArray => wordArray
  .map(word => getScore(word, LETTER_VALUES))
  .reduce((max, value) => Math.max(max, value));

export const getMaxLength = wordArray => wordArray
  .map(word => word.length)
  .reduce((max, value) => Math.max(max, value));

export const getMaxLengthScore = (wordArray) => {
  const maxLength = wordArray.filter(word => word.length === getMaxLength(wordArray));
  return maxLength.filter(word => getScore(word, LETTER_VALUES) === getMaxScore(maxLength));
};

export const getWinnerSolution = (solutionArray) => {
  const solutions = solutionArray.map(solution => solution.solution);
  const maxLength = solutions
    .filter(solution => solution.length === getMaxLength(solutions));
  const maxLengthScore = maxLength
    .filter(word => getScore(word, LETTER_VALUES) === getMaxScore(maxLength));
  const winnerSolution = solutionArray.filter(solution => solution.solution === maxLengthScore[0]);

  return winnerSolution[0];
};

export const replaceWildCard = (wildCardString, validWords) => {
  const regEx = `(${wildCardString.split('8').join('[a-z]')}),`;
  return validWords.join(',').match(regEx)[1];
};

export const getRandomIndex = strArr => Math.floor(Math.random() * strArr.length);

export const getRandomLetter = strArr => strArr[getRandomIndex(strArr)];

export const makeBagOfLetters = letterDistribution => Object
  .keys(letterDistribution)
  .map(letter => letter.repeat(letterDistribution[letter]))
  .map(string => string.split(''))
  .reduce((acc, val) => acc.concat(val));
