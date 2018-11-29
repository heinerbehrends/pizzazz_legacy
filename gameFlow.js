// @flow
const getLetters = require('./serverLogic/randomLetters');
const findValid = require('./serverLogic/findValidWords');

const duration = 50;

let state = {
  randomLetters: '',
  validWords: [],
  seconds: duration,
};

const getState = () => state;

function* gameFlow(io) {
  const { makeRandomLetters, bagOfLetters } = getLetters;
  const { findAllValidWords, sortedWordsDict } = findValid;

  while (true) {
    const randomLetters = makeRandomLetters(7, bagOfLetters);
    const validWords = findAllValidWords(randomLetters, sortedWordsDict);
    state = {
      ...state,
      randomLetters,
      validWords,
    };

    yield io.emit('StartGame', state);

    while (true) {
      yield state = { ...state, seconds: state.seconds - 1 };
      const { seconds } = state;
      if (seconds === 10) {
        io.emit('EndGame', { type: 'END_GAME' });
      }
      if (seconds === 0) {
        state = { ...state, seconds: duration };
        break;
      }
    }
  }
}

module.exports = { gameFlow, getState };
