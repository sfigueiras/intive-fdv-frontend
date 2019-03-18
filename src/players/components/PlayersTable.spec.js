import React from 'react'
import { render, shallow, mount } from 'enzyme'
import PlayersTable from './PlayersTable'

describe('<PlayersTable>', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<PlayersTable players={[]}/>))
  })

  it('should render a placeholder if players is empty', () => {
    const wrapper = render(<PlayersTable players={[]}/>)
    expect(wrapper.text()).toEqual('No players available')
  })

  it('should render a list of <PlayerRow>s if players not empty', () => {
    const players = [
      {
        'name': 'Romelu Lukaku',
        'position': 'Centre-Forward',
        'age': 26
      }, {
        'name': 'David de Gea',
        'position': 'Keeper',
        'age': 29
      }
    ]

    const wrapper = mount(<PlayersTable players={players}/>)
    expect(wrapper.find('tr.player-row')).toHaveLength(players.length)
  })
})