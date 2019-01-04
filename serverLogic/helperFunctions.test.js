import { makeBagOfLetters, getCombinations } from './helperFunctions';

describe('makeBagOfLetters', () => it('repeats the letter according to the frequency', () => {
  expect(makeBagOfLetters({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'b', 'c', 'c', 'c']);
  expect(makeBagOfLetters({ a: 5 })).toEqual(['a', 'a', 'a', 'a', 'a']);
}));

describe('getCombinations', () => it('returns an array of all combinations excluding single letters', () => {
  expect(getCombinations('abc')).toEqual(['abc', 'ab', 'ac', 'bc']);
  expect(getCombinations('abcd')).toEqual(['abcd', 'abc', 'abd', 'ab', 'acd', 'ac', 'ad', 'bcd', 'bc', 'bd', 'cd']);
}));
