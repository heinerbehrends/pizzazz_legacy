import { call, fork } from 'redux-saga/effects';
import { lookupIO } from '../Definitions/definitionsState';
import { sendNameIO } from '../Inputs/ScreenName/screenNameState';
import { joinGameIO } from '../gameFlow/handleEntry';
import { sendSolutionIO } from '../Inputs/Buttons/buttonsState';


function* send(socket) {
  yield call(sendNameIO, socket);
  yield fork(joinGameIO, socket);
  yield fork(sendSolutionIO, socket);
  yield fork(lookupIO, socket);
}

export default send;
