import { NEW_GAME } from '../actionTypes'

let defaultState = {
  id: null
}
const newGameReducer = (state = defaultState, action) {
  switch (action.type) {
    case NEW_GAME:
      return {id: action.id};
    case default:
      return state;
  }
}
