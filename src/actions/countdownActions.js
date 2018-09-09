import { STOP_COUNTDOWN, DECREMENT_COUNTDOWN } from '../actionTypes'

export const stopCountdownAction = () => ({
    type: STOP_COUNTDOWN,
})

export const decrementCountdownAction = () => ({
  type: DECREMENT_COUNTDOWN,
})
