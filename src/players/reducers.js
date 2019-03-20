import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

export const players = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_PLAYERS:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.RECEIVE_PLAYERS:
      return {
        ...state,
        isFetching: false,
        items: action.players
      }
    case actionTypes.ERROR_FETCHING_PLAYERS:
      return {
        ...state,
        errorMessage: action.players.message,
        isFetching: false
      }
    default:
      return state
  }
}

export const playerFilters = (state = {
  name: '',
  position: '',
  age: ''
}, action) => {
  const { type, ...criteria } = action
  switch (type) {
    case actionTypes.UPDATE_FILTERS:
      return {
        ...Object.assign({}, state, criteria)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  players,
  playerFilters
})

export default rootReducer