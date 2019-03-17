import { createSelector } from 'reselect'
import calculateAge from '../utils/calculateAge'

const getPlayers = state => state.players.items || []

const getPlayerFilterCriteria = state => {
  return state.playerFilters
}

export const getVisiblePlayers = createSelector(
  [getPlayerFilterCriteria, getPlayers],
  (criteria, players) => {
    const nameRegExp = new RegExp(`${criteria.name}`, 'gi')
    return players
      .map(player => ({ ...player, age: calculateAge(new Date(player.dateOfBirth)) }))
      .filter(player => {
          return (player.name === '' || !!player.name.match(nameRegExp)) &&
            (player.position === '' || !!player.position.match(criteria.position)) &&
            (criteria.age === '' || player.age == parseInt(criteria.age))
        }
      )
  }
)