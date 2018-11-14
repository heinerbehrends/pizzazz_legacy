const wordScoreDict = require('./word_score_dict.json');
const getCombinations = require('./getCombinations');

const abc = 'abcdefghijklmnopqrstuvwxyz';

const sortString = string => string
  .split('')
  .sort()
  .join('');

// returns an object where the keys are ordered strings and
// the values are all valid anagrams of the ordered strings
const getSortedValidWords = dict => Object.keys(dict)
  .reduce((acc, word) => {
    const sortedWord = sortString(word);
    const sortedWords = acc;
    if ((sortedWord in sortedWords)) {
      if (typeof sortedWords[sortedWord] === 'string') {
        sortedWords[sortedWord] = [sortedWords[sortedWord], word];
      } else {
        sortedWords[sortedWord].push(word);
      }
    } else {
      sortedWords[sortedWord] = word;
    }
    return sortedWords;
  }, {});

const sortedWords = getSortedValidWords(wordScoreDict);

const findWords = (randomLetters, sortedValidWords) => {
  const sortedSubstrings = getCombinations(sortString(randomLetters));
  const validWords = sortedSubstrings
    .filter(substring => substring in sortedValidWords)
    .map(validSubstring => sortedWords[validSubstring]);
  return [].concat(...validWords);
};

const removeWildcard = string => string.split('8').join('');

const addAtoZ = string => abc.split('')
  .map(letter => `${string}${letter}`);

const findWordsWildcard = (wildcardString, sortedValidWords) => {
  const string = removeWildcard(wildcardString);
  const possibleStrings = addAtoZ(string);
  const sortedStrings = possibleStrings.map(sortString);
  const validWords = sortedStrings
    .map(sortedString => findWords(sortedString, sortedValidWords));
  return [...new Set([].concat(...validWords))];
};

/* eslint arrow-body-style: off */
const findAllValidWords = (randomLetters, sortedValidWords) => {
  return randomLetters.includes('8')
    ? findWordsWildcard(randomLetters, sortedValidWords)
    : findWords(randomLetters, sortedValidWords);
};

module.exports = { findAllValidWords, sortedWords };
