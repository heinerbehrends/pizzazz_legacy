/* eslint no-underscore-dangle: off */
import * as R from 'ramda';
import sortedWordsDict, { sortABC } from './createSortedDict';
import { getCombinations } from './helperFunctions';
import { abc } from '../Constants';

const isInSortedDict = R.has(R.__, sortedWordsDict);
const getValidAnagrams = R.prop(R.__, sortedWordsDict);

const findWords = R.pipe(
  sortABC,
  getCombinations,
  R.filter(isInSortedDict),
  R.map(getValidAnagrams),
  R.flatten,
);

const addABC = string => R.map(R.concat(R.__, string), abc);

const findWordsWildcard = (
  R.pipe(
    R.replace('8', ''),
    addABC,
    R.map(findWords),
    R.flatten,
    R.uniq,
  )
);

const findAllValidWords = (
  R.ifElse(
    R.contains('8'),
    findWordsWildcard,
    findWords,
  )
);

export default findAllValidWords;
