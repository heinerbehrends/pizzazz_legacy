import { abc } from '../Constants';
import { getRandomLetter } from './gameLogic';

export const getRandomAbc = () => getRandomLetter(abc);

export const zeroToCorrect = letter => (letter === '0' ? 'correct' : getRandomLetter(abc));

export const isAllCorrect = arr => !arr.filter(element => element !== 'correct').length;

export const randomOrFinal = (randomArr, finalString) => randomArr
  .map((letter, i) => (letter !== 'correct' ? getRandomLetter(abc) : finalString[i]));

export const markAsCorrect = (randomArr, finalString) => randomArr
  .map((letter, i) => (letter === finalString[i] ? 'correct' : letter));

const getNextLetterAbc = letter => abc[abc.indexOf(letter) + 1];

export const nextAbcOrFinal = (transitionArr, finalString) => transitionArr
  .map((letter, i) => (letter !== 'correct' ? getNextLetterAbc(letter) : finalString[i]));

export const isKeyframe = (time, duration) => Number.isInteger(time / duration);

export const getNextIndex = (time, duration) => (time / duration) - 1;

export const makeRandomArray = string => string
  .split('').map(getRandomAbc);

export const makeZerosArray = solution => ''.padEnd(7 - solution.length, '0').split('');

export const isFinished = (final, zeros) => final.concat(zeros).length === 7;
