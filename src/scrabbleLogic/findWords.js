export function findValidWord(string, wordScoreDict) {
  string = string.toLowerCase();
  var validWordIndexes = [];
  for (let i = 1; i <= string.length; i++) {
    if (wordScoreDict.hasOwnProperty(string.substring(0, i))) {
      validWordIndexes.push(i);
    }
  }
  const longestValidWord = string.substring(0, Math.max(...validWordIndexes));
  return [longestValidWord, wordScoreDict[longestValidWord]]
}

export function findValidWordWildcard(string, wordScoreString) {
  string = string.toLowerCase();
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
  if (validWords.length !== 0) {
    return [validWords[validWords.length - 1][1], validWords[validWords.length - 1][2]];
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

export function getScoreWildcard(word, letterValues) {
  var wordWithoutWildcard = word.split('8').join('');
  console.log(wordWithoutWildcard);
  var score = 0;
  for (let letter of wordWithoutWildcard) {
    score += letterValues[letter];
  }
  return score;
}
