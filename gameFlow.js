import makeRandomLetters from './serverLogic/randomLetters';
import findAllValidWords from './serverLogic/findValidWords';

const duration = 50;

const initialState = {
  randomLetters: '',
  validWords: [],
  seconds: duration,
};

const useState = (initial) => {
  let state = initial;
  const getState = () => state;
  const setState = (newState) => { state = newState; };
  return Object.freeze({ getState, setState });
};

export const { getState, setState } = useState(initialState);

export function* gameFlow(io) {
  while (true) {
    const randomLetters = makeRandomLetters(7);
    const validWords = findAllValidWords(randomLetters);
    setState({
      ...initialState,
      randomLetters,
      validWords,
    });
    yield io.emit('StartGame', getState());

    while (true) {
      const state = getState();
      yield setState({ ...state, seconds: state.seconds - 1 });
      const { seconds } = getState();
      if (seconds === 10) {
        io.emit('EndGame', { type: 'END_GAME' });
      }
      if (seconds === 0) {
        setState({ ...state, seconds: duration });
        break;
      }
    }
  }
}
