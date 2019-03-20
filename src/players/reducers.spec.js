import { players } from './reducers'
import * as actionTypes from './actionTypes'

describe('players reducers', () => {
  it('should return initial state', () => {
    expect(players(undefined, {})).toEqual({})
  })

  it('should handle REQUEST_PLAYERS', () => {
    expect(players({}, {
      type: actionTypes.REQUEST_PLAYERS
    })).toEqual({
      isFetching: true
    })
  })

  it('should handle RECEIVE_PLAYERS', () => {
    expect(players({isFetching: true}, {
      type: actionTypes.RECEIVE_PLAYERS,
      players: [{
        'contractUntil': '2021-06-30',
        'dateOfBirth': '1987-02-22',
        'jerseyNumber': 20,
        'name': 'Sergio Romero',
        'nationality': 'Argentina',
        'position': 'Keeper'
      }]
    })).toEqual({
      isFetching: false,
      items: [{
        'contractUntil': '2021-06-30',
        'dateOfBirth': '1987-02-22',
        'jerseyNumber': 20,
        'name': 'Sergio Romero',
        'nationality': 'Argentina',
        'position': 'Keeper'
      }]
    })
  })

  it('should handle ERROR_FETCHING_PLAYERS', () => {
    expect(players({isFetching: true}, {
      type: actionTypes.ERROR_FETCHING_PLAYERS,
      players: {
        message : 'Error fetching players'
      }
    })).toEqual({
      errorMessage: 'Error fetching players',
      isFetching: false
    })
  })
})