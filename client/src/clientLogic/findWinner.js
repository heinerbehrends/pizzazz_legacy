import * as R from 'ramda';
import { letterValues } from '../Constants';

const getScore = R.curry(
  (dict, char, num) => R.prop(char, dict),
);
const getStdScore = getScore(letterValues);

const getLetterScore = (
  R.ifElse(
    R.flip(R.equals(4)),
    R.pipe(
      getStdScore,
      R.multiply(2),
    ),
    getStdScore,
  )
);

const mapI = R.addIndex(R.map);
export const getWordScore = R.pipe(mapI(getLetterScore), R.reduce(R.add, 0));
export const getMaxScore = R.pipe(R.map(getWordScore), R.reduce(R.max, 0));
export const getMaxLength = R.pipe(R.map(R.prop('length')), R.reduce(R.max, 0));

const isMaxLength = R.curry(
  (wordList, letters) => R.equals(getMaxLength(wordList), R.prop('length', letters)),
);
const isMaxScore = R.curry(
  (wordList, letters) => R.equals(getMaxScore(wordList), getWordScore(letters)),
);

const filterMaxLength = array => R.filter(isMaxLength(array), array);
const filterMaxScore = array => R.filter(isMaxScore(array), array);

export const getMaxLengthScore = R.pipe(filterMaxLength, filterMaxScore);

const isWinnerSolution = R.curry(
  (bestWords, solution) => R.contains(solution.solution, bestWords),
);
const getBestSolutions = R.pipe(R.map(R.prop('solution')), getMaxLengthScore);

export const getWinnerSolution = solutions => (
  R.find(isWinnerSolution(getBestSolutions(solutions)), solutions)
);
