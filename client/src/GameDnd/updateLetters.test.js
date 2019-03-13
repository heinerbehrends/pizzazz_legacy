import updateLetters, { replaceLetter, swapLetters } from './updateLetters';


describe('replaceLetter', () => {
  it('replaces the letter of a given word at a given index with a given letter', () => {
    expect(replaceLetter('zizzazz', 'p', 0)).toEqual('pizzazz');
    expect(replaceLetter('pizzazy', 'z', 6)).toEqual('pizzazz');
  });
});

describe('swapLetters', () => {
  it('swaps letters of a given string between two given indexes', () => {
    expect(swapLetters(
      { index: 0 },
      { targetString: 'zizzazp', targetIndex: 6 },
    )).toEqual('pizzazz');
  });
});

describe('updateLetters', () => {
  it('swaps the letters if the letter is dragged to a different letter in the given line', () => {
    expect(updateLetters(
      {
        string: 'pazzizz',
        index: 1,
        parent: 'randomLetters',
      },
      {
        targetString: 'pazzizz',
        targetIndex: 4,
        targetParent: 'randomLetters',
      },
      'randomLetters',
    )).toEqual('pizzazz');
  });
  it('replaces the letter with the letter from the other row when dragging between rows', () => {
    expect(updateLetters(
      {
        string: 'bizzazz',
        index: 0,
        parent: 'randomLetters',
      },
      {
        targetString: 'orrazip',
        targetIndex: 6,
        targetParent: 'scrabbleBoard',
      },
      'randomLetters',
    )).toEqual('pizzazz');
    expect(updateLetters(
      {
        string: '!izzazz',
        index: 0,
        parent: 'randomLetters',
      },
      {
        targetString: 'hoorayp',
        targetIndex: 6,
        targetParent: 'scrabbleBoard',
      },
      'scrabbleBoard',
    )).toEqual('hooray!');
  });
  it('returns false if the given row is neither the parent not the targetParent', () => {
    expect(updateLetters(
      {
        string: '!izzazz',
        index: 0,
        parent: 'randomLetters',
      },
      {
        targetString: 'hoorayp',
        targetIndex: 6,
        targetParent: 'randomLetters',
      },
      'scrabbleBoard',
    )).toEqual(false);
  });
});
