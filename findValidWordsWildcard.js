const findValid = require('./findValidWords')
const abc = 'abcdefghijklmnopqrstuvwxyz'


// helper functions to substitute all letters for the wildcard in a sorted strings

const getABCIndexes = (string, abc) => {
  // returns an array of alphabetical indexes of a given string
  // first value is 0 to allow for an easy loop in addABC function; A = 1, B = 2, etc
  let indexes = [0]

  for (let i = 0; i < string.length; i++) {
    indexes.push(abc.indexOf(string[i], abc) + 1)
  }

  return indexes
}


const insertCharacter = (string, character, index) => {
  return `${ string.substring(0, index) }${ character }${ string.substring(index, string.length) }`
}


const addABC = (sortedString) => {
  // adds all characters of the abc to a sorted string to replace a wildcard character
  // input: sorted string without the wildcard character
  // output: array of all possible sorted strings
  const abcIndexes = getABCIndexes(sortedString, abc)
  let possibleStrings = []
  // for each index in the sorted word
  for (let i = 0; i < abcIndexes.length - 1; i++) {
    // for each character of the abc as long as it fits in the sorted string
    for (let j = abcIndexes[i]; j < abcIndexes[i + 1]; j++) {
      // add the character to the string at the given index and push the result to the array
      possibleStrings.push(insertCharacter(sortedString, abc[j], i))
    }
  }

  return possibleStrings
}


const findValidWordsWildcard = (randomLettersWildcard, sortedValidWords) => {
  // randomLetters: input string without the wildcard
  // sortedPossibleStrings: sorted randomLetters with a to z added
  // remove the wildcard character
  const randomLetters = randomLettersWildcard.split('8').join('')
  // use the helper function to find all possible ordered substrings
  const sortedPossibleStrings = addABC(findValid.sortString(randomLetters))
  let validWords = []
  // for each possible string add the valid anagrams to valid words array
  for (let i = 0; i < sortedPossibleStrings.length; i++) {
    validWords.push(findValid.findValidWords(sortedPossibleStrings[i], sortedValidWords))
  }
  // return a flattened array of unique elements
  return [... new Set([].concat(... validWords))];
}

const findAllValidWords = (randomLetters, sortedValidWords) => {
  // calls the expensive wildcard function only when there is a wildcard in the string
  return randomLetters.includes('8') ?
           findValidWordsWildcard(randomLetters, sortedValidWords) :
           findValid.findValidWords(randomLetters, sortedValidWords)
}

const sortedValidWords = findValid.sortedValidWords

module.exports = { sortedValidWords, findAllValidWords }
