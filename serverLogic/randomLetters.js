// standard Scrabble letter distribution
/* eslint object-property-newline: off */
const letterDistributionStd = {
  e: 12, a: 9, i: 9, o: 8, n: 6, r: 6, t: 6, l: 4, s: 4, u: 4, d: 4, g: 3, b: 2,
  c: 2, m: 2, p: 2, f: 2, h: 2, v: 2, w: 2, y: 2, k: 1, j: 1, x: 1, q: 1, z: 1, 8: 2,
};

const makeBagOfLetters = letterDistribution => Object.keys(letterDistribution)
  .map(letter => letter.repeat(letterDistribution[letter]))
  .map(string => string.split(''))
  .reduce((acc, val) => acc.concat(val));

const bagOfLetters = makeBagOfLetters(letterDistributionStd);

const getRandomIndex = strArr => Math.floor(Math.random() * strArr.length);

const addRandomChar = (string, charArr) => `${string}${charArr[getRandomIndex(charArr)]}`;


// modern version of the Fisher-Yates algorithm
// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
const shuffle = (string) => {
  const array = string.split('');
  for (let i = 0; i < array.length; i += 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
};


// input: number of letters of the output string, array of characters from which to draw
// output: shuffled string of random characters with 2 or 3 vowels and never more than one wildcards
const makeRandomLetters = (nrOfLetters, charArr) => {
  const vowels = 'aeiou'.split('');
  const bagOfVowels = charArr.filter(char => vowels.includes(char));
  const bagOfConsonants = charArr.filter(char => !vowels.includes(char));
  const nrOfVowels = Math.random() < 0.7 ? 3 : 2;
  const get8count = string => string.split('8').length - 1;
  let randomString;
  do {
    randomString = '';
    for (let i = 0; i < nrOfVowels; i += 1) {
      randomString = addRandomChar(randomString, bagOfVowels);
    }
    for (let i = 0; i < nrOfLetters - nrOfVowels; i += 1) {
      randomString = addRandomChar(randomString, bagOfConsonants);
    }
  } while (get8count(randomString) > 1);

  return shuffle(randomString);
};


module.exports = { makeRandomLetters, bagOfLetters };
