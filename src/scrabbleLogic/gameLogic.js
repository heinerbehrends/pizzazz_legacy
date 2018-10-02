export const updateString = (props, target, randomOrValid) => {

  const { letter, string, index, parent } = props
  const { targetLetter, targetIndex, targetParent, targetString } = target

  const isParent = (parent === randomOrValid)
  const isTargetParent = (targetParent === randomOrValid)

  if (isParent && isTargetParent) {
    return swapLetters(props, target)
  }
  else if (isParent && !isTargetParent) {
    return replaceLetter(string, targetLetter, index)
  }
  else if (!isParent && isTargetParent) {
    return replaceLetter(targetString, letter, targetIndex)
  }
  else {
    return false
  }
}

export const replaceLetter = (string, letter, index) =>
  string.substring(0, index)
        .concat(letter)
        .concat(string.substring(index + 1))


const swapLetters = (props, target) => {
  let firstMutation = replaceLetter(target.targetString, props.letter, target.targetIndex)
  return replaceLetter(firstMutation, target.targetLetter, props.index)
}


export const getScore = (word, letterValues) =>
  word.split('')
      .map((letter, index) => index === 4 ? letterValues[letter] * 2 : letterValues[letter])
      .reduce((sum, element) => element + sum)
