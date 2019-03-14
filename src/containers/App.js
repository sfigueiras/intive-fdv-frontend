import React, { Component } from 'react'
import logo from '../logo.svg'
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        1
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
    items: []
  }

  return {
    criteria,
    players,
    isFetching
  }
}

export default connect(mapStateToProps)(App)
