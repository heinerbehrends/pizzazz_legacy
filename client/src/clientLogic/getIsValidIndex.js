// @flow
const getRegExp = (string: string) => new RegExp(`["](${string})["]`);
const replace8withAtoZ = (letters: string) => letters.split('8').join('[a-z]');
const buildRegExObject = (letters: string) => getRegExp(replace8withAtoZ(letters));
const isMatch = (wildcardLetters: string, validWords: Array<string>) => {
  const validWordsString = JSON.stringify(validWords);
  const potentialWords = buildRegExObject(wildcardLetters);
  return validWordsString.match(potentialWords);
};

// returns the 1-based index that matches the end of the longest valid word
const getIsValidIndex = (
  letters: string,
  validWords: Array<string>
): number => letters
  .split('')
  .reduce(
    (acc, letter, i) => {
      const index = i + 1;
      // don't look for 1-letter words
      if (index <= 1) {
        return 0;
      }
      const potentialWord = letters.substring(0, index);
      // if the substring includes the wildcard match it using regex
      if (potentialWord.includes('8')) {
        if (isMatch(potentialWord, validWords)) {
          return index;
        }
      }
      // else test if its a valid word with array.includes
      if (validWords.includes(potentialWord)) {
        return index;
      }
      return acc;
    }, 0
  );

export default getIsValidIndex;
