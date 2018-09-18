
export const updateString = (props, target, randomOrValid) => {

  const { letter, string, index, parent } = props;
  const { targetLetter, targetIndex, targetParent, targetString } = target;

  const isParent = (parent === randomOrValid);
  const isTargetParent = (targetParent === randomOrValid);

  if (isParent && isTargetParent) {
    return swapLetters(props, target)
  }
  else if (isParent && !isTargetParent) {
    return replaceLetter(string, targetLetter, index)
  }
  else if (!isParent && isTargetParent) {
    return replaceLetter(targetString, letter, targetIndex);
  }
  else {
    return false;
  }
}


export const replaceLetter = (string, letter, index) => {
  return string.substring(0, index)
               .concat(letter)
               .concat(string.substring(index + 1));
}

const swapLetters = (props, target) => {
  let firstMutation = replaceLetter(target.targetString, props.letter, target.targetIndex);
  return replaceLetter(firstMutation, target.targetLetter, props.index);
}


export const getScore = (word, letterValues) => {

  var score = 0;
  let index = 0;

  for (let letter of word) {
    if (index === 4) {
      score += letterValues[letter] * 2;
    }
    else {
      score += letterValues[letter];
    }
    index++;
  }
  return score;
}
