export const REQUEST_PLAYERS = 'REQUEST_PLAYERS'
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS'

export const requestPlayers = criteria => ({
  type: REQUEST_PLAYERS,
  criteria
})

export const receivePlayers = (criteria, players) => ({
  type: RECEIVE_PLAYERS,
  criteria,
  players,
  receivedAt: Date.now()
})

const fetchPlayers = criteria => dispatch => {
  dispatch(requestPlayers(criteria))
  return fetch(`https://football-players-b31f2.firebaseio.com/players.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePlayers(criteria, json)))
}

const shouldFetchPlayers = (state, criteria) => {
  const players = state.players
  if (!players) {
    return true
  }
  if (players.isFetching) {
    return false
  }
}

export const fetchPlayersIfNeeded = criteria => (dispatch, getState) => {
  if (shouldFetchPlayers(getState(), criteria)) {
    return dispatch(fetchPlayers(criteria))
  }
}