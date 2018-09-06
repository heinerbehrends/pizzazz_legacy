import { STOP_COUNTDOWN, DECREMENT_COUNTDOWN, START_COUNTDOWN } from '../actionTypes'

let countdownTimer = null;
export const startCountdownAction = (dispatch, countdownTimer) => {
  countdownTimer = setInterval(() => { dispatch(decrementCountdownAction()) }, 1000);
  return {
    type: START_COUNTDOWN
  }
}


export const stopCountdownAction = () => {
  clearInterval(countdownTimer)
  return {
    type: STOP_COUNTDOWN,
  }
}

export const decrementCountdownAction = () => ({
  type: DECREMENT_COUNTDOWN,
})
