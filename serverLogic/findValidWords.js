const wordScoreDict = require('./word_score_dict.json');

const sortString = string => string
  .split('')
  .sort()
  .join('');

/* input: an object in which the keys are all valid words for the app.
output: an object in which the keys are the words of the dictionary ordered
alphabetically and the values are all valid words that are anagrams of the keys */
const getSortedWordsDict = dict => Object.keys(dict)
  .reduce((acc, word) => {
    const sortedWord = sortString(word);
    const sortedWordsDict = acc;

    if ((sortedWord in sortedWordsDict)) {
      if (typeof sortedWordsDict[sortedWord] === 'string') {
        sortedWordsDict[sortedWord] = [sortedWordsDict[sortedWord], word];
      } else {
        sortedWordsDict[sortedWord].push(word);
      }
    } else {
      sortedWordsDict[sortedWord] = word;
    }
    return sortedWordsDict;
  }, {});

const sortedWordsDict = getSortedWordsDict(wordScoreDict);

/* input: a string to search for and a sorted key dictionary
ouput: an array of all words in the dictionary that are combinations of the letters in the string */
const findWords = (randomLetters, sortedDict) => {
  const getCombinations = (string) => {
    const combine = (active, rest, array) => {
      if (!active && !rest) {
        return null;
      } if (!rest) {
        array.push(active);
      } else {
        combine(active + rest[0], rest.slice(1), array);
        combine(active, rest.slice(1), array);
      }
      const resultArray = array.filter(word => word.length > 1);
      return [...new Set(resultArray)];
    };
    return combine('', string, []);
  };

  const sortedRandomLetters = sortString(randomLetters);
  const sortedCombinations = getCombinations(sortedRandomLetters);
  const validWords = sortedCombinations
    .filter(combination => combination in sortedDict)
    .map(validCombination => sortedWordsDict[validCombination]);
  return [].concat(...validWords);
};

const removeWildcard = string => string.split('8').join('');
const abc = 'abcdefghijklmnopqrstuvwxyz';
const addAtoZ = string => abc.split('')
  .map(letter => `${string}${letter}`);

/* removes the wildcard, adds all the letters and than runs findWords
input: a string with the one wildcard character to search for and a sorted key dictionary
ouput: an array of all words in the dictionary that are combinations of the letters in the string */
const findWordsWildcard = (wildcardString, sortedDict) => {
  const string = removeWildcard(wildcardString);
  const possibleStrings = addAtoZ(string);
  const validWords = possibleStrings
    .map(sortedString => findWords(sortedString, sortedDict));
  return [...new Set([].concat(...validWords))];
};

/* eslint arrow-body-style: off */
const findAllValidWords = (randomLetters, sortedDict) => {
  return randomLetters.includes('8')
    ? findWordsWildcard(randomLetters, sortedDict)
    : findWords(randomLetters, sortedDict);
};

module.exports = { findAllValidWords, sortedWordsDict };
