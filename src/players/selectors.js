import { createSelector } from 'reselect'
import calculateAge from '../utils/calculateAge'

export const getPlayersWithAge = state => {
  return state.players.items.map(player => ({
    ...player,
    age: calculateAge(new Date(player.dateOfBirth))
  })) || []
}

const getPlayerFilterCriteria = state => state.playerFilters

export const getVisiblePlayers = createSelector(
  [getPlayerFilterCriteria, getPlayersWithAge],
  (criteria, players) => {
    const nameRegExp = new RegExp(`${criteria.name}`, 'gi')
    return players
      .filter(player => {
          return (player.name === '' || !!player.name.match(nameRegExp)) &&
            (player.position === '' || !!player.position.match(criteria.position)) &&
            (criteria.age === '' || player.age === parseInt(criteria.age))
        }
      )
  }
)