const makeRandomLettersReducer = (state = '0000000', action) => {
  switch (action.type) {
    case 'makeRandomLetters':
      return makeRandomLettersVowels(2, 7);
    default:
      return state;
  }
}

const letterDistribution = {'e':12, 'a':9, 'i':9, 'o':8, 'n':6, 'r':6, 't':6, 'l':4, 's':4, 'u':4, 'd':4, 'g':3, 'b':2,
                            'c':2, 'm':2, 'p':2, 'f':2, 'h':2, 'v':2, 'w':2, 'y':2, 'k':1, 'j':1, 'x':1, 'q':1, 'z':1, '8':2};

function makeBagOfLetters (letterDistribution) {
  let bagOfLettersArray = [];
  for (let letter in letterDistribution) {
    for (let i = 0; i < letterDistribution[letter]; i++) {
      bagOfLettersArray.push(letter);
    }
  }
  return bagOfLettersArray;
}

const bagOfLetters = makeBagOfLetters(letterDistribution);

function makeRandomLetters(bagOfLetters, nrOfLetters) {
  let randomString = "";
  for (let i = 0; i < nrOfLetters; i++) {
    let randomIndex = Math.floor(Math.random() * bagOfLetters.length)
    randomString += bagOfLetters[randomIndex];
  }
  return randomString.toUpperCase();
}

function makeRandomLettersVowels(nrOfVowels, nrOfLetters) {
  let randomString = "";
  let vowels = 'aeiou';
  let consonants = 'bcdfghjklmnpqrstvwxyz8';
  for (let i = 0; i < nrOfVowels; i++) {
    randomString += vowels[Math.floor(Math.random() * vowels.length)];
  }
  for (let i = 0; i < nrOfLetters - nrOfVowels; i++) {
    randomString += consonants[Math.floor(Math.random() * consonants.length)]
  }
  return randomString.shuffle().toUpperCase();
}

String.prototype.shuffle = function () {
  var a = this.split(""),
  n = a.length;

  for(var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

export default makeRandomLettersReducer
