import fs from 'fs';
import {
  comparator, compose, join, sort, splitEvery,
  append, reject, gt, length, toString, split,
} from 'ramda';

const wordListFile = fs.readFileSync('serverLogic/twl2014');

const parseLimit7 = compose(
  reject(el => gt(length(el), 7)),
  split('\n'),
  toString,
);

const wordList = parseLimit7(wordListFile);

const byAlphabet = comparator((a, b) => a < b);
export const sortABC = compose(
  join(''),
  sort(byAlphabet),
  splitEvery(1),
);

const associateSorted = (dict, string) => {
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

export default sortedWordsDict;
