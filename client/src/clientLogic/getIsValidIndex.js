// @flow
import { replace, match, toString, compose } from 'ramda';

const getRegExp = (string: string) => new RegExp(`["](${string})["]`);
const replace8withAtoZ = (letters: string) => replace('8', '[a-z]', letters);
const buildRegExObject = compose(
  getRegExp,
  replace8withAtoZ,
);

const isMatch = (wildcardLetters: string, validWords: Array<string>) => {
  return JSON.stringify(validWords).match(buildRegExObject(wildcardLetters));
};

const isValid = (letters: string, validWords: Array<string>): boolean => (
  letters.includes('8')
    ? !!isMatch(letters, validWords)
    : validWords.includes(letters)
);

const getIsValidIndex = (letters: string, validWords: Array<string>): number => {
  if (letters.length <= 1) {
    return 0;
  } if (isValid(letters, validWords)) {
    return letters.length;
  }
  return getIsValidIndex(letters.slice(0, letters.length - 1), validWords);
};

export default getIsValidIndex;
