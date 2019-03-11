import { take, put, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { startGameAction } from '../gameFlow/gameFlowState';
import { countdownAction } from '../ProgressBar/progressBarState';
import { newSolutionAction } from '../gameFlow/solutions/solutionsState';
import { definitionAction } from '../Definitions/definitionsState';
import { SEND_NAME } from '../Inputs/ScreenName/screenNameState';
import { DISCONNECT } from './socketIO';

function subscribe(socket) {
  return eventChannel((emit) => {
    socket.on('StartGame', (game) => {
      emit(startGameAction(game));
    });
    socket.on('EndGame', action => emit(action));
    socket.on('countdown', value => emit(countdownAction(value)));
    socket.on('newSolution', solution => emit(newSolutionAction(solution)));
    socket.on('definition', def => emit(definitionAction(def)));
    socket.on('disconnect', emit({ type: DISCONNECT }));

    return () => {};
  });
}


function* receive(socket) {
  yield take(SEND_NAME);
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export default receive;
