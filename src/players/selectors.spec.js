import { getPlayersWithAge, getVisiblePlayers } from './selectors'

describe('player selectors', () => {

  const players = {
    items: [
      {
        'contractUntil': '2022-06-30',
        'dateOfBirth': '1993-05-13',
        'jerseyNumber': 9,
        'name': 'Romelu Lukaku',
        'nationality': 'Belgium',
        'position': 'Centre-Forward'
      },
      {
        'contractUntil': '2019-06-30',
        'dateOfBirth': '1990-11-07',
        'jerseyNumber': 1,
        'name': 'David de Gea',
        'nationality': 'Spain',
        'position': 'Keeper'
      }
    ]
  }

  describe('getPlayersWithAge', () => {
    it('should return players with calculated age', () => {
      expect(getPlayersWithAge({players})).toEqual([
        {
          'contractUntil': '2022-06-30',
          'age': 25,
          'dateOfBirth': '1993-05-13',
          'jerseyNumber': 9,
          'name': 'Romelu Lukaku',
          'nationality': 'Belgium',
          'position': 'Centre-Forward'
        },
        {
          'contractUntil': '2019-06-30',
          'age': 28,
          'dateOfBirth': '1990-11-07',
          'jerseyNumber': 1,
          'name': 'David de Gea',
          'nationality': 'Spain',
          'position': 'Keeper'
        }
      ])
    })
  })

  describe('getVisiblePlayers', () => {
    it('should return players that match the given criteria', () => {
      const playerFilters = {
        name: 'romelu',
        position: '',
        age: ''
      }

      expect(getVisiblePlayers({players, playerFilters})).toEqual([
        {
          'contractUntil': '2022-06-30',
          'age': 25,
          'dateOfBirth': '1993-05-13',
          'jerseyNumber': 9,
          'name': 'Romelu Lukaku',
          'nationality': 'Belgium',
          'position': 'Centre-Forward'
        }
      ])
    })

    it('should return all players if no criteria given', () => {
      const playerFilters = {
        name: '',
        position: '',
        age: ''
      }

      expect(getVisiblePlayers({players, playerFilters})).toEqual([
        {
          'contractUntil': '2022-06-30',
          'age': 25,
          'dateOfBirth': '1993-05-13',
          'jerseyNumber': 9,
          'name': 'Romelu Lukaku',
          'nationality': 'Belgium',
          'position': 'Centre-Forward'
        },
        {
          'contractUntil': '2019-06-30',
          'age': 28,
          'dateOfBirth': '1990-11-07',
          'jerseyNumber': 1,
          'name': 'David de Gea',
          'nationality': 'Spain',
          'position': 'Keeper'
        }
      ])
    })

    it('should\'t return any players if non match the criteria', () => {
      const playerFilters = {
        name: '',
        position: '',
        age: 40
      }

      expect(getVisiblePlayers({players, playerFilters})).toEqual([])
    })
  })
})