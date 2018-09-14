import axios from 'axios'
import { showWinnerAction, startGameAction, firstPlayerAction } from './gameActions'


export const sendNameAction = name => {

  return dispatch => {

    window.Echo.channel('pizzazz')
    .listen('StartGame', (event) => {
      dispatch(startGameAction(event.game));
    })

    axios.post('/api/start', {
      screenName: name
    })
    .then((response) => {
      if (response.data.firstPlayer) {
        dispatch(firstPlayerAction(response.data.firstPlayer));
      }
    });
  }
}

export const sendGameAction = (id, firstPlayer, makeMove) => {
  return function(dispatch) {

    window.Echo.channel('pizzazz')
    .listen('EndGame', (event) => {
      dispatch(showWinnerAction(event.game));
    });

    axios.post('/api/endGame', {
      id: id,
      firstPlayer: firstPlayer,
      makeMove: makeMove,
    });
  }
}
