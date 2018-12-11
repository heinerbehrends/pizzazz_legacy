import { letterValues } from '../Constants';
import {
  getScore,
  getMaxScore,
  getMaxLength,
  getMaxLengthScore,
  getWinnerSolution,
} from './findWinner';

describe('getScore', () => {
  it('returns the correct score for a given word', () => {
    expect(getScore('pizzazz', letterValues)).toEqual(46);
    expect(getScore('pizzzaz', letterValues)).toEqual(55);
  });
});

describe('getMaxScore', () => {
  it('returns the highest score of the words in a given array', () => {
    expect(getMaxScore([
      'pizzazz',
      'pizzzaz',
    ])).toEqual(55);
  });
});

describe('getMaxLength', () => {
  it('returns the maximum length of an array of words', () => {
    expect(getMaxLength([
      'pizza',
      'pizzazz',
    ])).toEqual(7);
    expect(getMaxLength([
      'pizza',
      'pi',
    ])).toEqual(5);
  });
});

describe('getMaxLengthScore', () => {
  it('returns only the longest words with the maximum score', () => {
    expect(getMaxLengthScore([
      'zzzzzz',
      'eeeeeee',
      'aaaaaaa',
    ])).toEqual([
      'eeeeeee',
      'aaaaaaa',
    ]);
    expect(getMaxLengthScore([
      'zzzzzzz',
      'eeeeeee',
      'aaaaaaa',
    ])).toEqual([
      'zzzzzzz',
    ]);
  });
});

describe('getWinnerSolution', () => {
  it('returns the first of all the best solutions', () => {
    expect(getWinnerSolution([
      { name: 'pizarro', solution: 'pizzazz' },
      { name: 'asdf', solution: 'ceiling' },
    ])).toEqual({ name: 'pizarro', solution: 'pizzazz' });
    expect(getWinnerSolution([
      { name: 'pizarro', solution: 'pizzazz' },
      { name: 'asdf', solution: 'pizzazz' },
      { name: 'sdfg', solution: 'pizzazz' },
    ])).toEqual({ name: 'pizarro', solution: 'pizzazz' });
  });
});
