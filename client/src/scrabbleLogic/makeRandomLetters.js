// export function makeBagOfLetters (letterDistribution) {
//   let bagOfLettersArray = [];
//   for (let letter in letterDistribution) {
//     for (let i = 0; i < letterDistribution[letter]; i++) {
//       bagOfLettersArray.push(letter);
//     }
//   }
//   return bagOfLettersArray;
// }

export const getRandomIndex = strArr => Math.floor(Math.random() * strArr.length);

export const getRandomLetter = strArr => strArr[getRandomIndex(strArr)];

export const makeBagOfLetters = letterDistribution => Object
  .keys(letterDistribution)
  .map(letter => letter.repeat(letterDistribution[letter]))
  .map(string => string.split(''))
  .reduce((acc, val) => acc.concat(val));

export const makeRandomLetters = (bagOfLetters, nrOfLetters) => ''
  .padEnd(nrOfLetters)
  .split('')
  .map(getRandomLetter(bagOfLetters))
  .join('')
  .toUpperCase();

function shuffle(string) {
  const array = string.split('');
  const n = array.length;

  for (let i = n - 1; i > 0; i -= i) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
  return array.join('');
}

export function makeRandomLettersVowels(nrOfVowels, nrOfLetters) {
  let randomString = '';
  const vowels = 'aeiou';
  const consonants = 'bcdfghjklmnpqrstvwxyz8';
  for (let i = 0; i < nrOfVowels; i += 1) {
    randomString += vowels[Math.floor(Math.random() * vowels.length)];
  }
  for (let i = 0; i < nrOfLetters - nrOfVowels; i += 1) {
    randomString += consonants[Math.floor(Math.random() * consonants.length)]
  }
  return shuffle(randomString.toUpperCase());
}
