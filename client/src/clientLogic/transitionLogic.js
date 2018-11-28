import { abc } from '../Constants';
import { getRandomLetter } from './gameLogic';

export const getRandomAbc = () => getRandomLetter(abc);

export const isKeyframe = (time, duration) => Number.isInteger(time / duration);

export const getNextLetter = (time, duration) => (time / duration) - 1;

export const makeRandomArray = string => string
  .split('').map(getRandomAbc);

export const makeZerosArray = solution => ''.padEnd(7 - solution.length, '0').split('');

export const isFinished = (final, zeros) => final.concat(zeros).length === 7;
