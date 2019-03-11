import findAllValidWords from './findValidWords';

describe('findAllValidWords', () => it('finds all valid words', () => {
  expect(findAllValidWords('pizza')).toEqual([
    'pizza',
    'pia',
    'ai',
    'zap',
    'pa',
    'za',
    'zip',
    'pi',
  ]);
  expect(findAllValidWords('b8')).toEqual([
    'ab',
    'ba',
    'be',
    'bi',
    'bo',
    'by',
  ]);
}));
