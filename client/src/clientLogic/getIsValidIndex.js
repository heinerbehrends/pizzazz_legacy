// @flow
const getRegExp = (string: string) => new RegExp(`["](${string})["]`);
const replace8withAtoZ = (letters: string) => letters.split('8').join('[a-z]');
const buildRegExObject = (letters: string) => getRegExp(replace8withAtoZ(letters));

const isMatch = (wildcardLetters: string, validWords: Array<string>) => {
  const validWordsString = JSON.stringify(validWords);
  const potentialWords = buildRegExObject(wildcardLetters);
  return validWordsString.match(potentialWords);
};

const isValid = (letters: string, validWords: Array<string>): boolean => {
  if (letters.includes('8')) {
    return !!isMatch(letters, validWords);
  }
  return validWords.includes(letters);
};

const getIsValidIndex = (letters: string, validWords: Array<string>): number => {
  if (letters.length <= 1) {
    return 0;
  } if (isValid(letters, validWords)) {
    return letters.length;
  }
  return getIsValidIndex(letters.slice(0, letters.length - 1), validWords);
};

export default getIsValidIndex;
