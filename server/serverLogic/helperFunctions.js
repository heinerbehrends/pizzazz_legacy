import * as R from 'ramda';

export const shuffle = (arr) => {
  if (arr.length === 1) return arr;
  const rand = Math.floor(Math.random() * arr.length);
  return [
    arr[rand],
    ...shuffle(arr.filter((_, i) => i !== rand)),
  ];
};

export const makeBagOfLetters = (
  R.pipe(
    R.mapObjIndexed(
      R.pipe(
        R.flip(R.repeat),
        R.splitEvery(1),
      ),
    ),
    R.values,
    R.flatten,
  )
);

export const getCombinations = (string) => {
  const combine = (active, rest, array) => {
    if (!active && !rest) {
      return null;
    } if (!rest) {
      array.push(active);
    } else {
      combine(active + rest[0], rest.slice(1), array);
      combine(active, rest.slice(1), array);
    }
    const combinations = array.filter(combination => combination.length > 1);
    return [...new Set(combinations)];
  };
  return combine('', string, []);
};
