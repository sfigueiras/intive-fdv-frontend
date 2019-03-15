import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateFilters } from '../actions'

class PlayersTableFilters extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      position: '',
      age: ''
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.dispatch(updateFilters(this.state))
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div id="playersTableFilters">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange.bind(this)}/>
          <select name="position" value={this.state.position} onChange={this.handleInputChange.bind(this)}></select>
          <input name="number" type="number" value={this.state.age} onChange={this.handleInputChange.bind(this)}/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

PlayersTableFilters.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(PlayersTableFilters)