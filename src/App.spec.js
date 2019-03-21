import React from 'react'
import App from './App'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import * as reducer from './players/reducers'
import setupIntegrationTests from './utils/setupIntegrationTests'
import config from './config'
import nock from 'nock'
import waitUntil from 'async-wait-until'
import * as actionTypes from './players/actionTypes'

const initialState = {
  players: {},
  playerFilters: {
    name: '',
    age: '',
    position: ''
  }
}

const players = [
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
]

let store, dispatchSpy

describe('<App>', () => {
  beforeAll(() => {
    nock.disableNetConnect()
    nock(config.API_BASE)
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get(config.API_ENDPOINT_PATH)
      .reply(200, players)
  })

  beforeEach(() => {
    ({ store, dispatchSpy } = setupIntegrationTests(reducer))
  })

  it('should render without crashing', async (done) => {
    const screen = mount(<Provider store={store}><App/></Provider>)
    expect(screen.find('tr.player-row')).toHaveLength(0)

    await waitUntil(() => Object.keys(screen.state().storeState.players).length > 0)

    screen.update()

    expect(screen.find('tr.player-row')).toHaveLength(2)

    enterNameFilter('romelu', screen)

    submitFilters(screen)

    expect(
      dispatchSpy
    ).toHaveBeenLastCalledWith(
      { type: actionTypes.UPDATE_FILTERS, name: 'romelu', age: '', position: '' }
    )

    screen.update()

    expect(screen.find('tr.player-row')).toHaveLength(1)

    clearFilters(screen)

    screen.update()

    expect(screen.find('tr.player-row')).toHaveLength(2)

    enterNameFilter('nomatch', screen)

    submitFilters(screen)

    screen.update()

    expect(screen.find('tr.player-row')).toHaveLength(0)

    done()
  })

  function submitFilters (screen) {
    screen
      .find('button#update-filters')
      .simulate('click')
  }

  function enterNameFilter (name, screen) {
    screen
      .find('input[name="name"]')
      .simulate('change', { target: { value: name, name: 'name' } })
  }

  function clearFilters (screen) {
    screen
      .find('button#clear-filters')
      .simulate('click')
  }
})