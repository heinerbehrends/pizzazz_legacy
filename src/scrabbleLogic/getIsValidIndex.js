const getIsValidIndexNoWildcard = (validWordString, validWordsArray) => {
  const validWord = validWordString.toLowerCase();
  let isValidIndex = 0;

  for (let i = 2; i <= validWord.length; i += 1) {
    if (validWordsArray.includes(validWord.substring(0, i))) {
      isValidIndex = i;
    }
  }
  return isValidIndex;
};

const getRegExp = AtoZstring => new RegExp(`["](${AtoZstring})["]`);
const replace8withAtoZ = wildcardString => wildcardString.split('8').join('[a-z]');
const buildRegExObject = wildcardString => getRegExp(replace8withAtoZ(wildcardString));

const findValidIndexRegEx = (wildcardString, validWordsString) => {
  let isValidIndex = 0;
  for (let i = 2; i <= wildcardString.length; i += 1) {
    const substring = wildcardString.substring(0, i);
    const regEx = buildRegExObject(substring);
    const result = validWordsString.match(regEx);
    if (result) {
      isValidIndex = i;
    }
  }
  return isValidIndex;
};

const getIsValidIndexWildcard = (validWordString, validWordsArray) => findValidIndexRegEx(
  validWordString.toLowerCase(),
  JSON.stringify(validWordsArray)
);

const getIsValidIndex = (validWordString, validWordsArray) => (
  validWordString.includes('8')
    ? getIsValidIndexWildcard(validWordString, validWordsArray)
    : getIsValidIndexNoWildcard(validWordString, validWordsArray)
);

export default getIsValidIndex;
