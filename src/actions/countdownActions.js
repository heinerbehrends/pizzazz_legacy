import { DECREMENT_COUNTDOWN, STOP_COUNTDOWN } from '../actionTypes'

export const stopCountdownAction = () => ({
    type: STOP_COUNTDOWN,
})

export const decrementCountdownAction = () => ({
  type: DECREMENT_COUNTDOWN,
})
