// standard Scrabble letter distribution
const letterDistribution = {
  'e':12, 'a':9, 'i':9, 'o':8, 'n':6, 'r':6, 't':6, 'l':4, 's':4, 'u':4, 'd':4, 'g':3, 'b':2,
  'c':2, 'm':2, 'p':2, 'f':2, 'h':2, 'v':2, 'w':2, 'y':2, 'k':1, 'j':1, 'x':1, 'q':1, 'z':1, '8':2
};

const makeBagOfLetters = letterDistribution => Object.keys(letterDistribution)
  .map(letter => letter.repeat(letterDistribution[letter]))
  .map(string => string.split(''))
  .reduce((acc, val) => acc.concat(val));


const bagOfLetters = makeBagOfLetters(letterDistribution)


const getRandomIndex = strArr => {
  return Math.floor(Math.random() * strArr.length)
}

const addRandomChar = (string, bagOfLetters) => {
  // adds a random character of a given array of characters to a given string
  return string += bagOfLetters[getRandomIndex(bagOfLetters)]
}

const shuffle = string => {
  // modern version of the Fisher-Yates algorithm
  // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  var array = string.split("")

  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array.join("")
}


const makeRandomLettersVowels = (nrOfLetters, bagOfLetters) => {
  // input: number of letters of the output string, array of characters from which to draw
  // output: shuffled string of random characters with 2 or 3 vowels
  const vowels = 'aeiou'.split('')
  const bagOfVowels = bagOfLetters.filter(char => vowels.includes(char))
  const bagOfConsonants = bagOfLetters.filter(char => !vowels.includes(char))
  const nrOfVowels = Math.random() < 0.7 ? 3 : 2

  let randomString = ''
  for (let i = 0; i < nrOfVowels; i++) {
    randomString = addRandomChar(randomString, bagOfVowels)
  }
  for (let i = 0; i < nrOfLetters - nrOfVowels; i++) {
    randomString = addRandomChar(randomString, bagOfConsonants)
  }
  return shuffle(randomString)
}


const makeRandomLetters = (nrOfLetters, bagOfLetters) => {
  // input: number of letters of the output string, array of characters from which to draw
  // output: shuffled string of random characters
  let randomString = ''
  for (let i = 0; i < nrOfLetters; i++) {
    randomString = addRandomChar(randomString, bagOfVowels)
  }
  return shuffle(randomString)
}


module.exports = { makeRandomLettersVowels, bagOfLetters }
