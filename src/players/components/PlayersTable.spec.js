import React from 'react'
import { render, shallow } from 'enzyme'
import PlayersTable from './PlayersTable'

describe('<PlayersTable>', () => {
  const players = () => ([
    {
      'name': 'Romelu Lukaku',
      'position': 'Centre-Forward',
      'age': 26
    }, {
      'name': 'David de Gea',
      'position': 'Keeper',
      'age': 29
    }
  ])

  it('should render without throwing an error', () => {
    expect(shallow(<PlayersTable players={[]} isFetching={false}/>))
  })

  it('should render a placeholder if players is empty', () => {
    const wrapper = render(<PlayersTable players={[]} isFetching={false}/>)
    expect(wrapper.text()).toEqual('No players matched your search :(')
  })

  it('should render a list of <PlayerRow>s if players not empty', () => {
    const wrapper = render(<PlayersTable players={players()} isFetching={false}/>)
    expect(wrapper.find('tr.player-row')).toHaveLength(players().length)
  })

  it('should display a loader while isFetching is true', () => {
    const wrapper = render(<PlayersTable players={players()} isFetching={true}/>)

    expect(wrapper.find('players-loading')).toBeDefined()
  })

  it('should display an error message when defined', () => {
    const errorMessage = 'There was an error fetching players'
    const wrapper = render(
      <PlayersTable
        players={[]}
        isFetching={false}
        errorMessage={errorMessage}/>
    )

    expect(wrapper.text()).toEqual(errorMessage)
  })
})