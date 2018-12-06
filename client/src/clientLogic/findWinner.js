// @flow
import { letterValues } from '../Constants';
import type {
  Solution,
  } from '../actions/actionCreators';

export const getScore = (
  word: string,
  letterValuesDict: { property: number }
  ): number =>
  word.split('')
  .map((letter, index) => (index === 4 ? letterValuesDict[letter] * 2 : letterValuesDict[letter]))
  .reduce((sum, element) => element + sum);

export const getMaxScore = (wordArray: Array<string>): number => wordArray
  .map(word => getScore(word, letterValues))
  .reduce((max, value) => Math.max(max, value));

export const getMaxLength = (wordArray: Array<string>): number => wordArray
  .map(word => word.length)
  .reduce((max, value) => Math.max(max, value));

export const getMaxLengthScore = (wordArray: Array<string>): Array<string> => {
  const maxLength = wordArray.filter(word => word.length === getMaxLength(wordArray));
  return maxLength.filter(word => getScore(word, letterValues) === getMaxScore(maxLength));
};

export const getWinnerSolution = (solutionArray: Array<Solution>): Solution => {
  const solutions = solutionArray.map(solution => solution.solution);
  const maxLengthSolutions = solutions.filter(
    solution => solution.length === getMaxLength(solutions)
  );
  const maxLengthScoreSolution = maxLengthSolutions.filter(
    word => getScore(word, letterValues) === getMaxScore(maxLengthSolutions)
  );
  const winnerSolution = solutionArray.filter(
    solution => solution.solution === maxLengthScoreSolution[0]
    );

  return winnerSolution[0];
};
