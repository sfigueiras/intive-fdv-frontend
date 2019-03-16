import { createSelector } from 'reselect'

const getPlayers = state => state.players.items || []

const getPlayerFilterCriteria = state => {
  return state.playerFilters
}

export const  getVisiblePlayers = createSelector(
  [getPlayerFilterCriteria, getPlayers],
  (criteria, players) => {
    const nameRegExp = new RegExp(`${criteria.name}`, 'gi')
    return players.filter(player =>
      player.name === '' || !!player.name.match(nameRegExp)
    )
  }
)