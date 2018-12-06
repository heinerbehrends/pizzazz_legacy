// @flow
import { abc } from '../Constants';

export const getRandomIndex = (strArr: string | Array<any>): number => Math.floor(Math.random() * strArr.length);

export const getRandomLetter = (strArr: string): string => strArr[getRandomIndex(strArr)];

export const getRandomAbc = (): string => getRandomLetter(abc);

export const isKeyframe = (time: number, frameDuration: number): boolean => Number.isInteger(time / frameDuration);

export const getNextLetter = (time: number, frameDuration: number) => (time / frameDuration) - 1;

export const makeRandomArray = (string: string): Array<string> => string
  .split('').map(getRandomAbc);

export const makeZerosArray = (solution: string): Array<string> => ''.padEnd(7 - solution.length, '0').split('');

export const isFinished = (final: Array<string>, zeros: Array<string>): boolean => final.concat(zeros).length === 7;
