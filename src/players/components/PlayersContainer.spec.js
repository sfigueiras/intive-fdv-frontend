import React from 'react'
import configureStore from 'redux-mock-store'
import PlayersContainer from './PlayersContainer'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const initialState = {
  players: {},
  playerFilters: {
    name: '',
    age: '',
    position: ''
  },
  dispatch: () => {}
}

const mockStore = configureStore([thunk])
let wrapper, store

beforeEach(() => {
  store = mockStore(initialState)
  wrapper = mount(<Provider store={store}><PlayersContainer/></Provider>)
})

describe('<PlayersContainer>', () => {
  it('should render without throwing an error', () => {
    expect(wrapper)
  })
})