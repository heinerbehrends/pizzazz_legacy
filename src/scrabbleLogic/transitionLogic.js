import { abc } from '../Constants';

export const getRandomIndex = string => Math.floor(Math.random() * string.length);
export const getRandomLetter = () => abc[getRandomIndex(abc)];
export const zeroToCorrect = letter => (letter === '0' ? 'correct' : getRandomLetter());
export const isAllCorrect = arr => !arr.filter(element => element !== 'correct').length;
export const randomOrCorrect = (randomArr, finalString) => randomArr
  .map((letter, i) => (letter !== 'correct' ? getRandomLetter() : finalString[i]));
export const markAsCorrect = (randomArr, finalString) => randomArr
  .map((letter, i) => (letter === finalString[i] ? 'correct' : letter));
