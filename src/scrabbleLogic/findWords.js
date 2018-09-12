export function findValidWord(string, wordScoreDict) {
  string = string.toLowerCase();
  var validWordIndex = 0;
  for (let i = 2; i <= string.length; i++) {
    if (wordScoreDict.hasOwnProperty(string.substring(0, i))) {
      validWordIndex = i;
    }
  }
  const longestValidWord = string.substring(0, validWordIndex);
  return [longestValidWord, wordScoreDict[longestValidWord]]
}

export function findValidWordWildcard(string, wordScoreString) {

  string = string.toLowerCase();
  var validWords = [];

  for (let i = 2; i <= string.length; i++) {
    let substring = string.substring(0, i);
    let regEx = new RegExp(
      '["](' +
      substring.split('8')
               .join('[a-z]?') +
      ')["]:(\\d*)');

    let result = wordScoreString.match(regEx);

    if (result != null) {
      validWords = result;
    }
  }
  if (validWords.length !== 0) {
    return [validWords[1], validWords[2]];
  }
}

export function findValidSubstrings(string, wordScoreDict) {
  var validWordIndexes = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      if (wordScoreDict.hasOwnProperty(string.substring(i, j))) {
        validWordIndexes.push([i, j]);
      }
    }
  }
  return validWordIndexes;
}

export function findValidSubstringsWildcard(string, wordScoreString) {
  var validWords = []

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      let substring = string.substring(i, j);
      let regEx = new RegExp(
        '["](' +
        substring.split('8')
                 .join('[a-z]?') +
        ')["]:(\\d*)');
      let result = wordScoreString.match(regEx);
      if (result !== null) {
        validWords.push(result);
      }
    }
  }
  return validWords;
}
