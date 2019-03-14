import React, { Component } from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import { fetchPlayersIfNeeded } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchPlayersIfNeeded({}))
  }

  render () {
    return (
      <div className="App">
        <header>
          <h1>Football Player Finder</h1>
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { criteria, visiblePlayers } = state
  const {
    isFetching,
    items: players
  } = visiblePlayers || {
    // TODO: Why set fetch to true here? Check what happens if false
    isFetching: true,
    criteria: {},
    items: []
  }

  return {
    criteria,
    players,
    isFetching
  }
}

export default connect(mapStateToProps)(App)
