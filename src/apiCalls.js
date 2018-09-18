import axios from 'axios'


export const sendName = name => {
  return axios.post('/api/start', {
    screenName: name
  })
}

export const sendGame = (id, firstPlayer, solution) => {
  return axios.post('api/endGame', {
    id, firstPlayer, solution
  })
}
