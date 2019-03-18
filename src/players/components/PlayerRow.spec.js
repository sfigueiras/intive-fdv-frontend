import React from 'react'
import { shallow } from 'enzyme'
import PlayerRow from './PlayerRow'

describe('<PlayerRow>', function () {
  const age = 25, name = 'Romelu Lukaku', position = 'Centre-Forward'
  it('should render without throwing an error', function () {
    const wrapper = shallow(
      <PlayerRow
        age={age}
        name={name}
        position={position}/>
    )
    expect(wrapper)
  })

  it('should render a .table-row element with 3 attributes', () => {
    const wrapper = shallow(
      <PlayerRow
        age={age}
        name={name}
        position={position}/>
    )

    expect(wrapper.find('.player-row')).toBeTruthy()
    expect(wrapper.find('.player-row').children().length).toEqual(3)
  })

  it('should render all props', () => {
    const wrapper = shallow(
      <PlayerRow
        age={age}
        name={name}
        position={position}/>
    )

    const html = wrapper.html()
    expect(html.includes(age)).toBeTruthy()
    expect(html.includes(name)).toBeTruthy()
    expect(html.includes(position)).toBeTruthy()
  })
})