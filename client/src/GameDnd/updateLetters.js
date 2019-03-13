export const replaceLetter = (word, letter, index) => (
  word
    .substring(0, index)
    .concat(letter)
    .concat(word.substring(index + 1))
);

export const swapLetters = ({ index }, { targetString, targetIndex }) => (
  replaceLetter(
    replaceLetter(targetString, targetString[index], targetIndex),
    targetString[targetIndex], index,
  )
);

const updateLetters = (props, target, randomOrValid) => {
  const {
    string,
    index,
    parent,
  } = props;
  const {
    targetIndex,
    targetParent,
    targetString,
  } = target;
  const isParent = (parent === randomOrValid);
  const isTargetParent = (targetParent === randomOrValid);

  if (isParent && isTargetParent) {
    return swapLetters(props, target);
  } if (isParent && !isTargetParent) {
    return replaceLetter(string, targetString[targetIndex], index);
  } if (!isParent && isTargetParent) {
    return replaceLetter(targetString, string[index], targetIndex);
  }
  return false;
};

export default updateLetters;
