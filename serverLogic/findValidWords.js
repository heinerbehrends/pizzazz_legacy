const wordScoreDict = require('./word_score_dict.json')
const getCombinations = require('./getCombinations')


const sortString = string => {
  var array = string.split('');
  var sorted = array.sort();
  return sorted.join('');
}

const getSortedValidWords = () => {
  // takes the words in a dictionary and return an objects
  // in which the keys are ordered strings and the values
  // are valid word anagrams of the ordered strings
  let sortedValidWords = {}

  for (const word in wordScoreDict) {
    // order the letters
    const sortedWord = sortString(word)
    // if an anagram already exists
    if (sortedWord in sortedValidWords) {
      // create an array that holds both anagrams
      if (typeof sortedValidWords[sortedWord] === 'string') {
        sortedValidWords[sortedWord] = [sortedValidWords[sortedWord], word]
      }
      // if it's an array already adds the anagram
      else {
        sortedValidWords[sortedWord].push(word)
      }
    }
    // if there is no anagram yet
    else {
      sortedValidWords[sortedWord] = word;
    }
  }

  return sortedValidWords
}

const sortedValidWords = getSortedValidWords()


const findValidWords = (randomLetters, sortedValidWords) => {
  // get all possible sorted substrings
  const sortedSubstrings = getCombinations(sortString(randomLetters))
  let validWords = []

  for (let i = 0; i < sortedSubstrings.length; i++) {
    // check if there is a valid word anagram of the sorted substring
    if (sortedSubstrings[i] in sortedValidWords) {
      // add the valid word(s) to valid words array
      validWords.push(sortedValidWords[sortedSubstrings[i]])
    }
  }
  // return the flattened array
  return [].concat(...validWords)
}


module.exports = { findValidWords, sortedValidWords, sortString }
