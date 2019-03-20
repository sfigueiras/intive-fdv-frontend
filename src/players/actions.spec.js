import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions'
import * as actionTypes from './actionTypes'
import fetchMock from 'fetch-mock'
import config from '../config'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should create an action to request players', () => {
    const expectedAction = {
      type: actionTypes.REQUEST_PLAYERS
    }

    expect(actions.requestPlayers()).toEqual(expectedAction)
  })

  it('should create an action to receive players', () => {
    const players = []

    const expectedAction = {
      type: actionTypes.RECEIVE_PLAYERS,
      players
    }

    expect(actions.receivePlayers(players)).toEqual(expectedAction)
  })

  it('should create an action to update filters', () => {
    const criteria = {
      name: '',
      position: '',
      age: ''
    }

    const expectedAction = {
      type: actionTypes.UPDATE_FILTERS,
      ...criteria
    }

    expect(actions.updateFilters(criteria)).toEqual(expectedAction)
  })

  describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })

    it('creates RECEIVE_PLAYERS when fetching players has been done ', () => {
      fetchMock.getOnce(config.API_ENDPOINT, {
        body: [],
        headers: { 'content-type': 'application-json' }
      })

      const expectedActions = [
        { type: actionTypes.REQUEST_PLAYERS },
        { type: actionTypes.RECEIVE_PLAYERS, players: [] }
      ]

      const store = mockStore({})

      return store.dispatch(actions.fetchPlayers()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    it('creates ERROR_FETCHING_PLAYERS when fetching players fails', () => {
      fetchMock.getOnce(config.API_ENDPOINT, 500)

      const expectedActions = [
        { type: actionTypes.REQUEST_PLAYERS },
        { type: actionTypes.ERROR_FETCHING_PLAYERS, players: { message: 'There was an error fetching players' } }
      ]

      const store = mockStore({})

      return store.dispatch(actions.fetchPlayers()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})