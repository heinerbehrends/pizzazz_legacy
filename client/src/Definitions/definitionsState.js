import { START_GAME, END_GAME } from '../gameFlow/gameFlowState';
import { SEND_SOLUTION } from '../Inputs/Buttons/buttonsState';
import { take, put } from 'redux-saga/effects';

export const LOOK_UP = 'LOOK_UP';
export const DEFINE = 'DEFINE';

export const definitionReducer = (state = 'a micro-scrabble word game', action) => {
  switch (action.type) {
    case DEFINE:
      return action.definition;
    case START_GAME:
      return '...';
    case END_GAME:
      return '...';
    case SEND_SOLUTION:
      return '...';
    default:
      return state;
  }
};

export const definitionAction = definition => ({
  type: DEFINE,
  definition,
});    

export const subscribeDefinition = (socket, emit) => {
  socket.on('definition', def => emit(definitionAction(def)));
};

export const lookupAction = word => ({
  type: LOOK_UP,
  word,
});  

export function* lookupIO(socket) {
  while (true) {
    const action = yield take(LOOK_UP);
    const { word } = action;
    socket.emit('lookUp', { word });
  }  
}  

export function* lookupScrabbleBoard(scrabbleBoard, isValidIndex) {
    yield isValidIndex 
    ? put(lookupAction(scrabbleBoard.slice(0, isValidIndex)))
    : put(definitionAction('... '));
};    

