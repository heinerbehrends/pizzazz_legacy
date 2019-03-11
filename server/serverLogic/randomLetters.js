/* eslint no-underscore-dangle: off */
import * as R from 'ramda';
import { shuffle, makeBagOfLetters } from './helperFunctions';
import { letterDistributionStd, vowels } from '../Constants';

const bagOfLetters = makeBagOfLetters(letterDistributionStd);

const getRandomIndex = strArr => Math.floor(Math.random() * strArr.length);
const grabTwoOrThree = () => (Math.random() < 0.7 ? 3 : 2);
const grabRandom = array => array[getRandomIndex(array)];

const getRandomVowel = () => R.pipe(
  R.filter(R.includes(R.__, vowels)),
  grabRandom,
)(bagOfLetters);

const getRandomConsonant = () => R.pipe(
  R.filter(R.complement(R.includes(R.__, vowels))),
  grabRandom,
)(bagOfLetters);

const grabTwoOrThreeVowels = (letter, index) => (
  index < grabTwoOrThree()
    ? getRandomVowel()
    : getRandomConsonant()
);

const indexedMap = R.addIndex(R.map);

const hasTwoWildcards = R.pipe(
  R.countBy(el => R.equals(el, '8')),
  R.prop('true'),
  R.equals(2),
);

const replaceWildcard = R.replace(
  '8',
  grabRandom(R.reject(el => el === '8', bagOfLetters)),
);

const makeRandomLetters = R.pipe(
  () => indexedMap(grabTwoOrThreeVowels, Array(7)),
  shuffle,
  R.join(''),
  R.when(hasTwoWildcards, replaceWildcard),
);

export default makeRandomLetters;
