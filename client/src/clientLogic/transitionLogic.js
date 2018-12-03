// @flow
import { abc } from '../Constants';
import { getRandomLetter } from './gameLogic';

export const getRandomAbc = (): string => getRandomLetter(abc);

export const isKeyframe = (time: number, duration: number): boolean => Number.isInteger(time / duration);

export const getNextLetter = (time: number, duration: number) => (time / duration) - 1;

export const makeRandomArray = (string: string): Array<string> => string
  .split('').map(getRandomAbc);

export const makeZerosArray = (solution: string): Array<string> => ''.padEnd(7 - solution.length, '0').split('');

export const isFinished = (final: Array<string>, zeros: Array<string>): boolean => final.concat(zeros).length === 7;
