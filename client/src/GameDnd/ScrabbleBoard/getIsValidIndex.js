/* eslint no-underscore-dangle: off */
import * as R from 'ramda';

const isValid = (letters, wordList) =>
  R.ifElse(
    R.includes('8'),
    R.pipe(
      R.replace('8', '[a-z]'),
      (str) => new RegExp(`["]${str}["]`),
      R.match(R.__, R.toString(wordList)),
      R.isEmpty,
      R.not
    ),
    R.includes(R.__, wordList)
  )(letters);

const getIsValidIndex = (letters, validWords) => {
  if (letters.length <= 1) {
    return 0;
  }
  if (isValid(letters, validWords)) {
    return letters.length;
  }
  return getIsValidIndex(letters.slice(0, letters.length - 1), validWords);
};

export default getIsValidIndex;
