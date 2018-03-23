export const makeRandomLettersAction = () => {
  return {
    type: 'makeRandomLetters'
  }
}

export const makeRandomLettersVowelsAction = () => {
  return {
    type: 'makeRandomLettersVowels'
  }
}

export const replaceLetterAction = (letter, target, index) => {
  return {
    type: 'replaceLetter',
    letter: letter,
    target: target,
    index: index,
  }
}

export const showValidAction = (index, score) => {
  return {
    type: 'showValid',
    index: index,
  }
}
