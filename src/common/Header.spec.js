import React from 'react'
import Header from './Header'
import { mount } from 'enzyme'

describe('<Header>', () => {
  it('should display the title passed as prop', () => {
    const wrapper = mount(<Header title={'Fulbol Finder'}/>)
    expect(wrapper.find('#header-title').text()).toEqual('Fulbol Finder')
  })
})