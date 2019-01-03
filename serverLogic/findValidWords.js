import {
  compose, filter, has, __, prop, map, flatten,
  replace, concat, uniq, ifElse, contains,
} from 'ramda';
import sortedWordsDict, { sortABC } from './createSortedDict';
import { getCombinations } from './helperFunctions';
import { abc } from '../Constants';

const isInSortedDict = has(__, sortedWordsDict);
const getValidAnagrams = prop(__, sortedWordsDict);

const findWords = compose(
  flatten,
  map(getValidAnagrams),
  filter(isInSortedDict),
  getCombinations,
  sortABC,
);

const addABC = string => map(concat(__, string), abc);

const findWordsWildcard = (
  compose(
    uniq,
    flatten,
    map(findWords),
    addABC,
    replace('8', ''),
  )
);

const findAllValidWords = (
  ifElse(
    contains('8'),
    findWordsWildcard,
    findWords,
  )
);

export default findAllValidWords;
