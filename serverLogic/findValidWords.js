// @flow
import fs from 'fs';
import {
  comparator, compose, join, sort, splitEvery,
  append, reject, gt, length, toString,
  split, filter, has, __, prop, map, flatten,
} from 'ramda';
import { getCombinations } from './helperFunctions';

const wordListFile = fs.readFileSync('serverLogic/twl2014');

const parseLimit7 = compose(
  reject(el => gt(length(el), 7)),
  split('\n'),
  toString,
);

const wordList = parseLimit7(wordListFile);

const byAlphabet = comparator((a, b) => a < b);
const sortABC = compose(
  join(''),
  sort(byAlphabet),
  splitEvery(1),
);

const associateSorted = (dict: Object, string: string): Object => {
  const resultDict = dict;
  resultDict[sortABC(string)] = append(string, dict[sortABC(string)]);
  return resultDict;
};
const getSortedWordsDict = wordArray => (
  wordArray.reduce(
    associateSorted,
    {},
  )
);

const sortedWordsDict = getSortedWordsDict(wordList);

const isInSortedDict = has(__, sortedWordsDict);
const getUnsortedAnagrams = prop(__, sortedWordsDict);
/* input: a string to search for and a sorted key dictionary
ouput: an array of all words in the dictionary that are combinations of the letters in the string */
const findWords = compose(
  flatten,
  map(getUnsortedAnagrams),
  filter(isInSortedDict),
  getCombinations,
  sortABC,
);


const removeWildcard = string => string.split('8').join('');
const abc = 'abcdefghijklmnopqrstuvwxyz';
const addAtoZ = string => abc
  .split('')
  .map(letter => `${string}${letter}`);

/* removes the wildcard, adds all the letters and than runs findWords
input: a string with the one wildcard character to search for and a sorted key dictionary
ouput: an array of all words in the dictionary that are combinations of the letters in the string */
const findWordsWildcard = (wildcardString, sortedDict) => {
  const string = removeWildcard(wildcardString);
  const possibleStrings = addAtoZ(string);
  const validWords = possibleStrings
    .map(letters => findWords(letters, sortedDict));
  return [...new Set([].concat(...validWords))];
};

const findAllValidWords = (randomLetters: string, sortedDict: Array<string>): Array<string> => (
  randomLetters.includes('8')
    ? findWordsWildcard(randomLetters, sortedDict)
    : findWords(randomLetters, sortedDict)
);
console.log(findWords('pizzazz', sortedWordsDict))
module.exports = { findAllValidWords, sortedWordsDict };
