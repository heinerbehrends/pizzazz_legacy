// @flow
import {
  mapObjIndexed, compose, flatten,
  values, repeat, splitEvery,
} from 'ramda';

// Fisher-Yates algorithm
export const shuffle = (arr: Array<string>): Array<string> => {
  const array = arr;
  for (let i = 0; i < array.length; i += 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
};

export const makeBagOfLetters = compose(
  flatten,
  values,
  mapObjIndexed(
    compose(
      splitEvery(1),
      (number, letter) => repeat(letter, number),
    ),
  ),
);

export const getCombinations = (string: string) => {
  const combine = (active, rest, array) => {
    if (!active && !rest) {
      return null;
    } if (!rest) {
      array.push(active);
    } else {
      combine(active + rest[0], rest.slice(1), array);
      combine(active, rest.slice(1), array);
    }
    const resultArray = array.filter(word => word.length > 1);
    return [...new Set(resultArray)];
  };
  return combine('', string, []);
};
