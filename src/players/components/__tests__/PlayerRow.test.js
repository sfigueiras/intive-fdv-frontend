import React from 'react'
import { shallow } from 'enzyme'
import PlayerRow from '../PlayerRow'

describe('<PlayerRow>', function () {
  it('should render without throwing an error', function () {
    expect(shallow(
      <PlayerRow
        age={25}
        name={'Romelu Lukaku'}
        position={'Centre-Forward'}/>
      )
    )
  })
})