const getIsValidIndexNoWildcard = (string, validWordsArray) => string.split('')
  .reduce(
    (acc, letter, i) => {
      const index = i + 1;
      if (index < 2) {
        return 0;
      } if (validWordsArray.includes(string.substring(0, index))) {
        return index;
      }
      return Math.max(acc, 0);
    },
  );

const getRegExp = string => new RegExp(`["](${string})["]`);
const replace8withAtoZ = wildcardString => wildcardString.split('8').join('[a-z]');
const buildRegExObject = wildcardString => getRegExp(replace8withAtoZ(wildcardString));

const getIsValidIndexWildcard = (wildcardString, validWordsArray) => wildcardString.split('')
  .reduce(
    (acc, letter, i) => {
      const index = i + 1;
      if (index < 2) {
        return 0;
      }
      const validWordsString = JSON.stringify(validWordsArray);
      const substring = wildcardString.substring(0, index).toLowerCase();
      const regEx = buildRegExObject(substring);
      const result = validWordsString.match(regEx);
      if (result) {
        return index;
      }
      return acc;
    },
  );

const getIsValidIndex = (validWordString, validWordsArray) => (
  validWordString.includes('8')
    ? getIsValidIndexWildcard(validWordString, validWordsArray)
    : getIsValidIndexNoWildcard(validWordString, validWordsArray)
);

export default getIsValidIndex;
