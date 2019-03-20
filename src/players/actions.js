import config from '../config'
import * as actionTypes from './actionTypes'

export const requestPlayers = () => ({
  type: actionTypes.REQUEST_PLAYERS
})

export const receivePlayers = (players) => ({
  type: actionTypes.RECEIVE_PLAYERS,
  players
})

export const errorFetchingPlayers = () => ({
  type: actionTypes.ERROR_FETCHING_PLAYERS,
  players: {
    message: 'There was an error fetching players'
  }
})

export const updateFilters = (criteria) => ({
  type: actionTypes.UPDATE_FILTERS,
  ...criteria
})

export const fetchPlayers = () => dispatch => {
  dispatch(requestPlayers())
  return fetch(config.API_ENDPOINT)
    .then(response => response.json())
    .then(json => dispatch(receivePlayers(json)))
    .catch(() => dispatch(errorFetchingPlayers()))
}

const shouldFetchPlayers = (state) => {
  const players = state.players
  if (Object.entries(players).length === 0 && players.constructor === Object) {
    return true
  }
  if (players.isFetching) {
    return false
  }
}

export const fetchPlayersIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchPlayers(getState())) {
    return dispatch(fetchPlayers())
  }
}