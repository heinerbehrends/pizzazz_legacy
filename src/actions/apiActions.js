import axios from 'axios'
import { firstPlayerAction } from './gameActions'
import { SEND_NAME } from '../actionTypes'


export const sendNameAction = name => ({
  type: SEND_NAME,
  name
})

// export const sendNameAction = name => {
//
//   return dispatch => {
//
//     axios.post('/api/start', {
//       screenName: name
//     })
//     .then((response) => {
//       if (response.data.firstPlayer) {
//         dispatch(firstPlayerAction(response.data.firstPlayer));
//       }
//     });
//   }
// }

export const sendGameAction = (id, firstPlayer, makeMove) => {
  return () => {

    // window.Echo.channel('pizzazz')
    // .listen('EndGame', (event) => {
    //   dispatch(showWinnerAction(event.game));
    // });
    //
    axios.post('/api/endGame', {
      id: id,
      firstPlayer: firstPlayer,
      makeMove: makeMove,
    });
  }
}
