import {
  compose, map, includes, __, filter, complement, reject,
  replace, equals, prop, countBy, when, addIndex,
} from 'ramda';
import { shuffle, makeBagOfLetters } from './helperFunctions';
import { letterDistributionStd, vowels } from '../Constants';

const bagOfLetters = makeBagOfLetters(letterDistributionStd);

const getRandomIndex = strArr => Math.floor(Math.random() * strArr.length);
const grabTwoOrThree = () => (Math.random() < 0.7 ? 3 : 2);
const grabRandom = array => array[getRandomIndex(array)];

const getRandomVowel = () => compose(
  grabRandom,
  filter(includes(__, vowels)),
)(bagOfLetters);

const getRandomConsonant = () => compose(
  grabRandom,
  filter(complement(includes(__, vowels))),
)(bagOfLetters);

const grabTwoOrThreeVowels = (letter, index) => (
  index < grabTwoOrThree()
    ? getRandomVowel()
    : getRandomConsonant()
);

const indexedMap = addIndex(map);

const hasTwoWildcards = compose(
  equals(2),
  prop('true'),
  countBy(el => equals(el, '8')),
);

const replaceWildcard = replace(
  '8',
  grabRandom(reject(el => el === '8', bagOfLetters)),
);

const makeRandomLetters = compose(
  when(hasTwoWildcards, replaceWildcard),
  shuffle,
  () => indexedMap(grabTwoOrThreeVowels, Array(7)),
);

export default makeRandomLetters;
