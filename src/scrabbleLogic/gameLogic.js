export function replaceLetter(string, letter, index) {
  let newString = string.substring(0, index)
                    .concat(letter)
                    .concat(string.substring(index + 1));
  return newString;
}

export function updateValidWord(props, target) {
  const { string, index, parent, replaceLetter, replaceLetterAction } = props;
  const { targetLetter, targetIndex, targetParent, targetString, showValidAction } = target;
  const letter = string[index];
  if (targetParent === 'validWord') {
    if (parent === 'validWord') {
      let firstMutation = replaceLetter(targetString, letter, targetIndex);
      let secondMutation = replaceLetter(firstMutation, targetLetter, index);
      return secondMutation;
    }
    else {
      return replaceLetter(targetString, letter, targetIndex);
    }
  }
  else {
    if (parent === 'validWord') {
      return replaceLetter(string, targetLetter, index)
    }
  }
}
