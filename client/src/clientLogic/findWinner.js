// @flow
import {
  addIndex, curry, reduce, compose, map, add, prop, filter, equals, find, max,
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

const isMaxLength = curry((array, string: string) => equals(getMaxLength(array), prop('length', string)));
const isMaxScore = curry((array, string: string) => equals(getMaxScore(array), getScore(string)));

const filterMaxLength = (array: Array<string>): Array<string> => filter(isMaxLength(array), array);
const filterMaxScore = (array: Array<string>): Array<string> => filter(isMaxScore(array), array);

export const getMaxLengthScore = compose(filterMaxScore, filterMaxLength);

const isWinnerSolution = curry((bestWords, solution: Solution) => bestWords.includes(solution.solution));
const getBestSolutions = compose(getMaxLengthScore, map(prop('solution')));
export const getWinnerSolution = (
  solutions: Array<Solution>,
): Solution => find(isWinnerSolution(getBestSolutions(solutions)), solutions);
