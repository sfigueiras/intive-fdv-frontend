import { combineReducers } from 'redux'
import { RECEIVE_PLAYERS, REQUEST_PLAYERS, UPDATE_FILTERS } from './actions'

const players = (state = {
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

const playerFilters = (state = {
  name: '',
  position: '',
  age: ''
}, action) => {
  const {type, ...criteria} = action
  switch (type) {
    case UPDATE_FILTERS:
      return {
        ...Object.assign({}, state, criteria)
      }
    default:
      return state
  }
}

// TODO: get this reducer out of the way
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
  players,
  playerFilters
})

export default rootReducer