import { take } from 'redux-saga/effects';

export const SEND_NAME = 'SEND_NAME';

export const sendNameAction = name => ({
  type: SEND_NAME,
  name,
});

export const screenNameReducer = (state = '', action) => {
  switch (action.type) {
    case SEND_NAME:
      return action.name;
    default:  
      return state;
  }    
};  

export const getScreenName = state => state.screenName;

export function* sendNameIO(socket) {
  const action = yield take(SEND_NAME);
  const { name } = action;
  socket.emit('sendName', { name });
}
