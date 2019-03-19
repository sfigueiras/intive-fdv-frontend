import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import PlayersContainer from './PlayersContainer'
import { Provider } from 'react-redux'

const initialState = {
  players: [],
  playerFilters: {
    name: '',
    position: '',
    age: ''
  },
  dispatch: () => {},
  isFetching: true
}

const mockStore = configureStore()
let wrapper, store, mocks

beforeEach(() => {
  store = mockStore(initialState)
  mocks = {
    fetchPlayersIfNeeded: jest.fn().mockImplementation(() => {})
  }
  //wrapper = mount(<Provider store={store}><PlayersContainer/></Provider>)
})

describe('<PlayersContainer>', () => {
  it('should render without throwing an error', () => {
  })

  it('should call fetchPlayersIfNeeded', () => {
  })

  it('should render a <PlayerTableFilter> and <PlayersTable> element', () => {

  })
})