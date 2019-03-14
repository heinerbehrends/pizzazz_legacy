export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';

export const initialState = {
  letterDisplay: '',
  validWords: [],
  seconds: 0,
};

const gameDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return action.game;
    default:
      return state;
  }
};

export const startGameAction = game => ({
  type: START_GAME,
  game,
});

export const subscribeStart = (socket, emit) => {
  socket.on('StartGame', game => emit(startGameAction(game)));
};

export const subscribeEnd = (socket, emit) => {
  socket.on('EndGame', action => emit(action));
}


export default gameDataReducer;
