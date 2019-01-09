import makeRandomLetters from './serverLogic/randomLetters';
import findAllValidWords from './serverLogic/findValidWords';

const duration = 50;

let state = {
  randomLetters: '',
  validWords: [],
  seconds: duration,
};

export const getState = () => state;

export function* gameFlow(io) {
  while (true) {
    const randomLetters = makeRandomLetters(7);
    const validWords = findAllValidWords(randomLetters);
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
