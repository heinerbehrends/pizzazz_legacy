import fs from 'fs';
import * as R from 'ramda';

const dictFile = fs.readFileSync('serverLogic/Dict.txt');

const mergeObjects = arr => (
  arr.reduce((acc, el) => Object.assign(acc, el), {})
);
const keyToLowerCase = arr => [
  arr[0].toLowerCase(), arr[1],
];

const parse = R.pipe(
  R.toString,
  R.replace(/"/g, ''),
  R.replace(/\s\[.+\]/g, ''),
  R.split('\r\n'),
  R.dropLast(1),
  R.map(R.split('\t')),
  R.map(keyToLowerCase),
  R.map(arr => R.objOf(arr[0], arr[1])),
  mergeObjects,
);

const dictionary = parse(dictFile);

export default dictionary;
