export function replaceLetter(string, letter, index) {
  let newString = string.substring(0, index)
                    .concat(letter)
                    .concat(string.substring(index + 1));
  return newString;
}

export function updateValidWord(replaceLetter,
                                  propString, propLetter, propIndex, propParent,
                                  targetString, targetLetter, targetIndex, targetParent)
{
  if (targetParent === 'validWord') {
    if (propParent === 'validWord') {
      let firstMutation = replaceLetter(targetString, propLetter, targetIndex);
      let secondMutation = replaceLetter(firstMutation, targetLetter, propIndex);
      return secondMutation;
    }
    else {
      return replaceLetter(targetString, propLetter, targetIndex);
    }
  }
  else {
    if (propParent === 'validWord') {
      return replaceLetter(propString, targetLetter, propIndex)
    }
  }
}
