const getIsValidIndex = (validWordString, validWordsArray) => {
  
  if (validWordString.indexOf('8') !== -1) {
    return getIsValidIndexWildcard(validWordString, validWordsArray)
  }
  else {
    return getIsValidIndexNoWildcard(validWordString, validWordsArray)
  }
}

export default getIsValidIndex;

const getIsValidIndexNoWildcard = (validWordString, validWordsArray) => {

  validWordString = validWordString.toLowerCase();
  let isValidIndex = 0;

  for (let i = 2; i <= validWordString.length; i++) {

    if (validWordsArray.includes(validWordString.substring(0, i))) {
      isValidIndex = i;
    }
  }

  return isValidIndex
};


const getIsValidIndexWildcard = (validWordString, validWordsArray) => {

  let validWordsString = JSON.stringify(validWordsArray);
  let wildcardString = validWordString.toLowerCase();

  return findValidIndexRegEx(wildcardString, validWordsString)
};


const findValidIndexRegEx = (wildcardString, validWordsString) => {

  let isValidIndex = 0;

  for (let i = 2; i <= wildcardString.length; i++) {

    let substring = wildcardString.substring(0, i);
    let regEx = buildRegExObject(substring);
    let result = validWordsString.match(regEx);

    result && (isValidIndex = i);
  }

  return isValidIndex
};

const buildRegExObject = wildcardString => getRegExp(replace8withAtoZ(wildcardString));

const replace8withAtoZ = wildcardString => wildcardString.split('8').join('[a-z]');

const getRegExp = AtoZstring => new RegExp('["](' + AtoZstring + ')["]');
