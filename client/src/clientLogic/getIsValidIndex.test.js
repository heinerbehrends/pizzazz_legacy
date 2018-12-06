import getIsValidIndex from './getIsValidIndex'

const validWordsArray = [
  'pizzazz',
  'pizazz',
  'pizzaz',
  'pizza',
  'pia',
  'zap',
  'zip',
  'zzz',
  'ai',
  'pa',
  'pi',
  'za',
];

describe('getIsValidIndex', () => {
  it('returns the correct 1-based index of the last letter of the longest valid word', () => {
    expect(getIsValidIndex('pizzazz', validWordsArray)).toEqual(7);
    expect(getIsValidIndex('pi8zazz', validWordsArray)).toEqual(7);
    expect(getIsValidIndex('pizzzza', validWordsArray)).toEqual(2);
    expect(getIsValidIndex('p8zzaiz', validWordsArray)).toEqual(5);
  });
});
