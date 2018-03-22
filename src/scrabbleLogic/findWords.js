import { wordScoreDict, wordScoreString } from '../Constants'

export function findValidWord(string, wordScoreDict) {
  var validWords = [];
  for (let i = 1; i <= string.length; i++) {
    if (wordScoreDict.hasOwnProperty(string.substring(0, i))) {
      validWords.push(i);
    }
  }
  return string.substring(0, Math.max(...validWords))
}

export function findValidWordWildcard(string, wordScoreString) {
  var validWords = [];
  for (let i = 1; i <= string.length; i++) {
    let substring = string.substring(0, i);
    let regEx = new RegExp(
      '["](' +
      substring.split('8')
               .join('[a-z]?') +
      ')["]:(\\d*)');
    let result = wordScoreString.match(regEx);
    if (result != null) {
      validWords.push(result);
    }
  }
  return validWords;
}

export function findValidSubstrings(string, wordScoreDict) {
  var validWordIndexes = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      console.log(string.substring(i, j));
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
      if (result != null) {
        validWords.push(result);
      }
    }
  }
  return validWords;
}
