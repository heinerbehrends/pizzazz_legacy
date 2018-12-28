// @flow
import {
  addIndex, curry, reduce, compose, map, add, prop,
  filter, equals, find, max,
} from 'ramda';
import type { Solution } from '../actions/actionCreators';
import { letterValues } from '../Constants';

const getLetterScore = curry((
  letterValuesDict: { property: number },
  letter: string,
  index: number,
): number => (index === 4 ? letterValuesDict[letter] * 2 : letterValuesDict[letter]));

const getStdLetterScore = getLetterScore(letterValues);
const mapI = addIndex(map);
const mapScore = mapI(getStdLetterScore);
const addScore = reduce(add, 0);

export const getScore = compose(addScore, mapScore);
export const getMaxScore = compose(reduce(max, 0), map(getScore));
export const getMaxLength = compose(reduce(max, 0), map(prop('length')));

const isMaxLength = curry(
  (wordList, letters) => equals(getMaxLength(wordList), prop('length', letters))
);
const isMaxScore = curry(
  (wordList, letters) => equals(getMaxScore(wordList), getScore(letters))
);

type WordList = Array<string>;
const filterMaxLength = (array: WordList): WordList => filter(isMaxLength(array), array);
const filterMaxScore = (array: WordList): WordList => filter(isMaxScore(array), array);

export const getMaxLengthScore = compose(filterMaxScore, filterMaxLength);

const isWinnerSolution = curry((bestWords, solution: Solution) => bestWords.includes(solution.solution));
const getBestSolutions = compose(getMaxLengthScore, map(prop('solution')));

export const getWinnerSolution = (
  solutions: Array<Solution>,
): Solution => find(isWinnerSolution(getBestSolutions(solutions)), solutions);
