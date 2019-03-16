export const REQUEST_PLAYERS = 'REQUEST_PLAYERS'
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS'
export const UPDATE_FILTERS = 'UPDATE_FILTERS'

export const requestPlayers = () => ({
  type: REQUEST_PLAYERS
})

export const receivePlayers = (players) => ({
  type: RECEIVE_PLAYERS,
  players,
  receivedAt: Date.now()
})

export const updateFilters = (criteria) => ({
  type: UPDATE_FILTERS,
  ...criteria
})

const fetchPlayers = () => dispatch => {
  dispatch(requestPlayers())
  return fetch(`https://football-players-b31f2.firebaseio.com/players.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePlayers(json)))
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