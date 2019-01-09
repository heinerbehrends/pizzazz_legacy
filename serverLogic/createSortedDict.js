import fs from 'fs';
import * as R from 'ramda';

const wordListFile = fs.readFileSync('serverLogic/twl2014');

export const parseLimit7 = R.pipe(
  R.toString,
  R.split('\n'),
  R.reject(el => R.gt(R.length(el), 7)),
);

const wordList = parseLimit7(wordListFile);

const byAlphabet = R.comparator((a, b) => a < b);
export const sortABC = R.pipe(
  R.splitEvery(1),
  R.sort(byAlphabet),
  R.join(''),
);

const associateSorted = (dict, string) => {
  const resultDict = dict;
  resultDict[sortABC(string)] = R.append(string, dict[sortABC(string)]);
  return resultDict;
};

export const getSortedWordsDict = wordArray => (
  wordArray.reduce(
    associateSorted,
    {},
  )
);

const sortedWordsDict = getSortedWordsDict(wordList);

export default sortedWordsDict;
