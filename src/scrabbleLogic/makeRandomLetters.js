export function makeBagOfLetters (letterDistribution) {
  let bagOfLettersArray = [];
  for (let letter in letterDistribution) {
    for (let i = 0; i < letterDistribution[letter]; i++) {
      bagOfLettersArray.push(letter);
    }
  }
  return bagOfLettersArray;
}

export function makeRandomLetters(bagOfLetters, nrOfLetters) {
  let randomString = "";
  for (let i = 0; i < nrOfLetters; i++) {
    let randomIndex = Math.floor(Math.random() * bagOfLetters.length)
    randomString += bagOfLetters[randomIndex];
  }
  return randomString.toUpperCase();
}

export function makeRandomLettersVowels(nrOfVowels, nrOfLetters) {
  let randomString = "";
  let vowels = 'aeiou';
  let consonants = 'bcdfghjklmnpqrstvwxyz8';
  for (let i = 0; i < nrOfVowels; i++) {
    randomString += vowels[Math.floor(Math.random() * vowels.length)];
  }
  for (let i = 0; i < nrOfLetters - nrOfVowels; i++) {
    randomString += consonants[Math.floor(Math.random() * consonants.length)]
  }
  return shuffle(randomString.toUpperCase());
}

function shuffle(string) {
  var array = string.split(""),
  n = array.length;

  for(var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
  return array.join("");
}
