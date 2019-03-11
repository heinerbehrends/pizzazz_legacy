import fs from 'fs';
import { parseLimit7, sortABC, getSortedWordsDict } from './createSortedDict';

const testFile = fs.readFileSync('serverLogic/testlist');
describe('parseLimit7', () => (
  it('creates an array from a file based on newline and rejects strings longer than seven characters', () => {
    expect(parseLimit7(testFile)).toEqual([
      'test',
      '1',
      '22',
      '333',
      '4444',
      '55555',
      '666666',
      '7777777',
      '',
    ]);
  })
));

describe('sortABC', () => (
  it('sorts a string alphabetically', () => {
    expect(sortABC('pizzazz')).toEqual('aipzzzz');
    expect(sortABC('gfedcba')).toEqual('abcdefg');
  })
));

describe('getSortedWordsDict', () => (
  it('creates an object where the keys are the sorted input and the values contain all the inputs anagrams', () => {
    expect(getSortedWordsDict(['pizzazz', 'regal', 'lager']))
      .toEqual({ aipzzzz: ['pizzazz'], aeglr: ['regal', 'lager'] });
  })
));
