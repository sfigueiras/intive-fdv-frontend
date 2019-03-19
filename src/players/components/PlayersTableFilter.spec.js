import React from 'react'
import PlayersTableFilters from './PlayersTableFilters'
import { mount } from 'enzyme'

describe('<PlayersTableFilter>', () => {
  it('should render without errors', () => {
    const wrapper = mount(
      <PlayersTableFilters
        onFiltersSubmitted={jest.fn()}
      />
    )

    expect(wrapper)
  })

  it('should clear inputs when clear button clicked', () => {
    const onSubmit = jest.fn()
    const wrapper = mount(
      <PlayersTableFilters
        onFiltersSubmitted={onSubmit}
      />
    )

    wrapper
      .find('input[name="name"]')
      .simulate('change', { target: { value: 'romero', name: 'name' } })

    wrapper
      .find('input[name="age"]')
      .simulate('change', { target: { value: 30, name: 'age' } })

    wrapper
      .find('button#clear-filters')
      .simulate('click')

    expect(onSubmit).toHaveBeenCalledWith({
      name: '',
      position: '',
      age: ''
    })
  })

  it('should call onFiltersSubmitted when filters side effects detected', () => {
    const onSubmit = jest.fn()
    const wrapper = mount(
      <PlayersTableFilters
        onFiltersSubmitted={onSubmit}
      />
    )

    wrapper
      .find('input[name="name"]')
      .simulate('change', { target: { value: 'romero', name: 'name' } })

    wrapper
      .find('button#clear-filters')
      .simulate('click')

    expect(onSubmit).toHaveBeenCalled()
  })

  it('should call onFiltersSubmitted when user hits enter', () => {
    const onSubmit = jest.fn()
    const wrapper = mount(
      <PlayersTableFilters
        onFiltersSubmitted={onSubmit}
      />
    )

    wrapper.find('input').first().simulate('keypress', { key: 'Enter' })
    expect(onSubmit).toHaveBeenCalled()
  })

  it('should call onFiltersSubmitted passing updated filters when search button clicked', () => {
    const onSubmit = jest.fn()
    const wrapper = mount(
      <PlayersTableFilters
        onFiltersSubmitted={onSubmit}
      />
    )

    wrapper
      .find('input[name="name"]')
      .simulate('change', { target: { value: 'romero', name: 'name' } })

    wrapper
      .find('button#update-filters')
      .simulate('click')

    expect(onSubmit).toHaveBeenCalledWith({
      name: 'romero',
      position: '',
      age: ''
    })
  })
})