import { combineReducers } from 'redux'
import { RECEIVE_PLAYERS, REQUEST_PLAYERS } from '../actions'

const players = (state = {
  isFetching: false,
  criteria: {},
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_PLAYERS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_PLAYERS:
      return {
        ...state,
        isFetching: false,
        items: action.players,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const visiblePlayers = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_PLAYERS:
    case RECEIVE_PLAYERS:
      return {
        ...players(state.players, action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  visiblePlayers
})

export default rootReducer